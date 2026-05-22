import { ResourceCard } from "@/components/cards/resource-card"
import type { ResourceArticle } from "@/lib/resources/types"
import { cn } from "@/lib/utils"

type ResourcesArticleGridProps = {
  articles: ReadonlyArray<ResourceArticle>
  listAriaLabel: string
  className?: string
}

function ResourcesArticleGrid({
  articles,
  listAriaLabel,
  className,
}: ResourcesArticleGridProps) {
  const count = articles.length

  if (count === 0) {
    return null
  }

  return (
    <ul
      aria-label={listAriaLabel}
      className={cn(
        "grid list-none grid-cols-1 gap-3.5 p-0 sm:gap-4",
        count === 1 && "max-w-md",
        count === 2 && "sm:grid-cols-2",
        count >= 3 && "sm:grid-cols-2 lg:grid-cols-3 lg:gap-5",
        className
      )}
    >
      {articles.map((article) => (
        <li key={article.path} className="flex min-w-0 sm:h-full">
          <ResourceCard
            category={article.category}
            title={article.title}
            description={article.description}
            href={article.path}
            status={article.status}
            className="w-full"
          />
        </li>
      ))}
    </ul>
  )
}

export { ResourcesArticleGrid }
