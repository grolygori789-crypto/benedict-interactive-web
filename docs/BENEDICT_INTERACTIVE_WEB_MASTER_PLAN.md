# Benedict Interactive Web — Master Plan

**Document:** Canonical Project Master Plan  
**Revision:** 1.0  
**Date:** 2026-09-12  
**Repository:** `grolygori789-crypto/benedict-interactive-web`  
**Default branch:** `main`  
**Repository visibility:** Public  
**Project status:** Foundation / pre-launch  
**Product authority:** P'Benz / Benedict Interactive

---

## 1. Purpose of this document

This file is the canonical operational and product plan for the Benedict Interactive website.

It exists to prevent three common project failures:

1. context drift between working sessions;
2. repository clutter and duplicated files;
3. visual or technical decisions that slowly move away from the intended Benedict Interactive identity.

Before any substantive implementation, architecture, deployment, design-system, monetization, localization, security, support, analytics, or release decision, read the latest version of this file from `main`.

Git history is the archive. This file is the current truth.

---

## 2. Authority order

When sources disagree, use this order:

1. the latest explicit instruction from P'Benz in the current conversation;
2. the latest state of GitHub `main`;
3. this Master Plan;
4. approved brand assets and current deployed-device/browser evidence;
5. Git history and older project discussions.

Never silently let an older chat override a newer GitHub state or user instruction.

---

## 3. Project identity

### 3.1 Brand

**Benedict Interactive**

Current brand line:

> Ideas for a brighter everyday

The website is the official digital home of Benedict Interactive.

It is not a Bearagnostic website with a corporate logo on top. Bearagnostic is one product inside a broader Benedict Interactive ecosystem.

### 3.2 Long-term role

The site should become the canonical home for:

- company identity;
- products;
- official downloads;
- product information;
- support;
- release notes;
- privacy and legal information;
- news or announcements when useful;
- direct purchase/licensing flows when introduced;
- links to external distribution channels;
- future products and services.

Third-party stores and social networks are discovery/distribution channels, not the foundation of the brand.

### 3.3 Independence principle

The strategic goal is not to avoid all third-party infrastructure. That is unrealistic.

The goal is:

> Own the product. Own the customer relationship. Rent replaceable infrastructure. Avoid unnecessary gatekeepers.

Domain, source, content structure, product positioning, and customer-facing information must remain portable.

---

## 4. Experience vision

### 4.1 Core design direction

The design language is:

> **Bright Humanist Computing**

The emotional target is:

- bright;
- optimistic;
- intelligent;
- colorful;
- mature;
- friendly;
- premium;
- meticulously finished;
- independent;
- memorable without being loud.

The site should feel expensive because of its typography, spacing, hierarchy, motion, craft, and clarity — not because it is dark, metallic, cinematic, or excessively luxurious.

### 4.2 Macintosh influence: allowed and forbidden

The project may draw from the **human-centered spirit** associated with classic personal computing:

- approachability;
- understandable interfaces;
- playful intelligence;
- optimism;
- personality;
- simplicity;
- useful visual metaphors;
- small moments of delight.

It must **not** copy Apple/Macintosh trade dress or identifiable design assets.

Do not imitate:

- Apple logos or marks;
- Macintosh computer silhouettes;
- classic Finder/menu-bar replicas;
- Mac face icons;
- traffic-light window controls as a signature motif;
- Apple rainbow stripes;
- exact Apple iconography;
- exact system layouts;
- Apple marketing compositions;
- Apple-proprietary typefaces;
- recognizable product-page cloning.

The final result should make a viewer think:

> “This has the warmth and confidence of human-centered computing.”

—not—

> “This is pretending to be an Apple website.”

### 4.3 Relationship to Bearagnostic

Benedict Interactive is the parent visual system.

Bearagnostic may be approximately **15–20% more playful** than the corporate layer.

Shared qualities:

- bright backgrounds;
- clear hierarchy;
- friendly geometry;
- restrained gradients;
- careful rounded forms;
- strong whitespace;
- colorful accents;
- approachable technology;
- honest states and labels.

Benedict Interactive itself remains slightly more mature and editorial.

---

## 5. Visual system

### 5.1 Base palette

The system begins with:

