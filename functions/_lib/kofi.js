import { sha256Hex, timingSafeStringEqual } from './crypto.js';
import { HttpError, normalizeEmail, readTextLimited } from './http.js';

const ZERO_DECIMAL = new Set(['jpy','krw','vnd']);

function requiredToken(env) {
  const token = String(env?.KOFI_VERIFICATION_TOKEN || '').trim();
  if (token.length < 16) throw new HttpError(503, 'kofi_webhook_unconfigured');
  return token;
}

export function moneyToMinor(value, currency) {
  const text = String(value ?? '').trim();
  if (!/^\d+(?:\.\d{1,2})?$/.test(text)) return null;
  const exponent = ZERO_DECIMAL.has(String(currency || '').toLowerCase()) ? 0 : 2;
  if (exponent === 0) return text.includes('.') ? null : Number(text);
  const [whole, frac = ''] = text.split('.');
  const minor = Number(whole) * 100 + Number((frac + '00').slice(0, 2));
  return Number.isSafeInteger(minor) && minor > 0 ? minor : null;
}

export async function parseAndVerifyKofiWebhook(request, env) {
  const contentType = String(request.headers.get('content-type') || '').toLowerCase();
  if (!contentType.includes('application/x-www-form-urlencoded')) {
    throw new HttpError(415, 'unsupported_media_type');
  }
  const text = await readTextLimited(request, 32768);
  const form = new URLSearchParams(text);
  const rawData = form.get('data');
  if (!rawData) throw new HttpError(400, 'kofi_data_required');

  let payload;
  try { payload = JSON.parse(rawData); }
  catch { throw new HttpError(400, 'invalid_kofi_payload'); }
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) throw new HttpError(400, 'invalid_kofi_payload');

  const suppliedToken = String(payload.verification_token || '');
  if (!timingSafeStringEqual(suppliedToken, requiredToken(env))) throw new HttpError(403, 'kofi_verification_failed');

  const items = Array.isArray(payload.shop_items) ? payload.shop_items.map((item) => ({
    directLinkCode: String(item?.direct_link_code || '').trim(),
    variationName: String(item?.variation_name || '').trim().slice(0, 160),
    quantity: Number(item?.quantity),
  })) : [];

  const event = {
    provider: 'kofi',
    messageId: String(payload.message_id || '').trim(),
    transactionId: String(payload.kofi_transaction_id || '').trim(),
    timestamp: String(payload.timestamp || '').trim().slice(0, 80),
    type: String(payload.type || '').trim(),
    amount: String(payload.amount || '').trim(),
    currency: String(payload.currency || '').trim().toLowerCase(),
    email: normalizeEmail(payload.email),
    isSubscriptionPayment: payload.is_subscription_payment === true,
    items,
  };
  if (!/^[A-Za-z0-9._:-]{8,200}$/.test(event.messageId)) throw new HttpError(400, 'invalid_kofi_message_id');
  if (event.transactionId && !/^[A-Za-z0-9._:-]{4,200}$/.test(event.transactionId)) throw new HttpError(400, 'invalid_kofi_transaction_id');

  // messageId is intentionally excluded: Ko-fi documents retrying with the same ID,
  // while transaction-level duplicate detection should also recognize semantically
  // identical provider payloads that arrive under a different delivery ID.
  const canonical = JSON.stringify({
    transactionId: event.transactionId,
    timestamp: event.timestamp,
    type: event.type,
    amount: event.amount,
    currency: event.currency,
    email: event.email,
    isSubscriptionPayment: event.isSubscriptionPayment,
    items: event.items,
  });
  event.fingerprint = await sha256Hex(canonical);
  return event;
}
