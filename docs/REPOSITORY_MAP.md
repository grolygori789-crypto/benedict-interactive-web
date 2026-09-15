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

Do not add daily notes, scratchpads, exported ZIPs, or duplicate plans here.

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

Do not add public Reviews, Commerce, Account, or Tester routes until they have real content/behavior and the security model is ready.

## `src/styles/`

- `global.css` — visual tokens, reset, shared structural styles, navigation shell, page layouts, responsive/adaptive rules, RTL-safe logical styling, and reduced-motion behavior.
- `typography.css` — canonical multilingual typography system for all 16 locales: native system/open-source fallback stacks, script-aware line-height/tracking, responsive type scale variables, and language-specific text rhythm.

Keep typographic rules centralized in `typography.css` rather than scattering language-specific font and line-height fixes through individual pages. Split additional CSS only when responsibilities become meaningfully independent; do not split merely to reduce line count.

## `functions/`

Cloudflare Pages Functions are the narrow server-side trust boundary for small public-site capabilities that cannot be expressed safely in the static bundle.

- `functions/api/analytics.js` — write-only first-party product-event ingestion endpoint for Cloudflare Workers Analytics Engine. It validates a small allowlist of aggregate events and deliberately does not store IP addresses, user-agent strings, referrers, cookies, local-storage identifiers, account identifiers, or arbitrary payload fields.

The public analytics endpoint must remain write-only. Analytics read credentials, SQL/API tokens, dashboards, moderation/admin data, payment logic, entitlement state, and other privileged operations must never be exposed in the public client or this endpoint.

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

## Brand architecture rule

Benedict Interactive is the parent identity. Products and operational programs may have their own distinct marks while retaining Benedict family DNA. Do not reuse the parent Benedict mark as the logo for a separate product or program merely for convenience. Use parent-brand endorsement through naming, copy, and visual system rather than duplicate logos.

Editorial headings use semantic solid-color emphasis by default: graphite/navy base plus a solid Benedict accent phrase. Do not apply a left-to-right gradient through ordinary headline text. Gradients are reserved for explicit brand marks, product wordmarks, or rare signature moments where the effect is intentional.

## Future backend boundary

Payment, entitlement, tester authentication, moderation/admin, support-ticket data, analytics read credentials, webhook handlers, and any future server-side contact-delivery credentials do **not** belong in the static public-site trust boundary. When implemented, keep secrets and privileged operations in isolated server-side services (for example Cloudflare Workers/D1/R2/Analytics Engine or an equivalent replaceable backend).

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
