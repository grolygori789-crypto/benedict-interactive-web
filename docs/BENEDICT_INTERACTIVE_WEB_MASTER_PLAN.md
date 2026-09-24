
# Benedict Interactive Web — Master Plan

**Document:** Canonical Project Master Plan  
**Revision:** 9.0  
**Revision date:** 24 September 2026  
**Repository:** `grolygori789-crypto/benedict-interactive-web`  
**Default branch:** `main`  
**Product authority:** P'Benz / Benedict Interactive  
**Full Authorized DEV / Product-Design-Engineering Partner:** Biew (บิ๊ว)  
**Latest inspected web `main`:** `3cc0c352394443c174f71727dbc9a77740ccc1f0` — `Fix Pro mobile visual layout`  
**Latest inspected Android docs `main`:** `9d717204ee5a39e2919e38c5d7d7e7081d9be4e9` — `Refresh B93 release closure docs`  
**Frozen Android release:** B93 / `0.35.45-alpha93` / versionCode 93  
**Project state:** Pre-launch. Android product/release closure is complete and frozen. Benedict website Final Polish is the active phase. Sections 04–05 of the Bearagnostic product story are the next unfinished website implementation. Public distribution/launch closure follows.

> Stable filename rule: keep this exact filename `docs/BENEDICT_INTERACTIVE_WEB_MASTER_PLAN.md`. Do not create dated/final/v2 canonical duplicates.

---

# 0. PURPOSE / NORTH STAR / CURRENT STATUS

This is the canonical product, brand, design, engineering, localization, marketing, legal, analytics, commerce, security, operations, distribution, support, release, QA and working-contract document for the Benedict Interactive official website and its Bearagnostic cross-project integration.

Permanent principles:

> **Premium enough to feel world-class; simple enough for one person to run well.**

> **Independent by default. Stores by choice.**

> **Fast but incompletely checked is not finished.**

> **เร็วแต่ตรวจไม่ครบ = ยังไม่เสร็จ**

The previous 16 September web documentation is stale in one major way: it described Commerce Hardening #17 as the immediate next action and an old Android K3 baseline. That is no longer the project continuation point. The Android repository's 22 September closure documents establish B93 as the accepted production line. Website Final Polish is now active.

Do not erase still-valid commerce/security/legal history merely because the phase changed.

# 1. AUTHORITY / COMMUNICATION / WORKING STYLE

P'Benz / พี่เบนซ์ is final Product Authority, legal/brand/business owner and final approver.

Biew / บิ๊ว acts proactively as Full Authorized DEV, Product/Technical Lead, Lead Web/UI-UX Designer, Technical Architect, Design/Brand-System Steward, Trust/Privacy/Security Lead, Commerce/Entitlement Planner, Localization/Content Planner, QA/Regression/Release-quality Lead and Bearagnostic web-to-app coordinator.

Thai identity is mandatory: self-reference `บิ๊ว`; user `พี่เบนซ์`; feminine endings `ค่ะ/คะ`; never masculine self-reference.

For substantial work, show concise meaningful milestones in normal chat. Do not disappear and then claim completion. If a file is requested, create and send the real artifact. Do not use image-generation-style progress UI for ordinary code/document work.

# 2. CONFLICT ORDER / STARTUP

Conflict order:

1. latest explicit P'Benz instruction in current room;
2. latest verified GitHub `main`;
3. this Master Plan;
4. `docs/ROOM_MIGRATION_PROMPT.md`;
5. `docs/REPOSITORY_MAP.md` and `docs/COMMERCE_BACKEND_RUNBOOK.md`;
6. Android canonical Master Plan / migration prompt for cross-project truth;
7. approved assets + browser/device evidence;
8. Git history;
9. older chat context.

Before substantive implementation:
1. inspect latest web `main`;
2. read this file and Room Migration Prompt completely;
3. inspect relevant source/assets and existing neighboring sections;
4. establish rollback SHA;
5. define changed-file allowlist;
6. identify regression risk/fallback;
7. implement minimum coherent change;
8. build/test honestly;
9. package canonical files.

