import { BadgeCheck, MessageCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { ContactCtaGroup } from "@/components/cta"
import { PageHero, PageHeroReviewBadge } from "@/components/layout/page-hero"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { defaultGoogleReviewSummary } from "@/lib/reviews/google-summary"
import { cn } from "@/lib/utils"

type VisaHeroTrustItem = {
  icon: LucideIcon
  label: string
}

type VisaHeroReviewProof = {
  rating: number
  reviewCount: string | number
  source?: string
}

type VisaHeroProps = {
  title: string
  overview: string
  eyebrow?: string
  headingId: string
  trustItems?: ReadonlyArray<VisaHeroTrustItem>
  reviewProof?: VisaHeroReviewProof
  showExploreCta?: boolean
  visaSlug?: string
  className?: string
}

const defaultTrustItems: ReadonlyArray<VisaHeroTrustItem> = [
  {
    icon: MessageCircle,
    label: "Same-day replies on LINE and WhatsApp",
  },
  {
    icon: BadgeCheck,
    label: "Clear requirements and next steps for your situation",
  },
]

const defaultReviewProof: VisaHeroReviewProof = {
  rating: defaultGoogleReviewSummary.rating,
  reviewCount: defaultGoogleReviewSummary.reviewCount,
  source: defaultGoogleReviewSummary.sourceLabel,
}

function VisaHero({
  title,
  overview,
  eyebrow = "Thailand visa support",
  headingId,
  trustItems = defaultTrustItems,
  reviewProof = defaultReviewProof,
  showExploreCta = false,
  visaSlug,
  className,
}: VisaHeroProps) {
  return (
    <PageHero
      eyebrow={eyebrow}
      title={title}
      lead={overview}
      headingId={headingId}
      pageSummary={overview}
      showEyebrowMarker
      ctaSlot={
        <ContactCtaGroup
          showExplore={showExploreCta}
          analyticsSurface="visa_page"
          analyticsCtaId="hero_contact"
          visaSlug={visaSlug}
        />
      }
      reviewProof={reviewProof}
      trustItems={trustItems}
      className={className}
    />
  )
}

type VisaHeroSectionProps = VisaHeroProps & {
  sectionId?: string
  className?: string
  sectionClassName?: string
}

function VisaHeroSection({
  sectionId = "visa-hero",
  sectionClassName,
  headingId,
  ...heroProps
}: VisaHeroSectionProps) {
  return (
    <Section
      id={sectionId}
      spacing="default"
      aria-labelledby={headingId}
      className={cn("border-b border-border/50", sectionClassName)}
    >
      <Container size="content">
        <VisaHero headingId={headingId} {...heroProps} />
      </Container>
    </Section>
  )
}

export {
  VisaHero,
  VisaHeroSection,
  PageHeroReviewBadge as VisaHeroReviewBadge,
  defaultTrustItems,
  defaultReviewProof,
}
export type {
  VisaHeroProps,
  VisaHeroSectionProps,
  VisaHeroTrustItem,
  VisaHeroReviewProof,
}
