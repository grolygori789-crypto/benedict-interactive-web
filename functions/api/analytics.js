const PUBLIC_EVENTS = new Set([
  'product_view',
  'product_open',
  'download_click',
  'support_click',
  'pro_interest',
]);

const SAFE_VALUE = /^[a-z0-9][a-z0-9._-]*$/i;

function cleanToken(value, maxLength, fallback = '') {
  if (typeof value !== 'string') return fallback;
  const normalized = value.trim().slice(0, maxLength);
  return SAFE_VALUE.test(normalized) ? normalized : fallback;
}

function cleanPath(value) {
  if (typeof value !== 'string' || !value.startsWith('/')) return '/';
  const pathname = value.split(/[?#]/, 1)[0];
  return pathname.slice(0, 240) || '/';
}

function response(status = 204, state = 'accepted') {
  return new Response(null, {
    status,
    headers: {
      'cache-control': 'no-store',
      'x-benedict-analytics': state,
    },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const requestUrl = new URL(request.url);

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > 4096) return response(413, 'rejected');

  const origin = request.headers.get('origin');
  if (origin) {
    try {
      if (new URL(origin).origin !== requestUrl.origin) return response(403, 'rejected');
    } catch {
      return response(403, 'rejected');
    }
  }

  const fetchSite = request.headers.get('sec-fetch-site');
  if (fetchSite && !['same-origin', 'same-site', 'none'].includes(fetchSite)) {
    return response(403, 'rejected');
  }

  let payload;
  try {
    payload = JSON.parse(await request.text());
  } catch {
    return response(400, 'rejected');
  }

  const event = cleanToken(payload?.event, 32);
  const product = cleanToken(payload?.product, 64);
  if (!PUBLIC_EVENTS.has(event) || !product) return response(400, 'rejected');

  const channel = cleanToken(payload?.channel, 48, 'unknown');
  const locale = cleanToken(payload?.locale, 16, 'unknown');
  const surface = cleanToken(payload?.surface, 32, 'unknown');
  const platform = cleanToken(payload?.platform, 32, 'unknown');
  const path = cleanPath(payload?.path);
  const host = requestUrl.hostname.slice(0, 160);
  const country = cleanToken(request.cf?.country, 8, 'unknown');

  const analytics = env?.BENEDICT_ANALYTICS;
  if (!analytics || typeof analytics.writeDataPoint !== 'function') {
    return response(204, 'disabled');
  }

  analytics.writeDataPoint({
    indexes: [product],
    blobs: [
      'v1',
      event,
      channel,
      locale,
      surface,
      path,
      host,
      platform,
      country,
    ],
    doubles: [1],
  });

  return response(204, 'accepted');
}
