import { Search } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { resourcesIndexSectionIds } from "@/lib/resources/section-ids"
import { getResourceCategories } from "@/lib/resources"
import { cn } from "@/lib/utils"

const filterChipClass = cn(
  "inline-flex min-h-9 items-center rounded-lg border px-3 text-[13px] font-medium sm:text-sm",
  "border-border/50 bg-muted/20 text-muted-foreground"
)

type ResourcesToolbarProps = {
  sectionId?: string
}

/**
 * Search and category filter placeholders — wire to client logic when ready.
 */
function ResourcesToolbar({
  sectionId = resourcesIndexSectionIds.toolbar,
}: ResourcesToolbarProps) {
  const categories = getResourceCategories()

  return (
    <Section
      id={sectionId}
      spacing="compact"
      aria-label="Find articles"
      className="border-b border-border/50 bg-muted/5"
    >
      <Container size="content">
        <div className="flex flex-col gap-5 sm:gap-6">
          <div className="max-w-xl">
            <label
              htmlFor="resources-search-placeholder"
              className="text-[13px] font-medium text-foreground sm:text-sm"
            >
              Search guides
            </label>
            <div className="relative mt-2">
              <Search
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground/70"
                aria-hidden
              />
              <input
                id="resources-search-placeholder"
                type="search"
                disabled
                placeholder="Search by topic or keyword"
                aria-describedby="resources-search-hint"
                className={cn(
                  "h-11 w-full rounded-lg border border-border/50 bg-background pl-10",
                  "text-[15px] text-foreground placeholder:text-muted-foreground/70",
                  "disabled:cursor-not-allowed disabled:opacity-70 sm:h-10 sm:text-sm"
                )}
              />
            </div>
            <p
              id="resources-search-hint"
              className="mt-2 text-[12px] leading-snug text-muted-foreground sm:text-[13px]"
            >
              Search and filtering will be available in a future update. Browse
              by category below for now.
            </p>
          </div>

          <div role="group" aria-labelledby="resources-filter-label">
            <p
              id="resources-filter-label"
              className="text-[13px] font-medium text-foreground sm:text-sm"
            >
              Browse by category
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-2 p-0">
              <li>
                <span
                  className={cn(
                    filterChipClass,
                    "border-foreground/20 bg-foreground/5 text-foreground"
                  )}
                  aria-current="true"
                >
                  All
                </span>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <span
                    className={filterChipClass}
                    aria-disabled="true"
                    title="Category filter coming soon"
                  >
                    {category.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export { ResourcesToolbar }
