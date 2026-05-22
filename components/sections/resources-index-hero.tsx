import { ContactCtaGroup } from "@/components/cta"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { motionClass } from "@/lib/motion-classes"
import { resourcesIndexSectionIds } from "@/lib/resources/section-ids"
import {
  mobileReadableWidthClass,
  sectionEyebrowClass,
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type ResourcesIndexHeroProps = {
  eyebrow: string
  title: string
  overview: string
  headingId?: string
  sectionId?: string
}

function ResourcesIndexHero({
  eyebrow,
  title,
  overview,
  headingId = resourcesIndexSectionIds.heroHeading,
  sectionId = resourcesIndexSectionIds.hero,
}: ResourcesIndexHeroProps) {
  return (
    <Section
      id={sectionId}
      spacing="spacious"
      aria-labelledby={headingId}
      className="border-b border-border/50"
    >
      <Container size="content">
        <div
          className={cn(
            "flex flex-col",
            mobileReadableWidthClass,
            "max-w-2xl",
            motionClass.fadeUpMount
          )}
        >
          <p className={sectionEyebrowClass}>{eyebrow}</p>

          <h1
            id={headingId}
            className="mt-2 text-[1.375rem] font-semibold leading-[1.22] tracking-tight text-balance text-foreground sm:mt-2.5 sm:text-2xl md:text-[1.75rem] md:leading-[1.2]"
          >
            {title}
          </h1>

          <p className="mt-3 text-[15px] leading-[1.7] text-pretty text-muted-foreground sm:mt-3.5 sm:text-base sm:leading-relaxed">
            {overview}
          </p>

          <p className="mt-5 text-[13px] leading-snug text-muted-foreground sm:mt-6 sm:text-sm">
            Prefer a direct answer? Message us on LINE or WhatsApp.
          </p>

          <ContactCtaGroup
            className="mt-4 sm:mt-5"
            showExplore={false}
            analyticsSurface="resources"
            analyticsCtaId="hero_contact"
          />
        </div>
      </Container>
    </Section>
  )
}

export { ResourcesIndexHero }
