import type { ResourceArticleTocItem } from "@/lib/resources/articles/types"
import { articleTocLinkClass } from "@/lib/article-styles"
import { cn } from "@/lib/utils"

type ArticleTableOfContentsProps = {
  items: ReadonlyArray<ResourceArticleTocItem>
  className?: string
}

function ArticleTableOfContentsLinks({ items, className }: ArticleTableOfContentsProps) {
  return (
    <ul className={cn("flex flex-col gap-2.5 p-0 lg:gap-2", className)}>
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className={articleTocLinkClass}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export { ArticleTableOfContentsLinks }
