import { errorResponse } from '../../../../_lib/http.js';
export function onRequest() {
  return errorResponse(409, 'provider_reconciliation_unavailable', 'Ko-fi does not expose a documented transaction-query API for automatic reconciliation.');
}
