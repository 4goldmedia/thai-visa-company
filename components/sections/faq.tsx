import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SectionReveal } from "@/components/motion"
import { FaqJsonLd } from "@/components/seo/faq-json-ld"
import { FAQAccordion, FAQItem } from "@/components/ui/faq-item"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { sectionContentOffsetClass, sectionDividerClass } from "@/lib/section-styles"
import type { VisaFaqItem } from "@/lib/visas/types"
import { cn } from "@/lib/utils"

const defaultFaqItems: ReadonlyArray<VisaFaqItem> = [
  {
    value: "processing-time",
    question: "How long does a Thai visa take?",
    answer:
      "Processing times depend on your nationality, visa type, and current embassy workload. We review your situation first and give you a realistic timeline before you apply.",
  },
  {
    value: "right-visa",
    question: "Which Thai visa is right for me?",
    answer:
      "It depends on how long you plan to stay and what you will do in Thailand. We help you compare options such as tourist, business, DTV, retirement, and education visas.",
  },
  {
    value: "full-process",
    question: "Can you help with the full process?",
    answer:
      "Yes. We support the full journey: eligibility review, document preparation, submission guidance, and follow-up until your application is complete.",
  },
  {
    value: "immigration-visit",
    question: "Do I need to visit immigration myself?",
    answer:
      "Some visas require an in-person step or extension visit, while others do not. We explain what applies to your case so you know what to expect in advance.",
  },
  {
    value: "response-time",
    question: "How quickly do you respond?",
    answer:
      "Most clients reach us on LINE or WhatsApp. We aim to reply the same day with clear next steps, often much sooner during business hours.",
  },
]

type FaqProps = {
  headingId: string
  title?: string
  description?: string
  eyebrow?: string
  items: ReadonlyArray<VisaFaqItem>
  className?: string
}

function Faq({
  headingId,
  title = "Practical answers before you apply",
  description = "Straightforward guidance on timelines, visa options, and how we support you through the process.",
  eyebrow = "Common questions",
  items,
  className,
}: FaqProps) {
  return (
    <SectionReveal className={cn("flex flex-col", className)}>
      <SectionHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
        titleClassName="max-w-lg"
        descriptionClassName="max-w-lg"
      />

      <FAQAccordion
        aria-labelledby={headingId}
        className={cn(sectionContentOffsetClass)}
      >
        {items.map((item) => (
          <FAQItem
            key={item.value}
            value={item.value}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </FAQAccordion>
    </SectionReveal>
  )
}

export type FaqJsonLdConfig = {
  /** When false, omit FAQPage JSON-LD (e.g. if injected at page level) */
  enabled?: boolean
  name?: string
  path?: string
  description?: string
}

type FaqSectionProps = {
  sectionId?: string
  sectionClassName?: string
  headingId?: string
  title?: string
  description?: string
  eyebrow?: string
  items?: ReadonlyArray<VisaFaqItem>
  className?: string
  /** FAQPage JSON-LD — defaults to homepage preset */
  jsonLd?: FaqJsonLdConfig
}

function FaqSection({
  sectionId = sectionIds.faq,
  sectionClassName = sectionDividerClass,
  headingId = sectionHeadingIds.faq,
  items = defaultFaqItems,
  jsonLd,
  title,
  description,
  ...faqProps
}: FaqSectionProps) {
  const schemaConfig = jsonLd ?? {}
  const schemaEnabled = schemaConfig.enabled !== false
  const schemaName = schemaConfig.name ?? "Thailand visa FAQ"
  const schemaPath = schemaConfig.path ?? "/"
  const schemaDescription = schemaConfig.description ?? description

  return (
    <Section
      id={sectionId}
      spacing="compact"
      aria-labelledby={headingId}
      className={sectionClassName}
    >
      {schemaEnabled ? (
        <FaqJsonLd
          items={items}
          name={schemaName}
          path={schemaPath}
          description={schemaDescription}
          id="schema-faq-homepage"
        />
      ) : null}
      <Container size="content">
        <Faq
          headingId={headingId}
          items={items}
          title={title}
          description={description}
          {...faqProps}
        />
      </Container>
    </Section>
  )
}

export { Faq, FaqSection, defaultFaqItems }
