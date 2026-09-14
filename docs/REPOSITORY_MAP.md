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

- `SiteHeader.astro` — responsive Benedict header/navigation and route-aware active state. Product navigation points to the showroom rather than a single-product Home anchor so future products can be added without changing the global information architecture.
- `LanguageSwitcher.astro` — 16-locale selector and equivalent-route switching.
- `SiteFooter.astro` — shared public footer/status/navigation; do not expose developer infrastructure by default.
- `AccentHeading.astro` — shared multilingual semantic two-tone heading treatment. It uses a solid Benedict accent for the emphasized phrase; gradients are reserved for explicit brand marks and rare signature moments.
- `HomePage.astro` — locale-aware Home composition and responsive founder/product storytelling.
- `ProductsPage.astro` — locale-aware multi-product showroom composition backed by stable product metadata.
- `BearagnosticPage.astro` — locale-aware Bearagnostic composition, including a commerce-ready planned-state slot that can later receive live purchase UI without redesigning the surrounding page.
- `SupportPage.astro` — locale-aware customer support composition and public tester-program preview/status.
- `ProductCard.astro` — older reusable product-card component; retain until a deliberate cleanup confirms no route needs it.

## `src/data/`

- `site.ts` — stable brand/repository metadata.
- `products.ts` — stable non-localized product catalog metadata such as slug, route, platform, status, and canonical hero asset. Marketing copy stays in i18n.

Do not put prices, payment secrets, entitlement state, user data, or mutable backend truth into the public product registry.

## `src/i18n/`

- `content.ts` — locale registry, native names, route helpers, direction metadata, and canonical transcreated copy for all 16 supported locales.

Do not scatter translations through page files when the content belongs to the same localized responsibility.

## `src/layouts/`

- `SiteLayout.astro` — canonical HTML document shell, metadata, direction/language attributes, header/footer, and global style imports.

## `src/pages/`

Canonical English routes:

```text
/
├─ index.astro
├─ 404.astro
├─ support.astro
└─ products/
   ├─ index.astro
   └─ bearagnostic.astro
```

Localized static routes:

```text
/[locale]/
├─ index.astro
├─ support.astro
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

## Brand architecture rule

Benedict Interactive is the parent identity. Products and operational programs may have their own distinct marks while retaining Benedict family DNA. Do not reuse the parent Benedict mark as the logo for a separate product or program merely for convenience. Use parent-brand endorsement through naming, copy, and visual system rather than duplicate logos.

Editorial headings use semantic solid-color emphasis by default: graphite/navy base plus a solid Benedict accent phrase. Do not apply a left-to-right gradient through ordinary headline text. Gradients are reserved for explicit brand marks, product wordmarks, or rare signature moments where the effect is intentional.

## Future backend boundary

Payment, entitlement, tester authentication, moderation/admin, support-ticket data, and webhook handlers do **not** belong in the static public-site trust boundary. When implemented, keep secrets and privileged operations in isolated server-side services (for example Cloudflare Workers/D1/R2 or an equivalent replaceable backend).

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
