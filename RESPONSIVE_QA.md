# Responsive QA audit

Breakpoint convention (Tailwind): **default** &lt;640px mobile · **sm** 640+ · **md** 768+ · **lg** 1024+ desktop nav · **xl** 1280+ wide.

Verify at: **375**, **390**, **768**, **1024**, **1280** px widths.

## Summary

| Area | Assessment |
|------|------------|
| Mobile (&lt;640) | **Strong**  -  single column, full-width CTAs, contact bar |
| Tablet (640–1023) | **Good**  -  2-col grids; mobile nav until `lg` |
| Desktop (1024+) | **Strong**  -  bento visa grid, article TOC sidebar |
| Spacing rhythm | **Consistent**  -  shared section/container tokens |
| Typography | **Mobile-first scale**  -  15px body, stepped headings |
| CTA visibility | **Strong**  -  sticky bar + full-width mobile buttons |
| Sticky chrome | **Coordinated**  -  nav, bar offset, scroll padding |

---

## Layout system

| Token | Mobile | Desktop |
|-------|--------|---------|
| Container padding | `px-4` | `px-6` → `px-8` → `px-10` |
| Section `default` | `py-12` | up to `py-24` xl |
| Section `compact` | `py-10` | up to `py-20` xl |
| Section `spacious` (hero) | `py-12` | up to `py-28` xl |
| Content width | `max-w-[720px]` prose | `max-w-[1280px]` sections |

Calm rhythm  -  not oversized on mobile (heroes use `py-12`, not `py-20+`).

---

## Page-by-page

### Homepage

| Breakpoint | Layout |
|------------|--------|
| Mobile | Hero copy → visual → full-width CTAs → trust block |
| Tablet | Same stack; hero visual `sm:aspect-[4/3]` |
| Desktop `lg+` | 2-col hero; visa bento `lg:grid-cols-6` |

**Visa grid:** 1 col → `sm:2` → `lg:6` with 4th card `lg:col-start-2` (intentional bento).

**Process:** 1 col list → `sm:2` grid cards.

**Reviews:** 1 → `sm:2` → `lg:3` cards; rating summary stacks above cards on mobile (`flex-col`), inline header on `sm+`.

### Visa pages

| Section | Mobile | `lg+` |
|---------|--------|-------|
| Breadcrumbs | Wrap, truncate | Full width in container |
| Hero | Single column, same as homepage hero | `max-w-2xl` copy |
| Overview | Stacked panels, dividers | `content` container 720px |
| Requirements | Stacked 3 panels | **3-column grid** + card chrome |
| Process / FAQ / Resources | Standard section grids |  -  |
| Final CTA | `content` width, full-width CTAs | Inline CTAs `sm+` |

### Resources index

- Hero: `content` container, readable `max-w-2xl`.
- Toolbar + category grids: 1 col cards, consistent gaps.

### Articles

| Breakpoint | Behavior |
|------------|----------|
| Mobile | Header → **TOC** → body → related → CTA (**fixed**) |
| `lg+` | TOC sticky left (`top-28`), prose right |

**Fix applied:** TOC now appears **before** body on mobile (was below entire article).

---

## Navigation

| Width | Chrome |
|-------|--------|
| &lt;`lg` | Logo · LINE (+ WhatsApp ≥480px) · menu · **bottom contact bar** |
| ≥`lg` | Logo · center nav · LINE + WhatsApp · no bottom bar |

- Menu panel: full-width dropdown, 44px link targets.
- Bar hidden when `data-mobile-nav-open` (no duplicate CTAs).
- **Note:** WhatsApp in header hidden &lt;480px; bottom bar always shows both  -  acceptable.

---

## CTAs

| Pattern | Mobile | `sm+` |
|---------|--------|-------|
| `ContactCtaGroup` | Stacked full width `h-11` | Row, auto width |
| Tertiary “Explore visas” | Full width centered | Inline link |
| Mobile contact bar | 50/50 LINE + WhatsApp | `lg:hidden` |
| Navbar mobile | Compact “LINE” label |  -  |

CTAs remain visible without scrolling on every view via bottom bar (mobile).

---

## Sticky components

| Component | Behavior |
|-----------|----------|
| Navbar | `sticky top-0 z-50`; `h-14` / `lg:h-16` |
| Mobile contact bar | `fixed bottom` `z-40`; `lg:hidden` |
| Article TOC | `lg:sticky lg:top-28` only |
| Shell offset | `max-lg:pb-[calc(var(--mobile-contact-bar-height)+safe-area)]` |

Scroll padding: top (nav), bottom (contact bar on mobile).

---

## Typography scaling

| Element | Mobile | Scales to |
|---------|--------|-----------|
| Hero h1 | `1.375rem` | `2rem` lg |
| Section h2 | `text-lg` | `md:text-2xl` / `lg:text-[1.75rem]` |
| Body | `15px` / `leading-[1.7]` | `text-base` sm+ |
| Article h1 | `1.5rem` | `1.75rem` md |

`text-balance` / `text-pretty` on headlines and leads  -  no overflow on narrow screens.

---

## Spacing consistency

Shared tokens in `lib/section-styles.ts`:

- `sectionContentOffsetClass`  -  `mt-6 sm:mt-8 md:mt-10`
- `sectionHeadingGapClass`  -  eyebrow → title gaps
- `cardPaddingClass`  -  `p-4 sm:p-5`
- `ctaStackClass`  -  vertical mobile, horizontal `sm+`

**Bands:** `sectionBandClass` on final CTA  -  max two per page.

---

## Issues & recommendations

| Priority | Issue | Status |
|----------|-------|--------|
| P1 | Article TOC below body on mobile | **Fixed** |
| P2 | Nav WhatsApp only ≥480px in header  -  rely on bottom bar &lt;480 | Documented |
| P2 | Tablet 640–1023 uses hamburger (no center nav until `lg`) | Intentional |
| P2 | Visa overview single column on tablet (720px content) | OK  -  readability |
| P3 | 5th visa card alone on row at `sm` 2-col | Acceptable |
| P0 | Broken footer/nav links (layout unrelated) | Open |

---

## Manual test checklist

```text
[ ] 375px: no horizontal scroll; CTAs tappable; bar not covering footer links
[ ] 768px: visa 2-col grid; reviews 2-col; menu usable
[ ] 1024px: desktop nav appears; bottom bar hidden
[ ] 1280px: container centered; visa bento aligned
[ ] Article: TOC above article on phone; sticky TOC on desktop
[ ] Rotate portrait ↔ landscape on iOS  -  safe areas respected
```

---

## Related docs

- `DESIGN_SYSTEM.md`  -  spacing and container intent
- `ACCESSIBILITY_AUDIT.md`  -  touch targets overlap
- `LIGHTHOUSE_OPTIMIZATION.md`  -  CLS / content-visibility
- `LAUNCH_CHECKLIST.md`  -  pre-launch verification
