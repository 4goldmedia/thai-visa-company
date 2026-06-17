# Brand system

**Thai Visa Company  -  design intelligence (target state)**

This document is the canonical brand and token direction. Code alignment is **Phase 2** unless explicitly scoped.

---

## Reference guardrail

The primary reference image ([premium-direction-reference-v1.png](./premium-direction-reference-v1.png)) is calibration only. See [README.md](./README.md).

**Do not recreate:**

- layout structure
- section order
- exact compositions
- card arrangements
- hero positioning

**Extract only:**

- atmosphere
- typography feeling
- spacing rhythm
- image treatment
- premium restraint
- tonal direction

---

## Brand clarification

> This brand should feel modern, trustworthy, architectural, and operationally premium  -  not editorial, resort-like, or fashion-oriented.

---

## Brand philosophy

Thai Visa Company is **relocation infrastructure**  -  calm, competent, and clear. Users are making high-stakes life decisions; the interface should reduce anxiety through structure, not decoration.

**We optimize for:**

- Operational clarity (what happens next, who helps, what it costs in attention)
- Trust through competence (licensing, process, responsiveness  -  stated plainly)
- Calm pacing (whitespace, readable type, predictable section rhythm)
- Product-grade polish (every pixel intentional; nothing performative)

**We avoid:**

- Editorial luxury, resort hospitality, or fashion-magazine aesthetics
- Ornamental “luxury” that intimidates or distracts from decisions
- Visual noise that competes with visa guidance and conversion paths

**Comparable references (tone, not layout):**

- Apple  -  restrained product clarity
- Linear  -  architectural density without clutter
- Bilt  -  modern premium fintech calm
- Premium real estate brands  -  aspirational imagery, sober UI
- Modern architecture firms  -  grid discipline, material honesty
- Calm enterprise product design  -  trustworthy, scalable patterns

---

## Visual direction

### Direction

| Attribute | Target |
|-----------|--------|
| Tone | Modern premium, architectural, contemporary |
| Mood | Calm, restrained, highly polished |
| Category | Relocation & residency platform (not travel agency, not hotel) |
| Luxury model | Restrained luxury via space, type, and image quality  -  not gold, serifs, or ornament |

### Anti-patterns (never evoke)

- Serif editorial or magazine headlines
- Hotel / resort / hospitality-editorial branding
- Fashion editorial layouts or ornamental styling
- Neon accents, glassmorphism, gradient spectacle
- Generic stock “Thailand vacation” clichés

---

## Typography system

### Roles

| Role | Typeface | Usage |
|------|----------|--------|
| **Display / headlines** | **Inter Tight** | H1, H2, section titles, page heroes  -  architectural authority |
| **UI / body** | **Geist Sans** | Body, labels, forms, nav, cards, buttons, metadata |
| **Mono** | **Geist Mono** | Code, tabular data, rare technical labels |

### Principles

- **Inter Tight** = display/headline authority  -  bold-restrained, modern grotesk, not magazine-like
- **Geist Sans** = calm, readable UI system  -  neutral, highly legible at small sizes
- **No serif typography** anywhere in the target state
- **No editorial typography treatment**  -  no hospitality serif pairing, no decorative display quirks
- Headlines should feel **architectural and modern**, not editorial or resort-like

### Type scale (target)

Values are documentation targets for Phase 2 tokenization. Prefer CSS variables over arbitrary `text-[Npx]` in components.

| Token | Mobile | Tablet (`sm`) | Desktop (`md+`) | Weight | Tracking | Line height |
|-------|--------|---------------|-------------------|--------|----------|-------------|
| Display (hero H1) | 26px / 1.625rem | 30px | 34px | 600 | -0.02em | 1.08 (`--leading-display`) |
| H1 (inner pages) | 26px | 30px | 34px | 600 | -0.02em | 1.08 |
| H2 (section) | 18px | 20px | 24–28px | 600 | -0.015em | 1.12 (`--leading-heading`) |
| H3 (card / sub) | 15px | 16px | 17px | 600 | -0.01em | 1.25 |
| Body | 15px | 16px | 16px | 400 | 0 | 1.65 (`--leading-body`) |
| Small / meta | 13px | 14px | 14px | 400–500 | 0 | 1.5 |
| Eyebrow | 11px | 12px | 12px | 500 | 0.06em uppercase | 1.2 |

### Eyebrows

