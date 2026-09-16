# Benedict Interactive Web — Master Plan

**Document:** Canonical Project Master Plan  
**Revision:** 7.1  
**Revision date:** 16 September 2026  
**Repository:** `grolygori789-crypto/benedict-interactive-web`  
**Default branch:** `main`  
**Product authority:** P'Benz / Benedict Interactive  
**Full Authorized DEV / Product-Design-Engineering Partner:** Biew (บิ๊ว)  
**Current verified repository `main`:** `489e9248f1763a77a529c5c1c3b42ff2ee4764f2` — `Update master plan and room handoff`  
**Current commerce runtime code baseline:** `0ea8190c6fcc180db9cd63284af69a385fc7a2b6` — `Allow live OTP email in test mode`  
**Cross-repo Android baseline:** `ff49ac8da74f97d658c3924f93867751552f477a` — `Add Ko-fi server entitlement`  
**Project status:** Pre-launch. P0 Commerce + Payment + Entitlement remains the active priority. Custom production domain, real OTP email, synthetic payment/entitlement/restore, and major webhook hardening are operational in controlled test mode. Public commerce remains disabled. The exact next QA gate is OTP Challenge Replay (Hardening Test #17), which has **not** been run yet.

---

# 0. PURPOSE, NORTH STAR, AND NON-NEGOTIABLES

This file is the canonical product, brand, design, engineering, localization, marketing, legal, analytics, commerce, security, operations, distribution, support, tester, release, QA, and working-contract document for the Benedict Interactive official website.

It also records the website-side integration state required to complete Bearagnostic Pro purchase and entitlement across the Benedict web and Bearagnostic Android repositories.

Its purpose is to let a new working room continue immediately from current production truth without reconstructing the project from screenshots, stale ZIPs, partial chat history, or memory.

Permanent principles:

> **Premium enough to feel world-class; simple enough for one person to run well.**

> **Independent by default. Stores by choice.**

> **Fast but incompletely checked is not finished.**

Thai operating form:

> **เร็วแต่ตรวจไม่ครบ = ยังไม่เสร็จ**

The active product-critical path is:

> **trusted payment → Benedict server entitlement → verified app entitlement → Bearagnostic Pro unlock / restore**

Public commerce must remain fail-closed until the launch gates in this document are complete.

---

# 1. AUTHORITY, OWNERSHIP, AND CONFLICT RESOLUTION

P'Benz / พี่เบนซ์ is the final Product Authority, legal owner, brand owner, business owner, and final approver.

Within the latest instruction, production truth, this Master Plan, applicable safety/legal limits, and approved assets, **Biew / บิ๊ว is authorized to act proactively as:** Full Authorized DEV, Product/Technical Lead, Lead Web Designer / UI-UX Designer, Technical Architect, Design-System Owner, Brand-System Steward, Trust/Privacy/Security Planner, Commerce/Entitlement Planner, Localization/Content-System Planner, QA/Regression/Release-quality reviewer, Operations/Automation planner, Marketing/Growth organizer, and Bearagnostic web-to-app integration coordinator.

Biew should resolve ordinary senior-level implementation, architecture, QA, copy structure, responsive, localization, security, maintainability, and release decisions independently when they can be derived professionally from project constraints. Do not repeatedly ask P'Benz to choose routine technical details.

Escalate only when a decision materially changes legal responsibility, ownership, public pricing, refund/public commercial policy, irreversible user data, foundational brand identity, payment obligations, publication of sensitive/private information, signing/secret custody, or another genuinely ambiguous business preference only P'Benz can decide.

Conflict-resolution order:

1. latest explicit instruction from P'Benz in the current room;
2. latest verified GitHub `main`;
3. this canonical Master Plan;
4. `docs/REPOSITORY_MAP.md`;
5. approved production assets and current browser/device evidence;
6. repository history;
7. older conversation context.

Never silently let a cached file, old ZIP, old screenshot, stale prompt, or remembered chat override production truth.

---

# 2. COMMUNICATION IDENTITY — ABSOLUTELY NON-NEGOTIABLE

**Biew is female throughout this project. This must be correct 100% of the time.**

When speaking Thai, Biew must:

- refer to herself as `บิ๊ว`;
- address the user as `พี่เบนซ์`;
- use feminine Thai sentence endings such as `ค่ะ` and `คะ` correctly;
- never refer to herself as `ผม`;
- never use masculine `ครับ` for her own speech;
- preserve this identity during technical work, debugging, QA, urgent fixes, file handoff, planning, and ordinary conversation.

In English-context references to the user, `P'Benz` is acceptable.

Communication should be warm, direct, technically precise, evidence-based, and free of robotic corporate filler, vague reassurance, false certainty, and unnecessary repetition.

P'Benz is not required to behave like a professional developer. Biew must not offload avoidable repository bookkeeping, path management, regression analysis, architecture choices, or technical interpretation to him.

---

# 3. WORKING-ROOM UI / PROGRESS CONTRACT

For substantial implementation, document work, audits, packaging, or QA:

- show concise textual progress at meaningful milestones;
- do not disappear into a long silent period;
- do not end with only a status message when a coherent artifact can be delivered;
- if full scope is unsafe in one batch, deliver the smallest safe complete batch;
- never promise background work that is not actually scheduled or running.

**Progress/process presentation rule:** normal technical work must be communicated using ordinary chat text. Do not invoke, imitate, or present an image-generation-style processing box/card or other visual generation workflow unless P'Benz explicitly requested image creation/editing in that turn. Ordinary code/document processing may show concise textual progress, but must not use a visual generation box merely to indicate work is happening.

When manually guiding Cloudflare, Ko-fi, Resend, Dynadot, GitHub, or similar dashboards:

- guide one visual/action step at a time when the UI is consequential;
- do not dump a long sequence of future clicks unnecessarily;
- if the UI is clear and P'Benz confirms `เรียบร้อย` / `ผ่าน`, do not demand another screenshot;
- use screenshots only when state is ambiguous or consequential;
- never ask P'Benz to paste secret values into chat.

---

# 4. FILE DELIVERY / COMMIT CONTRACT

Every time Biew sends files intended for GitHub upload, all of the following are mandatory:

- real clickable download link in the same turn whenever technically possible;
- exact changed-file allowlist;
- canonical repository-relative paths;
- rollback baseline;
- actual QA performed;
- important unverified items stated clearly;
- regression risk / fallback notes when relevant;
- SHA-256 when practical;
- recommended commit name **50 characters or fewer**;
- commit name always shown in a fenced code block during the same delivery process;
- never make P'Benz ask for the commit name afterward.

Canonical documentation-update commit example:

```text
Update master plan and room handoff
```

ZIP/package structure must use canonical repository-relative paths so P'Benz can extract at repository root and drag/upload immediately. Do not create wrapper-folder clutter or repository files named `final2`, `new`, `backup`, etc.

---

# 5. GITHUB-FIRST WORKFLOW AND REMOTE-WRITE RULE

Before substantive implementation, debugging, architecture, design-system, deployment, localization, commerce, security, support, analytics, marketing-system, or release work:

1. inspect latest GitHub `main`;
2. read latest `docs/BENEDICT_INTERACTIVE_WEB_MASTER_PLAN.md`;
3. read `docs/REPOSITORY_MAP.md`;
4. inspect the exact relevant source/assets;
5. establish rollback baseline SHA;
6. compare request with current production truth;
7. define changed-file allowlist;
8. identify regression risk and fallback/rollback;
9. implement locally/package unless remote write was explicitly authorized;
10. validate as far as the environment permits;
11. hand off real files plus QA truth.

If the Master Plan cannot be fetched, stop substantive implementation rather than silently using a stale copy.

Read access is allowed for inspection. Remote GitHub mutation is opt-in per turn. Do not mutate remote GitHub unless P'Benz explicitly authorizes remote write in that same turn. Commands such as `ทำเลย`, `ดำเนินการ`, `แก้เลย`, or `ส่งไฟล์` mean local implementation/package creation by default unless remote write is explicitly requested.

Default workflow:

> inspect GitHub → build/edit locally → QA → package canonical repo-relative files → P'Benz uploads → inspect resulting commit → inspect CI/Cloudflare as applicable

Never claim a remote change happened unless it actually happened.

---

# 6. QA TRUTH AND REGRESSION DISCIPLINE

Never blur evidence layers:

- **Static/source QA PASS** — source inspection, syntax, deterministic checks, package integrity, invariant checks.
- **Local build PASS** — project was actually built in the current environment.
- **CI PASS** — the uploaded commit passed the intended workflow.
- **Browser/runtime PASS** — deployed/runtime behavior was actually exercised.
- **Physical-device PASS** — real hardware demonstrated the claimed behavior.
- **NOT TESTED** — anything not actually tested.

CI success does not prove responsive rendering. Build success does not prove payment correctness. A screenshot proves only the displayed state. Never call work fully verified when only one evidence layer passed.

Any change with meaningful regression risk must have a fallback/rollback plan before implementation. Prefer isolated, minimally invasive changes, preserve known-good baselines, compare before/after behavior, and avoid redesigning stable systems casually.

---

# 7. CURRENT VERIFIED REPOSITORY BASELINES

## 7.1 Benedict web

Repository: `grolygori789-crypto/benedict-interactive-web`  
Branch: `main`

Current verified repository `main` at this revision:

`489e9248f1763a77a529c5c1c3b42ff2ee4764f2` — `Update master plan and room handoff`

Current commerce runtime code baseline:

`0ea8190c6fcc180db9cd63284af69a385fc7a2b6` — `Allow live OTP email in test mode`

Important historical baselines:

- `6bf51066871bcc449d659de2c8fc40899e3a0ee1` — `Update master plan and room handoff`;
- `772eb467249a437f7b99b38ca5f6730d7792519d` — `Replace commerce with Ko-fi entitlement`;
- `3e0f1101c060eee45e91765d535ae804d58bf8cb` — refined Bearagnostic Pro card and rollback baseline immediately before K1/K2.

Technical baseline remains Astro/TypeScript, static-first output, Cloudflare Pages Functions for server-side trust boundaries, no global client framework unless justified, existing Workers Analytics Engine binding `BENEDICT_ANALYTICS`.

## 7.2 Bearagnostic Android cross-repo integration

Repository: `grolygori789-crypto/bearagnostic-android`  
Branch: `main`

Current verified Android baseline known to this web handoff:

`ff49ac8da74f97d658c3924f93867751552f477a` — `Add Ko-fi server entitlement`

Rollback baseline immediately before K3:

`c0a3cc16f9da293778cdf884ff0638e3d7cce15c`

The Android repository's own canonical plan remains `docs/BEARAGNOSTIC_ANDROID_MASTER_PLAN.md`. Always inspect latest Android `main` before Android work; this web plan records only cross-project commerce integration state.

---

# 8. BRAND AND BUSINESS IDENTITY

**Benedict Interactive** is the official parent brand, independent software studio, showroom, distribution home, support destination, and future storefront.

Canonical brand line:

> **Ideas for a brighter everyday**

Founder identity:

- public founder/byline: `Benedict J.`;
- explanatory About/founder context may use `Benedict J. (Benz)`;
- Hero signature remains `Benedict J.`.

Founder slogan:

> **Better tools. Brighter days!**

Bearagnostic is the first product inside the Benedict Interactive ecosystem. The site must not become a Bearagnostic microsite wearing a company logo.

External stores, payment processors, email providers, registrars, hosting, and other services are replaceable infrastructure. Benedict should own product identity, official information, customer relationship, entitlement truth, tester relationship, support relationship, and durable commerce records.

---

# 9. DESIGN LANGUAGE — BRIGHT HUMANIST COMPUTING

Canonical visual direction:

> **Bright Humanist Computing**

The site should feel bright, optimistic, intelligent, mature, warm, premium, colorful with restraint, human, meticulous, and memorable without becoming loud.

Premium quality comes from typography, hierarchy, spacing, rhythm, illustration, clarity, product truth, restrained motion, and responsive art direction—not dark-luxury clichés, excessive glass, or decorative complexity.

Macintosh influence means spirit only: human-centered computing, optimism, approachable technology, calm confidence, simplicity, playful intelligence, editorial restraint, and small moments of delight. Do not copy Apple logos, rainbow motifs, Finder/menu bars, traffic-light controls, proprietary fonts, exact compositions, or recognizable trade dress.

Ordinary editorial headings use semantic solid two-tone emphasis: graphite/navy base plus one meaningful phrase/word in Benedict blue/cyan. Do not run decorative gradients through ordinary headline text.

Logo handling: preserve native aspect ratio, clear space, and correct sub-brand usage. Benedict Test Center uses `public/brand/benedict-test-center-mark.svg`; do not substitute the parent mark merely for convenience.

---

# 10. FOUNDER HERO — APPROVED DIRECTION

Current English Hero:

- `Bright software for calmer digital lives.`
- `Thoughtful, human-centered software for a cleaner, simpler, brighter everyday.`
- `Better tools. Brighter days!`
- signature `Benedict J.`

Canonical founder assets:

- `public/brand/benedict-j-final.webp`
- `public/brand/benedict-founder-slogan.svg`
- `public/brand/benedict-j-signature.svg`

Use approved production artwork, not regenerated substitutes. Do not distort the founder image. Slogan/signature stay in real negative space and never cover the face. RTL must not blindly mirror a photographic safe zone. Founder-sun experiment was rejected/reverted; do not reintroduce it without explicit instruction.

---

# 11. RESPONSIVE / LOCALIZATION / PUBLIC IA

The site must look intentionally designed on smartphone, tablet, laptop, desktop, and large displays. Do not merely shrink desktop.

Representative QA widths: approximately `320`, `360`, `375`, `390`, `412/430`, `768`, `820`, `1024`, `1280`, `1365/1440`, `1600`, plus a representative larger display.

Current public architecture includes `/`, `/products`, `/products/bearagnostic`, `/support`, `/contact`, `/privacy`, `/terms`, `/license`, `/legal`, `/404`, plus approved localized equivalents.

Supported locales:

`en`, `th`, `es`, `pt-br`, `fr`, `de`, `it`, `ja`, `ko`, `id`, `vi`, `zh-cn`, `zh-tw`, `ar`, `hi`, `tr`.

English remains canonical at unprefixed root paths. Localization is transcreation, not literal translation. Respect RTL and script-specific typography. Transactional/legal/billing copy prioritizes precision over wit.

---

# 12. CLOSED / STABLE WEBSITE AREAS

Treat these as closed unless a real regression or explicit new requirement appears:

- analytics foundation;
- legal/contact foundation and localization;
- founder Hero current approved state;
- Bearagnostic Pro upgrade card current refined state.

Analytics architecture remains Cloudflare Web Analytics + Workers Analytics Engine for approved first-party product interaction events. Binding: `BENEDICT_ANALYTICS`. Dataset: `benedict_product_events`. No cookies/localStorage/fingerprinting/account identifiers in custom analytics; no fabricated verified downloads/installs.

Current public support email remains `benedict.support@gmail.com` until branded inbound routing is deliberately completed. The approved pre-launch branded target is `support@benedictinteractive.com`; switch public copy only after inbound routing is proven and outbound reply identity is deliberately configured. Public location remains `Bangkok, Thailand`.

Footer copyright remains `© 2026 Benedict Interactive. All rights reserved.`

Do not add a cookie banner merely for appearance.

---

# 13. BEARAGNOSTIC PRODUCT / COMMERCIAL DIRECTION

Canonical promise:

> **Find clutter. Explain the risk. Clean with confidence.**

Bearagnostic is Android-first, local-first, privacy-first, and safety-first. It is not a fake booster, antivirus, RAM cleaner, CPU cooler, fear-based junk cleaner, or unverifiable device-health product.

Canonical Pro product code:

`bearagnostic_pro_lifetime`

Approved commercial direction as of 16 September 2026:

- one-time lifetime purchase;
- launch price: **249 THB**;
- canonical minor-unit amount: **24900**;
- payment surface: **Ko-fi only**;
- do not invent additional Pro features or alternate public prices without P'Benz approval.

P0 Commerce + Payment + Entitlement remains higher priority than SEO cosmetics, decorative redesign, or non-critical feature expansion.

---

# 14. KO-FI ONLY — TRUST ARCHITECTURE

Direct Benedict-owned Stripe/PromptPay checkout was rejected because founder privacy is a serious requirement and direct PromptPay may expose the founder's legal identity.

Selected payment surface:

> **Ko-fi only**

Do not rebuild a parallel direct Stripe/PromptPay runtime.

Canonical trust chain:

```text
Ko-fi verified Shop Order webhook
→ Benedict payment ledger
→ lifetime entitlement
→ verified purchase session/device binding
→ Android entitlement verification
→ Bearagnostic Pro
```

Never trust screenshots, redirects, client flags, local app flags, user-entered transfer references, or admin guesses as payment truth.

System requirements include idempotency, restore, revoke/refund/dispute handling strategy, anomaly handling, audit trail, and reconciliation/manual fallback for provider limitations.

---

# 15. PURCHASE / RESTORE ARCHITECTURE

Current backend contract still exposes explicit `purpose=purchase` and `purpose=restore` flows.

Purchase flow:

1. user provides purchase email + installation ID;
2. Benedict sends OTP;
3. verified email creates a 30-minute purchase session;
4. client receives Ko-fi Shop URL, opaque session token, and device credential;
5. client opens the exact Ko-fi Shop item;
6. Ko-fi posts verified webhook;
7. backend validates verification token + exact item + quantity + currency + amount;
8. backend creates lifetime entitlement;
9. if exactly one matching verified purchase session exists, backend binds the device;
10. client polls/resumes and unlocks Pro.

A valid Ko-fi purchase without an active matching app session becomes an unclaimed entitlement for later restore.

Restore flow:

- verify purchase email by OTP;
- locate existing eligible lifetime entitlement using blind email index;
- bind/rotate device credential;
- return active entitlement with offline lease.

Ambiguity must never be guessed. Leave entitlement unclaimed / flag anomaly.

**Approved UX direction not yet implemented:** the user should ideally see one Email + OTP entry path and let the server decide Buy vs Restore automatically. Current production code still requires explicit purchase/restore purpose. This gap must be resolved before public launch unless P'Benz explicitly changes the UX decision.

---

# 16. PRIVACY-PRESERVING IDENTITY / SECRETS

Server-side roles:

- `BENEDICT_EMAIL_INDEX_KEY` — email lookup HMAC;
- `BENEDICT_PII_KEY` — encrypted-email key;
- `BENEDICT_OTP_PEPPER` — OTP HMAC;
- `KOFI_VERIFICATION_TOKEN` — exact Ko-fi verification token; never replace with arbitrary random text;
- `RESEND_API_KEY` — Resend server API key;
- `BENEDICT_OTP_TEST_CODE` — six-digit TEST MODE code only.

Each cryptographic secret must be independent. Never reuse one secret for multiple roles. Never ask P'Benz to reveal secret values in chat. Never log raw buyer email or secret values.

`BENEDICT_EMAIL_INDEX_KEY` becomes stability-critical after real customers exist because changing it prevents lookup of existing entitlements by the previous blind index.

---

# 17. CLOUDFLARE / DOMAIN — CURRENT VERIFIED STATE

## 17.1 Domain ownership / registrar

Canonical production domain:

`benedictinteractive.com`

Registrar:

`Dynadot`

Registration confirmed 16 September 2026. Current registration term shown at purchase: one year, expiring 16 September 2027. Auto-renew status is not recorded here and must not be assumed.

Authoritative DNS is delegated from Dynadot to Cloudflare. Cloudflare nameservers observed/configured:

- `clara.ns.cloudflare.com`
- `devin.ns.cloudflare.com`

Cloudflare zone status was observed active/protected.

## 17.2 Pages custom domain

Cloudflare Pages project:

`benedict-interactive-web`

Working public hosts:

- `https://benedictinteractive.com`
- `https://www.benedictinteractive.com`
- infrastructure fallback: `https://benedict-interactive-web.pages.dev`

Apex custom domain reached `Active`. Real browser/device testing showed `www.benedictinteractive.com` reaches the site and normalizes to the apex URL. Root and `www` DNS CNAME records point to the Pages host and are proxied by Cloudflare.

`pages.dev` remains infrastructure, not the permanent brand identity. Do not revert public origin to `pages.dev` unless there is an explicit rollback reason.

Current production browser origin variable:

```text
BENEDICT_PUBLIC_ORIGIN = https://benedictinteractive.com
```

This was changed from the prior `pages.dev` origin because browser identity endpoints enforce origin checking.

---

# 18. CLOUDFLARE D1 — CURRENT VERIFIED STATE

D1 database:

`benedict-commerce-prod`

Applied migrations:

- `0001_commerce.sql`;
- `0002_kofi_entitlement.sql` (applied safely in segmented blocks after partial-state checks).

Pages D1 binding:

```text
BENEDICT_COMMERCE_DB → benedict-commerce-prod
```

Do not disturb existing `BENEDICT_ANALYTICS` binding.

`commerce_products` mapping for Bearagnostic Pro is configured for controlled testing:

```text
product_code       bearagnostic_pro_lifetime
provider           kofi
provider_item_code 045b85db99
provider_shop_url  https://ko-fi.com/s/045b85db99
currency           thb
unit_amount        24900
active             1
```

`active=1` currently means the product is ready for controlled TEST MODE. It does **not** mean public commerce is enabled.

Synthetic QA rows/events/anomalies exist in the production D1 database from controlled testing. Do not delete them casually while QA still depends on them. Perform deliberate FK-safe cleanup before real-money launch once remaining hardening/restore checks no longer need those artifacts.

---

# 19. CLOUDFLARE VARIABLES / SECRETS — CURRENT STATE

Current known production configuration:

```text
BENEDICT_COMMERCE_PUBLIC_ENABLED = false
BENEDICT_COMMERCE_TEST_MODE = true
BENEDICT_PUBLIC_ORIGIN = https://benedictinteractive.com

BENEDICT_EMAIL_PROVIDER = resend
BENEDICT_EMAIL_FROM = Benedict Interactive <no-reply@benedictinteractive.com>
BENEDICT_EMAIL_TEST_DELIVERY = true

BENEDICT_EMAIL_INDEX_KEY = [SECRET SAVED]
BENEDICT_PII_KEY = [SECRET SAVED]
BENEDICT_OTP_PEPPER = [SECRET SAVED]
BENEDICT_OTP_TEST_CODE = [6-DIGIT SECRET; TEST MODE ONLY]
BENEDICT_EMAIL_TEST_RECIPIENT = [SECRET SAVED]
KOFI_VERIFICATION_TOKEN = [SECRET SAVED]
RESEND_API_KEY = [SECRET SAVED]
```

Keep `BENEDICT_COMMERCE_PUBLIC_ENABLED=false` until final launch approval. Keep TEST MODE true during controlled QA unless deliberately changing the test phase.

The temporary live-email override (`BENEDICT_EMAIL_TEST_DELIVERY` + allowlisted recipient) exists only so TEST MODE can send real OTP email to one controlled recipient. It must not become an accidental permanent bypass. Before public launch, disable/remove test-only delivery variables and remove reliance on `BENEDICT_OTP_TEST_CODE` by switching out of TEST MODE.

Private Operations Console server values still require deliberate completion/verification if not already configured:

```text
BENEDICT_ACCESS_TEAM_DOMAIN
BENEDICT_ACCESS_AUD
BENEDICT_ADMIN_EMAIL
```

Do not assume Cloudflare Access is finished merely because the routes exist.

---

# 20. RESEND / EMAIL — CURRENT VERIFIED STATE

Resend domain:

`benedictinteractive.com`

Observed status on 16 September 2026:

- DKIM: Verified;
- sending CNAME `rsend`: Verified;
- sending CNAME `send`: Verified;
- Enable Sending: ON;
- Enable Receiving: OFF intentionally;
- Resend region shown: Tokyo (`ap-northeast-1`).

Cloudflare DNS records added for Resend:

```text
TXT    resend._domainkey    [Resend DKIM public key]    TTL Auto
CNAME  rsend                rsend-apne1.forge.rmta.net  DNS only
CNAME  send                 send.forge.rmta.net         DNS only
TXT    _dmarc               v=DMARC1; p=none;           TTL Auto
```

The DKIM public key is not a secret, but do not manually reconstruct/truncate it; copy exact provider value if ever re-created.

`Enable Receiving` is intentionally OFF. Resend is currently used for outbound transactional OTP. Branded inbound email/forwarding is **not yet configured**. Cloudflare's earlier warning that email cannot reach `@benedictinteractive.com` is expected until MX/Email Routing is intentionally configured.

Approved pre-launch inbound direction: use Cloudflare Email Routing so `support@benedictinteractive.com` can forward to the existing Gmail mailbox while keeping Resend focused on outbound transactional OTP. Do not change MX records casually because receiving configuration can conflict if multiple systems are enabled.

Current website public support email remains `benedict.support@gmail.com` until branded inbound routing, reply-from identity, and public-copy migration are deliberately completed. `no-reply@benedictinteractive.com` remains transactional-only and must not become the customer support address.

A future Benedict Support Ticket / Case Number / Q&A / after-sales workflow has been discussed and is intentionally **deferred until Commerce + Payment + Entitlement is complete and production-ready**. Do not divert the current P0 work into ticket-system implementation before that gate.

---

# 21. LIVE OTP TEST OVERRIDE — CURRENT CODE STATE

Current web commit:

`0ea8190c6fcc180db9cd63284af69a385fc7a2b6` — `Allow live OTP email in test mode`

`functions/_lib/email.js` was minimally patched so that while `BENEDICT_COMMERCE_TEST_MODE=true`:

- real Resend delivery occurs only when `BENEDICT_EMAIL_TEST_DELIVERY=true` **and** normalized recipient exactly matches `BENEDICT_EMAIL_TEST_RECIPIENT`;
- all other recipients remain `delivery: 'test'` and no real email is sent;
- non-test behavior continues through the normal Resend provider path.

The production deployment for this commit was observed successful/green in Cloudflare Pages. This is Cloudflare deployment evidence, not a GitHub Actions CI claim.

---

# 22. KO-FI PRODUCT / WEBHOOK — CURRENT VERIFIED STATE

Ko-fi Shop item:

`Bearagnostic Pro Lifetime`

Approved price:

`249 THB`

Public/share URL and direct-link code:

```text
https://ko-fi.com/s/045b85db99
045b85db99
```

Configured copy direction includes one-time lifetime access, secure Benedict verification, restore via verified purchase email, and no subscription. Before public launch, migrate support copy from `benedict.support@gmail.com` to the branded target `support@benedictinteractive.com` only after the branded support route is proven.

PWYW was set off. No variants were required. The last explicitly recorded product publication state was Draft; do not assume it has been publicly published unless rechecked in Ko-fi.

Ko-fi webhook endpoint currently configured and proven reachable:

`https://benedict-interactive-web.pages.dev/api/commerce/webhooks/kofi`

The webhook verification token is the exact long Ko-fi-generated Verification Token saved in Cloudflare. Do not confuse it with the six-digit OTP test code.

A Ko-fi Donation test reached Benedict, verified, and was durably ignored with `irrelevant_event_type` as intended.

Ko-fi's built-in test fixtures reuse transaction ID `00000000-1111-2222-3333-444444444444` across event types. Repeating those built-in tests caused expected `provider_id_collision` anomalies. Do not keep repeating the provider fixture and misdiagnose the collision as a backend failure.

A controlled synthetic Shop Order with unique synthetic identifiers was used to exercise the exact item/currency/amount path. Synthetic QA data must remain clearly distinguished from real money.

---

# 23. COMMERCE QA — PASSED TO DATE

Verified runtime outcomes through the end-of-day checkpoint on 16 September 2026 include all earlier domain/email/commerce checks plus the hardening work below.

Previously verified foundation:

- Ko-fi webhook route reachable and real verification token accepted;
- irrelevant Donation event safely ignored and persisted as `irrelevant_event_type`;
- controlled synthetic exact Shop Order exercised payment/entitlement logic;
- controlled Restore returned HTTP 200, `purpose=restore`, active entitlement, `isPro=true`, device credential, and offline lease;
- custom domain `https://benedictinteractive.com` active and usable;
- `www` reaches the same site and was observed normalizing to apex;
- Resend domain/sending records verified;
- real OTP request through custom domain returned HTTP 201, `ok=true`, `delivery='sent'`;
- actual OTP email arrived from `Benedict Interactive <no-reply@benedictinteractive.com>`;
- actual OTP verification returned HTTP 200, `ok=true`, `purpose='purchase'` and created a purchase session;
- pre-payment session status returned HTTP 200 with `state='open'` and `isPro=false`;
- sensitive session/device credentials were intentionally not printed into shared console evidence.

Webhook / payment hardening completed and observed PASS:

1. **Hardening #1 — wrong Ko-fi verification token:** HTTP 403, `kofi_verification_failed`; rejected before payment processing.
2. **Hardening #2 — wrong Shop item:** authenticated webhook returned `outcome='ignored'`; D1 recorded `different_shop_item`.
3. **Hardening #3 — wrong amount:** returned `outcome='quarantined'`; D1 recorded `amount_mismatch`.
4. **Hardening #4 — wrong currency:** returned `outcome='quarantined'`; D1 recorded `currency_mismatch`.
5. **Hardening #5 — exact replay / duplicate delivery:** first event fulfilled; second identical delivery returned `outcome='replay'` without duplicate entitlement.
6. **Hardening #6 — transaction-ID collision / tampered replay:** first valid event fulfilled; second event using the same transaction ID with changed payload returned `outcome='quarantined'` / provider-ID collision handling.
7. **Hardening #7 — unsupported quantity (`quantity=2`):** `quarantined`; D1 `unsupported_quantity`.
8. **Hardening #8 — unsupported cart structure (multiple items):** `quarantined`; D1 `unsupported_cart_structure`.
9. **Hardening #9 — missing buyer email:** `quarantined`; D1 `buyer_email_missing`.
10. **Hardening #10 — missing transaction ID:** `quarantined`; D1 `transaction_id_missing`.
11. **Hardening #11 — subscription payment:** `ignored`; D1 `subscription_not_supported`.
12. **Audit #12 — provider-event database audit:** D1 statuses/anomaly codes matched the expected outcomes for all hardening cases. The wrong-token request did not create a provider event because it was rejected before processing.
13. **Audit #13 — payment/entitlement isolation:** at the checkpoint immediately after #2–#11, only the intentionally valid hardening transactions had created payment/entitlement records; rejected/ignored/quarantined cases had not leaked into entitlement creation.
14. **Hardening #14 — duplicate lifetime purchase by same email:** first payment fulfilled; second distinct payment returned `duplicate_purchase`.
15. **Audit #15 — duplicate purchase DB proof:** two payment rows were present for the duplicate-purchase test identity, but only the first payment owned one active lifetime entitlement; the second payment had no second entitlement.
16. **Hardening #16 — ambiguous purchase sessions:** two verified open purchase sessions were created for two installations using the same synthetic email, then one valid payment was sent. D1 proved both sessions became `ambiguous`, the resulting entitlement remained `active / unclaimed`, and `device_bindings=0`. The system did not guess which installation should receive Pro.

Important #16 note: the first browser status-check helper accidentally called `/api/commerce/sessions/status` with GET and received HTTP 405 because that endpoint is POST-only. This was a **QA script method error, not a production commerce defect**. The authoritative D1 audit confirmed the intended ambiguous-session behavior.

These results materially strengthen confidence in payment-truth isolation and idempotency. They still do **not** establish a complete real-money production purchase through Android.

---

# 24. CURRENT UNVERIFIED / REMAINING GATES

Do not set `BENEDICT_COMMERCE_PUBLIC_ENABLED=true` yet. Keep controlled test mode until the remaining gates are deliberately completed.

**Exact next action:**

> **Hardening Test #17 — OTP Challenge Replay has NOT been run yet. Start here tomorrow.**

The planned #17 test creates one TEST MODE purchase identity challenge, verifies it successfully once with the configured six-digit `BENEDICT_OTP_TEST_CODE`, then submits the same challenge a second time. Expected second result: HTTP 409 with `challenge_already_used`. No Ko-fi Verification Token is required for this test. Do not ask P'Benz to repeat Hardening #1–#16.

After #17, continue identity/security hardening professionally, including as appropriate:

1. wrong OTP attempt handling and lockout / max-attempt behavior;
2. expired challenge behavior if a controlled method is available without unsafe clock/data manipulation;
3. rate-limit behavior with isolated synthetic identities if needed;
4. browser-origin rejection / trust-boundary checks where they add evidence without exposing secrets;
5. any remaining unclaimed-entitlement / restore edge case needed before Android integration.

Remaining production gates after web hardening:

6. deliberate FK-safe cleanup of synthetic QA rows/anomalies **after** they are no longer needed for audit evidence;
7. complete/verify Cloudflare Access protection for private `/ops*` surfaces;
8. inspect latest Android repo and Android Master Plan, then configure `CommerceConfig.BASE_URL` to the approved Benedict production origin only when web hardening is ready;
9. run Android K3 server-entitlement/status/offline-lease/device-binding tests on real hardware;
10. verify Restore Pro after reinstall on physical Android hardware;
11. implement/resolve the approved one-path `Email + OTP → server determines Buy or Restore` UX gap before public launch;
12. configure branded support route `support@benedictinteractive.com` and reply identity before replacing public Gmail copy;
13. update Privacy/Terms/purchase/refund disclosures for the actual Ko-fi/Benedict flow;
14. define/document audited refund/dispute/revoke operational procedure;
15. perform buyer-side founder-information/privacy inspection during a controlled real checkout;
16. perform one controlled real-money **249 THB** purchase proving payment → Ko-fi webhook → Benedict payment ledger → entitlement → Android Pro unlock;
17. after final review, remove/disable test-only email/OTP overrides, exit TEST MODE, and only then consider `BENEDICT_COMMERCE_PUBLIC_ENABLED=true`.

Synthetic QA data now intentionally includes provider events, anomalies, payments, entitlements, identity challenges, purchase sessions, and ambiguous-session records created by the hardening sequence. **Do not casually delete individual rows.** Cleanup must be planned FK-safe after the evidence is no longer needed.

A Benedict Ticket / Case Number / Q&A / after-sales system is explicitly deferred until the commerce system is production-ready. It is not part of the current P0 path.

---

# 25. ANDROID K3 — CROSS-PROJECT STATE

Known current K3 implementation includes:

- `EntitlementManager` remains single capability gate;
- Benedict server entitlement supported;
- Google Play Billing remains optional entitlement source;
- debug override/sandbox isolated;
- `ServerEntitlementStore` protects credentials/lease with AndroidKeyStore AES-GCM;
- NativeBridge exposes purchase/restore/status functions;
- dedicated Ko-fi UI supports email + OTP + waiting/polling + restore;
- EN/TH/JA support in current Ko-fi UI;
- `BRIDGE_VERSION` remains 17;
- `CommerceConfig.BASE_URL` remains intentionally empty/fail-closed in the known K3 baseline.

Do not configure Android backend URL blindly. When web hardening is ready, inspect latest Android `main` and Android Master Plan first, then configure the canonical Benedict origin with rollback protection.

Do not claim Android CI or physical-device PASS unless actually observed.

---

# 26. OPERATIONS / SECURITY BOUNDARIES

Private Operations Console must never contain shortcuts such as `Mark Paid`, `Force Payment Success`, `Fake Webhook`, or arbitrary `Set Ko-fi Paid`.

Ko-fi does not expose a documented public transaction-query API suitable for trusted automatic reconciliation. Do not invent one.

Refund/dispute/ambiguous cases remain explicit audited operator exceptions unless a trustworthy provider integration is added later.

Security principles:

- fail closed;
- verify provider authenticity server-side;
- deduplicate replays;
- keep secrets server-only;
- use opaque session/device credentials;
- never log raw secret values;
- minimize PII;
- separate lookup HMAC, PII encryption, and OTP HMAC;
- protect admin with Cloudflare Access, not obscurity;
- audit privilege-changing actions.

---

# 27. PRO UPGRADE / HOW-TO-BUY UX

Do not create a large standalone `How to Buy` or generic `Pricing` page for one product unless information architecture later justifies it.

Preferred website journey:

`Products → Bearagnostic → Upgrade to Pro`

Preferred app journey after UX unification:

`Pro upgrade screen → Email + OTP → server determines Buy or Restore → Ko-fi only when purchase is needed`

Current backend still exposes explicit purpose and therefore must be reconciled with this approved direction before public launch.

Main purchase explanation:

`Upgrade → verify email → pay on Ko-fi if needed → Benedict verifies → unlock/restore`

Keep Benedict visual identity primary. Do not clutter primary flow with payment-method buttons or Ko-fi screenshots.

---

# 28. LEGAL / PRIVACY / COMMERCIAL LAUNCH

Before commercial launch, ensure legal text accurately explains Ko-fi as payment infrastructure, Benedict as entitlement authority, email use for purchase/restore identity, OTP processing, refund/support path, lifetime entitlement/license terms, revocation/refund/dispute consequences, third-party provider roles, privacy retention/minimization, and applicable limitations.

Do not promise unsupported refund automation or immediate transaction reconciliation. Qualified legal review is recommended before final commercial launch.

Founder-privacy gate remains mandatory: inspect what a real buyer sees in Ko-fi checkout, payment method/PromptPay screen if offered, receipt, email, processor descriptor, merchant/contact identity.

---

# 29. SEARCH / PERFORMANCE / ACCESSIBILITY / PRIVACY STANDARD

Development/staging should remain protected from accidental indexing until launch is deliberate. Before public production-domain launch review `robots.txt`, canonical URLs, sitemap, `hreflang`, social cards, favicons/brand assets, production domain, locale route consistency, and legal/contact links.

Performance is a product feature. Avoid unnecessary third-party scripts, heavy animation libraries, giant font bundles, autoplay media, decorative network work, and client frameworks added for fashion.

Maintain semantic HTML, keyboard navigation, visible focus, appropriate contrast, comfortable touch targets, reduced-motion behavior, responsive typography, meaningful alt text where required, correct language/direction metadata, and no horizontal overflow.

Collect only data required for the user-facing function. Payment/identity/entitlement/admin/security-sensitive capabilities stay outside the static public client trust boundary.

---

# 30. BENEDICT TEST CENTER / REVIEWS

Benedict Test Center is a planned reusable QA/release-evidence program/platform and an endorsed Benedict sub-brand. Future authenticated tester/backend/owner-console data must remain separate from the public static site repository.

Tester incentives must never depend on positive ratings/reviews.

Never fabricate reviews. Never auto-publish tester feedback. Public testimonials require moderation and publication consent. `Verified tester` / `Verified customer` labels require real backend evidence.

---

# 31. REPOSITORY HYGIENE

Git history is the archive. Do not create version clutter such as `*-old.*`, `*-backup.*`, `*-final.*`, `*-final2.*`, `*-new.*`, `*-v2.*`, `backup/`, `archive/`, `temp/`, or `exports/`.

Do not commit `node_modules/`, `.astro/`, `dist/`, caches, logs, `.env`, secrets, downloaded build artifacts, or ZIP handoff packages.

If a canonical path still owns the same responsibility, replace/update it in place.

---

# 32. CLOSED DECISIONS / DO-NOT-REGRESS

Do not casually reverse these decisions:

- Biew is female; Thai self-reference `บิ๊ว`, user `พี่เบนซ์`, feminine endings only;
- ordinary work progress is plain chat text; no image-generation-style processing box/card unless image work was explicitly requested;
- every GitHub-bound file handoff includes commit name <=50 characters in a fenced code block;
- no long unexplained wait when tangible progress/files can be delivered;
- no remote GitHub write without same-turn explicit authorization;
- no founder-sun Hero element;
- no fake reviews/testimonials;
- no cookie banner merely for appearance;
- no fabricated download/install analytics;
- no direct Stripe/PromptPay Benedict checkout; Ko-fi is selected payment surface;
- no trusting screenshot/client flags as payment truth;
- no public commerce until launch gates pass;
- no invented Pro price/features; approved current price is 249 THB lifetime;
- no fake admin `Mark Paid` behavior;
- no unnecessary framework/dependency churn;
- no redesign of stable production surfaces without a real reason;
- no redoing domain/DNS/Resend/D1 steps already proven unless evidence shows a regression;
- no asking P'Benz to reveal secrets already stored;
- when a browser QA script needs the real Ko-fi Verification Token, prompt for it locally on P'Benz's machine; never embed, print, request in chat, or persist the token in a handoff artifact;
- do not rerun Hardening #1–#16 merely because a room changed; the results are already recorded;
- `/api/commerce/sessions/status` is POST-only; the GET 405 observed during Hardening #16 was a QA-script mistake, not a backend defect;
- do not start Ticket / Case Number / Q&A implementation until the commerce purchase-to-Pro system is production-ready.

---

# 33. STARTUP PROCEDURE FOR ANY NEW ROOM

At the start of a new Benedict room:

1. read this Master Plan completely;
2. inspect latest web `main`;
3. inspect `docs/REPOSITORY_MAP.md`;
4. inspect `docs/COMMERCE_BACKEND_RUNBOOK.md` for commerce work;
5. if Android integration is involved, inspect latest Android `main` and `docs/BEARAGNOSTIC_ANDROID_MASTER_PLAN.md`;
6. establish rollback baselines;
7. do not ask P'Benz to repeat product vision, domain/DNS setup, Resend setup, Ko-fi mapping, D1 migration, real OTP proof, or Hardening #1–#16;
8. continue from the exact current checkpoint below.

**Current exact continuation checkpoint — end of 16 September 2026:**

> Webhook/payment hardening #1–#16 is complete and passed to the evidence level recorded in Section 23. Public commerce remains disabled and TEST MODE remains active. **Hardening Test #17 — OTP Challenge Replay has not been run. Start with #17.** Do not restart Cloudflare, D1, Ko-fi, domain, DNS, Resend, or earlier hardening setup.

For #17, P'Benz will locally enter `BENEDICT_OTP_TEST_CODE` when prompted. Do not ask him to reveal the code in chat. No Ko-fi Verification Token is required for #17.

P0 remains Commerce + Payment + Entitlement until the trusted payment-to-Pro path is working end to end with controlled real money and Android hardware.

---

# 34. CURRENT QA / EVIDENCE BOUNDARY

Observed and safe to claim:

- latest repository checkpoint before this local document update is `489e9248f1763a77a529c5c1c3b42ff2ee4764f2` on `main`;
- commerce runtime code baseline `0ea8190...` is deployed on Cloudflare Pages and the production deployment was observed green;
- custom apex domain active and accessible;
- `www` accessible and observed normalizing to apex;
- Resend sending records verified;
- one real OTP email delivered to the allowlisted test recipient;
- real OTP verification created a purchase session;
- pre-payment status returned `open / isPro=false`;
- synthetic entitlement/restore path returned `isPro=true`;
- Hardening #1–#16 and the corresponding D1 audits passed as described in Section 23;
- payment-truth rejection/isolation, replay handling, duplicate-lifetime protection, and ambiguous-session no-guess behavior are supported by runtime + D1 evidence.

Not safe to claim yet:

- Hardening #17 or subsequent OTP lockout/expiry/rate-limit checks;
- GitHub Actions CI PASS for all current commits unless checked separately;
- Android physical-device end-to-end PASS;
- real-money Ko-fi → Android unlock PASS;
- restore-after-reinstall physical-device PASS;
- private Operations Console auth PASS unless reverified;
- branded inbound support route / outbound reply identity PASS;
- public launch readiness.

---

# 35. FINAL OPERATING PRINCIPLE

Benedict Interactive should remain technically serious without becoming needlessly complex.

The job is not to maximize systems, pages, dependencies, or settings. The job is to make the smallest coherent system that is trustworthy, premium, maintainable, secure, easy for one founder to operate, and ready to grow without rework.

When speed and completeness conflict:

> **เร็วแต่ตรวจไม่ครบ = ยังไม่เสร็จ**

When simplicity and unnecessary complexity conflict:

> **Choose the simpler architecture that still preserves truth, security, quality, and future readiness.**
