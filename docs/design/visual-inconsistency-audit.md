# Visual inconsistency audit (post Phase 2 tokens)

**Date:** 2026-05-21  
**Scope:** Full frontend scan after Inter Tight + semantic tokens. No section redesigns  -  infrastructure and normalization only.

**Canonical direction:** [brand-system.md](./brand-system.md) · [ui-principles.md](./ui-principles.md)

---

## Executive summary

Phase 2 fixed the largest drift (serif stack, card shadows, reference radius on several shells). The interface is **closer to premium**, but still reads as **assembled from multiple micro-systems** rather than one rhythm.

| Perception | Cause (high level) |
|------------|-------------------|
| **Uneven** | Three typography dialects: tokenized heroes/sections, pixel-based cards/forms, article-specific 16/17px prose |
| **Noisy** | Too many muted opacity steps (`/35`, `/65`, `/75`, `/80`, `/90`) and competing list markers (olive dot, foreground dot, Lucide checks) |
| **Too dense (mobile)** | Process list, FAQ triggers, footer legal, form stacks with mixed `gap-5`/`gap-6`/`gap-10` |
| **Too empty (desktop)** | Resources index category stacks (`gap-14` → `gap-20`) vs homepage grids (`gap-4`–`gap-5`) |
| **Not fully premium** | CTA height inverts on desktop (navbar `h-9` vs section `h-10`); shadcn `Button` + `rounded-lg` link overlays parallel to token CTAs; residual `shadow-sm` on skip-link |

**Overall:** Structure and architecture are sound. The next wins are **small, systematic normalizations**  -  shared text utilities, grid gap tokens, card interior rhythm, CTA scale, and muted text tiers.

---

## 1. Spacing inconsistencies

### What exists

| Token / pattern | Value | Used by |
|-----------------|-------|---------|
| `--space-section-y*` | 3.5rem / 4rem / 5.5rem | [`section.tsx`](../components/layout/section.tsx) |
| `--space-heading-offset*` | 1.75 → 2.5rem | [`sectionContentOffsetClass`](../lib/section-styles.ts) |
| `--space-card-padding*` | 1.25 / 1.5rem | `cardSurfaceClass` |
| `--space-grid-gap` | 1.5rem | Process grid (sm+) only |

### Drift (hardcoded)

| Location | Values | Issue |
|----------|--------|-------|
| [`footer.tsx`](../components/layout/footer.tsx) | `py-12 sm:py-14 lg:py-16` | Outside section token scale |
| [`article-layout.tsx`](../components/layout/article-layout.tsx) | `py-10 sm:py-12 md:py-14` | Article bands ≠ `Section` spacing |
| [`resources-category-groups.tsx`](../components/sections/resources-category-groups.tsx) | `gap-14 sm:gap-16 md:gap-20` | Much looser than homepage `gap-3.5`–`gap-5` |
| [`contact-inquiry-section.tsx`](../components/sections/contact-inquiry-section.tsx) | `gap-10 lg:gap-12 xl:gap-14` | Hero uses `gap-10 lg:gap-14 xl:gap-16`  -  close but not shared |
| [`page-hero.tsx`](../components/layout/page-hero.tsx) | `mt-4`, `mt-7 sm:mt-8`, `mt-4 sm:mt-5` | Hero vertical rhythm not tokenized |
| Card grids | `gap-3.5`, `gap-4`, `gap-5` | Visa, reviews, trust grids disagree |
| [`form-styles.ts`](../lib/form-styles.ts) | `formCardClass` `p-5 sm:p-6 md:p-7` | Third padding tier vs `--space-card-padding-md` |

### Feels

- Homepage: **mostly calm** section bands.
- Resources index: **over-spaced** between categories (empty luxury without content density).
- Contact / forms: **dense** vertical stacks on mobile.

### Proposed refinements