- Sans-serif only (Geist), uppercase, muted foreground
- No decorative markers required; if used, single subtle rule or dot  -  not editorial flourish stacks

### Current codebase (Phase 2 migration)

| Today | Target |
|-------|--------|
| `Newsreader` + `--font-editorial` in `app/layout.tsx` | Remove; map `--font-heading` → Inter Tight |
| `font-editorial` in `lib/section-styles.ts`, `section-heading.tsx` | `font-display` / Inter Tight utility |
| `--tracking-editorial` | Rename to `--tracking-display` |

---

## Color philosophy

Warm neutrals with charcoal ink and a **muted olive** accent used sparingly for focus, trust icons, and selection  -  not as a decorative flood.

### Semantic palette (existing tokens)

Defined in [`styles/tokens.css`](../../styles/tokens.css):

| Token | Role |
|-------|------|
| `--ivory`, `--ivory-muted` | Primary backgrounds  -  warm, lived-in white |
| `--charcoal`, `--charcoal-muted` | Primary text hierarchy |
| `--stone`, `--stone-subtle` | Borders, dividers, structural lines |
| `--olive`, `--olive-muted`, `--olive-tint` | Accent, ring, subtle bands (max restraint) |

### Usage rules

- **Backgrounds:** ivory-first; muted bands (`--olive-tint`) at low opacity  -  max two alternating bands per page
- **Primary actions:** charcoal (`--primary`)  -  not olive-filled buttons unless explicitly secondary brand moment
- **Accent:** olive for focus rings, trust icon tint, selection wash  -  never neon or saturated green
- **Dark sections:** charcoal surfaces for contrast breaks  -  typography flips to ivory; maintain WCAG contrast

### shadcn mapping

Semantic colors in [`app/globals.css`](../../app/globals.css) map to the tokens above. Do not introduce parallel hex palettes in components.

---

## Spacing philosophy

Whitespace is a **luxury and trust signal**. Dense visa content still needs room to breathe.

### Section rhythm

Tokenized in `styles/tokens.css`, consumed by [`components/layout/section.tsx`](../../components/layout/section.tsx):

| Token | Value | Use |
|-------|-------|-----|
| `--space-section-y-sm` | 3rem | Compact bands |
| `--space-section-y` | 3.5rem | Default sections |
| `--space-section-y-lg` | 5rem | Desktop default |
| `--space-section-y-hero` | 3.5rem | Hero-adjacent spacing |
| `--space-content-gap` | 1.5rem | Internal section stacks |
| `--space-stack` | 0.75rem | Tight stacks (lists, meta) |

### Rules

- Prefer `Section` spacing variants (`default`, `compact`, `spacious`) over one-off `py-*` on pages
- Heading block → content offset: `sectionContentOffsetClass` (`mt-7 sm:mt-9 md:mt-10`)
- Card padding: `p-5 sm:p-6` (`cardPaddingClass`)  -  consistent, not cramped
- Max content width for prose: ~65ch (`max-w-2xl` / `mobileReadableWidthClass`)

---

## Photography direction

Imagery supports **relocation confidence**  -  architecture, modern Bangkok life, calm landscapes, professional context. Not generic vacation stock.

### Subject matter

- Modern architecture and skyline (dusk, warm light)
- Interiors and workspaces that feel real, not staged luxury hotel
- Landscapes with calm composition (limestone, sea, horizon  -  not busy tourist crowds)
- Lifestyle moments: transit, café, food  -  aspirational but grounded

### Treatment

- Warm, sophisticated color grade  -  slight desaturation, no heavy filters
- Sharp crops; simple frames (`hero-media-frame` pattern)
- Overlays: **subtle only**  -  bottom gradient or warm wash for legibility; avoid overly cinematic stacks
- Alt text mandatory; captions optional and understated

### Technical

- Next.js `Image` with appropriate `sizes`; LCP priority on homepage hero only
- Curated sources via [`lib/media/photography.ts`](../../lib/media/photography.ts); no low-res or watermarked assets

See also historical [`PHOTOGRAPHY_DIRECTION.md`](../../PHOTOGRAPHY_DIRECTION.md)  -  superseded by this section for brand tone.

---

## Card philosophy

Cards are **structured surfaces**, not floating panels.

- **Border-first:** `border-border` on ivory/card background
- **Radius:** unified `--radius` (6px target); avoid mixed `rounded-xl` tiers without semantic reason
- **Padding:** `cardPaddingClass`  -  consistent internal rhythm
- **Image-top cards:** square or 4:3 crop, full-bleed image area, title + one line below  -  no badge clutter
- **Text-only cards:** trust, FAQ-adjacent  -  same border language, no competing shadow languages

