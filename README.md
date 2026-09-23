# Benedict Interactive — Bearagnostic Showcase V4

## Production baseline
- `main`: `af549eff3a645104ce4f9fdc986d99d45976e117`
- Existing showcase CSS blob on that baseline: `98d07122e1d4db70abafd9886848eaa955289f9b`

## Exact fixes in this patch
1. **Hero** now uses the exact approved PNG supplied by the owner:
   `public/products/bearagnostic/showcase/dr-bear-hero-approved.png`
   - no regeneration
   - no recomposite
   - no WebP conversion
   - transparent PNG preserved byte-for-byte
2. **See what is actually there / desktop** now uses a true two-object stage above 920px:
   - real scan UI = independent left/center object
   - Dr. Bear = independent right object
   - no bounding-box overlap on desktop
3. Tablet/mobile rules at 920px and below are intentionally left as the V3 composition.

## Upload from repository root
Only these files are required:

```text
src/styles/bearagnostic-showcase.css
public/products/bearagnostic/showcase/dr-bear-hero-approved.png
```

`SiteLayout.astro` is **not** included because production already imports `bearagnostic-showcase.css`.

## Rollback
Restore the previous `src/styles/bearagnostic-showcase.css`. The new PNG can remain unused or be deleted.

## Suggested commit
`Fix Bearagnostic showcase geometry`
