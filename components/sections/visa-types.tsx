import { VisaCard } from "@/components/cards/visa-card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SectionReveal, StaggerGrid, StaggerGridItem } from "@/components/motion"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const visaTypes = [
  {
    title: "Retirement Visa",
    description:
      "Long-term stay in Thailand for eligible retirees and dependents.",
    benefit: "Clear eligibility guidance and renewal support",
    href: "/visas/retirement",
  },
  {
    title: "DTV Visa",
    description:
      "Remote work and qualifying activities for digital travelers.",
    benefit: "Structured requirements explained in plain language",
    href: "/visas/dtv",
  },
  {
    title: "Elite Visa",
    description:
      "Premium long-term residency through Thailand Elite membership.",
    benefit: "Hands-on support for detailed applications",
    href: "/visas/elite",
  },
  {
    title: "Business Visa",
    description:
      "Work, investment, and company-related permissions in Thailand.",
    benefit: "Practical advice aligned to your business setup",
    href: "/visas/business",
  },
  {
    title: "Education Visa",
    description:
      "Study at approved Thai schools, language centers, and universities.",
    benefit: "Document preparation and enrollment coordination",
    href: "/visas/education",
  },
] as const

function VisaTypes() {
  return (
    <div className="flex flex-col">
      <SectionReveal>
        <SectionHeading
          id={sectionHeadingIds.visaTypes}
          eyebrow="Visa services"
          title="Find the right visa for your plans"
          description="Compare the most common pathways. Each option includes clear next steps and direct support when you are ready."
          descriptionClassName="max-w-xl"
        />
      </SectionReveal>

      <StaggerGrid
        aria-label="Thailand visa types"
        className={cn(
          sectionContentOffsetClass,
          "grid list-none grid-cols-1 gap-3.5 p-0 sm:gap-4",
          "sm:grid-cols-2 sm:gap-5",
          "lg:grid-cols-6 lg:gap-x-5 lg:gap-y-6"
        )}
      >
        {visaTypes.map((visa, index) => (
          <StaggerGridItem
            key={visa.href}
            className={cn(
              "flex min-w-0 sm:h-full lg:col-span-2",
              index === 3 && "lg:col-start-2"
            )}
          >
            <VisaCard
              title={visa.title}
              description={visa.description}
              benefit={visa.benefit}
              href={visa.href}
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
    >
      <Container>
        <VisaTypes />
      </Container>
    </Section>
  )
}

export { VisaTypes, VisaTypesSection, visaTypes }