1. Add `--space-grid-gap-sm: 0.875rem` (14px) and `--space-grid-gap: 1.25rem` (20px)  -  map `gap-3.5` / `gap-4` / `gap-5` explicitly.
2. Add `--space-stack-section: 2.5rem` for resources category groups (replace `gap-14`…`gap-20` with `gap-[var(--space-stack-section)]` stepped at one token).
3. Export `footerBandClass` / `articleBandClass` using `--space-section-y-sm` or `compact` variant.
4. Tokenize hero offsets: `--space-hero-eyebrow-to-title`, `--space-hero-title-to-lead`, `--space-hero-lead-to-cta`.

**Priority:** P1 (grid gaps + resources category gap) · P2 (footer/article bands)

---

## 2. Typography inconsistencies

### Tokenized (good)

- [`pageTitleClass`](../lib/section-styles.ts), [`section-heading.tsx`](../components/layout/section-heading.tsx), [`typography.ts`](../lib/design/typography.ts)  -  Inter Tight + CSS scale vars.

### Still pixel / Tailwind scale (drift)

| Area | Pattern | Files |
|------|---------|-------|
| **Card titles** | `text-[15px] font-medium` | [`visa-card`](../components/cards/visa-card.tsx), [`trust-card`](../components/cards/trust-card.tsx), [`resource-card`](../components/cards/resource-card.tsx), [`process-step`](../components/cards/process-step.tsx) |
| **Card body** | `text-[14px]` + custom `leading-[1.65]` | Same cards + [`review-card`](../components/cards/review-card.tsx) |
| **Section-adjacent headings** | `text-lg font-semibold` (Geist, not display) | [`related-resources`](../components/sections/related-resources.tsx), [`contact-inquiry`](../components/sections/contact-inquiry-section.tsx) |
| **Forms** | `text-lg` / `text-xl` title, `text-[13px]` labels | [`form-styles.ts`](../lib/form-styles.ts) |
| **Article** | `16px` / `17px` lead and body (separate rhythm) | [`article-styles.ts`](../lib/article-styles.ts) |
| **Footer / meta** | `text-[12px]`, `text-[13px]`, `text-[11px]` | [`footer.tsx`](../components/layout/footer.tsx), [`google-review-summary`](../components/ui/google-review-summary.tsx) |

### Hierarchy drift

- **Display layer** (Inter Tight): heroes + `SectionHeading` only.
- **Card H3s** use Geist 15px medium  -  visually closer to body than to section titles (display 18–24px). Cards feel **utility-dense**, sections feel **architectural** → uneven premium.
- **Related resources / contact sidebar** use sans `text-lg semibold`  -  a third headline style between section display and card titles.

### Proposed refinements

1. Add to `lib/design/typography.ts`:
   - `cardTitleClass` → `text-[length:var(--text-body)] font-medium` (or new `--text-card-title`)
   - `cardBodyClass` → `text-[length:var(--text-small)]` + `leading-[var(--leading-body)]`
   - `metaTextClass` → `text-[length:var(--text-small)] text-muted-foreground`
   - `captionTextClass` → `text-[length:var(--text-meta)]`
2. Migrate **Related resources** + **contact inquiry** headings to `sectionTitleClass` (or smaller `sectionTitleSmClass`).
3. Align `formTitleClass` with `sectionTitleClass`; labels/hints → `formLabelClass` using `--text-small` only.
4. Article: keep separate measure/rhythm but map lead/body to `--text-body` / `--text-body-md` (drop 16/17px literals).

**Priority:** P0 (card + meta utilities) · P1 (related-resources, contact, forms) · P2 (article)

---

## 3. Border radius inconsistencies

### Token intent

- `--radius` (6px)  -  cards, CTAs, inputs
- `--radius-sm` (4px)  -  chips, small controls
- `--radius-md` (8px)  -  media / optional

### Drift

