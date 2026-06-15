import { cn } from "@/lib/utils"

type ArticleStatProps = {
  value: string
  label: string
  className?: string
}

function ArticleStat({ value, label, className }: ArticleStatProps) {
  return (
    <div className={cn("editorial-stat", className)}>
      <p className="editorial-stat__value">{value}</p>
      <p className="editorial-stat__label">{label}</p>
    </div>
  )
}

export { ArticleStat }
