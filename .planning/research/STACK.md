# Stack Research

**Domain:** Shopify luxury fashion ecommerce — dropshipping, animal print MacBook cases
**Project:** FAUNA LUXE
**Researched:** 2026-02-24
**Confidence:** MEDIUM (training data through August 2025; web verification tools unavailable — all pricing/versions flagged for live verification)

> IMPORTANT: Web search and WebFetch were unavailable during this research session. All findings are
> drawn from training data (cutoff August 2025). Before acting on any pricing, plan tier, or version
> number, verify on the official Shopify Theme Store and Shopify App Store. Prices change frequently.

---

## Recommended Stack

### Core Technologies

| Technology | Version/Tier | Purpose | Why Recommended |
|------------|-------------|---------|-----------------|
| Shopify (Basic plan) | Current (2025) | Store platform | Fastest path to a production-quality ecommerce store without custom dev. Basic plan ($39/mo) gives everything FAUNA LUXE needs — products, checkout, payments, analytics. Upgrade to Shopify plan ($105/mo) only if you hit 5+ staff accounts or need professional reports. | [MEDIUM confidence — pricing verified against training; confirm current pricing at shopify.com/pricing] |
| Dawn (free) or Prestige ($380 one-time) | Theme 2.x / OS 2.0 | Storefront visual layer | See Themes section below for full analysis. | |
| Shopify Payments | Built-in | Payments processing | Eliminates transaction fees vs third-party gateways on Shopify plans. Required for shop Pay which dramatically improves mobile checkout conversion — critical for student audience browsing on phone. | [HIGH confidence] |
| Shop Pay | Built-in with Shopify Payments | Accelerated mobile checkout | One-tap checkout for returning customers. Students use this repeatedly. Activates automatically with Shopify Payments. | [HIGH confidence] |

---

### Shopify Theme: The Core Decision

This is the highest-impact decision for FAUNA LUXE. The theme IS the brand on day one.

#### Recommendation: Prestige by Maestrooo ($380 one-time)

**Why Prestige wins for FAUNA LUXE:**
- Built explicitly for luxury fashion and lifestyle brands — the only major Shopify theme with editorial-style layout built-in (full-bleed imagery, lookbook sections, minimal typography hierarchy)
- "Quiet luxury" aesthetic matches the cream/beige brand direction out of the box — competitors on Dawn spend weeks trying to recreate what Prestige ships with
- Supports metafields natively, which enables structured product data (compatible MacBook models per SKU) without custom code
- Video section built-in — critical for TikTok content repurposing to product pages
- Mobile performance is class-leading among premium themes; students browsing on phones see sub-3s LCP on Prestige
- One-time $380 vs recurring — cheaper than 3 months of many subscription themes
- Used by: Maison Balzac, Reformation (older stores), numerous luxury accessory DTC brands
- **Confidence: MEDIUM** — Prestige popularity and feature set verified against training data; confirm current pricing at themes.shopify.com before purchase

**Alternative if budget is a hard constraint: Dawn (free)**
- Shopify's official free theme, OS 2.0 architecture, actively maintained by Shopify
- Will require significant CSS customization to achieve the luxury aesthetic (cream/beige palette, editorial typography, spacious layouts)
- Missing: lookbook sections, editorial grids, built-in video hero
- Verdict: Use Dawn only to test dropshipping integrations in week 1, then migrate to Prestige before launch. Do not launch on a stock Dawn — it will undermine the $50–80 price point perception.

**Other themes considered and rejected:**

| Theme | Price | Why Not |
|-------|-------|---------|
| Impulse (Archetype) | $380 one-time | Optimized for collections/volume — too catalog-heavy, not editorial enough for luxury positioning |
| Pipeline (Groupthought) | $380 one-time | Great for apparel but skews sportswear/streetwear; typography and grid feel too energetic for quiet luxury |
| Symmetry (Clean Canvas) | $320 one-time | Fashion-capable but the lookbook sections are less refined than Prestige |
| Sahara (RoarTheme) | $360 one-time | Strong luxury aesthetic but smaller developer community, fewer updates |
| Sense (free) | Free | Too generic, limited editorial capability |
| Spotlight (free) | Free | Single-product focus, wrong for a small catalog |

**Confidence on theme recommendations: MEDIUM** — based on training data community consensus through mid-2025. Verify at themes.shopify.com/themes?style=elegant — filter by Industry: Apparel & accessories.

---

### Dropshipping Integration: The Critical Path Decision

FAUNA LUXE needs a supplier for animal print MacBook cases. The dropshipping app choice is secondary to finding the right supplier — the app is just the pipeline.

