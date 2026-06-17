# Phase 2  -  Token audit (pre-implementation)

**Date:** 2026-05-21

## What already exists

| Layer | Location | Status |
|-------|----------|--------|
| Brand palette | `styles/tokens.css` | Ivory, charcoal, stone, olive OKLCH  -  solid foundation |
| shadcn semantic colors | `tokens.css` → `app/globals.css` `@theme` | background, foreground, card, primary, muted, border, ring mapped |
| Section spacing | `--space-section-y*` | Used by `components/layout/section.tsx` |
| Radius base | `--radius: 0.375rem` + Tailwind `--radius-sm`…`3xl` multipliers in `@theme` | Good; components bypass with `rounded-xl` |
| Type rhythm | `--leading-*`, `--tracking-heading` | Present; `--tracking-editorial` serif-era naming |
| Fonts in layout | Geist Sans + Geist Mono + **Newsreader** | Drift from target |
| Shared UI classes | `lib/section-styles.ts` | Centralized CTAs, cards, headings  -  card shadows violate Phase 2 shadow rules |
| Hero/media | `styles/editorial.css` | Frames OK; class names imply editorial stack |

## What needs consolidation

1. **Typography**  -  Replace `--font-editorial` / Newsreader with `--font-display` / Inter Tight; rename tracking tokens; add `--text-*` scale variables.
2. **Shadows**  -  Replace ad-hoc `shadow-[...]` with `--shadow-layer` (sticky chrome only); remove card resting/hover shadows.
3. **Radius**  -  Standardize components on `rounded-[var(--radius)]` or theme `rounded-lg` (maps to `--radius`).
4. **Spacing**  -  Tie card padding and grid gaps to `--space-card-*` / `--space-grid-*`; align one-off section `py-*` to section tokens where safe.
5. **Semantic aliases**  -  Add `--surface-*`, `--text-*`, `--border-subtle`, `--cta-*` documenting hierarchy without new colors.

## Semantic tokens to add (Phase 2)

- Fonts: `--font-display`, `--font-sans`, `--font-mono`
- Type scale: `--text-display-*`, `--text-section-title-*`, `--text-body`, `--text-small`, `--text-meta`
- Surfaces: `--surface-base`, `--surface-elevated`, `--surface-muted`, `--surface-band`
- Text: `--text-primary`, `--text-secondary`, `--text-tertiary`
- Borders: `--border-default`, `--border-subtle`
- Shadows: `--shadow-none`, `--shadow-layer`
- Spacing: `--space-card-padding*`, `--space-grid-gap*`, refined `--space-section-y*`

## Visual inconsistency hotspots

| Area | Issue |
|------|--------|
| `app/layout.tsx` | Newsreader loaded |
| `lib/section-styles.ts` | `font-editorial`, card shadows |
| `section-heading.tsx`, `resources-category-groups.tsx` | Serif stack classes |
| `process.tsx`, `faq-item.tsx`, `navbar.tsx`, etc. | `rounded-xl` vs token radius |
| `mobile-contact-bar-styles.ts` | Heavy shadow + backdrop blur |
| `page-at-a-glance.tsx`, `article-layout.tsx`, `footer.tsx` | Hardcoded vertical padding |
| Arbitrary `text-[13px]` / `text-[14px]` | Fragmented scale (partially addressed via CSS vars in section-styles) |

## Out of scope (unchanged)

- Homepage section order and composition
- Component architecture / routing / SEO content systems
- New animation systems
