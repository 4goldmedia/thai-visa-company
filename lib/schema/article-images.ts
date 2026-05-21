import { getSiteUrl } from "@/lib/seo"

const DEFAULT_OG_IMAGE_PATH = process.env.NEXT_PUBLIC_OG_IMAGE_PATH

/**
 * Default featured image path pattern for resource articles.
 * Replace file at `public/images/articles/<slug>.jpg` when assets are ready.
 */
export function getArticleFeaturedImagePath(slug: string): string {
  return `/images/articles/${slug}.jpg`
}

function resolveImageUrl(imagePath: string): string {
  return imagePath.startsWith("http")
    ? imagePath
    : new URL(imagePath, getSiteUrl()).toString()
}

export type ResolveArticleFeaturedImageInput = {
  slug: string
  /** Explicit path from article meta, e.g. `/images/articles/my-slug.jpg` */
  featuredImage?: string
}

/**
 * Resolves featured image URL for Article JSON-LD.
 * Falls back: meta path → per-slug placeholder → site default OG image.
 */
export function resolveArticleFeaturedImageUrl(
  input: ResolveArticleFeaturedImageInput,
): string | undefined {
  if (input.featuredImage) {
    return resolveImageUrl(input.featuredImage)
  }

  const placeholderPath = getArticleFeaturedImagePath(input.slug)
  if (placeholderPath) {
    return resolveImageUrl(placeholderPath)
  }

  if (DEFAULT_OG_IMAGE_PATH) {
    return resolveImageUrl(DEFAULT_OG_IMAGE_PATH)
  }

  return undefined
}

export function buildArticleImageObject(imageUrl: string): {
  "@type": "ImageObject"
  url: string
} {
  return {
    "@type": "ImageObject",
    url: imageUrl,
  }
}
