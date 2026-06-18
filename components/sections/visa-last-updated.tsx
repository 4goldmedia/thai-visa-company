import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { formatContentIsoDate } from "@/lib/content/dates"
import type { ContentIsoDate, ContentVisaLastReviewed } from "@/lib/content/types"
import { editorialLinkClass } from "@/lib/section-styles"
import { visaPageClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaLastUpdatedSectionProps = {
  sectionId: string
  updatedAt: ContentIsoDate
  lastReviewed?: ContentVisaLastReviewed
  className?: string
}

function VisaLastUpdatedSection({
  sectionId,
  updatedAt,
  lastReviewed,
  className,
}: VisaLastUpdatedSectionProps) {
  const reviewerName = lastReviewed?.reviewerName
  const reviewDate = lastReviewed?.reviewDate

  return (
    <Section
      id={sectionId}
      spacing="compact"
      aria-label="Page freshness"
      className={cn(visaPageClass, "visa-last-updated-strip", className)}
    >
      <Container>
        <p className="visa-last-updated-strip__meta">
          <span className="text-[var(--text-tertiary)]">Last updated:</span>{" "}
          <time dateTime={updatedAt}>{formatContentIsoDate(updatedAt)}</time>
          {reviewerName ? (
            <>
              <span className="mx-2 text-[var(--text-tertiary)]" aria-hidden>
                ·
              </span>
              <span>
                Reviewed by{" "}
                {lastReviewed?.reviewerUrl ? (
                  <Link href={lastReviewed.reviewerUrl} className={editorialLinkClass}>
                    {reviewerName}
                  </Link>
                ) : (
                  <span className="text-[var(--text-secondary)]">{reviewerName}</span>
                )}
                {lastReviewed?.reviewerTitle ? (
                  <span className="text-[var(--text-tertiary)]">
                    , {lastReviewed.reviewerTitle}
                  </span>
                ) : null}
                {reviewDate ? (
                  <>
                    {" "}
                    on{" "}
                    <time dateTime={reviewDate}>
                      {formatContentIsoDate(reviewDate)}
                    </time>
                  </>
                ) : null}
              </span>
            </>
          ) : null}
        </p>
      </Container>
    </Section>
  )
}

export { VisaLastUpdatedSection }
export type { VisaLastUpdatedSectionProps }
