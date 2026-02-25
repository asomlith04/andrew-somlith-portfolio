# Architecture Research

**Domain:** Shopify luxury fashion ecommerce — animal print MacBook cases (dropshipping)
**Researched:** 2026-02-24
**Confidence:** MEDIUM — External tools unavailable. Findings based on training knowledge of Shopify platform architecture (stable, well-documented domain). All claims marked with confidence level. Verify with official Shopify docs before implementation decisions.

---

## Standard Architecture

### System Overview

```
┌──────────────────────────────────────────────────────────────────────┐
│                        MARKETING LAYER                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│  │  TikTok Ads  │  │ Instagram /  │  │  Influencer  │               │
│  │  (paid)      │  │ Pinterest    │  │  Seedings    │               │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘               │
│         │                │                  │                        │
│         └────────────────┼──────────────────┘                        │
│                          ↓                                           │
│               UTM-tagged links to Shopify store                      │
└──────────────────────────┬───────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────────────┐
│                     SHOPIFY STOREFRONT (THEME)                       │
│                                                                      │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐     │
│  │ Homepage   │  │ Collection │  │  Product   │  │  About /   │     │
│  │ (brand     │  │ Page       │  │  Page      │  │  Story     │     │
│  │  story)    │  │ (catalog)  │  │  (PDP)     │  │  Page      │     │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘     │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐      │
│  │                    SHOPIFY THEME ENGINE                    │      │
│  │  Templates + Sections + Snippets + Assets + Config        │      │
│  └────────────────────────────────────────────────────────────┘      │
└──────────────────────────┬───────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────────────┐
│                        SHOPIFY CORE                                  │
│                                                                      │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐     │
│  │  Product   │  │  Cart /    │  │  Customer  │  │  Admin /   │     │
│  │  Catalog   │  │  Checkout  │  │  Accounts  │  │  Orders    │     │
│  │  (SKUs)    │  │            │  │            │  │            │     │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘     │
└──────────────────────────┬───────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────────────┐
│                      SHOPIFY APPS LAYER                              │
│                                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│  │  Dropship    │  │  Email /     │  │  Analytics   │               │
│  │  App         │  │  Klaviyo     │  │  / Pixels    │               │
│  │  (DSers /    │  │              │  │  (Meta, TT,  │               │
│  │  AutoDS)     │  │              │  │  GA4)        │               │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘               │
└─────────┼────────────────┼──────────────────┼───────────────────────┘
          ↓                ↓                  ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────────────────────┐
│  DROPSHIP    │  │  Email       │  │  Ad Platforms                │
│  SUPPLIER    │  │  Subscriber  │  │  (Meta Ads Manager,          │
│  (AliExpress │  │  List /      │  │   TikTok Ads Manager,        │
│  / branded   │  │  Flows       │  │   Pinterest Ads)             │
│  supplier)   │  │              │  │                              │
└──────────────┘  └──────────────┘  └──────────────────────────────┘
```

**Confidence: MEDIUM** — Shopify's layered architecture (theme → core → apps → external services) is a well-established, stable pattern. Specific app names may change; pattern is accurate.

---

### Component Responsibilities

| Component | Responsibility | Typical Implementation | Confidence |
|-----------|----------------|------------------------|------------|
| Shopify Theme | Storefront visual layer — all customer-facing pages | Dawn (free, official) or premium theme (Prestige, Impulse) | HIGH |
| Theme Templates | Page-type layouts (product, collection, homepage, page) | Liquid `.liquid` files in `/templates/` | HIGH |
| Theme Sections | Modular content blocks — editable in Shopify customizer | Liquid files in `/sections/` with schema JSON | HIGH |
| Theme Snippets | Reusable partials (product card, icon, badge) | Liquid files in `/snippets/` | HIGH |
| Shopify Product Catalog | SKU management, variants (print x model), pricing, inventory | Shopify admin — Products / Variants | HIGH |
| Shopify Checkout | PCI-compliant payment collection — cannot be custom-themed below Shopify Plus | Shopify-hosted, configured via theme settings | HIGH |
| Shopify Admin | Order management, fulfillment tracking, customer data | Web UI + Admin API | HIGH |
| Dropshipping App | Auto-routes orders to supplier; pushes tracking back to Shopify | DSers (AliExpress-native), AutoDS, or Zendrop | MEDIUM |
| Klaviyo | Email/SMS marketing — captures subscribers, sends automated flows | Shopify app install + pixel embed | MEDIUM |
| Meta Pixel | Conversion tracking for Facebook/Instagram ads | Shopify app "Facebook & Instagram" or manual pixel code in theme | MEDIUM |
| TikTok Pixel | Conversion tracking for TikTok ads | Shopify app "TikTok" or manual pixel in theme | MEDIUM |
| Google Analytics 4 | Traffic and conversion analytics | Shopify app or manual GA4 snippet | MEDIUM |

