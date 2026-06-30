import Link from "next/link"

import type { MovingFaqItem } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

type EditorialFaqCardProps = {
  item: MovingFaqItem
  className?: string
}

function EditorialFaqCard({ item, className }: EditorialFaqCardProps) {
  return (
    <article
      className={cn("moving-faq-card", className)}
      id={`faq-${item.value}`}
    >
      <h3 className="moving-faq-card__question">{item.question}</h3>
      <p className="moving-faq-card__answer">{item.answer}</p>
      {item.readMoreHref ? (
        <Link href={item.readMoreHref} className="moving-faq-card__more">
          Read more
        </Link>
      ) : null}
    </article>
  )
}

export { EditorialFaqCard }
export type { EditorialFaqCardProps }
