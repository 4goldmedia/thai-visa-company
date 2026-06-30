import Link from "next/link"
import { Compass } from "lucide-react"

import { MovingSectionHeader } from "@/components/moving/moving-section-header"
import { EditorialVisaRouteCard } from "@/components/moving/editorial-visa-route-card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { movingPageContent } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"
import { movingVisaRouteIcons } from "@/lib/moving/visa-route-icons"
import { editorialLinkSectionClass, sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

function MovingVisaRoutesSection() {
  const { visaRoutes } = movingPageContent

  return (
    <Section
      id={movingPageSectionIds.visaRoutes}
      spacing="default"
      aria-labelledby={movingPageSectionIds.visaRoutesHeading}
      className="moving-visa-routes"
    >
      <Container>
        <SectionReveal>
          <MovingSectionHeader
            eyebrow={visaRoutes.eyebrow}
            title={visaRoutes.title}
            intro={visaRoutes.intro}
            headingId={movingPageSectionIds.visaRoutesHeading}
            align="center"
          />

          <div
            className={cn("moving-visa-routes__grid", sectionContentOffsetClass)}
            aria-label="Visa routes for moving to Thailand"
          >
            {visaRoutes.items.map((item) => (
              <EditorialVisaRouteCard
                key={item.slug}
                route={item}
                icon={movingVisaRouteIcons[item.slug] ?? Compass}
              />
            ))}
          </div>

          {visaRoutes.decisionGuide ? (
            <p className="moving-visa-routes__decision-guide">
              <Link href={visaRoutes.decisionGuide.href} className={editorialLinkSectionClass}>
                {visaRoutes.decisionGuide.label}
              </Link>
            </p>
          ) : null}
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { MovingVisaRoutesSection }
