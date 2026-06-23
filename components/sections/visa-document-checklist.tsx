import { SectionReveal } from "@/components/motion"
import { VisaChecklistDocumentRow } from "@/components/visa-editorial/visa-checklist-document-row"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type {
  ContentVisaChecklistGroup,
  ContentVisaDocumentChecklistSection,
} from "@/lib/content/types"
import { flattenChecklistGroupItems } from "@/lib/visas/checklist-icons"
import { visaChecklistCardClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaDocumentChecklistSectionProps = ContentVisaDocumentChecklistSection & {
  sectionId: string
  headingId: string
  className?: string
}

function slugifyChecklistId(value: string): string {
  return value.replace(/\s+/g, "-").toLowerCase()
}

function formatPathwayStep(step: number): string {
  return String(step).padStart(2, "0")
}

function VisaChecklistPathwayCard({
  group,
  sectionId,
  step,
}: {
  group: ContentVisaChecklistGroup
  sectionId: string
  step: number
}) {
  const groupHeadingId = `${sectionId}-${slugifyChecklistId(group.title)}`
  const categories = group.categories?.length
    ? group.categories
    : [
        {
          title: "Documents",
          items: flattenChecklistGroupItems(group),
        },
      ]

  return (
    <article
      aria-labelledby={groupHeadingId}
      className={cn(visaChecklistCardClass, "visa-checklist-card--pathway")}
    >
      <header className="visa-checklist-card__header">
        <p className="visa-checklist-card__step" aria-hidden>
          {formatPathwayStep(step)}
        </p>
        <h3 id={groupHeadingId} className="visa-checklist-card__title">
          <span className="sr-only">Pathway {step}: </span>
          {group.title}
        </h3>
        {group.intro ? (
          <p className="visa-checklist-card__intro">{group.intro}</p>
        ) : null}
      </header>
      <div className="visa-checklist-card__categories">
        {categories.map((category) => (
          <section
            key={category.title}
            aria-label={category.title}
            className="visa-checklist-category"
          >
            <h4 className="visa-checklist-category__title">{category.title}</h4>
            <ul className="visa-checklist-category__list">
              {category.items.map((item) => (
                <VisaChecklistDocumentRow key={item.text} item={item} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  )
}

function VisaDocumentChecklistSection({
  sectionId,
  headingId,
  title = "Document checklist",
  description,
  eyebrow,
  summary,
  groups,
  className,
}: VisaDocumentChecklistSectionProps) {
  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="wide"
      band
      className={className}
    >
      <SectionReveal>
        <VisaEditorialHeading
          id={headingId}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <VisaEditorialContent className="visa-document-checklist">
          {summary?.items.length ? (
            <aside
              className="visa-checklist-summary"
              aria-label={summary.title ?? "Core Documents"}
            >
              <p className="visa-checklist-summary__title">
                {summary.title ?? "Core Documents"}
              </p>
              <ul className="visa-checklist-summary__list">
                {summary.items.map((item) => (
                  <VisaChecklistDocumentRow
                    key={item.text}
                    item={item}
                    className="visa-checklist-summary__item"
                  />
                ))}
              </ul>
            </aside>
          ) : null}

          <div className="visa-group-grid visa-group-grid--checklist">
            {groups.map((group, index) => (
              <VisaChecklistPathwayCard
                key={group.title}
                group={group}
                sectionId={sectionId}
                step={index + 1}
              />
            ))}
          </div>
        </VisaEditorialContent>
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaDocumentChecklistSection }
export type { VisaDocumentChecklistSectionProps }
