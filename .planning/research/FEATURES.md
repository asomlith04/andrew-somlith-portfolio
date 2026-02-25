# Feature Research

**Domain:** Luxury fashion accessory ecommerce — Shopify, animal print MacBook cases, $50-80 price point
**Researched:** 2026-02-24
**Confidence:** MEDIUM (external tools unavailable; findings drawn from training knowledge of Shopify ecosystem, luxury DTC brands, and Gen Z ecommerce behavior — flag for spot-verification before implementation)

---

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist. Missing these = store feels untrustworthy or incomplete. At a $50-80 price point with no brand recognition, every missing table-stakes feature is a conversion-killer.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| High-quality product photography (multiple angles) | Fashion accessories are bought on visuals; single image reads as cheap/dropship | LOW | Lifestyle shots + flat lay + detail close-up minimum per SKU; need shots that look premium, not Alibaba catalog |
| MacBook model selector (variant picker) | Cases are model-specific; user must know immediately whether their device is covered | LOW | Shopify native variant system — label clearly (e.g., "M2/M3 13\" MacBook Air") not just "13 inch" |
| Clear compatibility guide | Students fear buying wrong size; one wrong order = trust destroyed + return hassle | LOW | Sticky note on product page: "How to check your MacBook model" — simple instructions or linked Apple support page |
| Mobile-first product page layout | Gen Z students overwhelmingly browse on iPhone; 60-70%+ of traffic will be mobile | LOW | Shopify themes are responsive but luxury themes need specific mobile QA — text, button sizes, image stacking |
| Checkout with Shop Pay / Apple Pay | One-tap checkout is expected by Gen Z; multi-step checkout causes abandonment | LOW | Shopify native — enable Shop Pay, Apple Pay, Google Pay in payment settings |
| Returns & shipping policy (visible) | At $50-80 for an unknown brand, "what if it doesn't fit?" is top objection | LOW | Dedicated policy page + summary visible on product page (not just in footer) |
| About/brand story page | Luxury positioning requires a brand narrative; without it the premium price feels unjustified | LOW | Not a "nice to have" for luxury — the story IS the product differentiation |
| SSL / trust signals at checkout | Students are security-conscious; any doubt = abandoned cart | LOW | Shopify native — trust badges (SSL lock, accepted payment icons) should be visible |
| Product reviews (star ratings) | Social proof is table stakes for any DTC brand; absence signals no one has bought it | MEDIUM | Shopify native has basic reviews; Loox or Judge.me needed for photo reviews — photo reviews especially critical here |
| Email capture (newsletter / discount popup) | Industry standard; students expect a first-purchase discount offer | LOW | Shopify native popup or Klaviyo — must offer incentive (10% off) to justify the ask |
| Functional search | Users may search "MacBook Air 13" or "leopard" — must surface results | LOW | Shopify native search — ensure product titles and tags are optimized |
| Collections page (organized catalog) | 3 prints x 4 MacBook models = 12 SKUs; needs clear organization | LOW | At minimum: "All Cases," "Leopard," "Snake," "Cow Print" — or organize by MacBook model |
| 404 / error handling | Broken pages destroy luxury brand perception | LOW | Shopify theme default — customize the 404 page to stay on-brand |
| Shipping timeframes displayed | Dropshipping means 7-21 day delivery; hiding this causes post-purchase anger | LOW | Be honest about shipping times on product page and at checkout — set expectations, not surprises |

---

### Differentiators (Competitive Advantage)

