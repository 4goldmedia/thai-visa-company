import { FaqJsonLd } from "@/components/seo/faq-json-ld"
import { FAQAccordion, FAQItem } from "@/components/ui/faq-item"
import {
  articleFaqDescriptionClass,
  articleFaqSectionClass,
  articleFaqTitleClass,
} from "@/lib/article-styles"
import type { VisaFaqItem } from "@/lib/visas/types"
import { cn } from "@/lib/utils"

export type ArticleFaqJsonLdConfig = {
  enabled?: boolean
  name?: string
  path: string
  description?: string
}

type ArticleInlineFaqProps = {
  headingId?: string
  title?: string
  description?: string
  items: ReadonlyArray<VisaFaqItem>
  className?: string
  jsonLd: ArticleFaqJsonLdConfig
}

function ArticleInlineFaq({
  headingId = "common-questions",
  title = "Common questions",
  description = "Short answers to what readers ask most about this topic.",
  items,
  className,
  jsonLd,
}: ArticleInlineFaqProps) {
  const titleHeadingId = `${headingId}-heading`
  const schemaEnabled = jsonLd.enabled !== false
  const schemaName = jsonLd.name ?? `${title} — FAQ`

  return (
    <section
      id={headingId}
      aria-labelledby={titleHeadingId}
      className={cn(articleFaqSectionClass, className)}
    >
      {schemaEnabled ? (
        <FaqJsonLd
          items={items}
          name={schemaName}
          path={jsonLd.path}
          description={jsonLd.description ?? description}
          id="schema-faq-article"
        />
      ) : null}

      <h2 id={titleHeadingId} className={articleFaqTitleClass}>
        {title}
      </h2>
      {description ? (
        <p className={articleFaqDescriptionClass}>{description}</p>
      ) : null}

      <FAQAccordion
        aria-labelledby={titleHeadingId}
        className="mt-8 sm:mt-9"
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
    </section>
  )
}

export { ArticleInlineFaq }
