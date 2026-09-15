import { createPendingOrder, attachCheckout, markCheckoutCreationFailed, PRO_PRODUCT_CODE } from '../../_lib/commerce.js';
import { createStripeCheckoutSession } from '../../_lib/stripe.js';
import {
  assertBrowserOrigin,
  cleanLocale,
  errorResponse,
  jsonResponse,
  normalizeEmail,
  readJson,
  requirePublicCommerceEnabled,
  responseFromError,
} from '../../_lib/http.js';

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    requirePublicCommerceEnabled(env);
    assertBrowserOrigin(request, env);
    const payload = await readJson(request, 4096);
    const email = normalizeEmail(payload?.email);
    if (!email) return errorResponse(400, 'valid_email_required');
    const productCode = String(payload?.productCode || PRO_PRODUCT_CODE).trim();
    if (productCode !== PRO_PRODUCT_CODE) return errorResponse(400, 'unsupported_product');
    const locale = cleanLocale(payload?.locale);

    const created = await createPendingOrder(env, { email, locale, productCode });
    let session;
    try {
      session = await createStripeCheckoutSession(env, created.order, created.product);
      if (!session?.id || !session?.url) throw new Error('Checkout session missing id/url');
      await attachCheckout(env, created.order.id, session);
    } catch (error) {
      await markCheckoutCreationFailed(env, created.order.id).catch(() => undefined);
      throw error;
    }

    return jsonResponse({
      ok: true,
      orderId: created.order.id,
      orderToken: created.publicToken,
      productCode: created.order.product_code,
      amount: created.order.amount,
      currency: created.order.currency,
      checkoutUrl: session.url,
      expiresAt: Number.isFinite(session.expires_at) ? session.expires_at * 1000 : null,
    }, 201);
  } catch (error) {
    return responseFromError(error);
  }
}

export function onRequest() {
  return errorResponse(405, 'method_not_allowed');
}