Features that justify the $50-80 price vs a $12 Amazon case and build the FAUNA LUXE brand. These are where the brand competes — don't try to differentiate on everything; pick 3-5 and do them exceptionally well.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Editorial-style product photography | Transforms the product page into a fashion lookbook — makes the case feel like a Vogue accessory, not a phone case listing | MEDIUM | Invest here. Flat-lay on cream linen, MacBook styled with coffee + journal + rings. This single investment separates FAUNA LUXE from every dropship competitor. |
| "Style it with" / outfit pairing module | Shows the case in context of a full aesthetic (cream tote, gold jewelry, neutral outfit) — sells the lifestyle, not the product | MEDIUM | Can be done with static editorial images + caption copy on product page. No custom dev needed — section in theme. |
| Animal print story / "The Wild Meets Quiet Luxury" brand narrative | Gives the prints meaning beyond pattern — why leopard, why now, what does it say about you | LOW | Copy-driven. On About page, collection description, product descriptions. High ROI for LOW effort. |
| UGC / customer photo wall | Real students using the case is more persuasive than brand photography for Gen Z; also feeds social proof | MEDIUM | Loox or Okendo app supports photo reviews displayed as gallery. Can also embed Instagram feed showing customer tags. |
| TikTok / Instagram embed or "As seen on TikTok" social proof section | Gen Z trust signals; shows the brand is culturally relevant, not just an Etsy-style shop | LOW | Static embed or screenshot-style "viral moment" section on homepage. Real TikTok embed via app or simple iframe. |
| Wishlist / save for later | Students may browse before payday or "I'll come back" — wishlist recaptures intent | LOW | Wishlist King or native Shopify wishlist (available in some themes). Enables remarketing. |
| Email sequence (welcome + abandoned cart + post-purchase) | 3 emails can recover 5-15% of abandoned carts; post-purchase sequence builds brand loyalty and asks for review/UGC | MEDIUM | Klaviyo free tier covers this for early volume. Requires email capture to be working first. |
| "Which print is your aesthetic?" quiz or style guide | Interactive element that increases time-on-site and helps undecided shoppers choose — maps to Gen Z love of personality/identity content | MEDIUM | Shopify app (Tolstoy, Octane AI) or simple landing page with styled imagery + copy. Drives higher conversion than static pages. |
| Influencer / PR page (private password-protected collab portal) | Enables micro-influencer seeding at scale — gives influencers a curated experience and a place to apply | MEDIUM | Simple Shopify page with a form (Typeform or Google Form embed) for influencer applications. No custom dev. |
| Scarcity / "low stock" signals | Luxury goods feel more desirable when they feel limited; "Only 3 left" increases urgency | LOW | Shopify Low Stock Alert app or theme-native inventory display. Must be real, not fake — fake scarcity destroys trust if caught. |
| Packaging / unboxing mention on product page | At $50-80, the unboxing should feel premium — mention it; show it. Students share unboxings on TikTok. | LOW | Photography + copy. "Arrives in our signature cream gift box" — even if it's a supplier box, curate what you can. |
| Cross-sell / "Complete your aesthetic" | Shows complementary print or secondary MacBook model on product page — increases AOV | LOW | Shopify native "Frequently Bought Together" or theme-native related products section. |

---

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem like good ideas for a luxury brand but are counterproductive for v1 or for this specific business model.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Live chat / AI chatbot | Feels "luxury" and responsive; seen on high-end brands | At dropshipping scale with 1 SKU type, 90% of questions are "what MacBook fits?" — which a good FAQ answers better. Live chat creates a support obligation you can't staff. | Comprehensive FAQ section on product page (accordion) answering: compatibility, shipping time, returns, materials |
| Loyalty points / rewards program | Encourages repeat purchase | No repeat-purchase need for cases (one MacBook = one case); loyalty program adds complexity, cost (Smile.io $49/mo+), and dilutes luxury positioning. Luxury brands don't do points. | Post-purchase email asking for referral / UGC instead |
| Subscription model | Recurring revenue | Makes no sense for a physical product with no replenishment cycle | Email list for new print drops instead |
| Blog / editorial content hub | Good for SEO; fashion brands have blogs | SEO ROI is 6-12 months away; for launch, content energy goes to TikTok and Instagram where the audience actually is | Pinterest boards + Instagram highlights as soft editorial presence |
| Multi-currency / global shipping v1 | Feels professional / ambitious | Dropshipping supply chain complexity, different shipping zones, potential customs issues — complicates launch significantly. Focus on US market first. | Single currency (USD), single market. Add international shipping post-PMF. |
| User accounts / login wall | Standard ecommerce feature | For a brand with no loyalty program and single-purchase use case, account creation adds friction and offers no value to the user | Guest checkout only; email capture via popup and post-purchase flow instead |
| Size guide interactive tool | Fashion accessory feature | MacBook cases don't "fit" like clothing; compatibility is a binary yes/no by model number | Compatibility table or dropdown variant selector makes model check trivial |
| AR / virtual try-on | "See it on your laptop" sounds cool | Technically complex (Shopify AR requires 3D models), costs $500-2000 per SKU for 3D modeling, and Gen Z will just look at the real photo | Exceptional flat lay photography on the same laptop model the case fits |
| Full lookbook / editorial magazine | High-fashion brands do this | Content production cost is high; at launch, focus on product pages and social channels | "Style it with" section on product page using 2-3 lifestyle photos serves same function |
| Product customization (custom name/initials) | Personalization feels premium | Requires supplier capability, increases order complexity, extends fulfillment time, and complicates dropshipping handoff | Offer as v2 if demand signals emerge; keep v1 focused |

---

## Feature Dependencies

