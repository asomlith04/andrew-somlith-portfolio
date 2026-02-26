# Phase 2: Product Catalog - Research

**Researched:** 2026-02-25
**Domain:** Shopify product/variant management, MacBook hardware compatibility, product photography, collection structure
**Confidence:** HIGH (Shopify mechanics), MEDIUM (photography tooling), HIGH (Apple hardware dimensions)

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Product Structure & Naming**
- One product per print — 3 products total: "The Leopard", "The Python", "The Holstein"
- Fashion-forward naming style — product titles read like a fashion line, not a tech accessory catalog
- MacBook model as variant within each product (e.g., "MacBook Air 13" (M2)", "MacBook Pro 16" (M3)")
- Variant names match Apple's official naming convention — simple and recognizable
- Out-of-stock variants display as disabled with "Notify Me" email capture (not hidden)

**Pricing**
- $65.00 flat — uniform across all prints and all model variants
- No compare-at / strikethrough pricing — clean prestige pricing, no day-one discounts
- Luxury brands price within a line identically; the price IS the statement

**Photography**
- Mix approach: supplier/stock photos as base, enhanced with AI styling and cream/beige backgrounds
- 3 images per product: styled hero shot (case on MacBook in setting), flat lay on cream background, close-up texture detail
- Photography must sell the luxury positioning — this is what separates $65 from $12

**Compatibility Guide**
- Inline collapsible accordion on every product detail page, positioned below the variant selector
- Simple 2-step instructions: "Click Apple menu → About This Mac → find your model" — students won't read long guides
- No separate standalone guide page needed — keep it where the decision happens

