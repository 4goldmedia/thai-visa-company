import { SectionReveal } from "@/components/motion"
import { EditorialCallout } from "@/components/visa-editorial/editorial-callout"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import {
  formatVisaRequirementItem,
  getVisaRequirementItemTone,
} from "@/lib/visa-requirement-item"
import { visaGroupCardClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaRequirementsBlock = {
  title?: string
  intro?: string
  items: ReadonlyArray<string>
}

type VisaRequirementsProps = {
  headingId: string
  title?: string
  description?: string
  eyebrow?: string
  requirements: VisaRequirementsBlock
  eligibility: VisaRequirementsBlock
  documents: VisaRequirementsBlock
  className?: string
}

const defaultBlockTitles = {
  requirements: "Visa requirements",
  eligibility: "Eligibility points",
  documents: "Required documents",
} as const

function VisaRequirementsGroupCard({
  panelHeadingId,
  title,
  intro,
  items,
}: {
  panelHeadingId: string
  title: string
  intro?: string
  items: ReadonlyArray<string>
}) {
  return (
    <article
      aria-labelledby={panelHeadingId}
      className={visaGroupCardClass}
    >
      <h3 id={panelHeadingId} className="visa-group-card__title">
        {title}
      </h3>
      {intro ? <p className="visa-group-card__intro">{intro}</p> : null}
      <ul className="visa-group-card__list" aria-label={title}>
        {items.map((item) => {
          const tone = getVisaRequirementItemTone(item)
          const label =
            tone === "mandatory"
              ? "Mandatory"
              : tone === "supporting"
                ? "Supporting"
                : tone === "note"
                  ? "Note"
                  : null

          return (
            <li
              key={item}
              className={cn(
                "visa-group-card__item",
                tone === "mandatory" && "visa-group-card__item--mandatory",
                tone === "supporting" && "visa-group-card__item--supporting",
              )}
            >
              {label ? (
                <>
                  <strong>{label}: </strong>
                  {formatVisaRequirementItem(item)}
                </>
              ) : (
                item
              )}
            </li>
          )
        })}
      </ul>
    </article>
  )
}

function VisaRequirements({
  headingId,
  title = "Requirements",
  description = "What you typically need to qualify and apply — explained in plain language, without legal jargon.",
  eyebrow = "What you need",
  requirements,
  eligibility,
  documents,
  className,
}: VisaRequirementsProps) {
  const panels = [
    {
      panelHeadingId: `${headingId}-requirements`,
      title: requirements.title ?? defaultBlockTitles.requirements,
      intro: requirements.intro,
      items: requirements.items,
    },
    {
      panelHeadingId: `${headingId}-eligibility`,
      title: eligibility.title ?? defaultBlockTitles.eligibility,
      intro: eligibility.intro,
      items: eligibility.items,
    },
    {
      panelHeadingId: `${headingId}-documents`,
      title: documents.title ?? defaultBlockTitles.documents,
      intro: documents.intro,
      items: documents.items,
    },
  ] as const

  return (
    <div className={cn("flex flex-col", className)}>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent>
        <EditorialCallout variant="requirements-change" className="mb-6 sm:mb-8">
          <p>
            Visa rules and document lists change. We keep your file aligned with what
            officers expect before you submit—so you are not guessing from outdated
            checklists.
          </p>
        </EditorialCallout>
        <div className="visa-group-grid visa-group-grid--requirements">
          {panels.map((panel) => (
            <VisaRequirementsGroupCard
              key={panel.panelHeadingId}
              panelHeadingId={panel.panelHeadingId}
              title={panel.title}
              intro={panel.intro}
              items={panel.items}
            />
          ))}
        </div>
      </VisaEditorialContent>
    </div>
  )
}

type VisaRequirementsSectionProps = VisaRequirementsProps & {
  sectionId?: string
  className?: string
}

function VisaRequirementsSection({
  sectionId = "visa-requirements",
  headingId,
  className,
  ...requirementsProps
}: VisaRequirementsSectionProps) {
  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="wide"
      className={className}
    >
      <SectionReveal>
        <VisaRequirements headingId={headingId} {...requirementsProps} />
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export {
  VisaRequirements,
  VisaRequirementsSection,
  VisaRequirementsGroupCard,
  defaultBlockTitles,
}
export type {
  VisaRequirementsProps,
  VisaRequirementsSectionProps,
  VisaRequirementsBlock,
}