- porcelain / cool white backgrounds;
- graphite / near-black primary text;
- soft slate secondary text;
- blue/cyan as the principal technology accent;
- violet, amber, green, and coral as controlled secondary accents.

Color must be purposeful. Never use every accent in every section.

### 5.2 Typography

Typography must feel:

- contemporary;
- open;
- highly legible;
- warm rather than sterile;
- premium through proportion and spacing.

Do not use Apple-proprietary fonts.

The foundation uses a safe system stack to avoid unnecessary dependencies. A licensed self-hosted or privacy-respecting final type system can be evaluated later.

No font files are committed casually. Typography changes require a deliberate design-system decision.

### 5.3 Icons

Icons should be:

- rounded-geometric;
- simple at small sizes;
- distinct across products;
- friendly but not childish;
- visually consistent in stroke/volume.

Do not copy Apple system icons.

Prefer a small approved icon system over mixing several icon libraries.

### 5.4 Motion

Motion is a finishing tool, not decoration.

Use:

- short transitions;
- subtle depth;
- small hover lifts;
- gentle state changes;
- restrained entrance motion where it improves comprehension.

Always respect `prefers-reduced-motion`.

Never gate understanding behind hover because mobile devices do not have hover.

---

## 6. Responsive / adaptive strategy

The website must work beautifully on phone, tablet, laptop, and large desktop.

The strategy is **adaptive behavior**, not merely shrinking the desktop page.

### 6.1 Mobile mode

Mobile should feel app-like:

- large comfortable touch targets;
- compact information hierarchy;
- short hero;
- one-column content;
- persistent or highly accessible navigation when useful;
- no hover dependency;
- clear CTAs;
- strong reading rhythm;
- fast loading.

### 6.2 Tablet mode

Tablet is a first-class layout:

- one or two columns depending on content;
- generous touch targets;
- no awkward stretched mobile cards;
- no cramped desktop grid.

### 6.3 Desktop mode

Desktop should feel like a premium editorial technology site:

- wide whitespace;
- larger visual storytelling;
- multi-column product layouts;
- richer hover states;
- balanced large typography;
- deliberate use of the viewport.

### 6.4 Breakpoints

Use content-driven CSS/container behavior first.

Current practical reference points:

- mobile: below ~720 px;
- intermediate/tablet: ~720–980 px;
- desktop: above ~980 px.

These are implementation guides, not immutable product rules.

---

## 7. Information architecture

### Phase 1 public structure

- `/` — Benedict Interactive Home
- `/products` — Product ecosystem
- `/products/bearagnostic` — Bearagnostic
- `/support` — Support landing
- `/404` — branded error experience

### Before public launch

Add when content is ready:

- `/about`
- `/privacy`
- `/terms`
- `/releases` or product-specific release notes
- official download/purchase routes
- contact/support routing
- accessibility statement if appropriate

Do not publish empty template pages merely to make the navigation look full.

### Future

Potential additions:

- news/updates;
- press/media assets;
- licensing/customer portal;
- Tester program landing;
- documentation;
- localized routes.

---

## 8. Product ecosystem

### 8.1 Bearagnostic

Bearagnostic is a premium privacy-first Android file clarity / cleanup assistant.

Canonical product promise:

> Find clutter. Explain the risk. Clean with confidence.

The website must preserve that positioning. Do not turn it into a fake “booster”, antivirus, speed optimizer, or exaggerated device-health product.

### 8.2 Benedict Test Center

Planned reusable QA and release-evidence platform.

Core concept:

- project-agnostic tester client;
- server-driven/versioned test packs;
- structured Pass / Minor / Major / Not Tested responses;
- optional written evidence and screenshots/videos;
- build/device/session traceability;
- issue → fix → retest history;
- reward eligibility;
- evidence-backed summary generation;
- owner dashboard.

It should be architecturally separate from the public corporate website when authentication, tester data, backend secrets, and owner-console permissions are implemented.

Likely future structure:

- public corporate site: `benedictinteractive.com`
- tester experience: `test.benedictinteractive.com`
- owner console: separate authenticated surface

Do not force backend/security concerns into the public website repo merely for convenience.

---

## 9. Technical architecture

### 9.1 Foundation stack

Current foundation:

- Astro `7.3.2`;
- TypeScript `7.0.2`;
- static-first output;
- semantic HTML;
- CSS custom properties / centralized design tokens;
- small Astro components;
- no JavaScript framework dependency unless justified.

This is intentional.

The corporate website is primarily a content and brand experience. It should not carry a large client-side runtime by default.

### 9.2 Why Astro

Astro suits this project because it allows:

- static-first performance;
- componentized architecture;
- selective interactivity only where needed;
- clean deployment to modern edge/static platforms;
- future expansion without forcing all pages into a large SPA runtime.

Do not introduce React/Vue/Svelte globally unless a real interactive requirement justifies it.

### 9.3 Hosting direction

Preferred direction:

> GitHub source of truth → Cloudflare deployment → temporary project URL → final custom domain later

Cloudflare Pages/Workers configuration is added only when deployment is actually being established.

Do not commit credentials.

### 9.4 Domain direction

Long-term preferred main domain:

`benedictinteractive.com`

Purchase timing:

- prototype and design direction can start before buying;
- once the desired `.com` is confirmed available and the brand direction is stable, buy it rather than waiting until the entire site is complete;
- attach the domain at launch or when staging becomes useful.

Do not couple internal code paths to the temporary host name.

---

## 10. Repository architecture

Canonical structure:

```text
/
├─ .github/
│  └─ workflows/
│     └─ quality.yml
├─ .vscode/
│  └─ extensions.json
├─ docs/
│  ├─ BENEDICT_INTERACTIVE_WEB_MASTER_PLAN.md
│  ├─ REPOSITORY_MAP.md
│  └─ ROOM_MIGRATION_PROMPT.md
├─ public/
│  └─ robots.txt
├─ src/
│  ├─ components/
│  ├─ data/
│  │  └─ site.ts
│  ├─ layouts/
│  ├─ pages/
│  │  └─ products/
│  └─ styles/
│     └─ global.css
├─ .editorconfig
├─ .gitignore
├─ .nvmrc
├─ astro.config.mjs
├─ package.json
├─ README.md
└─ tsconfig.json
```

Do not create empty folders just because they might be needed later.

Create a directory only when it contains a durable project responsibility.

---

## 11. Repository hygiene: non-negotiable rules

### 11.1 Git is the archive

Never keep old working copies inside the repository.

Forbidden examples:

- `index-old.astro`
- `index-final.astro`
- `index-final2.astro`
- `header-v3.astro`
- `styles-backup.css`
- `backup/`
- `archive/`
- `temp/`
- exported ZIPs
- device screenshots not explicitly approved as project assets

If history is needed, use Git history.

### 11.2 Overwrite canonical paths

If a file still owns the same responsibility, update that file at the same path.

Example:

`src/components/SiteHeader.astro`

should be replaced by the new SiteHeader implementation, not accompanied by:

`SiteHeaderNew.astro`

unless both components now have genuinely different responsibilities.

### 11.3 New file test

A new file is justified only if at least one is true:

- it creates a new route;
- it introduces a reusable component with a durable responsibility;
- it centralizes data/config that would otherwise be duplicated;
- it records a durable architectural/project decision;
- it is required by tooling.

### 11.4 Generated artifacts

Never commit:

- `node_modules/`;
- `.astro/`;
- `dist/`;
- local environment files;
- logs;
- cache;
- local Cloudflare state;
- downloaded build artifacts.

### 11.5 Secrets

Never commit:

- API keys;
- payment secrets;
- tokens;
- private credentials;
- owner-console secrets;
- production environment variables.

Public repo means all committed content must be safe for anyone to read.

---

## 12. Asset discipline

Store approved public assets only.

When brand images are introduced, use durable canonical paths, for example:

```text
public/brand/benedict-mark.svg
public/brand/benedict-wordmark.svg
public/products/bearagnostic/hero.webp
```

Do not create:

```text
logo-final.svg
logo-final-new.svg
logo-blue-v4.svg
```

A newer approved asset replaces the canonical asset at the same path whenever the role is unchanged.

Image formats:

- SVG for appropriate vector marks/icons;
- AVIF/WebP for photographic or rendered web imagery when browser requirements allow;
- PNG only when lossless/transparency requirements justify it.

