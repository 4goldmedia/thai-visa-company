/**
 * Editorial asset library — theme-organized photography metadata for blog art direction.
 *
 * Select assets by editorial purpose (subject, mood, topics), not by keyword search.
 * Blog articles must use assets where `visaPageOnly` is false.
 *
 * @see rules/content/visual-storytelling-system.mdc
 * @see rules/content/editorial-image-policy.mdc
 */

export const editorialAssetThemes = [
  "bangkok-city-life",
  "remote-work",
  "thai-business",
  "immigration",
  "airports",
  "family-relocation",
  "retirement-lifestyle",
  "cafes",
  "condominiums",
  "coworking",
  "education",
  "entrepreneurship",
  "thai-coastline",
  "relocation-lifestyle",
] as const

export type EditorialAssetTheme = (typeof editorialAssetThemes)[number]

export type EditorialAssetOrientation = "landscape" | "portrait" | "square"

export type EditorialAsset = {
  id: string
  src: string
  alt: string
  objectPosition?: string
  subject: string
  mood: string
  orientation: EditorialAssetOrientation
  location?: string
  topics: ReadonlyArray<string>
  themes: ReadonlyArray<EditorialAssetTheme>
  /** Page or article slugs where this asset has been used */
  previousUsage: ReadonlyArray<string>
  /** Reserved for visa service pages — blog articles must not use */
  visaPageOnly?: boolean
}

