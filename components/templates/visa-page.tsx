import { PageBreadcrumbs } from "@/components/navigation/page-breadcrumbs"
import { VisaPageJsonLd } from "@/components/seo/visa-page-json-ld"
import type { ResolvedVisaPageContext } from "@/lib/visas/routing"
import { getVisaPageRouteBreadcrumbs } from "@/lib/visas/routing"
import { getVisaSectionIds } from "@/lib/visas/section-ids"
import { renderVisaPageSections } from "@/lib/visas/sections/render"
import { visaPageClass } from "@/lib/visa-editorial-styles"

type VisaPageTemplateProps = {
  context: ResolvedVisaPageContext
}

/**
 * Reusable Thailand visa page layout — section order from `visa.layout`
 * or `DEFAULT_VISA_PAGE_LAYOUT`. Content from `lib/visas/content/*`.
 */
function VisaPageTemplate({ context }: VisaPageTemplateProps) {
  const { visa, breadcrumbs } = context
  const ids = getVisaSectionIds(visa.slug)
  const crumbs =
    breadcrumbs.length > 0
      ? breadcrumbs
      : getVisaPageRouteBreadcrumbs(visa)

  return (
    <>
      <VisaPageJsonLd visa={visa} />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label={`${visa.hero.title} — Thailand visa information`}
        className={`${visaPageClass} flex flex-1 flex-col overflow-x-clip bg-background`}
      >
        <PageBreadcrumbs items={crumbs} />
        {renderVisaPageSections({ context, ids })}
      </main>
    </>
  )
}

export { VisaPageTemplate }
