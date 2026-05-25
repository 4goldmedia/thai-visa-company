# Hero photography (temporary)

Production homepage hero images live here as static files referenced from `lib/media/photography.ts`.

## Current asset

| File | Used by | Dimensions (source) |
|------|---------|---------------------|
| `hero-skyline.jpg` | Homepage immersive hero | Bangkok skyline terrace at golden hour (wide cinematic) |

## Replacing the image

1. Export brand photography as progressive JPEG or WebP (recommended width **2400px**, aspect **3:2** or **16:10** for immersive crop; current source is 1024×665).
2. Replace `hero-skyline.jpg` (or add `hero-skyline.webp` and update `heroPhotography.homepage.src` in `lib/media/photography.ts`).
3. Update the `alt` string in `lib/media/photography.ts` to describe the new scene accurately.
4. Hard-refresh the browser; Next.js image cache may require restarting `npm run dev` after filename changes.

## Do not

- Rely on hot-linked Unsplash URLs for the homepage hero (IDs can 404; failed loads show **alt text** in the layout).
- Use prompt text or captions as visible hero content — captions are optional UI only (`hero-media-caption`).

## Code

- Asset registry: `lib/media/photography.ts`
- Frame component: `components/media/hero-media-frame.tsx`
- Homepage layout: `components/sections/homepage-hero.tsx`
