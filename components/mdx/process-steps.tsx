import { cn } from "@/lib/utils"

type ProcessStep = {
  step: number
  title: string
  description: string
}

type ProcessStepsProps = {
  steps: ReadonlyArray<ProcessStep>
  ariaLabel?: string
  className?: string
}

function ProcessSteps({
  steps,
  ariaLabel = "Process steps",
  className,
}: ProcessStepsProps) {
  return (
    <ol
      aria-label={ariaLabel}
      className={cn("editorial-process-steps", className)}
    >
      {steps.map((item) => (
        <li key={item.step} className="editorial-process-steps__item">
          <span className="editorial-process-steps__step-label">
            Step {item.step}
          </span>
          <div>
            <h3 className="editorial-process-steps__step-title">{item.title}</h3>
            <p className="editorial-process-steps__step-body">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export { ProcessSteps }
