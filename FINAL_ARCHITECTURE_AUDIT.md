# Final architecture and refinement audit

**Thai Visa Company  -  production-grade frontend, SEO, AI-search, accessibility, and launch readiness**

**Date:** May 2026  
**Build:** `npm run build` passes (14 static routes + inquiry API)  
**Refinements applied this pass:** Nav/footer 404 fixes, planned resource cards (no dead links), JSON-LD ItemList published-only, eyebrow typography (12px min), legal footer hidden until routes ship.

**Design pass:** [PREMIUM_DESIGN_REFINEMENT.md](./PREMIUM_DESIGN_REFINEMENT.md)  -  Bilt-inspired typography, spacing, flat cards, calmer hero, motion restraint.

---

## Executive summary

| Dimension | Grade | Launch-ready? |
|-----------|-------|----------------|
| Frontend architecture | **A** | Yes |
| Component reuse & consistency | **A-** | Yes |
| Premium UX / visual rhythm | **A-** | Yes |
| Semantic SEO | **B+** | Yes with content/env ops |
| AI-search readiness | **B** | Yes; corpus still thin |
| Accessibility | **B+** | Yes; minor gaps |
| Conversion / trust sequencing | **A-** | Yes |
| **Overall launch readiness** | **Conditional go (85%)** | See §10 |

The platform is **architecturally mature**, calm, and trust-oriented. Remaining gaps are **content volume**, **ops/env**, and **two routes not yet built** (`/visas` hub, `/reviews` page) - not structural frontend debt.

---

## 1. Strongest architectural strengths

### 1.1 Frontend architecture

- **Next.js 16 App Router** with thin `app/**/page.tsx` and heavy lifting in `lib/` + `components/templates/`.
- **Clear domains:** `lib/content/` (MDX registry), `lib/visas/` (visa landings), `lib/seo/` + `lib/schema/` (metadata + JSON-LD), `lib/forms/inquiry/`, `lib/airtable/`, `lib/analytics/`.
- **SSG-first:** Home, 5 visas, contact, resources index, 1 article  -  predictable performance and hosting cost.
- **Site shell:** `SiteShell` → skip link, navbar, main, footer, mobile contact bar  -  one conversion chrome everywhere.
- **Minimal client JS:** 7 client modules (navbar, accordion, FAQ item, inquiry form + success, analytics listeners, inquiry analytics hook).

### 1.2 Reusable components

- **Layout primitives:** `Container`, `Section` (CVA spacing: `default` | `compact` | `spacious`), `SectionHeading`, `PageBreadcrumbs`.
- **Conversion:** `ContactCtaGroup`, `MessagingCtaPair`, `MessagingCta`  -  single hierarchy (LINE → WhatsApp).
- **Cards:** `VisaCard`, `ResourceCard`, `ReviewCard`, `ProcessStep`  -  shared `cardSurfaceClass`.
- **Templates:** `VisaPageTemplate`, `ContactPageTemplate`, `ResourceArticlePageView`  -  pages stay thin.
- **Motion:** `SectionReveal`, `StaggerGrid`  -  CSS-only, `motion-reduce` respected.

### 1.3 Design system discipline

- **Tokens:** `styles/tokens.css` + Tailwind v4 `@theme inline`.
- **Shared styles:** `lib/section-styles.ts`  -  CTAs, eyebrows, descriptions, bands, card chrome.
- **Calm rhythm:** Alternating `sectionBandClass` used sparingly; border separators instead of heavy shadows.
- **Mobile-first:** 44px CTA heights, `mobileReadableWidthClass`, contact bar offset in CSS.

### 1.4 Semantic SEO & schema

- **`createPageMetadata`**  -  canonical, robots, OG, Twitter per route.
- **JSON-LD graphs:** Organization, LocalBusiness, WebSite, WebPage, Service, Article, FAQPage, BreadcrumbList, CollectionPage.
- **FAQ parity:** Visible accordion = `FAQPage` `mainEntity` (no schema drift).
- **Sitemap / robots:** `lib/site-routes.ts` `published` flag gates crawl URLs.
- **Internal linking:** `lib/content/related.ts`  -  scored + manual override; `filterPublishedRelatedLinks` on visa pages.

### 1.5 AI-search

- **Central copy:** `lib/seo/ai-search.ts`  -  extractable summaries, homepage at-a-glance.
- **Extractability:** `data-page-summary` on heroes; article `lead` → Article `abstract`.
- **Entity signals:** `knowsAbout`, service type, geography, contact points in LocalBusiness.

### 1.6 Conversion & trust

