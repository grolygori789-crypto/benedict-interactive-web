# Benedict Interactive Web — Master Plan

**Document:** Canonical Project Master Plan  
**Revision:** 3.0  
**Date:** 2026-09-13  
**Repository:** `grolygori789-crypto/benedict-interactive-web`  
**Default branch:** `main`  
**Project status:** Pre-launch / premium art-direction refinement  
**Product authority:** P'Benz / Benedict Interactive

---

## 1. Purpose and authority

This file is the canonical product, design, technical, localization, commerce, and operating plan for the Benedict Interactive website. Git history is the archive; this document records the current durable decisions.

When sources disagree, use this order:

1. latest explicit instruction from P'Benz in the current conversation;
2. latest GitHub `main`;
3. this Master Plan;
4. approved brand/product assets and current deployed-device evidence;
5. Git history and older discussions.

Never silently let an older chat override a newer instruction or production state.

---

## 2. Brand and role

**Benedict Interactive** is the official parent brand and digital home.

Canonical brand line:

> Ideas for a brighter everyday

Bearagnostic is one product inside the Benedict Interactive ecosystem. The site must never feel like a Bearagnostic microsite wearing a corporate logo.

Long-term responsibilities:

- company identity;
- products and official product information;
- downloads/distribution links;
- support and release information;
- privacy/legal information;
- purchase/licensing flows when ready;
- future products and services.

Strategic independence principle:

> Own the product. Own the customer relationship. Rent replaceable infrastructure. Avoid unnecessary gatekeepers.

---

## 3. Experience vision — Bright Humanist Computing

The design language is **Bright Humanist Computing**.

The emotional target is bright, optimistic, intelligent, mature, friendly, premium, meticulous, independent, and memorable without being loud.

The site should feel expensive because of typography, hierarchy, spacing, rhythm, illustration, clarity, motion restraint, and product truth — not because it is dark, metallic, overloaded with glass effects, or decorated for decoration's sake.

### Macintosh influence

The site may borrow the human-centered *spirit* associated with classic personal computing:

- approachable technology;
- understandable interfaces;
- playful intelligence;
- optimism;
- personality;
- useful visual metaphors;
- small moments of delight.

It must not copy Apple/Macintosh trade dress, logos, Finder/menu-bar replicas, Mac face icons, traffic-light window controls as a motif, rainbow Apple stripes, proprietary typefaces, exact product-page compositions, or recognizable system layouts.

The intended reaction is:

> “This has the warmth and confidence of human-centered computing.”

—not—

> “This is pretending to be an Apple website.”

### Premium rule

Subtract before adding. Prefer fewer, better-resolved visual ideas over many effects. The work should feel art-directed rather than templated.

---

## 4. Visual system

Base direction:

- porcelain / warm-cool white backgrounds;
- graphite / near-black primary text;
- soft slate secondary text;
- Benedict blue/cyan as the principal technology accent;
- violet, amber, and green used selectively;
- generous negative space;
- precise rounded geometry;
- restrained shadows and gradients;
- no decorative overload.

Typography must be contemporary, open, warm, highly legible, and premium through proportion and spacing. Do not use Apple-proprietary fonts. The current implementation uses a privacy-safe system stack; a licensed self-hosted type system can be evaluated later as a deliberate design-system change.

Icons should be simple, rounded-geometric, consistent, and original. Motion is a finishing tool only; respect `prefers-reduced-motion` and never gate understanding behind hover.

---

## 5. Responsive and adaptive standard

The site must look intentionally designed on **smartphone, tablet, laptop, desktop/PC, and large displays**.

This is adaptive art direction, not “desktop shrunk until it fits.”

### Mobile

- mobile-first reading rhythm;
- compact header with visible Benedict identity;
- comfortable touch targets;
- one-column content when appropriate;
- product imagery never stretched, crushed, or forced into desktop collage logic;
- no horizontal scrolling;
- no hover dependency;
- clear CTA hierarchy.

### Tablet

