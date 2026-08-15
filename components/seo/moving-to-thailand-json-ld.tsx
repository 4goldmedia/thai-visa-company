import {
  buildBreadcrumbList,
  buildFaqPage,
  buildPageSchemaGraph,
  buildWebPage,
  JsonLdScript,
  normalizeFaqItems,
} from "@/lib/seo/schema"
import {
  getMovingPageVisibleFaqItems,
  movingPageContent,
  movingPagePath,
} from "@/lib/moving/content"

function MovingToThailandJsonLd() {
  const { seo, faq } = movingPageContent
  const faqItems = normalizeFaqItems(getMovingPageVisibleFaqItems())

  const graph = buildPageSchemaGraph({
    nodes: [
      buildWebPage({
        path: movingPagePath,
        name: seo.title,
        description: seo.description,
      }),
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Moving to Thailand", path: movingPagePath },
      ]),
      buildFaqPage(faqItems, {
        name: faq.title,
        description: faq.description,
        path: movingPagePath,
      }),
    ],
  })

  return <JsonLdScript data={graph} id="schema-moving-to-thailand" />
}

export { MovingToThailandJsonLd }
