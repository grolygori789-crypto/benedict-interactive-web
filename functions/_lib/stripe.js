import { hmacSha256Hex, timingSafeHexEqual } from './crypto.js';
import { HttpError, requirePublicOrigin } from './http.js';

const STRIPE_API = 'https://api.stripe.com/v1';

function requireStripeSecret(env) {
  const secret = String(env?.STRIPE_SECRET_KEY || '').trim();
  if (!secret.startsWith('sk_')) throw new HttpError(503, 'stripe_not_configured');
  return secret;
}

async function stripeRequest(env, path, { method = 'GET', form = null } = {}) {
  const secret = requireStripeSecret(env);
  const headers = {
    authorization: `Bearer ${secret}`,
    accept: 'application/json',
  };
  let body;
  if (form) {
    headers['content-type'] = 'application/x-www-form-urlencoded';
    body = form.toString();
  }
  const response = await fetch(`${STRIPE_API}${path}`, { method, headers, body });
  let payload = null;
  try { payload = await response.json(); } catch { }
  if (!response.ok) {
    const type = String(payload?.error?.type || 'stripe_error').slice(0, 80);
    console.error('Stripe API request failed', { path, status: response.status, type });
    throw new HttpError(502, 'stripe_request_failed', 'Payment provider request failed.');
  }
  return payload;
}

export async function createStripeCheckoutSession(env, order, product) {
  const origin = requirePublicOrigin(env);
  const successUrl = `${origin}/products/bearagnostic?purchase=complete&order=${encodeURIComponent(order.id)}`;
  const cancelUrl = `${origin}/products/bearagnostic?purchase=cancelled`;
  const form = new URLSearchParams();
  form.set('mode', 'payment');
  form.set('payment_method_types[0]', 'promptpay');
  form.set('success_url', successUrl);
  form.set('cancel_url', cancelUrl);
  form.set('client_reference_id', order.id);
  form.set('customer_email', order.recovery_email);
  form.set('line_items[0][quantity]', '1');
  form.set('line_items[0][price_data][currency]', product.currency);
  form.set('line_items[0][price_data][unit_amount]', String(product.unit_amount));
  form.set('line_items[0][price_data][product_data][name]', product.display_name);
  form.set('metadata[order_id]', order.id);
  form.set('metadata[product_code]', order.product_code);
  form.set('payment_intent_data[metadata][order_id]', order.id);
  form.set('payment_intent_data[metadata][product_code]', order.product_code);
  return stripeRequest(env, '/checkout/sessions', { method: 'POST', form });
}

export async function retrieveStripeCheckoutSession(env, sessionId) {
  if (!/^cs_[A-Za-z0-9_]+$/.test(String(sessionId || ''))) {
    throw new HttpError(400, 'invalid_checkout_id');
  }
  return stripeRequest(env, `/checkout/sessions/${encodeURIComponent(sessionId)}`);
}

export async function verifyStripeWebhook(request, env, toleranceSeconds = 300) {
  const secret = String(env?.STRIPE_WEBHOOK_SECRET || '').trim();
  if (!secret.startsWith('whsec_')) throw new HttpError(503, 'stripe_webhook_not_configured');
  const header = request.headers.get('stripe-signature') || '';
  if (!header) throw new HttpError(400, 'stripe_signature_missing');
  const rawBody = await request.text();
  const pairs = header.split(',').map((part) => part.trim().split('='));
  const timestamp = Number(pairs.find(([key]) => key === 't')?.[1]);
  const signatures = pairs.filter(([key]) => key === 'v1').map(([, value]) => value).filter(Boolean);
  if (!Number.isFinite(timestamp) || !signatures.length) throw new HttpError(400, 'stripe_signature_invalid');
  if (Math.abs(Math.floor(Date.now() / 1000) - timestamp) > toleranceSeconds) {
    throw new HttpError(400, 'stripe_signature_too_old');
  }
  const expected = await hmacSha256Hex(secret, `${timestamp}.${rawBody}`);
  if (!signatures.some((candidate) => timingSafeHexEqual(expected, candidate))) {
    throw new HttpError(400, 'stripe_signature_invalid');
  }
  let event;
  try { event = JSON.parse(rawBody); } catch { throw new HttpError(400, 'stripe_payload_invalid'); }
  if (!event?.id || !event?.type || !event?.data?.object) throw new HttpError(400, 'stripe_event_invalid');
  return event;
}
