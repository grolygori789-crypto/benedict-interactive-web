import { checkDeviceEntitlementV2 } from '../../../_lib/commerce.js';
import { errorResponse, jsonResponse, readJson, requireCommerceRuntimeEnabled, responseFromError } from '../../../_lib/http.js';

export async function onRequestPost(context) {
  try {
    requireCommerceRuntimeEnabled(context.env);
    const payload = await readJson(context.request, 4096);
    const result = await checkDeviceEntitlementV2(context.env, {
      installationId: String(payload?.installationId || '').trim(),
      deviceCredential: String(payload?.deviceCredential || '').trim(),
    });
    return jsonResponse({ ok: true, ...result });
  } catch (error) { return responseFromError(error); }
}

export function onRequest() { return errorResponse(405, 'method_not_allowed'); }
