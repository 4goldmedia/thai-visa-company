import { FaqJsonLd } from "@/components/seo/faq-json-ld"
import { FAQAccordion, FAQItem } from "@/components/ui/faq-item"
import type { VisaFaqItem } from "@/lib/visas/types"
import { cn } from "@/lib/utils"

export type ArticleFaqJsonLdConfig = {
  enabled?: boolean
  name?: string
  path: string
  description?: string
  aboutArticle?: boolean
  /** @deprecated Use `aboutArticle` */
  aboutArticleId?: string
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
  const schemaName = jsonLd.name ?? `${title}: FAQ`

  return (
    <section
      id={headingId}
      aria-labelledby={titleHeadingId}
      className={cn("editorial-faq-card", className)}
    >
      {schemaEnabled ? (
        <FaqJsonLd
          items={items}
          name={schemaName}
          path={jsonLd.path}
          description={jsonLd.description ?? description}
          aboutArticle={jsonLd.aboutArticle ?? Boolean(jsonLd.aboutArticleId)}
          id="schema-faq-article"
        />
      ) : null}

      <h2 id={titleHeadingId} className="editorial-card-title">
        {title}
      </h2>
      {description ? (
        <p className="editorial-card-lead">{description}</p>
      ) : null}

      <FAQAccordion
        aria-labelledby={titleHeadingId}
        className="editorial-faq-card__accordion"
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
