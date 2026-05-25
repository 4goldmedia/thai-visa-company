import { Clock, Shield, Star, Users, type LucideIcon } from "lucide-react"

import { Container } from "@/components/layout/container"
import type { TrustBarContent, TrustBarIcon } from "@/lib/content/trust-bar"
import { cn } from "@/lib/utils"

const trustBarIcons: Record<TrustBarIcon, LucideIcon> = {
  shield: Shield,
  users: Users,
  clock: Clock,
  star: Star,
}

type TrustBarProps = TrustBarContent & {
  id?: string
  className?: string
}

/**
 * Premium horizontal trust layer — calm scan band directly beneath the hero.
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
          {items.map((item) => {
            const Icon = trustBarIcons[item.icon]

            return (
              <li key={`${item.primary}-${item.secondary}`} className="trust-bar__item">
                <div className="trust-bar__cell">
                  <span className="trust-bar__icon" aria-hidden>
                    <Icon strokeWidth={1.35} />
                  </span>
                  <div className="trust-bar__copy">
                    <p className="trust-bar__primary">{item.primary}</p>
                    <p className="trust-bar__secondary">{item.secondary}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

export { TrustBar }
export type { TrustBarProps }
