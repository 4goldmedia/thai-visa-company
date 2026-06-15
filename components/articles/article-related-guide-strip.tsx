import Link from "next/link"

import type { ContentRelatedLink } from "@/lib/content/types"

type ArticleRelatedGuideStripProps = {
  guide: ContentRelatedLink
}

function ArticleRelatedGuideStrip({ guide }: ArticleRelatedGuideStripProps) {
  return (
    <aside
      className="my-8 rounded-lg border border-border/50 bg-muted/10 p-5 sm:my-10 sm:p-6"
      aria-label="Related guide"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
        Canonical guide
      </p>
      <h2 className="mt-2 text-[15px] font-medium leading-snug text-foreground sm:text-base">
        <Link
          href={guide.href}
          className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        >
          {guide.title}
        </Link>
      </h2>
      <p className="mt-2 text-[14px] leading-[1.65] text-muted-foreground">
        {guide.description}
      </p>
    </aside>
  )
}

export { ArticleRelatedGuideStrip }
