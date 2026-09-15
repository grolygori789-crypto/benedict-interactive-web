import { decryptText, encryptText, hmacSha256Hex, newId, randomSecret, sha256Hex, timingSafeHexEqual } from './crypto.js';
import { createOtpCode, sendOtpEmail } from './email.js';
import { HttpError, nowMs, requireCommerceDb } from './http.js';
import { moneyToMinor } from './kofi.js';

export const PRO_PRODUCT_CODE = 'bearagnostic_pro_lifetime';
export const SERVER_LEASE_MS = 7 * 24 * 60 * 60 * 1000;
const OTP_TTL_MS = 10 * 60 * 1000;
const SESSION_TTL_MS = 30 * 60 * 1000;
const OTP_MAX_ATTEMPTS = 5;

function requireSecret(env, key, min = 24) {
  const value = String(env?.[key] || '').trim();
  if (value.length < min) throw new HttpError(503, `${key.toLowerCase()}_unconfigured`);
  return value;
}

function validInstallationId(value) {
  const id = String(value || '').trim();
  return /^[A-Za-z0-9._:-]{16,160}$/.test(id) ? id : '';
}

export async function getProduct(db, productCode = PRO_PRODUCT_CODE) {
  return db.prepare(`
    SELECT product_code, display_name, currency, unit_amount, active, purchase_model,
           provider, provider_item_code, provider_shop_url, updated_at
    FROM commerce_products WHERE product_code = ?1
  `).bind(productCode).first();
}

function isKofiShopUrl(value) {
  try {
    const url = new URL(String(value || ''));
    return url.protocol === 'https:' && ['ko-fi.com', 'www.ko-fi.com'].includes(url.hostname.toLowerCase());
  } catch {
    return false;
  }
}

export function productReadyForPurchase(product) {
  return Boolean(product && product.active === 1 && product.provider === 'kofi' &&
    typeof product.provider_item_code === 'string' && product.provider_item_code.trim() &&
    isKofiShopUrl(product.provider_shop_url) &&
    Number.isInteger(product.unit_amount) && product.unit_amount > 0 &&
    /^[a-z]{3}$/.test(String(product.currency || '')));
}

async function emailIndex(env, email) {
  return hmacSha256Hex(requireSecret(env, 'BENEDICT_EMAIL_INDEX_KEY'), email);
}

async function encryptedEmail(env, email) {
  return encryptText(requireSecret(env, 'BENEDICT_PII_KEY'), email);
}

async function otpHash(env, challengeId, code) {
  return hmacSha256Hex(requireSecret(env, 'BENEDICT_OTP_PEPPER'), `${challengeId}:${code}`);
}

export async function startIdentityChallenge(env, { purpose, productCode, email, installationId, locale }) {
  const db = requireCommerceDb(env);
  if (!['purchase','restore'].includes(purpose)) throw new HttpError(400, 'invalid_identity_purpose');
  const installation = validInstallationId(installationId);
  if (!installation) throw new HttpError(400, 'invalid_installation_id');
  const product = await getProduct(db, productCode);
  if (!product) throw new HttpError(404, 'product_not_found');
  if (purpose === 'purchase' && !productReadyForPurchase(product)) throw new HttpError(409, 'product_not_sellable');

  const now = nowMs();
  const emailHmac = await emailIndex(env, email);
  const installationHash = await sha256Hex(installation);
  const recent = await db.prepare(`
    SELECT COUNT(*) AS count FROM commerce_identity_challenges
    WHERE (email_hmac = ?1 OR installation_id_hash = ?2) AND created_at >= ?3
  `).bind(emailHmac, installationHash, now - 15 * 60 * 1000).first();
  if (Number(recent?.count || 0) >= 5) throw new HttpError(429, 'verification_rate_limited');

  const id = newId('idv');
  const code = createOtpCode(env);
  const sealedEmail = await encryptedEmail(env, email);
  const codeHash = await otpHash(env, id, code);
  const expiresAt = now + OTP_TTL_MS;
  await db.prepare(`
    INSERT INTO commerce_identity_challenges (
      id, purpose, product_code, email_hmac, email_ciphertext, installation_id_hash,
      otp_hmac, locale, attempts, dispatch_status, expires_at, created_at
    ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, 0, 'pending', ?9, ?10)
  `).bind(id, purpose, product.product_code, emailHmac, sealedEmail, installationHash, codeHash, locale, expiresAt, now).run();

  try {
    const sent = await sendOtpEmail(env, { email, code, purpose, locale });
    await db.prepare(`UPDATE commerce_identity_challenges SET dispatch_status = ?2 WHERE id = ?1`)
      .bind(id, sent.delivery === 'test' ? 'test' : 'sent').run();
    return { challengeId: id, expiresAt, delivery: sent.delivery };
  } catch (error) {
    await db.prepare(`UPDATE commerce_identity_challenges SET dispatch_status = 'failed' WHERE id = ?1`).bind(id).run().catch(() => undefined);
    throw error;
  }
}

