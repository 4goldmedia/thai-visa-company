import { GuidePostCard } from "@/components/cards/guide-post-card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { getGuidePostsBySlugs, popularGuideSlugs } from "@/lib/guides"
import { guidesIndexSectionIds } from "@/lib/guides/section-ids"

function GuidesPopular() {
  const articles = getGuidePostsBySlugs([...popularGuideSlugs])
  if (articles.length === 0) return null

  return (
    <Section
      id={guidesIndexSectionIds.popular}
      spacing="default"
      aria-labelledby={`${guidesIndexSectionIds.popular}-heading`}
      className="border-y border-border/40 bg-muted/5"
    >
      <Container>
        <h2
          id={`${guidesIndexSectionIds.popular}-heading`}
          className="text-[1.125rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.25rem]"
        >
          Popular visa guides
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {articles.map((article) => (
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
      </Container>
    </Section>
  )
}

export { GuidesPopular }
