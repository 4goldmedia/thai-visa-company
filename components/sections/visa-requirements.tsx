import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SectionReveal } from "@/components/motion"
import { sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type VisaRequirementsBlock = {
  /** Block heading — defaults provided per group */
  title?: string
  /** Optional one-line context before the list */
  intro?: string
  /** Scannable requirement points */
  items: ReadonlyArray<string>
}

type VisaRequirementsProps = {
  /** Stable id for `aria-labelledby` on the parent `<section>` */
  headingId: string
  /** Section h2 — default "Requirements" */
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

const panelTitleClass =
  "text-[15px] font-medium leading-snug tracking-tight text-foreground sm:text-base"

const panelIntroClass =
  "mt-3 max-w-prose text-[15px] leading-[1.7] text-pretty text-muted-foreground sm:mt-3.5 sm:text-base sm:leading-relaxed"

const requirementListClass = "flex list-none flex-col gap-2.5 p-0 sm:gap-3"

function VisaRequirementsList({
  items,
  ariaLabel,
}: {
  items: ReadonlyArray<string>
  ariaLabel: string
}) {
  return (
    <ul aria-label={ariaLabel} className={requirementListClass}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-[15px] leading-[1.65] text-muted-foreground sm:leading-relaxed"
        >
          <span
            className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-foreground/25"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function VisaRequirementsPanel({
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
      className={cn(
        "min-w-0 py-6 first:pt-0 last:pb-0 sm:py-7",
        "lg:rounded-[var(--radius)] lg:border lg:border-border/50 lg:bg-card/30 lg:px-5 lg:py-5 lg:first:pt-5 lg:last:pb-5"
      )}
    >
      <h3 id={panelHeadingId} className={panelTitleClass}>
        {title}
      </h3>

      {intro ? <p className={panelIntroClass}>{intro}</p> : null}

      <div className="mt-3 sm:mt-3.5">
        <VisaRequirementsList items={items} ariaLabel={title} />
      </div>
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
      <SectionReveal>
        <SectionHeading
          id={headingId}
          eyebrow={eyebrow}
          title={title}
          description={description}
          titleClassName="max-w-xl"
          descriptionClassName="max-w-2xl"
        />
      </SectionReveal>

      <div
        className={cn(
          sectionContentOffsetClass,
          "divide-y divide-border/50",
          "lg:grid lg:grid-cols-3 lg:gap-5 lg:divide-y-0"
        )}
      >
        {panels.map((panel) => (
          <VisaRequirementsPanel
            key={panel.panelHeadingId}
            panelHeadingId={panel.panelHeadingId}
            title={panel.title}
            intro={panel.intro}
            items={panel.items}
          />
        ))}
      </div>
    </div>
  )
}

type VisaRequirementsSectionProps = VisaRequirementsProps & {
  sectionId?: string
  sectionClassName?: string
}

function VisaRequirementsSection({
  sectionId = "visa-requirements",
  sectionClassName,
  headingId,
  ...requirementsProps
}: VisaRequirementsSectionProps) {
  return (
    <Section
      id={sectionId}
      spacing="default"
      aria-labelledby={headingId}
      className={sectionClassName}
    >
      <Container>
        <VisaRequirements headingId={headingId} {...requirementsProps} />
      </Container>
    </Section>
  )
}

export {
  VisaRequirements,
  VisaRequirementsSection,
  VisaRequirementsPanel,
  VisaRequirementsList,
  defaultBlockTitles,
}
export type {
  VisaRequirementsProps,
  VisaRequirementsSectionProps,
  VisaRequirementsBlock,
}
