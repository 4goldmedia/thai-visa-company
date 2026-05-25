import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { ResourcesArticleGrid } from "@/components/sections/resources-article-grid"
import { resourcesIndexSectionIds } from "@/lib/resources/section-ids"
import { groupArticlesByCategory } from "@/lib/resources"
import { sectionTitleLgClass } from "@/lib/design/typography"
import { cardPlaceholderClass, sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const groupDescriptionClass =
  "mt-2 max-w-2xl text-[length:var(--text-body)] leading-[var(--leading-body)] text-pretty text-muted-foreground sm:text-[length:var(--text-body-md)]"

type ResourcesCategoryGroupsProps = {
  sectionId?: string
}

function ResourcesCategoryGroups({
  sectionId = resourcesIndexSectionIds.articles,
}: ResourcesCategoryGroupsProps) {
  const groups = groupArticlesByCategory()

  return (
    <Section id={sectionId} spacing="default" aria-label="Article collections">
      <Container>
        <div className="flex flex-col gap-14 sm:gap-16 md:gap-20">
          {groups.map(({ category, articles }) => {
            const headingId = `resources-category-${category.id}`

            return (
              <SectionReveal key={category.id} className="flex flex-col">
                <header>
                  <h2 id={headingId} className={sectionTitleLgClass}>
                    {category.label}
                  </h2>
                  {category.description ? (
                    <p className={groupDescriptionClass}>{category.description}</p>
                  ) : null}
                </header>

                <div className={sectionContentOffsetClass}>
                  {category.placeholder && articles.length === 0 ? (
                    <p className={cardPlaceholderClass} role="status">
                      Comparison guides are in progress. Message us on LINE if
                      you want help choosing between visa types today.
                    </p>
                  ) : (
                    <ResourcesArticleGrid
                      articles={articles}
                      listAriaLabel={`${category.label} articles`}
                    />
                  )}
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export { ResourcesCategoryGroups }