```
[Email Capture]
    └──enables──> [Abandoned Cart Email]
    └──enables──> [Welcome Email Sequence]
    └──enables──> [Post-Purchase Review Request]

[Photo Reviews (Loox/Okendo)]
    └──enables──> [UGC / Customer Photo Wall]
    └──enhances──> [Social Proof on Product Page]

[MacBook Model Variant System]
    └──requires──> [Clear Compatibility Guide]
    └──enables──> [Correct Dropship SKU Mapping]

[Product Photography (Editorial)]
    └──enables──> ["Style it with" Module]
    └──enables──> [TikTok / Instagram Content]
    └──enables──> [Unboxing Content]

[TikTok / Instagram Presence]
    └──enables──> ["As Seen On TikTok" Social Proof Section]
    └──enables──> [UGC Flow]

[Influencer Seeding]
    └──requires──> [Product Photography] (to pitch with)
    └──requires──> [Influencer Application Page]
    └──enables──> [UGC Flow]
    └──enables──> ["As Seen On TikTok" Social Proof]

[Scarcity Signals]
    ──conflicts──> [Fake/inflated urgency] (destroys trust if caught; must use real inventory data)

[Email Sequence (Klaviyo)]
    └──requires──> [Email Capture Working]
    └──requires──> [Shopify <> Klaviyo integration]
```

### Dependency Notes

- **MacBook Model Variant System requires Compatibility Guide:** The variant dropdown is useless if the user doesn't know their MacBook model. The guide is a co-launch requirement, not an optional add.
- **Photo Reviews enable UGC Wall:** Can't build a UGC photo wall without accumulated customer photos. Plan for this at v1.x (after first 20-30 orders), not v1.
- **TikTok presence enables "As Seen On TikTok" section:** Don't put this section on the homepage until there's actual TikTok content to back it up. Placeholder looks amateur.
- **Editorial photography enables everything:** This is the single highest-leverage v1 investment. Nearly every differentiating feature depends on having great visuals to work with.

---

## MVP Definition

### Launch With (v1)

Minimum viable product — what's needed for the store to be credible and convert at launch.

- [ ] Product pages with multi-angle editorial photography — why essential: visuals carry the $50-80 price justification; no other feature compensates for bad photos
- [ ] MacBook model variant selector with compatibility guide — why essential: compatibility confusion is the #1 blocker to purchase for tech accessories
- [ ] Honest shipping timeframes on product page and checkout — why essential: dropshipping timelines (7-21 days) will generate chargebacks and 1-star reviews if hidden
- [ ] Returns policy (visible, not just in footer) — why essential: at $50-80 from an unknown brand, no-risk policy is conversion prerequisite
- [ ] Photo review app (Loox or Judge.me) installed — why essential: needs to be active from day one so reviews accumulate; can't retroactively add reviews
- [ ] Email capture popup with 10% off first order — why essential: email list is the owned channel; early subscribers are highest-value customers
- [ ] Shop Pay / Apple Pay enabled — why essential: one-tap checkout is expected; multi-step friction loses the impulse buy
- [ ] Brand story / About page — why essential: luxury positioning without story = Amazon listing with higher price
- [ ] Collections organized by print — why essential: 12 SKUs need navigation structure; random catalog feels like a marketplace
- [ ] Mobile-optimized QA pass — why essential: 60-70% of traffic from TikTok and Instagram is mobile; broken mobile = dead brand
- [ ] FAQ section (accordion on product page) — why essential: handles 90% of pre-purchase questions without live support obligation
- [ ] "Arrives in our signature packaging" mention + photo — why essential: sets unboxing expectations, enables TikTok unboxing content by customers

### Add After Validation (v1.x)

Features to add once first 30-50 orders are through and store is proven functional.

- [ ] UGC / customer photo gallery — trigger: first 20+ photo reviews accumulated; then build the wall
- [ ] "As Seen On TikTok" social proof section — trigger: 2+ TikTok videos with real engagement to cite
- [ ] Abandoned cart email sequence (Klaviyo) — trigger: email capture is working and list has 100+ subscribers
- [ ] Welcome email sequence — trigger: same as above; set up alongside abandoned cart
- [ ] Wishlist app — trigger: if bounce rate data suggests "I'll come back" intent (can infer from session analytics)
- [ ] "Style it with" / outfit pairing editorial section — trigger: have photography assets; medium-effort, high-brand-value

### Future Consideration (v2+)

Features to defer until product-market fit is established.

- [ ] "Which print is your aesthetic?" style quiz — why defer: requires content + dev investment; validate purchase behavior first
- [ ] Influencer application portal — why defer: launch with manual DM outreach first; portal only justified at volume
- [ ] Post-purchase review request email sequence — why defer: needs Klaviyo set up (v1.x), then add review step after that's running
- [ ] International shipping — why defer: US market first; cross-border dropshipping complications hurt launch quality
- [ ] Product customization (initials/name) — why defer: requires supplier capability confirmation and order workflow changes

