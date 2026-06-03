import { SectionReveal } from "@/components/motion"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type { ContentVisaDocumentChecklistSection } from "@/lib/content/types"
import { visaChecklistCardClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaDocumentChecklistSectionProps = ContentVisaDocumentChecklistSection & {
  sectionId: string
  headingId: string
  className?: string
}

function VisaDocumentChecklistSection({
  sectionId,
  headingId,
  title = "Document checklist",
  description,
  eyebrow,
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
        <VisaEditorialContent>
          <div className="visa-group-grid visa-group-grid--checklist">
            {groups.map((group) => {
              const groupHeadingId = `${sectionId}-${group.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`

              return (
                <article
                  key={group.title}
                  aria-labelledby={groupHeadingId}
                  className={visaChecklistCardClass}
                >
                  <h3 id={groupHeadingId} className="visa-checklist-card__title">
                    {group.title}
                  </h3>
                  {group.intro ? (
                    <p className="visa-checklist-card__intro">{group.intro}</p>
                  ) : null}
                  <ul className="visa-checklist-card__list" aria-label={group.title}>
                    {group.items.map((item) => (
                      <li key={item.text} className="visa-checklist-card__item">
                        {item.text}
                        {item.note ? (
                          <span className="visa-checklist-card__note">
                            {item.note}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </VisaEditorialContent>
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaDocumentChecklistSection }
export type { VisaDocumentChecklistSectionProps }