- **Trust-after-action heroes:** CTAs before review strip and trust bullets.
- **Reassurance line:** `ctaReassuranceLine` on `ContactCtaGroup`.
- **Homepage sequencing:** Reviews → Final CTA → FAQ (convert after social proof).
- **Visa pages:** Final CTA before FAQ.
- **Inquiry:** Short form, success + messaging CTAs, Airtable pipeline, analytics funnel.
- **CRM/docs:** `CRM_WORKFLOW_SYSTEM.md`, `INQUIRY_RESPONSE_TEMPLATES.md`, `LAUNCH_AND_GROWTH_SYSTEM.md`.

### 1.7 Accessibility (baseline)

- Landmarks, skip link, `aria-labelledby` on sections, FAQ **h3** + Radix accordion, form labels/errors/`aria-live`, focus-visible globals.
- See [ACCESSIBILITY_AUDIT.md](./ACCESSIBILITY_AUDIT.md).

---

## 2. Remaining weaknesses

### 2.1 P0  -  Launch / trust (mostly ops or content)

| Issue | Status after this pass |
|-------|------------------------|
| Nav/footer `/visas`, `/reviews` 404 | **Fixed** → `/#visa-services`, `/#reviews` |
| Planned resource cards linked to 404 | **Fixed** → “Coming soon”, no link |
| ItemList JSON-LD included planned URLs | **Fixed** → published articles only |
| Footer legal → 404 | **Fixed** → hidden until `siteRoutes.published` |
| `ctaHref.exploreVisas` → 404 | **Fixed** → `/#visa-services` |
| Production `NEXT_PUBLIC_SITE_URL`, LINE/WA, Airtable | **Ops**  -  still required |
| Privacy / terms pages | **Not built**  -  footer legal hidden |
| OG image placeholder | **Ops**  -  `public/og/default.png` |

### 2.2 P1  -  Authority & SEO depth

| Issue | Impact |
|-------|--------|
| Only **1** live resource article | Thin topical graph, weak long-tail |
| `/visas` hub not built | No dedicated discovery URL (anchors temporary) |
| Visa `relatedResources` still list STUB slugs in content TS | Filtered at render  -  **remove from content** when convenient |
| Article `meta.ts` may still reference STUB hrefs | Audit per-article `related` |
| Legal pages missing | Trust/compliance for some markets |

### 2.3 P2  -  UX / architecture polish

| Issue | Notes |
|-------|--------|
| **Hero duplication** | `Hero` vs `VisaHero` / `ContactHero` share patterns but separate components  -  acceptable; optional shared `PageHero` later |
| **Resources category titles** | Use local `groupTitleClass` vs `SectionHeading`  -  slight typography drift |
| **Navbar hash links** | `isNavLinkActive` does not highlight `/#reviews` on homepage  -  cosmetic |
| **Mobile menu focus trap** | Documented P2 in accessibility audit |
| **Geist default** | Premium but common  -  acceptable for launch |

### 2.4 Hydration risks

| Area | Risk | Assessment |
|------|------|------------|
| `suppressHydrationWarning` on `<html>` | Low | Standard for font/theme |
| Client navbar + `usePathname` | Low | No SSR/CSR content mismatch observed |
| Inquiry form | Low | Client-only on `/contact` |
| Analytics | Low | No-op without GA ID |
| FAQ accordion | Low | Radix handles IDs |

**No critical hydration blockers identified.**

---

## 3. Area-by-area audit

### 3.1 Component consistency

| Pattern | Consistency |
|---------|-------------|
| Section wrapper | **High**  -  almost all sections use `Section` + `Container` |
| Headings | **High**  -  `SectionHeading` on marketing sections; heroes custom (intentional scale) |
| CTAs | **High**  -  `ContactCtaGroup` / `MessagingCtaPair` |
| Cards | **High**  -  `cardSurfaceClass` |
| Breadcrumbs | **High**  -  `PageBreadcrumbs` on inner pages |

**Duplication (acceptable):** Visa hero vs homepage hero  -  different layout (grid visual on home); contact hero slimmer. Not worth abstracting pre-launch.

### 3.2 Spacing rhythm & typography

| Element | System |
|---------|--------|
| Section vertical | `Section` variants: 12–28 / 10–20 / 12–28 (responsive py) |
| Heading → content | `sectionContentOffsetClass` (`mt-6` → `mt-10`) |
| Body copy | `sectionDescriptionClass`  -  15px / 1.7 mobile |
| Hero H1 | ~22–32px scaled  -  one per page |
| Eyebrows | `text-xs` (12px) after refinement  -  was 11px |
| CTAs | 44px mobile, 40px sm+ |

