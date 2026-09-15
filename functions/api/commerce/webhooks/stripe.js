import { errorResponse } from '../../../_lib/http.js';
export function onRequest() { return errorResponse(410, 'provider_retired', 'Stripe/PromptPay is not a Benedict commerce provider.'); }
