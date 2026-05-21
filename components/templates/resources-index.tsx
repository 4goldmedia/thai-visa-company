import { ResourcesCategoryGroups } from "@/components/sections/resources-category-groups"
import { ResourcesIndexHero } from "@/components/sections/resources-index-hero"
import { ResourcesToolbar } from "@/components/sections/resources-toolbar"
import { ResourcesIndexJsonLd } from "@/components/seo/resources-index-json-ld"
import { resourcesIndexContent } from "@/lib/resources"

function ResourcesIndexTemplate() {
  const { hero } = resourcesIndexContent

  return (
    <>
      <ResourcesIndexJsonLd />
      <main
      id="main-content"
      tabIndex={-1}
      aria-label="Thailand visa guides and resources"
      className="flex flex-1 flex-col overflow-x-clip bg-background"
    >
      <ResourcesIndexHero
        eyebrow={hero.eyebrow ?? "Resources"}
        title={hero.title}
        overview={hero.overview}
      />
      <ResourcesToolbar />
      <ResourcesCategoryGroups />
    </main>
    </>
  )
}

export { ResourcesIndexTemplate }
