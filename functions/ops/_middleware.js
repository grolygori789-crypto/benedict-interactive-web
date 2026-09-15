import { verifyAdminAccess } from '../_lib/access.js';
import { responseFromError } from '../_lib/http.js';

export async function onRequest(context) {
  try {
    const admin = await verifyAdminAccess(context.request, context.env);
    context.data.admin = admin;
    const response = await context.next();
    const headers = new Headers(response.headers);
    headers.set('cache-control', 'no-store, private');
    headers.set('x-robots-tag', 'noindex, nofollow, noarchive');
    headers.set('referrer-policy', 'no-referrer');
    headers.set('x-frame-options', 'DENY');
    headers.set('content-security-policy', "frame-ancestors 'none'; base-uri 'none'; form-action 'self'");
    headers.set('permissions-policy', 'camera=(), microphone=(), geolocation=()');
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  } catch (error) {
    return responseFromError(error);
  }
}