export const editorialAssetLibrary = {
  "bangkok-skyline-ls": {
    id: "bangkok-skyline-ls",
    src: "/images/hero/Bangkok-skyline-LS.webp",
    alt: "Bangkok skyline at golden hour from a luxury terrace, suggesting premium long-stay living in Thailand",
    objectPosition: "center center",
    subject: "Bangkok skyline at golden hour",
    mood: "cinematic, aspirational, urban",
    orientation: "landscape",
    location: "Bangkok",
    topics: ["long-stay", "route selection", "city life", "living in thailand"],
    themes: ["bangkok-city-life", "relocation-lifestyle"],
    previousUsage: ["homepage"],
  },
  "pattaya-coastline-hero": {
    id: "pattaya-coastline-hero",
    src: "/images/editorial/Pattaya-skyline.webp",
    alt: "Pattaya coastline and city skyline from a high-rise balcony, suggesting premium long-stay living in Thailand",
    objectPosition: "center 42%",
    subject: "Coastal city skyline from a condominium balcony",
    mood: "aspirational, calm, residential, premium",
    orientation: "landscape",
    location: "Pattaya",
    topics: ["long-stay", "route selection", "living in thailand", "condominium"],
    themes: ["thai-coastline", "condominiums", "relocation-lifestyle"],
    previousUsage: ["blog/best-visa-for-living-in-thailand"],
  },
  "work-income-thailand": {
    id: "work-income-thailand",
    src: "/images/editorial/work-in-thailand.webp",
    alt: "Laptop showing monthly income beside a notebook on a balcony desk, with tropical coastline and hills beyond",
    objectPosition: "center center",
    subject: "Remote work desk with income planning overlooking Thailand",
    mood: "focused, documentary, purposeful",
    orientation: "portrait",
    location: "Thailand coast",
    topics: ["remote work", "income", "route selection", "dtv", "work intent"],
    themes: ["remote-work", "coworking", "relocation-lifestyle"],
    previousUsage: ["blog/best-visa-for-living-in-thailand"],
  },
  "bangkok-skyline-mv": {
    id: "bangkok-skyline-mv",
    src: "/images/hero/Bangkok-skyline-MV.webp",
    alt: "Bangkok skyline at golden hour, suggesting premium long-stay living in Thailand",
    objectPosition: "center center",
    subject: "Bangkok skyline portrait crop",
    mood: "cinematic, aspirational, urban",
    orientation: "portrait",
    location: "Bangkok",
    topics: ["long-stay", "city life"],
    themes: ["bangkok-city-life"],
    previousUsage: ["homepage"],
  },
  "thailand-longtail-boats": {
    id: "thailand-longtail-boats",
    src: "/images/editorial/moving-simple.jpg",
    alt: "Long-tail boats on calm water in Thailand, suggesting everyday life beyond visa paperwork",
    objectPosition: "center 42%",
    subject: "Long-tail boats on calm water",
    mood: "calm, documentary, local life",
    orientation: "landscape",
    location: "Southern Thailand",
    topics: ["relocation", "lifestyle", "everyday life"],
    themes: ["relocation-lifestyle", "thai-coastline"],
    previousUsage: ["homepage/why-thailand"],
  },
  "thai-business-meeting-alt": {
    id: "thai-business-meeting-alt",
    src: "/images/visas/business.jpg",
    alt: "Professionals in a modern workspace discussion, suggesting employer-sponsored work in Thailand",
    objectPosition: "center 45%",
    subject: "Professionals in a workspace discussion",
    mood: "focused, professional, understated",
    orientation: "landscape",
    location: "Bangkok",
    topics: ["employment", "business visa", "work permit", "sponsor"],
    themes: ["thai-business", "entrepreneurship"],
    previousUsage: ["homepage/why-thailand"],
  },
  "business-visa-work-permit-comparison-hero": {
    id: "business-visa-work-permit-comparison-hero",
    src: "/images/editorial/thailand-visa-work-permit.webp",
    alt: "Thai business visa and work permit documents shown side by side in a modern office, illustrating the difference between the two",
    objectPosition: "center center",
    subject: "Business visa passport and work permit card held side by side",
    mood: "clear, professional, documentary",
    orientation: "landscape",
    location: "Bangkok",
    topics: [
      "business visa",
      "work permit",
      "visa comparison",
      "non-immigrant b",
      "employment",
    ],
    themes: ["thai-business", "immigration"],
    previousUsage: ["blog/business-visa-vs-work-permit-thailand"],
  },
  "krabi-coastline": {
    id: "krabi-coastline",
    src: "/images/editorial/krabi-thailand-beachside.webp",
    alt: "Calm turquoise water and limestone cliffs in Krabi, suggesting a peaceful relocation to Thailand",
    objectPosition: "28% 52%",
    subject: "Turquoise water and limestone cliffs",
    mood: "calm, premium, coastal",
    orientation: "landscape",
    location: "Krabi",
    topics: ["tourism", "coastal life", "relocation"],
    themes: ["thai-coastline", "retirement-lifestyle"],
    previousUsage: ["homepage/moving-simple", "visas/tourist"],
    visaPageOnly: true,
  },
  "dtv-remote-work-visa-hero": {
    id: "dtv-remote-work-visa-hero",
    src: "/images/visas/dtv-remote-work.jpg",
    alt: "Professional working on a laptop on a balcony overlooking a city skyline, suggesting remote work life in Thailand",
    objectPosition: "center 42%",
    subject: "Remote work on a balcony with city view",
    mood: "productive, modern, aspirational",
    orientation: "landscape",
    location: "Bangkok",
    topics: ["dtv", "remote work", "digital nomad"],
    themes: ["remote-work", "coworking"],
    previousUsage: ["visas/dtv", "homepage/why-thailand"],
    visaPageOnly: true,
  },
  "business-visa-service-hero": {
    id: "business-visa-service-hero",
    src: "/images/visas/thailand-business-visa-2.webp",
    alt: "Business team in a modern meeting room, suggesting international business relocation to Thailand",
    objectPosition: "center 45%",
    subject: "Business team in a meeting room",
    mood: "professional, corporate, collaborative",
    orientation: "landscape",
    location: "Bangkok",
    topics: ["business visa", "employment", "sponsorship"],
    themes: ["thai-business"],
    previousUsage: ["visas/business"],
    visaPageOnly: true,
  },
  "retirement-beach-visa-hero": {
    id: "retirement-beach-visa-hero",
    src: "/images/visas/retirement.png",
    alt: "Calm tropical beach at golden hour with lounge chairs and palm trees, suggesting relaxed premium retirement life in Thailand",
    objectPosition: "center 55%",
    subject: "Tropical beach at golden hour",
    mood: "calm, warm, unhurried",
    orientation: "landscape",
    location: "Thailand coast",
    topics: ["retirement", "long-stay"],
    themes: ["retirement-lifestyle", "thai-coastline"],
    previousUsage: ["visas/retirement"],
    visaPageOnly: true,
  },
  "education-visa-hero": {
    id: "education-visa-hero",
    src: "/images/visas/thailand-education-visa.webp",
    alt: "Group of friends in a warm social setting, suggesting family relocation and study life in Thailand",
    objectPosition: "center 38%",
    subject: "Warm social group setting",
    mood: "welcoming, social, youthful",
    orientation: "landscape",
    location: "Thailand",
    topics: ["education", "student visa", "family"],
    themes: ["education", "family-relocation"],
    previousUsage: ["visas/education"],
    visaPageOnly: true,
  },
  "elite-visa-hero": {
    id: "elite-visa-hero",
    src: "/images/visas/thailand-elite-visa.webp",
    alt: "Person in a refined interior setting with laptop, suggesting premium long-stay residency lifestyle",
    objectPosition: "center 40%",
    subject: "Refined interior with laptop",
    mood: "premium, quiet, understated",
    orientation: "landscape",
    location: "Bangkok",
    topics: ["elite", "premium residency"],
    themes: ["condominiums", "relocation-lifestyle"],
    previousUsage: ["visas/elite"],
    visaPageOnly: true,
  },
  "marriage-visa-hero": {
    id: "marriage-visa-hero",
    src: "/images/visas/education.jpg",
    alt: "Couple spending time together in Thailand, suggesting marriage and family visa life",
    objectPosition: "center 38%",
    subject: "Couple in a warm social setting",
    mood: "warm, intimate, domestic",
    orientation: "landscape",
    location: "Thailand",
    topics: ["marriage", "family", "spouse visa"],
    themes: ["family-relocation"],
    previousUsage: ["visas/marriage", "homepage/why-thailand"],
    visaPageOnly: true,
  },
  "ltr-visa-hero": {
    id: "ltr-visa-hero",
    src: "/images/visas/elite.jpg",
    alt: "Professional in a refined setting, suggesting long-term residence in Thailand",
    objectPosition: "center 40%",
    subject: "Professional in a refined setting",
    mood: "premium, composed, long-term",
    orientation: "landscape",
    location: "Bangkok",
    topics: ["ltr", "long-term resident"],
    themes: ["relocation-lifestyle", "condominiums"],
    previousUsage: ["visas/ltr"],
    visaPageOnly: true,
  },
} as const satisfies Record<string, EditorialAsset>

