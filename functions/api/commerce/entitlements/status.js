import { checkDeviceEntitlement } from '../../../_lib/commerce.js';
import { errorResponse, jsonResponse, readJson, requireCommerceDb, responseFromError } from '../../../_lib/http.js';

function valid(value, min = 16, max = 256) {
  return typeof value === 'string' && value.length >= min && value.length <= max && /^[A-Za-z0-9._:-]+$/.test(value);
}

export async function onRequestPost(context) {
  try {
    const db = requireCommerceDb(context.env);
    const payload = await readJson(context.request, 4096);
    const entitlementId = String(payload?.entitlementId || '').trim();
    const deviceId = String(payload?.deviceId || '').trim();
    const deviceSecret = String(payload?.deviceSecret || '').trim();
    if (!/^ent_[A-Za-z0-9_-]{16,}$/.test(entitlementId)) return errorResponse(400, 'invalid_entitlement_id');
    if (!valid(deviceId)) return errorResponse(400, 'invalid_device_id');
    if (!valid(deviceSecret, 32)) return errorResponse(400, 'invalid_device_secret');
    const entitlement = await checkDeviceEntitlement(db, { entitlementId, deviceId, deviceSecret });
    return jsonResponse({ ok: true, entitlement });
  } catch (error) {
    return responseFromError(error);
  }
}

export function onRequest() {
  return errorResponse(405, 'method_not_allowed');
}
