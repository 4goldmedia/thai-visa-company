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
  /** Path under `/public` (e.g. `/images/hero/Bangkok-skyline-LS.webp`) or allowed remote URL */
  src: string
  alt: string
  caption?: string
}

/** Homepage hero  -  landscape desktop + portrait mobile */
export type ResponsiveHeroMedia = {
  desktop: HeroMediaAsset
  mobile: HeroMediaAsset
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

/** Editorial section imagery  -  calm Thailand lifestyle (homepage transition band) */
export const editorialPhotography = {
  movingSimple: {
    src: "/images/editorial/krabi-thailand-beachside.webp",
    alt: "Calm turquoise water and limestone cliffs in Krabi, suggesting a peaceful relocation to Thailand",
    objectPosition: "28% 52%",
  },
} as const

/** Local temp assets  -  swap files in `public/images/hero/` when brand photography ships */
export const heroPhotography = {
  homepage: {
    desktop: {
      src: "/images/hero/Bangkok-skyline-LS.webp",
      alt: "Bangkok skyline at golden hour from a luxury terrace, suggesting premium long-stay living in Thailand",
    },
    mobile: {
      src: "/images/hero/Bangkok-skyline-MV.webp",
      alt: "Bangkok skyline at golden hour, suggesting premium long-stay living in Thailand",
    },
    caption: "Long-stay living, handled with care",
  },
  contact: {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    alt: "Calm interior workspace with soft daylight",
    caption: "Personal guidance, same business day",
  },
} as const satisfies Record<string, HeroMediaAsset | ResponsiveHeroMedia>

/**
 * Visa gallery  -  contextual lifestyle photography per route.
 * Sources: Unsplash (premium editorial selects); replace with brand shoots in `public/images/visas/`.
 */
export const visaGalleryPhotography = {
  dtv: {
    src: "/images/visas/dtv-remote-work.jpg",
    alt: "Professional working on a laptop on a balcony overlooking a city skyline, suggesting remote work life in Thailand",
    objectPosition: "center 42%",
  },
  elite: {
    src: "/images/visas/thailand-elite-visa.webp",
    alt: "Person in a refined interior setting with laptop, suggesting premium long-stay residency lifestyle",
    objectPosition: "center 40%",
  },
  business: {
    src: "/images/visas/thailand-business-visa-2.webp",
    alt: "Business team in a modern meeting room, suggesting international business relocation to Thailand",
    objectPosition: "center 45%",
  },
  retirement: {
    src: "/images/visas/retirement.jpg",
    alt: "Calm tropical beach at golden hour with lounge chairs and palm trees, suggesting relaxed premium retirement life in Thailand",
    objectPosition: "center 55%",
  },
  education: {
    src: "/images/visas/thailand-education-visa.webp",
    alt: "Group of friends in a warm social setting, suggesting family relocation and study life in Thailand",
    objectPosition: "center 38%",
  },
  marriage: {
    src: "/images/visas/education.jpg",
    alt: "Couple spending time together in Thailand, suggesting marriage and family visa life",
    objectPosition: "center 38%",
  },
  tourist: {
    src: "/images/editorial/krabi-thailand-beachside.webp",
    alt: "Traveler enjoying Thailand's coastline, suggesting a tourism experience",
    objectPosition: "28% 52%",
  },
  ltr: {
    src: "/images/visas/elite.jpg",
    alt: "Professional in a refined setting, suggesting long-term residence in Thailand",
    objectPosition: "center 40%",
  },
} as const satisfies Record<string, VisaGalleryImage>

/** @deprecated Use visaGalleryPhotography */
export const visaCardPhotography = visaGalleryPhotography
