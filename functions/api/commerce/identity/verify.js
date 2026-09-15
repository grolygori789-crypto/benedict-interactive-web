import { verifyIdentityChallenge } from '../../../_lib/commerce.js';
import { assertBrowserOrigin, errorResponse, jsonResponse, readJson, requireCommerceRuntimeEnabled, responseFromError } from '../../../_lib/http.js';

export async function onRequestPost(context) {
  try {
    requireCommerceRuntimeEnabled(context.env);
    assertBrowserOrigin(context.request, context.env);
    const payload = await readJson(context.request, 4096);
    const result = await verifyIdentityChallenge(context.env, {
      challengeId: String(payload?.challengeId || '').trim(),
      code: String(payload?.code || '').trim(),
    });
    return jsonResponse({ ok: true, ...result });
  } catch (error) { return responseFromError(error); }
}

export function onRequest() { return errorResponse(405, 'method_not_allowed'); }