| Class | Where | Note |
|-------|-------|------|
| `rounded-[var(--radius)]` | Cards, CTAs, forms | Correct |
| `rounded-md` | Footer links, review badge, process step badge, resource “planned” chip | 4px tier  -  OK if documented |
| `rounded-lg` | [`button.tsx`](../components/ui/button.tsx), skip-link, visa card **overlay** `Link`, article blockquote, resources toolbar | Theme `rounded-lg` = `--radius` (6px) but **named differently** from cards |
| `rounded-full` | Form success icons, step markers | Intentional |

### Feels

- Subtle **mismatch**: visa card surface is 6px but focus overlay `rounded-lg`  -  same size, different token path.
- shadcn Button uses `rounded-lg` + `active:translate-y-px`  -  slightly more “app UI” than marketing CTAs.

### Proposed refinements

1. Document radius tiers in `brand-system.md` with component mapping table.
2. Replace marketing-adjacent `rounded-lg` with `rounded-[var(--radius)]` on skip-link, visa overlay link, blockquote.
3. Leave shadcn `Button` as-is for admin-like controls OR add `buttonVariants.marketing` reusing `ctaButtonPrimaryClass`.
4. Standardize chips/badges on `rounded-[var(--radius-sm)]`.

**Priority:** P2 (cosmetic alignment) · P1 (visa link overlay + skip-link)

---

## 4. Surface / background inconsistencies

### Band treatments (3 variants)

| Pattern | File |
|---------|------|
| `sectionBandClass` → `bg-[var(--surface-band)]` | Why choose us, final CTA, article CTA |
| `page-at-a-glance` → same token | OK |
| `contact-trust-strip` → `bg-muted/[0.03]` | Different recipe |

### Card / panel surfaces

| Pattern | Issue |
|---------|--------|
| `cardSurfaceClass` | Standard elevated card |
| `lg:bg-card/30` | [`visa-requirements`](../components/sections/visa-requirements.tsx)  -  translucent panel |
| `bg-muted/5` dashed | Placeholders  -  OK |
| `formCardClass` | Extra `md:p-7` padding, same border language |
| `review-card` | Custom layout  -  verify if uses `cardSurfaceClass` |

### Shadows (residual)

| Location | Issue |
|----------|--------|
| [`skip-link.tsx`](../components/layout/skip-link.tsx) | `shadow-sm`  -  violates border-first philosophy |

### Feels

- Alternating bands are **calm** but trust strip reads **flatter/washer** than olive-tint bands → slight rhythm break on contact page.
- **Noisy** when band + at-a-glance + olive bullets appear in close scroll sequence on homepage.

### Proposed refinements

1. Unify band backgrounds: `contact-trust-strip` → `bg-[var(--surface-band)]` or new `--surface-band-subtle`.
2. Remove `skip-link` shadow; use `border` only.
3. Add `panelMutedClass` for `bg-card/30` panels (visa requirements)  -  one semantic token.
4. Enforce **max 2 band sections per page** in comments/checklist (already in brand-system  -  audit homepage order).

**Priority:** P1 (trust strip + skip-link) · P2 (panel token)

---

## 5. CTA inconsistencies

### Systems in parallel

| System | Mobile height | Desktop height | Radius | Font |
|--------|---------------|----------------|--------|------|
| `ctaButtonPrimaryClass` | 44px (`h-11`) | 40px (`h-10`) | `--radius` | `--text-body` |
| `navbarCtaPrimaryClass` | 40px | **36px (`h-9`)** | inherits | `text-sm` |
| `mobileContactBar` | 40px | 40px | inherits | `text-[14px]` |
| `form` submit | `h-11` | `sm:text-sm` | `--radius` | `text-[15px]` |
| shadcn `Button` default | 32px (`h-8`) |  -  | `rounded-lg` | `text-sm` |

### Feels