async function loadVerifiedChallenge(db, id) {
  return db.prepare(`SELECT * FROM commerce_identity_challenges WHERE id = ?1`).bind(id).first();
}

export async function verifyIdentityChallenge(env, { challengeId, code }) {
  const db = requireCommerceDb(env);
  if (!/^idv_[A-Za-z0-9_-]{16,}$/.test(String(challengeId || ''))) throw new HttpError(400, 'invalid_challenge_id');
  if (!/^\d{6}$/.test(String(code || ''))) throw new HttpError(400, 'invalid_verification_code');
  const row = await loadVerifiedChallenge(db, challengeId);
  if (!row) throw new HttpError(404, 'challenge_not_found');
  const now = nowMs();
  if (row.verified_at) throw new HttpError(409, 'challenge_already_used');
  if (row.expires_at <= now) throw new HttpError(410, 'challenge_expired');
  if (row.attempts >= OTP_MAX_ATTEMPTS) throw new HttpError(429, 'challenge_locked');

  const supplied = await otpHash(env, row.id, code);
  if (!timingSafeHexEqual(supplied, row.otp_hmac)) {
    await db.prepare(`UPDATE commerce_identity_challenges SET attempts = attempts + 1 WHERE id = ?1`).bind(row.id).run();
    throw new HttpError(403, 'verification_code_incorrect');
  }
  await db.prepare(`UPDATE commerce_identity_challenges SET verified_at = ?2 WHERE id = ?1 AND verified_at IS NULL`).bind(row.id, now).run();

  if (row.purpose === 'restore') return restoreEntitlementForVerifiedIdentity(env, row);
  return createPurchaseSessionForVerifiedIdentity(env, row);
}

async function createPurchaseSessionForVerifiedIdentity(env, challenge) {
  const db = requireCommerceDb(env);
  const product = await getProduct(db, challenge.product_code);
  if (!productReadyForPurchase(product)) throw new HttpError(409, 'product_not_sellable');
  const now = nowMs();
  const sessionId = newId('ses');
  const sessionToken = randomSecret(32);
  const deviceCredential = randomSecret(32);
  const expiresAt = now + SESSION_TTL_MS;
  await db.prepare(`
    INSERT INTO commerce_purchase_sessions (
      id, product_code, email_hmac, installation_id_hash, session_token_hash,
      device_credential_hash, status, expires_at, created_at, updated_at
    ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, 'open', ?7, ?8, ?8)
  `).bind(
    sessionId, challenge.product_code, challenge.email_hmac, challenge.installation_id_hash,
    await sha256Hex(sessionToken), await sha256Hex(deviceCredential), expiresAt, now,
  ).run();
  return {
    purpose: 'purchase',
    sessionId,
    sessionToken,
    deviceCredential,
    shopUrl: product.provider_shop_url,
    expiresAt,
  };
}

async function restoreEntitlementForVerifiedIdentity(env, challenge) {
  const db = requireCommerceDb(env);
  const entitlement = await db.prepare(`
    SELECT * FROM commerce_entitlements_v2
    WHERE product_code = ?1 AND owner_email_hmac = ?2 AND status = 'active'
    ORDER BY issued_at ASC LIMIT 1
  `).bind(challenge.product_code, challenge.email_hmac).first();
  if (!entitlement) throw new HttpError(404, 'active_entitlement_not_found');
  const now = nowMs();
  const credential = randomSecret(32);
  const bindingId = newId('dev');
  const existing = await db.prepare(`
    SELECT id FROM commerce_device_bindings_v2
    WHERE entitlement_id = ?1 AND installation_id_hash = ?2
  `).bind(entitlement.id, challenge.installation_id_hash).first();
  if (existing) {
    await db.prepare(`
      UPDATE commerce_device_bindings_v2
      SET device_credential_hash = ?2, status = 'active', revoked_at = NULL, last_seen_at = ?3
      WHERE id = ?1
    `).bind(existing.id, await sha256Hex(credential), now).run();
  } else {
    await db.prepare(`
      INSERT INTO commerce_device_bindings_v2 (
        id, entitlement_id, installation_id_hash, device_credential_hash,
        status, created_at, last_seen_at
      ) VALUES (?1, ?2, ?3, ?4, 'active', ?5, ?5)
    `).bind(bindingId, entitlement.id, challenge.installation_id_hash, await sha256Hex(credential), now).run();
  }
  await db.prepare(`UPDATE commerce_entitlements_v2 SET claim_state = 'claimed', updated_at = ?2 WHERE id = ?1`).bind(entitlement.id, now).run();
  return {
    purpose: 'restore',
    isPro: true,
    status: 'active',
    entitlementId: entitlement.id,
    deviceCredential: credential,
    verifiedAt: now,
    leaseUntil: now + SERVER_LEASE_MS,
  };
}