Surfaces rely on **contrast and spacing**, not elevation theater.

---

## Shadow philosophy

Use borders, spacing, and tonal separation before shadows.

Shadows should be nearly imperceptible and only used to clarify layering or interaction states  -  never as decorative depth.

- Cards should feel **precise and structured**
- Surfaces should rely on **contrast and spacing**
- Avoid **floating/glassy** aesthetics

### Target shadow tokens (Phase 2)

| Token | Use |
|-------|-----|
| `--shadow-none` | Default card resting state |
| `--shadow-interaction` | Focused/hovered controls where lift aids affordance |
| `--shadow-layer` | Sticky bars, modals, mobile contact bar  -  minimal y-offset, low alpha |

**Do not** use hover shadow escalation on static content cards.

---

## Motion philosophy

Motion supports comprehension, not spectacle.

- Subtle section reveal (existing [`styles/motion.css`](../../styles/motion.css))  -  short distance, ease-out
- Always respect `prefers-reduced-motion: reduce`
- **No** scroll-jacking, parallax hero, or animated backgrounds
- **No** new animation systems in Phase 1 documentation phase
- Transitions on buttons/borders: ~200ms, opacity/color only

---

## Premium UX principles

- **One primary CTA** per viewport where possible; secondary actions visually quieter
- **Calm conversion:** reassurance lines near CTAs, not alarmist urgency
- **Predictable hierarchy:** eyebrow → title → description → content → action
- **Trust adjacent to action:** licensing, response time, channel clarity  -  bullet discipline, not icon farms
- **Mobile-first polish:** 44px touch targets, readable 15–16px body, sticky contact bar without visual gimmicks

Cross-reference: [`CONVERSION_AUDIT.md`](../../CONVERSION_AUDIT.md)

---

## Token architecture (planned)

Semantic tokens map to CSS variables, Tailwind/shadcn, and owning files. Implementation deferred to Phase 2 unless noted.

| Semantic | CSS variable (target) | Tailwind / usage | Owner |
|----------|----------------------|------------------|-------|
| Display font | `--font-display` | `font-display` | `app/layout.tsx`, `styles/tokens.css` |
| UI font | `--font-sans` | `font-sans` (Geist) | `app/layout.tsx` |
| Mono font | `--font-mono` | `font-mono` | `app/layout.tsx` |
| Page background | `--background` | `bg-background` | `tokens.css` → `globals.css` |
| Text primary | `--foreground` | `text-foreground` | `tokens.css` |
| Card surface | `--card` | `bg-card` | `tokens.css` |
| Border | `--border` | `border-border` | `tokens.css` |
| Accent | `--olive`, `--olive-tint` | CSS var utilities | `tokens.css` |
| Section Y | `--space-section-y*` | `Section` spacing variants | `tokens.css`, `section.tsx` |
| Radius base | `--radius` | `rounded-[var(--radius)]` | `tokens.css` |
| Radius scale | `--radius-sm`, `--radius-md`, `--radius-lg` | Phase 2 | `tokens.css` |
| Shadow none | `--shadow-none` | default cards | `tokens.css` |
| Shadow interaction | `--shadow-interaction` | hover/focus affordance | `tokens.css` |
| Shadow layer | `--shadow-layer` | sticky bar, overlays | `tokens.css` |
| Leading | `--leading-body`, `--leading-heading`, `--leading-display` | line-height utilities | `tokens.css` |
| Tracking | `--tracking-heading`, `--tracking-eyebrow` | letter-spacing | `tokens.css` |

Optional Phase 2: `lib/design/tokens.ts` exporting semantic names for TS consumers (forms, metadata). Not required for documentation phase.

### Radius scale (target)

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 4px | Chips, small controls |
| `--radius` | 6px | Buttons, inputs, cards (current) |
| `--radius-md` | 8px | Media frames only if needed |
| Avoid | 12px+ (`rounded-xl`) as default card language unless audit approves |

---

## Phase discipline

This document defines **target state only**.

**Do not** in the documentation phase:

- Redesign homepage sections or section order
- Refactor component layouts
- Add animation systems
- Replace site architecture
- Introduce visual experimentation

**Phase 2** implements fonts, tokens, and component alignment per [design-audit.md](./design-audit.md).
