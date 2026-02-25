# Roadmap: FAUNA LUXE

## Overview

FAUNA LUXE goes from zero to a live Shopify store selling luxury animal print MacBook cases at $50–80. The build follows a strict dependency chain: store foundation enables product catalog, catalog enables theme styling, styled store enables dropshipping testing, tested order pipeline enables marketing infrastructure, and marketing infrastructure enables the pre-launch gate. Nothing ships until every link in that chain is verified. The brand must feel genuinely premium from day one — no soft launches, no "we'll fix it later."

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Store Foundation** - Shopify account, payments, domain, and SSL live
- [ ] **Phase 2: Product Catalog** - 12+ SKUs with variant selectors, compatibility guide, and collection pages
- [ ] **Phase 3: Theme and Brand Buildout** - Prestige theme configured to full FAUNA LUXE luxury standard
- [ ] **Phase 4: Dropshipping Integration** - Supplier connected, SKUs mapped, test order completed
- [ ] **Phase 5: Marketing Infrastructure** - Klaviyo flows live, pixels firing, AfterShip tracking active
- [ ] **Phase 6: Pre-Launch Gate** - Social proof seeded, influencer codes ready, QA gate passed, store goes public
- [ ] **Phase 7: Marketing Execution** - TikTok/Instagram content live, influencer seedings initiated, paid ads running

## Phase Details

### Phase 1: Store Foundation
**Goal**: A configured Shopify store is live at a real domain with payments enabled — the infrastructure every other phase depends on
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04
**Success Criteria** (what must be TRUE):
  1. Shopify store loads at the custom domain over HTTPS with no certificate warnings
  2. A test payment can be placed using Visa, Mastercard, Shop Pay, and Apple Pay
  3. Guest checkout completes without requiring account creation
  4. Store is in password-protected mode (not yet public) with a branded coming-soon page
**Plans**: 3 plans

Plans:
- [ ] 01-01-PLAN.md — Shopify account creation, Basic plan subscription, and Shopify Payments activation (Visa, Mastercard, Shop Pay, Apple Pay)
- [ ] 01-02-PLAN.md — Custom domain purchase, DNS configuration, and HTTPS/SSL verification
- [ ] 01-03-PLAN.md — Guest checkout activation and FAUNA LUXE coming-soon password page build

### Phase 2: Product Catalog
**Goal**: All 12+ product variants exist in Shopify with correct naming, pricing, and collection structure — the data foundation that theme styling and dropshipping mapping both require
**Depends on**: Phase 1
**Requirements**: PROD-01, PROD-02, PROD-03, PROD-04, PROD-05, PROD-06
**Success Criteria** (what must be TRUE):
  1. Each product page shows a variant selector listing correct MacBook models (M2/M3 13-inch Air, M2/M3 13-inch Pro, M2/M3 14-inch Pro, M2/M3 16-inch Pro) with no compatibility errors
  2. "How to find your MacBook model" guide is accessible from every product page
  3. Three collection pages exist — Leopard, Snake, and Cow Print — each showing all compatible model variants
  4. Editorial product photography in cream and beige aesthetic is applied to each print's product and collection pages
  5. All product prices are set in the $50–80 range
**Plans**: TBD

Plans:
- [ ] 02-01: MacBook compatibility matrix — verify M-series chassis dimensions against Apple specs, build variant naming guide
- [ ] 02-02: Create all 12+ product variants in Shopify with correct SKU naming, pricing, and metafields
- [ ] 02-03: Build three print collection pages and link compatibility guide to all product pages
- [ ] 02-04: Source or produce editorial product photography and apply to all product and collection pages

