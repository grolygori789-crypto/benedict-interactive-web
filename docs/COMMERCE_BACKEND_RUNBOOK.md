# Benedict Commerce Backend — Operations Runbook

**Status:** P0 foundation, safe-by-default, not live until external bindings/secrets are configured and public commerce is explicitly enabled.

## 1. Security model

The commerce system is server-authoritative:

`trusted payment confirmation -> order fulfillment -> entitlement -> app claim/status -> Pro`

A browser or Android client can request checkout and present identifiers, but it cannot set the price, mark an order paid, or grant itself Pro.

The private Operations Console lives at `/ops` and is deliberately absent from public navigation. Hiding the route is **not** a security boundary. `/ops/*` verifies the Cloudflare Access JWT on every request and additionally requires one configured admin email.

The source repository may be public. Never commit secrets, Stripe keys, webhook secrets, Cloudflare Access values, recovery credentials, or production D1 identifiers that should remain private.

## 2. Cloudflare D1

Create one D1 database, recommended name:

`benedict-commerce`

Bind it to the Benedict Pages project as:

`BENEDICT_COMMERCE_DB`

Apply:

`migrations/0001_commerce.sql`

The seed product `bearagnostic_pro_lifetime` starts with `active = 0` and `unit_amount = NULL`. Uploading this batch alone therefore cannot start taking money.

## 3. Required environment/secrets

Configure these in Cloudflare Pages production environment. Use encrypted secrets for Stripe values.

```text
BENEDICT_COMMERCE_DB              D1 binding
BENEDICT_PUBLIC_ORIGIN            https://<production-host>
BENEDICT_COMMERCE_PUBLIC_ENABLED  false

STRIPE_SECRET_KEY                 sk_test_... while testing
STRIPE_WEBHOOK_SECRET             whsec_...

BENEDICT_ACCESS_TEAM_DOMAIN       https://<team>.cloudflareaccess.com
BENEDICT_ACCESS_AUD               <Access application audience tag>
BENEDICT_ADMIN_EMAIL              <private admin sign-in email>
```

Keep `BENEDICT_COMMERCE_PUBLIC_ENABLED=false` through infrastructure and test-mode QA.

## 4. Cloudflare Access — private admin only

Create a Cloudflare Access self-hosted application covering the `/ops*` path of the Benedict production hostname.

Policy:

- Allow only the private admin identity chosen by P'Benz.
- Prefer an identity provider/account protected with strong MFA/passkey.
- Copy the application Audience (AUD) tag into `BENEDICT_ACCESS_AUD`.
- Set the Cloudflare One team domain in `BENEDICT_ACCESS_TEAM_DOMAIN`.
- Set the exact allowed admin email in `BENEDICT_ADMIN_EMAIL`.

The code verifies `Cf-Access-Jwt-Assertion` using the account public signing keys, validates issuer, audience, expiration, and the exact admin email. Missing or invalid configuration fails closed.

## 5. Stripe + PromptPay

Use Stripe test mode first.

1. Enable PromptPay in Stripe payment-method settings for the Thailand account.
2. Configure a webhook endpoint:

   `https://<production-host>/api/commerce/webhooks/stripe`

3. Subscribe at minimum to:

```text
checkout.session.completed
checkout.session.async_payment_succeeded
checkout.session.expired
payment_intent.succeeded
payment_intent.payment_failed
charge.refunded
```

4. Put the endpoint signing secret into `STRIPE_WEBHOOK_SECRET`.

The webhook handler verifies the `Stripe-Signature` against the raw request body before parsing/processing it. A repeated Stripe event is idempotent, and order/entitlement writes are additionally protected by unique database constraints.

## 6. Operations Console

After Access is configured, open:

`https://<production-host>/ops`

The console can:

- view order counts and recent orders;
- view active/revoked/refunded entitlements;
- inspect Stripe webhook processing status;
- set the server-side Bearagnostic Pro THB price;
- activate/deactivate the product;
- reconcile an order against Stripe;
- revoke/reactivate a non-refunded entitlement with a mandatory reason;
- view the admin audit log.

There is deliberately **no** “Mark paid” button. Reconciliation asks Stripe for the actual Checkout Session and only fulfills when Stripe reports payment as paid.

## 7. Public API foundation

### Create checkout

`POST /api/commerce/orders`

The server reads the product price from D1. The client cannot provide the amount.

### Order status

`GET /api/commerce/orders/:orderId`

Requires the opaque order token returned at order creation as `Authorization: Bearer ...`.

### Claim entitlement to a device

`POST /api/commerce/entitlements/claim`

Requires the order token. The Android client will generate a stable random `deviceId` and a high-entropy `deviceSecret`; only hashes are stored in D1.

### Check entitlement

`POST /api/commerce/entitlements/status`

Requires the bound device ID/secret. Returns `isPro` from the server entitlement status.

## 8. Automatic unlock contract

A verified paid event performs these actions idempotently:

1. verify Stripe webhook signature;
2. match the server-created order;
3. verify amount and currency against the server-side order;
4. record the payment as succeeded;
5. set the order to fulfilled;
6. create exactly one active Pro entitlement for that order.

The next Android integration batch will make Bearagnostic claim/poll this entitlement and update the existing `EntitlementManager` so the current capability gates unlock immediately after server confirmation.

## 9. Refund/revocation behavior

A full Stripe `charge.refunded` event marks the order/payment refunded and changes the entitlement to `refunded`. A refunded entitlement cannot be reactivated from the console.

A partial refund is recorded as `partially_refunded` but does not automatically revoke lifetime Pro in this foundation; commercial policy should decide that behavior before live sales.

## 10. Before enabling real money

Do **not** set `BENEDICT_COMMERCE_PUBLIC_ENABLED=true` until all are complete:

- production D1 migration applied;
- Cloudflare Access verified with the private admin identity;
- Stripe test Checkout succeeds with PromptPay;
- webhook signature verification observed in production/test infrastructure;
- duplicate webhook replay proves only one entitlement is created;
- wrong amount/currency tests are rejected;
- refund event behavior is verified;
- Android server-entitlement integration is shipped and tested;
- Privacy/Terms are updated for order email/payment-provider processing;
- abuse/rate-limit controls for checkout creation are configured;
- production Stripe keys replace test keys only after sign-off.
