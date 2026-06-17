import Link from "next/link"

import { ctaHref, ctaLabels } from "@/lib/cta"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { guidesIndexSectionIds } from "@/lib/guides/section-ids"

function GuidesIndexCta() {
  return (
    <Section
      id={guidesIndexSectionIds.cta}
      spacing="default"
      aria-labelledby={`${guidesIndexSectionIds.cta}-heading`}
      className="border-t border-border/50"
    >
      <Container>
        <h2
          id={`${guidesIndexSectionIds.cta}-heading`}
          className="text-[1.125rem] font-semibold tracking-[-0.02em] text-foreground"
        >
          Need help applying what you read?
        </h2>
        <p className="mt-2 max-w-xl text-[15px] leading-[1.7] text-muted-foreground">
          Share your nationality and timeline, and we reply with clear next steps.
        </p>
        <Link
          href={ctaHref.requestConsultation}
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-button)] bg-foreground px-5 text-sm font-medium text-background"
        >
          {ctaLabels.requestConsultation}
        </Link>
      </Container>
    </Section>
  )
}

export { GuidesIndexCta }