---

## Order Flow (Critical Path for Dropshipping)

This is the most important architecture concern for FAUNA LUXE — the end-to-end order flow must work before launch.

### Order Flow Diagram

```
CUSTOMER
    │
    ├─ Browses product pages (Shopify storefront)
    │
    ├─ Adds to cart → Shopify cart session
    │
    ├─ Proceeds to Shopify checkout (Shopify-hosted)
    │      │
    │      ├─ Payment processed by Shopify Payments / Stripe
    │      │
    │      └─ Order created in Shopify admin (status: UNFULFILLED)
    │
    │          ↓  [Trigger: new order webhook]
    │
    ├─ Dropshipping app detects new unfulfilled order
    │      │
    │      ├─ Maps Shopify product/variant → supplier SKU
    │      │
    │      └─ Submits order to supplier (AliExpress / branded supplier)
    │              │
    │              ├─ Supplier accepts order, charges dropshipper's account
    │              │
    │              └─ Supplier ships to customer address
    │
    ├─ Supplier provides tracking number
    │      │
    │      └─ Dropshipping app pushes tracking back to Shopify
    │              │
    │              └─ Shopify marks order FULFILLED, emails customer
    │
    └─ Customer receives package + post-purchase Klaviyo email flow

MARGIN:
    Revenue:  Customer pays $50–80 to FAUNA LUXE (via Shopify Payments)
    Cost:     FAUNA LUXE pays supplier ~$8–20 (via dropshipping app)
    Net:      Difference is gross margin (no fulfillment ops)
```

**Confidence: HIGH** — This is the canonical Shopify dropshipping order flow, unchanged for years. Specific supplier costs are MEDIUM confidence (market rate estimates only).

### Variant-to-SKU Mapping (Important Detail)

Each Shopify product variant (e.g., "Leopard Print / MacBook Air M2 13") must be mapped to the correct supplier SKU inside the dropshipping app. This mapping must be set up before orders can flow. Getting this wrong ships the wrong product.

```
Shopify Product: "Animal Print MacBook Case"
  └─ Variant: Leopard / MacBook Air M2 13"  →  maps to  →  Supplier SKU: XXXX-LEO-13A-M2
  └─ Variant: Leopard / MacBook Pro M3 14"  →  maps to  →  Supplier SKU: XXXX-LEO-14P-M3
  └─ Variant: Snake / MacBook Air M2 13"    →  maps to  →  Supplier SKU: XXXX-SNAKE-13A-M2
  ...
```

With 3 prints × 4 MacBook models = 12 variants minimum. Mapping all 12 before launch is a hard dependency.

---

## Shopify Theme Architecture (Internal)

Shopify themes use Liquid templating and follow a specific directory structure. This is the "code" layer of the store.

### Theme Directory Structure

```
theme/
├── assets/              # Static files: CSS, JS, images, fonts
│   ├── base.css         # Global styles
│   ├── application.js   # Bundled JS
│   └── *.svg / *.png    # Icons, decorative assets
│
├── config/
│   ├── settings_schema.json   # Theme customizer settings definition
│   └── settings_data.json     # Saved customizer settings (values)
│
├── layout/
│   └── theme.liquid     # Master HTML wrapper — head, header, footer, body
│
├── sections/            # Modular page sections (editable in customizer)
│   ├── header.liquid    # Site header
│   ├── footer.liquid    # Site footer
│   ├── hero-banner.liquid          # Homepage hero
│   ├── featured-collection.liquid  # Product grid on homepage
│   └── product-media-gallery.liquid # Product page images
│
├── snippets/            # Reusable Liquid partials
│   ├── product-card.liquid    # Product thumbnail card
│   ├── price.liquid           # Price display with sale logic
│   └── icon-arrow.liquid      # SVG icons
│
├── templates/           # Page-type templates
│   ├── index.json               # Homepage
│   ├── collection.json          # Collection/category page
│   ├── product.json             # Product detail page
│   ├── page.json                # Generic CMS pages (About, Story)
│   ├── cart.json                # Cart page
│   └── customers/
│       └── account.liquid       # Customer account page
│
└── locales/
    └── en.default.json  # Translations/text strings
```

