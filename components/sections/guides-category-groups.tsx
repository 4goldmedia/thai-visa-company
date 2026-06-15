import Link from "next/link"

import { GuidePostCard } from "@/components/cards/guide-post-card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { groupGuidePostsByCategoryId } from "@/lib/guides"
import { guideCategoryPath } from "@/lib/guides/types"
import { guidesIndexSectionIds } from "@/lib/guides/section-ids"

function GuidesCategoryGroups() {
  const groups = groupGuidePostsByCategoryId().filter((group) => group.articles.length > 0)
  if (groups.length === 0) return null

  return (
    <Section
      id={guidesIndexSectionIds.categories}
      spacing="default"
      aria-labelledby={`${guidesIndexSectionIds.categories}-heading`}
    >
      <Container>
        <h2
          id={`${guidesIndexSectionIds.categories}-heading`}
          className="text-[1.125rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.25rem]"
        >
          Browse by category
        </h2>
        <div className="mt-8 space-y-10">
          {groups.map(({ category, articles }) => (
            <section key={category.id} aria-labelledby={`guide-cat-${category.id}`}>
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border/35 pb-4">
                <div>
                  <h3
                    id={`guide-cat-${category.id}`}
                    className="text-base font-semibold tracking-[-0.02em] text-foreground"
                  >
                    {category.label}
                  </h3>
                  <p className="mt-1 max-w-2xl text-[14px] leading-[1.65] text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <Link
                  href={guideCategoryPath(category.id)}
                  className="text-sm font-medium text-foreground underline decoration-border underline-offset-4"
                >
                  View all
                </Link>
              </div>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {articles.slice(0, 2).map((article) => (
                  <li key={article.slug}>
                    <GuidePostCard
                      title={article.title}
                      description={article.description}
                      category={article.category}
                      href={article.path}
                      status={article.status}
                      readingTime={article.readingTime}
                      publishedAt={article.publishedAt}
                      updatedAt={article.updatedAt}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export { GuidesCategoryGroups }
