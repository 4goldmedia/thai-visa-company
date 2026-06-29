import { cn } from "@/lib/utils"

type KeyFactsItem = {
  label: string
  value: string
}

type KeyFactsProps = {
  title?: string
  items: ReadonlyArray<KeyFactsItem>
  className?: string
}

function KeyFacts({ title = "Key facts", items, className }: KeyFactsProps) {
  if (items.length === 0) return null

  return (
    <aside className={cn("editorial-key-facts", className)} aria-label={title}>
      <h3 className="editorial-key-facts__title">{title}</h3>
      <dl className="editorial-key-facts__grid">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="editorial-key-facts__label">{item.label}</dt>
            <dd className="editorial-key-facts__value">{item.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}

export { KeyFacts }
export type { KeyFactsItem }