**Confidence: HIGH** — This is the official Shopify OS 2.0+ theme structure, introduced with Dawn theme and documented at shopify.dev.

### Customizer Architecture (No-Code Layer)

Shopify's theme customizer allows non-developers to edit content without touching code. This is how FAUNA LUXE will make day-to-day updates.

```
Shopify Admin → Online Store → Themes → Customize
    │
    ├─ Sections (sections/*.liquid)
    │   Each section has a {% schema %} block defining editable fields
    │   ├─ Text fields (headlines, copy)
    │   ├─ Image pickers (hero photos, product lifestyle shots)
    │   ├─ Color pickers (brand colors: cream, beige, warm neutral)
    │   └─ Select menus (layout options)
    │
    └─ Global Settings (config/settings_schema.json)
        ├─ Typography (font family, sizes)
        ├─ Colors (background, text, buttons, accents)
        └─ Social media URLs (TikTok, Instagram, Pinterest)
```

**Confidence: HIGH** — Shopify OS 2.0 customizer architecture is official and stable.

---

## Marketing Stack Architecture

### How TikTok/Instagram Connects to the Store

```
CONTENT CREATION
    │
    ├─ Short-form video (TikTok) / Reels (Instagram)
    │   └─ Organic: lifestyle content showing MacBook cases
    │       └─ Call to action: "Link in bio" → Linktree or direct Shopify URL
    │
    ├─ Paid ads (TikTok Ads Manager / Meta Ads Manager)
    │   └─ Creative uses lifestyle video/photos
    │   └─ Ad links directly to Shopify product or collection page
    │   └─ Pixel tracks: PageView → AddToCart → InitiateCheckout → Purchase
    │
    └─ Influencer seeding
        └─ Ship product to micro-influencer (fashion/tech niche)
        └─ Influencer posts with unique discount code or affiliate link
        └─ Code tracked in Shopify Discounts (or affiliate app)

PIXEL TRACKING LAYER
    │
    ├─ Meta Pixel → fires on Shopify pages → reports back to Meta Ads Manager
    ├─ TikTok Pixel → fires on Shopify pages → reports back to TikTok Ads Manager
    └─ Google Analytics 4 → fires on all pages → reports in GA4

DATA LAYER
    └─ Shopify "Customer Events" (Shopify's standardized tracking API)
        └─ Connects to Shopify's Pixels API (replaces manual pixel injection)
        └─ Single source: event fires once, distributed to Meta/TikTok/GA4
```

**Confidence: MEDIUM** — Shopify's Customer Events / Pixels API is the current recommended approach (introduced ~2023), replacing legacy pixel injection. Verify current state at shopify.dev/docs/api/pixels.

### Email Marketing Architecture (Klaviyo)

```
KLAVIYO INTEGRATION PATTERN

Shopify ←→ Klaviyo App (Shopify App Store install)
    │
    ├─ Data sync (real-time):
    │   ├─ Customer placed order → Klaviyo event
    │   ├─ Customer viewed product → Klaviyo event
    │   ├─ Customer abandoned checkout → Klaviyo event
    │   └─ Product catalog synced to Klaviyo (for dynamic emails)
    │
    └─ Subscriber collection:
        ├─ Klaviyo signup form embedded in Shopify theme (popup or inline)
        ├─ Shopify checkout email opt-in → syncs to Klaviyo list
        └─ Footer email capture in theme

KLAVIYO FLOWS (automated sequences)

1. WELCOME FLOW
   Trigger: New email subscriber
   Sequence: Welcome email (brand story) → 24h → 10% off code → 3d → social proof
   Priority: Set up before launch

2. ABANDONED CART FLOW
   Trigger: AddToCart + no purchase within 1h
   Sequence: "You left something beautiful behind" → 24h → urgency email → discount
   Priority: Critical — recovers lost revenue

3. POST-PURCHASE FLOW
   Trigger: Order placed
   Sequence: Order confirmation (Shopify sends) → 3d → Klaviyo: care tips + brand story
              → 14d → review request → 30d → restock/upsell suggestion
   Priority: High — builds repeat customers

4. WINBACK FLOW
   Trigger: No purchase in 90 days
   Sequence: "We miss you" → discount offer
   Priority: Low for launch (needs customer base first)
```

