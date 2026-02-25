# Phase 1: Store Foundation - Research

**Researched:** 2026-02-25
**Domain:** Shopify store configuration, DNS/SSL, payments, password page customization
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Coming-soon page
- Full teaser landing page — not a minimal password gate
- Lifestyle mood images only — cream desk setups, animal print textures, fashion mood. No product shots or silhouettes before launch
- Countdown timer to a specific launch date (date TBD — will be set when launch date is decided)
- Email capture with incentive: "Get 15% off + shop before everyone else"
- Brand story snippet — short teaser copy that establishes FAUNA LUXE identity
- Cream & beige aesthetic must be visible from this first touchpoint

### Claude's Discretion
- Shopify plan tier selection (Basic vs Shopify — choose based on feature needs and cost)
- Domain registrar choice (Shopify vs external)
- Payment method configuration beyond Shopify Payments defaults
- Store currency and locale settings
- Coming-soon page layout specifics (section order, typography, spacing)

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| FOUND-01 | Shopify store created with Payments enabled (Visa, Mastercard, Shop Pay, Apple Pay) | Shopify Payments activates all four automatically; requires paid plan + US business verification |
| FOUND-02 | Custom domain configured and connected to store (e.g. faunaluxe.com) | A record → 23.227.38.65, CNAME → shops.myshopify.com; SSL auto-provisioned within 48h |
| FOUND-03 | Guest checkout enabled (Shopify disables this by default — must be manually turned on) | Settings > Checkout > Customer accounts → "Accounts are optional" |
| FOUND-04 | SSL certificate active, store loads on HTTPS | Automatic from Shopify after valid DNS; no manual cert management needed |
</phase_requirements>

---

## Summary

Phase 1 is a Shopify platform configuration phase — no code is written, and no products are created. The entire phase consists of admin-panel decisions, DNS configuration, and one piece of custom Liquid/HTML work: the coming-soon password page. Every other phase depends on this infrastructure being live.

The four requirements (FOUND-01 through FOUND-04) are tightly coupled. Shopify Payments cannot be activated on the free 3-day trial; a paid plan must be selected first. The domain cannot get an SSL certificate until DNS records point to Shopify's servers. Guest checkout is a single settings toggle that is easy to miss and must be confirmed before any test purchases. The coming-soon page is the only creative deliverable in this phase and is the brand's first public impression.

The key strategic decision delegated to Claude's discretion is plan tier: **Basic ($39/mo) is the correct choice** for this phase. Transaction fees are higher on Basic (2.9% vs 2.7%) but at zero sales volume the difference is zero dollars. The $66/mo saving over Shopify plan is pure cash preserved for launch. Plan can be upgraded when volume justifies it.

**Primary recommendation:** Select Basic plan, activate Shopify Payments immediately (required to unlock Apple Pay, Shop Pay, and zero third-party fees), purchase domain through Shopify for zero-config DNS, then build the password page in `password.liquid` with inline CSS/JS — no page-builder app needed.

---

## Standard Stack

### Core (Shopify Native — No Apps Required)

| Tool | Version | Purpose | Why Standard |
|------|---------|---------|--------------|
| Shopify Basic plan | Current ($39/mo) | Store hosting, checkout, admin | Lowest cost entry; all FOUND requirements satisfied |
| Shopify Payments | Built-in | Visa, Mastercard, Shop Pay, Apple Pay | Required to unlock accelerated wallets; no third-party fees |
| Shopify Domain | ~$14/yr | Domain registration + auto-DNS | Zero-config: one click to connect, SSL auto-provisions |
| password.liquid | Shopify Liquid | Coming-soon page template | Native to all themes; full HTML/CSS/JS control |
| Shopify Customer accounts (built-in) | — | Guest checkout control | Settings toggle, no app needed |

### Supporting (If Needed)

