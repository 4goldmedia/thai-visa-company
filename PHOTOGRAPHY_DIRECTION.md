# Photography direction

> **Superseded for photography rules.** See [Photography direction](docs/design/brand-system.md#photography-direction) in [`docs/design/brand-system.md`](docs/design/brand-system.md). Calibration image: [`docs/design/premium-direction-reference-v1.png`](docs/design/premium-direction-reference-v1.png) (atmosphere only — not layout).

**Thai Visa Company — relocation & residency platform**

The site should feel: *moving to Thailand, handled beautifully.*

---

## Mood

| Quality | Direction |
|---------|-----------|
| **Aspirational** | Light, space, calm confidence — not backpacker energy |
| **Cinematic** | Soft contrast, natural vignette, 4:5 or 5:6 crop |
| **Sophisticated** | Architectural, interior, lived-in details |
| **Warm** | Golden hour, wood, linen, stone — ivory-aligned grade |
| **Lived-in** | Real residences, workspaces, terraces — not empty resorts |

## Avoid

- Elephant/temple tourist postcards  
- Saturated beach party stock  
- Crowded night markets as hero art  
- Glassmorphism overlays on photos  
- Heavy HDR or neon grading  

---

## Technical treatment (implemented)

- `HeroMediaFrame` — warm multiply wash + bottom charcoal gradient  
- Caption in uppercase tracking (hospitality label style)  
- `object-position: center 35%` — architectural headroom  

## Asset sources

| Key | Default | Replace with |
|-----|---------|--------------|
| `homepage` | `/public/images/hero/hero-skyline.jpg` (local; do not hot-link Unsplash for LCP) | Bangkok skyline terrace at golden hour |
| `contact` | Unsplash calm interior | Brand photography |

Configure in `lib/media/photography.ts`.

## Shot list (brand photography)

1. **Homepage** — Modern Thai residence or Bangkok apartment terrace at soft light  
2. **Contact** — Consultant workspace or calm meeting moment (no faces required)  
3. **Visa clusters** (future) — Subtle detail: documents organized, passport + tea, balcony  

## Licensing

- Own or license all replacement assets  
- Alt text: describe space and mood, not generic “Thailand beach”  

---

*Code: `components/media/hero-media-frame.tsx`, `lib/media/photography.ts`*
