import { CONTACT_URLS } from "@/lib/contact"
import { getSiteUrl } from "@/lib/seo"
import {
  getSiteContactPhone,
  siteBrand,
  siteLocation,
  siteMetadata,
  siteSocial,
} from "@/lib/site"

import type {
  AggregateRatingInput,
  ReviewItemInput,
} from "@/lib/schema/types"

/** Google Business / Maps reviews listing — from `siteSocial` */
export const googleReviewsUrl = siteSocial.googleReviews

/**
 * Single source of truth for Organization & LocalBusiness schema.
 * Import here for JSON-LD; mirror key fields in UI where needed.
 */
export const platformBusinessProfile = {
  name: siteBrand.name,
  tagline: siteBrand.tagline,
  url: () => getSiteUrl().origin,
  description: siteMetadata.defaultDescription,
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
    email: CONTACT_URLS.email,
    line: CONTACT_URLS.line,
    whatsapp: CONTACT_URLS.whatsapp,
    telephone: getSiteContactPhone(),
  },
  googleReviews: {
    url: siteSocial.googleReviews,
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: 120,
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
        "The process was much easier than expected. Fast replies and clear explanations throughout.",
    },
    {
      author: "Emily K.",
      location: "United States",
      ratingValue: 5,
      reviewBody:
        "Every step was explained in plain language. I always knew what to prepare before sending documents.",
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
    addressLocality: siteLocation.addressLocality,
    addressCountry: siteLocation.addressCountry,
  },
  geo: siteLocation.geo,
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
