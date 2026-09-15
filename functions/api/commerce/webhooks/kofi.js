import { processKofiPaymentEvent } from '../../../_lib/commerce.js';
import { parseAndVerifyKofiWebhook } from '../../../_lib/kofi.js';
import { errorResponse, jsonResponse, requireCommerceRuntimeEnabled, responseFromError } from '../../../_lib/http.js';

export async function onRequestPost(context) {
  try {
    requireCommerceRuntimeEnabled(context.env);
    const event = await parseAndVerifyKofiWebhook(context.request, context.env);
    const result = await processKofiPaymentEvent(context.env, event);
    return jsonResponse({ ok: true, accepted: true, outcome: result.outcome }, 200);
  } catch (error) {
    // Verification/schema failures are rejected. Durable/database failures return 5xx via responseFromError,
    // allowing Ko-fi to retry rather than losing a legitimate payment event.
    return responseFromError(error);
  }
}

export function onRequest() { return errorResponse(405, 'method_not_allowed'); }