Keep original heavy design-source files outside the production repository unless there is a strong reason to version them.

---

## 13. Performance standard

Performance is a product feature.

Targets before public launch:

- responsive first render;
- minimal blocking JavaScript;
- optimized images;
- stable layout;
- no unnecessary third-party scripts;
- no autoplay video by default;
- no giant font bundles;
- no heavy animation libraries for simple effects.

A premium site that feels slow is not premium.

---

## 14. Accessibility standard

Before launch, validate:

- semantic page structure;
- keyboard navigation;
- visible focus;
- sufficient contrast;
- touch-target size;
- heading hierarchy;
- meaningful link text;
- reduced-motion support;
- alt text for meaningful imagery;
- decorative imagery hidden from assistive tech;
- form labels and error states when forms are introduced.

Accessibility is part of the design quality bar, not a later compliance patch.

---

## 15. Privacy and analytics

Default posture:

- collect as little as possible;
- do not add analytics merely because websites usually have analytics;
- avoid invasive trackers;
- document every third-party service;
- never claim privacy properties that are not verified.

If analytics are introduced, prefer privacy-respecting aggregate measurement with a clear purpose.

Cookie banners must not be added performatively. They should exist only if the actual technology/legal requirements justify them.

---

## 16. Search / SEO

During development:

`public/robots.txt` blocks indexing.

Before public launch:

- deliberately enable crawling;
- configure canonical production URL;
- add sitemap;
- review page titles/descriptions;
- add social sharing metadata;
- add structured data only where truthful and useful;
- verify favicon/brand metadata;
- verify robots and noindex behavior.

Never let a temporary Cloudflare staging host become the canonical indexed website accidentally.

---

## 17. Security

The corporate site should remain static-first whenever possible.

Principles:

- no secret client-side data;
- no credentials in Git;
- minimal external scripts;
- dependency additions reviewed for need and maintenance;
- backend/admin/tester systems isolated from the public site;
- payment logic implemented on secure server-side infrastructure, never trusted to front-end state.

Public source visibility is acceptable for the corporate front end because security must not depend on hiding client code.

---

## 18. CI / quality workflow

The repo includes a small GitHub Actions quality workflow.

Current bootstrap workflow:

1. install dependencies;
2. run `astro check`;
3. build production output.

Once a canonical `package-lock.json` is generated and approved, change CI from `npm install` to `npm ci` for deterministic installs.

Do not commit a hand-authored fake lock file.

Future checks may include:

- HTML/accessibility checks;
- link validation;
- Lighthouse budget;
- Playwright smoke tests;
- formatting/lint checks.

Add each check only when it produces signal worth maintaining.

---

## 19. Development workflow

Before substantive work:

1. fetch latest GitHub `main`;
2. read this Master Plan;
3. inspect the exact files relevant to the change;
4. identify current rollback baseline;
5. define changed-file allowlist;
6. assess regression risk;
7. implement locally;
8. validate;
9. package only canonical repo-relative files;
10. provide the upload package and commit name.

After P'Benz uploads:

1. inspect the resulting commit;
2. confirm changed paths;
3. inspect CI;
4. resolve failures before starting unrelated work.

Do not claim CI, browser/device behavior, or deployment success unless actually observed.

---

## 20. Remote-write rule

Default workflow is:

> inspect GitHub → modify/package locally → P'Benz uploads → inspect commit/CI

Never mutate the GitHub remote unless P'Benz explicitly authorizes that remote write in the same conversation turn.

Read access does not imply write authorization.

---

## 21. Handoff / upload package protocol

Every GitHub-bound handoff must include:

- exact repo-relative paths;
- only required new/updated files;
- replacements at canonical existing paths whenever possible;
- no junk, backups, duplicate versions, or generated output;
- a brief changed-file summary;
- validation status;
- a recommended commit name of **50 characters or fewer**.

The commit name must always be shown in a fenced code block, for example:

```text
Refine responsive product layout
```

This rule applies every time files are sent for GitHub upload.

If a future change truly requires deletion, the handoff must explicitly list the obsolete path and why it can no longer be replaced in place. Avoid creating such cleanup work through careless architecture.

---

## 22. Content principles

Copy should be:

- natural;
- concise;
- clear;
- mature;
- confident without hype;
- human without forced jokes;
- specific rather than corporate-generic.

Avoid:

- “revolutionary”;
- fake superlatives;
- unsupported claims;
- vague startup language;
- overly technical copy for ordinary users.

The company should sound like people who care deeply about making software, not a faceless enterprise.

---

## 23. Localization direction

Initial corporate website language can be English-first while architecture remains localization-ready.

Do not prematurely duplicate every page per language before:

- information architecture is stable;
- canonical copy is approved;
- language-switch behavior is designed;
- localized support requirements are known.

Bearagnostic currently targets multiple product languages; the corporate site may later support English, Thai, Japanese, and additional languages as justified.

Avoid hard-coding layout assumptions that break when text expands.

---

## 24. Commerce and distribution direction

Benedict Interactive should be able to distribute products independently.

Current strategic direction discussed:

- official Benedict Interactive website as canonical home;
- direct download/sales where appropriate;
- Uptodown or other stores as additional discovery/distribution;
- Google Play optional rather than the center of the business.

Payment/licensing infrastructure must not be baked into the static website until a concrete provider and entitlement model are selected.

No permanent hidden `isPro=true` bypasses or insecure client-only entitlement logic.

---

## 25. Tester reward direction

For future tester programs, Bearagnostic Pro Lifetime can be used as a participation reward if implemented truthfully.

The reward is for completing genuine testing requirements, not for:

- positive reviews;
- positive ratings;
- flattering feedback;
- finding a required number of bugs.

Honest negative feedback must never reduce reward eligibility.

Reward eligibility should eventually be computed by server-side evidence, not a client flag.

---

## 26. Current baseline — Revision 1.0

At the creation of this Master Plan:

- GitHub repository exists and is Public;
- repository is newly created;
- `main` is the default branch;
- the first website foundation package is being prepared;
- no permanent domain is attached;
- visual direction is approved conceptually as bright, colorful, premium, mature human-centered technology;
- Bearagnostic is a product subpage, not the corporate identity;
- Benedict Test Center is planned but separate backend/security architecture is deferred;
- Cloudflare is the preferred deployment direction;
- indexing is disabled during development;
- official production legal/support/download flows are not yet finalized.

---

## 27. Roadmap

### Foundation
- establish clean repo structure;
- commit Master Plan;
- establish Astro/TypeScript baseline;
- establish initial design tokens;
- establish responsive corporate shell;
- establish CI.

### Design system
- approve logo/wordmark production assets;
- refine typography;
- finalize icon language;
- formalize color/token scale;
- refine motion language;
- test mobile/tablet/desktop behavior.

### Corporate content
- finalize Home;
- Products;
- Bearagnostic;
- About;
- Support;
- legal/privacy;
- release/news structure if needed.

### Deployment
- connect Cloudflare;
- establish staging;
- validate deployment;
- buy/attach domain at the appropriate point;
- add HTTPS/canonical configuration;
- enable production SEO only when ready.

### Launch readiness
- accessibility review;
- performance review;
- browser/device matrix;
- content proofreading;
- broken-link scan;
- security/privacy review;
- legal copy approval;
- analytics decision;
- backup/rollback verification.

### Future ecosystem
- Tester Center;
- licensing/purchase system;
- customer portal if needed;
- future applications/games;
- localization expansion.

---

## 28. Definition of “10/10” for this project

“10/10” is not a visual adjective. It is an acceptance standard.

A release-quality Benedict Interactive page must simultaneously satisfy:

- original visual identity;
- premium typography and spacing;
- excellent mobile behavior;
- excellent desktop behavior;
- clear content hierarchy;
- accessibility;
- fast loading;
- honest product claims;
- maintainable source;
- zero unnecessary files;
- no obvious template feel;
- no Apple/Macintosh imitation;
- no broken states;
- no avoidable polish debt.

If one dimension is weak, the page is not 10/10 yet.

---

## 29. Change-control rule

Update this Master Plan when a decision becomes durable enough that a future room/session would need it.

Do not use the Master Plan as a daily scratchpad.

Meaningful revisions should update:

- revision number;
- date;
- affected sections;
- current baseline if it changed materially.

End of canonical plan.