- **Navbar CTAs smaller than in-page CTAs on desktop**  -  undermines premium confidence at the exact conversion point (header).
- Mobile bar at `h-10` while forms push `h-11`  -  minor thumb-target inconsistency.
- Tertiary links vs `Button` ghost variant  -  duplicate patterns.

### Proposed refinements

1. Add `ctaSizeClasses` in `section-styles.ts`: `marketing` (current), `compact` (navbar  -  but use **min-h-10** not h-9 on sm+).
2. Point `navbarCta*` and `mobileContactBar*` at shared scale; only width/flex differ.
3. Form primary submit → extend `ctaButtonPrimaryClass` (already partially duplicated in `form-styles`).
4. Document: shadcn `Button` for **UI chrome only** (accordion, dialogs); marketing CTAs use `ctaButton*`.

**Priority:** P0 (navbar/desktop CTA height) · P1 (mobile bar + form submit unification)

---

## 6. Container width inconsistencies

### Defined

| Token / class | Width |
|---------------|-------|
| `Container` default | `max-w-[1280px]` |
| `Container` content | `max-w-[720px]` |
| `mobileReadableWidthClass` | `32rem` (~512px) |
| `sectionDescriptionClass` | inherits `max-w-[32rem]` |
| Section titles | `max-w-2xl` (672px) |

### Ad hoc prose widths

`36rem`, `34rem`, `28rem`, `max-w-md`, `max-w-lg`, `max-w-xl` scattered across hero, article, footer, forms.

### Feels

- **Not broken**  -  intentional narrow prose.
- **Uneven** when hero lead is 36rem and section description 32rem on same page.

### Proposed refinements

1. Add CSS vars: `--width-prose` (32rem), `--width-prose-wide` (36rem), `--width-page` (1280px).
2. Map `mobileReadableWidthClass` → `max-w-[var(--width-prose)]`.
3. Hero lead `max-w-[var(--width-prose-wide)]` only where needed.
4. Avoid new arbitrary max-widths in components.

**Priority:** P2 (document + gradual migration)

---

## 7. Card rhythm inconsistencies

### Shared shell

Most cards use `cardSurfaceClass` (padding tokens, border, no shadow).

### Interior rhythm diverges

| Card | Title → body | Body → footer/CTA |
|------|--------------|-------------------|
| Visa | `mt-2` | `mt-4` / `mt-5` block |
| Trust | `mt-1.5` |  -  |
| Resource | `mt-2.5` / `mt-2` | `mt-3.5` |
| Process step | `mt-1.5` |  -  |
| Review | custom header spacing |  -  |

### Grid alignment

- Visa / trust: `gap-3.5` → `gap-4`
- Reviews: `gap-3.5` → `gap-5` at lg
- Process: mobile stacked divider vs sm card grid  -  intentional but **dense on mobile**

### Proposed refinements

1. Add `cardTitleClass` + `cardBodyClass` + `cardFooterClass` with unified `mt-[var(--space-stack)]` / `mt-[var(--space-stack-md)]`.
2. Create `cardGridClass` = `grid gap-[var(--space-grid-gap-sm)] sm:gap-[var(--space-grid-gap)]`.
3. Apply to visa-types, why-choose-us, reviews, related-resources grids.
4. Process mobile: increase to `px-[var(--space-card-padding)]` for parity with card padding.

**Priority:** P0 (card interior classes + grid class) · P1 (process mobile padding)

---

## 8. Mobile spacing issues

| Issue | Detail |
|-------|--------|
| Navbar CTA | `sm:h-9`  -  below 40px comfortable tap |
| FAQ accordion | `py-3` / `sm:py-4` with `text-[15px]`  -  OK but tight next to `min-h-11` triggers |
| Process steps | `px-3.5 py-3.5` inside shell  -  feels cramped vs `p-5` cards |
| Footer links | `min-h-8`  -  acceptable for secondary, but `text-[12px]` borderline legibility |
| Form stack | `gap-5 sm:gap-6` vs inquiry section `gap-10`  -  large jump between sidebar and form |
| Horizontal padding | Container `px-4` consistent  -  good |

