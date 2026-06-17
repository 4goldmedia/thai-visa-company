/**
 * “Why Thailand”  -  lifestyle editorial band (homepage).
 */

export type WhyThailandCollageImage = {
  id: string
  src: string
  alt: string
  objectPosition?: string
}

export const whyThailandSectionCopy = {
  eyebrow: "Why Thailand",
  titleLine1: "More than a destination.",
  titleLine2: "A better way to live.",
  body: "Thailand combines modern convenience, international healthcare, strong connectivity, and a slower pace of life, making it one of the world’s most attractive places to relocate.",
  ctaLabel: "Explore life in Thailand",
  ctaHref: "/resources",
} as const

/** Editorial collage  -  existing brand photography */
export const whyThailandCollageImages: ReadonlyArray<WhyThailandCollageImage> = [
  {
    id: "remote-work",
    src: "/images/visas/dtv.jpg",
    alt: "Professional working on a laptop with a city view, suggesting remote work life in Thailand",
    objectPosition: "center 35%",
  },
  {
    id: "skyline",
    src: "/images/hero/Bangkok-skyline-LS.webp",
    alt: "Bangkok skyline at golden hour from a luxury terrace",
    objectPosition: "center center",
  },
  {
    id: "schools",
    src: "/images/visas/education.jpg",
    alt: "Warm social setting suggesting international schools and family life in Thailand",
    objectPosition: "center 38%",
  },
  {
    id: "city",
    src: "/images/visas/business.jpg",
    alt: "Modern business district suggesting connectivity and urban infrastructure",
    objectPosition: "center 45%",
  },
  {
    id: "lifestyle",
    src: "/images/editorial/moving-simple.jpg",
    alt: "Calm water and long-tail boats in Thailand, suggesting local lifestyle and leisure",
    objectPosition: "center 42%",
  },
]
