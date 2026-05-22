import type { Metadata } from "next"

/** Page title — strings use the root template; `absolute` bypasses it */
export type PageTitle = string | { absolute: string }

/** Shared input for marketing and dynamic pages */
export type PageMetadataInput = {
  title: PageTitle
  /** Defaults to `siteMetadata.defaultDescription` from `lib/site/config` */
  description?: string
  /** App Router path for canonical + Open Graph URL */
  path: string
  keywords?: ReadonlyArray<string>
  noIndex?: boolean
  image?: string
}

export type VisaPageMetadataInput = {
  path: string
  seo: {
    title: string
    description: string
    keywords?: ReadonlyArray<string>
  }
  image?: string
  noIndex?: boolean
}

export type ArticlePageMetadataInput = {
  path: string
  seo: {
    title: string
    description: string
    keywords?: ReadonlyArray<string>
    ogTitle?: string
    ogDescription?: string
    noIndex?: boolean
  }
  publishedAt: string
  updatedAt?: string
  tags?: ReadonlyArray<string>
  image?: string
}

export type SocialMetadataContext = {
  title: string
  description: string
  path: string
  image?: string
}

export type OpenGraphBuildOptions = SocialMetadataContext & {
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
}

export type RobotsOptions = {
  noIndex?: boolean
}
