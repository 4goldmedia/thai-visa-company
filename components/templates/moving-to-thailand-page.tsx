import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { MovingToThailandJsonLd } from "@/components/seo/moving-to-thailand-json-ld"
import { getMovingPageBreadcrumbs } from "@/lib/moving/routing/metadata"
import { movingPageSectionIds } from "@/lib/moving/section-ids"
import { renderMovingPageSections } from "@/lib/moving/sections/render"

function MovingToThailandPageTemplate() {
  const breadcrumbs = getMovingPageBreadcrumbs()

  return (
    <>
      <MovingToThailandJsonLd />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label="Moving to Thailand: relocation guide"
        className="moving-page flex flex-1 flex-col overflow-x-clip bg-background"
      >
        <PageBreadcrumbs items={breadcrumbs} />
        {renderMovingPageSections({ ids: movingPageSectionIds })}
      </main>
    </>
  )
}

export { MovingToThailandPageTemplate }
