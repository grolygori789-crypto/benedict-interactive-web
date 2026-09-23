# Benedict Interactive — Bearagnostic Showcase V3

## Baseline
Built against repository `grolygori789-crypto/benedict-interactive-web`:

- `main`: `035342d12f940b22771db871b48038740bce5bec`
- `src/layouts/SiteLayout.astro` blob: `66888f32c56def5bc62b3e98dbad6474ab31ed6c`
- `src/styles/mobile-hardening.css` blob: `b859b2fa6a98f9c4a5eacd159c8d53ebdc2a664c`

## What changes
This remains a low-regression visual prototype.

1. Keeps the additive `src/styles/bearagnostic-showcase.css` approach.
2. Keeps `src/layouts/SiteLayout.astro` importing that stylesheet after `mobile-hardening.css`.
3. Replaces the hero artwork with the approved corrected Dr. Bear tablet-hand asset.
4. Refines the first feature-stage composition so the real scan-progress screen is visible on desktop instead of being blocked by Dr. Bear.
5. Does **not** modify product / release / commerce / legal / support logic.

## Visual result
- The Bearagnostic hero now uses the corrected Dr. Bear PNG composition with the real B93 Home screen visible cleanly inside the tablet.
- The old duplicate hero phone stays hidden.
- The first feature story still uses the privacy-sanitized B93 scan-progress screen, but the desktop composition now prioritizes scan readability while keeping Dr. Bear as a premium supporting visual.
- Tablet / mobile breakpoints preserve the more compact overlapping composition where it already worked well.

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
To revert safely:

1. Restore the previous `src/layouts/SiteLayout.astro` (remove the `bearagnostic-showcase.css` import).
2. Delete `src/styles/bearagnostic-showcase.css`.
3. The showcase assets may be deleted or left unused.

## Suggested commit
`Polish Bearagnostic showcase`
