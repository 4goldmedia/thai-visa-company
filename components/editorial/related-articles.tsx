import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import type { ContentRelatedLink } from "@/lib/content/types"
import { cn } from "@/lib/utils"

type RelatedArticlesProps = {
  title?: string
  items: ReadonlyArray<ContentRelatedLink>
  /** Optional hero image paths keyed by href */
  images?: Record<string, string>
  className?: string
}

function RelatedArticles({
  title = "Related articles",
  items,
  images = {},
  className,
}: RelatedArticlesProps) {
  if (items.length === 0) return null

  return (
    <section className={cn("editorial-related", className)} aria-labelledby="related-articles-heading">
      <Container>
        <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
          Keep reading
        </p>
        <h2
          id="related-articles-heading"
          className="mt-2 text-[1.375rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.5rem]"
        >
          {title}
        </h2>
        <ul className="editorial-related__grid">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="editorial-related-card h-full">
                <div className="editorial-related-card__media relative overflow-hidden">
                  {images[item.href] ? (
                    <Image
                      src={images[item.href]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  ) : null}
                </div>
                <div className="editorial-related-card__body">
                  <p className="editorial-related-card__category">{item.category}</p>
                  <p className="editorial-related-card__title">{item.title}</p>
                  <p className="editorial-related-card__description">{item.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export { RelatedArticles }
