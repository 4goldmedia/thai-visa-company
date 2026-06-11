import { VisaGalleryItem } from "@/components/cards/visa-gallery-item"
import { PageHero } from "@/components/layout/page-hero"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { StaggerGrid, StaggerGridItem } from "@/components/motion"
import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { homeBreadcrumb } from "@/lib/breadcrumbs/presets"
import { visasHubContent } from "@/lib/visas/hub-content"
import { visaNavItems, visasHubPath } from "@/lib/visas/navigation"
import { visaGalleryPhotography } from "@/lib/media/photography"
import { cn } from "@/lib/utils"

const visasHubHeadingId = "visas-hub-heading"

function VisasHubTemplate() {
  const { hero } = visasHubContent

  return (
    <main
      id="main-content"
      tabIndex={-1}
      aria-label="Thailand visa services"
      className="flex flex-1 flex-col overflow-x-clip bg-background"
    >
      <PageBreadcrumbs
        items={[
          homeBreadcrumb,
          { label: "Visas", href: visasHubPath },
        ]}
        containerSize="default"
      />

      <Section
        spacing="spacious"
        aria-labelledby={visasHubHeadingId}
        className="border-b border-border/50"
      >
        <Container>
          <PageHero
            eyebrow={hero.eyebrow}
            title={hero.title}
            lead={hero.overview}
            headingId={visasHubHeadingId}
          />

          <StaggerGrid
            aria-label="Thailand visa types"
            className={cn(
              "visa-gallery mt-[var(--space-heading-offset-md)]",
              "lg:mt-[var(--space-heading-offset-lg)]",
            )}
          >
            {visaNavItems.map((visa) => (
              <StaggerGridItem key={visa.href} className="min-w-0">
                <VisaGalleryItem
                  title={visa.title}
                  description={visa.description}
                  href={visa.href}
                  image={visaGalleryPhotography[visa.slug]}
                  linkLabel="View visa"
                />
              </StaggerGridItem>
            ))}
          </StaggerGrid>
        </Container>
      </Section>
    </main>
  )
}

export { VisasHubTemplate, visasHubHeadingId }
