import Link from "next/link"

import { EditorialFeatureGrid } from "@/components/moving/editorial-feature-grid"
import { MovingSectionHeader } from "@/components/moving/moving-section-header"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { movingFamiliesCardIcons } from "@/lib/moving/families-section-icons"
import { movingPageContent } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"
import { editorialLinkCompactClass, sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

function MovingFamiliesSection() {
  const { families } = movingPageContent

  return (
    <Section
      id={movingPageSectionIds.families}
      spacing="default"
      aria-labelledby={movingPageSectionIds.familiesHeading}
      className="moving-families"
    >
      <Container>
        <SectionReveal>
          <MovingSectionHeader
            eyebrow={families.eyebrow}
            title={families.title}
            intro={families.intro}
            headingId={movingPageSectionIds.familiesHeading}
          />

          <EditorialFeatureGrid
            cards={families.cards}
            icons={movingFamiliesCardIcons}
            columns={2}
            label="Family relocation topics"
            className={sectionContentOffsetClass}
          />

          {families.links.length > 0 ? (
            <ul className="moving-families__links" aria-label="Family relocation resources">
              {families.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={editorialLinkCompactClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { MovingFamiliesSection }
