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
| `BENEDICT_INTERACTIVE_WEB_MASTER_PLAN.md` | Canonical product/design/technical/commerce/localization plan |
| `REPOSITORY_MAP.md` | Canonical path ownership map |
| `ROOM_MIGRATION_PROMPT.md` | Clean-room project handoff prompt |

Do not add daily notes, scratchpads, exported ZIPs, or duplicate plans here.

## `public/`

Files served unchanged at the web root.

- `public/robots.txt` — staging indexing policy.
- `public/brand/` — canonical public Benedict brand assets.
- `public/products/bearagnostic/` — approved Bearagnostic web assets, including real Home/Insights screens and the privacy-safe scanning screen used by the final Home experience.

Asset roles keep stable semantic filenames. Replace canonical assets in place rather than adding `final`, `new`, `v2`, or backup variants.

## `src/components/`

Reusable public-site responsibilities:

- `SiteHeader.astro` — responsive Benedict header/navigation.
- `LanguageSwitcher.astro` — 16-locale selector and equivalent-route switching.
- `SiteFooter.astro` — shared footer/status/navigation.
- `HomePage.astro` — locale-aware Home composition.
- `ProductsPage.astro` — locale-aware Products composition.
- `BearagnosticPage.astro` — locale-aware Bearagnostic composition.
- `SupportPage.astro` — locale-aware Support composition.
- `ProductCard.astro` — older reusable product-card component; retain until a deliberate cleanup confirms no route needs it.

## `src/data/`

- `site.ts` — stable brand/repository metadata.

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

## `src/styles/`

- `global.css` — visual tokens, reset, shared structural styles, navigation shell, page layouts, responsive/adaptive rules, RTL-safe logical styling, and reduced-motion behavior.
- `typography.css` — canonical multilingual typography system for all 16 locales: native system/open-source fallback stacks, script-aware line-height/tracking, responsive type scale variables, and language-specific text rhythm.

Keep typographic rules centralized in `typography.css` rather than scattering language-specific font and line-height fixes through individual pages. Split additional CSS only when responsibilities become meaningfully independent; do not split merely to reduce line count.

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

Generated output, dependencies, caches, and secrets never belong in the repository.
