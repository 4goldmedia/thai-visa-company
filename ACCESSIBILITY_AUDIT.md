# Accessibility audit

WCAG 2.2–oriented review of the marketing site (code + patterns). Validate with axe DevTools, VoiceOver/NVDA, and keyboard-only passes on production.

## Summary

| Area | Assessment |
|------|------------|
| Semantic structure | **Strong**  -  landmarks, lists, articles |
| Heading hierarchy | **Strong**  -  one h1 per route; FAQ h3 fixed |
| Color contrast | **Good**  -  calm palette; watch 11px eyebrows |
| Keyboard | **Good**  -  skip link, focus rings, accordion keys (Radix) |
| ARIA | **Good**  -  sections labelled; minor menu trap gap |
| Forms | **Strong** (when mounted)  -  labels, errors, `aria-invalid` |
| Mobile | **Strong**  -  44px targets, contact bar, readable type |

---

## 1. Heading hierarchy

### Per route

| Page | h1 | Outline |
|------|-----|---------|
| Homepage | Hero title | h2 sections → h3 cards / process steps |
| Visa pages | Visa hero title | h2 sections → h3 requirement/process panels |
| Resources index | Index hero | h2 categories → h3 cards |
| Articles | Article title | h2 MDX sections → h3 subsections; h2 TOC / FAQ / related |

### Rules followed

- `SectionHeading` defaults to **h2** for in-page sections.
- Page **h1** only in hero / article header (not duplicated).
- Process steps use **h3** with `sr-only` “Step N:” prefix.
- FAQ items use **visible h3** wrapping accordion triggers (Radix button inside heading).

### Watch

- Article pages have multiple **h2** siblings (TOC, body, FAQ, related)  -  valid and expected.
- Do not add extra h1s in section components.

---

## 2. Color contrast

### Tokens (`styles/tokens.css`)

| Pair | Approx. | WCAG AA |
|------|---------|---------|
| `foreground` on `background` | ~15:1 | Pass AAA |
| `muted-foreground` on `background` | ~4.6:1 | Pass AA (normal text) |
| `primary` on `primary-foreground` (buttons) | High | Pass |
| `destructive` on light tint | Form errors | Pass |

### Borderline

| Element | Risk | Mitigation |
|---------|------|------------|
| Eyebrows `text-[11px]` + `muted-foreground` | Small text near 4.5:1 | Prefer 12px+ or slightly darker muted on eyebrows |
| `text-foreground/35` icons | Decorative only | `aria-hidden` on trust icons ✓ |
| `text-muted-foreground/70` placeholders | Placeholder not required to meet contrast | OK |
| Disabled search `opacity-70` | Disabled controls exempt | `aria-disabled` + hint text ✓ |

Dark tokens exist (`.dark`) but theme toggle is not shipped  -  no user-facing dark mode yet.

---

## 3. Keyboard navigation

### Global

- **Skip link** → `#main-content` (`components/layout/skip-link.tsx`).
- **`main` `tabIndex={-1}`**  -  focus target after skip.
- **Tab order**  -  logical: header → main → footer → mobile bar (fixed, end of DOM).

### Navbar

- Desktop nav links focusable.
- Menu button: `aria-expanded`, `aria-controls`, **Escape** closes.
- Open menu: focus moves to first link; body scroll locked.
- **Gap (P2):** No focus trap in mobile panel  -  focus can tab behind overlay. Consider `focus-trap` when menu is open.

### FAQ accordion

- Radix: **Arrow** keys between items, **Enter/Space** toggle, **Home/End** (per Radix version).
- Triggers are native `<button>` inside **h3**.

### Mobile contact bar

- LINE / WhatsApp are real links in tab order.
- Hidden when `data-mobile-nav-open` (avoids duplicate paths).

### Breadcrumbs

- Current page is **text** (`aria-current="page"`), not a link  -  correct.

---

## 4. Focus states

### Global (`styles/base.css`)

```css
:focus-visible { outline-2 outline-offset-2 outline-ring }
```

### Components

- Buttons (`components/ui/button.tsx`)  -  `focus-visible:ring-3`.
- Nav, footer links, form controls, breadcrumb links  -  ring or outline.
- Accordion triggers  -  `focus-visible:ring-3`.
- Google review link wrapper  -  ring on focus.