**Confidence: MEDIUM** — Klaviyo's Shopify integration pattern (app install + webhook-based event sync) is well-documented and stable. Specific flow content is LOW confidence (best practice recommendation, not verified against current Klaviyo docs).

---

## Architectural Patterns

### Pattern 1: Section-First Theme Customization

**What:** Build all brand customization through Shopify's section/customizer system, not by modifying core theme files. Every editable element (headline, hero image, color) is exposed as a section schema field.

**When to use:** Always. This is the correct approach for any Shopify store not using headless commerce.

**Trade-offs:**
- Pro: Non-developers can update content without code changes
- Pro: Theme upgrades don't break content
- Con: Complex layouts may require custom section development
- Con: Some design flexibility is constrained by theme architecture

**Example:**
```liquid
{% comment %} sections/hero-banner.liquid {% endcomment %}
<section class="hero-banner">
  <img src="{{ section.settings.hero_image | img_url: '1920x' }}"
       alt="{{ section.settings.hero_headline }}">
  <h1>{{ section.settings.hero_headline }}</h1>
  <p>{{ section.settings.hero_subheadline }}</p>
  <a href="{{ section.settings.cta_url }}" class="btn-primary">
    {{ section.settings.cta_text }}
  </a>
</section>

{% schema %}
{
  "name": "Hero Banner",
  "settings": [
    { "type": "image_picker", "id": "hero_image", "label": "Hero Image" },
    { "type": "text", "id": "hero_headline", "label": "Headline", "default": "Wild. Refined." },
    { "type": "text", "id": "hero_subheadline", "label": "Subheadline" },
    { "type": "url", "id": "cta_url", "label": "CTA Link" },
    { "type": "text", "id": "cta_text", "label": "CTA Text", "default": "Shop Now" }
  ]
}
{% endschema %}
```

### Pattern 2: Metafields for Product Enrichment

**What:** Use Shopify metafields to store extended product data (care instructions, compatibility notes, material descriptions) that displays on product pages without hardcoding into templates.

**When to use:** When product pages need rich content beyond standard title/description/price fields.

**Trade-offs:**
- Pro: Data is structured and reusable
- Pro: Editable in Shopify admin without code changes
- Con: Requires setting up metafield definitions in admin
- Con: Adds complexity for simple stores

**Example use for FAUNA LUXE:**
```
Product metafields:
  - custom.compatible_models: "MacBook Air M2 13", "MacBook Air M3 13"
  - custom.material: "Premium polycarbonate with soft microfiber lining"
  - custom.care_instructions: "Wipe with dry cloth. Remove before cleaning MacBook."
```

### Pattern 3: App-Light Architecture

**What:** Minimize the number of installed Shopify apps. Each app adds JavaScript to storefront, slowing page load. Choose apps that do one thing well and use Shopify native features before reaching for apps.

**When to use:** Always. "App sprawl" is a common Shopify mistake.

**Trade-offs:**
- Pro: Faster storefront (Core Web Vitals matter for ads)
- Pro: Lower monthly app costs
- Con: Some features require accepting an app dependency
- Con: May need to implement things manually that apps handle automatically

**Target for FAUNA LUXE launch: Maximum 4–5 apps total**
1. Dropshipping app (DSers or AutoDS) — hard requirement
2. Klaviyo — email/SMS marketing
3. Meta/Facebook channel app — pixel + catalog sync
4. TikTok channel app — pixel + catalog sync
5. Reviews app (Judge.me or Loox) — optional at launch

---

## Data Flow

### Customer Purchase Flow (Full Detail)

