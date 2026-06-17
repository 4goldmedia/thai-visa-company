# AI-search optimization report

Last pass: centralized copy in `lib/seo/ai-search.ts`, schema and heading improvements, FAQ answer tightening.

## What changed

| Area | Improvement |
|------|-------------|
| **Homepage** | Topic-first `h1`, extractable summary, `PageAtAGlance`, WebPage + WebSite JSON-LD |
| **Metadata** | Homepage title/description aligned with extractable summary |
| **FAQ (all)** | Direct-answer opening sentences; schema names/descriptions; `h3` triggers (accordion) |
| **Articles** | Unique FAQ section ids per slug; FAQ + Article schema use `lead` as description |
| **Visa pages** | FAQ schema descriptions; hero overview marked `data-page-summary` |
| **Contact** | WebPage + ContactPoint JSON-LD |
| **Entity** | `reviewCount` numeric in LocalBusiness schema; `knowsAbout` unchanged |

## Strongest AI-search strengths

1. **Structured data depth**  -  Site-wide Organization/LocalBusiness, per-page WebPage/Service/Article, FAQPage beside visible Q&A, BreadcrumbList on articles and visas.
2. **FAQ parity**  -  Visible accordion content matches FAQPage JSON-LD (`mainEntity` Question/Answer nodes).
3. **Intent-aligned visa pages**  -  Each visa `h1` matches search intent (e.g. “Thailand Retirement Visa”); WebPage + Service graphs per route.
4. **Article extractability**  -  `lead` maps to Article `abstract` in JSON-LD; TOC + semantic `h2`/`h3` in MDX prose styles.
5. **Entity clarity**  -  `platformBusinessProfile.knowsAbout`, service type, geography, contact points (LINE/WhatsApp), internal linking taxonomy in `lib/content/related.ts`.
6. **Internal linking**  -  Scored related articles/visas; manual curation overrides; topical clusters - not random links.
7. **Homepage topical signal**  -  Primary heading and summary state *what* the business does before brand tagline.

## Remaining semantic weaknesses

1. **OG image**  -  `public/og/default.png` still placeholder; weak social/AI preview cards until a real asset ships.
2. **Single published article**  -  Limited cross-link and corpus depth for resource guides; ItemList and related-content graphs are thin.
3. **Reviews**  -  Homepage review UI not mirrored as Review nodes on the homepage graph (only aggregate on LocalBusiness).
4. **`/visas` hub**  -  Unpublished; visa discovery relies on homepage section + direct URLs.
5. **Planned resource URLs**  -  Some related links point at guides not yet published (404 risk if surfaced in schema/lists).
6. **No `speakable` / extended meta**  -  Relying on JSON-LD + visible copy; no separate speakable markup.
7. **Contact telephone**  -  Placeholder in site config may weaken trust signals until production number is set.

## Opportunities for future AI-search dominance

1. **Publish 3–5 core guides**  -  Retirement, DTV, timelines, extensions; each with FAQ, visa cross-links, and Article schema.
2. **Ship `/visas` hub**  -  CollectionPage + ItemList of all five visa services with stable descriptions.
3. **Homepage Review schema**  -  Optional `Review` nodes aligned with visible testimonials (same copy as UI).
4. **FAQ `about` linking**  -  Wire FAQPage `about` to WebPage `@id` in combined graphs where multiple blocks share one URL.
5. **Branded OG images**  -  Per visa and per article OG art for richer citations in ChatGPT/Gemini/Perplexity previews.
6. **“At a glance” on visa pages**  -  Reuse `PageAtAGlance` with visa-specific bullets (eligibility one-liner, who it is for, typical timeline).
7. **Author / expertise**  -  Optional `author` and `reviewedBy` on articles when editorial process is defined.
8. **Keep answers short first**  -  Continue leading FAQ and section intros with a direct sentence, then context (current pattern).

## Architecture reference

- Copy & summaries: `lib/seo/ai-search.ts`
- Metadata: `lib/seo/helpers.ts`
- Schema: `lib/seo/schema.ts`, `lib/schema/*`
- Internal links: `lib/content/related.ts`
- Strategy doc: `lib/schema/INTERNAL_LINKING_STRATEGY.md`
