import { FaqSection } from "@/components/sections/faq"
import { movingPageContent, movingPagePath } from "@/lib/moving/content"
import { movingPageSectionIds } from "@/lib/moving/section-ids"
import type { VisaFaqItem } from "@/lib/visas/types"

function toAccordionItems(
  items: typeof movingPageContent.faq.items,
): ReadonlyArray<VisaFaqItem> {
  return items.map(({ value, question, answer }) => ({
    value,
    question,
    answer,
  }))
}

function MovingFaqSection() {
  const { faq, seo } = movingPageContent
  const items = toAccordionItems(faq.items)

  return (
    <FaqSection
      sectionId={movingPageSectionIds.faq}
      headingId={movingPageSectionIds.faqHeading}
      eyebrow="Frequently Asked Questions"
      title={faq.title}
      description={faq.description}
      items={items}
      defaultValue={items[0]?.value}
      jsonLd={{
        name: faq.title,
        path: movingPagePath,
        description: seo.description,
      }}
    />
  )
}

export { MovingFaqSection }
