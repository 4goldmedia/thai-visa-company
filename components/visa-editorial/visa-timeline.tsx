import type { VisaProcessStep } from "@/lib/visas/types"
import { visaTimelineClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaTimelineProps = {
  steps: ReadonlyArray<VisaProcessStep>
  ariaLabel: string
  className?: string
}

function VisaTimeline({ steps, ariaLabel, className }: VisaTimelineProps) {
  return (
    <ol className={cn(visaTimelineClass, className)} aria-label={ariaLabel}>
      {steps.map((item, index) => (
        <li key={item.step} className="visa-timeline__item">
          <div className="visa-timeline__marker" aria-hidden>
            <span className="visa-timeline__step">Step {item.step}</span>
            {index < steps.length - 1 ? (
              <span className="visa-timeline__connector" />
            ) : null}
          </div>
          <div className="visa-timeline__content">
            <h3 className="visa-timeline__title">{item.title}</h3>
            <p className="visa-timeline__description">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export { VisaTimeline }
