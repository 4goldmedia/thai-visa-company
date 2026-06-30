import Link from "next/link"

import { EditorialInsightGrid } from "@/components/moving/editorial-insight-grid"
import { MovingSectionHeader } from "@/components/moving/moving-section-header"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { movingPageContent } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"
import { movingWorkingSubsectionIcons } from "@/lib/moving/working-section-icons"
import { editorialLinkCompactClass, sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

function MovingWorkingSection() {
  const { working } = movingPageContent

  return (
    <Section
      id={movingPageSectionIds.working}
      spacing="default"
      aria-labelledby={movingPageSectionIds.workingHeading}
      className="moving-working"
    >
      <Container>
        <SectionReveal>
          <MovingSectionHeader
            eyebrow={working.eyebrow}
            title={working.title}
            intro={working.intro}
            headingId={movingPageSectionIds.workingHeading}
          />

          <EditorialInsightGrid
            subsections={working.subsections}
            columns={3}
            className={cn("moving-working__grid", sectionContentOffsetClass)}
            icons={movingWorkingSubsectionIcons}
          />

          {working.links.length > 0 ? (
            <ul className="moving-working__links" aria-label="Working in Thailand resources">
              {working.links.map((link) => (
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

export { MovingWorkingSection }
