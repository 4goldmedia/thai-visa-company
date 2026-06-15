import Link from "next/link"

import type { ContentRelatedLink } from "@/lib/content/types"
import { cardSurfaceClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type ArticleTopicHubStripProps = {
  topicHub: ContentRelatedLink
  className?: string
}

function ArticleTopicHubStrip({ topicHub, className }: ArticleTopicHubStripProps) {
  return (
    <aside
      className={cn(cardSurfaceClass, "p-5 sm:p-6", className)}
      aria-label="Related topic hub"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
        Topic hub
      </p>
      <h2 className="mt-2 text-[15px] font-medium leading-snug text-foreground sm:text-base">
        <Link
          href={topicHub.href}
          className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        >
          {topicHub.title}
        </Link>
      </h2>
      <p className="mt-2 text-[14px] leading-[1.65] text-muted-foreground">
        {topicHub.description}
      </p>
    </aside>
  )
}

export { ArticleTopicHubStrip }