### Phase 3: Theme and Brand Buildout
**Goal**: The store looks and feels like a $65 luxury fashion brand — Prestige theme configured to full FAUNA LUXE identity before any public traffic arrives
**Depends on**: Phase 2
**Requirements**: BRAND-01, BRAND-02, BRAND-03, BRAND-04, BRAND-05, BRAND-06, TRUST-01, SOCL-04
**Success Criteria** (what must be TRUE):
  1. Homepage communicates the FAUNA LUXE identity within 3 seconds on a mobile phone — cream and beige palette, luxury typography, editorial hero visible without scrolling
  2. A visitor can navigate from homepage to any product page in two taps on mobile and complete the look with editorial photography and a returns policy visible on the page
  3. About/brand story page exists and explains why FAUNA LUXE is a fashion accessory, not a $12 Amazon case
  4. FAQ page proactively discloses dropshipping shipping timelines; Shipping and Returns policy pages are published
  5. Branded order confirmation emails send in cream and beige aesthetic (not stock Shopify templates)
  6. Instagram feed is embedded on the homepage or lookbook page
**Plans**: TBD

Plans:
- [ ] 03-01: Purchase and install Prestige theme; configure cream/beige color palette, typography, and global brand settings
- [ ] 03-02: Build and style homepage — hero section, featured collection, brand story teaser, Instagram embed
- [ ] 03-03: Build About/brand story page and Collections/lookbook page with editorial grid
- [ ] 03-04: Build FAQ page, Shipping policy page, and Returns/refund policy page
- [ ] 03-05: Style product detail pages — editorial photography layout, variant selector, returns policy visible on PDP, FAQ accordion
- [ ] 03-06: Customize transactional emails (order confirmation, shipping notification) in cream/beige aesthetic
- [ ] 03-07: Mobile QA pass on real iPhone — verify all pages, checkout flow, and image loading

### Phase 4: Dropshipping Integration
**Goal**: A real test order has completed the full cycle from Shopify checkout to physical delivery — the hard gate that determines whether the store is launchable
**Depends on**: Phase 2 (variants must exist for SKU mapping)
**Requirements**: SHIP-01, SHIP-02, SHIP-03, SHIP-04
**Success Criteria** (what must be TRUE):
  1. Dropshipping app is installed, supplier is connected, and all 12+ Shopify variants are mapped to verified supplier SKUs with no gaps
  2. A real test order placed on the store routes automatically through the dropshipping app to the supplier and generates a tracking number returned to Shopify
  3. The physical case arrives at a real delivery address, fits the correct MacBook model chassis, and packaging shows no supplier branding or AliExpress materials
  4. Actual end-to-end delivery time is logged and used to set honest shipping estimates on product pages and at checkout
**Plans**: TBD

Plans:
- [ ] 04-01: Supplier research and selection — verify animal print MacBook cases exist across all 12+ variants on Zendrop, CJ Dropshipping, or AliExpress; choose app (AutoDS vs. Zendrop vs. DSers)
- [ ] 04-02: Install and configure dropshipping app; connect supplier; map all 12+ Shopify variants to supplier SKUs
- [ ] 04-03: Place test order across at least 3 print/model combinations; track through full delivery cycle
- [ ] 04-04: Packaging audit — verify unboxing experience against luxury brand positioning; log actual delivery time; identify backup supplier

### Phase 5: Marketing Infrastructure
**Goal**: Email capture, Klaviyo flows, and social pixels are all live and verified before the first traffic spike — revenue recovery and ad measurement are ready before they are needed
**Depends on**: Phase 3 (store must be styled before pixel installation is meaningful), Phase 4 (order pipeline must work before post-purchase flows are activated)
**Requirements**: EMAIL-01, EMAIL-02, EMAIL-03, EMAIL-04, SOCL-01, SOCL-02, SOCL-03, TRUST-02
**Success Criteria** (what must be TRUE):
  1. Email capture popup appears on store with a 10% off first order incentive and successfully captures an email address into Klaviyo
  2. A new Klaviyo subscriber receives the welcome flow email sequence within 5 minutes of signup — email includes brand story and best sellers
  3. An abandoned cart triggers the Klaviyo recovery sequence — minimum 2 emails send in the correct order
  4. A completed test order triggers the post-purchase thank you and review request flow in Klaviyo
  5. TikTok pixel fires PageView, AddToCart, and Purchase events — verified in TikTok Events Manager with no errors
  6. Meta pixel fires PageView, AddToCart, and Purchase events — verified in Meta Events Manager with no errors
  7. TikTok for Shopify channel is connected and product catalog is synced
  8. AfterShip branded tracking page is live — a tracking number entered shows the FAUNA LUXE branded status page, not a generic carrier page