Tablet is first-class, not a stretched phone or cramped desktop. Use one or two columns based on content and preserve comfortable touch geometry.

### Laptop / desktop

Use editorial whitespace, larger storytelling, deliberate multi-column layouts, restrained hover states, and balanced typography without wasting the viewport.

### Large display

Cap reading and composition widths. Do not allow artwork or text to stretch until proportions lose intent.

Reference breakpoints remain content-driven; practical guides are roughly mobile below 680–720 px, intermediate/tablet to ~980 px, and desktop above that.

---

## 6. Information architecture

Current public structure:

- `/` — Home
- `/products` — Product ecosystem
- `/products/bearagnostic` — Bearagnostic
- `/support` — Support
- `/404` — branded error page

Localized equivalents are generated for all approved non-English locales using `/<locale>/...` paths. English remains canonical at unprefixed root paths.

Before public launch, add only when real content is ready:

- `/about`;
- `/privacy`;
- `/terms`;
- release notes;
- official download/purchase routes;
- real contact/support routing;
- accessibility statement if appropriate.

Never publish empty legal/support templates merely to make navigation look complete.

---

## 7. Global localization system

### 7.1 Approved launch-localization set

The site architecture supports **16 locales**:

- `en` — English (canonical)
- `th` — ภาษาไทย
- `es` — Español
- `pt-br` — Português (Brasil)
- `fr` — Français
- `de` — Deutsch
- `it` — Italiano
- `ja` — 日本語
- `ko` — 한국어
- `id` — Bahasa Indonesia
- `vi` — Tiếng Việt
- `zh-cn` — 简体中文
- `zh-tw` — 繁體中文
- `ar` — العربية
- `hi` — हिन्दी
- `tr` — Türkçe

### 7.2 Voice standard

Localization is **transcreation**, not literal translation.

Each locale should feel native, natural, easy to understand, warm, intelligent, lightly witty where culturally appropriate, and confident without bragging or insulting competitors.

Benedict voice:

- clever without announcing cleverness;
- cheerful without becoming childish;
- witty without turning every sentence into a joke;
- confident without hype;
- specific rather than startup-generic;
- human without forced informality.

The quality test is not “does this translation match the English?” The test is “would a native reader forget that this was translated at all?”

### 7.3 Layout requirements

- text expansion must not break composition;
- CJK, Thai, Devanagari, and Arabic typography must receive language-appropriate spacing/line-height behavior;
- Arabic is RTL and must use logical CSS properties;
- language selection uses native language names, not country flags;
- user language choice must not be forced solely by IP/location;
- English remains the canonical content source for revision control.

### 7.4 Sensitive copy

Marketing/product copy can be transcreated. Privacy, terms, refund, billing, and other legal copy must prioritize precision over wit and should receive appropriate legal review before public launch.

---

## 8. Content principles

Copy should be concise, mature, clear, warm, specific, and memorable.

Avoid:

- fake superlatives;
- unsupported claims;
- vague startup language;
- defensive explanations about being a small studio;
- repeated “one person / small / independent” messaging;
- unnecessary competitor-bashing;
- technical jargon for ordinary users.

Being independent should be stated with confidence once or twice, then demonstrated through the quality of the work.

---

## 9. Product ecosystem

### Bearagnostic

Bearagnostic is a premium privacy-first Android file clarity / cleanup assistant.

Canonical product promise:

> Find clutter. Explain the risk. Clean with confidence.

Do not position it as a fake booster, antivirus, speed optimizer, or exaggerated device-health product.

The web presentation must use real product imagery and preserve correct image aspect ratios on all devices. Dr. Bear is a supporting brand character, not a rectangular poster. Use the approved transparent PNG cutout on light editorial surfaces; never place a baked black-background mascot image into the public composition. The real app screen is the primary product proof. On mobile, use simplified product art direction rather than desktop-style layered collage.

### Benedict Test Center

Planned reusable QA and release-evidence platform. It remains architecturally separate from the public corporate site because authentication, tester data, evidence, backend secrets, and owner-console permissions have different security requirements.

