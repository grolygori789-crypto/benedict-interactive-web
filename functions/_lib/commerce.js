import { newId, randomSecret, sha256Hex } from './crypto.js';
import { HttpError, nowMs, requireCommerceDb } from './http.js';

export const PRO_PRODUCT_CODE = 'bearagnostic_pro_lifetime';

export async function getProduct(db, productCode = PRO_PRODUCT_CODE) {
  return db.prepare(`
    SELECT product_code, display_name, currency, unit_amount, active, purchase_model, updated_at
    FROM commerce_products
    WHERE product_code = ?1
  `).bind(productCode).first();
}

export async function createPendingOrder(env, { email, locale, productCode = PRO_PRODUCT_CODE }) {
  const db = requireCommerceDb(env);
  const product = await getProduct(db, productCode);
  if (!product) throw new HttpError(404, 'product_not_found');
  if (!product.active || !Number.isInteger(product.unit_amount) || product.unit_amount <= 0) {
    throw new HttpError(409, 'product_not_sellable', 'This product is not available for purchase yet.');
  }
  if (String(product.currency).toLowerCase() !== 'thb') throw new HttpError(503, 'product_currency_invalid');
  const id = newId('ord');
  const publicToken = randomSecret(32);
  const publicTokenHash = await sha256Hex(publicToken);
  const now = nowMs();
  await db.prepare(`
    INSERT INTO commerce_orders (
      id, public_token_hash, product_code, recovery_email, locale, status,
      amount, currency, provider, created_at, updated_at
    ) VALUES (?1, ?2, ?3, ?4, ?5, 'created', ?6, ?7, 'stripe', ?8, ?8)
  `).bind(
    id,
    publicTokenHash,
    product.product_code,
    email,
    locale,
    product.unit_amount,
    product.currency,
    now,
  ).run();
  return {
    order: {
      id,
      product_code: product.product_code,
      recovery_email: email,
      locale,
      amount: product.unit_amount,
      currency: product.currency,
    },
    product,
    publicToken,
  };
}

export async function attachCheckout(env, orderId, session) {
  const db = requireCommerceDb(env);
  const now = nowMs();
  const expiresAt = Number.isFinite(session?.expires_at) ? session.expires_at * 1000 : null;
  await db.prepare(`
    UPDATE commerce_orders
    SET status = 'payment_pending', provider_checkout_id = ?2,
        checkout_expires_at = ?3, updated_at = ?4
    WHERE id = ?1 AND status IN ('created', 'payment_pending')
  `).bind(orderId, session.id, expiresAt, now).run();
}

export async function markCheckoutCreationFailed(env, orderId) {
  const db = requireCommerceDb(env);
  await db.prepare(`
    UPDATE commerce_orders SET status = 'checkout_failed', updated_at = ?2
    WHERE id = ?1 AND status = 'created'
  `).bind(orderId, nowMs()).run();
}

export async function getOrderById(db, orderId) {
  return db.prepare(`SELECT * FROM commerce_orders WHERE id = ?1`).bind(orderId).first();
}

export async function authorizeOrderToken(db, orderId, token) {
  if (!token || token.length < 32 || token.length > 200) throw new HttpError(401, 'order_token_required');
  const hash = await sha256Hex(token);
  const order = await db.prepare(`
    SELECT * FROM commerce_orders WHERE id = ?1 AND public_token_hash = ?2
  `).bind(orderId, hash).first();
  if (!order) throw new HttpError(404, 'order_not_found');
  return order;
}

export function entitlementIdForOrder(orderId) {
  return `ent_${String(orderId).replace(/^ord_/, '')}`;
}

