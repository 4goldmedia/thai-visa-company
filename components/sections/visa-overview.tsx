import { Fragment } from "react"

import { SectionReveal } from "@/components/motion"
import { EditorialCallout } from "@/components/visa-editorial/editorial-callout"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import { cn } from "@/lib/utils"

function hasOverviewContent(content: string | ReadonlyArray<string>): boolean {
  if (typeof content === "string") return content.trim().length > 0
  return content.length > 0
}

type VisaOverviewContent = {
  title?: string
  content: string | ReadonlyArray<string>
}

type VisaOverviewProps = {
  headingId: string
  title?: string
  description?: string
  intro?: string | ReadonlyArray<string>
  eyebrow?: string
  audience: VisaOverviewContent
  eligibility: VisaOverviewContent
  practicalOverview: VisaOverviewContent
  className?: string
}

const defaultBlockTitles = {
  audience: "Who this visa is for",
  eligibility: "Basic eligibility",
  practicalOverview: "Practical overview",
} as const

function VisaOverviewPanel({
  panelHeadingId,
  title,
  content,
  variant = "default",
}: {
  panelHeadingId: string
  title: string
  content: string | ReadonlyArray<string>
  variant?: "default" | "takeaway"
}) {
  const isList = Array.isArray(content)
  const firstParagraph = isList ? null : content

  return (
    <article
      aria-labelledby={panelHeadingId}
      className="visa-overview-panel"
    >
      <h3 id={panelHeadingId} className="visa-overview-panel__title">
        {title}
      </h3>

      <div className="visa-overview-panel__body">
        {variant === "takeaway" && firstParagraph ? (
          <EditorialCallout variant="good-to-know">
            <p>{firstParagraph}</p>
          </EditorialCallout>
        ) : isList ? (
          <ul className="visa-overview-panel__list">
            {content.map((item) => (
              <li key={item} className="visa-overview-panel__list-item">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="visa-overview-panel__lead">{firstParagraph}</p>
        )}
      </div>
    </article>
  )
}

function VisaOverview({
  headingId,
  title = "Visa overview",
  description,
  intro,
  eyebrow = "At a glance",
  audience,
  eligibility,
  practicalOverview,
  className,
}: VisaOverviewProps) {
  const panels = [
    {
      panelHeadingId: `${headingId}-audience`,
      title: audience.title ?? defaultBlockTitles.audience,
      content: audience.content,
      variant: "default" as const,
    },
    {
      panelHeadingId: `${headingId}-eligibility`,
      title: eligibility.title ?? defaultBlockTitles.eligibility,
      content: eligibility.content,
      variant: "default" as const,
    },
    {
      panelHeadingId: `${headingId}-practical`,
      title: practicalOverview.title ?? defaultBlockTitles.practicalOverview,
      content: practicalOverview.content,
      variant: "takeaway" as const,
    },
  ].filter((panel) => hasOverviewContent(panel.content))

  return (
    <div className={cn("flex flex-col", className)}>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent>
        {intro ? (
          <div className="visa-overview-intro-block">
            {(Array.isArray(intro) ? intro : [intro]).map((paragraph) => (
              <p key={paragraph} className="visa-overview-intro">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
        {panels.length > 0 ? (
          <div className="visa-overview-stack">
            {panels.map((panel, index) => (
              <Fragment key={panel.panelHeadingId}>
                {(index > 0 || intro) && (
                  <hr className="visa-overview-divider" aria-hidden="true" />
                )}
                <VisaOverviewPanel
                  panelHeadingId={panel.panelHeadingId}
                  title={panel.title}
                  content={panel.content}
                  variant={panel.variant}
                />
              </Fragment>
            ))}
          </div>
        ) : null}
      </VisaEditorialContent>
    </div>
  )
}

type VisaOverviewSectionProps = VisaOverviewProps & {
  sectionId?: string
  className?: string
}

function VisaOverviewSection({
  sectionId = "visa-overview",
  headingId,
  className,
  ...overviewProps
}: VisaOverviewSectionProps) {
  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="wide"
      className={cn("visa-overview-section", className)}
    >
      <SectionReveal>
        <VisaOverview headingId={headingId} {...overviewProps} />
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaOverview, VisaOverviewSection, VisaOverviewPanel, defaultBlockTitles }
export type { VisaOverviewProps, VisaOverviewSectionProps, VisaOverviewContent }
