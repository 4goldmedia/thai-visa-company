import Link from "next/link"

import { ContactCtaGroup } from "@/components/cta"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SectionReveal } from "@/components/motion"
import { GoogleReviewSummary } from "@/components/ui/google-review-summary"
import type { AnalyticsSurface } from "@/lib/analytics"
import { ctaHref } from "@/lib/cta"
import { CONTACT_URLS, messagingChannelLabels } from "@/lib/contact"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import {
  mobileReadableWidthClass,
  sectionBandClass,
  sectionDividerClass,
  signatureCtaPrimaryClass,
} from "@/lib/section-styles"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"
import { cn } from "@/lib/utils"

type FinalCTAProps = {
  headingId: string
  title: string
  description: string
  eyebrow?: string
  footnote?: string
  showExploreCta?: boolean
  /** Google rating trust line above contact buttons */
  showReviewSummary?: boolean
  visaSlug?: string
  analyticsSurface?: AnalyticsSurface
  analyticsCtaId?: string
  className?: string
}

function FinalCTA({
  headingId,
  title,
  description,
  eyebrow = "Get in touch",
  footnote = defaultFinalCtaFootnote,
  showExploreCta = true,
  showReviewSummary = true,
  visaSlug,
  analyticsSurface = "homepage",
  analyticsCtaId = "final_cta_contact",
  className,
}: FinalCTAProps) {
  return (
    <SectionReveal className={cn("flex flex-col", mobileReadableWidthClass, className)}>
      <SectionHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
        titleClassName="max-w-xl"
      />

      <div className="mt-6 border-t border-border/40 pt-6 sm:mt-8 sm:pt-7">
        {showReviewSummary ? (
          <GoogleReviewSummary layout="inline" size="sm" />
        ) : null}

        <ContactCtaGroup
          showExplore={showExploreCta}
          analyticsSurface={analyticsSurface}
          analyticsCtaId={analyticsCtaId}
          visaSlug={visaSlug}
          className={showReviewSummary ? "mt-4 sm:mt-5" : undefined}
        />

        <p className="mt-4 text-[13px] leading-[1.6] text-muted-foreground sm:mt-5 sm:text-sm sm:leading-snug">
          {footnote}
        </p>
      </div>
    </SectionReveal>
  )
}

type FinalCTASectionProps = {
  sectionId?: string
  sectionClassName?: string
  headingId?: string
  title?: string
  description?: string
  eyebrow?: string
  footnote?: string
  showExploreCta?: boolean
  showReviewSummary?: boolean
  visaSlug?: string
  analyticsSurface?: AnalyticsSurface
  analyticsCtaId?: string
  className?: string
}

function FinalCTASection({
  sectionId = sectionIds.finalCta,
  sectionClassName = sectionBandClass,
  headingId = sectionHeadingIds.finalCta,
  title = "Need help choosing the right Thai visa?",
  description = "Tell us your plans. We help you compare options and explain each step before you apply.",
  showExploreCta = true,
  ...ctaProps
}: FinalCTASectionProps) {
  return (
    <Section
      id={sectionId}
      spacing="compact"
      aria-labelledby={headingId}
      className={sectionClassName}
    >
      <Container size="content">
        <FinalCTA
          headingId={headingId}
          title={title}
          description={description}
          showExploreCta={showExploreCta}
          {...ctaProps}
        />
      </Container>
    </Section>
  )
}

export { FinalCTA, FinalCTASection }

type HomeFinalCtaSectionProps = {
  sectionId?: string
  className?: string
}

function HomeFinalCtaSection({
  sectionId = "final-cta",
  className,
}: HomeFinalCtaSectionProps) {
  return (
    <Section
      id={sectionId}
      spacing="spacious"
      className={cn(sectionDividerClass, "final-home-cta", className)}
      aria-label="Final call to action"
    >
      <Container>
        <SectionReveal>
          <div className="final-home-cta__block">
            <div className="final-home-cta__copy">
              <h2 className="final-home-cta__title">
                Ready to start your life in Thailand?
              </h2>
              <p className="final-home-cta__description">
                Get clear guidance on visa options, documentation, and next
                steps from licensed Thai immigration specialists.
              </p>
            </div>

            <div className="final-home-cta__primary">
              <Link
                href={ctaHref.requestConsultation}
                className={cn(signatureCtaPrimaryClass, "final-home-cta__button")}
              >
                Book a consultation
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
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { HomeFinalCtaSection }
export type { HomeFinalCtaSectionProps }
