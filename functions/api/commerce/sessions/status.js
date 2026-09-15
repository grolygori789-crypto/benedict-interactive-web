import { sessionStatus } from '../../../_lib/commerce.js';
import { bearerToken, errorResponse, jsonResponse, requireCommerceRuntimeEnabled, responseFromError } from '../../../_lib/http.js';

export async function onRequestPost(context) {
  try {
    requireCommerceRuntimeEnabled(context.env);
    const result = await sessionStatus(context.env, bearerToken(context.request));
    return jsonResponse({ ok: true, ...result });
  } catch (error) { return responseFromError(error); }
}

export function onRequest() { return errorResponse(405, 'method_not_allowed'); }
