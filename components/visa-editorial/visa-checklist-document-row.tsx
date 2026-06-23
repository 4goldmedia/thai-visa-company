import type { ContentVisaChecklistItem } from "@/lib/content/types"
import { resolveVisaChecklistDocumentIcon } from "@/lib/visas/checklist-icons"
import { cn } from "@/lib/utils"

type VisaChecklistDocumentRowProps = {
  item: ContentVisaChecklistItem
  className?: string
}

function VisaChecklistDocumentRow({ item, className }: VisaChecklistDocumentRowProps) {
  const Icon = resolveVisaChecklistDocumentIcon(item.icon)

  return (
    <li className={cn("visa-checklist-item", className)}>
      <span className="visa-checklist-item__icon-wrap" aria-hidden>
        <Icon />
      </span>
      <div className="visa-checklist-item__copy">
        <p className="visa-checklist-item__text">{item.text}</p>
        {item.note ? <p className="visa-checklist-item__note">{item.note}</p> : null}
      </div>
    </li>
  )
}

export { VisaChecklistDocumentRow }
