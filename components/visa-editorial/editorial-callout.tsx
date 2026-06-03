import {
  editorialCalloutClass,
  visaEditorialBodyClass,
} from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

export const editorialCalloutVariants = [
  "important",
  "good-to-know",
  "common-mistake",
  "requirements-change",
] as const

export type EditorialCalloutVariant = (typeof editorialCalloutVariants)[number]

const defaultTitles: Record<EditorialCalloutVariant, string> = {
  important: "Important",
  "good-to-know": "Good to know",
  "common-mistake": "Common mistake",
  "requirements-change": "Requirements change frequently",
}

type EditorialCalloutProps = {
  variant: EditorialCalloutVariant
  title?: string
  children: React.ReactNode
  className?: string
}

function EditorialCallout({
  variant,
  title,
  children,
  className,
}: EditorialCalloutProps) {
  const displayTitle = title ?? defaultTitles[variant]

  return (
    <aside
      className={cn(
        editorialCalloutClass,
        `editorial-callout--${variant}`,
        className,
      )}
      role="note"
    >
      <p className="editorial-callout__title">{displayTitle}</p>
      <div className={cn(visaEditorialBodyClass, "editorial-callout__body")}>
        {children}
      </div>
    </aside>
  )
}

export { EditorialCallout }