export async function sessionStatus(env, sessionToken) {
  const db = requireCommerceDb(env);
  if (typeof sessionToken !== 'string' || sessionToken.length < 32 || sessionToken.length > 200) throw new HttpError(401, 'session_token_required');
  const hash = await sha256Hex(sessionToken);
  const session = await db.prepare(`SELECT * FROM commerce_purchase_sessions WHERE session_token_hash = ?1`).bind(hash).first();
  if (!session) throw new HttpError(404, 'purchase_session_not_found');
  const now = nowMs();
  if (session.status === 'open' && session.expires_at <= now) {
    await db.prepare(`UPDATE commerce_purchase_sessions SET status = 'expired', updated_at = ?2 WHERE id = ?1`).bind(session.id, now).run();
    return { state: 'expired', isPro: false, expiresAt: session.expires_at };
  }
  if (session.status !== 'matched') return { state: session.status, isPro: false, expiresAt: session.expires_at };
  const row = await db.prepare(`
    SELECT e.id AS entitlement_id, e.status, b.status AS binding_status
    FROM commerce_entitlements_v2 e
    JOIN commerce_device_bindings_v2 b ON b.entitlement_id = e.id
    WHERE b.installation_id_hash = ?1 AND b.device_credential_hash = ?2
    ORDER BY e.issued_at ASC LIMIT 1
  `).bind(session.installation_id_hash, session.device_credential_hash).first();
  const active = row?.status === 'active' && row?.binding_status === 'active';
  return {
    state: active ? 'active' : 'inactive',
    isPro: active,
    entitlementId: row?.entitlement_id || null,
    verifiedAt: now,
    leaseUntil: active ? now + SERVER_LEASE_MS : null,
    expiresAt: session.expires_at,
  };
}

export async function checkDeviceEntitlementV2(env, { installationId, deviceCredential }) {
  const db = requireCommerceDb(env);
  const installation = validInstallationId(installationId);
  if (!installation) throw new HttpError(400, 'invalid_installation_id');
  if (typeof deviceCredential !== 'string' || deviceCredential.length < 32 || deviceCredential.length > 200) {
    throw new HttpError(400, 'invalid_device_credential');
  }
  const installationHash = await sha256Hex(installation);
  const credentialHash = await sha256Hex(deviceCredential);
  const row = await db.prepare(`
    SELECT e.id AS entitlement_id, e.product_code, e.status,
           b.id AS binding_id, b.status AS binding_status
    FROM commerce_device_bindings_v2 b
    JOIN commerce_entitlements_v2 e ON e.id = b.entitlement_id
    WHERE b.installation_id_hash = ?1 AND b.device_credential_hash = ?2
    LIMIT 1
  `).bind(installationHash, credentialHash).first();
  const now = nowMs();
  const active = row?.status === 'active' && row?.binding_status === 'active';
  if (row?.binding_id) await db.prepare(`UPDATE commerce_device_bindings_v2 SET last_seen_at = ?2 WHERE id = ?1`).bind(row.binding_id, now).run();
  return {
    isPro: active,
    status: row?.status || 'not_found',
    entitlementId: row?.entitlement_id || null,
    productCode: row?.product_code || PRO_PRODUCT_CODE,
    verifiedAt: now,
    leaseUntil: active ? now + SERVER_LEASE_MS : null,
  };
}

