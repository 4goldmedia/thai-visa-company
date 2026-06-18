import Link from "next/link"

import { SectionReveal } from "@/components/motion"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import { formatContentIsoDate } from "@/lib/content/dates"
import type { ContentVisaEeatSection, ContentVisaLastReviewed } from "@/lib/content/types"
import { editorialLinkClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type VisaEeatSectionProps = ContentVisaEeatSection & {
  sectionId: string
  headingId: string
  lastReviewed?: ContentVisaLastReviewed
  className?: string
}

function VisaEeatSection({
  sectionId,
  headingId,
  title = "Editorial standards",
  description,
  eyebrow,
  methodology,
  contentStandards,
  disclaimer,
  lastReviewed,
  className,
}: VisaEeatSectionProps) {
  if (!methodology.length) return null

  const reviewerName = lastReviewed?.reviewerName

  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="wide"
      band
      className={className}
    >
      <SectionReveal>
        <VisaEditorialHeading
          id={headingId}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <VisaEditorialContent className="flex flex-col gap-6">
          {reviewerName ? (
            <div className="visa-authority-prose">
              <h3 className="visa-authority-subheading">Who reviews this page</h3>
              <p>
                <strong>
                  {lastReviewed?.reviewerUrl ? (
                    <Link href={lastReviewed.reviewerUrl} className={editorialLinkClass}>
                      {reviewerName}
                    </Link>
                  ) : (
                    reviewerName
                  )}
                </strong>
                {lastReviewed?.reviewerTitle ? ` — ${lastReviewed.reviewerTitle}` : null}
              </p>
              {lastReviewed?.reviewerCredentials ? (
                <p>{lastReviewed.reviewerCredentials}</p>
              ) : null}
              {lastReviewed?.reviewDate ? (
                <p className="text-[var(--text-tertiary)]">
                  Last reviewed:{" "}
                  <time dateTime={lastReviewed.reviewDate}>
                    {formatContentIsoDate(lastReviewed.reviewDate)}
                  </time>
                </p>
              ) : null}
            </div>
          ) : null}

          <div>
            <h3 className="visa-authority-subheading">Verification methodology</h3>
            <ul className="visa-authority-list">
              {methodology.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {contentStandards ? (
            <p className={cn("visa-authority-prose")}>{contentStandards}</p>
          ) : null}
          {disclaimer ? <p className="visa-authority-disclaimer">{disclaimer}</p> : null}
        </VisaEditorialContent>
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaEeatSection }
