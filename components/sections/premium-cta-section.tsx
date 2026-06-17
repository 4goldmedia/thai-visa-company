import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import type { AnalyticsSurface } from "@/lib/analytics"
import { ctaHref } from "@/lib/cta"
import { CONTACT_URLS, messagingChannelLabels } from "@/lib/contact"
import { cn } from "@/lib/utils"

/** Canonical primary label for the premium CTA band */
export const premiumCtaButtonLabel = "Book a consultation" as const

type PremiumCtaBlockProps = {
  title: string
  description: string
  headingId?: string
  buttonLabel?: string
  analyticsSurface?: AnalyticsSurface
  analyticsCtaId?: string
  visaSlug?: string
  articleSlug?: string
  className?: string
}

function PremiumCtaBlock({
  title,
  description,
  headingId,
  buttonLabel = premiumCtaButtonLabel,
  analyticsSurface = "homepage",
  analyticsCtaId = analyticsCtaIds.finalCtaContact,
  visaSlug,
  articleSlug,
  className,
}: PremiumCtaBlockProps) {
  const consultationAnalytics = analyticsDataAttributes({
    ctaId: analyticsCtaId,
    surface: analyticsSurface,
    visaSlug,
    articleSlug,
    ctaLabel: buttonLabel,
  })

  return (
    <div className={cn("premium-cta__card", className)}>
      <div className="premium-cta__copy">
        <h2 id={headingId} className="premium-cta__title">
          {title}
        </h2>
        <p className="premium-cta__description">{description}</p>
      </div>

      <div className="premium-cta__actions">
        <Link
          href={ctaHref.requestConsultation}
          className="premium-cta__button"
          {...consultationAnalytics}
        >
          {buttonLabel}
        </Link>

        <p className="premium-cta__contact" aria-label="Messaging links">
          <span className="premium-cta__contact-label">Chat with us:</span>
          <span className="premium-cta__contact-links">
            <a href={CONTACT_URLS.line} className="premium-cta__contact-link">
              {messagingChannelLabels.lineShort}
            </a>
            <a href={CONTACT_URLS.whatsapp} className="premium-cta__contact-link">
              {messagingChannelLabels.whatsapp}
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}

type PremiumCtaSectionProps = PremiumCtaBlockProps & {
  sectionId?: string
  sectionClassName?: string
  /** Full-width section band (default) or in-flow card for MDX and article bodies */
  layout?: "section" | "inset"
}

function PremiumCtaSection({
  sectionId,
  sectionClassName,
  layout = "section",
  headingId,
  ...blockProps
}: PremiumCtaSectionProps) {
  const resolvedHeadingId = headingId ?? `${sectionId ?? "premium-cta"}-heading`

  if (layout === "inset") {
    return (
      <aside
        className={cn("premium-cta premium-cta--inset", sectionClassName)}
        aria-labelledby={resolvedHeadingId}
      >
        <PremiumCtaBlock {...blockProps} headingId={resolvedHeadingId} />
      </aside>
    )
  }

  return (
    <Section
      id={sectionId}
      spacing="default"
      aria-labelledby={resolvedHeadingId}
      className={cn("premium-cta", sectionClassName)}
    >
      <Container>
        <SectionReveal>
          <PremiumCtaBlock
            {...blockProps}
            headingId={resolvedHeadingId}
          />
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { PremiumCtaBlock, PremiumCtaSection }
export type { PremiumCtaBlockProps, PremiumCtaSectionProps }
