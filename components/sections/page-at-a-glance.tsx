import { Container } from "@/components/layout/container"
import { cn } from "@/lib/utils"

type PageAtAGlanceProps = {
  /** Stable id for landmark / skip targets */
  id?: string
  title?: string
  items: ReadonlyArray<string>
  className?: string
}

/**
 * Concise, scannable facts for readers and answer engines.
 * Not hidden — written as normal prose, not keyword blocks.
 */
function PageAtAGlance({
  id = "page-at-a-glance",
  title = "At a glance",
  items,
  className,
}: PageAtAGlanceProps) {
  if (!items.length) return null

  return (
    <aside
      id={id}
      aria-label={title}
      className={cn(
        "border-y border-border/50 bg-muted/30 py-6 sm:py-7",
        className,
      )}
    >
      <Container size="content">
        <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs">
          {title}
        </p>
        <ul className="mt-3 list-none space-y-2.5 text-[15px] leading-[1.65] text-foreground/90 sm:text-base sm:leading-relaxed">
          {items.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span
                className="mt-2 size-1 shrink-0 rounded-full bg-foreground/35"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </aside>
  )
}

export { PageAtAGlance }
