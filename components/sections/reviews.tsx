import { ArrowRight } from "lucide-react"

import { ReviewCard } from "@/components/cards/review-card"
import { GoogleReviewSummary } from "@/components/ui/google-review-summary"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import {
  clientReviewsSectionCopy,
  homepageClientReviews,
} from "@/lib/content/client-reviews"
import { googleReviewsUrl } from "@/lib/schema/business-profile"
import { defaultGoogleReviewSummary } from "@/lib/reviews/google-summary"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { cn } from "@/lib/utils"

function Reviews() {
  const { eyebrow, title, description, footerLink } = clientReviewsSectionCopy

  return (
    <SectionReveal className="flex flex-col">
      <header className="reviews-section__header">
        <div className="reviews-section__intro">
          <p className="reviews-section__eyebrow">{eyebrow}</p>
          <h2 id={sectionHeadingIds.reviews} className="reviews-section__title">
            {title}
          </h2>
          <p className="reviews-section__description">{description}</p>
        </div>

        <GoogleReviewSummary
          rating={defaultGoogleReviewSummary.rating}
          reviewCount={defaultGoogleReviewSummary.reviewCount}
          bestRating={defaultGoogleReviewSummary.bestRating}
          href={defaultGoogleReviewSummary.href}
          layout="stacked"
          size="md"
          variant="dark"
          stackedScoreStyle="editorial"
          showStackedStars={false}
          linkToReviews
          className="shrink-0"
        />
      </header>

      <ul
        aria-label="Client review excerpts"
        className={cn(
          "reviews-section__grid",
          "mt-[var(--space-heading-offset-md)] lg:mt-[var(--space-heading-offset-lg)]",
        )}
      >
        {homepageClientReviews.map((item) => (
          <li key={item.id} className="flex min-w-0">
            <ReviewCard
              name={item.name}
              location={item.location}
              visaType={item.visaType}
              review={item.review}
              rating={item.rating}
              avatarSrc={item.avatar.src}
              avatarAlt={item.avatar.alt}
              className="w-full"
            />
          </li>
        ))}
      </ul>

      <p className="mt-8 sm:mt-9">
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="reviews-section__footer-link group"
        >
          {footerLink}
          <ArrowRight
            className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            aria-hidden
          />
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
      className="reviews-section"
    >
      <Container>
        <Reviews />
      </Container>
    </Section>
  )
}

export { Reviews, ReviewsSection, homepageClientReviews as reviews }
