import { cn } from "@/lib/utils"

type ArticleQuickAnswerProps = {
  /** Single answer string — split on blank lines into paragraphs */
  answer?: string
  /** Explicit paragraphs override `answer` */
  paragraphs?: ReadonlyArray<string>
  title?: string
  children?: React.ReactNode
  className?: string
}

function splitAnswerParagraphs(answer: string): string[] {
  const parts = answer
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean)

  return parts.length > 0 ? parts : [answer.trim()]
}

function ArticleQuickAnswer({
  answer,
  paragraphs,
  title = "Quick answer",
  children,
  className,
}: ArticleQuickAnswerProps) {
  const bodyParagraphs =
    paragraphs ?? (answer ? splitAnswerParagraphs(answer) : undefined)

  if (!children && (!bodyParagraphs || bodyParagraphs.length === 0)) {
    return null
  }

  return (
    <section
      className={cn("editorial-quick-answer", className)}
      aria-labelledby="article-quick-answer-heading"
    >
      <h2 id="article-quick-answer-heading" className="editorial-quick-answer__label">
        {title}
      </h2>
      <div className="editorial-quick-answer__body">
        {children ??
          bodyParagraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
      </div>
    </section>
  )
}

export { ArticleQuickAnswer }
