import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Faq } from "@/components/sections/faq"
import { FaqJsonLd } from "@/components/seo/faq-json-ld"
import type { ContentFaqItem } from "@/lib/content/types"
import { visaPageClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaFaqJsonLdConfig = {
  name: string
  path: string
  description?: string
}

type VisaFaqSectionProps = {
  sectionId: string
  headingId: string
  title?: string
  description?: string
  eyebrow?: string
  items: ReadonlyArray<ContentFaqItem>
  jsonLd: VisaFaqJsonLdConfig
  className?: string
}

function VisaFaqSection({
  sectionId,
  headingId,
  items,
  jsonLd,
  title,
  description,
  eyebrow,
  className,
}: VisaFaqSectionProps) {
  return (
    <Section
      id={sectionId}
      spacing="compact"
      aria-labelledby={headingId}
      className={cn(visaPageClass, "visa-faq-section faq-section", className)}
    >
      <FaqJsonLd
        items={items}
        name={jsonLd.name}
        path={jsonLd.path}
        description={jsonLd.description}
        id={`schema-faq-${sectionId}`}
      />
      <Container size="wide">
        <Faq
          headingId={headingId}
          items={items}
          title={title}
          description={description}
          eyebrow={eyebrow}
        />
      </Container>
    </Section>
  )
}

export { VisaFaqSection }
export type { VisaFaqSectionProps }
