import { Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"

type ArticleQuickAnswerProps = {
  /** Single answer string  -  split on blank lines into paragraphs */
  answer?: string
  /** Explicit paragraphs override `answer` */
  paragraphs?: ReadonlyArray<string>
  title?: string
  headingId?: string
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
  headingId = "article-quick-answer-heading",
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
      aria-labelledby={headingId}
    >
      <div className="editorial-quick-answer__label-row">
        <Sparkles
          className="editorial-quick-answer__icon"
          strokeWidth={1.75}
          aria-hidden
        />
        <h2 id={headingId} className="editorial-quick-answer__label">
          {title}
        </h2>
      </div>
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
