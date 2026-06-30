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
  ctaLabel: "Explore Moving to Thailand",
  ctaHref: "/moving-to-thailand",
} as const

/** Editorial collage  -  Thailand lifestyle photography */
export const whyThailandCollageImages: ReadonlyArray<WhyThailandCollageImage> = [
  {
    id: "bangkok",
    src: "/images/moving-to-thailand/cities/Bangkok.webp",
    alt: "Bangkok skyline at sunset with the Chao Phraya River and temples",
  },
  {
    id: "phuket",
    src: "/images/moving-to-thailand/cities/Phuket.webp",
    alt: "Phuket coastline with turquoise water and hillside villas at sunset",
  },
  {
    id: "chiang-mai",
    src: "/images/moving-to-thailand/cities/Chiang Mai.webp",
    alt: "Chiang Mai temple on a forested hillside at golden hour",
  },
  {
    id: "golf-course",
    src: "/images/moving-to-thailand/Thailand-golf-course.png",
    alt: "Couple walking a golf course fairway with tropical mountains beyond",
  },
  {
    id: "koh-samui",
    src: "/images/moving-to-thailand/cities/Koh Samui.webp",
    alt: "Koh Samui coastal road with palm trees and turquoise bay",
  },
]