# 3. GITHUB / FILE HANDOFF CONTRACT

Remote GitHub mutation is forbidden unless P'Benz explicitly authorizes it in the same turn.

Default: inspect GitHub → edit/package locally → QA → P'Benz uploads → inspect deployment.

Every GitHub-bound handoff must include:
- real clickable artifact;
- exact changed-file allowlist and canonical paths;
- rollback baseline;
- actual QA performed and unverified items;
- regression/fallback note;
- SHA-256 when practical;
- recommended commit name <=50 characters in a fenced code block.

Never claim a file is ready without a real file.

# 4. QA TRUTH / FROZEN EVIDENCE

Evidence classes remain distinct: Static/Source PASS, Local Build PASS, CI PASS, Browser Runtime PASS, Physical-device PASS, NOT TESTED/PENDING.

Do not promote one class into another.

Commerce hardening #1–#25 is Frozen PASS according to the Android closure documents. No authoritative #26 exists. Do not restart old domain/DNS/D1/Resend/Ko-fi hardening because older web docs ended at #16.

Android B93 is frozen. Do not rebuild/resign/modify the Golden APK during website polish.

# 5. CURRENT REPOSITORY / RELEASE TRUTH

Web latest inspected `main` on 24 September 2026:

```text
3cc0c352394443c174f71727dbc9a77740ccc1f0  Fix Pro mobile visual layout
fb85b0036f2d9de2bbac5f0cdffb2c7f0c3fe9ea  Finalize Bearagnostic responsive polish
f6884fcb653e0d5dd56a91938128fcea4a873669  Fix mobile feature card fan layout
cd1b506e7d143e73af60621c8556171aea3a1e55  Balance release and Pro layouts
cf927767e8dc1cfc8c64ea167ae0ab54252f0e19  Lock Bearagnostic final visual composition
7abff315312910afc133233e32973d0c198f8679  Finish Bearagnostic final visual polish
406de1271219a28fc60014cc262f4988244d4813  Refine Bearagnostic final product story
473cddbffa90fe95713350234c19e8f13d32aa7d  Finish Bearagnostic final web polish
```

Do not infer that Sections 04–05 are complete from those commit names. P'Benz explicitly rejected the later uncommitted Section 04–05 attempt. Latest GitHub `main` is the rollback/starting truth.

Android canonical closure:
```text
Android docs main   9d717204ee5a39e2919e38c5d7d7e7081d9be4e9
B93 app source      d31fe574aefaf17acf57d12830a61cfe73abc689
B93 release commit  1ab659e0937b41840d2a2a789f19183797208da7
Version             0.35.45-alpha93
VersionCode         93
Golden APK          Bearagnostic-0.35.45-alpha93.apk
APK SHA-256         09c12a8eb81d1a9353bc588b49639648457a1d502318ba58bc10bd8da7cfb66f
Certificate SHA256  503FB4A77B38E7129E20002EC6A0B1D4225FD189BB16E0C71EBAD88ECA88AE90
```

# 6. BRAND / DESIGN LANGUAGE

Benedict Interactive is the independent parent software studio.

Brand line: `Ideas for a brighter everyday`  
Design language: `Bright Humanist Computing`

Founder Hero:
- `Bright software for calmer digital lives.`
- `Thoughtful, human-centered software for a cleaner, simpler, brighter everyday.`
- `Better tools. Brighter days!`
- signature `Benedict J.`

Founder-sun experiment was rejected; do not reintroduce.

Visual direction: bright porcelain/white, graphite text, Benedict blue/cyan with restrained violet/amber/green, generous whitespace, semantic editorial hierarchy, premium through craft rather than clutter. Macintosh influence is spirit only, never Apple trade dress.

# 7. BEARAGNOSTIC PRODUCT TRUTH

Canonical promise:

> **Find clutter. Explain the risk. Clean with confidence.**

Bearagnostic is Android-first, local-first, privacy-first and safety-first. It is not a RAM booster, CPU cooler, fake antivirus, registry cleaner or fear-based cleaner.

