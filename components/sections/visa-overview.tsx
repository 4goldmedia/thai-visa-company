import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SectionReveal } from "@/components/motion"
import { sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type VisaOverviewContent = {
  /** Block heading — sensible defaults provided per block */
  title?: string
  /** One short paragraph or a scannable bullet list */
  content: string | ReadonlyArray<string>
}

type VisaOverviewProps = {
  /** Stable id for `aria-labelledby` on the parent `<section>` */
  headingId: string
  /** Section h2 — default "Visa overview" */
  title?: string
  /** Intro line below the section title */
  description?: string
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

const panelTitleClass =
  "text-[15px] font-medium leading-snug tracking-tight text-foreground sm:text-base"

const panelBodyClass =
  "text-[15px] leading-[1.7] text-pretty text-muted-foreground sm:text-base sm:leading-relaxed"

const panelListClass = "flex list-none flex-col gap-2.5 p-0 sm:gap-3"

function VisaOverviewPanel({
  panelHeadingId,
  title,
  content,
}: {
  panelHeadingId: string
  title: string
  content: string | ReadonlyArray<string>
}) {
  return (
    <article
      aria-labelledby={panelHeadingId}
      className="min-w-0 py-6 first:pt-0 last:pb-0 sm:py-7"
    >
      <h3 id={panelHeadingId} className={panelTitleClass}>
        {title}
      </h3>

      {typeof content === "string" ? (
        <p className={cn(panelBodyClass, "mt-3 max-w-prose sm:mt-3.5")}>
          {content}
        </p>
      ) : (
        <ul className={cn(panelListClass, "mt-3 sm:mt-3.5")}>
          {content.map((item) => (
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
      )}
    </article>
  )
}

function VisaOverview({
  headingId,
  title = "Visa overview",
  description = "A clear snapshot of who qualifies, what matters most, and how the process usually works.",
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
    },
    {
      panelHeadingId: `${headingId}-eligibility`,
      title: eligibility.title ?? defaultBlockTitles.eligibility,
      content: eligibility.content,
    },
    {
      panelHeadingId: `${headingId}-practical`,
      title: practicalOverview.title ?? defaultBlockTitles.practicalOverview,
      content: practicalOverview.content,
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
          "divide-y divide-border/50"
        )}
      >
        {panels.map((panel) => (
          <VisaOverviewPanel
            key={panel.panelHeadingId}
            panelHeadingId={panel.panelHeadingId}
            title={panel.title}
            content={panel.content}
          />
        ))}
      </div>
    </div>
  )
}

type VisaOverviewSectionProps = VisaOverviewProps & {
  sectionId?: string
  sectionClassName?: string
}

function VisaOverviewSection({
  sectionId = "visa-overview",
  sectionClassName,
  headingId,
  ...overviewProps
}: VisaOverviewSectionProps) {
  return (
    <Section
      id={sectionId}
      spacing="default"
      aria-labelledby={headingId}
      className={sectionClassName}
    >
      <Container size="content">
        <VisaOverview headingId={headingId} {...overviewProps} />
      </Container>
    </Section>
  )
}

export { VisaOverview, VisaOverviewSection, VisaOverviewPanel, defaultBlockTitles }
export type { VisaOverviewProps, VisaOverviewSectionProps, VisaOverviewContent }
