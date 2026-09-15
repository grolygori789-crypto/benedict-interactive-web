import { writeAdminAudit } from '../../../../_lib/commerce.js';
import { errorResponse, jsonResponse, readJson, requireCommerceDb, responseFromError } from '../../../../_lib/http.js';

export async function onRequestPost(context) {
  try {
    const db = requireCommerceDb(context.env);
    const entitlementId = String(context.params?.entitlementId || '').trim();
    const payload = await readJson(context.request, 4096);
    const action = String(payload?.action || '').trim();
    const reason = String(payload?.reason || '').trim();
    if (!['revoke','reactivate'].includes(action)) return errorResponse(400, 'invalid_action');
    if (reason.length < 3 || reason.length > 500) return errorResponse(400, 'reason_required');
    const before = await db.prepare(`SELECT * FROM commerce_entitlements_v2 WHERE id = ?1`).bind(entitlementId).first();
    if (!before) return errorResponse(404, 'entitlement_not_found');
    if (action === 'reactivate' && ['refunded','disputed'].includes(before.status)) return errorResponse(409, 'financially_closed_entitlement_cannot_reactivate');
    const nextStatus = action === 'revoke' ? 'revoked' : 'active';
    const now = Date.now();
    await db.prepare(`
      UPDATE commerce_entitlements_v2
      SET status = ?2, revoked_at = CASE WHEN ?2 = 'active' THEN NULL ELSE COALESCE(revoked_at, ?3) END, updated_at = ?3
      WHERE id = ?1
    `).bind(entitlementId, nextStatus, now).run();
    if (action === 'revoke') {
      await db.prepare(`UPDATE commerce_device_bindings_v2 SET status='revoked', revoked_at=COALESCE(revoked_at, ?2) WHERE entitlement_id=?1`).bind(entitlementId, now).run();
    } else {
      await db.prepare(`UPDATE commerce_device_bindings_v2 SET status='active', revoked_at=NULL, last_seen_at=?2 WHERE entitlement_id=?1`).bind(entitlementId, now).run();
    }
    const after = await db.prepare(`SELECT * FROM commerce_entitlements_v2 WHERE id = ?1`).bind(entitlementId).first();
    await writeAdminAudit(db, { actor: context.data.admin.email, action: action === 'revoke' ? 'revoke_entitlement' : 'reactivate_entitlement', entityType:'entitlement', entityId:entitlementId, reason, before, after });
    return jsonResponse({ ok:true, entitlement:after });
  } catch (error) { return responseFromError(error); }
}
