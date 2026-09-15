# Repository Map

This file records the durable responsibility of committed paths so the repository does not drift.

## Root

| Path | Responsibility |
|---|---|
| `README.md` | Human-readable project entry point |
| `package.json` | Runtime/dev dependencies and canonical scripts |
| `astro.config.mjs` | Astro build configuration |
| `tsconfig.json` | TypeScript configuration |
| `.nvmrc` | Canonical Node baseline |
| `.gitignore` | Generated/local-file exclusions |
| `.editorconfig` | Cross-editor formatting basics |

## `docs/`

| Path | Responsibility |
|---|---|
| `BENEDICT_INTERACTIVE_WEB_MASTER_PLAN.md` | Canonical product/design/technical/commerce/localization/tester/support plan |
| `REPOSITORY_MAP.md` | Canonical path ownership map |
| `ROOM_MIGRATION_PROMPT.md` | Clean-room project handoff prompt |
| `COMMERCE_BACKEND_RUNBOOK.md` | Operational setup, security gates, bindings, Stripe/PromptPay webhook setup, and launch checklist for the P0 commerce/entitlement backend |

Do not add daily notes, scratchpads, exported ZIPs, or duplicate plans here.

## `migrations/`

- `migrations/0001_commerce.sql` — initial D1 commerce schema for products, orders, verified payments, entitlements, device bindings, webhook idempotency, and admin audit history. The seeded Bearagnostic Pro product is disabled and unpriced by default.

## `public/`

Files served unchanged at the web root.

- `public/robots.txt` — staging indexing policy.
- `public/brand/` — canonical public Benedict brand assets. `benedict-test-center-mark.svg` is the distinct endorsed-sub-brand symbol for Benedict Test Center; it remains visually related to Benedict Interactive but must not reuse the parent mark as if the two identities were interchangeable.
- `public/products/bearagnostic/` — approved Bearagnostic web assets, including real Home/Insights/scanning imagery and Dr. Bear variants.

Asset roles keep stable semantic filenames. Replace canonical assets in place rather than adding `final`, `new`, `v2`, or backup variants.

## `src/components/`

Reusable public-site responsibilities:

- `SiteHeader.astro` — responsive Benedict header/navigation and route-aware active state. Product navigation points to the showroom rather than a single-product Home anchor so future products can be added without changing the global information architecture. Contact is a first-class route and collapses into the existing mobile navigation at the content-driven header breakpoint.
- `LanguageSwitcher.astro` — 16-locale selector and equivalent-route switching.
- `SiteFooter.astro` — shared public footer with brand identity, Explore links, Legal links, studio location/email, and copyright notice. Keep legal/contact access visible without turning the footer into a dominant content section.
- `AccentHeading.astro` — shared multilingual semantic two-tone heading treatment. It uses a solid Benedict accent for the emphasized phrase; gradients are reserved for explicit brand marks and rare signature moments.
- `AnalyticsClient.astro` — privacy-minded first-party interaction instrumentation. It emits only approved aggregate product events, uses no cookies/localStorage/fingerprinting, and derives product identity from the canonical product catalog.
- `HomePage.astro` — locale-aware Home composition and responsive founder/product storytelling.
- `ProductsPage.astro` — locale-aware multi-product showroom composition backed by stable product metadata.
- `BearagnosticPage.astro` — locale-aware Bearagnostic composition, including a commerce-ready planned-state slot that can later receive live purchase UI without redesigning the surrounding page.
- `SupportPage.astro` — locale-aware customer support composition and public tester-program preview/status.
- `ContactPage.astro` — locale-aware Benedict Interactive contact surface and local message composer. The composer prepares a draft in the visitor's browser, opens Gmail Web Compose on desktop-class browsers to avoid unreliable protocol-handler loops, and keeps native `mailto:` handoff on mobile devices. It does not claim a server-side send and does not persist message content on the website.
- `LegalDocumentPage.astro` — shared editorial renderer for Privacy, Terms, Software License, and Legal & Rights documents. It renders the selected locale natively, including RTL behavior through the site locale metadata; non-English pages carry a localized notice that the English version remains the authoritative reference if wording differs.
- `ProductCard.astro` — older reusable product-card component; retain until a deliberate cleanup confirms no route needs it.

## `src/data/`

- `site.ts` — stable brand/repository/contact metadata, including the public Benedict Interactive email and studio location.
- `products.ts` — stable non-localized product catalog metadata such as slug, route, platform, status, and canonical hero asset. Marketing copy stays in i18n.

