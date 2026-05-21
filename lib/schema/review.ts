import { buildLocalBusiness } from "@/lib/schema/local-business"
import { buildOrganizationReference } from "@/lib/schema/organization"
import type {
  AggregateRatingInput,
  JsonLdEntityRef,
  JsonLdNode,
  LocalBusinessInput,
  ReviewItemInput,
} from "@/lib/schema/types"
import { compactNode } from "@/lib/schema/utils"

export function buildAggregateRating(
  input: AggregateRatingInput,
): JsonLdNode {
  return compactNode({
    "@type": "AggregateRating",
    ratingValue: input.ratingValue,
    reviewCount: input.reviewCount,
    bestRating: input.bestRating ?? 5,
    worstRating: input.worstRating ?? 1,
  })
}

export function buildReview(
  input: ReviewItemInput,
  options?: { itemReviewed?: JsonLdEntityRef },
): JsonLdNode {
  const author: JsonLdNode = input.location
    ? {
        "@type": "Person",
        name: input.author,
        homeLocation: input.location,
      }
    : {
        "@type": "Person",
        name: input.author,
      }

  return compactNode({
    "@type": "Review",
    author,
    reviewBody: input.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: input.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    itemReviewed: options?.itemReviewed ?? buildOrganizationReference(),
  })
}

export type EntityWithReviewsInput = {
  entity?: JsonLdNode
  localBusiness?: LocalBusinessInput
  reviews: ReadonlyArray<ReviewItemInput>
  aggregateRating?: AggregateRatingInput
}

/**
 * Attach reviews and aggregate rating to Organization or LocalBusiness.
 * Prefer LocalBusiness when a physical/service presence is relevant.
 */
export function buildEntityWithReviews(
  input: EntityWithReviewsInput,
): JsonLdNode {
  const base =
    input.entity ??
    (input.localBusiness !== undefined
      ? buildLocalBusiness(input.localBusiness)
      : buildLocalBusiness())

  return compactNode({
    ...base,
    ...(input.aggregateRating
      ? { aggregateRating: buildAggregateRating(input.aggregateRating) }
      : {}),
    ...(input.reviews.length
      ? { review: input.reviews.map((item) => buildReview(item)) }
      : {}),
  })
}
