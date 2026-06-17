import { Container } from "@/components/layout/container"
import type { TrustBarContent } from "@/lib/content/trust-bar"
import { cn } from "@/lib/utils"

type TrustBarProps = TrustBarContent & {
  id?: string
  className?: string
}

/**
 * Premium horizontal trust layer  -  typography-only credibility band beneath the hero.
 */
function TrustBar({
  id = "trust-bar",
  ariaLabel,
  items,
  className,
}: TrustBarProps) {
  if (!items.length) return null

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("trust-bar", className)}
    >
      <Container>
        <ul className="trust-bar__list">
          {items.map((item) => (
            <li
              key={`${item.primary}-${item.secondary}`}
              className="trust-bar__item"
            >
              <div className="trust-bar__cell">
                <p className="trust-bar__primary">{item.primary}</p>
                <p className="trust-bar__secondary">{item.secondary}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export { TrustBar }
export type { TrustBarProps }
