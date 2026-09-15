import { jsonResponse, requireCommerceDb, responseFromError } from '../../_lib/http.js';

export async function onRequestGet(context) {
  try {
    const db = requireCommerceDb(context.env);
    const [product, payments, entitlements, events, anomalies, audit] = await Promise.all([
      db.prepare(`SELECT * FROM commerce_products WHERE product_code = 'bearagnostic_pro_lifetime'`).first(),
      db.prepare(`SELECT id, provider_transaction_id, product_code, amount_minor, currency, status, paid_at, created_at FROM commerce_payments_v2 ORDER BY created_at DESC LIMIT 60`).all(),
      db.prepare(`SELECT id, product_code, status, claim_state, source, issued_at, revoked_at, updated_at FROM commerce_entitlements_v2 ORDER BY issued_at DESC LIMIT 60`).all(),
      db.prepare(`SELECT message_id, transaction_id, event_type, processing_status, anomaly_code, received_at, processed_at FROM commerce_provider_events_v2 ORDER BY received_at DESC LIMIT 40`).all(),
      db.prepare(`SELECT id, code, entity_type, entity_id, status, created_at FROM commerce_anomalies ORDER BY created_at DESC LIMIT 40`).all(),
      db.prepare(`SELECT actor_email, action, entity_type, entity_id, reason, created_at FROM commerce_admin_audit ORDER BY created_at DESC LIMIT 40`).all(),
    ]);
    return jsonResponse({
      ok: true,
      admin: { email: context.data?.admin?.email || null },
      product,
      payments: payments.results || [], entitlements: entitlements.results || [],
      webhooks: events.results || [], anomalies: anomalies.results || [], audit: audit.results || [],
      publicCommerceEnabled: String(context.env?.BENEDICT_COMMERCE_PUBLIC_ENABLED || '').toLowerCase() === 'true',
      testMode: String(context.env?.BENEDICT_COMMERCE_TEST_MODE || '').toLowerCase() === 'true',
      provider: 'kofi',
    });
  } catch (error) { return responseFromError(error); }
}
