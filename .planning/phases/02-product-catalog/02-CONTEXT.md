# Phase 2: Product Catalog - Context

**Gathered:** 2026-02-25
**Status:** Ready for planning

<domain>
## Phase Boundary

All 12+ product variants exist in Shopify with correct naming, pricing, variant structure, and collection pages. This is the data foundation that theme styling (Phase 3) and dropshipping mapping (Phase 4) both depend on. No theme customization, no supplier integration — just the catalog data, photography, and collection structure.

</domain>

<decisions>
## Implementation Decisions

### Product Structure & Naming
- One product per print — 3 products total: "The Leopard", "The Python", "The Holstein"
- Fashion-forward naming style — product titles read like a fashion line, not a tech accessory catalog
- MacBook model as variant within each product (e.g., "MacBook Air 13" (M2)", "MacBook Pro 16" (M3)")
- Variant names match Apple's official naming convention — simple and recognizable
- Out-of-stock variants display as disabled with "Notify Me" email capture (not hidden)

### Pricing
- $65.00 flat — uniform across all prints and all model variants
- No compare-at / strikethrough pricing — clean prestige pricing, no day-one discounts
- Luxury brands price within a line identically; the price IS the statement

### Photography
- Mix approach: supplier/stock photos as base, enhanced with AI styling and cream/beige backgrounds
- 3 images per product: styled hero shot (case on MacBook in setting), flat lay on cream background, close-up texture detail
- Photography must sell the luxury positioning — this is what separates $65 from $12

### Compatibility Guide
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

</decisions>

<specifics>
## Specific Ideas

- Product names should feel like named pieces in a fashion collection — "The Leopard", "The Python", "The Holstein" — not "Leopard Print MacBook Case"
- The 3-image set (hero, flat lay, texture) should be enough to sell at this stage — more images can come in Phase 3 theme buildout
- The compatibility accordion should feel like a helpful aside, not a warning — students are tech-literate enough for a quick 2-step check
- "Notify Me" on out-of-stock variants captures demand data and shows the full product range exists

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-product-catalog*
*Context gathered: 2026-02-25*
