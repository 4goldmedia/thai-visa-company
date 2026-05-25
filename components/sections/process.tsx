import { ProcessStep } from "@/components/cards/process-step"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SectionReveal } from "@/components/motion"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { sectionContentOffsetClass } from "@/lib/section-styles"
import type { VisaProcessStep } from "@/lib/visas/types"
import { cn } from "@/lib/utils"

const defaultProcessSteps: ReadonlyArray<VisaProcessStep> = [
  {
    step: 1,
    title: "Contact us",
    description:
      "Message us on LINE or WhatsApp and tell us what you're planning.",
  },
  {
    step: 2,
    title: "We review your situation",
    description:
      "We assess eligibility, timing, and the visa pathways that fit your case.",
  },
  {
    step: 3,
    title: "Document preparation",
    description:
      "We guide you through requirements, forms, and supporting documents.",
  },
  {
    step: 4,
    title: "Application & ongoing support",
    description:
      "We stay available throughout the process and help with updates or renewals.",
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
  title = "How your move to Thailand moves forward",
  description =
    "A simple four-step process. Clear guidance from first message to approval.",
  eyebrow = "How it works",
  steps,
  processAriaLabel = "How your move to Thailand works",
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
        className={cn("process-flow", sectionContentOffsetClass)}
      >
        {steps.map((item) => (
          <li key={item.step} className="process-flow__item">
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
      <Container>
        <Process headingId={headingId} steps={steps} {...processProps} />
      </Container>
    </Section>
  )
}

export { Process, ProcessSection, defaultProcessSteps }