Do not put prices, payment secrets, entitlement state, user data, or mutable backend truth into the public product registry.

## `src/i18n/`

- `content.ts` — locale registry, native names, route helpers, direction metadata, and canonical transcreated product/site copy for all 16 supported locales.
- `legal.ts` — localized Contact/Legal interface labels, the authoritative English legal-document content, and locale-aware legal-document selection.
- `legal-documents.ts` — reader-first localized legal copy for the 15 non-English supported locales. Translations preserve the English document structure and legal meaning while using natural, locale-appropriate language; the localized notice states that the English version remains the authoritative reference if wording differs.

Do not scatter translations through page files when the content belongs to the same localized responsibility.

## `src/layouts/`

- `SiteLayout.astro` — canonical HTML document shell, metadata, direction/language attributes, header/footer, global style imports, and the shared analytics client hook.

## `src/pages/`

Canonical English routes:

```text
/
├─ index.astro
├─ 404.astro
├─ support.astro
├─ contact.astro
├─ privacy.astro
├─ terms.astro
├─ license.astro
├─ legal.astro
└─ products/
   ├─ index.astro
   └─ bearagnostic.astro
```

Localized static routes:

```text
/[locale]/
├─ index.astro
├─ support.astro
├─ contact.astro
├─ privacy.astro
├─ terms.astro
├─ license.astro
├─ legal.astro
└─ products/
   ├─ index.astro
   └─ bearagnostic.astro
```

English remains unprefixed. Non-English localized routes are generated from the approved locale registry.

Private operator surface:

- `src/pages/ops.astro` — Benedict Operations console. It is intentionally absent from public navigation and search indexing. Security does not depend on route secrecy: `functions/ops/*` requires a validated Cloudflare Access JWT and the configured single-admin email before the static console or its API can be reached.

Do not add public Reviews, Account, or Tester routes until they have real content/behavior and the security model is ready. Public purchase UI should remain disabled until the P0 commerce backend, Android entitlement integration, policy updates, abuse controls, and real-money QA are complete.

## `src/styles/`

- `global.css` — visual tokens, reset, shared structural styles, navigation shell, page layouts, responsive/adaptive rules, RTL-safe logical styling, and reduced-motion behavior.
- `typography.css` — canonical multilingual typography system for all 16 locales: native system/open-source fallback stacks, script-aware line-height/tracking, responsive type scale variables, and language-specific text rhythm.

Keep typographic rules centralized in `typography.css` rather than scattering language-specific font and line-height fixes through individual pages. Split additional CSS only when responsibilities become meaningfully independent; do not split merely to reduce line count.

## `functions/`

Cloudflare Pages Functions are the narrow server-side trust boundary for capabilities that cannot be expressed safely in the static bundle.

- `functions/api/analytics.js` — write-only first-party product-event ingestion endpoint for Cloudflare Workers Analytics Engine. It validates a small allowlist of aggregate events and deliberately does not store IP addresses, user-agent strings, referrers, cookies, local-storage identifiers, account identifiers, or arbitrary payload fields.
- `functions/_lib/http.js` — shared server response, validation, public-commerce safety-gate, origin, and D1 helpers.
- `functions/_lib/crypto.js` — Web Crypto helpers for high-entropy identifiers, SHA-256 hashing, HMAC signing, and constant-time signature comparison.
- `functions/_lib/access.js` — Cloudflare Access JWT validation for the private operator surface, including signature, issuer, audience, expiry, and exact admin-email checks.
- `functions/_lib/stripe.js` — direct Stripe REST/PromptPay Checkout adapter and raw-body webhook signature verification. Stripe secrets remain server-side environment secrets.
- `functions/_lib/commerce.js` — server-authoritative order/payment/entitlement state transitions, device binding, webhook idempotency, refund handling, and admin auditing.
- `functions/api/commerce/orders.js` — public checkout creation. Price and sellability come only from D1; browser-provided amounts are never trusted.
- `functions/api/commerce/orders/[orderId].js` — private-to-the-purchaser order-status endpoint using the opaque order token.
- `functions/api/commerce/entitlements/claim.js` — binds a fulfilled entitlement to an Android-generated device ID/secret without storing either value in plaintext.
- `functions/api/commerce/entitlements/status.js` — server entitlement status for a previously bound device.
- `functions/api/commerce/webhooks/stripe.js` — verified Stripe webhook ingestion. Successful verified payment fulfills the order and creates exactly one Pro entitlement; full refund transitions the entitlement to refunded.
- `functions/ops/_middleware.js` — mandatory Access authentication/authorization and private/noindex security headers for all `/ops/*` requests.
- `functions/ops/[[path]].js` — authenticated pass-through route so the private middleware also protects the static `/ops` console.
- `functions/ops/api/*` — operator-only overview, product sale configuration, Stripe reconciliation, entitlement revoke/reactivate, and audit-backed operations.