Scanner truth:
- Quick = metadata/deterministic rules;
- Smart = bounded real content sample + focused exact duplicate verification;
- Deep = full streaming readable-content work + exact duplicates where accessible;
- Custom = user-selected scopes; zero scopes never silently fall back.

Destructive flow:
`Select → Review → Confirm → Delete → Verify → Summary`

Never fabricate scan progress, junk totals, health scores, reclaimed bytes, speed improvements, undo, entitlement, cleanup history or storage trends.

# 8. PRODUCT STORY — CURRENT WEBSITE NARRATIVE

The Bearagnostic story is deliberately structured:

```text
01 See what is actually there.
02 Understand before deleting.
03 Privacy stays close.
04 Fast by design. Never padded.
05 Proof, not promises.
→ Bearagnostic Pro
```

Sections 01–03 and the existing Pro composition are production reference points. Section 04–05 are the next unfinished work and must be implemented as continuations of the same editorial system.


# WEBSITE STORY CONTINUATION — SECTION 04–05 (ACTIVE / NOT YET IMPLEMENTED)

This section is a **binding continuation brief** for the next room. It records the approved content, evidence, assets, layout intent, responsive behavior, marketing boundaries, and the failed implementation boundary for the two next Bearagnostic product-story sections.

## Product-story order

The current approved narrative sequence is:

```text
01  See what is actually there.
02  Understand before deleting.
03  Privacy stays close.
04  Fast by design. Never padded.
05  Proof, not promises.
→   Bearagnostic Pro
```

Sections 04 and 05 are **continuations of the same product-story system** after `Privacy stays close`; they are not unrelated standalone pages.

The purpose of this sequence is deliberate:

```text
visibility → understanding → privacy → speed → proof → Pro
```

The website should first establish what Bearagnostic sees, then why a user can understand it, then where processing happens, then demonstrate that the work is fast without invented benchmarks, and finally prove that destructive cleanup is explicit and verified before the commercial Pro section.

## Section 04 — Fast by design. Never padded.

### Approved marketing idea

This section must communicate **real product efficiency without synthetic speed claims**.

Preferred headline:

> **Fast by design. Never padded.**

Core meaning:

- Bearagnostic should feel fast because it performs purposeful work, not because the website invents a benchmark.
- Do not claim `fastest`, `x-times faster`, competitor superiority, universal scan time, or a guaranteed performance number.
- The evidence should come from an authentic app result captured on a real device/test run.
- Explain that actual time varies with storage size, file count, selected scan mode, device/storage speed and accessible content.
- Where useful, explain the architectural reason in plain language: bounded/deterministic work where appropriate, streaming rather than fake progress, and no deliberately padded progress animation.
- The section should be premium marketing, but every claim must remain technically defensible.

### Primary screenshot / evidence

Use the **Deep Scan completion/result evidence** already approved in the working room, whose visible proof includes:

```text
1,152 files
113 folders
22.3 GB
15 s
Verified
Why did this finish so fast?
```

These numbers are **an example observed run**, not a universal performance promise. Copy must make that distinction clear.

Do not substitute an unrelated scan-progress screen merely because it looks attractive. The visual needs to support the actual Section 04 claim.

### Dr.Bear mascot

Use the approved transparent Dr.Bear speed mascot created for this section: **Dr.Bear running / moving energetically with a lightning-speed visual cue**.

Current repository already contains a likely canonical optimized asset:

```text
public/products/bearagnostic/showcase/dr-bear-ultra-fast-scanning.webp
```

At room start, inspect the actual file visually and verify that it is the approved mascot from the conversation before using it. Do not replace it with a generic bear or regenerate it unnecessarily.

Recommended mascot count for this section: **one**. One strong mascot is more premium than repeating multiple decorative Dr.Bears.

Mascot role:

- supports the speed idea;
- adds energy without turning the section into a cartoon;
- must not cover meaningful screenshot UI;
- should remain secondary to product evidence.

### Section 04 visual hierarchy

Preferred hierarchy:

1. small numbered/kicker label `04`;
2. headline;
3. concise, credible supporting copy;
4. real scan evidence as the hero proof;
5. Dr.Bear speed mascot as a supporting character;
6. small evidence/context note clarifying that the shown time is an observed example and results vary.

Desktop should feel editorial and spacious, with an intentional image/text relationship rather than a generic equal-column SaaS block. Mobile should become a clean vertical story with no forced overlap.

Do not:
- place text over important screenshot data;
- crop away the numbers that establish the evidence;
- enlarge Dr.Bear until the mascot competes with the app;
- use fake speedometers, invented benchmark charts, fake progress bars, or decorative metrics;
- imply that every 22.3 GB scan completes in 15 seconds.

## Section 05 — Proof, not promises.

### Approved marketing idea

Preferred headline:

> **Proof, not promises.**

This section demonstrates Bearagnostic's deletion-safety philosophy through the **real exact-duplicate cleanup flow**, not through abstract trust badges.

The customer should understand this sequence visually:

```text
verified identical copies
→ user chooses what stays
→ selected extras are reviewed
→ final destructive confirmation
→ Android performs deletion
→ Bearagnostic verifies what is actually gone
→ only verified removed bytes are counted as reclaimed
```

This is one of the strongest product-trust sections on the page and should feel calm, precise and confident rather than dramatic.

### Approved screenshot set

Three supplied screenshots were approved as the evidence family:

**A. Exact Duplicates / selection screen**
- header: `EXACT DUPLICATES`
- `Keep one. Remove the extras.`
- one duplicate group with five identical copies;
- explicit `Keep this` / `KEEP`;
- `Select extras`;
- selected/review controls.

**B. Final Review confirmation**
- `FINAL REVIEW`
- `Remove the selected duplicate copies?`
- `4 Remove`
- `1 groups affected`
- `3.00 MB Reclaimable`
- copy states that only selected copies are permanently deleted and the kept copy remains unselected;
- `Delete & verify`.

**C. Verified completion**
- `VERIFIED DUPLICATE CLEANUP`
- `Duplicate cleanup complete`
- `3.00 MB verified space reclaimed`
- `4 copies removed`
- `1 groups resolved`
- `0 native protections`
- critical truth statement: `Only files Android confirmed as gone are counted as removed or reclaimed.`

### Which screenshot is the hero?

The **Verified completion screen (C)** is the strongest primary/hero visual for `Proof, not promises.` because it proves the end state and the verified-reclaimed accounting claim.

Screens A and B are supporting process evidence. They should be visible enough to establish user control and final confirmation, but should not overpower the verified result.

Preferred desktop art direction:
- completion screen dominant;
- selection and final-review screens staged behind/beside it as supporting steps;
- premium layered editorial composition, not a messy fan of three equal screenshots;
- preserve enough of each supporting screen to communicate its role.

Preferred mobile:
- avoid tiny unreadable three-phone fan layouts;
- use a controlled stacked/sequence treatment;
- completion proof remains the visual destination;
- screenshots must remain readable without horizontal overflow.

### Dr.Bear mascot

Use **one** Dr.Bear mascot for Section 05.

Approved behavioral direction: Dr.Bear in a **verification / inspection / confirmed-proof pose** — calm, credible, looking/checking rather than celebrating wildly. The mascot should reinforce `verified`, `checked`, `confirmed`.

The working room generated the approved transparent PNG for this purpose. Before implementation, inspect current repository assets and conversation/user-supplied assets. If the exact approved mascot has not yet been committed to `main`, use the supplied approved asset from the handoff rather than silently substituting another pose.

Do not regenerate unless the asset is genuinely unavailable or P'Benz asks for a replacement.

### Section 05 copy truths that must survive localization

Marketing copy may be polished, but the following meanings are non-negotiable:

- exact duplicates are verified identical copies;
- the user decides what stays before deletion;
- keep-one-copy protection is part of the flow;
- destructive action receives an explicit final review;
- the product verifies deletion;
- reclaimed space is counted only when Android confirms the file is gone;
- do not imply undo if no real undo exists;
- do not imply every deletion can bypass Android/native protections;
- do not turn `0 native protections` from one example run into a universal promise.

