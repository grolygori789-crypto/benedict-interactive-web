# Benedict Interactive — Bearagnostic Showcase V2

## Baseline
Built against repository `grolygori789-crypto/benedict-interactive-web`:

- `main`: `035342d12f940b22771db871b48038740bce5bec`
- `src/layouts/SiteLayout.astro` blob: `66888f32c56def5bc62b3e98dbad6474ab31ed6c`
- `src/styles/mobile-hardening.css` blob: `b859b2fa6a98f9c4a5eacd159c8d53ebdc2a664c`

## What changes
This is deliberately a low-regression visual prototype.

1. Adds `src/styles/bearagnostic-showcase.css`.
2. Updates `src/layouts/SiteLayout.astro` only to import that stylesheet after `mobile-hardening.css`.
3. Adds three showcase assets under `public/products/bearagnostic/showcase/`.
4. Does **not** replace `BearagnosticPage.astro` and does not modify product/release/commerce/legal/support logic.

## Visual result
- The Bearagnostic hero uses the new Master Hero Dr. Bear.
- The B93 Home screen supplied by the project owner has been perspective-composited into Dr. Bear's tablet.
- The existing second hero phone is hidden to avoid duplicate product UI.
- The first feature story becomes a premium device stage using the real B93 scan-progress screen plus the new Ultra-fast Dr. Bear art.
- The scan screenshot has only the sensitive filename/path area replaced with neutral copy; the rest of the screenshot is preserved.
- Product storytelling is visually ordered before release evidence. Release, Pro, purchase and FAQ sections remain intact below.

## Upload
Upload the package contents from the repository root, preserving paths exactly.

Changed / new files:

```text
src/layouts/SiteLayout.astro
src/styles/bearagnostic-showcase.css
public/products/bearagnostic/showcase/dr-bear-hero-real-ui.webp
public/products/bearagnostic/showcase/dr-bear-ultra-fast-scanning.webp
public/products/bearagnostic/showcase/app-scan-progress-sanitized.webp
```

## Rollback
To revert the prototype safely:

1. Restore the previous `src/layouts/SiteLayout.astro` (remove the `bearagnostic-showcase.css` import).
2. Delete `src/styles/bearagnostic-showcase.css`.
3. The three showcase assets may be deleted or left unused; they do not affect runtime logic.

No Android / B93 source is touched.

## Suggested commit
`Prototype Bearagnostic showcase`

## Web asset optimisation

The approved PNG source artwork was converted to high-quality WebP for the website upload. The three live assets total roughly 545 KB instead of roughly 3.8 MB as PNG, while preserving transparency on both Dr. Bear illustrations. This keeps the prototype much lighter on mobile.

