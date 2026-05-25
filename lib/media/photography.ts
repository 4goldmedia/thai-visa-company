/**
 * Photography direction & default hero assets.
 *
 * Production heroes live under `/public/images/hero/` (local paths only).
 * Visa card thumbnails live under `/public/images/visas/`.
 *
 * @see PHOTOGRAPHY_DIRECTION.md
 */

export type HeroMediaAsset = {
  /** Path under `/public` (e.g. `/images/hero/homepage.jpg`) or allowed remote URL */
  src: string
  alt: string
  caption?: string
}

export type VisaCardImage = {
  src: string
  alt: string
}

/** Local temp assets — swap files in `public/images/hero/` when brand photography ships */
export const heroPhotography = {
  homepage: {
    src: "/images/hero/homepage.jpg",
    alt: "Sunlit modern residence with warm natural materials, suggesting comfortable long-stay living in Thailand",
    caption: "Long-stay living, handled with care",
  },
  contact: {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    alt: "Calm interior workspace with soft daylight",
    caption: "Personal guidance, same business day",
  },
} as const satisfies Record<string, HeroMediaAsset>

/** Visa card thumbnails — one file per route slug */
export const visaCardPhotography = {
  retirement: {
    src: "/images/visas/retirement.jpg",
    alt: "Comfortable residential setting suggesting long-term retirement living in Thailand",
  },
  dtv: {
    src: "/images/visas/dtv.jpg",
    alt: "Modern workspace with natural light, suggesting remote work in Thailand",
  },
  elite: {
    src: "/images/visas/elite.jpg",
    alt: "Premium interior with refined materials, suggesting Elite residency lifestyle",
  },
  business: {
    src: "/images/visas/business.jpg",
    alt: "Professional office environment suggesting business activity in Thailand",
  },
  education: {
    src: "/images/visas/education.jpg",
    alt: "Bright study space suggesting education and learning in Thailand",
  },
} as const satisfies Record<string, VisaCardImage>
