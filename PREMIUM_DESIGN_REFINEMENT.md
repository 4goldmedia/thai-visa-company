# Premium design refinement report

**Superseded in part by [RELOCATION_PLATFORM_DESIGN.md](./RELOCATION_PLATFORM_DESIGN.md)** — ivory/charcoal/olive, Newsreader, `PageHero`, photography.

**Thai Visa Company — Bilt-inspired restraint, fintech trust UX**

**Methodology:** [design-taste-frontend](.agents/skills/design-taste-frontend/SKILL.md) (low visual density, static–fluid motion, neutral palette) + [minimalist-ui](.agents/skills/minimalist-ui/SKILL.md) (warm monochrome, border-led surfaces, no gradient noise).

**Direction:** Calm, modern, premium but accessible — reference quality: Bilt, Mercury, Stripe, Linear. Not luxury-law-firm, not generic SaaS.

---

## Design system changes (this pass)

| Layer | Change |
|-------|--------|
| **Tokens** | `--radius: 0.5rem` (crisper corners); slightly darker `muted-foreground` for readable secondary text |
| **Typography** | Shared `pageTitleClass`, `pageTitleSecondaryClass`, `pageLeadClass`, `trustDividerClass`, `trustListItemClass` in `lib/section-styles.ts` |
| **Surfaces** | `cardSurfaceClass` — flat cards, border-led hover only (no background lift) |
| **Sections** | Recalibrated `Section` spacing; softer `sectionBandClass` (`bg-muted/[0.04]`) |
| **Motion** | 6px fade (was 10px), 0.36s hero mount, shorter scroll reveal range |
| **Navbar** | Border + light blur only — removed `shadow-sm` on scroll |
| **Hero** | Single support-thread panel (removed stacked decorative cards) |
| **CTA copy** | Reassurance line muted, not semi-bold foreground |

---

## Strongest visual improvements

### 1. Unified page hero typography
Homepage, visa, contact, and resources heroes now share one scale — hierarchy via **weight and color** (brand line muted), not competing font sizes.

### 2. Calmer homepage hero
Replaced overlapping “application status” mock cards with one **support-thread panel** — reads as product proof without visual noise (Bilt/Mercury restraint).

### 3. Consistent card language
Visa, resource, form, and trust cards use the same **rounded-lg, border/60, flat hover** — no mixed `rounded-xl` or hover background washes.

### 4. Trust sequencing polish
Shared `trustDividerClass` (lighter border `/40`) and `text-sm` trust bullets — reviews → proof list feels intentional, not bolted on.

### 5. Section pacing
Slightly more vertical air on default sections; compact bands for FAQ/final CTA; at-a-glance strip uses subtle `bg-muted/[0.03]` instead of heavy tint.

### 6. Navbar & chrome
Scrolled header: **95% background + hairline border** — no drop shadow. Mobile menu panel matches (border only).

### 7. Contact page
Inquiry grid spacing widened; sidebar heading scale aligned; trust strip uses same list rhythm as heroes.

### 8. Motion restraint
Shorter distances and durations — motion supports readability, does not perform “landing page animation.”

---

## Remaining weak spots

| Area | Issue | Priority |
|------|--------|----------|
| **Hero component duplication** | Four hero implementations share classes but not one `PageHero` primitive | P2 |
| **Resources categories** | `h2` scale close but not `SectionHeading` — minor drift | P3 |
| **Review cards** | Still `rounded-xl` in component if not using `cardSurfaceClass` only | P3 |
| **Geist everywhere** | Correct for fintech; less distinctive than bespoke brand font | P3 |
| **Homepage hero visual** | Abstract panel, not real product screenshot — fine for launch | P3 |
| **Dark mode tokens** | Exist but unused — no user toggle | P4 |
| **FAQ accordion** | Radix default chrome — could move to border-only rows (minimalist skill) | P2 |
| **Stagger grids** | Visa types still use stagger reveal — acceptable but watch density | P3 |

---

## Highest-impact future design opportunities

1. **`PageHero` component** — eyebrow, title, lead, CTAs, optional trust slot; one file for all routes.
2. **FAQ list styling** — border-bottom rows only (no boxed accordion), Mercury-style `+` toggle.
3. **Real product visual** — one calm screenshot or LINE thread capture in hero (desaturated, warm).
4. **Branded OG + favicon** — completes premium perception in shares (not on-page but trust-adjacent).
5. **`/visas` hub** — bento-style visa grid with consistent cards (when route ships).
6. **Micro-label system** — shared `Badge` for “Coming soon”, visa category chips (resources).
7. **Optional display font** — e.g. subset of Instrument Sans for H1 only (keep body Geist).
8. **Review section** — single aggregate bar + 2 featured quotes vs 3-card grid (less template feel).

---

## Surface-by-surface notes

| Surface | Status |
|---------|--------|
| Homepage | Hero simplified; at-a-glance lighter; section rhythm improved |
| Visa cards | Flat borders, consistent radius |
| CTA sections | Reassurance de-emphasized; final CTA divider softer |
| Navbar | Restrained scroll state |
| Footer | Slightly more padding |
| Resources | Hero unified; category spacing increased; planned cards unchanged (coming soon) |
| Contact | Hero + inquiry + trust aligned to system |
| Mobile | 44px CTAs retained; spacing gaps increased (`gap-10` hero grid) |

---

## Accessibility & performance (maintained)

- No new client bundles; CSS-only motion tweaks.
- Eyebrows remain `text-xs` (12px) with improved contrast via token.
- Focus rings, skip link, touch targets unchanged.
- `content-visibility` on below-fold sections preserved in `base.css`.
- `prefers-reduced-motion` still collapses animations.

---

## Verification

| Criterion | Met? |
|-----------|------|
| Calm / modern | Yes — flatter surfaces, less decoration |
| Premium but accessible | Yes — readable leads, no oversized type |
| Trustworthy | Yes — trust blocks unified, reassurance muted |
| Intentional rhythm | Yes — shared spacing + type scale |
| No visual clutter | Yes — hero simplified |
| No excessive animation | Yes — reduced motion amplitude |
| No generic SaaS gradients | Yes — unchanged neutral palette |
| Production build | Yes — `npm run build` passes |

---

## Files touched

`styles/tokens.css` · `styles/motion.css` · `lib/section-styles.ts` · `lib/form-styles.ts` · `components/layout/section.tsx` · `components/layout/section-heading.tsx` · `components/layout/navbar.tsx` · `components/layout/footer.tsx` · `components/sections/hero.tsx` · `components/sections/visa-hero.tsx` · `components/sections/contact-hero.tsx` · `components/sections/resources-index-hero.tsx` · `components/sections/page-at-a-glance.tsx` · `components/sections/final-cta.tsx` · `components/sections/contact-trust-strip.tsx` · `components/sections/contact-inquiry-section.tsx` · `components/sections/resources-category-groups.tsx` · `components/cards/visa-card.tsx` · `components/cards/resource-card.tsx` · `components/cta/contact-cta-group.tsx`

---

*Related: [FINAL_ARCHITECTURE_AUDIT.md](./FINAL_ARCHITECTURE_AUDIT.md) · [COMPONENT_ARCHITECTURE.md](./COMPONENT_ARCHITECTURE.md)*
