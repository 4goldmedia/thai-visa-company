import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SectionReveal } from "@/components/motion"
import { FaqJsonLd } from "@/components/seo/faq-json-ld"
import { FAQAccordion, FAQItem } from "@/components/ui/faq-item"
import { homepageAiCopy } from "@/lib/seo/ai-search"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { sectionContentOffsetClass, sectionDividerClass } from "@/lib/section-styles"
import type { VisaFaqItem } from "@/lib/visas/types"
import { cn } from "@/lib/utils"

const defaultFaqItems: ReadonlyArray<VisaFaqItem> = [
  {
    value: "processing-time",
    question: "How long does a Thai visa take?",
    answer:
      "Most Thailand visa applications take a few days to several weeks, depending on visa type, nationality, and embassy workload. We review your file first and give a realistic range before you apply—not a generic estimate.",
  },
  {
    value: "right-visa",
    question: "Which Thai visa is right for me?",
    answer:
      "The right visa depends on how long you will stay and what you will do in Thailand (tourism, work, retirement, study, or remote work). We compare tourist, business, DTV, retirement, Elite, and education options for your situation.",
  },
  {
    value: "full-process",
    question: "Can you help with the full process?",
    answer:
      "Yes. Thai Visa Company supports eligibility review, document checklists, submission guidance, and follow-up on LINE or WhatsApp until your application is complete.",
  },
  {
    value: "immigration-visit",
    question: "Do I need to visit immigration myself?",
    answer:
      "Some routes require an embassy visit or an in-person immigration step; others do not. We explain what applies to your nationality and visa type before you travel or submit.",
  },
  {
    value: "response-time",
    question: "How quickly do you respond?",
    answer:
      "We typically reply the same business day on LINE or WhatsApp, often sooner during Bangkok hours. Message us with your nationality, visa goal, and timeline for clear next steps.",
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
  eyebrow = "Frequently Asked Questions",
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
        titleClassName="max-w-3xl"
        descriptionClassName="max-w-2xl"
        className="faq-section__heading"
      />

      <FAQAccordion
        aria-labelledby={headingId}
        className={cn(
          sectionContentOffsetClass,
          "faq-section__accordion",
          "lg:mt-[calc(var(--space-heading-offset-lg)+0.25rem)]",
        )}
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
  sectionClassName,
  headingId = sectionHeadingIds.faq,
  items = defaultFaqItems,
  jsonLd,
  title,
  description,
  ...faqProps
}: FaqSectionProps) {
  const schemaConfig = jsonLd ?? {}
  const schemaEnabled = schemaConfig.enabled !== false
  const schemaName = schemaConfig.name ?? homepageAiCopy.faqSchemaName
  const schemaPath = schemaConfig.path ?? "/"
  const schemaDescription =
    schemaConfig.description ?? homepageAiCopy.faqSchemaDescription

  return (
    <Section
      id={sectionId}
      spacing="spacious"
      aria-labelledby={headingId}
      className={cn(sectionDividerClass, "faq-section", sectionClassName)}
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
      <Container>
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
