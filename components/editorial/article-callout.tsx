import { cn } from "@/lib/utils"

export const articleCalloutVariants = [
  "important",
  "warning",
  "tip",
  "expert",
] as const

export type ArticleCalloutVariant = (typeof articleCalloutVariants)[number]

const defaultTitles: Record<ArticleCalloutVariant, string> = {
  important: "Important",
  warning: "Warning",
  tip: "Tip",
  expert: "Expert insight",
}

type ArticleCalloutProps = {
  variant?: ArticleCalloutVariant
  title?: string
  children: React.ReactNode
  className?: string
}

function ArticleCallout({
  variant = "important",
  title,
  children,
  className,
}: ArticleCalloutProps) {
  const displayTitle = title ?? defaultTitles[variant]

  return (
    <aside
      className={cn(
        "editorial-callout-block",
        `editorial-callout-block--${variant}`,
        className,
      )}
      role="note"
    >
      <p className="editorial-callout-block__title">{displayTitle}</p>
      <div className="editorial-callout-block__body">{children}</div>
    </aside>
  )
}

export { ArticleCallout }
