import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { VisaCard } from "@/components/cards/visa-card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { StaggerGrid, StaggerGridItem } from "@/components/motion"
import { visaCardPhotography } from "@/lib/media/photography"
import { homeSectionAnchors } from "@/lib/navigation"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { cn } from "@/lib/utils"

const visaTypes = [
  {
    slug: "retirement",
    title: "Retirement Visa",
    description: "Long-term stay for eligible retirees and dependents.",
    benefit: "Clear eligibility guidance and renewal support",
    href: "/visas/retirement",
  },
  {
    slug: "dtv",
    title: "DTV Visa",
    description: "Remote work and qualifying activities for digital travelers.",
    benefit: "Structured requirements explained in plain language",
    href: "/visas/dtv",
  },
  {
    slug: "elite",
    title: "Elite Visa",
    description: "Premium long-term residency through Thailand Elite membership.",
    benefit: "Hands-on support for detailed applications",
    href: "/visas/elite",
  },
  {
    slug: "business",
    title: "Business Visa",
    description: "Work, investment, and company-related permissions in Thailand.",
    benefit: "Practical advice aligned to your business setup",
    href: "/visas/business",
  },
  {
    slug: "education",
    title: "Education Visa",
    description: "Study at approved Thai schools, language centers, and universities.",
    benefit: "Document preparation and enrollment coordination",
    href: "/visas/education",
  },
] as const

function VisaTypes() {
  return (
    <div className="flex flex-col">
      <header className="visa-section-header">
        <div>
          <p className="visa-section-header__eyebrow">Visa options</p>
          <h2
            id={sectionHeadingIds.visaTypes}
            className="sr-only"
          >
            Find the right visa for your plans
          </h2>
        </div>
        <Link
          href={homeSectionAnchors.visaServices}
          className="visa-section-header__link group"
        >
          View all visas
          <ArrowRight
            className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            aria-hidden
          />
        </Link>
      </header>

      <StaggerGrid
        aria-label="Thailand visa types"
        className={cn(
          "mt-[var(--space-heading-offset-md)] grid list-none grid-cols-1 gap-[var(--space-visa-grid-gap)] p-0",
          "sm:grid-cols-2 sm:gap-[var(--space-visa-grid-gap-lg)]",
          "lg:mt-[var(--space-heading-offset-lg)] lg:grid-cols-5 lg:gap-[var(--space-visa-grid-gap-lg)]",
        )}
      >
        {visaTypes.map((visa) => (
          <StaggerGridItem key={visa.href} className="flex min-w-0 sm:h-full">
            <VisaCard
              title={visa.title}
              description={visa.description}
              benefit={visa.benefit}
              href={visa.href}
              image={visaCardPhotography[visa.slug]}
              className="w-full"
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
