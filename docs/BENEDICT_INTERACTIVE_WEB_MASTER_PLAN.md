# Benedict Interactive Web — Master Plan

**Document:** Canonical Project Master Plan  
**Revision:** 4.0  
**Date:** 2026-09-14  
**Repository:** `grolygori789-crypto/benedict-interactive-web`  
**Default branch:** `main`  
**Project status:** Pre-launch / production-premium refinement  
**Product authority:** P'Benz / Benedict Interactive

---

## 1. Purpose and authority

This file is the canonical product, design, technical, localization, commerce, distribution, tester, support, and operating plan for the Benedict Interactive website. Git history is the archive; this document records current durable decisions.

When sources disagree, use this order:

1. latest explicit instruction from P'Benz in the current conversation;
2. latest GitHub `main`;
3. this Master Plan;
4. approved brand/product assets and current deployed-device evidence;
5. Git history and older discussions.

Never silently let an older chat override a newer instruction or production state.

---

## 2. Brand, role, and business posture

**Benedict Interactive** is the official parent brand, software studio, showroom, distribution home, support destination, and future storefront.

Canonical brand line:

> Ideas for a brighter everyday

Bearagnostic is the first product inside the Benedict Interactive ecosystem. The site must never feel like a Bearagnostic microsite wearing a corporate logo.

Long-term responsibilities:

- company identity;
- multi-product showroom and official product information;
- official downloads and distribution links;
- support, release information, and purchase recovery;
- tester/community participation;
- moderated real-user feedback and testimonials;
- privacy/legal information;
- purchase/licensing flows when ready;
- future products and services.

Strategic independence principle:

> Independent by default. Stores by choice.

Operational principle:

> Premium enough to feel world-class; simple enough for one person to run well.

Benedict Interactive should own the product, customer relationship, entitlement data, official product information, tester relationship, and support relationship. External stores, payment processors, hosting, email providers, and other services should remain replaceable infrastructure rather than business dependencies.

Google Play may be used later for discovery or convenience but is not a required foundation of the business model.

---

## 3. Experience vision — Bright Humanist Computing

The design language is **Bright Humanist Computing**.

The emotional target is bright, optimistic, intelligent, mature, friendly, premium, meticulous, independent, and memorable without becoming loud.

The site should feel expensive because of typography, hierarchy, spacing, rhythm, illustration, clarity, motion restraint, product truth, and careful responsive art direction — not because it is dark, metallic, overloaded with glass effects, or decorated for decoration's sake.

### Macintosh influence

The site may borrow the human-centered spirit associated with classic personal computing:

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

Typography must be contemporary, open, warm, highly legible, and premium through proportion and spacing. Do not use Apple-proprietary fonts. The current implementation uses a privacy-safe system stack; a licensed self-hosted type system can be evaluated later only as a deliberate design-system change.

Icons should be simple, rounded-geometric, consistent, and original. Avoid redundant directional arrows when a CTA label is already self-explanatory. Motion is a finishing tool only; respect `prefers-reduced-motion` and never gate understanding behind hover.

Public-facing surfaces should not expose internal developer infrastructure unless it serves a real customer need. In particular, GitHub is not part of the public Support/footer navigation by default.

---

## 5. Responsive and adaptive standard

The site must look intentionally designed on **smartphone, tablet, laptop, desktop/PC, and large displays**.

This is adaptive art direction, not “desktop shrunk until it fits.”

### Mobile

- mobile-first reading rhythm;
- compact header with visible Benedict identity;
- comfortable touch targets;
- one-column content when appropriate;
- explicit safe zones around people/faces in founder/product artwork;
- overlay text must occupy real negative space, never a face or important subject;
- product imagery never stretched, crushed, or forced into desktop collage logic;
- no horizontal scrolling;
- no hover dependency;
- clear CTA hierarchy;
- sticky header must never visually collide with page headings or anchored sections.

### Tablet

Tablet is first-class, not a stretched phone or cramped desktop. Use one or two columns based on content and preserve comfortable touch geometry. Artwork may use a tablet-specific composition when the desktop composition becomes crowded.

### Laptop / desktop

Use editorial whitespace, larger storytelling, deliberate multi-column layouts, restrained hover states, and balanced typography without wasting the viewport.

### Large display

Cap reading and composition widths. Do not allow artwork or text to stretch until proportions lose intent.

Practical QA widths include approximately 320, 360, 375, 390, 412/430, 768, 820, 1024, 1280, 1440, 1600, and a large-display width. Breakpoints remain content-driven rather than device-brand-driven.

