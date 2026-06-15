import { GuidesCategoryGroups } from "@/components/sections/guides-category-groups"
import { GuidesFeatured } from "@/components/sections/guides-featured"
import { GuidesIndexCta } from "@/components/sections/guides-index-cta"
import { GuidesIndexHero } from "@/components/sections/guides-index-hero"
import { GuidesPopular } from "@/components/sections/guides-popular"
import { GuidesSearchedTopics } from "@/components/sections/guides-searched-topics"
import { GuidesVisaTypeLinks } from "@/components/sections/guides-visa-type-links"
import { GuidesIndexJsonLd } from "@/components/seo/guides-index-json-ld"
import { getFeaturedGuidePost, getGuideIndexArticlesSync } from "@/lib/guides"
import { guidesIndexContent } from "@/lib/guides/content/index"

function GuidesIndexTemplate() {
  const articles = getGuideIndexArticlesSync()
  const featured = getFeaturedGuidePost(articles)
  const { hero } = guidesIndexContent

  return (
    <>
      <GuidesIndexJsonLd />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label="Thailand visa guides"
        className="flex flex-1 flex-col overflow-x-clip bg-background"
      >
        <GuidesIndexHero eyebrow={hero.eyebrow} title={hero.title} overview={hero.overview} />
        {featured ? <GuidesFeatured article={featured} /> : null}
        <GuidesVisaTypeLinks />
        <GuidesPopular />
        <GuidesCategoryGroups />
        <GuidesSearchedTopics />
        <GuidesIndexCta />
      </main>
    </>
  )
}

export { GuidesIndexTemplate }
