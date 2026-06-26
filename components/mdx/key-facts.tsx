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
    <aside
      className={cn(
        "editorial-key-facts my-8 border border-border/50 px-5 py-5 sm:px-6 sm:py-6",
        className,
      )}
      aria-label={title}
    >
      <h3 className="text-sm font-semibold tracking-[-0.01em] text-foreground">{title}</h3>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="text-[11px] font-medium uppercase tracking-[0.04em] text-muted-foreground">
              {item.label}
            </dt>
            <dd className="mt-1 text-[15px] leading-snug text-foreground">{item.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}

export { KeyFacts }
export type { KeyFactsItem }
