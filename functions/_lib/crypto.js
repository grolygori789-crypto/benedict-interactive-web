const encoder = new TextEncoder();

function bytesToHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function base64UrlEncode(bytes) {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlDecode(value) {
  const normalized = String(value || '').replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4 || 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export function randomSecret(byteLength = 32) {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  return base64UrlEncode(bytes);
}

export function newId(prefix) {
  return `${prefix}_${randomSecret(18)}`;
}

export async function sha256Hex(value) {
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(String(value)));
  return bytesToHex(new Uint8Array(digest));
}

export async function hmacSha256Hex(secret, value) {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(String(secret)),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(String(value)));
  return bytesToHex(new Uint8Array(signature));
}

export function timingSafeHexEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let index = 0; index < a.length; index += 1) diff |= a.charCodeAt(index) ^ b.charCodeAt(index);
  return diff === 0;
}

export function timingSafeStringEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let index = 0; index < a.length; index += 1) diff |= a.charCodeAt(index) ^ b.charCodeAt(index);
  return diff === 0;
}

async function aesKey(secret) {
  if (!secret || String(secret).length < 24) throw new Error('PII encryption key is not configured strongly enough');
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(String(secret)));
  return crypto.subtle.importKey('raw', digest, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']);
}

export async function encryptText(secret, value) {
  const iv = new Uint8Array(12);
  crypto.getRandomValues(iv);
  const key = await aesKey(secret);
  const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoder.encode(String(value)));
  return `v1.${base64UrlEncode(iv)}.${base64UrlEncode(new Uint8Array(encrypted))}`;
}

export async function decryptText(secret, sealed) {
  const parts = String(sealed || '').split('.');
  if (parts.length !== 3 || parts[0] !== 'v1') throw new Error('Invalid sealed value');
  const key = await aesKey(secret);
  const plain = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: base64UrlDecode(parts[1]) },
    key,
    base64UrlDecode(parts[2]),
  );
  return new TextDecoder().decode(plain);
}