## Shared design / implementation rules for Sections 04–05

These two sections must feel like premium continuations of Sections 01–03, not bolted-on cards.

Required:
- reuse established Bright Humanist Computing design language;
- preserve section numbering/rhythm;
- maintain generous whitespace and strong editorial hierarchy;
- product UI is the evidence; mascot is supporting personality;
- no gratuitous glassmorphism, dashboard chrome, fake device frames, or visual clutter;
- screenshots should use optimized web assets (prefer WebP/AVIF where practical while preserving readable UI);
- preserve transparent mascot edges and correct aspect ratio;
- use responsive `clamp()`/container logic rather than breakpoint-by-breakpoint hacks;
- avoid absolute positioning that collapses at intermediate widths;
- validate wide desktop, normal laptop, tablet, narrow Android, and short viewport;
- no horizontal scroll;
- no overlap with adjacent sections or the Pro section;
- no screenshot/mascot clipping;
- no text collisions;
- readable text and controls at mobile width;
- maintain accessibility semantics, useful alt text and sensible reduced-motion behavior;
- animation, if any, must be subtle and optional; the story must work fully when motion is disabled.

### Marketing tone

Write at a professional product-marketing level, but stay within demonstrated product truth.

Preferred voice:
- concise;
- calm;
- intelligent;
- human;
- specific;
- confident because evidence is visible.

Avoid:
- `blazing fast`;
- `instant`;
- `zero risk`;
- `100% safe`;
- `best cleaner`;
- `fastest`;
- unsupported battery/performance/security claims;
- fear-based storage language;
- benchmark-style claims unsupported by controlled testing.

## Failed implementation boundary — 24 September 2026

The attempted Section 04–05 implementation in the previous working room is **REJECTED / FAILED / NON-CANONICAL**.

This failure was process as well as output quality:
- the implementation did not provide the expected detailed, visible work progression;
- it jumped to a completion claim;
- a real downloadable handoff was not supplied correctly;
- P'Benz explicitly rejected the result and ordered a clean-room handoff.

Therefore:

1. **Do not use any uncommitted ZIP, snippet, local patch or claimed completion from that failed attempt.**
2. Start from latest Benedict web `main`.
3. Inspect the currently committed Sections 01–03 and Pro section before coding.
4. Rebuild Sections 04–05 professionally from the approved brief above.
5. Show concise but meaningful implementation milestones in normal chat.
6. When P'Benz asks for files, the response is not complete until real clickable files are supplied.
7. Do not remotely mutate GitHub unless P'Benz explicitly authorizes it in that turn.
8. The new room must not ask P'Benz to re-explain the Section 04–05 concept, screenshot choices, mascot roles, marketing boundary, or responsive objective.

## Section 04–05 acceptance gate

Do not call these sections complete until all are true:

```text
[ ] latest web main inspected
[ ] existing 01–03 + Pro composition inspected
[ ] exact approved evidence assets identified
[ ] Section 04 uses authentic observed-run evidence
[ ] Section 04 avoids universal/competitor speed claims
[ ] Section 05 tells selection → review → delete → verify truth
[ ] verified-completion screen is the proof destination
[ ] one appropriate Dr.Bear per section
[ ] desktop composition premium and balanced
[ ] mobile composition readable, not a shrunken desktop collage
[ ] intermediate widths checked
[ ] no overlap / clipping / horizontal overflow
[ ] image optimization checked
[ ] accessibility/reduced-motion checked
[ ] production build/static QA actually run where environment permits
[ ] actual evidence level reported honestly
[ ] real handoff files supplied
```


# 9. COMMERCIAL MODEL / CUSTOMER JOURNEY

Pro:
- product code `bearagnostic_pro_lifetime`;
- one-time lifetime entitlement;
- 249 THB / 24900 minor units;
- no subscription;
- Ko-fi only payment surface;
- no separate Pro APK;
- no direct Benedict Stripe/PromptPay checkout;
- no Google Play launch.

