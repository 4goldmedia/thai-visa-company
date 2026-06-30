import { MovingViewportHero } from "@/components/moving/moving-viewport-hero"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { movingPageContent } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"
import { resolveMovingPhoto } from "@/lib/media/moving-photography"

function MovingHeroSection() {
  const { hero } = movingPageContent
  const image = resolveMovingPhoto(hero.imageKey)

  return (
    <Section
      id={movingPageSectionIds.hero}
      spacing="default"
      aria-labelledby={movingPageSectionIds.heroHeading}
      className="moving-hero"
    >
      <SectionReveal>
        <MovingViewportHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          titleLines={hero.titleLines}
          lead={hero.lead}
          headingId={movingPageSectionIds.heroHeading}
          image={image}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
        />
      </SectionReveal>
    </Section>
  )
}

export { MovingHeroSection }