```
1. Customer arrives (from TikTok/Instagram link or ad)
   ↓
2. Shopify logs session → GA4 fires "page_view"
   ↓
3. Customer browses collection → views product
   Meta Pixel fires "ViewContent"
   TikTok Pixel fires "ViewContent"
   Klaviyo tracks "Viewed Product"
   ↓
4. Customer clicks "Add to Cart"
   Shopify cart session created
   Meta Pixel fires "AddToCart"
   TikTok Pixel fires "AddToCart"
   Klaviyo tracks "Added to Cart"
   ↓
5. Customer initiates checkout
   Meta Pixel fires "InitiateCheckout"
   TikTok Pixel fires "InitiateCheckout"
   ↓
   [If they abandon here → Klaviyo abandoned cart flow triggers after 1h]
   ↓
6. Customer enters email + shipping → continues
   Klaviyo captures email (if Klaviyo checkout opt-in enabled)
   ↓
7. Customer submits payment
   Shopify Payments processes card → payment authorized
   ↓
8. Shopify creates Order (status: UNFULFILLED)
   Meta Pixel fires "Purchase" (conversion attributed)
   TikTok Pixel fires "Purchase" (conversion attributed)
   Klaviyo triggers "Placed Order" event
   ↓
9. Shopify sends customer: "Order Confirmed" email (Shopify native)
   Klaviyo post-purchase flow begins (3 days later)
   ↓
10. Dropshipping app detects new unfulfilled order
    Matches Shopify variant to supplier SKU
    Submits purchase order to supplier
    ↓
11. Supplier ships package to customer's address
    Provides tracking number
    ↓
12. Dropshipping app pushes tracking number to Shopify
    Shopify marks order FULFILLED
    Shopify sends customer: "Your order is on the way" email (with tracking)
    ↓
13. Customer receives package
    Klaviyo: review request email at day 14 post-purchase
```

### State Management

Shopify handles all persistent state (cart, orders, customers, inventory). There is no custom application state to manage — this is a Shopify-native store, not a custom app.

```
Shopify Core (single source of truth)
    ├─ Cart: session-based, Shopify-managed
    ├─ Orders: Shopify admin + Admin API
    ├─ Customer data: Shopify customer accounts
    ├─ Product catalog: Shopify products/variants
    └─ Inventory: Shopify tracks (supplier updates via dropship app)
```

---

## Build Order (Phase Dependencies)

The following is the recommended build sequence based on hard dependencies:

```
PHASE 1: Foundation (must be first — everything else depends on this)
    1a. Shopify account + plan selection
    1b. Domain connected (DNS)
    1c. Shopify Payments enabled (required before orders can process)

PHASE 2: Product Catalog (blocks dropshipping setup)
    2a. Create products in Shopify admin
    2b. Set up variants (print × MacBook model matrix)
    2c. Upload product photos
    2d. Set pricing ($50–80 per variant)
    → Dropshipping app needs products to exist before mapping SKUs

PHASE 3: Theme Configuration (can start in parallel with Phase 2)
    3a. Install premium theme (Prestige or similar)
    3b. Configure brand colors (cream, beige palette)
    3c. Set up typography (luxury serif/sans pairing)
    3d. Build homepage sections: hero, featured collection, brand story
    3e. Configure collection page layout
    3f. Polish product pages (gallery, description, trust badges)
    3g. Create About/Story page
    → Theme must be ready before launch, but doesn't block Phase 4

PHASE 4: Dropshipping Integration (blocks launch)
    4a. Install dropshipping app (DSers or AutoDS)
    4b. Connect to supplier (AliExpress account or private supplier)
    4c. Map all 12 variants (3 prints × 4 MacBook models) to supplier SKUs
    4d. Test order flow: place test order, verify supplier receives, verify tracking flows back
    → This is the critical path. Store cannot launch until test order succeeds.

PHASE 5: Marketing Infrastructure (before launch)
    5a. Install Klaviyo + connect to Shopify
    5b. Set up email capture popup (with discount incentive)
    5c. Configure Welcome Flow
    5d. Configure Abandoned Cart Flow
    5e. Install Meta channel app + verify pixel firing
    5f. Install TikTok channel app + verify pixel firing
    5g. Set up product catalog sync (for dynamic ads)

PHASE 6: Launch Readiness
    6a. Shopify store policies (Refund, Privacy, Terms) — required
    6b. Legal pages published
    6c. Full checkout test (real card, small amount)
    6d. Mobile QA across product/collection/checkout pages
    6e. Remove password page → store goes live

PHASE 7: Marketing Execution (post-launch)
    7a. TikTok organic content strategy
    7b. Instagram curation + link-in-bio setup
    7c. Influencer seeding (identify + contact 3–5 micro-influencers)
    7d. Paid ads — begin with small test budget ($10–20/day)
    7e. Post-purchase review request flow (Klaviyo)
```

