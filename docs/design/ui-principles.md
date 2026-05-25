# UI principles

Operational rules for building and refining Thai Visa Company interfaces. Canonical brand context: [brand-system.md](./brand-system.md).

---

## Whitespace as luxury

- Treat vertical rhythm as a primary design tool — not leftover space
- Use [`Section`](../../components/layout/section.tsx) spacing tokens (`--space-section-y*`) instead of ad-hoc `py-*` on marketing pages
- Maintain consistent offset between heading blocks and content (`sectionContentOffsetClass`)
- When content feels cramped, remove elements before reducing padding
- Prose and descriptions: cap width (~65ch) for comfortable reading on large screens

**Target section feel:** breathable on mobile (`3rem+` bands), expansive on desktop (`5rem` bands where appropriate).

---

## Restraint over decoration

- No gradient-heavy sections or decorative background patterns
- No ornamental dividers, badges, or icon clusters without informational purpose
- Olive accent: focus rings, subtle trust tint, selection — not full-width color blocks
- Prefer **one strong visual idea per section** (e.g. a photograph OR a structured grid — not both competing)
- Buttons: solid charcoal primary, bordered secondary — no pill shapes, no glow

---

## Shadow discipline

Mirror [brand-system.md — Shadow philosophy](./brand-system.md#shadow-philosophy):

Use borders, spacing, and tonal separation before shadows.

Shadows should be nearly imperceptible and only used to clarify layering or interaction states — never as decorative depth.

- Default cards: border + background contrast, **no resting shadow**
- Hover: prefer border darkening or background shift — not shadow escalation on static cards
- Sticky mobile contact bar: minimal layer shadow only (`--shadow-layer` when tokenized)
- **No** floating/glassy card aesthetics, glassmorphism, or heavy drop shadows

---

## Typography-first hierarchy

1. **Eyebrow** (optional) — Geist, uppercase, muted, small
2. **Title** — Inter Tight, semibold, tight tracking, balanced lines
3. **Description** — Geist, 15–16px, muted, max readable width
4. **Content** — Geist body scale
5. **Action** — buttons/links with clear primary/secondary/tertiary weighting

### Rules

- **Inter Tight** for display/headline authority
- **Geist Sans** for all UI and body copy
- **No serif** and **no editorial** treatments in target state
- Headlines: architectural and modern — concise, not magazine-length
- Avoid arbitrary pixel font sizes in new code; use the scale in brand-system
- Long copy never spans full container width

---

## Calm conversion UX

- One **primary** action per viewport when possible; secondary actions visually subordinate
- Reassurance copy near CTAs (licensing, response expectation) — short, factual
- No countdown timers, fake urgency, or aggressive popups
- Forms: show time estimate and channel clarity; minimize field count
- Mobile sticky contact bar: accessible, not visually loud — see [CONVERSION_AUDIT.md](../../CONVERSION_AUDIT.md)

---

## Architectural layouts

- Align to grid: [`Container`](../../components/layout/container.tsx) + [`Section`](../../components/layout/section.tsx)
- Prefer predictable column patterns over bespoke asymmetry per section
- Split layouts (copy + media): clear column balance; image frames use consistent radius and overlay rules
- Cards in grids: equal height behavior where possible; consistent gap (`gap-6` / `gap-8` family)
- Do not clone reference wireframe layouts (5-column visa row, lifestyle collage, etc.) — apply rhythm and restraint only

---

## Premium responsive behavior

- **Mobile-first:** design readable at 375px before enhancing at `sm` / `md` / `lg`
- Touch targets: minimum 44px height on primary controls (`min-h-11` patterns)
- Type scales down gracefully — no oversized hero type on small screens
- Horizontal scroll: never on main content; test visa grids and resource lists
- Navigation: clear hierarchy; mobile menu without nested animation theatrics
- Images: `sizes` attribute matches layout breakpoints

---

## Accessibility standards

- Color contrast: charcoal on ivory meets WCAG AA for body; verify olive-on-ivory for small text
- Focus visible: ring using `--ring` / olive-muted — never remove outlines without replacement
- Heading order: logical `h1` → `h2` → `h3` per page; one `h1` per route
- Interactive elements: accessible names; icon-only buttons need `aria-label`
- Motion: honor `prefers-reduced-motion`; no essential information in animation-only reveals
- Forms: labels, errors associated with fields, destructive states clearly marked

---

## Image quality standards

- Use Next.js [`OptimizedImage`](../../components/ui/optimized-image.tsx) / `next/image`
- Homepage hero: `priority` for LCP; appropriate `sizes`
- Photography per [brand-system.md — Photography](./brand-system.md#photography-direction): warm grade, architectural subjects, no cheap stock
- Alt text: descriptive, not keyword-stuffed
- Overlays: subtle gradient/wash for legibility only — not cinematic stacking
- No blurry placeholders left at production quality; aspect ratios consistent per component type

---

## Mobile-first polish philosophy

- Sticky elements (nav, contact bar) must not obscure primary content or CTAs
- Form fields: 16px effective input text where possible to prevent iOS zoom
- Spacing on mobile: still generous — compact ≠ cramped
- Test thumb reach for primary CTA and LINE/WhatsApp entry points
- Reduce visual layers on small screens (fewer borders/shadows, same hierarchy)

---

## No visual gimmicks

Avoid:

- glassmorphism
- gradient-heavy sections
- glowing borders
- animated backgrounds
- oversized iconography
- excessive blur
- floating UI gimmicks
- neon accents
- overly cinematic overlays
- ornamental luxury styling

The visual system should prioritize:

- calm clarity
- hierarchy
- spacing
- typography
- image quality
- restraint

---

## Phase discipline

These principles guide **documentation and Phase 2 alignment**.

Do **not** in the current phase:

- Redesign homepage sections
- Refactor component layouts
- Add animation systems
- Replace architecture
- Introduce visual experimentation

When implementing, fix drift listed in [design-audit.md](./design-audit.md) in priority order: typography stack → shadows → radius → section rhythm → cards.
