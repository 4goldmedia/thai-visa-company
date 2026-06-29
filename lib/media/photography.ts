/**
 * Photography direction & default hero assets.
 *
 * Production heroes live under `/public/images/hero/` (local paths only).
 * Visa gallery imagery lives under `/public/images/visas/`.
 * Blog art direction: `editorial-asset-library.ts` + `blogArticlePhotography`.
 *
 * Art direction: people + lifestyle context (relocation / mobility), not empty architecture.
 *
 * @see PHOTOGRAPHY_DIRECTION.md
 * @see public/images/visas/README.md
 * @see rules/content/visual-storytelling-system.mdc
 */

import {
  editorialAssetLibrary,
  getEditorialAsset,
  getVisaPageImageSrcsFromLibrary,
} from "@/lib/media/editorial-asset-library"

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
    src: "/images/visas/retirement.png",
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

/** All image paths reserved for visa service pages — blog articles must not use these */
export const visaPageImageSrcs = new Set<string>([
  ...getVisaPageImageSrcsFromLibrary(),
  ...Object.values(visaGalleryPhotography).map((image) => image.src),
])

export type BlogArticleImage = {
  src: string
  alt: string
  caption?: string
  objectPosition?: string
}

/**
 * Blog article photography — independent from visa page heroes.
 * Assign assets from `editorial-asset-library.ts` after the visual storytelling review.
 */
export const blogArticlePhotography = {
  "best-visa-for-living-in-thailand": {
    hero: getEditorialAsset("pattaya-coastline-hero"),
    supporting: getEditorialAsset("work-income-thailand"),
  },
  "business-visa-vs-work-permit-thailand": {
    hero: getEditorialAsset("business-visa-work-permit-comparison-hero"),
  },
  "can-foreigners-live-in-thailand-permanently": {
    hero: getEditorialAsset("can-foreigners-live-permanently-hero"),
  },
  "can-i-work-in-thailand-without-a-work-permit": {
    hero: getEditorialAsset("can-i-work-without-permit-hero"),
  },
  "change-visa-type-in-thailand": {
    hero: getEditorialAsset("change-visa-type-hero"),
  },
  "dtv-visa-rejection-reasons": {
    hero: getEditorialAsset("dtv-visa-rejection-reasons-hero"),
  },
  "dtv-visa-vs-tourist-visa-thailand": {
    hero: getEditorialAsset("dtv-vs-tourist-visa-hero"),
  },
  "dtv-vs-retirement-visa-thailand": {
    hero: getEditorialAsset("dtv-vs-retirement-lifestyle-hero"),
  },
  "dtv-vs-education-visa-thailand": {
    hero: getEditorialAsset("dtv-vs-education-lifestyle-hero"),
  },
  "re-entry-permit-thailand": {
    hero: getEditorialAsset("re-entry-permit-thailand-hero"),
  },
  "retirement-visa-o-vs-o-a-thailand": {
    hero: getEditorialAsset("retirement-o-vs-oa-market-hero"),
  },
  "thailand-elite-visa-vs-retirement-visa": {
    hero: getEditorialAsset("elite-vs-retirement-lifestyle-hero"),
  },
  "thailand-elite-visa-worth-it": {
    hero: getEditorialAsset("elite-worth-it-lobby-hero"),
  },
  "can-you-work-on-an-education-visa-in-thailand": {
    hero: getEditorialAsset("education-visa-work-rule-hero"),
  },
} as const satisfies Record<string, { hero: BlogArticleImage; supporting?: BlogArticleImage }>

export type BlogArticlePhotographySlug = keyof typeof blogArticlePhotography

export function getBlogArticleHeroImage(
  slug: string,
): BlogArticleImage | undefined {
  return (blogArticlePhotography as Record<string, { hero: BlogArticleImage }>)[slug]
    ?.hero
}

export function resolveBlogArticleHeroImage(
  slug: string,
  explicit?: string,
): string | undefined {
  return explicit ?? getBlogArticleHeroImage(slug)?.src
}

/** @deprecated Use editorialAssetLibrary — re-export for discoverability */
export { editorialAssetLibrary, getBlogAvailableEditorialAssets } from "@/lib/media/editorial-asset-library"

/** @deprecated Use visaGalleryPhotography */
export const visaCardPhotography = visaGalleryPhotography