export async function fulfillPaidOrder(env, payment) {
  const db = requireCommerceDb(env);
  const order = await getOrderById(db, payment.orderId);
  if (!order) throw new HttpError(404, 'order_not_found');
  if (order.status === 'refunded') throw new HttpError(409, 'order_already_refunded');
  if (order.provider_checkout_id && payment.checkoutId && order.provider_checkout_id !== payment.checkoutId) {
    throw new HttpError(409, 'checkout_mismatch');
  }
  if (Number(payment.amount) !== Number(order.amount)) throw new HttpError(409, 'payment_amount_mismatch');
  if (String(payment.currency || '').toLowerCase() !== String(order.currency || '').toLowerCase()) {
    throw new HttpError(409, 'payment_currency_mismatch');
  }
  const now = nowMs();
  const entitlementId = entitlementIdForOrder(order.id);
  const paymentId = payment.paymentIntentId ? `pay_${payment.paymentIntentId}` : newId('pay');
  const statements = [
    db.prepare(`
      INSERT INTO commerce_payments (
        id, order_id, provider, provider_payment_id, provider_checkout_id,
        amount, currency, status, last_event_id, verified_at, created_at, updated_at
      ) VALUES (?1, ?2, 'stripe', ?3, ?4, ?5, ?6, 'succeeded', ?7, ?8, ?8, ?8)
      ON CONFLICT(provider_payment_id) DO UPDATE SET
        provider_checkout_id = COALESCE(excluded.provider_checkout_id, commerce_payments.provider_checkout_id),
        status = 'succeeded', last_event_id = excluded.last_event_id,
        verified_at = excluded.verified_at, updated_at = excluded.updated_at
    `).bind(
      paymentId,
      order.id,
      payment.paymentIntentId,
      payment.checkoutId || null,
      order.amount,
      order.currency,
      payment.eventId || null,
      now,
    ),
    db.prepare(`
      UPDATE commerce_orders
      SET status = 'fulfilled', provider_checkout_id = COALESCE(?2, provider_checkout_id),
          provider_payment_id = COALESCE(?3, provider_payment_id), paid_at = COALESCE(paid_at, ?4),
          fulfilled_at = COALESCE(fulfilled_at, ?4), updated_at = ?4
      WHERE id = ?1 AND status NOT IN ('refunded', 'cancelled')
    `).bind(order.id, payment.checkoutId || null, payment.paymentIntentId || null, now),
    db.prepare(`
      INSERT INTO commerce_entitlements (
        id, product_code, order_id, status, source, issued_at, updated_at
      ) VALUES (?1, ?2, ?3, 'active', 'stripe', ?4, ?4)
      ON CONFLICT(order_id) DO NOTHING
    `).bind(entitlementId, order.product_code, order.id, now),
  ];
  await db.batch(statements);
  return db.prepare(`SELECT * FROM commerce_entitlements WHERE order_id = ?1`).bind(order.id).first();
}

export async function recordWebhookStart(db, event) {
  const now = nowMs();
  await db.prepare(`
    INSERT INTO commerce_webhook_events (provider, event_id, event_type, status, received_at)
    VALUES ('stripe', ?1, ?2, 'processing', ?3)
    ON CONFLICT(provider, event_id) DO NOTHING
  `).bind(event.id, event.type, now).run();
  const row = await db.prepare(`
    SELECT status FROM commerce_webhook_events WHERE provider = 'stripe' AND event_id = ?1
  `).bind(event.id).first();
  return row?.status === 'processed' ? 'processed' : 'process';
}

export async function finishWebhook(db, eventId, { orderId = null, errorCode = null } = {}) {
  const status = errorCode ? 'error' : 'processed';
  await db.prepare(`
    UPDATE commerce_webhook_events
    SET status = ?2, order_id = COALESCE(?3, order_id), error_code = ?4,
        processed_at = ?5
    WHERE provider = 'stripe' AND event_id = ?1
  `).bind(eventId, status, orderId, errorCode, nowMs()).run();
}

export async function markOrderExpired(db, orderId) {
  await db.prepare(`
    UPDATE commerce_orders SET status = 'expired', updated_at = ?2
    WHERE id = ?1 AND status IN ('created', 'payment_pending', 'checkout_failed')
  `).bind(orderId, nowMs()).run();
}

export async function markPaymentFailed(db, orderId, paymentIntentId, eventId) {
  const order = await getOrderById(db, orderId);
  if (!order || ['fulfilled', 'refunded'].includes(order.status)) return;
  const now = nowMs();
  await db.batch([
    db.prepare(`
      INSERT INTO commerce_payments (
        id, order_id, provider, provider_payment_id, amount, currency,
        status, last_event_id, created_at, updated_at
      ) VALUES (?1, ?2, 'stripe', ?3, ?4, ?5, 'failed', ?6, ?7, ?7)
      ON CONFLICT(provider_payment_id) DO UPDATE SET
        status = 'failed', last_event_id = excluded.last_event_id, updated_at = excluded.updated_at
    `).bind(`pay_${paymentIntentId}`, order.id, paymentIntentId, order.amount, order.currency, eventId, now),
    db.prepare(`
      UPDATE commerce_orders SET status = 'failed', provider_payment_id = COALESCE(?2, provider_payment_id), updated_at = ?3
      WHERE id = ?1 AND status NOT IN ('fulfilled', 'refunded')
    `).bind(order.id, paymentIntentId, now),
  ]);
}

