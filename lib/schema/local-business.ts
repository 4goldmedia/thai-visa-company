import { buildPlatformContactPoints } from "@/lib/schema/contact"
import { buildAggregateRating, buildReview } from "@/lib/schema/review"
import {
  getDefaultLocalBusinessInput,
  getSchemaEntityIds,
} from "@/lib/schema/site"
import { buildOrganizationReference } from "@/lib/schema/organization"
import { compactNode } from "@/lib/schema/utils"
import type { ContactPointInput, JsonLdNode, LocalBusinessInput } from "@/lib/schema/types"

function resolveContactPoints(
  input: LocalBusinessInput,
): JsonLdNode[] {
  if (input.contactPoint?.length) {
    return input.contactPoint.map((point) =>
      "@type" in point && typeof point["@type"] === "string"
        ? (point as JsonLdNode)
        : compactNode({
            "@type": "ContactPoint",
            ...(point as ContactPointInput),
          }),
    )
  }
  return buildPlatformContactPoints()
}

/**
 * LocalBusiness + ProfessionalService — primary trust entity for visa support.
 * Includes LINE/WhatsApp contact, Google reviews, and client excerpts.
 */
export function buildLocalBusiness(
  input: LocalBusinessInput = {},
): JsonLdNode {
  const defaults = getDefaultLocalBusinessInput()
  const ids = getSchemaEntityIds()
  const orgRef = buildOrganizationReference()
  const address = input.address ?? defaults.address
  const geo = input.geo ?? defaults.geo
  const contactPoint = resolveContactPoints(input)
  const aggregateRating = input.aggregateRating ?? defaults.aggregateRating
  const reviews = input.reviews ?? defaults.reviews

  return compactNode({
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": ids.localBusiness,
    name: input.name ?? defaults.name,
    description: input.description ?? defaults.description,
    ...(input.tagline ?? defaults.tagline
      ? { slogan: input.tagline ?? defaults.tagline }
      : {}),
    url: input.url ?? defaults.url,
    parentOrganization: orgRef,
    ...(input.serviceType ?? defaults.serviceType
      ? { serviceType: input.serviceType ?? defaults.serviceType }
      : {}),
    ...(input.knowsAbout ?? defaults.knowsAbout
      ? { knowsAbout: input.knowsAbout ?? defaults.knowsAbout }
      : {}),
    areaServed: input.areaServed ?? defaults.areaServed,
    ...(input.telephone ?? defaults.telephone
      ? { telephone: input.telephone ?? defaults.telephone }
      : {}),
    ...(input.contactEmail ?? defaults.contactEmail
      ? { email: input.contactEmail ?? defaults.contactEmail }
      : {}),
    ...(input.priceRange ?? defaults.priceRange
      ? { priceRange: input.priceRange ?? defaults.priceRange }
      : {}),
    ...(input.sameAs?.length || defaults.sameAs.length
      ? { sameAs: input.sameAs ?? [...defaults.sameAs] }
      : {}),
    ...(contactPoint.length ? { contactPoint } : {}),
    ...(address
      ? {
          address: {
            "@type": "PostalAddress",
            ...address,
          },
        }
      : {}),
    ...(geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: geo.latitude,
            longitude: geo.longitude,
          },
        }
      : {}),
    ...(input.openingHours?.length ? { openingHours: input.openingHours } : {}),
    ...(aggregateRating
      ? { aggregateRating: buildAggregateRating(aggregateRating) }
      : {}),
    ...(reviews.length
      ? {
          review: reviews.map((item) =>
            buildReview(item, { itemReviewed: { "@id": ids.localBusiness } }),
          ),
        }
      : {}),
  })
}