| Tool | Purpose | When to Use |
|------|---------|-------------|
| Klaviyo (free tier) | Email capture list on password page | If Shopify's native newsletter form is insufficient for "15% off" incentive delivery |
| Essential Countdown Timer (app) | Password page countdown | Only if custom Liquid countdown proves too complex to maintain with TBD date |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Shopify domain | Namecheap (~$8-12/yr) | Namecheap is cheaper but requires manual DNS setup (A record + CNAME); Shopify domain auto-connects. For Phase 1 speed, Shopify domain wins. |
| Basic plan | Shopify plan ($105/mo) | Shopify plan gives 5 staff accounts, 1% lower transaction fee. Unnecessary at $0 sales volume. |
| password.liquid (Liquid code) | Coming Soon app ($5-10/mo) | App is easier but adds monthly cost and dependency. Liquid gives full brand control at zero cost. |
| Shopify native email capture | Klaviyo embed | Native form captures to Shopify customer list. Klaviyo embed is better for segmentation. Phase 1 can use native; Klaviyo integration is Phase 5 scope. |

**No npm packages. No installations. This phase is entirely Shopify admin + Liquid template editing.**

---

## Architecture Patterns

### Recommended Setup Sequence

The order of operations is constrained by dependencies:

```
1. Create Shopify account (free trial)
2. Subscribe to Basic plan ($1/mo promo, then $39/mo)
   └── Required BEFORE: Shopify Payments, domain purchase, custom checkout
3. Activate Shopify Payments
   └── Required BEFORE: Apple Pay, Shop Pay, wallet testing
4. Purchase domain (Shopify registrar recommended)
   └── Auto-connects DNS: A record + CNAME set automatically
5. Wait for SSL provisioning (15 min – 48 hours)
   └── Required BEFORE: HTTPS success criterion can be verified
6. Enable guest checkout
   └── Settings > Checkout > Customer accounts > "Accounts are optional"
7. Enable password protection (Online Store > Preferences)
8. Customize password.liquid coming-soon page
9. Run test payment to verify FOUND-01
10. Verify HTTPS loads with no cert warnings (FOUND-04)
```

### Pattern: password.liquid Custom Coming-Soon Page

**What:** Shopify's `{% layout none %}` template that renders instead of the store when password protection is enabled. Full HTML/CSS/JS allowed inline. No external stylesheets load (assets aren't accessible on password page).

**When to use:** Always — this is the only mechanism for a pre-launch page on Shopify's native infrastructure.

**Key structure from official Shopify dev docs:**

```liquid
{% layout none %}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{ shop.name }} — Coming Soon</title>
  <style>
    /* ALL CSS must be inline — external theme assets do not load */
    /* Cream & beige palette: #F5F0E8 (cream), #D4C5A9 (beige), #2C2C2C (text) */
  </style>
</head>
<body>

  <!-- Hero: lifestyle mood image, brand name, tagline -->
  <!-- Countdown timer: JS-based, target date hardcoded or from metafield -->
  <!-- Email capture with 15% off incentive -->
  <!-- Brand story snippet -->

  {% form 'customer' %}
    {{ form.errors | default_errors }}
    <input type="hidden" name="contact[tags]" value="prospect, coming-soon">
    <input type="email" name="contact[email]" placeholder="Your email">
    <button type="submit">Get Early Access + 15% Off</button>
  {% endform %}

  <!-- Password unlock form (hidden or subtle — this IS the password gate) -->
  {% form 'storefront_password' %}
    {{ form.errors | default_errors }}
    <input type="password" name="password" placeholder="Enter password">
    <button type="submit">Enter</button>
  {% endform %}

  <script>
    // Countdown timer — pure JS, no library needed
    // Target date: set when launch date is decided
    const launchDate = new Date('2026-XX-XX').getTime();
    function updateCountdown() {
      const now = new Date().getTime();
      const gap = launchDate - now;
      document.getElementById('days').innerText = Math.floor(gap / (1000 * 60 * 60 * 24));
      document.getElementById('hours').innerText = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      document.getElementById('mins').innerText = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      document.getElementById('secs').innerText = Math.floor((gap % (1000 * 60)) / 1000);
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
  </script>

</body>
</html>
```

