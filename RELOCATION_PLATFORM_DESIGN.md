# Relocation platform design system

> **Superseded.** Canonical brand and UI direction: [`docs/design/brand-system.md`](docs/design/brand-system.md), [`docs/design/ui-principles.md`](docs/design/ui-principles.md). Target aesthetic: modern premium relocation infrastructure (Apple, Linear, Bilt, premium real estate) — **not** editorial, resort, or hospitality styling. Serif/editorial guidance in this file is historical only. Audit: [`docs/design/design-audit.md`](docs/design/design-audit.md).

Progressive refinement for a premium Thailand residency experience — **architecture unchanged**.

**References (historical):** Bilt · Ramp — see `docs/design/` for current comparables  
**Tagline:** *Moving to Thailand, handled beautifully.*

---

## 10-step implementation status

| Step | Status | Location |
|------|--------|----------|
| 1. Design tokens | Done | `styles/tokens.css` |
| 2. Typography | Done | Newsreader + Geist; `lib/section-styles.ts` |
| 3. Spacing rhythm | Done | CSS vars + `Section` variants |
| 4. Premium hero | Done | `components/layout/page-hero.tsx` |
| 5. Unified cards | Done | `cardSurfaceClass` |
| 6. Photography | Done | `HeroMediaFrame`, `PHOTOGRAPHY_DIRECTION.md` |
| 7. Motion | Done | `styles/motion.css` (reduced amplitude) |
| 8. Mobile polish | Done | Touch targets, spacing, contact bar |
| 9. Trust / conversion | Done | Trust divider, olive accents, CTA hierarchy |
| 10. Consistency audit | This doc | |

---

## Palette

| Token | Role |
|-------|------|
| **Ivory** `--ivory` | Page background |
| **Charcoal** `--charcoal` | Headlines, primary buttons |
| **Stone** `--stone` | Borders, inputs |
| **Olive** `--olive` | Eyebrow dots, icons, focus ring, subtle bands |

No bright startup primaries. No gradients on UI chrome.

---

## Typography

| Role | Font |
|------|------|
| **Display / H1 / section titles** | Newsreader (`font-editorial`) |
| **UI / body / buttons** | Geist Sans (`font-sans`) |
| **Meta / code** | Geist Mono |

Hierarchy via **weight and color**, not oversized scale.

---

## Components

| Component | Use |
|-----------|-----|
| `PageHero` | All page heroes — copy, CTAs, trust, optional `mediaSlot` |
| `HeroMediaFrame` | Cinematic still — homepage (priority LCP) |
| `Section` + `SectionHeading` | Body sections |
| `cardSurfaceClass` | Visa, resource, review, trust cards |

---

## Strongest visual improvements

1. **Editorial headline voice** — Newsreader + ivory/charcoal reads hospitality-grade, not SaaS template.  
2. **Cinematic homepage hero** — Architectural photography with warm wash replaces abstract mock UI.  
3. **Unified `PageHero`** — One rhythm across home, visa, contact, resources.  
4. **Olive accent discipline** — Trust icons, eyebrows, at-a-glance bullets — never loud fills.  
5. **Stone-border cards** — Whisper shadow, hover border deepen (Aman/Ramp restraint).  
6. **Spacing tokens** — Section padding tied to CSS variables for consistent vertical pace.  
7. **Brand line** — Tagline aligned to relocation promise.

---

## Remaining weak spots

| Area | Notes |
|------|--------|
| **Stock photography** | Unsplash placeholders until brand shoot |
| **Visa page heroes** | Text-only (no per-visa imagery yet) |
| **FAQ accordions** | Still card-boxed — could move to border-only rows |
| **Dark mode** | Tokens exist; no product toggle |
| **LINE green** | Channel brand colors unchanged in buttons (intentional) |

---

## Highest-impact future opportunities

1. **Brand photography** in `/public/images/hero/` — swap `lib/media/photography.ts` URLs  
2. **Per-visa hero stills** — subtle 4:5 frame on DTV / retirement only  
3. **FAQ editorial rows** — divider-only, no card chrome  
4. **Custom display cut** of Newsreader (optional licensing)  
5. **Contact page split** — optional `heroPhotography.contact` media column  
6. **Print-toned OG images** — ivory + charcoal typography on still backgrounds  

---

## Consistency audit checklist

- [x] One hero component (`PageHero`)  
- [x] One card surface system  
- [x] Tokens drive background, border, primary, ring  
- [x] Section headings use editorial font  
- [x] Motion &lt; 8px translate, reduced-motion safe  
- [x] Mobile 44px CTAs preserved  
- [x] Semantic HTML / landmarks unchanged  
- [x] Build passes  

---

*Prior pass: [PREMIUM_DESIGN_REFINEMENT.md](./PREMIUM_DESIGN_REFINEMENT.md) · Architecture: [FINAL_ARCHITECTURE_AUDIT.md](./FINAL_ARCHITECTURE_AUDIT.md)*