---

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Editorial product photography | HIGH | MEDIUM | P1 |
| MacBook model variant + compatibility guide | HIGH | LOW | P1 |
| Honest shipping timeframes | HIGH | LOW | P1 |
| Returns policy visible on product page | HIGH | LOW | P1 |
| Photo reviews app (Loox / Judge.me) | HIGH | LOW | P1 |
| Email capture popup (10% off) | HIGH | LOW | P1 |
| Shop Pay / Apple Pay | HIGH | LOW | P1 |
| Brand story / About page | HIGH | LOW | P1 |
| Mobile-optimized QA | HIGH | LOW | P1 |
| Collections organized by print | MEDIUM | LOW | P1 |
| FAQ accordion on product page | HIGH | LOW | P1 |
| Packaging mention + photo | MEDIUM | LOW | P1 |
| "Style it with" lifestyle section | HIGH | LOW | P2 |
| UGC / customer photo gallery | HIGH | MEDIUM | P2 |
| Abandoned cart email (Klaviyo) | HIGH | MEDIUM | P2 |
| Welcome email sequence | HIGH | MEDIUM | P2 |
| "As Seen On TikTok" social proof section | MEDIUM | LOW | P2 |
| Wishlist app | MEDIUM | LOW | P2 |
| Scarcity / low stock signals | MEDIUM | LOW | P2 |
| Cross-sell / "Complete your aesthetic" | MEDIUM | LOW | P2 |
| Style quiz / print finder | MEDIUM | MEDIUM | P3 |
| Influencer application portal | MEDIUM | LOW | P3 |
| Post-purchase email sequence | MEDIUM | MEDIUM | P3 |

**Priority key:**
- P1: Must have for launch — store is not credible without it
- P2: Should have — add in first 30 days post-launch
- P3: Nice to have — add when brand has proven traction

---

## Competitor Feature Analysis

Note: Confidence is MEDIUM — based on training knowledge of comparable brands (Casely, Pela Case, Burga, Felony Case). Direct competitor analysis should be verified by visiting live sites before roadmap finalization.

| Feature | Casely (mid-market) | Burga (luxury-positioned) | FAUNA LUXE Approach |
|---------|---------------------|--------------------------|---------------------|
| Product photography | Multi-angle, lifestyle | Editorial, styled scenes | Match Burga — invest in lifestyle over catalog |
| Compatibility selector | Model dropdown, clearly labeled | Model dropdown + compatibility checker | Match Burga — label with chip names (M2/M3), not inches only |
| Social proof | Photo reviews, star ratings | Photo reviews + "bestseller" labels | Photo reviews required at launch; "bestseller" label when real |
| Email capture | Popup with 10% off | Popup with discount | Exact same tactic — 10% off with strong copy |
| Brand story | Minimal | Stronger — "designed in Lithuania" etc | Lean into the wild-meets-quiet-luxury narrative hard |
| UGC / Instagram | Instagram embed + hashtag | Instagram shop integration | Start with Loox photo reviews; add Instagram embed in v1.x |
| Checkout | Shop Pay, Apple Pay | Same | Match — enable all accelerated checkouts |
| Loyalty program | Yes (Casely) | No (Burga) | No — luxury brands don't do points |
| Blog / editorial | Yes (Casely) | Limited | No at launch — social channels instead |
| Pricing | $40-50 | $50-80 | $50-80 — at parity with Burga; story must justify it |

---

## Sources

- Shopify platform capabilities: training knowledge of Shopify ecosystem (HIGH confidence for platform-native features)
- Luxury DTC ecommerce feature patterns: training knowledge of Casely, Burga, Felony Case, Pela Case, similar brands (MEDIUM confidence — verify by auditing live sites)
- Gen Z / student ecommerce behavior: training knowledge of published research on Gen Z shopping habits (MEDIUM confidence — behavior patterns well-documented; specific stats should be verified)
- Email marketing benchmarks (Klaviyo free tier, abandoned cart recovery rates): training knowledge (MEDIUM confidence — verify current Klaviyo pricing before committing)
- Shopify app recommendations (Loox, Judge.me, Klaviyo, Wishlist King): training knowledge (MEDIUM confidence — verify current app store ratings and pricing before selecting)

**Verification recommended before implementation:**
- Visit burga.com, casely.com, felonycase.com to audit live feature sets (1-2 hours of manual research)
- Confirm current Loox vs Judge.me pricing (both have free tiers; confirm photo review capability)
- Confirm Klaviyo free tier limits (was 250 contacts / 500 emails/month as of training — may have changed)
- Confirm Shopify current accelerated checkout options (Shop Pay, Apple Pay, Google Pay all supported natively)

---

*Feature research for: FAUNA LUXE — luxury animal print MacBook cases, Shopify, dropshipping, $50-80*
*Researched: 2026-02-24*
