import { cn } from "@/lib/utils"

type ProcessStepProps = {
  /** Step position in the flow (1–4) */
  step: number
  title: string
  description: string
  className?: string
}

function formatStepNumber(step: number): string {
  return String(step).padStart(2, "0")
}

/**
 * Open editorial process step  -  large numeral, title, supporting copy (no card chrome).
 */
function ProcessStep({ step, title, description, className }: ProcessStepProps) {
  return (
    <article
      data-slot="process-step"
      data-step={step}
      className={cn("process-flow__step", className)}
    >
      <p className="process-flow__number" aria-hidden>
        {formatStepNumber(step)}
      </p>

      <h3 className="process-flow__title">
        <span className="sr-only">Step {step}: </span>
        {title}
      </h3>

      <p className="process-flow__description">{description}</p>
    </article>
  )
}

export { ProcessStep }
export type { ProcessStepProps }
