import { motionClass } from "@/lib/motion-classes"
import { cn } from "@/lib/utils"

type SectionRevealProps = {
  children: React.ReactNode
  className?: string
  /** Optional delay (seconds) for scroll-driven reveal */
  delay?: number
}

/** Server-safe scroll reveal — CSS `animation-timeline: view()` with reduced-motion fallback */
function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  return (
    <div
      className={cn(motionClass.revealInView, className)}
      style={delay > 0 ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}

export { SectionReveal }
