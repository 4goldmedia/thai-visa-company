import {
  articleOgImageContentType,
  articleOgImageSize,
  renderArticleOgImage,
} from "@/lib/content/routing/opengraph"
import { resolveBlogArticleRoute } from "@/lib/content/routing/blog"

export const size = articleOgImageSize
export const contentType = articleOgImageContentType

type OgImageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogArticleOgImage({ params }: OgImageProps) {
  const { slug } = await params
  const route = await resolveBlogArticleRoute(slug)

  if (!route) {
    return renderArticleOgImage({ title: "Thailand Visa Blog" })
  }

  return renderArticleOgImage({
    title: route.page.title,
    eyebrow: route.page.eyebrow,
    heroImagePath: route.page.heroImage,
  })
}