Prefer flexible grid, intrinsic sizing, `clamp()`, max-width constraints, and logical properties. Use physical positioning only when an unmirrored photographic composition has a fixed physical safe zone.

---

## 6. Information architecture

Current public structure:

- `/` — Home / Benedict Interactive front door
- `/products` — product ecosystem / studio showroom
- `/products/bearagnostic` — Bearagnostic product detail
- `/support` — customer-facing support and planned tester-program entry point
- `/404` — branded error page

Localized equivalents are generated for all approved non-English locales using `/<locale>/...` paths. English remains canonical at unprefixed root paths.

### Product architecture

`/products` is the long-term showroom. It must not be hard-coded as a one-product dead end.

Stable non-localized product metadata belongs in `src/data/products.ts`. Localized marketing copy remains centralized in `src/i18n/content.ts`.

Adding a future product should primarily require:

1. adding stable product metadata;
2. adding localized product copy;
3. adding the product-detail route/component and approved assets;
4. selecting whether the Home page features it.

Do not rebuild the showroom architecture for each new product.

### Routes reserved for real content, not placeholders

Before public launch or when content is genuinely ready, add only as needed:

- `/about`;
- `/reviews` or an equivalent real-feedback surface;
- `/privacy`;
- `/terms`;
- release notes;
- official download/purchase routes;
- purchase/license recovery;
- real contact/support routing;
- accessibility statement if appropriate.

Never publish empty legal, review, account, or support templates merely to make navigation look complete.

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

### 7.3 Layout requirements

- text expansion must not break composition;
- CJK, Thai, Devanagari, and Arabic typography must receive language-appropriate spacing/line-height behavior;
- Arabic is RTL and must use logical CSS properties except where a fixed photographic safe zone requires physical positioning;
- language selection uses native language names, not country flags;
- user language choice must not be forced solely by IP/location;
- English remains the canonical content source for revision control.

### 7.4 Sensitive copy

Marketing/product copy can be transcreated. Privacy, terms, refund, billing, entitlement, and other legal/transactional copy must prioritize precision over wit and should receive appropriate review before public launch.

---

## 8. Content and marketing principles

Copy should be concise, mature, clear, warm, specific, and memorable.

Avoid:

- fake superlatives;
- unsupported claims;
- vague startup language;
- defensive explanations about being a small studio;
- repeated “one person / small / independent” messaging;
- unnecessary competitor-bashing;
- technical jargon for ordinary users;
- artificial scarcity;
- review manipulation.

Being independent should be stated with confidence once or twice, then demonstrated through quality, support, direct distribution, and product behavior.

The website is both a company home and a showroom. Marketing must support trust and product understanding before conversion pressure.

---

## 9. Product ecosystem

### Bearagnostic

Bearagnostic is a premium privacy-first Android file clarity / cleanup assistant.

Canonical product promise:

> Find clutter. Explain the risk. Clean with confidence.

Do not position it as a fake booster, antivirus, speed optimizer, or exaggerated device-health product.

The web presentation should use real product imagery and preserve correct image aspect ratios on all devices. On mobile, use simplified/adaptive product art direction rather than desktop-style layered collage when space becomes constrained.

### Benedict Test Center / Tester Program

A reusable tester and release-evidence program is planned for Benedict Interactive products.

Public-site responsibilities may include:

- explaining the tester program;
- showing current public testing opportunities when real;
- linking to the secure tester system;
- explaining rewards and privacy.

The authenticated tester system remains architecturally separate from the public corporate site because authentication, tester data, device context, evidence, backend secrets, reward history, and owner-console permissions have different security requirements.

Tester rewards may recognize participation, useful bug reports, completed test missions, sustained testing, or high-quality feedback. Rewards must **not** depend on positive sentiment, five-star ratings, or public-store reviews.

---

## 10. Reviews, testimonials, and feedback governance

Private tester/customer feedback and public testimonials are different systems.

### Private feedback

- should welcome criticism as well as praise;
- may be tagged for bug, UX, feature, performance, trust, or support follow-up;
- should not be filtered merely because it is negative;
- abusive, spam, fraudulent, personally identifying, or irrelevant submissions may be rejected or quarantined.

### Public feedback

- never auto-publish user submissions;
- requires owner moderation;
- requires explicit permission/consent for publication;
- may support anonymous or attributed publication according to consent;
- “Verified tester/customer” may be shown only when backend evidence genuinely supports it;
- never manufacture testimonials or imply a public review exists when it does not.

