import type { ContentVisaKeyFact } from "@/lib/content/types"
import { visaMetricCardClass, visaMetricGridClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaFactGridProps = {
  items: ReadonlyArray<ContentVisaKeyFact>
  className?: string
}

function VisaFactGrid({ items, className }: VisaFactGridProps) {
  return (
    <dl className={cn(visaMetricGridClass, className)}>
      {items.map((fact) => (
        <div key={fact.label} className={visaMetricCardClass}>
          <dt className="visa-metric-card__label">{fact.label}</dt>
          <dd className="visa-metric-card__value">{fact.value}</dd>
          {fact.detail ? (
            <p className="visa-metric-card__note">{fact.detail}</p>
          ) : null}
        </div>
      ))}
    </dl>
  )
}

export { VisaFactGrid }
