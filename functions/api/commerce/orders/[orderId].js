import { authorizeOrderToken } from '../../../_lib/commerce.js';
import { bearerToken, errorResponse, jsonResponse, requireCommerceDb, responseFromError } from '../../../_lib/http.js';

export async function onRequestGet(context) {
  try {
    const db = requireCommerceDb(context.env);
    const orderId = String(context.params?.orderId || '').trim();
    if (!/^ord_[A-Za-z0-9_-]{16,}$/.test(orderId)) return errorResponse(404, 'order_not_found');
    const order = await authorizeOrderToken(db, orderId, bearerToken(context.request));
    const entitlement = await db.prepare(`
      SELECT id, product_code, status, issued_at, updated_at
      FROM commerce_entitlements WHERE order_id = ?1
    `).bind(order.id).first();
    return jsonResponse({
      ok: true,
      order: {
        id: order.id,
        productCode: order.product_code,
        status: order.status,
        amount: order.amount,
        currency: order.currency,
        paidAt: order.paid_at,
        fulfilledAt: order.fulfilled_at,
        canClaim: order.status === 'fulfilled' && entitlement?.status === 'active',
      },
      entitlement: entitlement ? {
        id: entitlement.id,
        productCode: entitlement.product_code,
        status: entitlement.status,
        isPro: entitlement.status === 'active',
        issuedAt: entitlement.issued_at,
        updatedAt: entitlement.updated_at,
      } : null,
    });
  } catch (error) {
    return responseFromError(error);
  }
}

export function onRequest() {
  return errorResponse(405, 'method_not_allowed');
}
