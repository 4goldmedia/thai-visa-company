# Hero photography (temporary)

Production homepage hero images live here as static files referenced from `lib/media/photography.ts`.

## Current assets

| File | Used by | Dimensions (export) |
|------|---------|---------------------|
| `Bangkok-skyline-LS.webp` | Homepage hero  -  **md+** (landscape) | 2560×1630 WebP |
| `Bangkok-skyline-MV.webp` | Homepage hero  -  **below md** (portrait) | 1536×2048 WebP |

## Replacing images

1. Export brand photography as high-quality WebP (desktop **2400–3200px** wide landscape; mobile **1200–1536px** wide portrait).
2. Replace files in place and update `heroPhotography.homepage` in `lib/media/photography.ts` if paths change.
3. Hard-refresh; restart `npm run dev` after filename changes.

## Code

- Asset registry: `lib/media/photography.ts` → `heroPhotography.homepage`
- Responsive frame: `components/media/hero-responsive-media-frame.tsx`
- Homepage layout: `components/sections/homepage-hero.tsx`