**Plans**: TBD

Plans:
- [ ] 05-01: Install Klaviyo, connect to Shopify, and configure email capture popup with 10% off incentive
- [ ] 05-02: Build and activate Klaviyo welcome flow (brand story + best sellers, 2-email sequence)
- [ ] 05-03: Build and activate Klaviyo abandoned cart recovery flow (minimum 2-email sequence)
- [ ] 05-04: Build and activate Klaviyo post-purchase thank you and review request flow
- [ ] 05-05: Install Meta channel app; install and verify Meta pixel firing on PageView, AddToCart, Purchase
- [ ] 05-06: Install TikTok for Shopify channel app; verify TikTok pixel firing; sync product catalog
- [ ] 05-07: Install AfterShip, configure branded tracking page in cream/beige aesthetic, test with real tracking number

### Phase 6: Pre-Launch Gate
**Goal**: Every conversion risk is mitigated before the store goes public — social proof is seeded, influencer codes are ready, QA gates are passed, and the password comes off
**Depends on**: Phase 3, Phase 4, Phase 5
**Requirements**: SOCL-05
**Success Criteria** (what must be TRUE):
  1. A minimum of 5 photo reviews are live on product pages — visible to a first-time visitor with no account required
  2. Unique trackable discount codes exist for at least 5 micro-influencers — each code is functional at checkout and tracks to the correct creator
  3. Google PageSpeed Insights mobile score is 60 or higher on the product detail page
  4. All legal pages are published (Privacy Policy, Terms of Service, Returns Policy, Shipping Policy) and accessible from the footer
  5. Store password page is removed and the store is live at the custom domain — a stranger can find it, browse it, and buy from it
**Plans**: TBD

Plans:
- [ ] 06-01: Social proof seeding — secure 5–10 photo reviews through beta customer orders, influencer seeding, or personal orders; configure Judge.me if used
- [ ] 06-02: Create influencer discount code system in Shopify — generate unique trackable codes for first 5 creators
- [ ] 06-03: Pre-launch QA checklist — PageSpeed score, all legal pages, checkout end-to-end, mobile UX, pixel verification, email flow verification
- [ ] 06-04: Remove store password, verify live domain, confirm store is publicly accessible

### Phase 7: Marketing Execution
**Goal**: Traffic flows to a proven store — TikTok organic content is live, influencer seedings are initiated, and paid ads run with a validated conversion baseline
**Depends on**: Phase 6 (store must pass all launch gates before traffic is sent)
**Requirements**: (No new v1 requirements — all requirements delivered; this phase executes the marketing plan enabled by Phases 1–6)
**Success Criteria** (what must be TRUE):
  1. At least 3 TikTok videos are published with the FAUNA LUXE account linking to the collection page (not homepage) in bio
  2. Instagram profile is fully configured with brand aesthetic, link-in-bio pointing to store, and at least 6 feed posts live
  3. At least 3 micro-influencer seedings are initiated — cases shipped, brief sent, tracking confirmed
  4. Paid ad test campaign is live on Meta or TikTok with a minimum $10/day budget after organic conversion rate is confirmed above 1%
**Plans**: TBD

Plans:
- [ ] 07-01: TikTok account setup and first 3 organic content videos — product showcase, aesthetic lifestyle, brand story angle
- [ ] 07-02: Instagram/Pinterest profile setup, 6+ feed posts, link-in-bio configuration
- [ ] 07-03: Micro-influencer outreach — identify 10 creators in fashion/tech Gen Z niche, initiate first 3–5 seedings
- [ ] 07-04: Validate organic conversion rate (minimum 50 sessions); launch paid Meta or TikTok test campaign at $10–20/day

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Store Foundation | 0/3 | Not started | - |
| 2. Product Catalog | 0/4 | Not started | - |
| 3. Theme and Brand Buildout | 0/7 | Not started | - |
| 4. Dropshipping Integration | 0/4 | Not started | - |
| 5. Marketing Infrastructure | 0/7 | Not started | - |
| 6. Pre-Launch Gate | 0/4 | Not started | - |
| 7. Marketing Execution | 0/4 | Not started | - |
