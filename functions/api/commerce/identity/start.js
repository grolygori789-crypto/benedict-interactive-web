import { startIdentityChallenge, PRO_PRODUCT_CODE } from '../../../_lib/commerce.js';
import { assertBrowserOrigin, cleanLocale, errorResponse, jsonResponse, normalizeEmail, readJson, requireCommerceRuntimeEnabled, responseFromError } from '../../../_lib/http.js';

export async function onRequestPost(context) {
  try {
    requireCommerceRuntimeEnabled(context.env);
    assertBrowserOrigin(context.request, context.env);
    const payload = await readJson(context.request, 4096);
    const email = normalizeEmail(payload?.email);
    if (!email) return errorResponse(400, 'valid_email_required');
    const purpose = String(payload?.purpose || '').trim();
    const productCode = String(payload?.productCode || PRO_PRODUCT_CODE).trim();
    if (productCode !== PRO_PRODUCT_CODE) return errorResponse(400, 'unsupported_product');
    const result = await startIdentityChallenge(context.env, {
      purpose,
      productCode,
      email,
      installationId: String(payload?.installationId || ''),
      locale: cleanLocale(payload?.locale),
    });
    return jsonResponse({ ok: true, ...result }, 201);
  } catch (error) { return responseFromError(error); }
}

export function onRequest() { return errorResponse(405, 'method_not_allowed'); }