---

## 10. Commerce, billing, and licensing direction

The website must be designed so payment can be added cleanly without redesigning the product experience, but **payment is not live on the staging site**.

Current planned Bearagnostic commercial direction:

- straightforward **one-time Bearagnostic Pro** purchase rather than a mandatory subscription;
- web-based checkout, with Ko-fi as the preferred low-complexity provider to integrate first;
- entitlement confirmed server-side;
- planned backend direction: Cloudflare Worker + D1 or equivalent replaceable server-side store;
- app restores/validates entitlement from the backend and caches a safe offline entitlement state;
- no permanent `isPro=true` bypasses;
- no client-only purchase trust;
- no secrets in the public repository.

Conceptual flow:

```text
Bearagnostic App
      ↓
Benedict Entitlement API
      ↓
Cloudflare Worker + D1
      ↑
Ko-fi webhook
      ↑
Ko-fi checkout
```

Exact pricing, purchase URL, refund terms, recovery identity, webhook secrets, and production entitlement rules must be finalized before live commerce is enabled.

Billing UI must localize price/currency/status accurately and never imply a payment method or country availability that is not actually supported.

---

## 11. Distribution direction

Current preferred low-complexity model:

> Benedict Interactive website → product page → official download/distribution channel

Bearagnostic distribution direction prioritizes the official Benedict site plus Uptodown; Google Play may be added later but is not the center of the business strategy.

Third-party stores are distribution/discovery channels. Benedict Interactive remains the canonical source of product information.

---

## 12. Technical architecture

Current foundation:

- Astro `7.3.2`;
- TypeScript `6.0.3` (compatible with the current `@astrojs/check` dependency);
- static-first output;
- semantic HTML;
- centralized CSS tokens/shared styles;
- small Astro components;
- no client-side framework unless a real requirement justifies it.

Why Astro remains appropriate:

- excellent static-first performance;
- componentized source;
- selective interactivity only where useful;
- straightforward edge/static deployment;
- no forced SPA runtime.

### Hosting

Current production direction is established:

> GitHub `main` → Cloudflare Pages → staging `pages.dev` URL → final custom domain later

Cloudflare deployment is connected and staging has deployed successfully. Do not redesign around GitHub Pages.

### Search/indexing

`public/robots.txt` intentionally blocks indexing during staging. Before public launch, deliberately enable crawling, establish the real custom-domain canonical URL, add sitemap/canonical/alternate metadata, review social metadata, and verify favicon/brand metadata.

Never make the temporary Cloudflare staging host the canonical indexed domain by accident.

---

## 13. Performance, accessibility, privacy, security

Performance is a product feature. Avoid heavy animation libraries, unnecessary third-party scripts, giant font bundles, and autoplay video. Optimize images and preserve layout stability.

Accessibility requirements include semantic structure, keyboard navigation, visible focus, sufficient contrast, comfortable touch targets, heading hierarchy, meaningful links, reduced-motion support, correct alt text, and form labels/error states when forms arrive.

Privacy default: collect as little as possible. Do not add analytics just because websites usually do. If analytics become useful, prefer privacy-respecting aggregate measurement with a clear purpose.

Security principles:

- static-first public site;
- no credentials in Git;
- no secret client-side data;
- minimal third-party scripts;
- backend/admin/tester/payment systems isolated from public front-end trust;
- public-source visibility must not weaken security.

---

## 14. Repository architecture and hygiene

Canonical durable responsibilities now include:

```text
src/
├─ components/
│  ├─ HomePage.astro
│  ├─ ProductsPage.astro
│  ├─ BearagnosticPage.astro
│  ├─ SupportPage.astro
│  ├─ LanguageSwitcher.astro
│  ├─ SiteHeader.astro
│  ├─ SiteFooter.astro
│  └─ ProductCard.astro (legacy reusable component; remove only in a deliberate cleanup)
├─ data/
│  └─ site.ts
├─ i18n/
│  └─ content.ts
├─ layouts/
│  └─ SiteLayout.astro
├─ pages/
│  ├─ index.astro
│  ├─ 404.astro
│  ├─ support.astro
│  ├─ products/
│  └─ [locale]/
└─ styles/
   └─ global.css
```

