# Benedict Interactive Web

Official website source for **Benedict Interactive**.

**Repository:** `grolygori789-crypto/benedict-interactive-web`  
**Status:** Pre-launch / production-premium refinement  
**Canonical plan:** `docs/BENEDICT_INTERACTIVE_WEB_MASTER_PLAN.md`

## Product intent

Benedict Interactive is the independent digital home for the studio, its products, support, downloads, release information, and future services.

The site should feel:

- bright, optimistic, and human;
- premium and meticulously designed;
- colorful without becoming childish;
- modern rather than retro;
- influenced by the human-centered spirit of classic personal computing without copying Apple/Macintosh trade dress, UI, icons, marks, typography, or layouts.

Bearagnostic is one product inside the Benedict Interactive ecosystem, not the identity of the whole website.

## Stack

- Astro
- TypeScript
- Static-first output
- Component-scoped Astro UI
- Centralized design tokens in `src/styles/global.css`
- Cloudflare Pages for current pre-launch staging deployment

The first foundation deliberately keeps dependencies small. Add libraries only when a concrete requirement justifies them.

## Local development

Requires Node.js `22.12.0` or newer supported by the project.

```bash
npm install
npm run dev
```

Quality check:

```bash
npm run verify
```

Production build:

```bash
npm run build
```

## Repository discipline

Git history is the archive. The working tree is not.

Never create files such as:

- `home-final.astro`
- `home-v2.astro`
- `new-header.astro`
- `styles-old.css`
- `backup/`
- ad-hoc exports or temporary screenshots

When a canonical file can be updated, update the same path. New files are created only when they have a new, durable responsibility.

Generated folders such as `node_modules`, `.astro`, and `dist` must never be committed.

Read the complete rules in the Master Plan before substantive work.

## Deployment status

Cloudflare Pages is the current pre-launch staging deployment target. The project is intentionally not bound to a permanent domain yet; the final `.com` domain can be attached later without restructuring the source tree.

GitHub Pages is **not** a deployment target for this Astro project. It should remain disabled; if enabled, GitHub may try to process Astro source files with the default Jekyll pipeline.

Search-engine indexing is disabled in `public/robots.txt` during development. This must be changed deliberately at public launch.