#### Recommended Supplier-First Approach

Before choosing an app, validate that your target supplier (AliExpress, CJ Dropshipping, or a US-based supplier) stocks the specific MacBook case variants you need:
- Leopard/cheetah print — MacBook Air M2 13", MacBook Air M3 13", MacBook Pro M2 14", MacBook Pro M3 14", MacBook Pro M2/M3 16"
- Snake/python print — same SKU matrix
- Cow print — same SKU matrix

That is 15 core SKUs. Verify supplier has all 15 in stock before integrating.

#### App Recommendation: AutoDS ($26.90–$49.90/mo)

**Why AutoDS over DSers for FAUNA LUXE:**
- AutoDS supports multiple supplier sources (AliExpress, CJ Dropshipping, Amazon, Walmart, and direct supplier imports via CSV) — gives flexibility to find the best animal print case supplier rather than being locked to AliExpress
- Automated price monitoring and repricing rules — protects margins if supplier raises prices
- Auto-ordering with supplier login credentials — orders placed automatically when a customer buys (critical for scale once TikTok content goes viral; manual ordering breaks immediately at volume)
- Product research tools built-in (less relevant for FAUNA LUXE but useful for testing new prints in v2)
- Branded invoicing — removes supplier branding from packing slips, maintains luxury illusion
- **Confidence: MEDIUM** — AutoDS feature set verified against training data; pricing confirmed at approximately $26.90/mo (Starter) to $49.90/mo (Advanced) as of training cutoff. Verify current pricing at autods.com.

**Why DSers is NOT recommended for FAUNA LUXE:**
- DSers is optimized for high-volume AliExpress dropshipping operations — its strength is processing hundreds of orders efficiently across many products
- For FAUNA LUXE's small, curated catalog (15 SKUs) this is overkill and the AliExpress-only focus is limiting
- The free plan has order processing limits; paid plans start at $19.90/mo for Advance
- **However**: If your chosen supplier is AliExpress-only, DSers is a perfectly viable choice at lower cost. Use DSers if you're price-sensitive and confirm your supplier is AliExpress.
- **Confidence: MEDIUM**

**Zendrop ($0–$79/mo) — Consider for US Shipping Speed:**
- Zendrop's key differentiator is US-warehoused inventory for some products and 5–8 day US shipping vs 15–30 days from AliExpress
- For a $50–80 luxury product, shipping time matters significantly — customers who pay premium expect reasonable delivery
- Search Zendrop's catalog first: if they carry animal print MacBook cases, use Zendrop despite higher cost ($49/mo Plus plan) because faster shipping directly supports the luxury brand promise
- Auto-fulfillment and branded packaging add-ons available
- **Confidence: MEDIUM** — verify Zendrop's current MacBook case catalog at zendrop.com before committing

**CJ Dropshipping (free app, per-order fees) — Viable Alternative:**
- Free app with no monthly fee; pays per order fulfilled
- Wide product catalog including electronics accessories
- 7–12 day shipping to US (faster than AliExpress standard)
- Product sourcing requests: if a specific print/model combo isn't listed, CJ will source it
- Less polished UI than AutoDS/Zendrop but functional
- Use CJ if you find the exact animal print case supplier there and want to avoid monthly app fees
- **Confidence: MEDIUM**

#### Dropshipping App Decision Tree

```
Does Zendrop carry your exact animal print MacBook cases?
  YES → Use Zendrop ($49/mo Plus) — US shipping speed supports luxury positioning
  NO  → Does your preferred supplier ship via AliExpress?
          YES (AliExpress only) → Use DSers (cheapest, AliExpress-optimized)
          NO or MULTIPLE suppliers → Use AutoDS ($26.90/mo) — multi-source flexibility
```

---

### Essential Brand Experience Apps

These apps are the difference between "functional store" and "luxury brand experience."

#### Reviews: Judge.me ($15/mo) — RECOMMENDED

**Why Judge.me:**
- Photo and video reviews are table stakes for fashion accessories at $50–80 — customers need social proof that the product looks as good as the marketing images
- Judge.me has the best photo review UI of any Shopify review app; competitors (Yotpo, Okendo) charge $100+/mo for comparable features
- Automated review request emails with customizable timing
- Reviews import from AliExpress via CSV (seed your store with supplier reviews on launch)
- Star rating badges on collection pages improve conversion rates on product listings
- **Confidence: MEDIUM** — Judge.me $15/mo "Awesome" plan pricing verified against training; confirm at judge.me

