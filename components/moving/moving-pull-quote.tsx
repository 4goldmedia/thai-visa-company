import { cn } from "@/lib/utils"

type MovingPullQuoteProps = {
  title: string
  headingId: string
  paragraphs: ReadonlyArray<string>
  className?: string
}

function MovingPullQuote({
  title,
  headingId,
  paragraphs,
  className,
}: MovingPullQuoteProps) {
  return (
    <aside
      className={cn("moving-pull-quote", className)}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="moving-pull-quote__title">
        {title}
      </h2>
      <div className="moving-pull-quote__body">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </aside>
  )
}

export { MovingPullQuote }
