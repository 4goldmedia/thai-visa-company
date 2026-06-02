import { VisaGalleryItem } from "@/components/cards/visa-gallery-item"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { StaggerGrid, StaggerGridItem } from "@/components/motion"
import { visaGalleryPhotography } from "@/lib/media/photography"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { cn } from "@/lib/utils"

const visaTypes = [
  {
    slug: "retirement",
    title: "Retirement Visa",
    description: "Long-term stay for eligible retirees and dependents.",
    href: "/visas/retirement",
  },
  {
    slug: "dtv",
    title: "DTV Visa",
    description: "Remote work and qualifying activities for digital travelers.",
    href: "/visas/dtv",
  },
  {
    slug: "elite",
    title: "Elite Visa",
    description: "Premium long-term residency through Thailand Elite membership.",
    href: "/visas/elite",
  },
  {
    slug: "business",
    title: "Business Visa",
    description: "Work, investment, and company-related permissions in Thailand.",
    href: "/visas/business",
  },
  {
    slug: "education",
    title: "Education Visa",
    description: "Study at approved schools, language centers, and universities.",
    href: "/visas/education",
  },
] as const

function VisaTypes() {
  return (
    <div className="flex flex-col">
      <header className="visa-section-header">
        <p className="visa-section-header__eyebrow">Visa options</p>
        <h2 id={sectionHeadingIds.visaTypes} className="sr-only">
          Find the right visa for your plans
        </h2>
      </header>

      <StaggerGrid
        aria-label="Thailand visa types"
        className={cn(
          "visa-gallery mt-[var(--space-heading-offset-md)]",
          "lg:mt-[var(--space-heading-offset-lg)]",
        )}
      >
        {visaTypes.map((visa) => (
          <StaggerGridItem key={visa.href} className="min-w-0">
            <VisaGalleryItem
              title={visa.title}
              description={visa.description}
              href={visa.href}
              image={visaGalleryPhotography[visa.slug]}
            />
          </StaggerGridItem>
        ))}
      </StaggerGrid>
    </div>
  )
}

function VisaTypesSection() {
  return (
    <Section
      id={sectionIds.visaTypes}
      aria-labelledby={sectionHeadingIds.visaTypes}
      className="pt-[var(--space-visa-section-top)] sm:pt-[calc(var(--space-visa-section-top)+0.5rem)]"
    >
      <Container>
        <VisaTypes />
      </Container>
    </Section>
  )
}

export { VisaTypes, VisaTypesSection, visaTypes }
