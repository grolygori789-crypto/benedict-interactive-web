# Repository Map

This file explains the durable responsibility of each committed path. It exists to prevent file drift.

## Root

| Path | Responsibility |
|---|---|
| `README.md` | Human-readable project entry point |
| `package.json` | Runtime/dev dependencies and canonical scripts |
| `astro.config.mjs` | Astro build configuration |
| `tsconfig.json` | TypeScript configuration |
| `.nvmrc` | Canonical Node baseline |
| `.gitignore` | Prevent generated/local files entering Git |
| `.editorconfig` | Basic cross-editor formatting rules |

## `.github/`

| Path | Responsibility |
|---|---|
| `.github/workflows/quality.yml` | Main branch / PR verification |

## `docs/`

| Path | Responsibility |
|---|---|
| `docs/BENEDICT_INTERACTIVE_WEB_MASTER_PLAN.md` | Canonical product/technical/operating plan |
| `docs/REPOSITORY_MAP.md` | Canonical repository ownership map |
| `docs/ROOM_MIGRATION_PROMPT.md` | Prompt for starting a clean ChatGPT project room |

Do not add daily notes, throwaway exports, meeting scraps, or duplicated plans here.

## `public/`

Files served unchanged at the web root.

Current:

| Path | Responsibility |
|---|---|
| `public/robots.txt` | Search indexing policy |

Future approved public assets should use stable semantic paths such as:

```text
public/brand/
public/products/bearagnostic/
```

Do not use version words such as `final`, `new`, or `v2` in asset filenames when the role is unchanged.

## `src/components/`

Reusable presentational/structural pieces.

Current:

- `SiteHeader.astro`
- `SiteFooter.astro`
- `ProductCard.astro`

A component should be created only when it has a durable reusable responsibility.

## `src/data/`

Centralized stable data/config that would otherwise be duplicated.

Current:

- `site.ts` — brand metadata, navigation, product metadata.

Do not turn this folder into a miscellaneous dumping ground.

## `src/layouts/`

Page shells.

Current:

- `SiteLayout.astro` — canonical public site document/layout shell.

## `src/pages/`

Astro file-based routes.

Current:

```text
/
├─ index.astro
├─ 404.astro
├─ support.astro
└─ products/
   ├─ index.astro
   └─ bearagnostic.astro
```

Create a new page only when it represents a real route.

## `src/styles/`

Current:

- `global.css` — design tokens, shared site styles, responsive/adaptive system.

As the site grows, split CSS only when responsibilities become meaningfully independent. Do not split files merely to make them smaller.

## Overwrite policy

When a path still owns the same responsibility, replace its content in place.

Examples:

- new header design → overwrite `src/components/SiteHeader.astro`;
- new homepage → overwrite `src/pages/index.astro`;
- new design tokens → update `src/styles/global.css`;
- revised canonical plan → update the same Master Plan file.

Git history preserves previous versions.

## Forbidden repository patterns

Do not create:

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

unless a future requirement gives that word a genuine semantic meaning rather than using it as version clutter.
