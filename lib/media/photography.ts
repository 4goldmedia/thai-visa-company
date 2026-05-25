/**
 * Photography direction & default hero assets.
 *
 * Production heroes live under `/public/images/hero/` (local paths only).
 * Visa gallery imagery lives under `/public/images/visas/`.
 *
 * Art direction: people + lifestyle context (relocation / mobility), not empty architecture.
 *
 * @see PHOTOGRAPHY_DIRECTION.md
 * @see public/images/visas/README.md
 */

export type HeroMediaAsset = {
  /** Path under `/public` (e.g. `/images/hero/homepage.jpg`) or allowed remote URL */
  src: string
  alt: string
  caption?: string
}

export type VisaGalleryImage = {
  src: string
  alt: string
  /** Per-image crop focal point for editorial consistency */
  objectPosition?: string
}

/** @deprecated Use VisaGalleryImage */
export type VisaCardImage = VisaGalleryImage

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

/**
 * Visa gallery — contextual lifestyle photography per route.
 * Sources: Unsplash (premium editorial selects); replace with brand shoots in `public/images/visas/`.
 */
export const visaGalleryPhotography = {
  dtv: {
    src: "/images/visas/dtv.jpg",
    alt: "Professional working on a laptop on a balcony overlooking the city, suggesting remote work life in Thailand",
    objectPosition: "center 35%",
  },
  elite: {
    src: "/images/visas/elite.jpg",
    alt: "Person in a refined interior setting with laptop, suggesting premium long-stay residency lifestyle",
    objectPosition: "center 40%",
  },
  business: {
    src: "/images/visas/business.jpg",
    alt: "Business team in a modern meeting room, suggesting international business relocation to Thailand",
    objectPosition: "center 45%",
  },
  retirement: {
    src: "/images/visas/retirement.jpg",
    alt: "Person working outdoors in a calm natural setting, suggesting relaxed premium long-stay retirement life",
    objectPosition: "center 42%",
  },
  education: {
    src: "/images/visas/education.jpg",
    alt: "Group of friends in a warm social setting, suggesting family relocation and study life in Thailand",
    objectPosition: "center 38%",
  },
} as const satisfies Record<string, VisaGalleryImage>

/** @deprecated Use visaGalleryPhotography */
export const visaCardPhotography = visaGalleryPhotography