Git is the archive. Never create `old`, `backup`, `final2`, `new`, `v2`, `temp`, or exported ZIP paths inside the repository just to preserve history.

When a path still owns the same responsibility, replace it in place. Add files only for durable new responsibilities such as a real route, reusable component, centralized i18n/config, or required tooling.

Never commit `node_modules`, `.astro`, `dist`, local environment files, logs, caches, build artifacts, credentials, tokens, API keys, or payment secrets.

---

## 15. Development and handoff workflow

Before substantive work:

1. fetch latest `main`;
2. read this Master Plan and Repository Map;
3. inspect relevant source;
4. establish rollback SHA;
5. define changed-file allowlist and regression risk;
6. implement locally;
7. validate as far as the environment permits;
8. package only canonical repo-relative files;
9. provide upload package and commit name (50 characters or fewer).

Default remote-write rule:

> inspect GitHub → modify/package locally → P'Benz uploads → inspect commit/CI

Never mutate GitHub remotely unless P'Benz explicitly authorizes that write in the current turn.

After upload, inspect the resulting commit and Cloudflare/CI status before starting unrelated work.

---

## 16. Current rollback baseline

Known-good pre-Revision-2 GitHub baseline:

`0f2513c1a53089c814663d08ea631a043b1beb2d` — `Fix Cloudflare build dependency`

That commit successfully deployed through Cloudflare Pages. Git history is the rollback mechanism; do not keep duplicate working copies in the repository.

---

## 17. Definition of 10/10

“10/10” is an acceptance standard, not a visual adjective.

A release-quality Benedict page must simultaneously satisfy:

- original Benedict identity;
- premium art direction;
- no obvious template feel;
- no Apple/Macintosh imitation;
- excellent smartphone behavior;
- excellent tablet behavior;
- excellent laptop/desktop/large-display behavior;
- correct image proportions;
- native-feeling localization;
- RTL correctness where required;
- clear content hierarchy;
- honest product claims;
- billing-ready architecture without insecure payment shortcuts;
- accessibility;
- fast loading;
- maintainable source;
- zero unnecessary files;
- no broken routes or avoidable polish debt.

If one of these dimensions is weak, the page is not 10/10 yet.

---

## 18. Current Revision 3 objective

Revision 2 established useful engineering foundations — localization, responsive routing, RTL support, and billing-ready information architecture — but its public art direction was rejected because it became too generic, card-heavy, restrained, and visually flatter than the earlier Benedict experience.

Revision 3 keeps the stable engineering work while restoring and improving the stronger Benedict visual DNA:

- premium **Bright Humanist Computing** with Macintosh-era warmth and optimism, never Apple imitation;
- expressive editorial composition rather than a stack of generic SaaS cards;
- porcelain/light surfaces, Benedict blue/cyan, carefully rationed violet/amber accents, and confident negative space;
- founder illustration treated as a living hero scene rather than being boxed into a profile card;
- Bearagnostic presented with the approved transparent Dr. Bear PNG and the real app screen; no baked black-background mascot artwork;
- the app screen remains readable, correctly proportioned, and visually primary;
- smartphone, tablet, laptop, desktop/PC, and large-display layouts are intentionally art-directed at their own scale;
- 16-locale architecture and native-feeling transcreation remain intact;
- Arabic RTL remains first-class;
- billing/payment remains planned in the information architecture but does not dominate the Home experience and is explicitly non-live;
- staging remains static-first, fast, accessible, and Cloudflare-compatible.

The acceptance test is visual and functional together: if the page is technically correct but loses charm, character, hierarchy, or premium perception, it is not a successful revision.

The staging site remains pre-launch and must not take live payments or be indexed as the final canonical public domain.

End of canonical plan.
