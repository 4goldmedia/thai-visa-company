# Lighthouse optimization review

Code-based audit for performance, accessibility, SEO, and best practices. Run Lighthouse in production (Vercel preview or live domain) for scored baselines — local CLI requires Chrome.

## Summary

| Category | Assessment | Notes |
|----------|------------|--------|
| **Performance** | Strong foundation | SSG, minimal JS, CSS motion; hero LCP tuned |
| **Accessibility** | Good, minor gaps | Landmarks, skip link, touch targets; FAQ headings |
| **SEO** | Strong metadata | Per-route metadata, JSON-LD, sitemap; fix broken links |
| **Best practices** | Good | HTTPS assumed at deploy; env for OG URL |

---

## Performance

### Strengths

- **Mostly Server Components** — only 4 client modules: `navbar`, `accordion`, `faq-item`, `inquiry-form` (form not on pages yet).
- **CSS-only motion** — `SectionReveal` uses `animation-timeline: view()`; no GSAP/framer.
- **`prefers-reduced-motion`** — global shorten in `styles/base.css`.
- **Fonts** — Geist Sans `display: swap`, `adjustFontFallback`, single preloaded family.
- **Below-fold deferral** — `content-visibility: auto` on `main > section:not(#hero)` with `contain-intrinsic-size`.
- **Static generation** — homepage, visas, articles pre-rendered.
- **`next/image` ready** — `OptimizedImage` + AVIF/WebP in `next.config.ts` (no content images yet).

### Risks & fixes

| Issue | Impact | Priority |
|-------|--------|----------|
| Hero copy had `motion-fade-up-mount` (opacity 0 → 1) | Delays LCP text paint | **Fixed** — copy column no longer animated |
| Hero visual still uses mount animation | Low — `aria-hidden`, not LCP | P3 |
| `backdrop-blur` on navbar + mobile contact bar | GPU on scroll | P3 — acceptable for premium feel |
| Geist Mono loaded, rarely used | Extra font bytes | P2 — remove from layout if unused |
| FAQ accordion client JS on every FAQ section | Small hydration cost | P2 — optional native `<details>` variant |
| No `NEXT_PUBLIC_OG_IMAGE_PATH` | No social image bytes; metadata gap | P1 — add 1200×630 asset |

### Core Web Vitals (expected)

- **LCP** — Text hero (no image LCP); keep h1/description free of opacity-0 animations.
- **CLS** — Hero visual uses fixed `h-[9.5rem]` on mobile; contact bar offset via `--mobile-contact-bar-height`; font fallback adjusted.
- **INP** — Low; navbar menu + accordions only interactive islands.

---

## Accessibility

### Strengths

- Skip link → `#main-content`
- `<main>`, `<section aria-labelledby>`, `<article>` on guides
- 44px+ touch targets on CTAs and form controls
- Focus-visible styles in `base.css`
- `GoogleReviewSummary` / review groups with descriptive labels
- Mobile nav: `aria-expanded`, Escape, focus on open

### Gaps

| Issue | Priority |
|-------|----------|
| FAQ questions in `sr-only` `<h3>` — visible text only in trigger | P1 |
| Broken nav/footer links (`/visas`, `/contact`, `/reviews`, planned articles) | P0 |
| `resources` search input disabled without clear “coming soon” context | P3 |
| Inquiry form not wired — N/A until contact page ships | — |

---

## SEO

### Strengths

- `createPageMetadata` — canonical, robots, OG, Twitter
- Article `publishedTime` / `modifiedTime`
- JSON-LD: Organization, LocalBusiness, WebSite, Article, FAQ, Breadcrumb
- `robots.ts` + dynamic `sitemap.xml`
- Semantic headings (single h1 per page)

### Gaps

| Issue | Priority |
|-------|----------|
| Unpublished URLs linked in nav/footer/schema ItemList | P0 |
| Global `siteKeywords` merged on every page | P2 |
| Thin content surface (one live article) | P1 content |
| `NEXT_PUBLIC_SITE_URL` must be production origin at deploy | P0 ops |

---

## Best practices

- External CTAs use `rel="noopener noreferrer"`
- No mixed content (env-dependent)
- TypeScript strict build
- `formatDetection` disabled for auto-linking emails/phones in copy

---

## Client component map

| Module | Required? | Notes |
|--------|-----------|--------|
| `navbar.tsx` | Yes | Menu state, scroll, `data-mobile-nav-open` |
| `accordion.tsx` | Yes* | Radix — only if keeping accordion FAQ |
| `faq-item.tsx` | Yes* | Wraps accordion |
| `inquiry-form.tsx` | Yes when used | Load only on contact route via dynamic import |

\* FAQ could be server-rendered with `<details>` to drop ~2 client chunks (optional).

---

## Image optimization checklist (when adding media)

1. Use `OptimizedImage` from `components/ui/optimized-image.tsx`
2. Set `priority` only for true LCP image
3. Always pass `alt` and `sizes`
4. Prefer WebP/AVIF via `next/image`
5. Reserve width/height or aspect-ratio to avoid CLS

---

## Verification

```bash
npm run build && npm run start
# Chrome DevTools → Lighthouse (mobile + desktop)
# Or PageSpeed Insights on production URL
```

Track in `LAUNCH_CHECKLIST.md` under Performance.