### Proposed refinements

1. Never go below `min-h-10` for primary actions (navbar fix).
2. Process mobile list items: use card padding tokens.
3. Cap minimum secondary text at `--text-small` (13px), not 12px, for footer legal.

**Priority:** P0 (navbar) · P1 (process + footer text)

---

## 9. Visual hierarchy drift

### Strong

- Page heroes (display + clear lead + CTA stack).
- `SectionHeading` eyebrow → title → description.

### Weak / competing

- Card grids scan as **equal weight** to section titles (15px medium vs 18–24px display).
- **Google review** sizes: `text-2xl`/`text-3xl` rating in hero/footer  -  competes with H1 on small screens.
- **At a glance** uses `foreground/90` body  -  louder than muted section descriptions.
- **Related resources** custom heading  -  doesn’t match section display layer.

### Proposed refinements

1. Card titles stay Geist but use semibold only for title; keep descriptions clearly `muted-foreground`.
2. Limit review summary `size="sm"` in heroes; reserve `md` for reviews section only.
3. At-a-glance list → `text-muted-foreground` or `text-foreground/80` max.
4. Replace one-off section headings with `SectionHeading` everywhere possible (related-resources, contact-inquiry).

**Priority:** P1 (related-resources + at-a-glance tone) · P2 (review scale rules)

---

## 10. Icon sizing inconsistency

| Context | Size | Color |
|---------|------|-------|
| Hero trust | `3.5` | olive |
| Trust card | `4` → `1.125rem` | foreground/35 |
| Visa benefit | `3.5` | foreground/35 |
| List bullets | `1` dot | olive or foreground/25 |
| Process step badge | `7`/`8` box | muted bg |
| Arrows (CTA) | `3.5` | inherited |
| Menu | `5` | foreground |

### Feels

- **Noisy:** olive (hero) vs gray (cards) trust icon colors.
- Trust card icon **grows** at sm while others stay fixed.

### Proposed refinements

1. Add `iconSmClass` (`size-3.5`), `iconMdClass` (`size-4`), `iconNavClass` (`size-5`).
2. Standardize decorative icons to `text-muted-foreground/50` (not olive) except hero trust list.
3. Remove trust card `sm:size-[1.125rem]`  -  stay `size-4`.

**Priority:** P1 (icon tokens + trust card color/size)

---

## 11. Muted text hierarchy problems

### Tiers in use (too many)

| Tier | Examples |
|------|----------|
| `text-muted-foreground` | Body secondary |
| `text-muted-foreground/90` | Article TOC, at-a-glance |
| `text-muted-foreground/80` |  -  |
| `text-muted-foreground/75` | Links |
| `text-muted-foreground/70` |  -  |
| `text-muted-foreground/65` | Placeholders |
| `text-foreground/90` | Benefit lines |
| `text-foreground/80` | Card links |
| `text-foreground/75` | Text links |
| `text-foreground/35` | Icons |

### Feels

- **Noisy**  -  opacity used as a second color system instead of `--text-secondary` / `--text-tertiary`.
- **Insufficiently premium**  -  premium UIs use 2–3 muted tiers, not 8+.

### Proposed refinements

1. Use semantic tokens only:
   - Primary: `text-foreground`
   - Secondary: `text-[var(--text-secondary)]` or `text-muted-foreground`
   - Tertiary: `text-[var(--text-tertiary)]` for meta/captions
2. Deprecate `foreground/XX` except `foreground/90` for one “emphasized muted” if needed.
3. Add ESLint comment or grep checklist in PR template  -  no new `/XX` opacities without audit.

**Priority:** P0 (define 3 tiers + migrate cards/links) · P1 (article/footer)

---

## Normalization roadmap (no section redesign)

### Batch A  -  P0 (highest leverage, smallest diff)

