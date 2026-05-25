import { ProcessStep } from "@/components/cards/process-step"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SectionReveal } from "@/components/motion"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { cardShellClass, sectionContentOffsetClass } from "@/lib/section-styles"
import type { VisaProcessStep } from "@/lib/visas/types"
import { cn } from "@/lib/utils"

const defaultProcessSteps: ReadonlyArray<VisaProcessStep> = [
  {
    step: 1,
    title: "Contact us",
    description:
      "Message us on LINE or WhatsApp. Tell us your plans and we reply with what happens next.",
  },
  {
    step: 2,
    title: "We review your situation",
    description:
      "We confirm eligibility, timing, and the documents that apply to your case.",
  },
  {
    step: 3,
    title: "We prepare your visa process",
    description:
      "We map out each step and help you gather requirements without guesswork.",
  },
  {
    step: 4,
    title: "Ongoing support",
    description:
      "We stay available for questions and updates as your application progresses.",
  },
]

type ProcessProps = {
  headingId: string
  title?: string
  description?: string
  eyebrow?: string
  steps: ReadonlyArray<VisaProcessStep>
  processAriaLabel?: string
  className?: string
}

function Process({
  headingId,
  title = "How your application moves forward",
  description = "A simple four-step flow. You always know what we are handling and what you need to do next.",
  eyebrow = "How it works",
  steps,
  processAriaLabel = "Visa application process",
  className,
}: ProcessProps) {
  return (
    <SectionReveal className={cn("flex flex-col", className)}>
      <SectionHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
        titleClassName="max-w-xl"
      />

      <ol
        aria-label={processAriaLabel}
        className={cn(
          sectionContentOffsetClass,
          "list-none p-0",
          cardShellClass,
          "flex flex-col divide-y divide-border/50",
          "sm:grid sm:grid-cols-[repeat(2,minmax(0,1fr))] sm:gap-[var(--space-grid-gap)] sm:divide-y-0 sm:overflow-visible sm:rounded-none sm:border-0"
        )}
      >
        {steps.map((item) => (
          <li
            key={item.step}
            className={cn(
              "min-w-0 px-3.5 py-3.5",
              "sm:rounded-[var(--radius)] sm:border sm:border-border/50 sm:bg-card",
              "sm:transition-[border-color,background-color] sm:duration-200 sm:ease-out",
              "sm:hover:border-border/70 sm:hover:bg-muted/5",
              "motion-reduce:sm:transition-none"
            )}
          >
            <ProcessStep
              step={item.step}
              title={item.title}
              description={item.description}
            />
          </li>
        ))}
      </ol>
    </SectionReveal>
  )
}

type ProcessSectionProps = {
  sectionId?: string
  sectionClassName?: string
  headingId?: string
  title?: string
  description?: string
  eyebrow?: string
  steps?: ReadonlyArray<VisaProcessStep>
  processAriaLabel?: string
  className?: string
}

function ProcessSection({
  sectionId = sectionIds.process,
  sectionClassName,
  headingId = sectionHeadingIds.process,
  steps = defaultProcessSteps,
  ...processProps
}: ProcessSectionProps) {
  return (
    <Section
      id={sectionId}
      aria-labelledby={headingId}
      className={sectionClassName}
    >
      <Container size="content">
        <Process headingId={headingId} steps={steps} {...processProps} />
      </Container>
    </Section>
  )
}

export { Process, ProcessSection, defaultProcessSteps }
