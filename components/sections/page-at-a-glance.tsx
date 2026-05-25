import { Clock, Compass, MapPin, type LucideIcon } from "lucide-react"

import { Container } from "@/components/layout/container"
import type { AtAGlanceContent, AtAGlanceIcon } from "@/lib/content/at-a-glance"
import { cn } from "@/lib/utils"

const atAGlanceIcons: Record<AtAGlanceIcon, LucideIcon> = {
  routes: Compass,
  response: Clock,
  location: MapPin,
}

type PageAtAGlanceProps = AtAGlanceContent & {
  /** Stable id for landmark / skip targets */
  id?: string
  className?: string
}

/**
 * Executive-summary band — scannable facts for readers and answer engines.
 */
function PageAtAGlance({
  id = "page-at-a-glance",
  title,
  context,
  items,
  className,
}: PageAtAGlanceProps) {
  if (!items.length) return null

  return (
    <aside
      id={id}
      aria-label={title}
      className={cn("at-a-glance", className)}
    >
      <Container>
        <div className="at-a-glance__grid">
          <header className="at-a-glance__intro">
            <p className="at-a-glance__label">{title}</p>
            {context ? (
              <p className="at-a-glance__context">{context}</p>
            ) : null}
          </header>

          <ul className="at-a-glance__rows">
            {items.map((item) => {
              const Icon = atAGlanceIcons[item.icon]

              return (
                <li key={item.label} className="at-a-glance__row">
                  <span className="at-a-glance__icon" aria-hidden>
                    <Icon />
                  </span>
                  <div className="at-a-glance__copy">
                    <p className="at-a-glance__row-label">{item.label}</p>
                    <p className="at-a-glance__row-description">
                      {item.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </aside>
  )
}

export { PageAtAGlance }
export type { PageAtAGlanceProps }
