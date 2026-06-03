import Link from "next/link"

import { SectionReveal } from "@/components/motion"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type { ContentVisaGettingStarted } from "@/lib/content/types"
import { ctaHref } from "@/lib/cta"
import { signatureCtaPrimaryClass } from "@/lib/section-styles"
import { visaEditorialBodyClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaGettingStartedSectionProps = ContentVisaGettingStarted & {
  sectionId: string
  headingId: string
  className?: string
}

function VisaGettingStartedSection({
  sectionId,
  headingId,
  eyebrow = "Getting started",
  title,
  description,
  buttonLabel = "Request a Consultation",
  className,
}: VisaGettingStartedSectionProps) {
  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="reading"
      band
      className={cn("visa-getting-started", className)}
    >
      <SectionReveal>
        <VisaEditorialHeading
          id={headingId}
          eyebrow={eyebrow}
          title={title}
        />
        <VisaEditorialContent>
          <div className="visa-getting-started__block">
            <p className={visaEditorialBodyClass}>{description}</p>
            <div className="visa-getting-started__cta">
              <Link
                href={ctaHref.requestConsultation}
                className={cn(signatureCtaPrimaryClass, "visa-getting-started__button")}
              >
                {buttonLabel}
              </Link>
            </div>
          </div>
        </VisaEditorialContent>
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaGettingStartedSection }
export type { VisaGettingStartedSectionProps }
