const encoder = new TextEncoder();

export function jsonResponse(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
      ...extraHeaders,
    },
  });
}

export function errorResponse(status, code, message = code, details = undefined) {
  const body = { ok: false, error: code, message };
  if (details !== undefined) body.details = details;
  return jsonResponse(body, status);
}

export async function readJson(request, maxBytes = 8192) {
  const declared = Number(request.headers.get('content-length') || 0);
  if (declared > maxBytes) throw new HttpError(413, 'payload_too_large');
  const text = await request.text();
  if (encoder.encode(text).byteLength > maxBytes) throw new HttpError(413, 'payload_too_large');
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    throw new HttpError(400, 'invalid_json');
  }
}

export class HttpError extends Error {
  constructor(status, code, message = code, details = undefined) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export function responseFromError(error) {
  if (error instanceof HttpError) {
    return errorResponse(error.status, error.code, error.message, error.details);
  }
  console.error('Unhandled commerce error', error);
  return errorResponse(500, 'internal_error', 'The request could not be completed.');
}

export function bearerToken(request) {
  const raw = request.headers.get('authorization') || '';
  const match = /^Bearer\s+(.+)$/i.exec(raw.trim());
  return match ? match[1].trim() : '';
}

export function normalizeEmail(value) {
  if (typeof value !== 'string') return '';
  const email = value.trim().toLowerCase();
  if (email.length < 3 || email.length > 254) return '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return '';
  return email;
}

export function cleanLocale(value) {
  if (typeof value !== 'string') return 'en';
  const locale = value.trim().toLowerCase().slice(0, 16);
  return /^[a-z]{2}(?:-[a-z]{2})?$/.test(locale) ? locale : 'en';
}

export function requirePublicCommerceEnabled(env) {
  if (String(env?.BENEDICT_COMMERCE_PUBLIC_ENABLED || '').toLowerCase() !== 'true') {
    throw new HttpError(503, 'commerce_not_enabled', 'Commerce is not enabled yet.');
  }
}

export function requireCommerceDb(env) {
  const db = env?.BENEDICT_COMMERCE_DB;
  if (!db || typeof db.prepare !== 'function') {
    throw new HttpError(503, 'commerce_db_unavailable', 'Commerce database is not configured.');
  }
  return db;
}

export function requirePublicOrigin(env) {
  const raw = String(env?.BENEDICT_PUBLIC_ORIGIN || '').trim();
  if (!raw) throw new HttpError(503, 'public_origin_unconfigured');
  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    throw new HttpError(503, 'public_origin_invalid');
  }
  if (parsed.protocol !== 'https:' && parsed.hostname !== 'localhost') {
    throw new HttpError(503, 'public_origin_insecure');
  }
  return parsed.origin;
}

export function assertBrowserOrigin(request, env) {
  const origin = request.headers.get('origin');
  if (!origin) return;
  const expected = requirePublicOrigin(env);
  let parsed;
  try {
    parsed = new URL(origin).origin;
  } catch {
    throw new HttpError(403, 'origin_rejected');
  }
  if (parsed !== expected) throw new HttpError(403, 'origin_rejected');
}

export function nowMs() {
  return Date.now();
}