**Confidence: MEDIUM** — Phase ordering follows hard technical dependencies. Specific timing is LOW confidence (store-dependent).

---

## Integration Points

### External Services

| Service | Integration Pattern | Notes | Confidence |
|---------|---------------------|-------|------------|
| Dropshipping supplier (AliExpress) | Via DSers/AutoDS app, OAuth connection to AliExpress account | App bridges Shopify ↔ AliExpress. Variants must be mapped manually. | MEDIUM |
| Klaviyo | Shopify app install; Klaviyo JS snippet embedded in theme; webhooks sync order events | Free tier covers ~500 contacts — sufficient for launch | MEDIUM |
| Meta (Facebook/Instagram) | "Facebook & Instagram" Shopify channel app; installs pixel; syncs product catalog for Dynamic Ads | Product catalog sync enables "catalog ads" showing exact products customer viewed | MEDIUM |
| TikTok | "TikTok" Shopify channel app; installs TikTok Pixel; syncs product catalog | Same pattern as Meta. TikTok Shopping also available (product tags in videos) | MEDIUM |
| Google Analytics 4 | Shopify app "Google & YouTube" or manual GA4 config snippet; uses Shopify Customer Events API | Shopify has native GA4 integration via Customer Events — prefer this over manual | MEDIUM |
| Shopify Payments | Built into Shopify — enable in admin → Financial → Payments | No third-party gateway needed; Stripe-powered under the hood; required for accelerated checkout (Shop Pay) | HIGH |
| Pinterest | Pinterest channel app or manual link; less urgent — organic traffic focus | Lower priority than TikTok/Meta for this demographic | LOW |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| Theme ↔ Shopify Core | Liquid template rendering (server-side); Storefront API (AJAX cart) | No custom backend needed — Shopify handles all commerce logic |
| Shopify Core ↔ Dropshipping App | Shopify Order webhook → app API → supplier; supplier tracking → app → Shopify Admin API | Must be configured and tested pre-launch |
| Shopify Core ↔ Klaviyo | Klaviyo app listens to Shopify webhooks (order created, abandoned checkout); syncs product catalog | Bi-directional: events go to Klaviyo, email unsubscribes sync back |
| Shopify Core ↔ Ad Pixels | JavaScript pixels embedded in theme fire Shopify Customer Events → platform pixel events | Shopify Customer Events API is the recommended bridge (not manual pixel code) |
| Admin ↔ Owner | Shopify Admin web UI + Shopify mobile app | Day-to-day order management, inventory check, customer service |

---

## Anti-Patterns

### Anti-Pattern 1: Installing Too Many Apps

**What people do:** Install 10–15 apps (reviews, upsells, countdown timers, popups, trust badges, etc.) all at once, each adding JavaScript.

**Why it's wrong:** Each app adds 50–200KB of JavaScript. Cumulative script loading destroys Core Web Vitals scores (especially LCP and CLS). Slow stores convert worse. TikTok and Meta penalize slow landing pages in ad auction — you pay more per click.

**Do this instead:** Start with 4–5 essential apps. Add one at a time. Check PageSpeed Insights score after each app install. Remove apps that aren't generating measurable revenue.

### Anti-Pattern 2: Using Free Themes for a Luxury Brand