**Section transitions:** `border-t border-border/50` and `sectionBandClass`  -  calm, not flashy. **Max ~2 bands per page**  -  followed on homepage.

**Opportunity:** Unify resources category `h2` with `SectionHeading` for identical eyebrow/title scale.

### 3.3 Metadata consistency

- Root: `rootMetadata` in layout.
- Visas: `resolveVisaPageContext` → `createPageMetadata`.
- Articles: `resolveResourceArticlePageContext`.
- Contact / resources index: dedicated content modules.
- **Homepage:** `heroLeadLine` visible vs `extractableSummary` for meta  -  good split.

**Verify at launch:** `NEXT_PUBLIC_SITE_URL` matches live domain on all canonicals.

### 3.4 Schema consistency

- Business graph once in layout.
- Per-page graphs co-located with templates.
- **Resources index:** ItemList now lists **published** articles only.
- **FAQ:** Per visa, article, homepage  -  namespaced FAQ schema titles.

**Gap:** Homepage testimonials not mirrored as `Review` nodes (aggregate on LocalBusiness only)  -  optional enhancement.

### 3.5 Content structure

- **Visa pages:** Hero → overview → requirements → process → **final CTA** → FAQ → related visas → resources → (end).
- **Homepage:** Hero → at a glance → visas → why → process → reviews → final CTA → FAQ → resources preview.
- **Articles:** Layout with TOC, MDX prose, inline FAQ, related, CTA  -  [article-layout.tsx](./components/layout/article-layout.tsx).

**Semantic clarity:** One H1 per route; section H2s; cards H3  -  per ACCESSIBILITY_AUDIT.

### 3.6 CTA consistency

| Surface | Pattern |
|---------|---------|
| Primary | LINE (`MessagingCta` primary) |
| Secondary | WhatsApp outline |
| Tertiary | Explore visas → `/#visa-services` (until hub ships) |
| Reassurance | Above button stack |
| Analytics | `data-contact-channel`, `data-analytics-*` delegated |

**Homepage final CTA:** `showExploreCta={false}`  -  reduces clutter at bottom.

### 3.7 Mobile responsiveness

- Sticky mobile contact bar (`lg:hidden`).
- Full-width CTAs on mobile; row on `sm+`.
- Contact page: messaging column before form on stack.
- Grids: 1 → 2 → 3 columns with sensible `min-w-0`.
- `overflow-x-clip` on `<main>`  -  reduces horizontal scroll.

See [RESPONSIVE_QA.md](./RESPONSIVE_QA.md) for device matrix.

### 3.8 Inquiry flow UX

- Five fields, hints, one-minute estimate on contact page.
- Validation + focus first error.
- Success: steps + LINE/WhatsApp again.
- API: `processInquirySubmission` → Airtable.
- **Friction:** No email field (by design  -  collect in chat).

### 3.9 Trust sequencing

| Location | Order |
|----------|--------|
| Hero | Offer → reassurance → CTAs → reviews/bullets |
| Final CTA | Heading → review summary → CTAs → footnote |
| Contact | Hero CTAs → form with privacy trust note → trust strip |
| Reviews section | Mid-page social proof before late FAQ |

Aligns with [CONVERSION_AUDIT.md](./CONVERSION_AUDIT.md).

### 3.10 AI-search readability

| Signal | Quality |
|--------|---------|
| First-sentence FAQ answers | Strong |
| Page summaries | Strong on home/visas |
| Article lead | Strong |
| Corpus depth | Weak (1 article) |
| `/visas` hub | Missing |
| Speakable / extra AI meta | Not used (OK) |

---

## 4. SEO & AI-search risk register

| Risk | Severity | Mitigation |
|------|----------|------------|
| Crawl 404 from nav | Was **High** | Fixed anchors |
| Schema 404 URLs in ItemList | Was **High** | Fixed published filter |
| Thin content | **Medium** | CONTENT_ROADMAP P1 articles |
| Duplicate intent (visa H1 vs guide) | **Low** | Roadmap cannibalization table |
| Weak OG previews | **Medium** | Ship real OG assets |
| Stub links in visa content files | **Low** | Runtime filter; clean source data |

**No spam patterns** (keyword stuffing, hidden text, link schemes).

---

## 5. Accessibility risk register

| Risk | Severity | Notes |
|------|----------|-------|
| 11px eyebrows | Was **Low** | Bumped to 12px (`text-xs`) |
| Broken links | Was **High** | Fixed |
| Menu focus trap | **Low** | P2 |
| Placeholder contrast | **Low** | Exempt |
| Form on contact only | **Low** | Strong patterns when used |

