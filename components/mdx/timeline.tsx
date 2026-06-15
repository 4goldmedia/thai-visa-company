import { VisaTimeline } from "@/components/visa-editorial/visa-timeline"
import type { VisaProcessStep } from "@/lib/visas/types"
import { cn } from "@/lib/utils"

type TimelineProps = {
  steps: ReadonlyArray<VisaProcessStep>
  ariaLabel?: string
  className?: string
}

function Timeline({ steps, ariaLabel = "Timeline", className }: TimelineProps) {
  return (
    <VisaTimeline
      steps={steps}
      ariaLabel={ariaLabel}
      className={cn("my-8 sm:my-10", className)}
    />
  )
}

export { Timeline }
