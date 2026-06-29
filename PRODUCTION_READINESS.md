# Production readiness audit

Final cross-cutting review of the Thailand visa marketing platform before launch.  
**Build status:** `npm run build` passes (SSG for home, 5 visa routes, resources index, 1 article).

**Verdict:** **Conditional go**  -  core experience is production-grade in architecture, UX, and code quality; **launch blockers** are incomplete routes, broken internal links, and unfinished conversion/analytics wiring - not visual polish.

> **Updated audit (May 2026):** [FINAL_ARCHITECTURE_AUDIT.md](./FINAL_ARCHITECTURE_AUDIT.md)  -  nav/404 fixes, planned resource cards, JSON-LD filter; **85% conditional go**.

---

## Executive scorecard

| Area | Score | Launch-ready? |
|------|-------|----------------|
| Frontend architecture | **A** | Yes |
| Visual consistency | **A-** | Yes |
| Component reuse | **A** | Yes |
| Semantic quality | **A-** | Yes |
| Responsive UX | **A-** | Yes (see `RESPONSIVE_QA.md`) |
| Accessibility | **B+** | Mostly (FAQ headings fixed) |
| SEO structure | **B** | Partial  -  metadata strong, links/schema gaps |
| Metadata quality | **B+** | Needs prod env + OG image |
| Performance readiness | **A-** | Yes (see `LIGHTHOUSE_OPTIMIZATION.md`) |
| Conversion UX | **B-** | LINE/WA strong; form/contact gaps |
| Trust perception | **A-** | Reviews integrated; legal pages missing |

---

## Live surface area

| Route | Status |
|-------|--------|
| `/` | Live |
| `/visas/retirement` | Live |
| `/visas/dtv`, `/elite`, `/business`, `/education` | Live |
| `/resources` | Live |
| `/blog/how-to-get-thailand-retirement-visa` | Redirects to `/visas/retirement` |
| `/sitemap.xml`, `/robots.txt` | Live |

**Not built (still linked in UI):** `/visas`, `/contact`, `/reviews`, `/privacy`, `/terms`, 2 planned resource articles.

---

## 1. Frontend architecture

### Strengths

- **Next.js 16 App Router**  -  SSG, thin `app/**/page.tsx`, logic in `lib/` + `components/templates/`.
- **Content system**  -  `content/articles/<collection>/<slug>/{meta.ts,content.mdx}` + explicit `lib/content/registry.ts`.
- **Visa pages**  -  `lib/visas/content/*` + `VisaPageTemplate` + section IDs.
- **Schema**  -  typed builders in `lib/schema/*`, co-located JSON-LD with UI (`FaqJsonLd`, `GoogleReviewSummary`, breadcrumbs).
- **Site shell**  -  `SiteShell`: skip link, navbar, main+footer, mobile contact bar.
- **Minimal client JS**  -  navbar, accordion/FAQ, inquiry form (unused on pages).

### Docs (architecture)

- `lib/CONTENT_ARCHITECTURE.md`, `lib/RESOURCES_ARCHITECTURE.md`, `lib/VISA_PAGE_ARCHITECTURE.md`
- `lib/SCHEMA_ARCHITECTURE.md`, `COMPONENT_ARCHITECTURE.md`, `CONVERSION_INFRASTRUCTURE.md`

### Gaps

| Gap | Priority |
|-----|----------|
| `InquiryForm` built but **no `/contact` page** | P0 for form conversion |
| Analytics docs exist; **not mounted in `app/layout.tsx`** | P1 (`ANALYTICS_SETUP.md`) |
| README still create-next-app boilerplate | P3 |

**Assessment:** Scalable and intentional - ready to grow content via registry + MDX without refactors.

---

## 2. Accessibility

See **`ACCESSIBILITY_AUDIT.md`**.

### Ready

- Landmarks, skip link, focus-visible globals, 44px CTAs, form field patterns, reduced motion, FAQ **visible h3** accordions, article TOC order on mobile.

### Remaining

| Item | Priority |
|------|----------|
| Broken nav/footer links (404) | P0 |
| Mobile menu focus trap | P2 |
| 11px eyebrow contrast (borderline) | P2 |

