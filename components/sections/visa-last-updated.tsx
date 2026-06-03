import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { formatContentIsoDate } from "@/lib/content/dates"
import type { ContentIsoDate, ContentVisaLastReviewed } from "@/lib/content/types"
import { visaPageClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

const DEFAULT_REVIEWED_BY = "Thai Visa Company"

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
  const reviewedBy = lastReviewed?.reviewedBy ?? DEFAULT_REVIEWED_BY

  return (
    <Section
      id={sectionId}
      spacing="compact"
      aria-label="Page freshness"
      className={cn(visaPageClass, "visa-last-updated-strip", className)}
    >
      <Container size="content">
        <p className="visa-last-updated-strip__meta">
          <span className="text-[var(--text-tertiary)]">Last updated:</span>{" "}
          <time dateTime={updatedAt}>{formatContentIsoDate(updatedAt)}</time>
          <span className="mx-2 text-[var(--text-tertiary)]" aria-hidden>
            ·
          </span>
          <span>
            Reviewed by <span className="text-[var(--text-secondary)]">{reviewedBy}</span>
          </span>
        </p>
      </Container>
    </Section>
  )
}

export { VisaLastUpdatedSection }
export type { VisaLastUpdatedSectionProps }
