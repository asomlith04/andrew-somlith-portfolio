# Pitfalls Research

**Domain:** Shopify luxury fashion ecommerce / dropshipping (MacBook accessories, student market)
**Researched:** 2026-02-24
**Confidence:** MEDIUM — external web tools unavailable; findings drawn from well-documented Shopify/dropshipping/luxury brand patterns in training data. Flag items marked LOW for independent validation.

---

## Critical Pitfalls

### Pitfall 1: Brand-Price Mismatch — The Store Looks Like $15, Priced at $65

**What goes wrong:**
The store launches with a premium $50–80 price point but the visual execution undermines the positioning. Default or minimally-configured Shopify themes, stock photography that looks generic, clunky fonts, mismatched colors, and a product page that reads like an AliExpress listing destroy the brand premium before a customer reads the price. Students are highly brand-literate — they smell inauthenticity instantly.

**Why it happens:**
Founders focus on getting the store "live" and treat design polish as a post-launch task. Theme defaults are "good enough to ship" but not good enough to sell at a premium. The gap between what looks polished in the Shopify editor preview and what feels luxurious to a cold visitor is wider than expected.

**How to avoid:**
- Choose a Shopify theme known for editorial/fashion aesthetics (Dawn, Prestige, Impulse, or a premium theme like Symmetry) — configure it fully before launch
- Cream & beige palette must be applied consistently across all elements: navigation, product tiles, buttons, form fields, footer
- Every product image must follow the same art direction standard: consistent backgrounds, lighting, and styling — no supplier stock photos without curation
- Brand typography (custom web fonts) must be configured in theme settings on day one — default system fonts kill luxury perception
- Write product copy in brand voice: editorial, aspirational, not functional spec-sheet language

**Warning signs:**
- Product images have inconsistent backgrounds or obvious white-box supplier photography
- Default Shopify font family ("Arial", "Helvetica") still in use
- Buttons or accents still show the theme's default blue/green accent color
- Price is the first/dominant visual element on the product card rather than the product itself

**Phase to address:** Theme setup and brand configuration phase (before any products go live)

---

### Pitfall 2: Dropshipping Supplier Causes Public Brand Damage

**What goes wrong:**
A student orders a $65 MacBook case for a specific MacBook model. The supplier ships a case for a different model, or ships in 3–4 weeks with no tracking updates, or ships in a poly bag with the supplier's AliExpress branding visible. The customer posts a TikTok or leaves a public Shopify review. The brand's luxury positioning collapses publicly before it ever builds.

**Why it happens:**
Dropshipping suppliers optimized for volume, not brand experience. The fulfillment chain (supplier → customs → carrier → customer) has multiple points of failure that the brand cannot directly control. Most founders discover supplier quality issues only after the first real orders land with customers.

**How to avoid:**
- Order 3–5 test units across ALL MacBook models offered, for each print variant, before launch — inspect personally
- Test the full unboxing: packaging, labels, any inserts, condition of case on arrival
- Confirm supplier uses plain/neutral packaging with no AliExpress/supplier branding visible — negotiate branded insert cards or stickers at minimum
- Set honest and slightly conservative shipping estimates on product pages (if supplier quotes 7–10 days, show 8–12 days to customers)
- Verify supplier's tracking integration works end-to-end — test a real order through to a delivered tracking event
- Have a second supplier identified as backup before launch (not after first fulfillment crisis)

**Warning signs:**
- Supplier quotes processing times as separate from shipping times but you've only displayed shipping time to customers
- Supplier stock photos show generic USB-C ports or models that don't match actual Apple hardware current lineup
- No test order placed before store goes live
- Supplier accepts all MacBook models without SKU-level differentiation (red flag for fit accuracy)

**Phase to address:** Supplier integration and testing phase (must complete test order loop before launch)

---

### Pitfall 3: MacBook Model Compatibility Errors — Wrong Case Shipped for Right Model

**What goes wrong:**
A customer orders "MacBook Air M2 13-inch" and receives a case that doesn't fit — either it's for the M1 form factor (different dimensions) or for a Pro model. MacBook cases are notoriously model-specific. The M2 MacBook Air (2022) has slightly different dimensions than the M1 (2020). The M3 14" MacBook Pro differs from the M2 14". A misfitted case is a guaranteed return and a brand-damaging experience.

