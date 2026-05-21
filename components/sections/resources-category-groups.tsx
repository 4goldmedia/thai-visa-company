import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { ResourcesArticleGrid } from "@/components/sections/resources-article-grid"
import { resourcesIndexSectionIds } from "@/lib/resources/section-ids"
import { groupArticlesByCategory } from "@/lib/resources"
import { sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const groupTitleClass =
  "text-lg font-semibold tracking-tight text-foreground sm:text-xl"

const groupDescriptionClass =
  "mt-2 max-w-2xl text-[15px] leading-[1.7] text-pretty text-muted-foreground sm:text-base sm:leading-relaxed"

const placeholderClass = cn(
  "rounded-xl border border-dashed border-border/60 bg-muted/5 px-4 py-5",
  "text-[14px] leading-relaxed text-muted-foreground sm:py-6"
)

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
        <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
          {groups.map(({ category, articles }) => {
            const headingId = `resources-category-${category.id}`

            return (
              <SectionReveal key={category.id} className="flex flex-col">
                <header>
                  <h2 id={headingId} className={groupTitleClass}>
                    {category.label}
                  </h2>
                  {category.description ? (
                    <p className={groupDescriptionClass}>{category.description}</p>
                  ) : null}
                </header>

                <div className={sectionContentOffsetClass}>
                  {category.placeholder && articles.length === 0 ? (
                    <p className={placeholderClass} role="status">
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