### Claude's Discretion
- Product description tone and length (fashion copywriting voice)
- Shipping pricing approach (free shipping baked in vs separate fee)
- Hero shot backdrop style (minimalist cream vs lifestyle desk vs editorial)
- Collection page thumbnail strategy (hero reuse vs distinct flat lay)
- Variant name format for year hints (clean names vs year range suffixes)
- SKU naming convention format
- Metafield structure for compatibility data

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| PROD-01 | MacBook model variant selector on all products (M2/M3 13", M2/M3 14", M2/M3 16") | Shopify variant options support this directly; one option named "Model" with up to 8 values; 3 products × 4 variants = 12 total, well within the 2,048 limit |
| PROD-02 | "How to find your MacBook model" guide accessible from product pages | Shopify Dawn theme collapsible row block + rich text metafield is the standard pattern; content is identical across all 3 products |
| PROD-03 | Leopard print collection page with all compatible model variants | Manual Shopify collection, 1 product with 4 variants; collection URL slug: /collections/the-leopard |
| PROD-04 | Snake/python print collection page with all compatible model variants | Manual Shopify collection, 1 product with 4 variants; collection URL slug: /collections/the-python |
| PROD-05 | Cow print collection page with all compatible model variants | Manual Shopify collection, 1 product with 4 variants; collection URL slug: /collections/the-holstein |
| PROD-06 | Editorial product photography for each print in cream & beige aesthetic | Flair.ai or similar AI tool for background replacement; 3 images × 3 products = 9 images minimum; upload at 2048×2048px JPEG |
</phase_requirements>

---

## Summary

Phase 2 builds the Shopify product data layer: 3 products, 4 variants each (12 total SKUs), 3 collection pages, a compatibility guide accordion on every product page, and a 9-image photography set. The Shopify mechanics are straightforward — nothing here pushes platform limits. The variant count (12 total across 3 products) is trivially within Shopify's 2,048-per-product cap. Creating products, variants, collections, and metafields is all achievable through the Shopify Admin UI without code, though the compatibility accordion is best wired up via a metafield + Dawn theme collapsible row block to make content identical across all 3 products without repetitive editing.

The most consequential research finding is the **MacBook chassis dimension matrix**: the 13-inch Air M2 and M3 share an identical chassis (11.97 × 8.46 × 0.44 in). The 13-inch Pro M2 has a different, slightly shallower chassis (11.97 × 8.36 × 0.61 in) and was discontinued October 2023 — there is no 13-inch M3 Pro. The 14-inch Pro M2 and M3 share a chassis (12.31 × 8.71 × 0.61 in). The 16-inch Pro M2 and M3 share a chassis (14.01 × 9.77 × 0.66 in). This means cases group by screen size/line, not by chip generation — a supplier SKU for "14-inch Pro" fits both M2 and M3 customers.

**Primary recommendation:** Build products and variants through Shopify Admin UI (no code required), wire the compatibility accordion via a shared rich-text metafield definition, use Flair.ai for background-replaced photography, and install a free-tier back-in-stock app (Notify! or Appikon) to handle the "Notify Me" requirement for out-of-stock variants.

---

## Standard Stack

### Core

| Tool/Feature | Version/Tier | Purpose | Why Standard |
|---|---|---|---|
| Shopify Admin UI | Current (2025) | Create products, variants, collections, pricing | Native — no code, no API needed for 12 variants |
| Shopify Metafields (Admin) | Settings > Custom Data | Store compatibility guide content as rich-text per product | Connects to theme blocks without code |
| Dawn theme collapsible row block | Dawn (OS 2.0) | Render accordion on product page | Built-in block, wires directly to metafield |
| Notify! Back in Stock / Appikon | Free tier | Email capture on disabled out-of-stock variant | Third-party app required — Shopify native "Notify Me" only appears when inventory tracking is on and stock = 0 |

### Supporting

| Tool | Version/Tier | Purpose | When to Use |
|---|---|---|---|
| Flair.ai | Freemium | AI background replacement for product photos | When supplier photos have plain/busy backgrounds; outputs cream/beige studio aesthetic |
| Canva / Adobe Firefly | Free/paid | Compositional editing, texture close-up crops | Post-background-replacement refinement |
| Shopify product CSV import | Built-in | Bulk-create variant data if manual entry is slow | Optional — 12 variants is manageable via UI, but CSV is faster and less error-prone |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|---|---|---|
| Flair.ai | Midjourney + Photoshop | Midjourney requires manual compositing; Flair.ai uploads your actual product image and replaces background, preserving real case texture |
| Notify! (free app) | Klaviyo back-in-stock | Klaviyo back-in-stock is Phase 5 scope; for Phase 2, a lightweight free app is correct |
| Manual UI entry for variants | GraphQL productSet mutation | API is overkill for 12 variants; Admin UI or CSV import is the right tool |
| Manual collection assignment | Automated (smart) collections | Automated collections are tag-rule-driven and fragile at low SKU counts; manual is more explicit and correct for 3 products |

---

## Architecture Patterns

### Shopify Data Model for This Phase

```
Shopify Store
├── Products (3)
│   ├── "The Leopard"
│   │   ├── Option 1: "Model"
│   │   │   ├── Value: "MacBook Air 13" (M2 / M3)"     ← variant 1
│   │   │   ├── Value: "MacBook Pro 13" (M2)"           ← variant 2
│   │   │   ├── Value: "MacBook Pro 14" (M2 / M3)"     ← variant 3
│   │   │   └── Value: "MacBook Pro 16" (M2 / M3)"     ← variant 4
│   │   ├── Price: $65.00 (all variants)
│   │   ├── Images: hero, flat lay, texture (3x)
│   │   └── Metafields: compatibility_guide (rich text)
│   ├── "The Python"    ← same structure
│   └── "The Holstein"  ← same structure
│
├── Collections (3, manual)
│   ├── "The Leopard"   → /collections/the-leopard
│   ├── "The Python"    → /collections/the-python
│   └── "The Holstein"  → /collections/the-holstein
│
└── Metafield Definitions
    └── Products > custom.compatibility_guide (rich text)
        └── Used as: Dawn collapsible row block content source
```

### Pattern 1: Variant Naming — Grouping M2+M3 in One Variant

**What:** Because M2 and M3 of the same model share identical chassis dimensions, a single variant covers both generations. This halves variant count (4 vs 8) and avoids customer confusion over chip generation.

**When to use:** Always for this catalog. A customer buying a MacBook Air 13" M3 uses the same case as an M2 customer.

**Recommended variant names:**
```
"MacBook Air 13" (M2 / M3)"       → 13-inch Air, 2022–2024
"MacBook Pro 13" (M2)"            → 13-inch Pro, 2022 ONLY — discontinued Oct 2023
"MacBook Pro 14" (M2 / M3)"       → 14-inch Pro, 2023–2024
"MacBook Pro 16" (M2 / M3)"       → 16-inch Pro, 2023–2024
```

**Important:** The 13-inch Pro M2 (2022) has a different, older chassis. It is NOT compatible with Air 13" cases. It must be its own variant. There is no 13-inch Pro M3.

### Pattern 2: Metafield-Driven Compatibility Accordion

**What:** Create one metafield definition at Settings > Custom Data > Products, namespace `custom`, key `compatibility_guide`, type `rich_text`. Fill in the same 2-step guide for all 3 products. In the theme editor, add a "Collapsible row" block to the product template, set title to "How to find your MacBook model", and connect content to the `custom.compatibility_guide` metafield via "Insert dynamic source."

**Why not hardcoded text blocks:** Metafield-driven content means editing once updates all 3 products (though each product stores its own value, the source content is identical and maintained separately per product). This is the correct Dawn pattern.

### Pattern 3: Collection Page Setup

**What:** Manual collections (not automated), one per print. Products are manually assigned. Collection URL handle should match product name for brand consistency: `the-leopard`, `the-python`, `the-holstein`.

**SEO:** Collection description should include 50–150 words with keywords; title tag format: "The Leopard | FAUNA LUXE". Collection image = hero shot from product (can reuse product photo at this stage).

### Anti-Patterns to Avoid

- **Do not use automated (smart) collections:** With 3 products, there is no scaling benefit. Smart collection rules on tags are fragile and opaque — use manual assignment.
- **Do not create separate products per model:** One product per print is correct. Splitting by model would create 12 products, destroying discoverability and the collection structure.
- **Do not use multi-line text for the accordion metafield:** Multi-line text does not render HTML. Use `rich_text` type, which renders formatted content in Dawn's collapsible row block correctly.
- **Do not hide out-of-stock variants:** Per locked decision, disabled (grayed out) + "Notify Me" is required. Hidden variants make the full model range invisible, removing social proof of range breadth. Hiding also requires code; the app-based approach is cleaner.
- **Do not price variants differently:** Flat $65.00 across all variants is a locked decision. Shopify allows per-variant pricing; do not use it here.
- **Do not add compare-at pricing:** Locked decision. No strikethrough pricing.

---

## MacBook Chassis Dimension Matrix

This is the critical data underpinning PROD-01 and the variant structure. Confirmed from Apple's official tech specs pages.

| Variant Name | Models Covered | Chassis H×W×D (in) | Shared Chassis? |
|---|---|---|---|
| MacBook Air 13" (M2 / M3) | Air 13", 2022 (M2) + 2024 (M3) | 0.44 × 11.97 × 8.46 | Yes — identical |
| MacBook Pro 13" (M2) | Pro 13", 2022 only — DISCONTINUED Oct 2023 | 0.61 × 11.97 × 8.36 | N/A — unique chassis |
| MacBook Pro 14" (M2 / M3) | Pro 14", 2023 (M2) + 2023 (M3) | 0.61 × 12.31 × 8.71 | Yes — identical |
| MacBook Pro 16" (M2 / M3) | Pro 16", 2023 (M2) + 2023 (M3) | 0.66 × 14.01 × 9.77 | Yes — identical |

**Key insight for dropshipping mapping (Phase 4):** Supplier SKUs typically sell by screen size and line (Air 13", Pro 14", Pro 16"). A single supplier SKU covers both M2 and M3 customers within the same model line. The 13" Pro is a distinct, smaller-market SKU — confirm with supplier whether they stock it, as it targets 2022-era buyers only.

**Air 13" vs Pro 13" are NOT the same chassis.** Air is 8.46" deep; Pro is 8.36" deep. Different footprint. Do not combine into one variant.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---|---|---|---|
| "Notify Me" email capture on out-of-stock variant | Custom Liquid + JS form to capture email | Notify! Back in Stock or Appikon | Email delivery, list management, restock trigger logic — significant scope; free app handles all of it |
| Product photography background removal | Manual Photoshop cutout + background compositing | Flair.ai (upload real product image, AI replaces background) | Flair preserves actual case texture and pattern; Midjourney hallucinated product images would not match real product |
| Variant compatibility lookup logic | Custom metaobject relationship tables | Simple variant naming (model name IN variant title) | Customer reads the variant name and self-selects; no dynamic compatibility engine needed at this scale |
| Bulk variant creation via API | GraphQL productSet mutation + scripting | Shopify Admin UI or CSV import | 12 variants does not justify API complexity; CSV import is 10 minutes of work |

**Key insight:** At 3 products × 4 variants = 12 SKUs, this is a manual-administration-scale catalog. Every "automated" solution adds complexity without proportional benefit.

---

## Common Pitfalls

### Pitfall 1: Creating 8 Variants Instead of 4

**What goes wrong:** Planner creates separate variants for M2 and M3 of the same model (e.g., "MacBook Air 13" M2" and "MacBook Air 13" M3" as separate variants), resulting in 8 variants per product and 24 total SKUs.

**Why it happens:** Literal interpretation of requirements listing "M2/M3 13-inch Air" as two separate models.

**How to avoid:** M2 and M3 of the same model share identical chassis dimensions — they use the same physical case. Combine into one variant: "MacBook Air 13" (M2 / M3)". 4 variants per product, 12 total.

**Warning signs:** If anyone proposes 6, 8, or more variants per product, this pitfall has occurred.

---

### Pitfall 2: No 13-inch M3 Pro Exists

**What goes wrong:** Variant list includes "MacBook Pro 13" (M2 / M3)" treating the 13-inch Pro like the Air.

**Why it happens:** The M2/M3 grouping pattern applied incorrectly. Apple discontinued the 13-inch Pro in October 2023 and never released a 13-inch M3 Pro.

**How to avoid:** The 13-inch Pro variant label must read "MacBook Pro 13" (M2)" with no M3 reference. Flag as discontinued-era model.

**Warning signs:** Any variant labeled "MacBook Pro 13" M3" is incorrect.

---

### Pitfall 3: Multi-Line Text Metafield for Accordion Content

**What goes wrong:** Metafield is created as type "multi_line_text" instead of "rich_text". When wired to the Dawn collapsible row block, HTML tags render as literal text rather than formatted content.

**Why it happens:** Multi-line text appears to support long-form content; the distinction between multi-line and rich text is not obvious in the UI.

**How to avoid:** Create the metafield definition with type = "rich_text" explicitly. Source: Shopify Community threads confirm multi-line text does not render HTML in collapsible row blocks.

---

### Pitfall 4: AI-Generated Product Photos With Hallucinated Case Appearance

**What goes wrong:** Using Midjourney or similar text-to-image tools to generate product photos produces a leopard-print case that doesn't match the real product — wrong texture, wrong pattern density, wrong edge profile.

**Why it happens:** Text-to-image tools generate plausible-looking products, not photographs of the actual product.

**How to avoid:** Use Flair.ai (or equivalent product-image-specific tools) that accept an uploaded photo of the real product and replace only the background. The actual product texture is preserved. Start with the supplier's product photo as input.

---

### Pitfall 5: Shopify Native "Notify Me" Is Not What You Think

**What goes wrong:** Assuming Shopify has a built-in "Notify Me" button that appears automatically on out-of-stock variants.

**Why it happens:** Shopify does show a "Notify Me" button in some themes when a product is fully out of stock — but this behavior is theme-dependent and does not work reliably per-variant without an app.

**How to avoid:** Install a back-in-stock app (Notify!, Appikon, or similar) on a free plan. These apps inject per-variant email capture forms when a variant's inventory reaches 0. Configure Shopify to track inventory (do not enable "Continue selling when out of stock" — that prevents the notification trigger).

---

## Code Examples

### SKU Naming Convention (Claude's Discretion)

Recommended format: `FL-{PRINT}-{MODEL}` where PRINT is 2-3 chars, MODEL is 2-3 chars.

```
FL-LEO-A13   → The Leopard, Air 13" (M2/M3)
FL-LEO-P13   → The Leopard, Pro 13" (M2)
FL-LEO-P14   → The Leopard, Pro 14" (M2/M3)
FL-LEO-P16   → The Leopard, Pro 16" (M2/M3)

FL-PYT-A13   → The Python, Air 13" (M2/M3)
FL-PYT-P13   → The Python, Pro 13" (M2)
FL-PYT-P14   → The Python, Pro 14" (M2/M3)
FL-PYT-P16   → The Python, Pro 16" (M2/M3)

FL-HOL-A13   → The Holstein, Air 13" (M2/M3)
FL-HOL-P13   → The Holstein, Pro 13" (M2)
FL-HOL-P14   → The Holstein, Pro 14" (M2/M3)
FL-HOL-P16   → The Holstein, Pro 16" (M2/M3)
```

Max 10 chars, no ambiguous characters, dash-separated, human-readable. Aligns with Phase 4 dropshipping SKU mapping requirement (SHIP-02).

### Compatibility Guide Accordion Text (Rich Text Metafield Content)

```
How to find your MacBook model

1. Click the Apple menu (  ) in the top-left corner of your screen.
2. Select "About This Mac" — your model name appears at the top.

Look for: MacBook Air (13-inch, M2) or MacBook Pro (14-inch, M3 Pro), etc.

Not sure? Email us at hello@faunaluxe.com and we'll help.
```

Tone: helpful aside, not a warning. Two steps. Students are tech-literate.

### Shopify Product Tags for Collection Organization

```
Tags to apply to each product:
The Leopard:  leopard, animal-print, collection-leopard
The Python:   python, snake-print, animal-print, collection-python
The Holstein: cow-print, holstein, animal-print, collection-holstein

All products: macbook-case, luxury, fauna-luxe
```

Tags enable automated collection rules as a future fallback but manual assignment is used for Phase 2.

### Photography Workflow (Flair.ai)

```
Per product (repeat × 3):
1. Request supplier photo of the actual case product (unbranded OK)
2. Upload to Flair.ai canvas
3. Shot 1 (Hero): Set background to lifestyle desk scene — cream/beige
   Prompt: "editorial luxury product photo, MacBook case on minimalist cream desk,
   soft studio lighting, fashion editorial aesthetic, warm beige tones"
4. Shot 2 (Flat lay): Set background to cream texture/linen
   Prompt: "flat lay product photo, cream linen background, soft natural lighting,
   luxury fashion accessory"
5. Shot 3 (Texture detail): Close-crop of print texture
   Prompt: "macro product photography, animal print texture detail, cream background,
   shallow depth of field"
6. Export at maximum resolution → resize to 2048×2048px square → save as JPEG
7. Upload to Shopify product media in order: hero first (becomes thumbnail)
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|---|---|---|---|
| Max 100 variants per product | 2,048 variants per product | Shopify, April 2024 (GraphQL API) | Irrelevant for this catalog (12 total), but confirms no artificial limits |
| Manual background removal in Photoshop | AI product photography tools (Flair.ai, PhotoRoom) | 2023–2024 | Reduces photography cost from $200–500/shoot to ~$0–20/month |
| Separate "Notify Me" page | Per-variant in-page email capture | 2022–2024 (app ecosystem matured) | Keeps customer on the decision page; higher capture rate |
| 13-inch MacBook Pro (Touch Bar) | No 13-inch Pro — smallest Pro is now 14-inch | October 2023 | Variant lineup must acknowledge this; "Pro 13" M2" is a legacy variant serving 2022 buyers only |

---

## Open Questions

1. **Does the chosen supplier stock a 13-inch Pro M2 case SKU?**
   - What we know: The 13-inch Pro M2 has a different chassis from the Air 13". Cases are not cross-compatible.
   - What's unclear: Whether any dropshipping supplier stocks this as a distinct SKU. It's a 2022-era model with declining market share.
   - Recommendation: In Plan 02-01 (compatibility matrix), explicitly check supplier catalog. If not stocked, create the variant as "out of stock" with Notify Me enabled — this shows the full range exists without forcing a dead-end on customers. Revisit in Phase 4 SHIP-02.

2. **Should the 13-inch Pro M2 variant be included or omitted?**
   - What we know: REQUIREMENTS.md lists "M2/M3 13-inch Pro" — but there IS no M3 13-inch Pro.
   - What's unclear: Whether including a discontinued model's variant adds or subtracts value.
   - Recommendation: Include as one variant labeled "MacBook Pro 13" (M2, 2022)" — this serves existing owners. Mark out-of-stock if supplier doesn't stock it. This is an inventory decision, not a catalog decision.

3. **Theme being used in Phase 3: does it affect how collapsible accordion metafields are wired?**
   - What we know: Dawn theme has a native "Collapsible row" block that connects to rich_text metafields. Prestige theme (Phase 3 candidate, ~$380) may have different block structure.
   - What's unclear: Whether the Prestige theme's product page blocks support the same dynamic source connection.
   - Recommendation: In Plan 02-02/02-03, build the accordion in whatever theme is currently active (likely Dawn or the store default). Phase 3 theme migration will re-wire the metafield content to the new theme's equivalent block. Metafield content is theme-agnostic — only the display block changes.

---

## Sources

### Primary (HIGH confidence)

- Apple Support — MacBook Pro 13" M2 specs: https://support.apple.com/en-us/111869 (Width: 11.97", Depth: 8.36", Height: 0.61")
- Apple Support — MacBook Air 13" M3 specs: https://support.apple.com/en-us/118551 (Width: 11.97", Depth: 8.46", Height: 0.44")
- Apple Support — MacBook Pro 16" M3 specs: https://support.apple.com/en-us/117737 (Width: 14.01", Depth: 9.77", Height: 0.66")
- Apple compare page — MacBook Air M2 vs Pro 14" M3 (Width/Depth confirmed for Pro 14": 12.31" × 8.71")
- Shopify blog — 2,048 variants now available: https://www.shopify.com/blog/2048-variants
- Shopify dev changelog — GraphQL API 2024-04 supports 2,048 variants: https://shopify.dev/changelog/new-graphql-product-apis-that-support-up-to-2000-variants-now-available-in-2024-04
- Shopify image size guide — 2048×2048px JPEG recommended: https://www.shopify.com/blog/image-sizes

### Secondary (MEDIUM confidence)

- Multiple Shopify Community threads confirm rich_text metafield is required for HTML rendering in collapsible row blocks; multi-line text renders as plain text
- MacWorld / AppleInsider — M2 and M3 16-inch Pro share identical chassis dimensions (confirmed by Apple compare tool cross-reference)
- Shopify App Store — Notify!, Appikon, Swym offer free-tier back-in-stock apps with per-variant email capture

### Tertiary (LOW confidence)

- Flair.ai feature set confirmed via website fetch but pricing model is freemium/unconfirmed for commercial use at scale — validate free tier limits before committing
- AI photography prompt styles for luxury aesthetics sourced from aggregator blog posts; specific prompts should be tested, not assumed

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — Shopify Admin mechanics are stable, well-documented, and unchanged
- Architecture: HIGH — Variant/collection/metafield pattern is verified against official Shopify docs and community
- MacBook chassis dimensions: HIGH — pulled directly from Apple's official tech specs pages
- Photography tooling: MEDIUM — Flair.ai is real and appropriate, but prompt effectiveness requires testing
- Pitfalls: HIGH — all 5 pitfalls are grounded in confirmed technical behavior, not speculation

**Research date:** 2026-02-25
**Valid until:** 2026-08-25 (Shopify Admin UI stable; reassess if Apple releases M4 models with new chassis)