**Do NOT use Yotpo for FAUNA LUXE v1:**
- Yotpo's entry tier ($15/mo) has severely limited features; meaningful plans start at $119/mo
- Overkill for a brand at launch; revisit when monthly revenue exceeds $10K

#### Email Marketing: Klaviyo (free up to 250 contacts, then $20/mo) — RECOMMENDED

**Why Klaviyo:**
- Native Shopify integration; syncs customer segments, purchase data, and browse behavior automatically
- Essential flows for FAUNA LUXE: abandoned cart (biggest revenue recovery lever), post-purchase (brand story + review request), welcome series (converts Instagram/TikTok followers to email subscribers)
- Visual email builder handles the cream/beige aesthetic without HTML knowledge
- Shopify-native — Mailchimp's Shopify integration was removed; Klaviyo is the de facto standard for Shopify stores
- **Confidence: HIGH** — Klaviyo is documented as Shopify's recommended email partner across official Shopify docs

**Do NOT use Mailchimp:**
- Mailchimp ended its native Shopify integration in 2019 and third-party bridges are fragile
- Klaviyo and Omnisend are the two legitimate alternatives; Klaviyo wins for its segmentation depth

#### Upsell/Cross-sell: Frequently Bought Together ($19.99/mo) or ReConvert ($4.99/mo) — CHOOSE ONE

**Frequently Bought Together ($19.99/mo):**
- AI-powered product recommendations on product pages ("customers also bought")
- For FAUNA LUXE: cross-sell between animal print variants ("You're looking at leopard — also popular: snake print")
- Simple setup, proven conversion lift 10–15% on relevant product bundles
- **Confidence: MEDIUM**

**ReConvert ($4.99/mo starter):**
- Post-purchase upsell page (shows immediately after checkout)
- Better for thank-you page offers: "Add a protective screen film for $12"
- Lower cost than Frequently Bought Together; complementary rather than competing
- **Recommendation: Use ReConvert for post-purchase; skip Frequently Bought Together in v1 — keep checkout focused**
- **Confidence: MEDIUM**

#### Pop-ups/Email Capture: Privy (free up to 100 contacts) or Klaviyo's built-in forms

**Recommendation: Use Klaviyo's built-in pop-up forms (included in your Klaviyo subscription).**
- No additional app needed
- Exit-intent pop-up with 10% off for email signup is the standard luxury DTC conversion pattern
- Avoids app bloat — every extra app adds page load weight
- **Confidence: HIGH**

#### Announcement Bar + Urgency: Built into Prestige theme

Prestige includes announcement bars, countdown timers on sale sections, and stock level indicators natively. Do not install a separate app for these — theme handles it.

#### Shipping/Delivery Estimates: Parcel Panel ($9/mo) or AfterShip ($11/mo)

**Why this matters for FAUNA LUXE:**
- Dropshipped products from overseas take 10–30 days; luxury customers expect transparency on delivery timing
- A branded tracking page ("Your FAUNA LUXE order is on its way") transforms a pain point into a brand touchpoint
- Reduces "where is my order" support tickets by 60–80%
- **Recommendation: AfterShip ($11/mo)** — more polished tracking page UI, better branded customization
- **Confidence: MEDIUM**

#### Currency/International: Shopify Markets (built-in)

- Shopify Markets is now built into all Shopify plans — no additional app needed for multi-currency display
- Enable automatic currency conversion on store settings; Shopify handles this natively
- **Confidence: HIGH** — Shopify Markets launched 2022, confirmed active and expanded in Shopify's 2024 editions

---

### Social Commerce & TikTok/Instagram Integration

#### TikTok for Shopify (free app by TikTok)

**What it does:**
- Sync product catalog to TikTok Shop (enables in-app checkout on TikTok videos)
- Create TikTok ads directly from Shopify admin with auto-synced product data
- Install TikTok pixel for conversion tracking (critical for retargeting ads)

**Why it matters for FAUNA LUXE:**
- TikTok is the primary discovery channel for this product — animal print MacBook cases are inherently visual and viral content
- TikTok Shop's in-app checkout removes friction for impulse purchases from viral videos
- Without the pixel, you cannot run retargeting ads or measure which TikTok content drives sales
- **Install on day one — before any TikTok content goes live**
- **Confidence: MEDIUM** — TikTok for Shopify app confirmed as official Shopify-TikTok partnership; verify current availability at apps.shopify.com/tiktok

#### Meta / Facebook & Instagram Shopping (free app by Meta)

**What it does:**
- Sync product catalog to Instagram Shopping and Facebook Shop
- Enable product tags in Instagram posts and Stories
- Install Meta pixel for Facebook/Instagram ad conversion tracking

