# Hero photography (temporary)

Production homepage hero images live here as static files referenced from `lib/media/photography.ts`.

## Current assets

| File | Used by | Dimensions (export) |
|------|---------|---------------------|
| `thai-visa-company-hero-option-6.webp` | Homepage hero  -  **≥1100px** landscape split | 1672×941 WebP |
| `thai-visa-company-bangkok-mobile.webp` | Homepage hero  -  **<1100px** portrait stack | 1080×1350 WebP |
| `thai-visa-company-hero-option-5.webp` | Previous hero candidate (unused by homepage) | 2508×1412 WebP |
| `Bangkok-skyline-LS.webp` | Legacy desktop skyline (unused by homepage) | 2560×1630 WebP |
| `Bangkok-skyline-MV.webp` | Legacy mobile skyline (unused by homepage) | 1536×2048 WebP |

## Art direction

| Viewport | Layout | Asset |
|----------|--------|-------|
| Phones | Copy → portrait image → trust | `thai-visa-company-bangkok-mobile.webp` |
| Tablets / small laptops (<1100px) | Same stacked layout | `thai-visa-company-bangkok-mobile.webp` |
| Large desktop (≥1100px) | Split: copy left, landscape right | `thai-visa-company-hero-option-6.webp` |

## Replacing images

1. Export brand photography as high-quality WebP (desktop **2400–3200px** wide landscape; mobile **1080–1536px** wide portrait).
2. Replace files in place and update `heroPhotography.homepage` in `lib/media/photography.ts` if paths change.
3. Desktop crop: tune `--hero-media-object-position` in `styles/hero-premium.css`. Portrait uses `object-position: center center`.
4. Hard-refresh; restart `npm run dev` after filename changes.

## Code

- Asset registry: `lib/media/photography.ts` → `heroPhotography.homepage`
- Responsive frame: `components/media/hero-responsive-media-frame.tsx` (1100px art direction)
- Homepage layout: `components/sections/homepage-hero.tsx`
- Crop / fade: `styles/hero-premium.css`
