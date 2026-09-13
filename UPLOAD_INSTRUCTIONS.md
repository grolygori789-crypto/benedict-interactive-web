# Benedict Interactive Web — Products/Test Center Brand Fix

## Commit name
`Fix Bear panel and Test Center branding`

## Files to replace
Replace these files in the repository root exactly:

- `src/components/ProductsPage.astro`
- `src/components/SupportPage.astro`

## What this patch fixes
1. Removes the overlaid `Bearagnostic` wordmark from the Bear product artwork so it no longer collides with Dr. Bear on laptop layouts.
2. Restores Benedict Test Center branding to use the approved Benedict full logo asset instead of the isolated `B` mark.
3. Applies the same Test Center logo treatment on both the Products page and the Support page for consistency.
4. Adds layout-safe sizing for the full Benedict logo so it scales cleanly across mobile, tablet, laptop, and desktop.

## QA checklist after upload
- Products page: Dr. Bear artwork shows with **no text overlapping the mascot**.
- Products page: Benedict Test Center card shows the **approved Benedict logo**, centered and clean.
- Support page: Tester Program / Test Center section also shows the **approved Benedict logo**.
- Mobile/tablet/laptop/desktop: no overflow, clipping, or awkward brand collisions.

## Notes
- This patch is intentionally narrow to avoid regression.
- It does **not** change the main site header/footer brand mark.
