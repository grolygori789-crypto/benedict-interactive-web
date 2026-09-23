# Benedict Interactive — Bearagnostic Showcase V5

## Production baseline
- Repository: `grolygori789-crypto/benedict-interactive-web`
- `main`: `fd7e37ed670e97094e2c98094ac3e71d217d61fc`
- Production showcase CSS blob before V5: `27c9258ff30eb9044e0c45c7ff5d0bb81494a084`

## V5 fixes

### 1. Master Hero — approved source, web-optimised runtime
The runtime hero is generated **only** from the owner-approved PNG composition.
No pose, hand, tablet, face, UI, or composition is changed.

Approved PNG source SHA-256:
`1f4508bf00b6e9f300a04fab10aaba99faacfaccd2f5d712a0150111719841da`

Live WebP:
`public/products/bearagnostic/showcase/dr-bear-hero-approved.webp`

- 1366 × 1151
- alpha preserved exactly
- ~272 KB instead of ~1.66 MB PNG
- decoded RGB PSNR against source: ~40.82 dB

The existing PNG may remain in the repository unused; V5 CSS loads the optimised WebP.

### 2. “See what is actually there” — complete visual redesign
The previous desktop layout used independent browser-positioned objects and could look disconnected.
V5 removes that risk.

For viewport widths **681px and above**:
- the real, privacy-sanitised B93 scan screen and Dr. Bear are art-directed into a single locked product-stage asset
- the objects cannot overlap or drift independently
- the stage scales as one composition
- 681–980px uses a one-column story layout so the visual receives enough width
- 981px+ uses a weighted text/product split tuned for premium product-launch presentation

For **680px and below**:
- the existing compact mobile composition is intentionally retained

New stage asset:
`public/products/bearagnostic/showcase/scan-stage-desktop.webp`

## Upload from repository root
Only these 3 files are required:

```text
src/styles/bearagnostic-showcase.css
public/products/bearagnostic/showcase/dr-bear-hero-approved.webp
public/products/bearagnostic/showcase/scan-stage-desktop.webp
```

No Android source, commerce logic, release logic, legal pages, support flow, or `BearagnosticPage.astro` is changed.

## Rollback
Restore the previous `src/styles/bearagnostic-showcase.css`. The two new WebP files may remain unused or be deleted later.

## Commit name
`Polish Bearagnostic product stage`
