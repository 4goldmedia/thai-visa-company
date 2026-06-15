import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

type ArticleChecklistProps = {
  title: string
  items: ReadonlyArray<string>
  className?: string
}

function ArticleChecklist({ title, items, className }: ArticleChecklistProps) {
  if (items.length === 0) return null

  return (
    <div className={cn("editorial-checklist", className)}>
      <p className="editorial-checklist__title">{title}</p>
      <ul className="editorial-checklist__list">
        {items.map((item) => (
          <li key={item} className="editorial-checklist__item">
            <Check className="editorial-checklist__icon" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { ArticleChecklist }