export async function markRefundByPaymentIntent(db, paymentIntentId, amountRefunded, eventId) {
  const order = await db.prepare(`
    SELECT * FROM commerce_orders WHERE provider_payment_id = ?1
  `).bind(paymentIntentId).first();
  if (!order) return null;
  const fullRefund = Number(amountRefunded) >= Number(order.amount);
  const now = nowMs();
  const statements = [
    db.prepare(`
      UPDATE commerce_payments
      SET status = ?2, last_event_id = ?3, updated_at = ?4
      WHERE provider_payment_id = ?1
    `).bind(paymentIntentId, fullRefund ? 'refunded' : 'partially_refunded', eventId, now),
  ];
  if (fullRefund) {
    statements.push(
      db.prepare(`UPDATE commerce_orders SET status = 'refunded', updated_at = ?2 WHERE id = ?1`).bind(order.id, now),
      db.prepare(`
        UPDATE commerce_entitlements
        SET status = 'refunded', revoked_at = COALESCE(revoked_at, ?2), updated_at = ?2
        WHERE order_id = ?1 AND status != 'refunded'
      `).bind(order.id, now),
    );
  }
  await db.batch(statements);
  return { orderId: order.id, fullRefund };
}

export async function claimEntitlement(db, { order, deviceId, deviceSecret }) {
  if (order.status !== 'fulfilled') throw new HttpError(409, 'order_not_fulfilled');
  const entitlement = await db.prepare(`
    SELECT * FROM commerce_entitlements WHERE order_id = ?1
  `).bind(order.id).first();
  if (!entitlement || entitlement.status !== 'active') throw new HttpError(409, 'entitlement_not_active');
  const deviceIdHash = await sha256Hex(deviceId);
  const deviceSecretHash = await sha256Hex(deviceSecret);
  const now = nowMs();
  const existing = await db.prepare(`
    SELECT id, device_secret_hash, revoked_at
    FROM commerce_device_bindings
    WHERE entitlement_id = ?1 AND device_id_hash = ?2
  `).bind(entitlement.id, deviceIdHash).first();
  if (existing) {
    if (existing.revoked_at) throw new HttpError(403, 'device_binding_revoked');
    if (existing.device_secret_hash !== deviceSecretHash) throw new HttpError(403, 'device_secret_mismatch');
    await db.prepare(`UPDATE commerce_device_bindings SET last_seen_at = ?2 WHERE id = ?1`).bind(existing.id, now).run();
  } else {
    await db.prepare(`
      INSERT INTO commerce_device_bindings (
        id, entitlement_id, device_id_hash, device_secret_hash, created_at, last_seen_at
      ) VALUES (?1, ?2, ?3, ?4, ?5, ?5)
    `).bind(newId('dev'), entitlement.id, deviceIdHash, deviceSecretHash, now).run();
  }
  return entitlement;
}

export async function checkDeviceEntitlement(db, { entitlementId, deviceId, deviceSecret }) {
  const deviceIdHash = await sha256Hex(deviceId);
  const deviceSecretHash = await sha256Hex(deviceSecret);
  const row = await db.prepare(`
    SELECT e.id, e.product_code, e.status, e.issued_at, e.updated_at,
           b.id AS binding_id, b.revoked_at AS binding_revoked_at
    FROM commerce_entitlements e
    JOIN commerce_device_bindings b ON b.entitlement_id = e.id
    WHERE e.id = ?1 AND b.device_id_hash = ?2 AND b.device_secret_hash = ?3
  `).bind(entitlementId, deviceIdHash, deviceSecretHash).first();
  if (!row || row.binding_revoked_at) throw new HttpError(404, 'entitlement_not_found');
  await db.prepare(`UPDATE commerce_device_bindings SET last_seen_at = ?2 WHERE id = ?1`).bind(row.binding_id, nowMs()).run();
  return {
    entitlementId: row.id,
    productCode: row.product_code,
    status: row.status,
    isPro: row.status === 'active',
    issuedAt: row.issued_at,
    updatedAt: row.updated_at,
  };
}

export async function writeAdminAudit(db, { actor, action, entityType, entityId, reason = '', before = null, after = null }) {
  await db.prepare(`
    INSERT INTO commerce_admin_audit (
      id, actor_email, action, entity_type, entity_id, reason,
      before_json, after_json, created_at
    ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)
  `).bind(
    newId('aud'),
    actor,
    action,
    entityType,
    entityId,
    String(reason || '').slice(0, 500),
    before ? JSON.stringify(before).slice(0, 5000) : null,
    after ? JSON.stringify(after).slice(0, 5000) : null,
    nowMs(),
  ).run();
}