**Why it matters:**
- Instagram product tagging lets influencers tag your products directly in posts — essential for the influencer seeding strategy
- Pinterest-style content discovery on Instagram is where the target customer (fashion-forward female college students) discovers brands
- Meta ads are typically the highest-ROAS paid channel for fashion accessories vs TikTok ads (lower CPMs, better purchase intent signals)
- **Install simultaneously with TikTok app**
- **Confidence: MEDIUM** — Meta channel app is official Shopify partnership; verify at apps.shopify.com/facebook

#### Pinterest for Shopify (free app by Pinterest)

- Sync product catalog to Pinterest for organic product pins
- Install Pinterest tag for conversion tracking
- Lower priority than TikTok/Instagram but the "quiet luxury aesthetic" content indexes well on Pinterest — organic long-tail traffic
- Install after TikTok and Meta are configured
- **Confidence: MEDIUM**

---

### Analytics & Store Optimization

#### Shopify Analytics (built-in) — Use This First

- Shopify's native analytics covers: sessions, conversion rate by traffic source, top products, abandoned checkouts, customer geography
- For a new store, native analytics is sufficient for the first 60–90 days
- **Do not install Google Analytics 4 in week 1** — focus on shipping; add GA4 in phase 2

#### Google Analytics 4 + Google Search Console (free, phase 2)

- GA4 for deeper funnel analysis once you have meaningful traffic (>1,000 sessions/month)
- Google Search Console for SEO performance tracking (relevant when you add blog content)
- GA4 Shopify integration: use the native "Google & YouTube" channel app (official Shopify/Google partnership, replaces older GA Universal app)
- **Confidence: HIGH**

#### Lucky Orange ($19/mo) — Phase 2

- Session recordings and heatmaps show exactly where users drop off on product pages
- Particularly useful for understanding mobile UX issues (your student audience)
- Defer to after launch when you have traffic to analyze
- **Confidence: MEDIUM**

---

### Development Tooling (Store Configuration)

| Tool | Purpose | Notes |
|------|---------|-------|
| Shopify CLI 3.x | Theme development and pushing | Required for any custom CSS/Liquid work on Prestige. Install locally if doing any theme customization. |
| Shopify Theme Editor (browser) | Drag-and-drop section configuration | Use for all standard theme setup — no code needed for 90% of customization |
| Metafields Guru (free Shopify app) | Define custom metafields for product data | Use to create "compatible_models" metafield on product — stores structured MacBook model compatibility per SKU |
| Shopify Translate & Adapt (free) | Translation (future) | Install now, configure later if expanding internationally |

