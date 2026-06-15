import { Timeline } from "@/components/mdx/timeline"
import type { VisaProcessStep } from "@/lib/visas/types"

type ArticleTimelineProps = {
  steps: ReadonlyArray<VisaProcessStep>
  ariaLabel?: string
  className?: string
}

function ArticleTimeline({ steps, ariaLabel, className }: ArticleTimelineProps) {
  return <Timeline steps={steps} ariaLabel={ariaLabel} className={className} />
}

export { ArticleTimeline }
