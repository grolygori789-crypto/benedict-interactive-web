# Benedict Commerce Backend — Ko-fi K1/K2 Runbook

**Status:** P0 foundation. Fail-closed until secrets, D1 migration, Ko-fi product mapping, Android backend URL, and controlled real-money QA are complete.

## Trust path

`Ko-fi verified Shop Order webhook → Benedict payment ledger → lifetime entitlement → verified purchase session/device binding → Bearagnostic Pro`

A browser/app cannot mark a payment paid. Screenshots, client redirects, local flags, and admin guesses never establish a Ko-fi payment.

## Migration

Apply in order:

1. `migrations/0001_commerce.sql` if it was not previously applied.
2. `migrations/0002_kofi_entitlement.sql`.

Migration 0002 deliberately deactivates and unprices Bearagnostic Pro. This prevents the retired Stripe/PromptPay configuration from accidentally becoming live.

## Required Cloudflare bindings / secrets

```text
BENEDICT_COMMERCE_DB                 D1 binding
BENEDICT_PUBLIC_ORIGIN               https://<production-or-test-site-host>
BENEDICT_COMMERCE_PUBLIC_ENABLED     false until final release
BENEDICT_COMMERCE_TEST_MODE          true only during controlled test

KOFI_VERIFICATION_TOKEN              Ko-fi webhook verification token
BENEDICT_EMAIL_INDEX_KEY             long random secret
BENEDICT_PII_KEY                     long random secret, independent from index key
BENEDICT_OTP_PEPPER                  long random secret

BENEDICT_EMAIL_PROVIDER              resend  (production OTP delivery)
RESEND_API_KEY                       server secret
BENEDICT_EMAIL_FROM                  verified sender, e.g. Bearagnostic <...>

BENEDICT_OTP_TEST_CODE               six digits; TEST MODE ONLY
```

Never commit any value above.

## Product configuration

The D1 product row must be configured before purchase testing:

- `provider = kofi`
- exact Ko-fi `direct_link_code`
- exact Ko-fi Shop product URL
- currency
- exact unit amount in minor units
- `active = 1`

Use one dedicated digital Ko-fi Shop item for `Bearagnostic Pro Lifetime`. Disable quantity selection and pay-what-you-want. Do not use donations, tips, or memberships as Pro purchase triggers.

## Webhook

Configure Ko-fi to POST to:

`https://<host>/api/commerce/webhooks/kofi`

The endpoint:

- requires `application/x-www-form-urlencoded`;
- parses Ko-fi's `data=<JSON>` payload;
- constant-time compares `verification_token` with the server secret;
- never stores the verification token or raw webhook;
- deduplicates `message_id` and transaction ID;
- validates Shop Order, exact item code, quantity, currency and amount;
- creates one lifetime entitlement;
- auto-binds only when exactly one verified purchase session matches the buyer email;
- leaves unmatched legitimate payments as unclaimed for Restore Pro.

Database/transient failures return 5xx so Ko-fi can retry. Legitimate but irrelevant Ko-fi events are durably ignored and return 200.

## OTP identity / purchase session

Purchase:

1. App sends purchase email + installation ID to `/api/commerce/identity/start`.
2. Benedict sends a six-digit one-time code.
3. `/api/commerce/identity/verify` creates a 30-minute purchase session.
4. App receives Ko-fi Shop URL, opaque session token and device credential.
5. App opens Ko-fi and polls `/api/commerce/sessions/status`.
6. Verified Ko-fi payment matches the email/session and creates the device binding.
7. App receives active entitlement and unlocks Pro.

Restore:

1. App starts `purpose=restore` email verification.
2. After OTP verification, backend finds the active lifetime entitlement by blind email index.
3. Backend binds/rotates a device credential and returns a seven-day offline lease window.

No Bearagnostic password account is created.

## Email privacy

Normalized buyer email is indexed with HMAC-SHA256 and separately encrypted with AES-GCM for controlled recovery use. Raw buyer email is not used as the database lookup key and must never appear in application logs.

## Legacy provider retirement

The former Stripe/PromptPay runtime routes return HTTP 410. They are retained as stubs so extracting this package over an existing repository cannot leave a live Stripe endpoint behind.

## Before real money

Keep `BENEDICT_COMMERCE_PUBLIC_ENABLED=false` until all are true:

- Ko-fi webhook token configured and a test event is accepted;
- D1 migration 0002 applied;
- exact Shop item code / currency / price configured;
- production OTP sender works;
- Android K3 build is connected to the correct Benedict backend host;
- duplicate/replay/wrong-item/wrong-amount tests pass;
- restore after reinstall passes;
- private founder-information buyer-side test passes;
- Privacy/Terms/purchase/refund text is updated;
- one controlled real-money purchase proves payment → webhook → entitlement → app unlock.

Ko-fi does not expose a documented public transaction-query API or complete refund/chargeback webhook lifecycle. Refund/dispute reversal remains an audited operator action until another trusted settlement source is integrated.
