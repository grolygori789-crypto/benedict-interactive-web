import { HttpError } from './http.js';

let jwksCache = { issuer: '', expiresAt: 0, keys: [] };

function base64UrlBytes(value) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4 || 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function decodeJsonPart(value) {
  try {
    return JSON.parse(new TextDecoder().decode(base64UrlBytes(value)));
  } catch {
    throw new HttpError(403, 'admin_access_invalid');
  }
}

function normalizeIssuer(value) {
  return String(value || '').trim().replace(/\/+$/g, '');
}

async function getJwks(issuer) {
  const now = Date.now();
  if (jwksCache.issuer === issuer && jwksCache.expiresAt > now && jwksCache.keys.length) {
    return jwksCache.keys;
  }
  const response = await fetch(`${issuer}/cdn-cgi/access/certs`, {
    headers: { accept: 'application/json' },
    cf: { cacheTtl: 300, cacheEverything: true },
  });
  if (!response.ok) throw new HttpError(503, 'admin_access_keys_unavailable');
  const body = await response.json();
  const keys = Array.isArray(body?.keys) ? body.keys : [];
  if (!keys.length) throw new HttpError(503, 'admin_access_keys_unavailable');
  jwksCache = { issuer, expiresAt: now + 300_000, keys };
  return keys;
}

function audMatches(payloadAud, expected) {
  if (!expected) return false;
  if (typeof payloadAud === 'string') return payloadAud === expected;
  return Array.isArray(payloadAud) && payloadAud.includes(expected);
}

export async function verifyAdminAccess(request, env) {
  const issuer = normalizeIssuer(env?.BENEDICT_ACCESS_TEAM_DOMAIN);
  const expectedAud = String(env?.BENEDICT_ACCESS_AUD || '').trim();
  const expectedEmail = String(env?.BENEDICT_ADMIN_EMAIL || '').trim().toLowerCase();
  if (!issuer || !expectedAud || !expectedEmail) {
    throw new HttpError(503, 'admin_access_not_configured');
  }
  if (!issuer.startsWith('https://') || !issuer.endsWith('.cloudflareaccess.com')) {
    throw new HttpError(503, 'admin_access_issuer_invalid');
  }

  const token = request.headers.get('cf-access-jwt-assertion') || '';
  if (!token) throw new HttpError(403, 'admin_access_required');
  const parts = token.split('.');
  if (parts.length !== 3) throw new HttpError(403, 'admin_access_invalid');
  const [encodedHeader, encodedPayload, encodedSignature] = parts;
  const header = decodeJsonPart(encodedHeader);
  const payload = decodeJsonPart(encodedPayload);
  if (header?.alg !== 'RS256' || typeof header?.kid !== 'string') {
    throw new HttpError(403, 'admin_access_invalid');
  }

  const keys = await getJwks(issuer);
  const jwk = keys.find((candidate) => candidate?.kid === header.kid);
  if (!jwk) throw new HttpError(403, 'admin_access_key_unknown');
  const key = await crypto.subtle.importKey(
    'jwk',
    jwk,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['verify'],
  );
  const signed = new TextEncoder().encode(`${encodedHeader}.${encodedPayload}`);
  const signature = base64UrlBytes(encodedSignature);
  const verified = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, signature, signed);
  if (!verified) throw new HttpError(403, 'admin_access_invalid_signature');

  const now = Math.floor(Date.now() / 1000);
  if (!Number.isFinite(payload?.exp) || payload.exp <= now) throw new HttpError(403, 'admin_access_expired');
  if (Number.isFinite(payload?.nbf) && payload.nbf > now + 30) throw new HttpError(403, 'admin_access_not_yet_valid');
  if (normalizeIssuer(payload?.iss) !== issuer) throw new HttpError(403, 'admin_access_wrong_issuer');
  if (!audMatches(payload?.aud, expectedAud)) throw new HttpError(403, 'admin_access_wrong_audience');

  const email = String(payload?.email || '').trim().toLowerCase();
  if (!email || email !== expectedEmail) throw new HttpError(403, 'admin_access_not_allowed');

  return {
    email,
    subject: String(payload?.sub || '').slice(0, 200),
    expiresAt: payload.exp,
  };
}