| # | Action | Files |
|---|--------|-------|
| A1 | `cardTitleClass`, `cardBodyClass`, `cardGridClass` in `typography.ts` / `section-styles` | All `components/cards/*`, visa-types, reviews, why-choose-us |
| A2 | Navbar CTA `min-h-10` on all breakpoints | `lib/cta.ts` |
| A3 | Muted text: cards → tertiary for descriptions; links → secondary | visa-card, resource-card, textLinkClass |
| A4 | Remove skip-link shadow | `skip-link.tsx` |

### Batch B  -  P1

| # | Action | Files |
|---|--------|-------|
| B1 | `--space-grid-gap-sm` + apply to grids | `tokens.css`, section grids |
| B2 | `related-resources` + `contact-inquiry` → `SectionHeading` or shared title classes | section files |
| B3 | `formTitleClass` / labels → type tokens | `form-styles.ts` |
| B4 | Unify band: `contact-trust-strip` → `surface-band` | contact-trust-strip |
| B5 | Icon size/color utilities | trust-card, visa-card, section-styles |
| B6 | Resources category `gap` → `--space-stack-section` | resources-category-groups |

### Batch C  -  P2

| # | Action | Files |
|---|--------|-------|
| C1 | Footer/article vertical padding → section tokens | footer, article-layout |
| C2 | Prose width CSS vars | container, hero, article |
| C3 | Radius documentation + `rounded-lg` → token on misc surfaces | button overlays, blockquote |
| C4 | Article body 16/17px → `--text-body-md` | article-styles |

---

## Component standardization opportunities

| Primitive | Today | Target |
|-----------|-------|--------|
| **Marketing CTA** | `ctaButton*Class` | Single source; navbar/mobile/form extend variants |
| **Section header** | `SectionHeading` + 3 one-offs | Always `SectionHeading` or `sectionTitle*Class` |
| **Card** | Shared shell, divergent interior | `Card` compound with title/body/footer slots (optional thin wrapper) |
| **Grid** | 4 gap values | `cardGridClass` |
| **Band section** | 2 bg recipes | `sectionBandClass` only |
| **Meta / legal** | 11–13px mix | `metaTextClass`, `legalTextClass` |
| **Placeholder** | `cardPlaceholderClass` | Already unified  -  reuse everywhere |

Optional thin file: `lib/design/surface.ts` exporting `cardSurfaceClass`, `cardShellClass`, `sectionBandClass` re-exports for discoverability.

---

## Token reuse improvements

| Gap | Recommendation |
|-----|----------------|
| Grid gaps not in `tokens.ts` | Add `gridGapSm`, `gridGap` to `lib/design/tokens.ts` |
| Prose widths | Add `--width-prose`, `--width-prose-wide` to `tokens.css` |
| Muted text | Use `--text-secondary` / `--text-tertiary` in Tailwind via `@theme` color aliases |
| Form padding | `formCardClass` → use `--space-card-padding` only (drop `md:p-7`) |
| Hero spacing | 4 vars under `--space-hero-*` |

---

## What not to change (per constraints)

- Homepage section order and composition
- Hero split layout / media frame structure
- Process mobile→desktop layout pattern (only padding/tokens)
- Visa card overlay link pattern (only radius token)
- Animation / motion system

---

## Suggested verification checklist (after Batch A)

- [ ] All marketing CTAs ≥ 40px height at `sm+`
- [ ] Card titles/bodies use CSS length vars only
- [ ] No new `shadow-*` on static surfaces
- [ ] Max 3 muted text treatments visible in any one viewport
- [ ] Grid gaps use `--space-grid-gap*` only
- [ ] `font-editorial` / Newsreader absent (already done)

---

## Related docs

- [design-audit.md](./design-audit.md)  -  Phase 2 completion status
- [phase-2-token-audit.md](./phase-2-token-audit.md)  -  Pre-implementation token notes
