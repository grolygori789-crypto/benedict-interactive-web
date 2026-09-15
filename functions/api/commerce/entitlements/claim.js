import { authorizeOrderToken, claimEntitlement } from '../../../_lib/commerce.js';
import { bearerToken, errorResponse, jsonResponse, readJson, requireCommerceDb, responseFromError } from '../../../_lib/http.js';

function validDeviceValue(value, min = 16, max = 200) {
  return typeof value === 'string' && value.length >= min && value.length <= max && /^[A-Za-z0-9._:-]+$/.test(value);
}

export async function onRequestPost(context) {
  try {
    const db = requireCommerceDb(context.env);
    const payload = await readJson(context.request, 4096);
    const orderId = String(payload?.orderId || '').trim();
    const deviceId = String(payload?.deviceId || '').trim();
    const deviceSecret = String(payload?.deviceSecret || '').trim();
    if (!/^ord_[A-Za-z0-9_-]{16,}$/.test(orderId)) return errorResponse(400, 'invalid_order_id');
    if (!validDeviceValue(deviceId)) return errorResponse(400, 'invalid_device_id');
    if (!validDeviceValue(deviceSecret, 32, 256)) return errorResponse(400, 'invalid_device_secret');
    const order = await authorizeOrderToken(db, orderId, bearerToken(context.request));
    const entitlement = await claimEntitlement(db, { order, deviceId, deviceSecret });
    return jsonResponse({
      ok: true,
      entitlementId: entitlement.id,
      productCode: entitlement.product_code,
      status: entitlement.status,
      isPro: entitlement.status === 'active',
    });
  } catch (error) {
    return responseFromError(error);
  }
}

export function onRequest() {
  return errorResponse(405, 'method_not_allowed');
}
