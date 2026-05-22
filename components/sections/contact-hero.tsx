import { ContactCtaGroup } from "@/components/cta"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { contactPageContent } from "@/lib/contact/page-content"
import { contactSectionIds } from "@/lib/contact/section-ids"
import { motionClass } from "@/lib/motion-classes"
import { mobileReadableWidthClass, sectionEyebrowClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const { hero } = contactPageContent

function ContactHeroSection() {
  return (
    <Section
      id={contactSectionIds.hero}
      spacing="spacious"
      aria-labelledby={contactSectionIds.heroHeading}
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
          <p className={sectionEyebrowClass}>{hero.eyebrow}</p>

          <h1
            id={contactSectionIds.heroHeading}
            className="mt-2 text-[1.375rem] font-semibold leading-[1.22] tracking-tight text-balance text-foreground sm:mt-2.5 sm:text-2xl md:text-[1.75rem] md:leading-[1.2]"
          >
            {hero.title}
          </h1>

          <p className="mt-3 text-[15px] leading-[1.7] text-pretty text-muted-foreground sm:mt-3.5 sm:text-base sm:leading-relaxed">
            {hero.overview}
          </p>

          <ContactCtaGroup
            className="mt-5 sm:mt-6"
            showExplore={false}
            analyticsSurface="contact"
            analyticsCtaId="hero_contact"
          />

          <p className="mt-4 text-[13px] leading-snug text-muted-foreground sm:mt-5 sm:text-sm">
            {hero.responseTime}
          </p>
        </div>
      </Container>
    </Section>
  )
}

export { ContactHeroSection }
