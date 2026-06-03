import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import type { ContentVisaFinalCta } from "@/lib/content/types"
import { ctaHref } from "@/lib/cta"
import { CONTACT_URLS, messagingChannelLabels } from "@/lib/contact"
import { signatureCtaPrimaryClass } from "@/lib/section-styles"
import { visaPageClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaFinalCtaSectionProps = ContentVisaFinalCta & {
  sectionId: string
  headingId: string
  className?: string
}

function VisaFinalCtaSection({
  sectionId,
  headingId,
  title,
  description,
  headline,
  buttonLabel = "Book a consultation",
  className,
}: VisaFinalCtaSectionProps) {
  const displayTitle = headline ?? title

  return (
    <Section
      id={sectionId}
      spacing="compact"
      className={cn(visaPageClass, "visa-final-cta final-home-cta", className)}
      aria-labelledby={headingId}
    >
      <Container size="wide">
        <SectionReveal>
          <div className="final-home-cta__block">
            <div className="final-home-cta__copy">
              <h2 id={headingId} className="final-home-cta__title">
                {displayTitle}
              </h2>
              <p className="final-home-cta__description">{description}</p>
            </div>

            <div className="final-home-cta__actions">
              <div className="final-home-cta__primary">
                <Link
                  href={ctaHref.requestConsultation}
                  className={cn(signatureCtaPrimaryClass, "final-home-cta__button")}
                >
                  {buttonLabel}
                </Link>
              </div>

              <div className="final-home-cta__links" aria-label="Messaging links">
                <a href={CONTACT_URLS.line} className="final-home-cta__link">
                  Chat on {messagingChannelLabels.lineShort}
                </a>
                <a href={CONTACT_URLS.whatsapp} className="final-home-cta__link">
                  {messagingChannelLabels.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { VisaFinalCtaSection }
export type { VisaFinalCtaSectionProps }
