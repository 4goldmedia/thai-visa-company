import { cn } from "@/lib/utils"
import { resolveCanonicalUrlString } from "@/lib/seo"

type ArticleShareRowProps = {
  path: string
  title: string
  className?: string
}

function buildShareUrl(
  network: "facebook" | "linkedin" | "x",
  url: string,
  title: string,
): string {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  switch (network) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    case "x":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
  }
}

const shareLinkClass = cn(
  "inline-flex size-9 items-center justify-center rounded-md border border-border/40",
  "text-muted-foreground transition-colors hover:border-border/70 hover:bg-muted/15 hover:text-foreground",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
)

function ArticleShareRow({ path, title, className }: ArticleShareRowProps) {
  const url = resolveCanonicalUrlString(path)

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground/75">
        Share
      </span>
      <div className="flex items-center gap-2">
        <a
          href={buildShareUrl("facebook", url, title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className={shareLinkClass}
        >
          <span aria-hidden className="text-[13px] font-semibold">
            f
          </span>
        </a>
        <a
          href={buildShareUrl("linkedin", url, title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className={shareLinkClass}
        >
          <span aria-hidden className="text-[13px] font-semibold">
            in
          </span>
        </a>
        <a
          href={buildShareUrl("x", url, title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className={shareLinkClass}
        >
          <span aria-hidden className="text-[13px] font-semibold">
            X
          </span>
        </a>
      </div>
    </div>
  )
}

export { ArticleShareRow }
