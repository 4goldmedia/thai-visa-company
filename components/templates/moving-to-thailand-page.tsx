import { MovingToThailandJsonLd } from "@/components/seo/moving-to-thailand-json-ld"
import { movingPageSectionIds } from "@/lib/moving/section-ids"
import { renderMovingPageSections } from "@/lib/moving/sections/render"

function MovingToThailandPageTemplate() {
  return (
    <>
      <MovingToThailandJsonLd />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label="Moving to Thailand: relocation guide"
        className="moving-page flex flex-1 flex-col overflow-x-clip bg-background"
      >
        {renderMovingPageSections({ ids: movingPageSectionIds })}
      </main>
    </>
  )
}

export { MovingToThailandPageTemplate }
