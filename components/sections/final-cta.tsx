import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { ContactCtaGroup } from "@/components/cta"
import { SectionReveal } from "@/components/motion"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { defaultFinalCtaFootnote } from "@/lib/visas/shared"
import { mobileReadableWidthClass, sectionBandClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type FinalCTAProps = {
  headingId: string
  title: string
  description: string
  eyebrow?: string
  footnote?: string
  showExploreCta?: boolean
  className?: string
}

function FinalCTA({
  headingId,
  title,
  description,
  eyebrow = "Get in touch",
  footnote = defaultFinalCtaFootnote,
  showExploreCta = true,
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

      <div className="mt-5 border-t border-border/50 pt-5 sm:mt-6 sm:pt-6">
        <ContactCtaGroup showExplore={showExploreCta} />

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