---

## 3. SEO structure

### Strengths

- Per-route `createPageMetadata`  -  canonical, robots, OG, Twitter.
- Article metadata  -  `publishedTime`, `modifiedTime`, tags.
- **JSON-LD:** Organization, LocalBusiness, WebSite, WebPage, Service, Article, FAQPage, BreadcrumbList, CollectionPage.
- **Sitemap** merges `siteRoutes` (published) + MDX paths from registry.
- **`robots.ts`**  -  disallow non-prod indexing pattern; production allow.
- MDX `rehype-slug`, breadcrumbs, internal linking strategy documented.

### Blockers & gaps

| Issue | Impact | Priority |
|-------|--------|----------|
| Nav/footer/visa related links → **404** | Crawl errors, trust | **P0** |
| `getResourceArticles()` includes **unpublished** cards → `ItemList` JSON-LD lists 404 URLs | Schema trust | **P0** |
| Only **1** live article | Topical authority | P1 |
| `NEXT_PUBLIC_SITE_URL` must be production origin | Canonicals | **P0 ops** |
| `NEXT_PUBLIC_OG_IMAGE_PATH` unset → weak social previews | Sharing | P1 |
| `/visas` hub missing; `ctaHref.exploreVisas` → 404 | Conversion + crawl | P0 |

---

## 4. Semantic quality

### Strengths

- One **h1** per route; sections **h2** via `SectionHeading`; panels **h3**.
- `<main>`, `<article>`, `<section aria-labelledby>`, `<nav aria-label>`.
- FAQ answers match `FAQPage` schema (single source).
- Article **lead** outside MDX for extractable summaries; calm prose styles.

### AI-search / clarity

- Direct definitions, lists, steps in MDX; visa TS content scannable.
- Avoids keyword-stuffed headings and hidden FAQ text.

---

## 5. Responsive UX

See **`RESPONSIVE_QA.md`**.

- Mobile-first typography (15px body), consistent section spacing, full-width CTAs, sticky contact bar with safe-area offset.
- Hero 1-col → `lg` 2-col; visa bento at `lg`; requirements 3-col at `lg`.
- Article TOC **before** body on mobile (fixed).

**No critical layout breakage** identified in code review.

---

## 6. Conversion UX

See **`CONVERSION_INFRASTRUCTURE.md`**.

### Working

- **LINE first, WhatsApp second**  -  navbar, hero, final CTA, footer, **mobile contact bar**.
- `ContactCtaGroup` reused across homepage, visa, resources, articles.
- `GoogleReviewSummary` on hero, reviews, final CTA, visa hero.
- Low-friction inquiry architecture (`lib/forms/inquiry/*`, Airtable mapping stub).

### Gaps

| Gap | Priority |
|-----|----------|
| No **contact page** with `InquiryForm` | P0 |
| Airtable/env not wired for real lead capture | P1 |
| `exploreVisas` → `/visas` (404) | P0 |
| Disabled resources search (OK if hint clear) |  -  |
| Analytics events not firing | P1 |

**Trust + CTA rhythm** feel calm and premium - not aggressive funnel UI.

---

## 7. Visual consistency

### System

- **Tokens**  -  `styles/tokens.css` warm neutrals; shadcn radix-nova.
- **Shared classes**  -  `lib/section-styles.ts`, `lib/form-styles.ts`, `lib/article-styles.ts`.
- **Cards**  -  `cardSurfaceClass`, consistent radius, subtle borders (no heavy shadows).
- **Motion**  -  CSS-only; compositor-friendly; reduced-motion respected.

### Avoids AI noise

- No gradient overload, glassmorphism stacks, or pill buttons.
- Editorial measure (~36rem articles), restrained eyebrows, calm muted bands.

**Minor:** Geist Mono loaded but unused - optional font trim (`LIGHTHOUSE_OPTIMIZATION.md`).

---

## 8. Component reuse

