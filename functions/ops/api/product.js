import { getProduct, PRO_PRODUCT_CODE, writeAdminAudit } from '../../_lib/commerce.js';
import { errorResponse, jsonResponse, readJson, requireCommerceDb, responseFromError } from '../../_lib/http.js';

export async function onRequestPost(context) {
  try {
    const db = requireCommerceDb(context.env);
    const payload = await readJson(context.request, 8192);
    const active = payload?.active === true;
    const unitAmount = payload?.unitAmount === null || payload?.unitAmount === '' ? null : Number(payload?.unitAmount);
    const currency = String(payload?.currency || '').trim().toLowerCase();
    const itemCode = String(payload?.providerItemCode || '').trim();
    const shopUrl = String(payload?.providerShopUrl || '').trim();
    if (unitAmount !== null && (!Number.isInteger(unitAmount) || unitAmount < 1 || unitAmount > 100_000_000)) return errorResponse(400, 'invalid_unit_amount');
    if (currency && !/^[a-z]{3}$/.test(currency)) return errorResponse(400, 'invalid_currency');
    if (itemCode && !/^[A-Za-z0-9_-]{3,160}$/.test(itemCode)) return errorResponse(400, 'invalid_provider_item_code');
    if (shopUrl) {
      let parsed;
      try { parsed = new URL(shopUrl); } catch { return errorResponse(400, 'invalid_shop_url'); }
      if (parsed.protocol !== 'https:' || !['ko-fi.com', 'www.ko-fi.com'].includes(parsed.hostname.toLowerCase())) {
        return errorResponse(400, 'invalid_shop_url');
      }
    }
    if (active && (!unitAmount || !currency || !itemCode || !shopUrl)) return errorResponse(409, 'complete_product_config_required');
    const before = await getProduct(db, PRO_PRODUCT_CODE);
    if (!before) return errorResponse(404, 'product_not_found');
    const now = Date.now();
    await db.prepare(`
      UPDATE commerce_products
      SET unit_amount = ?2, currency = ?3, active = ?4, provider = 'kofi',
          provider_item_code = ?5, provider_shop_url = ?6, updated_at = ?7
      WHERE product_code = ?1
    `).bind(PRO_PRODUCT_CODE, unitAmount, currency || before.currency, active ? 1 : 0, itemCode || null, shopUrl || null, now).run();
    const after = await getProduct(db, PRO_PRODUCT_CODE);
    await writeAdminAudit(db, {
      actor: context.data.admin.email,
      action: 'update_kofi_product_config',
      entityType: 'product', entityId: PRO_PRODUCT_CODE,
      reason: String(payload?.reason || 'Ko-fi commerce configuration update'), before, after,
    });
    return jsonResponse({ ok: true, product: after });
  } catch (error) { return responseFromError(error); }
}