**What people do:** Use Dawn (Shopify's free default theme) because it's free, then try to CSS-hack it into a luxury aesthetic.

**Why it's wrong:** Dawn is optimized for general ecommerce, not luxury/fashion. Typography controls are limited, layout flexibility is constrained, and the default look signals "generic Shopify store" — the opposite of what FAUNA LUXE needs. Customers making a $60 purchase decision are making a brand judgment in 3 seconds.

**Do this instead:** Use a premium theme built for fashion/lifestyle stores. Prestige ($350 one-time) or Impulse ($350 one-time) are specifically designed for premium product positioning and have better layout flexibility, story-telling sections, and editorial design options. The one-time cost is worth it vs. hours of CSS overrides.

### Anti-Pattern 3: Skipping the Test Order Before Launch

**What people do:** Set up dropshipping app, map SKUs, assume it works, launch publicly.

**Why it's wrong:** The variant-to-SKU mapping is manual and error-prone. A misconfigured mapping ships wrong products to real customers. There is no automatic validation — the system will happily submit an order with wrong SKUs.

**Do this instead:** Place a real test order before launch (use Shopify's order testing tools or place a real $1 test order and immediately refund). Confirm the correct SKU arrives at the supplier dashboard, correct tracking number comes back to Shopify.

### Anti-Pattern 4: Launching Without a Returns Policy

**What people do:** Focus on getting the store looking good, forget legal pages (Returns, Privacy Policy, Terms of Service).

**Why it's wrong:** Shopify blocks checkout if required legal pages aren't assigned to the footer. Also, customers at $50–80 price point check return policies before buying. "No returns" needs to be clearly stated (dropshipping makes returns complex), or trust is lost.

**Do this instead:** Use Shopify's built-in policy generator to create Returns, Privacy, and Terms pages. Be specific about dropshipping timelines (10–20 day shipping from China) in the policy.

### Anti-Pattern 5: Treating Every MacBook Model as a Separate Product

**What people do:** Create 12 separate Shopify products (one per print/model combination) instead of using variants.

**Why it's wrong:** Destroys SEO (thin content on 12 pages), makes collection pages look like a confusing SKU catalog instead of a curated product, and makes inventory management 12x harder.

**Do this instead:** Create 1–3 products (one per print), each with MacBook model as a variant. Or create 1 product ("Animal Print MacBook Case") with both print and model as variant options. Use Shopify's variant system correctly.

---

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0–100 orders/month | Current architecture is fine. Monitor dropship supplier fill rates. Manual order review is manageable. |
| 100–1K orders/month | Add Shopify Flow (automation) for order tagging. Consider a second dropship supplier for redundancy. Klaviyo flows doing real work at this volume. |
| 1K–10K orders/month | Evaluate if AliExpress-based supplier can fulfill reliably at volume. May need a US-based 3PL or private label supplier. Shopify Plus worth evaluating at ~$2K/month. |
| 10K+ orders/month | Private label manufacturing likely makes more sense than dropshipping at this volume. |

### Scaling Priorities

1. **First bottleneck:** Supplier reliability — AliExpress suppliers can run out of stock, have quality inconsistency, or have slow shipping. First thing to fix is establishing a relationship with a reliable supplier with inventory depth.

2. **Second bottleneck:** Customer service — dropshipping complaints (slow shipping, wrong item, damaged) compound at volume. Need a process or hire before scaling ads.

---

## Sources

All findings are MEDIUM confidence based on training knowledge (knowledge cutoff: August 2025). External search tools were unavailable during this research session.

- Shopify theme architecture (OS 2.0+): https://shopify.dev/docs/storefronts/themes/architecture (verify current)
- Shopify Customer Events API: https://shopify.dev/docs/api/pixels (verify current)
- Shopify Payments: https://help.shopify.com/en/manual/payments/shopify-payments (verify current)
- Klaviyo Shopify integration: https://help.klaviyo.com/hc/en-us/categories/115000792832 (verify current)
- DSers (AliExpress dropshipping): https://www.dsers.com/blog/ (verify current)
- AutoDS: https://help.autods.com/ (verify current)
- Shopify App Store — Klaviyo, Meta, TikTok channels: https://apps.shopify.com/

**Note:** All URLs above are provided as recommended starting points for verification, not as confirmed-fetched sources. Research agent was unable to fetch live documentation in this session.

---

*Architecture research for: Shopify luxury fashion ecommerce (FAUNA LUXE — animal print MacBook cases, dropshipping)*
*Researched: 2026-02-24*
