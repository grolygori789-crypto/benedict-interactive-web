import { jsonResponse, requireCommerceDb, responseFromError } from '../../_lib/http.js';

export async function onRequestGet(context) {
  try {
    const db = requireCommerceDb(context.env);
    const [product, orderCounts, entitlementCounts, orders, entitlements, webhooks, audit] = await Promise.all([
      db.prepare(`SELECT * FROM commerce_products WHERE product_code = 'bearagnostic_pro_lifetime'`).first(),
      db.prepare(`SELECT status, COUNT(*) AS count FROM commerce_orders GROUP BY status ORDER BY status`).all(),
      db.prepare(`SELECT status, COUNT(*) AS count FROM commerce_entitlements GROUP BY status ORDER BY status`).all(),
      db.prepare(`
        SELECT id, product_code, recovery_email, locale, status, amount, currency,
               provider_checkout_id, provider_payment_id, paid_at, fulfilled_at, created_at, updated_at
        FROM commerce_orders ORDER BY created_at DESC LIMIT 60
      `).all(),
      db.prepare(`
        SELECT id, product_code, order_id, status, source, issued_at, revoked_at, updated_at
        FROM commerce_entitlements ORDER BY issued_at DESC LIMIT 60
      `).all(),
      db.prepare(`
        SELECT event_id, event_type, status, order_id, error_code, received_at, processed_at
        FROM commerce_webhook_events ORDER BY received_at DESC LIMIT 40
      `).all(),
      db.prepare(`
        SELECT actor_email, action, entity_type, entity_id, reason, created_at
        FROM commerce_admin_audit ORDER BY created_at DESC LIMIT 40
      `).all(),
    ]);

    return jsonResponse({
      ok: true,
      admin: { email: context.data?.admin?.email || null },
      product,
      orderCounts: orderCounts.results || [],
      entitlementCounts: entitlementCounts.results || [],
      orders: orders.results || [],
      entitlements: entitlements.results || [],
      webhooks: webhooks.results || [],
      audit: audit.results || [],
      publicCommerceEnabled: String(context.env?.BENEDICT_COMMERCE_PUBLIC_ENABLED || '').toLowerCase() === 'true',
    });
  } catch (error) {
    return responseFromError(error);
  }
}