Do not launch a public Reviews page until there is real, consented content worth showing.

---

## 11. Commerce, billing, and licensing direction

The website must be designed so payment can be added cleanly without redesigning the product experience, but **payment is not live on the staging site**.

Current Bearagnostic commercial direction:

- straightforward **one-time Bearagnostic Pro** purchase rather than a mandatory subscription;
- Free and Pro should use the same signed APK unless a future technical requirement clearly justifies otherwise;
- entitlement is confirmed server-side;
- payment success is confirmed from a trusted server-to-server event/webhook, not from a client redirect or screenshot alone;
- planned backend direction: Cloudflare Worker + D1 or equivalent replaceable server-side store;
- the app restores/validates entitlement from the Benedict backend and may cache a safe offline entitlement state;
- no permanent `isPro=true` bypasses;
- no client-only purchase trust;
- no banking credentials, webhook secrets, API secrets, or private keys in the public repository.

Preferred customer experience:

```text
Bearagnostic / Benedict website
      ↓
Hosted or provider-assisted checkout
      ↓
Trusted payment confirmation / signed webhook
      ↓
Benedict Entitlement API
      ↓
Entitlement becomes active
      ↓
App refreshes entitlement and unlocks Pro
```

The payment provider must be selected for real operational needs, including Thai-user convenience, reliable payment confirmation, webhook quality, fees, legal/account availability, refund handling, and low maintenance for a single operator. Do not hard-bind the product architecture to a provider before those requirements are confirmed.

Exact pricing, purchase URL, refund terms, recovery identity, webhook secrets, and production entitlement rules must be finalized before live commerce is enabled.

Billing UI must localize price/currency/status accurately and never imply a payment method or country availability that is not actually supported.

---

## 12. Independent distribution and updates

Primary model:

> Benedict Interactive website → official product page → official download/distribution channel

Bearagnostic distribution prioritizes the official Benedict site plus replaceable third-party discovery/distribution channels such as Uptodown. Google Play may be added later but is optional rather than foundational.

Benedict Interactive remains the canonical source of:

- product identity;
- latest stable version information;
- release notes;
- supported channels;
- checksum/signature information when exposed;
- support information;
- purchase/licensing information.

Future direct-update UX should remain transparent:

```text
New version available
→ show version and changelog
→ user chooses download
→ Android installer handles installation confirmation
```

Do not attempt silent installation or bypass Android security prompts.

---

## 13. Support direction

Public Support exists for customers, not developers.

Target support model, added only as real services become available:

- product help / FAQ;
- report a problem;
- contact support;
- download/update help;
- purchase/license recovery;
- tester-program entry point.

Do not expose internal/private development infrastructure such as GitHub merely because it exists.

Avoid building a live-chat/helpdesk platform prematurely. For a single-operator studio, a small, high-quality ticket/contact workflow is preferable until support volume proves a larger system is necessary.

Diagnostic collection must be consent-based and privacy-minimal. Product files, filenames, or personal content must not be uploaded by default.

---

## 14. Technical architecture

Current foundation:

- Astro `7.3.2`;
- TypeScript `6.0.3` compatible with the current `@astrojs/check` dependency;
- static-first output;
- semantic HTML;
- centralized CSS tokens/shared styles;
- small Astro components;
- stable product metadata in `src/data/products.ts`;
- no client-side framework unless a real requirement justifies it.

Why Astro remains appropriate:

- excellent static-first performance;
- componentized source;
- selective interactivity only where useful;
- straightforward edge/static deployment;
- no forced SPA runtime.

### Hosting

Current production direction:

> GitHub `main` → Cloudflare Pages → staging `pages.dev` URL → final custom domain later

Cloudflare deployment is connected and staging has deployed successfully. Do not redesign around GitHub Pages.

If commerce/tester/support backends arrive, use isolated server-side services such as Cloudflare Workers/D1/R2 or an equivalent replaceable architecture rather than turning the public website into a trust boundary it was not designed to be.

### Search/indexing

`public/robots.txt` intentionally blocks indexing during staging. Before public launch, deliberately enable crawling, establish the real custom-domain canonical URL, add sitemap/canonical/alternate metadata, review social metadata, and verify favicon/brand metadata.

Never make the temporary Cloudflare staging host the canonical indexed domain by accident.

---

## 15. Performance, accessibility, privacy, and security