export type EditorialAssetId = keyof typeof editorialAssetLibrary

export function getEditorialAsset(id: EditorialAssetId): Pick<
  EditorialAsset,
  "src" | "alt" | "objectPosition"
> {
  const asset = editorialAssetLibrary[id]
  return {
    src: asset.src,
    alt: asset.alt,
    objectPosition: asset.objectPosition,
  }
}

export function getVisaPageImageSrcsFromLibrary(): Set<string> {
  return new Set(
    Object.values(editorialAssetLibrary)
      .filter((asset) => "visaPageOnly" in asset && asset.visaPageOnly === true)
      .map((asset) => asset.src),
  )
}

export function getBlogAvailableEditorialAssets(): EditorialAsset[] {
  return Object.values(editorialAssetLibrary).filter(
    (asset) => !("visaPageOnly" in asset && asset.visaPageOnly === true),
  )
}

export function getEditorialAssetsByTheme(
  theme: EditorialAssetTheme,
): EditorialAsset[] {
  return Object.values(editorialAssetLibrary).filter((asset) =>
    (asset.themes as ReadonlyArray<EditorialAssetTheme>).includes(theme),
  )
}

export function getEditorialAssetsByTopics(
  topics: ReadonlyArray<string>,
): EditorialAsset[] {
  const normalized = topics.map((topic) => topic.trim().toLowerCase())
  return Object.values(editorialAssetLibrary)
    .filter((asset) => !("visaPageOnly" in asset && asset.visaPageOnly === true))
    .filter((asset) =>
      asset.topics.some((topic) =>
        normalized.some(
          (needle) =>
            topic.toLowerCase().includes(needle) ||
            needle.includes(topic.toLowerCase()),
        ),
      ),
    )
}

export function isBlogAllowedEditorialSrc(src: string): boolean {
  const asset = Object.values(editorialAssetLibrary).find((item) => item.src === src)
  if (!asset) return true
  return !("visaPageOnly" in asset && asset.visaPageOnly === true)
}