**Recommendation:** Run axe + keyboard pass on `/`, `/visas/retirement`, `/contact`, one article before launch.

---

## 6. Highest-impact refinement opportunities

### Before launch (days)

1. Set production env: `NEXT_PUBLIC_SITE_URL`, LINE, WhatsApp, Airtable, GA4, Google reviews URL.
2. Ship real **OG image** (`NEXT_PUBLIC_OG_IMAGE_PATH` or default asset).
3. Publish **`how-long-does-thai-visa-take`**  -  unblocks visa related links in content source.
4. Manual QA: inquiry test lead + LINE click in GA4 Realtime.
5. Privacy + terms pages **or** keep legal hidden (current).

### First month (weeks)

6. **`/visas` hub**  -  CollectionPage + visa cards; restore `ctaHref.exploreVisas` to `/visas`.
7. **`/reviews`** page or permanent redirect to `/#reviews` / Google reviews URL.
8. Publish DTV what-is guide; add `PageAtAGlance` on visa landings.
9. Unify resources category headings with `SectionHeading`.
10. Extract shared **PageHero** primitive (optional  -  reduces hero drift).

### Quarter (months)

11. Branded OG per visa + article.
12. Homepage optional `Review` schema nodes matching UI quotes.
13. Navbar focus trap + reduced-motion audit on real devices.
14. Consider email as optional inquiry field for async-only users.

---

## 7. Launch readiness level

### Rating: **Conditional go  -  85%**

```text
█████████████████░░░  85%
```

| Gate | Weight | Status |
|------|--------|--------|
| Build & types | 15% | ✅ Pass |
| Core routes live | 15% | ✅ Home, visas, contact, resources, 1 article |
| Conversion paths | 20% | ✅ LINE/WA/form; ops env required |
| SEO technical | 15% | ✅ Metadata, schema, sitemap; OG + URL ops |
| No critical 404s in chrome | 15% | ✅ Fixed this audit |
| Content authority | 10% | ⚠️ Minimal corpus |
| Legal / compliance | 5% | ⚠️ Privacy/terms deferred |
| Accessibility spot-check | 5% | ⚠️ Manual pass recommended |

### Verdict

**Safe to launch** as a credible visa marketing + lead capture site when:

- Production contact URLs and CRM are configured.
- Canonical domain is set.
- Team accepts **single-article** SEO depth at day one and executes [LAUNCH_AND_GROWTH_SYSTEM.md](./LAUNCH_AND_GROWTH_SYSTEM.md) Foundation phase immediately.

**Not yet a “full authority” site**  -  that requires P1 content and `/visas` hub per [CONTENT_ROADMAP.md](./CONTENT_ROADMAP.md).

---

## 8. Refinements applied (this audit pass)

| Change | Files |
|--------|--------|
| Nav/footer explore → homepage anchors | `lib/navigation.ts`, `lib/cta.ts`, `components/layout/footer.tsx` |
| Planned resources: coming soon, no href | `ResourceCard`, `ResourceArticle.status`, planned meta |
| JSON-LD ItemList published only | `getPublishedResourceArticles`, `resources-index-json-ld.tsx` |
| Footer legal hidden if route unpublished | `FooterLegalBar` + `siteRoutes` |
| Eyebrow min 12px | `lib/section-styles.ts` |
| Footer resource link to 404 timeline guide removed | `lib/navigation.ts` |

---

## 9. Related documentation index

| Topic | Document |
|-------|----------|
| Production gates | [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) |
| Prior readiness | [PRODUCTION_READINESS.md](./PRODUCTION_READINESS.md) |
| Launch & growth ops | [LAUNCH_AND_GROWTH_SYSTEM.md](./LAUNCH_AND_GROWTH_SYSTEM.md) |
| Conversion | [CONVERSION_AUDIT.md](./CONVERSION_AUDIT.md) |
| AI-search | [AI_SEARCH_OPTIMIZATION.md](./AI_SEARCH_OPTIMIZATION.md) |
| Content plan | [CONTENT_ROADMAP.md](./CONTENT_ROADMAP.md) |
| Components | [COMPONENT_ARCHITECTURE.md](./COMPONENT_ARCHITECTURE.md) |
| Accessibility | [ACCESSIBILITY_AUDIT.md](./ACCESSIBILITY_AUDIT.md) |
| Performance | [LIGHTHOUSE_OPTIMIZATION.md](./LIGHTHOUSE_OPTIMIZATION.md) |

---

*Re-run this audit after `/visas` hub ships, 3+ articles are live, and production env is verified.*