**Why it happens:**
Shopify product variant setup is done by the brand, not the supplier. Founders map supplier SKUs to Shopify variants without verifying exact Apple hardware dimensions. Apple's "same size, different year" naming makes this easy to get wrong. Suppliers often consolidate incompatible models into a single SKU.

**How to avoid:**
- Build a compatibility matrix BEFORE setting up product variants: Apple model name → release year → exact dimensions → supplier SKU
- Reference Apple's official spec pages for chassis dimensions for every model in scope
- Name product variants exactly as Apple names them (e.g., "MacBook Air 13-inch (M2, 2022)" not "MacBook Air M2") — precision prevents customer error
- Test physical fit personally on at least the two most popular models (M2 Air 13", M3 Pro 14") before selling
- Add a compatibility note on every product page: "Check your MacBook model: Settings > About This Mac"
- Explicitly state which models are NOT compatible if they look similar (M1 Air vs M2 Air)

**Warning signs:**
- Supplier SKU descriptions use vague labels like "New MacBook Pro 13" without year specification
- Product variant list has "MacBook Air M1/M2" combined as a single variant
- No dimensional verification step in pre-launch checklist
- First test order hasn't been physically placed on an actual MacBook

**Phase to address:** Product catalog setup phase; must be validated before supplier integration is marked complete

---

### Pitfall 4: TikTok Traffic Arrives but Doesn't Convert — The "Viral But Broke" Problem

**What goes wrong:**
A TikTok video gets 50k–500k views and drives a spike of traffic to the store. Conversion rate is 0.3–0.8% instead of 2–4%. The store made $200 from a viral moment that should have made $2,000. The traffic never comes back. This pattern repeats — organic reach doesn't translate to revenue.

**Why it happens:**
TikTok audiences are discovery-mode, not purchase-mode. They tap a link in bio or a product link, see a slow-loading product page, see no social proof (zero reviews at launch), see a $65 price with no trust signals, and bounce. The gap is almost never the traffic — it's the landing page's inability to close a warm-but-skeptical 19-year-old who has never heard of FAUNA LUXE.

**How to avoid:**
- Product page must load in under 2.5 seconds on mobile (TikTok audience is entirely mobile) — test with Google PageSpeed Insights before launch
- Social proof is required before launch: minimum 5–10 real reviews (sourced from beta customers, friends with the product, or verified purchaser incentives)
- Trust signals on product page above the fold: reviews count, return policy snippet, shipping estimate — visible without scrolling on mobile
- For TikTok-specific traffic: ensure the bio link goes to a curated collection page or a branded landing page, not the generic homepage
- A/B test product page headline copy against the TikTok video hook — the copy should mirror the emotional angle of the content that drove the click
- Add urgency elements that are honest: "Only X left in stock" if actually true, or seasonal urgency tied to real academic calendar (back-to-school, finals season)

**Warning signs:**
- Google PageSpeed mobile score below 60 at launch
- Zero product reviews at launch
- Bio link points to homepage with no clear path to the viral product
- Product page copy reads like a feature list rather than fashion editorial language matching TikTok aesthetic
- No pixel/analytics installed before traffic arrives (can't measure what's failing)

**Phase to address:** Store launch readiness phase; page speed and social proof must be gating criteria before TikTok content goes live

---

### Pitfall 5: Shopify Theme Customization Creates Unmaintainable Liquid Spaghetti

**What goes wrong:**
To achieve the luxury aesthetic, the builder makes small tweaks: pasting CSS into the Custom CSS field, injecting JavaScript via the Additional Scripts field, adding inline `style=""` attributes directly in section JSON via the theme editor. Six weeks later, a Shopify theme update breaks the custom CSS. A new page section added via theme editor overrides the inline styles. Changes become unpredictable and the store looks broken in places.

**Why it happens:**
Non-developers working in Shopify's theme editor reach for the easiest override mechanism (Custom CSS, Additional Scripts) rather than the right mechanism (theme settings, section schema, or a proper custom CSS file in theme assets). The customizations compound and become interdependent.