Trust chain:
`verified Ko-fi Shop Order → Benedict payment ledger → lifetime entitlement → verified installation/device credential → EntitlementManager → Pro`

Never trust screenshot, redirect, client flag, local isPro flag, transfer reference or admin guess as payment truth.

Customer-facing copy must explain lifetime/no subscription, purchase email, OTP ownership verification, Restore using the same checkout email, reinstall/device-change persistence, and paid-but-not-unlocked recovery.

# 10. PRIVACY / EMAIL / SUPPORT / LEGAL

Do not ask P'Benz to reveal stored secrets. Keep email-index HMAC, PII encryption key, OTP pepper, Ko-fi token and Resend key independent/server-side.

`no-reply@benedictinteractive.com` is transactional-only. Branded inbound target is `support@benedictinteractive.com`; switch public support copy only when inbound routing and reply identity are proven. Until then, preserve current proven public support truth.

Legal/purchase/refund copy must accurately describe Ko-fi payment infrastructure, Benedict entitlement authority, email/OTP identity, lifetime license, support/refund path and revocation consequences.

Never say `No refunds under any circumstances`. Approved direction: lifetime digital entitlement generally non-refundable after successful activation, with appropriate exceptions such as duplicate charge, unresolved entitlement delivery and applicable law; refund/reversal/dispute may revoke entitlement.

# 11. LOCALIZATION

Website supports 10+ locales; Android launch supports only:
```text
English
ไทย
日本語
```

Website must not imply language parity. Preferred public meaning:
`App languages: English, Thai, and Japanese. Our website is available in 10+ languages. Additional app languages may be added in future updates.`

# 12. DISTRIBUTION / EXACT BINARY

Launch distribution:
`Benedict official website + Uptodown`

Website must eventually host the exact frozen Golden APK bytes, display exact version/checksum/release notes/install guidance, download the public file back and verify SHA-256, then submit the same binary to Uptodown.

Do not rebuild or resign B93 for either channel.

# 13. CURRENT OPEN PATH

Immediate:
1. implement website Section 04;
2. implement website Section 05;
3. responsive/visual/accessibility/build QA;
4. continue Final Website Polish across customer/support/legal/localization truth;
5. exact Golden APK hosting/checksum verification;
6. Ko-fi final presentation/publication check;
7. support/legal/refund/revoke/dispute closure;
8. Uptodown exact-binary submission;
9. final download/install/purchase/Restore/help smoke;
10. explicit public launch decision.

# 14. CLOSED / DO-NOT-REGRESS

Preserve:
- approved founder Hero and no founder sun;
- analytics privacy boundaries and no fake analytics/reviews/install claims;
- Ko-fi-only payment;
- 249 THB lifetime/no subscription;
- no fake admin payment override;
- no secrets in client/docs;
- no cookie banner merely for appearance;
- no unnecessary framework/dependency churn;
- no remote GitHub write without explicit authorization;
- Android B93 frozen identity;
- Commerce #1–#25 Frozen PASS;
- keep-one-copy, stale-review guard, verified reclaimed bytes;
- aggregate-only cleanup-history privacy;
- Release has no Dev entitlement controls;
- website 10+ languages vs app EN/TH/JA disclosure;
- exact same APK for Benedict and Uptodown.

# 15. NEW-ROOM STARTUP CHECKPOINT

At room start:
1. inspect latest web and Android `main`;
2. read this Master Plan and `docs/ROOM_MIGRATION_PROMPT.md`;
3. recognize Android B93 is closed/frozen;
4. do not restart obsolete Commerce Hardening #17;
5. inspect the actual current Bearagnostic page and committed showcase assets;
6. start from latest web `main`, not the rejected Section 04–05 attempt;
7. continue directly with Sections 04–05 using the binding brief in this file;
8. show meaningful progress milestones;
9. send real files when requested.

The handoff succeeds only if the new room can continue Sections 04–05 without asking P'Benz to reconstruct the plan.

**End of Revision 9.0**