Source: [Shopify Dev — Password template](https://shopify.dev/docs/storefronts/themes/architecture/templates/password) and [Shopify Partners blog](https://www.shopify.com/partners/blog/customize-shopify-password-pages-with-the-password-liquid-template)

### Pattern: Shopify Payments Activation

**What:** Activating Shopify Payments replaces third-party processors, enables wallet payments (Apple Pay, Shop Pay), and removes Shopify's third-party transaction fee.

**Steps:**
1. Settings > Payments
2. Complete Shopify Payments setup (requires: legal name, SSN or EIN, US bank account, DOB, US address)
3. In Wallets section: enable Apple Pay, Shop Pay — these activate automatically once Shopify Payments is live
4. Visa and Mastercard are included by default; no configuration needed

**Identity verification:** Shopify collects personal/business information for financial crime compliance. Have SSN (or EIN), US bank account routing/account numbers, and government ID ready before starting.

### Pattern: DNS Configuration (External Registrar Path)

If domain is purchased externally (Namecheap etc.), configure at the registrar:

```
A Record:     @ (root)     →  23.227.38.65
CNAME Record: www          →  shops.myshopify.com
```

Then in Shopify Admin > Settings > Domains > Connect existing domain — enter the domain and Shopify will verify and begin SSL provisioning.

**Avoid:** Cloudflare proxy (orange cloud) — use DNS-only mode (grey cloud) with Cloudflare. Cloudflare proxy can block Shopify's SSL provisioning.

**Avoid:** DNSSEC — disable it at the registrar. Shopify does not support DNSSEC and it will prevent SSL certificate issuance.

### Anti-Patterns to Avoid

- **Skipping plan selection before Payments:** Shopify Payments cannot be configured on the free trial. Must subscribe to a paid plan first.
- **Using Cloudflare proxy with custom domain:** Cloudflare's proxy (orange cloud) conflicts with Shopify's TLS provisioning. Must be set to DNS-only.
- **DNSSEC enabled:** Prevents SSL certificate issuance. Disable at registrar before connecting domain to Shopify.
- **External stylesheets in password.liquid:** Theme CSS files do not load on the password page because it uses `{% layout none %}`. All styles must be inline.
- **Testing Apple Pay on wrong device/browser:** Apple Pay only displays on Safari on Apple devices. Testing requires Safari + iOS or macOS device.
- **Building password page on development store:** Custom password pages cannot display on Shopify development stores — Shopify shows its own page instead. The store must be on a paid plan to see the custom password page.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Payment processing | Custom payment gateway | Shopify Payments | Handles PCI compliance, fraud detection, chargebacks, 3DS authentication |
| SSL certificates | Manual cert provisioning | Shopify auto-provision | Shopify manages cert renewal automatically |
| Email capture list storage | Custom database | Shopify customer records (native form) or Klaviyo | Data is already in the Shopify ecosystem for future marketing |
| Countdown timer library | Import moment.js or similar | Vanilla JS `setInterval` | No external dependencies load on password page; pure JS is sufficient for days/hours/mins/secs display |

**Key insight:** This entire phase is configuration, not code. The only code written is the password page HTML/CSS/JS, and even that uses only Shopify Liquid + vanilla JS — no build tooling, no npm, no frameworks.

---

## Common Pitfalls

### Pitfall 1: Shopify Payments Requires Paid Plan First
**What goes wrong:** Merchant tries to set up Shopify Payments during the 3-day free trial and the option is greyed out or unavailable.
**Why it happens:** Shopify Payments is only available on paid plans. The free trial has checkout disabled entirely.
**How to avoid:** Subscribe to Basic plan first (use the $1/mo for 3 months promo), then immediately activate Shopify Payments.
**Warning signs:** "Payments" section in admin shows limited options or is missing the Shopify Payments setup button.

### Pitfall 2: SSL Pending More Than 48 Hours
**What goes wrong:** Domain shows "SSL pending" in Shopify admin for more than 2 days after connecting.
**Why it happens:** Most often caused by (1) DNSSEC enabled at registrar, (2) Cloudflare proxy enabled, (3) conflicting/duplicate A records, or (4) CAA records that don't include Shopify's CA.
**How to avoid:** Verify DNS has exactly one A record pointing to 23.227.38.65, CNAME points to shops.myshopify.com, DNSSEC is disabled, no proxy layer.
**Warning signs:** SSL status shows "pending" after 4+ hours post DNS propagation.

### Pitfall 3: Guest Checkout Default is Off
**What goes wrong:** Customers cannot complete checkout without creating an account. This is FOUND-03 and a known conversion killer (24% of cart abandonment).
**Why it happens:** Shopify's default setting is "Accounts are optional" on new stores, but some plan or store configurations default to "Accounts are required."
**How to avoid:** Explicitly verify Settings > Checkout > Customer accounts shows "Accounts are optional" (not "Accounts are required"). Must be checked — don't assume default.
**Warning signs:** Test checkout flow prompts account creation before allowing payment.

### Pitfall 4: Apple Pay Not Showing in Test
**What goes wrong:** Tester cannot see Apple Pay button during checkout verification.
**Why it happens:** Apple Pay only renders in Safari on Apple devices (iPhone, iPad, Mac). It does not appear in Chrome, Firefox, or on Windows/Android.
**How to avoid:** Use Safari on an Apple device for Apple Pay verification. Use Chrome or a separate browser for Visa/Mastercard testing.
**Warning signs:** Wallet section appears empty during test checkout on non-Apple device.

### Pitfall 5: Password Page Invisible on Development Store
**What goes wrong:** Custom password.liquid changes have no visible effect — Shopify shows a generic password page.
**Why it happens:** Development stores always show Shopify's default password screen; custom templates only render on paid-plan stores.
**How to avoid:** The store must be on a paid plan for the custom password page to render. After subscribing, enable password protection at Online Store > Preferences > Password protect this store.
**Warning signs:** Page looks like Shopify's stock template regardless of edits.

### Pitfall 6: Countdown Timer Launch Date is Hardcoded
**What goes wrong:** Launch date changes and the countdown shows incorrect or negative time.
**Why it happens:** Countdown timer JS has a hardcoded date string.
**How to avoid:** Either (a) use a Shopify metafield to store the launch date so it can be changed in admin without code edits, or (b) document where the date string lives in the template and plan to update it when the launch date is confirmed.
**Warning signs:** Launch date decided but no one knows where to update it.

---

## Code Examples

Verified patterns from official Shopify documentation:

### Email Capture Form (Native Shopify — No App Required)
```liquid
{% comment %}
  Source: https://shopify.dev/docs/storefronts/themes/architecture/templates/password
  Tags "prospect, coming-soon" allow segmentation in Shopify customer admin
{% endcomment %}
{% form 'customer' %}
  {{ form.errors | default_errors }}
  {% if form.posted_successfully? %}
    <p>Thanks! You'll be first to know when we launch.</p>
  {% else %}
    <input type="hidden" name="contact[tags]" value="prospect, coming-soon">
    <input type="email" name="contact[email]"
           placeholder="Enter your email" required>
    <button type="submit">Get 15% Off at Launch</button>
  {% endif %}
{% endform %}
```

### Password Gate Form
```liquid
{% comment %}
  Source: https://shopify.dev/docs/storefronts/themes/architecture/templates/password
{% endcomment %}
{% form 'storefront_password' %}
  {{ form.errors | default_errors }}
  <input type="password" name="password" placeholder="Password">
  <button type="submit">Enter Store</button>
{% endform %}
```

### Vanilla JS Countdown Timer (No Dependencies)
```javascript
// No external libraries — everything must be inline on password.liquid
// Update this date when launch date is confirmed
const LAUNCH_DATE = new Date('2026-06-01T00:00:00').getTime();

function tick() {
  const now = Date.now();
  const remaining = Math.max(0, LAUNCH_DATE - now);

  const days  = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((remaining % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent  = String(days).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-mins').textContent  = String(mins).padStart(2, '0');
  document.getElementById('cd-secs').textContent  = String(secs).padStart(2, '0');
}

setInterval(tick, 1000);
tick();
```

### DNS Records for External Domain
```
# At your registrar (e.g., Namecheap):
Type    Host    Value                   TTL
A       @       23.227.38.65            Auto
CNAME   www     shops.myshopify.com     Auto

# After saving: wait 15 min – 48 hours for SSL to provision in Shopify admin
# Check: Settings > Domains > [your domain] — SSL status should show green checkmark
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| 14-day free trial | 3-day free trial + 3 months at $1/mo | 2023 | Less free time to build, but extended $1/mo period gives ~90 days of cheap validation |
| password.liquid (Liquid file) | password.json (JSON template) | Online Store 2.0 | Modern themes use JSON templates with sections; older themes use .liquid file directly. Both work — check theme architecture before editing |
| Manual SSL certificate management | Automatic TLS provisioning by Shopify | ~2016, improved since | No action needed; just wait after DNS propagation |
| Required customer accounts (default) | "Accounts are optional" (current default) | Shopify changed defaults | Still must verify — some stores may have non-default setting |

**Deprecated/outdated:**
- Google Domains: Acquired by Squarespace in 2023. Existing Google Domains customers migrated to Squarespace Domains. Do not recommend for new purchases.
- Shopify's old Basic Shopify / Shopify / Advanced Shopify naming: Rebranded to Basic / Grow / Advanced but functionality is equivalent. Community docs may use old names — they mean the same tiers.

---

## Plan-Level Recommendations (for Planner)

These directly map to the three pre-identified plans:

### Plan 01-01: Shopify Account + Plan + Payments
**Steps:** Create account → free trial → subscribe Basic ($1/mo promo) → activate Shopify Payments (have SSN, bank account, DOB ready) → verify Apple Pay, Shop Pay, Visa, Mastercard appear in test checkout
**Time estimate:** 30–60 minutes (identity verification can add delay if Shopify flags for manual review)
**Critical dependency:** Must be on paid plan before ANY other configuration is meaningful

### Plan 01-02: Custom Domain + DNS + HTTPS
**Steps:** Check faunaluxe.com availability → purchase through Shopify admin (recommended) OR external registrar + manual DNS → wait for SSL → verify HTTPS with no cert warnings
**Time estimate:** 15 minutes active + up to 48 hours passive (DNS/SSL propagation)
**Critical dependency:** Paid plan must be active (plan 01-01 must be complete)
**Recommendation:** Buy through Shopify admin for zero-configuration DNS. The $2-3/yr premium over Namecheap is not worth the manual DNS setup risk at this stage.

### Plan 01-03: Guest Checkout + Coming-Soon Password Page
**Steps:** Settings > Checkout → verify "Accounts are optional" → Online Store > Preferences → enable password → edit password.liquid → build cream & beige coming-soon page with countdown, email capture, brand copy
**Time estimate:** 1–3 hours (creative + Liquid implementation)
**Critical dependency:** Paid plan must be active; password page only renders on paid-plan stores
**Countdown timer note:** Launch date is TBD. Implement with a clearly documented date constant that the user can update when launch date is decided. Do not block the page build on this decision.

---

## Open Questions

1. **Is faunaluxe.com available?**
   - What we know: Domain has not been checked; the project documents reference it as an example (e.g. faunaluxe.com)
   - What's unclear: Whether faunaluxe.com is already registered; whether the user has an alternate if taken
   - Recommendation: Plan 01-02 should start with a live availability check in Shopify's domain search. If .com is taken, evaluate fauna-luxe.com, faunaluxe.shop, or faunaluxe.co. User should decide before the plan executes.

2. **Countdown timer launch date**
   - What we know: User confirmed a countdown timer is required; launch date is TBD
   - What's unclear: When the date will be decided; whether it should block page completion
   - Recommendation: Build the page with a placeholder date (e.g., 90 days from implementation). Document the JS constant location clearly. User can update it once the date is set without a full rebuild.

3. **Shopify Payments identity verification timeline**
   - What we know: Shopify collects SSN/EIN, bank account, DOB for US compliance; can add delay
   - What's unclear: Whether Shopify will auto-approve or flag for manual review
   - Recommendation: Plan 01-01 should note this as a potential blocker. If Shopify Payments approval takes more than 24 hours, the other plans can proceed in parallel (domain setup, guest checkout) but payment testing cannot be completed until approved.

4. **Email capture: native Shopify form vs Klaviyo embed**
   - What we know: Klaviyo integration is Phase 5 scope; native Shopify `{% form 'customer' %}` can capture emails to Shopify's customer list now
   - What's unclear: Whether the user wants pre-launch signups flowing directly into Klaviyo
   - Recommendation: Use native Shopify form in Phase 1 (zero dependencies). Tag subscribers with "coming-soon" for later segmentation. Klaviyo integration in Phase 5 can retroactively import this list. This avoids cross-phase dependencies.

---

## Sources

### Primary (HIGH confidence)
- [Shopify Dev — Password template](https://shopify.dev/docs/storefronts/themes/architecture/templates/password) — template structure, available Liquid objects, form tags
- [Shopify Partners Blog — password.liquid](https://www.shopify.com/partners/blog/customize-shopify-password-pages-with-the-password-liquid-template) — customization patterns, `{% layout none %}` behavior, CSS limitation
- [Shopify Help — Apple Pay activation](https://help.shopify.com/en/manual/payments/accelerated-checkouts/apple-pay) — Apple Pay requires Shopify Payments + SSL
- [Shopify Help — US Shopify Payments requirements](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/united-states/requirements) — SSN, bank account, DOB, US address required

### Secondary (MEDIUM confidence — WebSearch verified with multiple sources)
- Shopify pricing 2026: Basic $39/mo, Shopify plan $105/mo — consistent across multiple sources ([Shopify pricing page](https://www.shopify.com/pricing), [demandsage](https://www.demandsage.com/shopify-pricing/), [tooltester](https://www.tooltester.com/en/reviews/shopify/pricing/))
- DNS records for external domain: A record 23.227.38.65, CNAME shops.myshopify.com — [firstpier.com](https://www.firstpier.com/resources/dns-settings-shopify), consistent with Shopify Help Center references
- SSL provisioning time: 15 min – 48 hours — multiple sources consistent ([pagefly](https://pagefly.io/blogs/shopify/shopify-ssl), [keepshoppers](https://keepshoppers.com/blog/how-to-fix-ssl-pending-and-how-long-will-it-take))
- Guest checkout: Settings > Checkout > "Accounts are optional" — [community.shopify.com](https://community.shopify.com/t/how-can-i-enable-guest-checkout-in-my-online-store/190933), [qikify guide](https://qikify.com/blogs/all-articles/shopify-guest-checkout)
- Shopify domain pricing ~$14/yr vs Namecheap ~$8-12/yr — [davidutke.com analysis](https://davidutke.com/domain-name-shopify/), [buycompanyname.com comparison](https://www.buycompanyname.com/domain-shopify-godaddy/)
- Free trial: 3 days free + 3 months at $1/mo — [Shopify pricing page](https://www.shopify.com/pricing), consistent across multiple 2026 sources
- Klaviyo embed on password page: embed div code in password template — [Klaviyo community](https://community.klaviyo.com/marketing-30/how-to-shopify-embed-form-on-password-page-7213)

### Tertiary (LOW confidence — single source or unverified)
- DNSSEC blocks Shopify SSL: mentioned in multiple community posts but Shopify Help Center 403'd during fetch — flagged as requiring validation if SSL pending exceeds 48 hours
- Cloudflare proxy (orange cloud) blocking SSL: multiple community reports, could not verify against official Shopify docs directly due to 403 responses

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — Shopify's own admin features, no third-party tooling required
- Architecture: HIGH — official Shopify dev docs confirmed template structure and form tags
- Pitfalls: MEDIUM — most verified through multiple community sources and official Help Center references; two items (DNSSEC, Cloudflare) are MEDIUM due to 403 blocks on official doc pages
- DNS records: HIGH — specific IP (23.227.38.65) and CNAME (shops.myshopify.com) consistent across multiple authoritative sources

**Research date:** 2026-02-25
**Valid until:** 2026-05-25 (stable platform — Shopify changes pricing/features infrequently; DNS records very stable)