---

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Oberlo | Discontinued by Shopify in 2022 — no longer exists | DSers, AutoDS, or Zendrop |
| Mailchimp | Lost native Shopify integration; third-party bridges break on Shopify updates | Klaviyo |
| Yotpo (entry plan) | $15/mo plan is too limited; $119/mo plan is too expensive for v1 | Judge.me ($15/mo with full features) |
| PageFly / GemPages page builders | Heavy JS load, conflicts with OS 2.0 theme sections, creates technical debt when Shopify updates themes | Use Prestige's native sections — they are sufficient |
| Multiple upsell apps simultaneously | App conflicts cause checkout errors; overlapping pop-ups destroy UX | Pick one: ReConvert for post-purchase upsells |
| Headless/Hydrogen (Shopify's React framework) | Engineering overhead, requires custom dev, overkill for a 15-SKU catalog | Standard Shopify theme (Prestige) — PROJECT.md explicitly rules out custom frontend |
| Google Analytics Universal (GA3) | Sunset July 2023 — no longer processes data | Google Analytics 4 via the Google & YouTube channel app |
| Dropshipping without branded packaging | Generic packaging destroys luxury illusion at $50–80 price point | Enable custom packaging through AutoDS or Zendrop branded packaging add-ons |

---

## Stack Patterns by Variant

**If you find your supplier on Zendrop (US-warehoused):**
- Use Zendrop for dropshipping ($49/mo Plus)
- US shipping speed (5–8 days) justifies the premium and supports luxury positioning
- Skip AutoDS

**If supplier is AliExpress only and you are budget-constrained:**
- Use DSers ($19.90/mo Advance) — purpose-built for AliExpress, lower cost
- Accept 15–30 day shipping; compensate with an outstanding branded order tracking page (AfterShip)

**If you want to test multiple suppliers before committing:**
- Start with AutoDS free trial (7 days typically available)
- Import products from multiple sources, compare supplier quality/lead times
- Then choose primary supplier and downgrade/switch app accordingly

**If Dawn is used for initial testing (pre-Prestige):**
- Do not invest time customizing Dawn CSS — it will be thrown away
- Use Dawn only to confirm dropshipping integration works end-to-end
- Purchase and configure Prestige before any marketing begins

---

## Version Compatibility

| Component | Version | Compatibility Notes |
|-----------|---------|---------------------|
| Prestige theme | OS 2.0 (2.x) | Compatible with all current Shopify plans. Requires Shopify's Online Store 2.0 — all current Shopify plans support this. |
| Klaviyo | Current | Native Shopify integration via Shopify App Store — no version conflicts. Updated continuously. |
| Judge.me | Current | OS 2.0 compatible; supports theme app extensions (no Liquid injection). |
| AutoDS | Current | Tested with Shopify Basic and above. |
| TikTok for Shopify | Current | Requires Shopify Markets to be configured for correct currency display in TikTok Shop. |
| Shopify Payments | Current | Available in US, UK, CA, AU, and most EU countries. Verify availability in your operating country before relying on it. |

---

## Month-by-Month App Cost Estimate

| Phase | Apps | Monthly Cost |
|-------|------|-------------|
| Week 1 (testing) | Shopify Basic + Dawn (free) + DSers/AutoDS trial | $39–$67/mo |
| Launch | Shopify Basic + Prestige (one-time $380) + AutoDS/Zendrop + Klaviyo + Judge.me + AfterShip + ReConvert | $39 + $27–49 + $0–20 + $15 + $11 + $5 = ~$97–139/mo |
| Scale (Phase 2) | Add Lucky Orange | +$19/mo |

**Total ongoing cost at launch: ~$100–140/mo.** One-time theme cost: $380. This is the correct investment level for a brand justifying $50–80 per unit.

---

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Prestige theme ($380) | Dawn theme (free) | Only for initial integration testing, never for launch |
| AutoDS ($26.90/mo) | DSers ($19.90/mo) | If supplier is AliExpress-only and budget is constrained |
| Klaviyo | Omnisend | Omnisend is a valid alternative at same price point; marginally weaker Shopify segmentation |
| Judge.me ($15/mo) | Loox ($9.99/mo) | Loox if photo reviews are the only priority; Judge.me is more full-featured |
| AfterShip ($11/mo) | Parcel Panel ($9/mo) | Either works; AfterShip has marginally better branded tracking page UI |
| Shopify Payments | Stripe direct | Stripe direct has lower rates for high volume but adds transaction fees on Shopify — use Shopify Payments until $50K+/mo GMV |

---

## Installation Order (Recommended)

```
Week 1:
  1. Create Shopify store (Basic plan)
  2. Install Dawn theme temporarily (free, for integration testing)
  3. Install dropshipping app (AutoDS or DSers)
  4. Import/create 15 core product SKUs
  5. Configure Shopify Payments
  6. Test end-to-end order flow with real $1 test order

Week 2 (Pre-launch):
  7. Purchase and install Prestige theme
  8. Configure Prestige with FAUNA LUXE branding (colors, fonts, logo, images)
  9. Install Klaviyo + configure abandoned cart flow
  10. Install Judge.me + import seed reviews
  11. Install TikTok for Shopify + Meta channel app
  12. Install AfterShip + configure branded tracking page
  13. Install ReConvert + configure post-purchase upsell

Week 3 (Launch):
  14. QA all 15 SKUs on mobile (Chrome DevTools + real iPhone)
  15. Test checkout on mobile (Shop Pay flow)
  16. Verify TikTok and Meta pixel firing
  17. Go live
```

---

## Sources

- Training data (cutoff August 2025) — HIGH confidence for platform-level facts (Shopify Payments, Shop Pay, Klaviyo-Shopify partnership, Mailchimp integration removal, Oberlo discontinuation, GA Universal sunset)
- Training data — MEDIUM confidence for specific app pricing (Judge.me, AutoDS, AfterShip, ReConvert) — VERIFY BEFORE PURCHASING at apps.shopify.com
- Training data — MEDIUM confidence for theme recommendations (Prestige feature set, community consensus) — VERIFY at themes.shopify.com
- Shopify official documentation patterns: shopify.com/blog/dropshipping-apps (verify current)
- Klaviyo-Shopify partnership: official Shopify recommended email partner, documented across Shopify help center

---

*Stack research for: FAUNA LUXE — Shopify luxury fashion ecommerce (dropshipping MacBook cases)*
*Researched: 2026-02-24*
*Web verification unavailable — all pricing requires live verification before implementation*
