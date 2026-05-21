import { contactLinks } from "@/lib/navigation"
import { getSiteUrl } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

import type {
  AggregateRatingInput,
  ReviewItemInput,
} from "@/lib/schema/types"

/** Google Business / Maps reviews listing */
export const googleReviewsUrl =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ??
  "https://www.google.com/maps"

/**
 * Single source of truth for Organization & LocalBusiness schema.
 * Import here for JSON-LD; mirror key fields in UI where needed.
 */
export const platformBusinessProfile = {
  name: siteConfig.name,
  tagline: siteConfig.tagline,
  url: () => getSiteUrl().origin,
  description:
    "Professional Thailand visa support for foreigners. Clear guidance on retirement, DTV, business, Elite, and long-stay visas—with fast, practical help on LINE and WhatsApp.",
  /** Visa expertise signals for search and AI extraction */
  knowsAbout: [
    "Thailand visa application",
    "Thailand retirement visa",
    "Thailand DTV visa",
    "Thailand business visa",
    "Thailand Elite visa",
    "Thailand visa extension",
    "Thailand immigration support",
  ] as const,
  serviceType: "Thailand visa consulting",
  areaServed: ["Thailand", "Worldwide"] as const,
  contact: {
    email: contactLinks.email,
    line: contactLinks.line,
    whatsapp: contactLinks.whatsapp,
    telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  },
  googleReviews: {
    url: googleReviewsUrl,
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: "120+",
      bestRating: 5,
      worstRating: 1,
    } satisfies AggregateRatingInput,
  },
  /** Representative client excerpts — align with homepage reviews section */
  reviews: [
    {
      author: "James R.",
      location: "United Kingdom",
      ratingValue: 5,
      reviewBody:
        "Replied quickly on LINE and explained my tourist visa options in a way that was easy to follow.",
    },
    {
      author: "Emily K.",
      location: "United States",
      ratingValue: 5,
      reviewBody:
        "DTV requirements were laid out step by step. I always knew what to prepare before sending anything.",
    },
    {
      author: "Markus W.",
      location: "Germany",
      ratingValue: 5,
      reviewBody:
        "Consistent support during my business visa application. Practical answers, not vague general advice.",
    },
  ] satisfies ReadonlyArray<ReviewItemInput>,
  address: {
    addressLocality: "Bangkok",
    addressCountry: "TH",
  },
  geo: {
    latitude: 13.7563,
    longitude: 100.5018,
  },
  priceRange: "$$",
  availableLanguages: ["English", "Thai"] as const,
} as const

export function getPlatformSameAsUrls(): string[] {
  const urls = [
    platformBusinessProfile.contact.line,
    platformBusinessProfile.contact.whatsapp,
    platformBusinessProfile.googleReviews.url,
  ]
  return urls.filter((url) => typeof url === "string" && url.length > 0)
}