### Avoid

- Do not use `outline-none` without a visible `:focus-visible` substitute.

---

## 5. Semantic HTML

| Pattern | Usage |
|---------|--------|
| `<header>` | Navbar |
| `<main id="main-content">` | All primary templates |
| `<section aria-labelledby>` | Section component |
| `<article>` | Review cards, process steps, resource cards, article layout |
| `<nav aria-label>` | Main, mobile, footer groups, TOC, breadcrumbs |
| `<footer aria-label>` | Site footer |
| `<ol>` / `<ul>` | Process, visa lists, breadcrumbs |
| `<blockquote>` | Review card quotes |

### Decorative

- Hero visual cards: `aria-hidden` ✓
- Trust/step icons: `aria-hidden` with text labels ✓

---

## 6. ARIA labeling

### Strong patterns

- Section `aria-labelledby` → stable ids in `lib/section-ids.ts`.
- Lists with `aria-label` when title isn’t on the list (reviews, visa types, process).
- `GoogleReviewSummary`  -  `role="group"` + descriptive `aria-label`.
- External CTAs  -  `aria-label` where visible text is shortened (“LINE”).
- FAQ `FAQAccordion`  -  `aria-labelledby` → section h2.

### Fixed / improved

- FAQ questions: visible **h3** (no duplicate `sr-only` + `aria-labelledby`).
- Resources search: `aria-disabled="true"` + hint id.

### Gaps

| Issue | Priority |
|-------|----------|
| Broken nav links (404)  -  confusing for all users | P0 |
| Filter chips use `<span aria-disabled>`  -  not in tab order (OK for inactive) |  -  |
| Mobile menu not announced as `role="dialog"`  -  disclosure pattern acceptable | P3 |

---

## 7. Button accessibility

- All actions use `<button>` or `<a href>`.
- `Button asChild` + anchor for LINE/WhatsApp  -  correct.
- Menu toggle: `type="button"`, `aria-expanded`, label toggles Open/Close.
- No `div onClick` buttons found.
- Touch targets ≥ **44px** on primary CTAs (`h-11 min-h-11`).

---

## 8. Form accessibility (`InquiryForm`)

Ready when mounted on contact route:

| Requirement | Status |
|-------------|--------|
| `<label htmlFor>` | `FormField` |
| `aria-describedby` hint/error | Yes |
| `aria-invalid` on error | Yes |
| `role="alert"` on errors | Yes |
| `noValidate` + programmatic errors | Yes |
| Success `role="status"` + `aria-live="polite"` | Yes |
| Required fields | `required` on name + select |

Recommend: `autocomplete` already set; add visible required legend if more required fields are added.

---

## 9. Mobile accessibility

- **Readable type**  -  15px body on mobile, line-height 1.65–1.7.
- **No horizontal scroll**  -  `overflow-x-clip` on main.
- **Sticky bar**  -  does not cover focusable footer content (padding offset).
- **Zoom**  -  no `user-scalable=no` in viewport ✓
- **Spacing**  -  thumb-friendly gaps in forms and CTAs.

---

## Verification checklist

```text
[ ] Tab through homepage: skip link → nav → main → all CTAs → footer → mobile bar
[ ] Operate FAQ with keyboard only
[ ] Open/close mobile menu with Escape
[ ] VoiceOver: landmarks and headings list make sense
[ ] axe DevTools: 0 serious issues on /, /visas/retirement, /resources/[slug]
[ ] 200% zoom: no clipped CTAs or overlapping text
```

---

## Prioritized fixes

| Priority | Item | Status |
|----------|------|--------|
| P0 | Ship or remove 404 nav/footer links | Open |
| P1 | FAQ visible heading structure | **Done** (h3 + button) |
| P1 | Disabled search `aria-disabled` + hint | **Done** |
| P2 | Mobile menu focus trap | Open |
| P2 | Slightly darken eyebrow text if audit flags contrast | Open |
| P3 | `role="dialog"` + `aria-modal` on mobile menu (optional) | Open |

---

## Related docs

- `LIGHTHOUSE_OPTIMIZATION.md`  -  performance overlap (LCP, CLS)
- `LAUNCH_CHECKLIST.md`  -  pre-launch verification
- `DESIGN_SYSTEM.md`  -  typography and spacing intent
