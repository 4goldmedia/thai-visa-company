import { ReviewCard, StarRating } from "@/components/cards/review-card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SectionReveal } from "@/components/motion"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import {
  sectionContentOffsetClass,
  sectionDividerClass,
  textLinkClass,
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

import {
  googleReviewsUrl,
  platformBusinessProfile,
} from "@/lib/schema/business-profile"

const reviewSummary = {
  rating: platformBusinessProfile.googleReviews.aggregateRating.ratingValue,
  reviewCount: platformBusinessProfile.googleReviews.aggregateRating.reviewCount,
} as const

const reviews = platformBusinessProfile.reviews.map((item) => ({
  name: item.author,
  location: item.location ?? "",
  rating: item.ratingValue,
  review: item.reviewBody,
}))

function Reviews() {
  return (
    <SectionReveal className="flex flex-col">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <SectionHeading
          id={sectionHeadingIds.reviews}
          wrapper="div"
          eyebrow="Client reviews"
          title="Trusted by foreigners across Thailand"
          description="Clients value clear visa guidance and fast replies when requirements change."
          titleClassName="max-w-xl"
          className="flex-1"
        />
        <aside
          className="shrink-0 sm:text-right"
          aria-label={`${reviewSummary.rating} out of 5 average from ${reviewSummary.reviewCount} Google reviews`}
        >
          <p className="text-xl font-semibold tabular-nums tracking-tight text-foreground sm:text-2xl">
            {reviewSummary.rating}
          </p>
          <StarRating rating={reviewSummary.rating} className="mt-1.5 sm:justify-end" />
          <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground">
            {reviewSummary.reviewCount} Google reviews
          </p>
        </aside>
      </div>

      <ul
        aria-label="Client review excerpts"
        className={cn(
          sectionContentOffsetClass,
          "grid list-none grid-cols-1 gap-3.5 p-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5"
        )}
      >
        {reviews.map((item) => (
          <li key={item.name} className="flex min-w-0 sm:h-full">
            <ReviewCard
              name={item.name}
              location={item.location}
              review={item.review}
              rating={item.rating}
              className="w-full"
            />
          </li>
        ))}
      </ul>

      <p className="mt-6 sm:mt-7">
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={textLinkClass}
        >
          View all reviews on Google
        </a>
      </p>
    </SectionReveal>
  )
}

function ReviewsSection() {
  return (
    <Section
      id={sectionIds.reviews}
      aria-labelledby={sectionHeadingIds.reviews}
      className={sectionDividerClass}
    >
      <Container>
        <Reviews />
      </Container>
    </Section>
  )
}

export { Reviews, ReviewsSection, reviews, reviewSummary }