| Pattern | Implementation |
|---------|----------------|
| Page sections | `components/sections/*` + `Section` / `Container` / `SectionHeading` |
| Visa pages | `VisaPageTemplate` + content TS |
| Articles | `ResourceArticleTemplate` + `ArticleLayout` |
| CTAs | `ContactCtaGroup`, `lib/cta.ts` labels |
| Trust | `GoogleReviewSummary` |
| FAQ | `FaqSection`, `ArticleInlineFaq` + `FAQItem` |
| SEO | `components/seo/*` + `lib/schema/*` |
| Motion | `SectionReveal` (server-safe CSS) |

**Low duplication**  -  visa hero delegates to `GoogleReviewSummary`; reviews section uses shared summary.

---

## 9. Metadata quality

| Route | Title / description | Canonical | OG |
|-------|---------------------|-----------|-----|
| Home | `homeMetadata` | `/` | Root + page |
| Visas | From `visa.seo` | Per path | website type |
| Resources index | `createPageMetadata` | `/resources` | Yes |
| Articles | `buildResourceArticleMetadata` | Per path | article type + dates |

**Launch env checklist:**

```bash
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
NEXT_PUBLIC_OG_IMAGE_PATH=/images/og/default.jpg  # 1200×630
NEXT_PUBLIC_LINE_URL=...
NEXT_PUBLIC_WHATSAPP_URL=...
NEXT_PUBLIC_GOOGLE_REVIEWS_URL=...
# Optional: GA, Airtable, contact email/phone
```

---

## 10. Performance readiness

See **`LIGHTHOUSE_OPTIMIZATION.md`**.

- SSG, minimal hydration, `next/font` swap, `content-visibility` below fold.
- Hero copy not opacity-animated (LCP-friendly).
- `OptimizedImage` ready; no heavy image LCP yet.
- Contact bar CLS mitigated via CSS variable offset.

**Run Lighthouse on production URL** before sign-off (CLI needs Chrome locally).

---

## Launch blockers (P0)

Must resolve **one of** remove-link or ship-page for each:

1. **`/visas`**  -  nav, footer, `ctaHref.exploreVisas`, homepage tertiary CTA  
2. **`/contact`**  -  nav, footer (mount `InquiryForm` here)  
3. **`/reviews`**  -  nav, footer  
4. **Planned articles**  -  remove from index, footer, visa `relatedResources`, JSON-LD `ItemList` until MDX exists  
5. **`/privacy`, `/terms`**  -  footer legal links  
6. **Production `NEXT_PUBLIC_SITE_URL`**

---

## Recommended launch path

### Phase A  -  Minimum viable launch (1–2 days)

1. Ship thin pages: `/visas` (visa grid), `/contact` (form + CTAs), `/privacy`, `/terms` (prose).  
2. Remove unpublished article **links** everywhere; fix `ResourcesIndexJsonLd` to published-only.  
3. Point `ctaHref.exploreVisas` to `/visas` or homepage `#visa-services`.  
4. Set env vars; deploy; verify sitemap in Search Console (`SEARCH_CONSOLE_SETUP.md`).  
5. Wire GA if ready (`ANALYTICS_SETUP.md`).

### Phase B  -  Post-launch (week 1–2)

1. Publish 2+ resource articles; register in `registry.ts`.  
2. Airtable + inquiry server action.  
3. `/reviews` redirect to Google or dedicated page.  
4. Mobile menu focus trap; OG image per article.

---

## Pre-launch verification

Use **`LAUNCH_CHECKLIST.md`** plus:

- `ACCESSIBILITY_AUDIT.md`
- `RESPONSIVE_QA.md`
- `LIGHTHOUSE_OPTIMIZATION.md`
- `SEARCH_CONSOLE_SETUP.md`
- `ANALYTICS_SETUP.md`

```bash
npm run build && npm run start
# Manual: all nav/footer links, form submit, LINE/WA on device, 375px + 1280px layouts
```

---

## Summary

The platform **feels calm, modern, and trustworthy** in code - premium spacing, reusable sections, strong visa/article templates, and disciplined schema. It is **architecturally production-grade** but **operationally not fully launch-complete** until broken links and missing hub/contact/legal routes are resolved. Fixing P0 items moves the site from a polished demo to a **trustworthy production marketing system**.
