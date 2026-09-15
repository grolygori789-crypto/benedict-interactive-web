PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS commerce_products (
  product_code TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  currency TEXT NOT NULL CHECK (currency = lower(currency)),
  unit_amount INTEGER,
  active INTEGER NOT NULL DEFAULT 0 CHECK (active IN (0, 1)),
  purchase_model TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  CHECK (unit_amount IS NULL OR unit_amount > 0)
);

CREATE TABLE IF NOT EXISTS commerce_orders (
  id TEXT PRIMARY KEY,
  public_token_hash TEXT NOT NULL UNIQUE,
  product_code TEXT NOT NULL REFERENCES commerce_products(product_code),
  recovery_email TEXT NOT NULL,
  locale TEXT NOT NULL DEFAULT 'en',
  status TEXT NOT NULL CHECK (status IN (
    'created', 'payment_pending', 'checkout_failed', 'paid', 'fulfilled',
    'failed', 'expired', 'cancelled', 'refunded'
  )),
  amount INTEGER NOT NULL CHECK (amount > 0),
  currency TEXT NOT NULL,
  provider TEXT NOT NULL,
  provider_checkout_id TEXT UNIQUE,
  provider_payment_id TEXT UNIQUE,
  checkout_expires_at INTEGER,
  paid_at INTEGER,
  fulfilled_at INTEGER,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS commerce_orders_status_created_idx
  ON commerce_orders(status, created_at DESC);
CREATE INDEX IF NOT EXISTS commerce_orders_email_created_idx
  ON commerce_orders(recovery_email, created_at DESC);

CREATE TABLE IF NOT EXISTS commerce_payments (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES commerce_orders(id),
  provider TEXT NOT NULL,
  provider_payment_id TEXT NOT NULL UNIQUE,
  provider_checkout_id TEXT,
  amount INTEGER NOT NULL CHECK (amount > 0),
  currency TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pending', 'succeeded', 'failed', 'partially_refunded', 'refunded')),
  last_event_id TEXT,
  verified_at INTEGER,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS commerce_payments_order_idx ON commerce_payments(order_id);

CREATE TABLE IF NOT EXISTS commerce_entitlements (
  id TEXT PRIMARY KEY,
  product_code TEXT NOT NULL REFERENCES commerce_products(product_code),
  order_id TEXT NOT NULL UNIQUE REFERENCES commerce_orders(id),
  status TEXT NOT NULL CHECK (status IN ('active', 'revoked', 'refunded')),
  source TEXT NOT NULL,
  issued_at INTEGER NOT NULL,
  revoked_at INTEGER,
  updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS commerce_entitlements_status_idx ON commerce_entitlements(status, issued_at DESC);

CREATE TABLE IF NOT EXISTS commerce_device_bindings (
  id TEXT PRIMARY KEY,
  entitlement_id TEXT NOT NULL REFERENCES commerce_entitlements(id),
  device_id_hash TEXT NOT NULL,
  device_secret_hash TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  last_seen_at INTEGER NOT NULL,
  revoked_at INTEGER,
  UNIQUE(entitlement_id, device_id_hash)
);

CREATE INDEX IF NOT EXISTS commerce_device_bindings_entitlement_idx
  ON commerce_device_bindings(entitlement_id);

CREATE TABLE IF NOT EXISTS commerce_webhook_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  provider TEXT NOT NULL,
  event_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('processing', 'processed', 'error')),
  order_id TEXT,
  error_code TEXT,
  received_at INTEGER NOT NULL,
  processed_at INTEGER,
  UNIQUE(provider, event_id)
);

CREATE INDEX IF NOT EXISTS commerce_webhook_events_received_idx
  ON commerce_webhook_events(received_at DESC);

CREATE TABLE IF NOT EXISTS commerce_admin_audit (
  id TEXT PRIMARY KEY,
  actor_email TEXT NOT NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  reason TEXT,
  before_json TEXT,
  after_json TEXT,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS commerce_admin_audit_created_idx
  ON commerce_admin_audit(created_at DESC);

INSERT INTO commerce_products (
  product_code,
  display_name,
  currency,
  unit_amount,
  active,
  purchase_model,
  created_at,
  updated_at
)
VALUES (
  'bearagnostic_pro_lifetime',
  'Bearagnostic Pro — Lifetime',
  'thb',
  NULL,
  0,
  'one_time_lifetime',
  CAST(strftime('%s','now') AS INTEGER) * 1000,
  CAST(strftime('%s','now') AS INTEGER) * 1000
)
ON CONFLICT(product_code) DO NOTHING;
