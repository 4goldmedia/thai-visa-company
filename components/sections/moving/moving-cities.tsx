import { EditorialDestinationCard } from "@/components/moving/editorial-destination-card"
import { MovingSectionHeader } from "@/components/moving/moving-section-header"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { movingPageContent } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"
import { sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

function MovingCitiesSection() {
  const { cities } = movingPageContent

  return (
    <Section
      id={movingPageSectionIds.cities}
      spacing="default"
      aria-labelledby={movingPageSectionIds.citiesHeading}
      className="moving-cities"
    >
      <Container>
        <SectionReveal>
          <MovingSectionHeader
            eyebrow={cities.eyebrow}
            title={cities.title}
            intro={cities.intro}
            bridge={cities.bridge}
            headingId={movingPageSectionIds.citiesHeading}
          />

          <div
            className={cn("moving-destination-grid", sectionContentOffsetClass)}
            aria-label="Cities in Thailand"
          >
            {cities.items.map((city) => (
              <EditorialDestinationCard key={city.id} city={city} />
            ))}
          </div>
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { MovingCitiesSection }