async function createAnomaly(db, { code, event, entityType = null, entityId = null, details = null }) {
  await db.prepare(`
    INSERT INTO commerce_anomalies (
      id, code, provider, provider_message_id, provider_transaction_id,
      entity_type, entity_id, details_json, status, created_at
    ) VALUES (?1, ?2, 'kofi', ?3, ?4, ?5, ?6, ?7, 'open', ?8)
  `).bind(
    newId('ano'), code, event?.messageId || null, event?.transactionId || null,
    entityType, entityId, details ? JSON.stringify(details).slice(0, 4000) : null, nowMs(),
  ).run();
}

export async function processKofiPaymentEvent(env, event) {
  const db = requireCommerceDb(env);
  const now = nowMs();
  const existingEvent = await db.prepare(`
    SELECT * FROM commerce_provider_events_v2 WHERE provider = 'kofi' AND message_id = ?1
  `).bind(event.messageId).first();
  if (existingEvent) {
    if (existingEvent.event_fingerprint === event.fingerprint) return { outcome: 'replay', status: existingEvent.processing_status };
    await createAnomaly(db, { code: 'provider_id_collision', event, details: { collision: 'message_id' } });
    return { outcome: 'quarantined', code: 'provider_id_collision' };
  }

  if (event.transactionId) {
    const existingTxEvent = await db.prepare(`
      SELECT * FROM commerce_provider_events_v2 WHERE provider = 'kofi' AND transaction_id = ?1
    `).bind(event.transactionId).first();
    if (existingTxEvent) {
      if (existingTxEvent.event_fingerprint === event.fingerprint) {
        await db.prepare(`
          INSERT INTO commerce_provider_events_v2 (
            id, provider, message_id, transaction_id, event_fingerprint, event_type,
            provider_timestamp, processing_status, received_at, processed_at
          ) VALUES (?1, 'kofi', ?2, NULL, ?3, ?4, ?5, 'processed', ?6, ?6)
        `).bind(newId('evt'), event.messageId, event.fingerprint, event.type, event.timestamp || null, now).run();
        return { outcome: 'replay', status: 'processed' };
      }
      await createAnomaly(db, { code: 'provider_id_collision', event, details: { collision: 'transaction_id' } });
      return { outcome: 'quarantined', code: 'provider_id_collision' };
    }
  }

  const product = await getProduct(db, PRO_PRODUCT_CODE);
  let ignoreCode = null;
  let quarantineCode = null;
  if (event.type !== 'Shop Order') ignoreCode = 'irrelevant_event_type';
  else if (event.isSubscriptionPayment) ignoreCode = 'subscription_not_supported';
  else if (!productReadyForPurchase(product)) quarantineCode = 'product_not_sellable';
  else if (!event.email) quarantineCode = 'buyer_email_missing';
  else if (!event.transactionId) quarantineCode = 'transaction_id_missing';
  else if (event.items.length !== 1) quarantineCode = 'unsupported_cart_structure';
  else if (event.items[0].directLinkCode !== product.provider_item_code) ignoreCode = 'different_shop_item';
  else if (event.items[0].quantity !== 1) quarantineCode = 'unsupported_quantity';
  else if (event.currency !== String(product.currency).toLowerCase()) quarantineCode = 'currency_mismatch';
  const amountMinor = moneyToMinor(event.amount, event.currency);
  if (!ignoreCode && !quarantineCode && amountMinor !== Number(product.unit_amount)) quarantineCode = 'amount_mismatch';

  if (ignoreCode || quarantineCode) {
    await db.prepare(`
      INSERT INTO commerce_provider_events_v2 (
        id, provider, message_id, transaction_id, event_fingerprint, event_type,
        provider_timestamp, processing_status, anomaly_code, received_at, processed_at
      ) VALUES (?1, 'kofi', ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?9)
    `).bind(
      newId('evt'), event.messageId, event.transactionId || null, event.fingerprint,
      event.type || 'unknown', event.timestamp || null,
      quarantineCode ? 'quarantined' : 'ignored', quarantineCode || ignoreCode, now,
    ).run();
    if (quarantineCode) await createAnomaly(db, { code: quarantineCode, event });
    return { outcome: quarantineCode ? 'quarantined' : 'ignored', code: quarantineCode || ignoreCode };
  }

  const emailHmac = await emailIndex(env, event.email);
  const existingEntitlement = await db.prepare(`
    SELECT * FROM commerce_entitlements_v2
    WHERE product_code = ?1 AND owner_email_hmac = ?2 AND status = 'active'
    LIMIT 1
  `).bind(product.product_code, emailHmac).first();

  const paymentId = newId('pay');
  const eventId = newId('evt');
  const paymentStatus = existingEntitlement ? 'duplicate_purchase' : 'succeeded';
  const statements = [
    db.prepare(`
      INSERT INTO commerce_provider_events_v2 (
        id, provider, message_id, transaction_id, event_fingerprint, event_type,
        provider_timestamp, processing_status, received_at, processed_at
      ) VALUES (?1, 'kofi', ?2, ?3, ?4, ?5, ?6, 'processed', ?7, ?7)
    `).bind(eventId, event.messageId, event.transactionId, event.fingerprint, event.type, event.timestamp || null, now),
    db.prepare(`
      INSERT INTO commerce_payments_v2 (
        id, provider, provider_transaction_id, provider_message_id, product_code,
        email_hmac, amount_minor, currency, status, paid_at, created_at, updated_at
      ) VALUES (?1, 'kofi', ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?9, ?9)
    `).bind(paymentId, event.transactionId, event.messageId, product.product_code, emailHmac, amountMinor, event.currency, paymentStatus, now),
  ];

  if (existingEntitlement) {
    await db.batch(statements);
    await createAnomaly(db, { code: 'duplicate_lifetime_purchase', event, entityType: 'entitlement', entityId: existingEntitlement.id });
    return { outcome: 'duplicate_purchase', entitlementId: existingEntitlement.id };
  }

  const entitlementId = newId('ent');
  const sessions = await db.prepare(`
    SELECT * FROM commerce_purchase_sessions
    WHERE product_code = ?1 AND email_hmac = ?2 AND status = 'open' AND expires_at > ?3
    ORDER BY created_at DESC LIMIT 3
  `).bind(product.product_code, emailHmac, now).all();
  const matches = sessions.results || [];
  const exact = matches.length === 1 ? matches[0] : null;
  statements.push(db.prepare(`
    INSERT INTO commerce_entitlements_v2 (
      id, product_code, owner_email_hmac, source, source_payment_id,
      status, claim_state, issued_at, updated_at
    ) VALUES (?1, ?2, ?3, 'kofi', ?4, 'active', ?5, ?6, ?6)
  `).bind(entitlementId, product.product_code, emailHmac, paymentId, exact ? 'claimed' : 'unclaimed', now));

  if (exact) {
    statements.push(
      db.prepare(`
        UPDATE commerce_purchase_sessions SET status = 'matched', consumed_at = ?2, updated_at = ?2 WHERE id = ?1
      `).bind(exact.id, now),
      db.prepare(`
        INSERT INTO commerce_device_bindings_v2 (
          id, entitlement_id, installation_id_hash, device_credential_hash,
          status, created_at, last_seen_at
        ) VALUES (?1, ?2, ?3, ?4, 'active', ?5, ?5)
      `).bind(newId('dev'), entitlementId, exact.installation_id_hash, exact.device_credential_hash, now),
    );
  } else if (matches.length > 1) {
    for (const session of matches) statements.push(
      db.prepare(`UPDATE commerce_purchase_sessions SET status = 'ambiguous', updated_at = ?2 WHERE id = ?1`).bind(session.id, now),
    );
  }

  await db.batch(statements);
  if (matches.length > 1) await createAnomaly(db, { code: 'ambiguous_purchase_session', event, entityType: 'entitlement', entityId: entitlementId });
  return { outcome: 'fulfilled', entitlementId, autoBound: Boolean(exact) };
}

export async function revealChallengeEmail(env, challengeId) {
  const db = requireCommerceDb(env);
  const row = await db.prepare(`SELECT email_ciphertext FROM commerce_identity_challenges WHERE id = ?1`).bind(challengeId).first();
  if (!row) throw new HttpError(404, 'challenge_not_found');
  return decryptText(requireSecret(env, 'BENEDICT_PII_KEY'), row.email_ciphertext);
}

export async function writeAdminAudit(db, { actor, action, entityType, entityId, reason = '', before = null, after = null }) {
  await db.prepare(`
    INSERT INTO commerce_admin_audit (
      id, actor_email, action, entity_type, entity_id, reason,
      before_json, after_json, created_at
    ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)
  `).bind(
    newId('aud'), actor, action, entityType, entityId, String(reason || '').slice(0, 500),
    before ? JSON.stringify(before).slice(0, 5000) : null,
    after ? JSON.stringify(after).slice(0, 5000) : null,
    nowMs(),
  ).run();
}
