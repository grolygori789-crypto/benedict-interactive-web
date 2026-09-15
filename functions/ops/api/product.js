import { getProduct, PRO_PRODUCT_CODE, writeAdminAudit } from '../../_lib/commerce.js';
import { errorResponse, jsonResponse, readJson, requireCommerceDb, responseFromError } from '../../_lib/http.js';

export async function onRequestPost(context) {
  try {
    const db = requireCommerceDb(context.env);
    const payload = await readJson(context.request, 4096);
    const active = payload?.active === true;
    const unitAmount = payload?.unitAmount === null || payload?.unitAmount === ''
      ? null
      : Number(payload?.unitAmount);
    if (unitAmount !== null && (!Number.isInteger(unitAmount) || unitAmount < 100 || unitAmount > 100_000_000)) {
      return errorResponse(400, 'invalid_unit_amount');
    }
    if (active && !unitAmount) return errorResponse(409, 'price_required_before_activation');
    const before = await getProduct(db, PRO_PRODUCT_CODE);
    if (!before) return errorResponse(404, 'product_not_found');
    const now = Date.now();
    await db.prepare(`
      UPDATE commerce_products SET unit_amount = ?2, active = ?3, updated_at = ?4
      WHERE product_code = ?1
    `).bind(PRO_PRODUCT_CODE, unitAmount, active ? 1 : 0, now).run();
    const after = await getProduct(db, PRO_PRODUCT_CODE);
    await writeAdminAudit(db, {
      actor: context.data.admin.email,
      action: 'update_product_sale_config',
      entityType: 'product',
      entityId: PRO_PRODUCT_CODE,
      reason: String(payload?.reason || 'Commerce configuration update'),
      before,
      after,
    });
    return jsonResponse({ ok: true, product: after });
  } catch (error) {
    return responseFromError(error);
  }
}