**How to avoid:**
- All CSS customizations go in `assets/custom.css` (or the theme's designated custom CSS file), never in the "Custom CSS" textarea in the theme editor — this file survives theme updates
- Never modify theme `.liquid` files directly unless there is a clear plan to maintain those changes through theme updates (or the theme is pinned to a specific version permanently)
- Use theme settings for everything the theme exposes as a setting (colors, fonts, section layout) before reaching for CSS
- Document every customization decision in a `THEME-CUSTOMIZATIONS.md` in the project repo
- Test theme on mobile after every significant customization before calling it done

**Warning signs:**
- Multiple `<style>` tags pasted into theme section JSON as string values
- The "Custom CSS" field in theme editor contains more than 20 lines
- Any theme file has been renamed or duplicated as a workaround
- Nobody knows what the Custom CSS is doing or why it exists

**Phase to address:** Theme configuration phase; establish the customization pattern before any CSS is added

---

### Pitfall 6: Slow Mobile Page Speed Kills Premium Perception

**What goes wrong:**
The store looks beautiful on a desktop browser in the Shopify editor but loads in 4–6 seconds on a mobile phone. Students on LTE or Wi-Fi tap the product page, watch a spinner, and bounce before the page renders. Google's Core Web Vitals score tanks, which hurts any SEO growth. The conversion rate on mobile is 40–60% lower than desktop, but since the entire TikTok and Instagram audience is mobile-first, this is a catastrophic problem.

**Why it happens:**
- Over-installation of Shopify apps: each app injects its own JavaScript/CSS — 8–12 apps is common and each adds 100–500ms of load time
- Hero images and product images uploaded at full resolution (3–5MB) without compression or proper WebP conversion
- Premium theme features enabled that require large JS bundles (carousels, animations, parallax effects) that trade speed for visual polish
- Embedded Instagram/TikTok feed widgets from third-party apps are notoriously slow

**How to avoid:**
- App audit: install only apps that are essential at launch — defer social proof apps, review apps, upsell apps until after baseline speed is validated
- All product images must be optimized: maximum 300–500KB per image, WebP format preferred, at least 2:1 (width:height) aspect ratio for consistency
- Disable or avoid theme animations and parallax effects on mobile via CSS — they add JS weight and don't work well on mobile anyway
- Never install a third-party social feed app at launch — curate Instagram/TikTok content manually via static images
- Run Google PageSpeed Insights and Shopify's built-in speed score after every app installation, before and after, so you know which app caused a regression

**Warning signs:**
- More than 6 Shopify apps installed at launch
- Any app with "Instagram feed" or "TikTok feed" in the name
- Hero image file size exceeds 1MB
- Shopify store speed score below 50 in admin

**Phase to address:** Theme setup phase (image optimization) and post-launch app management (ongoing)

---

### Pitfall 7: Zero Reviews at Launch Blocks Conversion for Premium Products

**What goes wrong:**
A $65 MacBook case with no reviews is a hard sell to a skeptical student. Students comparison-shop. When they see FAUNA LUXE with 0 reviews next to a $12 Amazon case with 4,000 reviews and a $45 Casetify with 800 reviews, the absence of social proof is a trust signal in the wrong direction. The brand story doesn't compensate for the absence of verified purchaser validation.

**Why it happens:**
Founders assume the product will accumulate reviews organically after launch. For a new brand with low initial traffic, organic reviews take 3–6 months to appear in meaningful numbers. Launching at a premium price point without pre-seeded social proof is a structural conversion problem.

**How to avoid:**
- Pre-seed at least 5–10 reviews before the store goes public — source from friends/family who genuinely received and used the product, beta customers who got a free or discounted unit, or influencer seeding where recipients write honest reviews
- Reviews must be verified-purchase reviews (Shopify's Judge.me, Stamped, or Loox apps allow this) — not manually typed fake reviews, which violate Shopify ToS and destroy trust if detected
- Include at least 2–3 photo reviews in the initial set — photo reviews from real people in dorm/study settings convert better than text-only
- Install a review app (Judge.me is the standard free option) before launch and configure the review request email sequence before the first order ships
- Add a star rating display to collection page product tiles — even 5 reviews with stars visible on the collection grid dramatically increases click-through

**Warning signs:**
- Review app not installed before store goes live
- Product page shows "No reviews yet" with an empty state
- No plan for seeding initial reviews before traffic arrives

**Phase to address:** Pre-launch preparation phase; reviews must be seeded before TikTok content is published

---

### Pitfall 8: Dropshipping Shipping Time Destroys Student Buying Moments

**What goes wrong:**
A student sees a FAUNA LUXE case on TikTok on September 3rd (first week of college). They want it for orientation week. They order it. Shipping from a Chinese supplier takes 14–21 business days. The case arrives in October. The emotional "back-to-school fresh start" buying moment is completely gone. The student is disappointed, leaves a review mentioning slow shipping, and doesn't repurchase.

**Why it happens:**
The buying motivation for fashion accessories like MacBook cases is often tied to specific life moments (new semester, birthday, influencer trend). Dropshipping shipping times (especially from Overseas suppliers) systematically miss these windows. Founders underestimate how time-sensitive the student market is.

**How to avoid:**
- Choose suppliers with ePacket, Yanwen, or preferably US/EU warehoused options — prioritize suppliers who can ship from US-based inventory even if the unit cost is higher
- Display realistic shipping times prominently on product pages and at checkout — do not bury in FAQ
- If shipping times will be 10+ days, frame it as "crafted to order" or "shipped within 5 business days" combined with honest carrier transit estimates — not as a luxury feature, but as transparency
- Test actual delivery times (not supplier-quoted times) before setting customer expectations
- Consider purchasing 20–30 units of top SKUs for pre-fulfillment inventory during peak student buying windows (August back-to-school, January spring semester) if cash flow allows — this is not dropshipping but bridges the gap for critical moments

**Warning signs:**
- Shipping estimate on product page is copied from supplier's website without testing
- Supplier quotes "3–7 days" but no test order has actually been tracked to delivery
- No specific plan for back-to-school season (August–September) fulfillment

**Phase to address:** Supplier integration phase; must validate actual delivery times before displaying estimates to customers

---

## Technical Debt Patterns

Shortcuts that seem reasonable but create long-term problems.

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Paste custom CSS in theme editor textarea | Fast styling changes | Wiped or broken on theme updates; becomes a mystery blob | Never — always use `assets/custom.css` |
| Use supplier product images without curation | Saves hours of photography | Inconsistent aesthetic destroys brand premium; stock images appear on competitor stores | Never for hero/featured images; acceptable only for zoom/detail shots temporarily |
| Skip review app setup at launch | One less app to configure | Zero social proof when first traffic arrives; hard to recover conversion rate | Never — takes 20 minutes and is foundational |
| Combine multiple MacBook models into one variant | Simpler product setup | Compatibility errors, wrong cases shipped, returns and chargebacks | Never — each model needs its own verified SKU |
| Install every useful-looking free Shopify app | Free functionality | Each app adds 100–500ms page load; 8+ apps = measurably slow site | Only if page speed remains above Shopify score 60 after installation |
| Copy-paste competitor's return policy | Fast legal coverage | May not reflect your actual supplier's policy; creates unenforceable promises | Acceptable as starting point IF supplier terms are verified |
| Use a placeholder homepage before launch | Ship faster | TikTok/Instagram traffic arriving during pre-launch will have no conversion path | Never — store must be complete before any social content points to it |

---

## Integration Gotchas

Common mistakes when connecting to external services.

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| DSers / AutoDS (dropshipping app) | Map supplier product to Shopify product without checking every variant SKU individually | Verify each MacBook model variant maps to a distinct supplier SKU — never let the app auto-map without review |
| DSers / AutoDS | Assume "auto-fulfill" is safe to enable at launch | Run first 10 orders manually to verify correct SKU is being ordered; enable auto-fulfill only after validation |
| Shopify Payments | Assume it's available in your country at signup | Verify Shopify Payments eligibility for your country before building; have PayPal as fallback from day one |
| Judge.me / Review App | Install after launch when reviews are already needed | Install before launch, configure email sequence, send test review request to verify flow |
| TikTok Pixel / Meta Pixel | Install via copy-paste into Additional Scripts field | Use Shopify's native TikTok Sales Channel or Meta app — proper event tracking without manual code |
| TikTok Sales Channel | Connect before all product variants are final | Product data synced to TikTok Shop is difficult to update; finalize catalog before connecting |
| Shopify Email | Use default transactional email templates | Customize all transactional emails (order confirmation, shipping, delivery) to match brand aesthetic before first order |
| Google Analytics 4 | Install after traffic starts arriving | Install GA4 before any social content goes live — you need baseline data from day one |

---

## Performance Traps

Patterns that work at small scale but fail as usage grows.

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Too many Shopify apps | Page load creeps to 4–6 seconds; speed score drops | App audit after every installation; remove any app not actively generating value | After 6–8 apps installed (approximately) |
| Unoptimized product images | Hero image takes 2–3 seconds to appear on mobile LTE | Compress all images to under 400KB, use WebP, use Shopify's image transformation CDN | Immediately, but most visible during TikTok traffic spikes |
| Third-party social feed widget | Feed section takes 3+ seconds to load; causes layout shift | Use static curated images instead; link to Instagram profile separately | Immediately on mobile — every social feed app is slow |
| Shopify liquid template complexity | Theme editor becomes slow; section changes don't preview correctly | Use standard theme sections; avoid deeply nested Liquid loops | After significant theme modification |
| Too many product variants | Shopify variant picker becomes confusing; customers choose wrong model | Limit variants to what the page UI can cleanly represent; use separate products per print if needed | Visible UX problem from first product page visit |

---

## Security Mistakes

Domain-specific security issues beyond general web security.

| Mistake | Risk | Prevention |
|---------|------|------------|
| Enabling "Accept orders when payment provider is unavailable" in checkout settings | Orders placed with no payment collected; fraudulent orders | Disable this setting; verify it is off before launch |
| Not configuring Shopify Fraud Analysis | High-risk orders auto-fulfilled to fraudulent addresses | Enable Shopify's built-in fraud analysis; review any "High risk" flagged orders before fulfilling |
| Using a supplier who requires your credit card on file for bulk purchasing | Card details exposed to supplier; potential unauthorized charges | Use supplier payment methods that are transactional (pay per order) not stored card |
| No HTTPS/SSL verification before going live | Customer trust warning in browser; payment processors may refuse | Shopify provides SSL by default — verify the lock icon appears on checkout before launch |
| Reusing supplier product descriptions verbatim | Duplicate content penalized by Google; text may contain supplier's brand name | Write all product copy from scratch in brand voice |

---

## UX Pitfalls

Common user experience mistakes in this domain.

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Requiring account creation before purchase | Students abandon checkout — they want to buy, not sign up | Enable guest checkout in Shopify settings; this is off by default but is critical |
| No model compatibility guidance on product page | Customer unsure if case fits their MacBook → doesn't buy | Add a compatibility section: "Fits: MacBook Air 13-inch (M2, 2022) and (M3, 2024). Does NOT fit M1 or 14-inch models." |
| Homepage as the TikTok bio link destination | TikTok viewer clicks, sees a homepage with no obvious next step | Bio link goes to the featured collection or a dedicated landing page with the viral product hero |
| Single product image (supplier photo) | No context for how case looks in real life / dorm setting | Minimum 4 images per product: case alone, case on MacBook, MacBook in study/lifestyle setting, detail shot of print |
| No return/exchange policy visible before checkout | Students hesitant to spend $65 without knowing they can return | Display return policy snippet above the "Add to Cart" button on product page |
| Cluttered navigation with too many categories | Overwhelming for a 3-print launch; student lands on category page expecting more variety than exists | Keep navigation minimal: Shop, About, and a collection link — don't expose empty or thin categories |
| Checkout currency mismatch | International students see price in wrong currency, feel uncertain | Configure Shopify Markets or Geolocation app to display correct currency for buyer's region |

---

## "Looks Done But Isn't" Checklist

Things that appear complete but are missing critical pieces.

- [ ] **Dropshipping integration:** Order synced to DSers/AutoDS — but has a real test order been placed AND delivered to a physical address AND confirmed the correct case arrived?
- [ ] **Product pages:** Designed and styled — but has each page been viewed on an actual iPhone (not just browser DevTools mobile mode) at real LTE speeds?
- [ ] **Shipping estimates:** Displayed on product page — but are they based on actual tested delivery time, or copied from the supplier's marketing page?
- [ ] **MacBook variant mapping:** All variants set up in Shopify — but has each variant's supplier SKU been cross-referenced against Apple's official dimensional specifications?
- [ ] **Review app:** Installed and showing on product pages — but has the review request email sequence been tested end-to-end with a real email address?
- [ ] **TikTok/Meta pixel:** Installed — but have purchase events been verified firing correctly in the pixel test event tool before launch?
- [ ] **Guest checkout:** Enabled in Shopify settings — this is not the default and must be explicitly turned on
- [ ] **Transactional emails:** Order confirmation, shipping notification — but have they been opened on a mobile email client to verify they don't look broken?
- [ ] **Return policy:** Written and linked in footer — but is it consistent with what the dropshipping supplier will actually honor?
- [ ] **404 page:** Shopify default or branded — a student who follows a broken link and sees a generic Shopify 404 immediately questions brand professionalism

---

## Recovery Strategies

When pitfalls occur despite prevention, how to recover.

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Wrong MacBook model shipped to customer | MEDIUM | Apologize immediately, reship correct case, offer refund or store credit, eat the cost — do not dispute; issue refund/reship within 24 hours to prevent chargeback |
| Supplier ships with visible AliExpress branding | MEDIUM | Contact supplier to negotiate plain packaging for future orders; for affected customers, proactively reach out with discount code and apology before they complain |
| Viral TikTok with 0.3% conversion rate | LOW | Do not panic; install Hotjar or session recording, identify the drop-off point on mobile, fix the specific issue (speed, trust, copy), create follow-up content pointing to store |
| Slow page load discovered post-launch | MEDIUM | Audit apps installed — remove any unused in order of app weight; compress all images; re-test after each change; do not add more apps to solve the speed problem |
| Negative public review about shipping delay | HIGH | Respond publicly and professionally, resolve privately, improve displayed shipping estimates immediately, consider pre-stocking top SKUs for future peak windows |
| Theme broken after Shopify update | HIGH | Revert to previous theme backup (Shopify keeps 3 versions); identify what custom CSS caused the conflict; re-apply customizations via `assets/custom.css` not theme editor fields |
| Chargeback from fraudulent order fulfilled by auto-fulfill | HIGH | Disable auto-fulfill, review all pending orders manually, dispute chargeback with Shopify Payments using fulfillment proof; implement fraud review step going forward |

---

## Pitfall-to-Phase Mapping

How roadmap phases should address these pitfalls.

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Brand-price mismatch (aesthetic failure) | Theme setup and brand configuration | QA checklist: fonts, colors, typography, image consistency reviewed by someone who hasn't seen the store before |
| Supplier quality / packaging issues | Supplier integration and testing | Test order received, unboxed, and photographed; packaging confirmed plain/brand-neutral |
| MacBook model compatibility errors | Product catalog setup | Compatibility matrix document signed off; test cases physically placed on real MacBook models |
| TikTok traffic not converting | Pre-launch store readiness | PageSpeed mobile score >= 60; minimum 5 photo reviews live; bio link verified; pixel verified |
| Shopify theme CSS spaghetti | Theme setup (establish pattern early) | All custom CSS in `assets/custom.css`; no styles in Additional Scripts or section JSON strings |
| Slow mobile page speed | Theme setup + post-launch app management | Google PageSpeed Insights mobile score >= 60; LCP < 2.5s on mobile |
| Zero reviews at launch | Pre-launch preparation | Minimum 5 verified reviews live; at least 2 include photos; review app email sequence tested |
| Shipping time vs. buying moment mismatch | Supplier integration testing | Actual delivery time logged from test order; displayed estimate on product page matches tested reality |
| Guest checkout disabled | Store configuration | Shopify Admin > Settings > Checkout > Customer accounts = "Accounts are optional" confirmed |
| No fraud analysis | Store configuration | Shopify fraud analysis enabled; high-risk order review process documented |

---

## Sources

- Shopify Help Center — dropshipping setup and fraud analysis documentation (training knowledge, HIGH confidence for Shopify platform mechanics)
- Shopify Partner Blog — theme performance and Core Web Vitals guidance (MEDIUM confidence — verify current Shopify speed score methodology)
- Apple Mac technical specifications — MacBook dimensional data for compatibility verification (HIGH confidence — official Apple specs are stable and publicly documented)
- General ecommerce industry patterns for luxury brand positioning, social proof requirements, and TikTok-to-purchase conversion analysis (MEDIUM confidence — well-documented patterns across multiple sources in training data)
- Dropshipping community post-mortems on supplier quality, shipping time, and brand positioning failures (MEDIUM confidence — common and well-documented patterns; validate against current DSers/AutoDS documentation)

---

*Pitfalls research for: FAUNA LUXE — Shopify luxury animal print MacBook cases, dropshipping, student market*
*Researched: 2026-02-24*
*Confidence: MEDIUM — all external search/fetch tools unavailable during this research session. Core Shopify mechanics and dropshipping patterns are well-documented in training data. Validate MacBook model dimensional specs against Apple's current spec pages before product catalog setup.*