Performance is a product feature. Avoid heavy animation libraries, unnecessary third-party scripts, giant font bundles, autoplay video, and decorative network calls. Optimize images and preserve layout stability.

Accessibility requirements include semantic structure, keyboard navigation, visible focus, sufficient contrast, comfortable touch targets, heading hierarchy, meaningful links, reduced-motion support, correct alt text, and form labels/error states when forms arrive.

Privacy default: collect as little as possible. Do not add analytics just because websites usually do. If analytics become useful, prefer privacy-respecting aggregate measurement with a clear purpose.

Security principles:

- static-first public site;
- no credentials in Git;
- no secret client-side data;
- minimal third-party scripts;
- backend/admin/tester/payment systems isolated from public front-end trust;
- server-side verification for payments and entitlements;
- signed Android releases and disciplined signing-key custody;
- public-source visibility must not weaken security.

---

## 16. Repository architecture and hygiene

Canonical durable responsibilities include:

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
│  └─ ProductCard.astro (legacy reusable component; remove only in deliberate cleanup)
├─ data/
│  ├─ site.ts
│  └─ products.ts
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
   ├─ global.css
   └─ typography.css
```

Git is the archive. Never create `old`, `backup`, `final2`, `new`, `v2`, `temp`, or exported ZIP paths inside the repository just to preserve history.

When a path still owns the same responsibility, replace it in place. Add files only for durable new responsibilities such as a real route, reusable component, stable product registry, centralized i18n/config, or required tooling.

Never commit `node_modules`, `.astro`, `dist`, local environment files, logs, caches, build artifacts, credentials, tokens, API keys, payment secrets, signing keys, or exported packages.

---

## 17. Development and handoff workflow

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

### Regression discipline

- protect working production behavior;
- prefer isolated, minimally invasive changes;
- preserve current approved assets and content unless the task requires otherwise;
- keep a known-good rollback SHA;
- avoid simultaneous visual, routing, backend, and infrastructure rewrites when they can be separated safely;
- CI success does not prove device/browser rendering success;
- physical responsive evidence remains part of acceptance for visually sensitive changes.

---

## 18. Current rollback baseline

Immediate pre-upgrade baseline:

`e6b3e6feb4ddbe363e5b793ed66ccb197be21763` — `Refine Bearagnostic and support visuals`

Earlier known-good Cloudflare baseline:

`0f2513c1a53089c814663d08ea631a043b1beb2d` — `Fix Cloudflare build dependency`

Git history is the rollback mechanism; do not keep duplicate working copies in the repository.

---

## 19. Definition of 10/10

“10/10” is an acceptance standard, not a visual adjective.

A release-quality Benedict page must simultaneously satisfy:

- original Benedict identity;
- premium art direction;
- no obvious template feel;
- no Apple/Macintosh imitation;
- excellent smartphone behavior;
- excellent tablet behavior;
- excellent laptop/desktop/large-display behavior;
- protected photographic subject zones where overlays exist;
- correct image proportions;
- native-feeling localization;
- RTL correctness;
- clear content hierarchy;
- honest product claims;
- multi-product-ready showroom architecture;
- commerce-ready architecture without insecure payment shortcuts;
- public Support free of unnecessary developer infrastructure;
- tester/review governance that protects trust without manipulating sentiment;
- accessibility;
- fast loading;
- maintainable source;
- zero unnecessary files;
- no broken routes or avoidable polish debt.

If one of these dimensions is weak, the page is not 10/10 yet.

---

## 20. Current production design objective

The approved production direction prioritizes a clean, device-adaptive, independent-studio experience built from real production assets and browser-realizable layouts:

- clean premium art direction with generous whitespace, bright restrained color, and no Apple trade-dress imitation;
- real Benedict J. and Bearagnostic production assets rather than generated mock UI;
- founder slogan/signature positioned within a real safe area on mobile/tablet and never across the face;
- restrained CTA language without unnecessary arrows/icons;
- prominent but subordinate blue editorial numbering for Bearagnostic feature steps;
- real Bearagnostic Home, Insights, and scanning screens with privacy-safe sample content;
- Products as a real reusable studio showroom rather than a one-product dead end;
- public Support prepared for a future tester program while keeping authenticated tester systems separate;
- no public GitHub link by default;
- full 16-locale route architecture and Arabic RTL support;
- independent-first distribution and future server-verified licensing;
- static-first performance, accessibility, maintainability, and Cloudflare compatibility.

The staging site remains pre-launch and must not take live payments or be indexed as the final canonical public domain.

End of canonical plan.
