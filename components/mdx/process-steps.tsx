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
          <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground/75">
            Step {item.step}
          </span>
          <div>
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-foreground sm:text-[16px]">
              {item.title}
            </h3>
            <p className="mt-2 text-[15px] leading-[1.72] text-muted-foreground sm:text-[16px]">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export { ProcessSteps }
