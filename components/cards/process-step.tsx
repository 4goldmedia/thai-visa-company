import { cn } from "@/lib/utils"

type ProcessStepProps = {
  /** Step position in the flow (displayed as 1, 2, 3…) */
  step: number
  /** Step headline */
  title: string
  /** Concise supporting description */
  description: string
  className?: string
}

function ProcessStep({
  step,
  title,
  description,
  className,
}: ProcessStepProps) {
  return (
    <article
      data-slot="process-step"
      data-step={step}
      className={cn("flex gap-3 sm:gap-3.5", className)}
    >
      <span
        className="flex size-7 shrink-0 items-center justify-center rounded-md bg-muted/40 text-[11px] font-medium tabular-nums text-muted-foreground sm:size-8 sm:text-xs"
        aria-hidden
      >
        {step}
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] font-medium leading-snug tracking-tight text-foreground">
          <span className="sr-only">Step {step}: </span>
          {title}
        </h3>
        <p className="mt-1.5 text-[14px] leading-[1.65] text-muted-foreground sm:mt-2 sm:text-[15px] sm:leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  )
}

export { ProcessStep }
export type { ProcessStepProps }