The public analytics endpoint must remain write-only. Analytics read credentials, SQL/API tokens, dashboards, moderation/admin data, payment logic, entitlement state, and other privileged operations must never be exposed in the public client or analytics endpoint.

Commerce is fail-closed. `BENEDICT_COMMERCE_PUBLIC_ENABLED` must remain false until production D1, Stripe, Access, abuse controls, Android server-entitlement integration, legal/privacy updates, and real-money QA are approved. The seed product also starts inactive and without a price.

The current Contact composer is intentionally client-side and does not submit message content to a Pages Function. Do not add a fake “sent” state. Direct server-side contact delivery may be added later only with a real provider/domain configuration, abuse protection, a clear privacy update, and a protected server-side trust boundary.

## Analytics foundation

Benedict analytics uses two separate layers with different responsibilities:

- Cloudflare Web Analytics — privacy-first visit/page-view/referrer/device/country and real-user performance analytics.
- Workers Analytics Engine — aggregate product interaction events such as `product_view`, `product_open`, `download_click`, `support_click`, and `pro_interest`.

Product analytics uses the canonical `productCatalog.slug` as the product identifier so future products can enter the same event model without creating product-specific tracking code.

A download CTA click is not a verified download. Only record `download_click` from the public website until a trusted store/direct-download source can independently prove a completed download. Any future `download_verified` event must be written server-side from trusted evidence; it must never be accepted from the public browser endpoint. Never infer an install from a click or file request.

The Analytics Engine binding name is `BENEDICT_ANALYTICS`; the canonical dataset is `benedict_product_events`.

Event schema v1 is fixed as:

```text
index1  = product_slug
blob1   = schema_version (`v1`)
blob2   = event
blob3   = channel
blob4   = locale
blob5   = surface
blob6   = path (query/fragment stripped)
blob7   = host
blob8   = platform
blob9   = country code or `unknown`
double1 = count (`1`)
```

Workers Analytics Engine is an event-analysis layer, not the permanent business archive. Its vendor retention window must be rechecked before launch and before any long-term dashboard is treated as historical truth. If multi-year download history becomes a business requirement, add a server-side daily rollup/export layer rather than introducing visitor identifiers.

## Commerce / entitlement foundation

The P0 commerce path is:

`server-created order -> Stripe PromptPay Checkout -> verified Stripe webhook -> server fulfillment -> Pro entitlement -> device claim/status -> Android EntitlementManager`

Payment confirmation is provider evidence, not a screenshot, client flag, browser callback, or admin guess. There is deliberately no admin “Mark paid” action. Manual reconciliation asks Stripe for the real Checkout status and only fulfills if Stripe reports payment as paid.

The current backend foundation uses a D1 binding named `BENEDICT_COMMERCE_DB`. Stripe and Access configuration remain environment/server secrets. External providers are replaceable infrastructure; Benedict owns the durable order and entitlement state.

## Brand architecture rule

Benedict Interactive is the parent identity. Products and operational programs may have their own distinct marks while retaining Benedict family DNA. Do not reuse the parent Benedict mark as the logo for a separate product or program merely for convenience. Use parent-brand endorsement through naming, copy, and visual system rather than duplicate logos.

Editorial headings use semantic solid-color emphasis by default: graphite/navy base plus a solid Benedict accent phrase. Do not apply a left-to-right gradient through ordinary headline text. Gradients are reserved for explicit brand marks, product wordmarks, or rare signature moments where the effect is intentional.

## Future backend boundary

Payment, entitlement, tester authentication, moderation/admin, support-ticket data, analytics read credentials, webhook handlers, and future server-side contact-delivery credentials belong only in isolated server-side services or Pages Functions backed by protected bindings (for example Cloudflare Workers/D1/R2/Analytics Engine or an equivalent replaceable backend). Secrets and privileged operations never belong in the static public-site trust boundary.

## Overwrite policy

When a path still owns the same responsibility, replace it in place. Git history preserves previous versions.

Forbidden version-clutter patterns include:

```text
*-old.*
*-backup.*
*-final.*
*-final2.*
*-new.*
*-v2.*
backup/
archive/
temp/
exports/
```

Generated output, dependencies, caches, local packages, and secrets never belong in the repository.
