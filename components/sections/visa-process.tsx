import { SectionReveal } from "@/components/motion"
import { VisaTimeline } from "@/components/visa-editorial/visa-timeline"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type { VisaProcessStep } from "@/lib/visas/types"
import { cn } from "@/lib/utils"

type VisaProcessProps = {
  headingId: string
  title?: string
  description?: string
  eyebrow?: string
  steps: ReadonlyArray<VisaProcessStep>
  processAriaLabel?: string
  className?: string
}

function VisaProcess({
  headingId,
  title = "How your application moves forward",
  description =
    "A clear sequence from first review to arrival—so you know what happens at each stage.",
  eyebrow = "How it works",
  steps,
  processAriaLabel = "Visa application process",
  className,
}: VisaProcessProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent>
        <VisaTimeline steps={steps} ariaLabel={processAriaLabel} />
      </VisaEditorialContent>
    </div>
  )
}

type VisaProcessSectionProps = VisaProcessProps & {
  sectionId: string
  className?: string
}

function VisaProcessSection({
  sectionId,
  headingId,
  className,
  ...processProps
}: VisaProcessSectionProps) {
  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="wide"
      className={className}
    >
      <SectionReveal>
        <VisaProcess headingId={headingId} {...processProps} />
      </SectionReveal>
    </VisaEditorialSection>
  )
}

export { VisaProcess, VisaProcessSection }
export type { VisaProcessProps, VisaProcessSectionProps }
