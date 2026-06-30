import Link from "next/link"

import type { MovingWhyTopic } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

type EditorialTopicCardProps = {
  topic: MovingWhyTopic
  index: number
  className?: string
}

function EditorialTopicCard({ topic, index, className }: EditorialTopicCardProps) {
  const body = (
    <>
      <span className="moving-topic-row__index" aria-hidden>
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="moving-topic-row__copy">
        <span className="moving-topic-row__title">{topic.title}</span>
        <span className="moving-topic-row__description">{topic.description}</span>
      </span>
    </>
  )

  if (topic.href) {
    return (
      <li className={cn("moving-topic-row", className)}>
        <Link href={topic.href} className="moving-topic-row__link">
          {body}
        </Link>
      </li>
    )
  }

  return (
    <li className={cn("moving-topic-row", className)}>
      <div className="moving-topic-row__link">{body}</div>
    </li>
  )
}

export { EditorialTopicCard }
export type { EditorialTopicCardProps }
