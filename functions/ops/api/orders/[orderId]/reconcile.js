import { fulfillPaidOrder, getOrderById, writeAdminAudit } from '../../../../_lib/commerce.js';
import { errorResponse, jsonResponse, requireCommerceDb, responseFromError } from '../../../../_lib/http.js';
import { retrieveStripeCheckoutSession } from '../../../../_lib/stripe.js';

export async function onRequestPost(context) {
  try {
    const db = requireCommerceDb(context.env);
    const orderId = String(context.params?.orderId || '').trim();
    const before = await getOrderById(db, orderId);
    if (!before) return errorResponse(404, 'order_not_found');
    if (!before.provider_checkout_id) return errorResponse(409, 'checkout_not_created');
    const session = await retrieveStripeCheckoutSession(context.env, before.provider_checkout_id);
    let entitlement = null;
    if (session.payment_status === 'paid') {
      const paymentIntentId = typeof session.payment_intent === 'string'
        ? session.payment_intent
        : session.payment_intent?.id;
      if (!paymentIntentId) return errorResponse(409, 'stripe_payment_intent_missing');
      entitlement = await fulfillPaidOrder(context.env, {
        orderId: before.id,
        checkoutId: session.id,
        paymentIntentId,
        amount: session.amount_total,
        currency: session.currency,
        eventId: `admin_reconcile_${Date.now()}`,
      });
    }
    const after = await getOrderById(db, orderId);
    await writeAdminAudit(db, {
      actor: context.data.admin.email,
      action: 'reconcile_order_with_stripe',
      entityType: 'order',
      entityId: orderId,
      reason: `Stripe checkout status=${session.status || 'unknown'}, payment_status=${session.payment_status || 'unknown'}`,
      before,
      after,
    });
    return jsonResponse({
      ok: true,
      stripe: { status: session.status, paymentStatus: session.payment_status },
      order: after,
      entitlement,
    });
  } catch (error) {
    return responseFromError(error);
  }
}
