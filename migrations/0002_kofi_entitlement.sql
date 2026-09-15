PRAGMA foreign_keys = ON;

-- K1/K2 migration: move the live commerce trust path from Stripe/PromptPay to Ko-fi.
-- 0001 is intentionally preserved because it may already be applied in D1.
ALTER TABLE commerce_products ADD COLUMN provider TEXT NOT NULL DEFAULT 'kofi';
ALTER TABLE commerce_products ADD COLUMN provider_item_code TEXT;
ALTER TABLE commerce_products ADD COLUMN provider_shop_url TEXT;

-- Fail closed after migration. The owner must deliberately configure the Ko-fi item,
-- price/currency, and activate the product before test or production commerce can run.
UPDATE commerce_products
SET provider = 'kofi', provider_item_code = NULL, provider_shop_url = NULL,
    unit_amount = NULL, active = 0,
    updated_at = CAST(strftime('%s','now') AS INTEGER) * 1000
WHERE product_code = 'bearagnostic_pro_lifetime';

CREATE TABLE IF NOT EXISTS commerce_identity_challenges (
  id TEXT PRIMARY KEY,
  purpose TEXT NOT NULL CHECK (purpose IN ('purchase','restore')),
  product_code TEXT NOT NULL REFERENCES commerce_products(product_code),
  email_hmac TEXT NOT NULL,
  email_ciphertext TEXT NOT NULL,
  installation_id_hash TEXT NOT NULL,
  otp_hmac TEXT NOT NULL,
  locale TEXT NOT NULL DEFAULT 'en',
  attempts INTEGER NOT NULL DEFAULT 0 CHECK (attempts >= 0),
  dispatch_status TEXT NOT NULL CHECK (dispatch_status IN ('pending','sent','test','failed')),
  expires_at INTEGER NOT NULL,
  verified_at INTEGER,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS commerce_identity_email_created_idx
  ON commerce_identity_challenges(email_hmac, created_at DESC);
CREATE INDEX IF NOT EXISTS commerce_identity_install_created_idx
  ON commerce_identity_challenges(installation_id_hash, created_at DESC);

CREATE TABLE IF NOT EXISTS commerce_purchase_sessions (
  id TEXT PRIMARY KEY,
  product_code TEXT NOT NULL REFERENCES commerce_products(product_code),
  email_hmac TEXT NOT NULL,
  installation_id_hash TEXT NOT NULL,
  session_token_hash TEXT NOT NULL UNIQUE,
  device_credential_hash TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('open','matched','expired','ambiguous','cancelled')),
  expires_at INTEGER NOT NULL,
  consumed_at INTEGER,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS commerce_purchase_sessions_match_idx
  ON commerce_purchase_sessions(product_code, email_hmac, status, expires_at);

CREATE TABLE IF NOT EXISTS commerce_provider_events_v2 (
  id TEXT PRIMARY KEY,
  provider TEXT NOT NULL,
  message_id TEXT NOT NULL,
  transaction_id TEXT,
  event_fingerprint TEXT NOT NULL,
  event_type TEXT NOT NULL,
  provider_timestamp TEXT,
  processing_status TEXT NOT NULL CHECK (processing_status IN ('processed','ignored','quarantined','error')),
  anomaly_code TEXT,
  received_at INTEGER NOT NULL,
  processed_at INTEGER NOT NULL,
  UNIQUE(provider, message_id)
);
CREATE UNIQUE INDEX IF NOT EXISTS commerce_provider_tx_unique_idx
  ON commerce_provider_events_v2(provider, transaction_id)
  WHERE transaction_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS commerce_provider_events_received_idx
  ON commerce_provider_events_v2(received_at DESC);

CREATE TABLE IF NOT EXISTS commerce_payments_v2 (
  id TEXT PRIMARY KEY,
  provider TEXT NOT NULL,
  provider_transaction_id TEXT NOT NULL,
  provider_message_id TEXT NOT NULL,
  product_code TEXT NOT NULL REFERENCES commerce_products(product_code),
  email_hmac TEXT NOT NULL,
  amount_minor INTEGER NOT NULL CHECK (amount_minor > 0),
  currency TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('succeeded','duplicate_purchase','review_required','refunded_manual','disputed_manual')),
  paid_at INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  UNIQUE(provider, provider_transaction_id)
);
CREATE INDEX IF NOT EXISTS commerce_payments_v2_owner_idx
  ON commerce_payments_v2(product_code, email_hmac, created_at DESC);

CREATE TABLE IF NOT EXISTS commerce_entitlements_v2 (
  id TEXT PRIMARY KEY,
  product_code TEXT NOT NULL REFERENCES commerce_products(product_code),
  owner_email_hmac TEXT NOT NULL,
  source TEXT NOT NULL,
  source_payment_id TEXT REFERENCES commerce_payments_v2(id),
  status TEXT NOT NULL CHECK (status IN ('active','revoked','refunded','disputed')),
  claim_state TEXT NOT NULL CHECK (claim_state IN ('claimed','unclaimed')),
  issued_at INTEGER NOT NULL,
  revoked_at INTEGER,
  updated_at INTEGER NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS commerce_entitlements_v2_active_owner_idx
  ON commerce_entitlements_v2(product_code, owner_email_hmac)
  WHERE status = 'active';
CREATE INDEX IF NOT EXISTS commerce_entitlements_v2_status_idx
  ON commerce_entitlements_v2(status, issued_at DESC);

CREATE TABLE IF NOT EXISTS commerce_device_bindings_v2 (
  id TEXT PRIMARY KEY,
  entitlement_id TEXT NOT NULL REFERENCES commerce_entitlements_v2(id),
  installation_id_hash TEXT NOT NULL,
  device_credential_hash TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL CHECK (status IN ('active','revoked')),
  created_at INTEGER NOT NULL,
  last_seen_at INTEGER NOT NULL,
  revoked_at INTEGER,
  UNIQUE(entitlement_id, installation_id_hash)
);
CREATE INDEX IF NOT EXISTS commerce_device_bindings_v2_ent_idx
  ON commerce_device_bindings_v2(entitlement_id, status);

CREATE TABLE IF NOT EXISTS commerce_anomalies (
  id TEXT PRIMARY KEY,
  code TEXT NOT NULL,
  provider TEXT,
  provider_message_id TEXT,
  provider_transaction_id TEXT,
  entity_type TEXT,
  entity_id TEXT,
  details_json TEXT,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open','resolved','ignored')),
  created_at INTEGER NOT NULL,
  resolved_at INTEGER
);
CREATE INDEX IF NOT EXISTS commerce_anomalies_status_created_idx
  ON commerce_anomalies(status, created_at DESC);
