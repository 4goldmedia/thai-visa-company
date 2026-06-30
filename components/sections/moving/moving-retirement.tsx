import Link from "next/link"

import { EditorialFeatureGrid } from "@/components/moving/editorial-feature-grid"
import { EditorialRetirementBudget } from "@/components/moving/editorial-retirement-budget"
import { MovingSectionHeader } from "@/components/moving/moving-section-header"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { movingPageContent } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"
import { sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"
import { movingRetirementCardIcons } from "@/lib/moving/retirement-section-icons"
import { resolveMovingPhoto } from "@/lib/media/moving-photography"

function MovingRetirementSection() {
  const { retirement } = movingPageContent
  const heroImage = resolveMovingPhoto(retirement.imageKey)

  return (
    <Section
      id={movingPageSectionIds.retirement}
      spacing="default"
      aria-labelledby={movingPageSectionIds.retirementHeading}
      className="moving-retirement"
    >
      <Container>
        <SectionReveal>
          <MovingSectionHeader
            eyebrow={retirement.eyebrow}
            title={retirement.title}
            intro={retirement.intro}
            headingId={movingPageSectionIds.retirementHeading}
          />

          <div className={cn("moving-retirement__hero", sectionContentOffsetClass)}>
            <OptimizedImage
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="moving-retirement__hero-image object-cover"
              style={
                heroImage.objectPosition
                  ? { objectPosition: heroImage.objectPosition }
                  : undefined
              }
            />
            <div className="moving-retirement__hero-scrim" aria-hidden />
          </div>

          <EditorialFeatureGrid
            cards={retirement.cards}
            icons={movingRetirementCardIcons}
            columns={3}
            badgeOnly
            className="moving-retirement__grid"
            label="Retirement in Thailand topics"
          />

          <EditorialRetirementBudget
            title={retirement.budget.title}
            profiles={retirement.budget.profiles}
          />

          {retirement.guides.length > 0 ? (
            <nav className="moving-retirement__guides" aria-label="Related retirement guides">
              <ul className="moving-retirement__guides-list">
                {retirement.guides.map((guide) => (
                  <li key={guide.href}>
                    <Link href={guide.href} className="moving-retirement__guide-pill">
                      {guide.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { MovingRetirementSection }
