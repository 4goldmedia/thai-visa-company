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
  caption?: string
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
  "elite-worth-it-lobby-hero": {
    id: "elite-worth-it-lobby-hero",
    src: "/images/editorial/thailand-elite-visa-worth-it-hero.jpg",
    alt: "Luxury hotel-style lobby in Thailand representing premium long-term residency services",
    caption:
      "The Thailand Elite Visa is designed for people who value convenience, flexibility, and long-term access to Thailand-but whether it's worth the investment depends on your lifestyle and priorities.",
    objectPosition: "center 50%",
    subject: "Modern premium lobby environment in Thailand",
    mood: "editorial, premium, understated, realistic",
    orientation: "landscape",
    location: "Thailand",
    topics: [
      "elite visa",
      "premium residency",
      "long-term access",
      "lifestyle decision",
      "value comparison",
    ],
    themes: ["condominiums", "relocation-lifestyle", "bangkok-city-life"],
    previousUsage: ["blog/thailand-elite-visa-worth-it"],
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
  "dtv-visa-rejection-reasons-hero": {
    id: "dtv-visa-rejection-reasons-hero",
    src: "/images/editorial/dtv-visa-rejection-reasons-hero.jpg",
    alt: "Immigration officer reviewing visa documents at an immigration counter in Thailand",
    caption:
      "Many DTV visa refusals result from documentation, eligibility, or application issues that can often be avoided with proper preparation.",
    objectPosition: "center 45%",
    subject: "Immigration officer reviewing documents at a counter",
    mood: "documentary, procedural, professional, neutral",
    orientation: "landscape",
    location: "Thailand",
    topics: [
      "dtv",
      "visa rejection",
      "immigration",
      "documentation",
      "eligibility",
    ],
    themes: ["immigration", "airports"],
    previousUsage: ["blog/dtv-visa-rejection-reasons"],
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
  "re-entry-permit-thailand-hero": {
    id: "re-entry-permit-thailand-hero",
    src: "/images/editorial/re-entry-permit-thailand-hero.jpg",
    alt: "Traveler arriving at Suvarnabhumi Airport in Bangkok with luggage before an international departure",
    caption:
      "A re-entry permit protects your permission to stay in Thailand when you leave the country and plan to return before your visa or extension expires.",
    objectPosition: "center 46%",
    subject: "Traveler with luggage outside Suvarnabhumi Airport terminal and taxi lane",
    mood: "documentary, transitional, grounded, cinematic",
    orientation: "landscape",
    location: "Bangkok",
    topics: [
      "re-entry permit",
      "travel",
      "airport departure",
      "permission to stay",
      "immigration compliance",
    ],
    themes: ["airports", "immigration", "relocation-lifestyle"],
    previousUsage: ["blog/re-entry-permit-thailand"],
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
  "change-visa-type-hero": {
    id: "change-visa-type-hero",
    src: "/images/editorial/change-visa-type-in-thailand-hero.jpg",
    alt: "Traveler in Bangkok airport looking toward immigration and connecting flight signs while planning the next stage of a journey",
    caption:
      "Some visa changes can be completed inside Thailand, while others require leaving the country and applying again from abroad.",
    objectPosition: "center 42%",
    subject: "Traveler reading airport immigration and connecting flight signage",
    mood: "documentary, transitional, purposeful, natural light",
    orientation: "landscape",
    location: "Bangkok",
    topics: [
      "change visa type",
      "immigration",
      "connecting flights",
      "visa conversion",
      "airport",
    ],
    themes: ["airports", "immigration", "relocation-lifestyle"],
    previousUsage: ["blog/change-visa-type-in-thailand"],
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
  "can-i-work-without-permit-hero": {
    id: "can-i-work-without-permit-hero",
    src: "/images/editorial/can-i-work-in-thailand-without-a-work-permit-hero.jpg",
    alt: "Person reviewing employment and immigration documents at a desk before working in Thailand",
    caption:
      "Working legally in Thailand depends on the type of work you perform, not simply whether you entered the country with a visa.",
    objectPosition: "center 48%",
    subject: "Hands reviewing passport and paperwork at a desk",
    mood: "documentary, focused, professional, real-world",
    orientation: "landscape",
    location: "Thailand",
    topics: [
      "work permit",
      "employment",
      "work authorization",
      "business visa",
      "immigration documents",
    ],
    themes: ["thai-business", "immigration"],
    previousUsage: ["blog/can-i-work-in-thailand-without-a-work-permit"],
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
  "dtv-lifestyle-editorial": {
    id: "dtv-lifestyle-editorial",
    src: "/images/visas/dtv.jpg",
    alt: "Laptop and notebook on a balcony desk overlooking tropical hills, suggesting remote work life in Thailand",
    objectPosition: "center 42%",
    subject: "Remote work setup with laptop overlooking Thailand",
    mood: "productive, calm, aspirational",
    orientation: "landscape",
    location: "Thailand",
    topics: ["dtv", "remote work", "digital nomad", "tourist visa comparison"],
    themes: ["remote-work", "coworking", "relocation-lifestyle"],
    previousUsage: [],
  },
  "dtv-vs-tourist-visa-hero": {
    id: "dtv-vs-tourist-visa-hero",
    src: "/images/editorial/dtv-visa-vs-tourist-visa-thailand-hero.jpg",
    alt: "Remote professionals working from a coworking café in Thailand",
    caption:
      "While a tourist visa is designed for short visits, the DTV is intended for eligible remote workers and digital professionals seeking longer stays.",
    objectPosition: "center 45%",
    subject: "Professionals working in a coworking café",
    mood: "documentary, productive, social, natural light",
    orientation: "landscape",
    location: "Thailand",
    topics: [
      "dtv",
      "tourist visa",
      "remote work",
      "digital nomad",
      "visa comparison",
    ],
    themes: ["coworking", "remote-work", "cafes"],
    previousUsage: ["blog/dtv-visa-vs-tourist-visa-thailand"],
  },
  "blog-bangkok-skyline-aerial": {
    id: "blog-bangkok-skyline-aerial",
    src: "https://images.unsplash.com/photo-1519451241324-669684f840ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Bangkok skyline at dusk from above, suggesting long-term urban living in Thailand",
    objectPosition: "center 45%",
    subject: "Bangkok skyline aerial at dusk",
    mood: "cinematic, urban, aspirational",
    orientation: "landscape",
    location: "Bangkok",
    topics: ["living in thailand", "long-stay", "relocation", "permanent residence"],
    themes: ["bangkok-city-life", "relocation-lifestyle"],
    previousUsage: [],
  },
  "can-foreigners-live-permanently-hero": {
    id: "can-foreigners-live-permanently-hero",
    src: "/images/editorial/can-foreigners-live-in-thailand-permanently-hero.jpg",
    alt: "Bangkok skyline at sunset viewed over the Chao Phraya River, representing long-term living in Thailand",
    caption:
      "Thailand can become a long-term home through several visa pathways, depending on your circumstances.",
    objectPosition: "center 42%",
    subject: "Bangkok skyline and Chao Phraya River at sunset",
    mood: "cinematic, aspirational, urban, warm",
    orientation: "landscape",
    location: "Bangkok",
    topics: [
      "living in thailand",
      "long-stay",
      "relocation",
      "permanent residence",
      "move to thailand",
    ],
    themes: ["bangkok-city-life", "relocation-lifestyle"],
    previousUsage: ["blog/can-foreigners-live-in-thailand-permanently"],
  },
  "blog-thailand-coast-golden-hour": {
    id: "blog-thailand-coast-golden-hour",
    src: "https://images.unsplash.com/photo-1508009601955-dbcf84f53743?auto=format&fit=crop&w=1200&q=80",
    alt: "Calm Thailand coastline at golden hour, suggesting relaxed long-term retirement living",
    objectPosition: "center 55%",
    subject: "Tropical coastline at golden hour",
    mood: "calm, warm, unhurried",
    orientation: "landscape",
    location: "Thailand coast",
    topics: ["retirement", "o visa", "o-a visa", "long-stay"],
    themes: ["retirement-lifestyle", "thai-coastline"],
    previousUsage: [],
  },
  "retirement-o-vs-oa-market-hero": {
    id: "retirement-o-vs-oa-market-hero",
    src: "/images/editorial/retirement-visa-o-vs-o-a-thailand-hero.jpg",
    alt: "Retired couple shopping at a local morning market in Thailand",
    caption:
      "Choosing between the Non-Immigrant O and O-A Retirement Visa depends on where you apply, your documentation, and your long-term plans in Thailand.",
    objectPosition: "center 48%",
    subject: "Retired couple browsing fresh produce at a Thai morning market",
    mood: "documentary, everyday life, grounded, warm",
    orientation: "landscape",
    location: "Thailand",
    topics: [
      "retirement visa",
      "o visa",
      "o-a visa",
      "retirement planning",
      "everyday life",
    ],
    themes: ["retirement-lifestyle", "relocation-lifestyle", "thai-coastline"],
    previousUsage: ["blog/retirement-visa-o-vs-o-a-thailand"],
  },
  "blog-dtv-retirement-comparison": {
    id: "blog-dtv-retirement-comparison",
    src: "https://images.unsplash.com/photo-1528183429752-a73d79fbfce4?auto=format&fit=crop&w=1200&q=80",
    alt: "Quiet temple courtyard in Thailand, suggesting a settled long-term life beyond short-stay tourism",
    objectPosition: "center 40%",
    subject: "Temple courtyard in Thailand",
    mood: "calm, documentary, rooted",
    orientation: "landscape",
    location: "Thailand",
    topics: ["dtv", "retirement", "visa comparison", "long-stay"],
    themes: ["relocation-lifestyle", "retirement-lifestyle"],
    previousUsage: ["blog/dtv-vs-retirement-visa-thailand"],
  },
  "blog-premium-long-stay-interior": {
    id: "blog-premium-long-stay-interior",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    alt: "Refined hotel pool terrace at dusk, suggesting premium long-stay membership living in Thailand",
    objectPosition: "center 42%",
    subject: "Premium pool terrace at dusk",
    mood: "premium, quiet, understated",
    orientation: "landscape",
    location: "Thailand",
    topics: ["elite visa", "retirement", "premium residency", "membership"],
    themes: ["condominiums", "relocation-lifestyle"],
    previousUsage: [],
  },
  "elite-vs-retirement-lifestyle-hero": {
    id: "elite-vs-retirement-lifestyle-hero",
    src: "/images/editorial/thailand-elite-visa-vs-retirement-visa-hero.jpg",
    alt: "Luxury residential setting in Thailand representing long-term lifestyle choices",
    caption:
      "Both the Thailand Elite Visa and Retirement Visa provide long-term access to Thailand, but they suit very different lifestyles, eligibility requirements, and budgets.",
    objectPosition: "center 48%",
    subject: "Calm premium residential landscape in Thailand",
    mood: "editorial, premium, calm, realistic",
    orientation: "landscape",
    location: "Thailand",
    topics: [
      "elite visa",
      "retirement visa",
      "long-term living",
      "lifestyle comparison",
      "budget planning",
    ],
    themes: ["condominiums", "relocation-lifestyle", "retirement-lifestyle"],
    previousUsage: ["blog/thailand-elite-visa-vs-retirement-visa"],
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
  "src" | "alt" | "caption" | "objectPosition"
> {
  const asset = editorialAssetLibrary[id]
  return {
    src: asset.src,
    alt: asset.alt,
    caption: "caption" in asset ? asset.caption : undefined,
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
