import Link from "next/link"

import { SectionReveal } from "@/components/motion"
import { EditorialCallout } from "@/components/visa-editorial/editorial-callout"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type {
  ContentVisaQualificationPathway,
  ContentVisaRequirementsClarification,
  ContentVisaRequirementsDocumentsOverview,
} from "@/lib/content/types"
import { ctaHref } from "@/lib/cta"
import {
  formatVisaRequirementItem,
  getVisaRequirementItemTone,
} from "@/lib/visa-requirement-item"
import { editorialLinkClass } from "@/lib/section-styles"
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
  pathways?: ReadonlyArray<ContentVisaQualificationPathway>
  documentsOverview?: ContentVisaRequirementsDocumentsOverview
  clarification?: ContentVisaRequirementsClarification
  requirements?: VisaRequirementsBlock
  eligibility?: VisaRequirementsBlock
  documents?: VisaRequirementsBlock
  showRequirementsChangeCallout?: boolean
  className?: string
}

const defaultBlockTitles = {
  requirements: "Visa requirements",
  eligibility: "Eligibility points",
  documents: "Required documents",
} as const

function VisaQualificationPathwayCard({
  panelHeadingId,
  title,
  description,
  badge,
}: ContentVisaQualificationPathway & { panelHeadingId: string }) {
  return (
    <article
      aria-labelledby={panelHeadingId}
      className="visa-pathway-card"
    >
      {badge ? <p className="visa-pathway-card__badge">{badge}</p> : null}
      <h3 id={panelHeadingId} className="visa-pathway-card__title">
        {title}
      </h3>
      <p className="visa-pathway-card__description">{description}</p>
    </article>
  )
}

function VisaDocumentOverviewCard({
  panelHeadingId,
  title,
  description,
}: {
  panelHeadingId: string
  title: string
  description: string
}) {
  return (
    <article
      aria-labelledby={panelHeadingId}
      className="visa-document-overview-card"
    >
      <h3 id={panelHeadingId} className="visa-document-overview-card__title">
        {title}
      </h3>
      <p className="visa-document-overview-card__description">{description}</p>
    </article>
  )
}

function VisaRequirementsClarificationCard({
  sectionId,
  title,
  description,
  linkLabel,
  linkHref = ctaHref.requestConsultation,
}: ContentVisaRequirementsClarification & { sectionId: string }) {
  return (
    <aside
      aria-labelledby={`${sectionId}-clarification-heading`}
      className="visa-requirements-clarification"
    >
      <h3
        id={`${sectionId}-clarification-heading`}
        className="visa-requirements-clarification__title"
      >
        {title}
      </h3>
      <p className="visa-requirements-clarification__description">{description}</p>
      <Link href={linkHref} className={editorialLinkClass}>
        {linkLabel}
      </Link>
    </aside>
  )
}

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

function VisaPathwaysRequirements({
  headingId,
  sectionId,
  title,
  description,
  eyebrow,
  pathways,
  documentsOverview,
  clarification,
}: VisaRequirementsProps & { sectionId: string }) {
  return (
    <div className="flex flex-col">
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title ?? "Do you qualify?"}
        description={description}
      />
      <VisaEditorialContent>
        <div className="visa-pathway-grid">
          {pathways?.map((pathway) => (
            <VisaQualificationPathwayCard
              key={pathway.id}
              panelHeadingId={`${headingId}-${pathway.id}`}
              {...pathway}
            />
          ))}
        </div>

        {documentsOverview ? (
          <div className="visa-requirements-documents">
            <header className="visa-requirements-documents__header">
              <h3 className="visa-requirements-documents__title">
                {documentsOverview.title}
              </h3>
              <p className="visa-requirements-documents__description">
                {documentsOverview.description}
              </p>
            </header>
            <div className="visa-document-overview-grid">
              {documentsOverview.items.map((item) => {
                const itemId = `${sectionId}-${item.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`
                return (
                  <VisaDocumentOverviewCard
                    key={item.title}
                    panelHeadingId={itemId}
                    title={item.title}
                    description={item.description}
                  />
                )
              })}
            </div>
          </div>
        ) : null}

        {clarification ? (
          <VisaRequirementsClarificationCard
            sectionId={sectionId}
            {...clarification}
          />
        ) : null}
      </VisaEditorialContent>
    </div>
  )
}

function VisaLegacyRequirements({
  headingId,
  title = "Requirements",
  description = "What you typically need to qualify and apply, explained in plain language, without legal jargon.",
  eyebrow = "What you need",
  requirements,
  eligibility,
  documents,
  showRequirementsChangeCallout = true,
  className,
}: VisaRequirementsProps) {
  const panels = [
    requirements && {
      panelHeadingId: `${headingId}-requirements`,
      title: requirements.title ?? defaultBlockTitles.requirements,
      intro: requirements.intro,
      items: requirements.items,
    },
    eligibility && {
      panelHeadingId: `${headingId}-eligibility`,
      title: eligibility.title ?? defaultBlockTitles.eligibility,
      intro: eligibility.intro,
      items: eligibility.items,
    },
    documents && {
      panelHeadingId: `${headingId}-documents`,
      title: documents.title ?? defaultBlockTitles.documents,
      intro: documents.intro,
      items: documents.items,
    },
  ].filter(Boolean) as ReadonlyArray<{
    panelHeadingId: string
    title: string
    intro?: string
    items: ReadonlyArray<string>
  }>

  return (
    <div className={cn("flex flex-col", className)}>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent>
        {showRequirementsChangeCallout ? (
          <EditorialCallout variant="requirements-change" className="mb-6 sm:mb-8">
            <p>
              Visa rules and document lists change. We keep your file aligned with what
              officers expect before you submit, so you are not guessing from outdated
              checklists.
            </p>
          </EditorialCallout>
        ) : null}
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

function VisaRequirements(props: VisaRequirementsProps & { sectionId?: string }) {
  if (props.pathways?.length) {
    return (
      <VisaPathwaysRequirements
        {...props}
        sectionId={props.sectionId ?? "visa-requirements"}
      />
    )
  }

  return <VisaLegacyRequirements {...props} />
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
  const usePathways = Boolean(requirementsProps.pathways?.length)

  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="wide"
      className={className}
    >
      <SectionReveal>
        {usePathways ? (
          <VisaPathwaysRequirements
            headingId={headingId}
            sectionId={sectionId}
            {...requirementsProps}
          />
        ) : (
          <VisaLegacyRequirements headingId={headingId} {...requirementsProps} />
        )}
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export {
  VisaRequirements,
  VisaRequirementsSection,
  VisaRequirementsGroupCard,
  VisaQualificationPathwayCard,
  defaultBlockTitles,
}
export type {
  VisaRequirementsProps,
  VisaRequirementsSectionProps,
  VisaRequirementsBlock,
}
