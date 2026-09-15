import { errorResponse } from '../../_lib/http.js';
export function onRequest() { return errorResponse(410, 'provider_retired', 'The legacy Stripe checkout path has been retired.'); }
