import {
  getPlatformSameAsUrls,
  platformBusinessProfile,
} from "@/lib/schema/business-profile"
import { getSiteUrl } from "@/lib/seo"

/** Stable `@id` anchors for entity linking across graphs */
export function getSchemaEntityIds() {
  const origin = getSiteUrl().origin
  return {
    organization: `${origin}/#organization`,
    localBusiness: `${origin}/#localbusiness`,
    website: `${origin}/#website`,
  } as const
}

export function getDefaultOrganizationInput() {
  const profile = platformBusinessProfile

  return {
    name: profile.name,
    tagline: profile.tagline,
    description: profile.description,
    url: profile.url(),
    sameAs: getPlatformSameAsUrls(),
    areaServed: [...profile.areaServed],
    contactEmail: profile.contact.email,
    knowsAbout: [...profile.knowsAbout],
    serviceType: profile.serviceType,
  } as const
}

export function getDefaultLocalBusinessInput() {
  const profile = platformBusinessProfile

  return {
    ...getDefaultOrganizationInput(),
    telephone: profile.contact.telephone,
    priceRange: profile.priceRange,
    address: profile.address,
    geo: profile.geo,
    aggregateRating: profile.googleReviews.aggregateRating,
    reviews: profile.reviews,
    googleReviewsUrl: profile.googleReviews.url,
  } as const
}

export { platformBusinessProfile, getPlatformSameAsUrls }
