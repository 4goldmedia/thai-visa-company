import type { MetadataRoute } from "next"

import { resolveCanonicalUrl } from "@/lib/seo"

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export type RouteChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>

export type SiteRouteGroup =
  | "home"
  | "visa"
  | "resource"
  | "marketing"
  | "legal"

export type SiteRoute = {
  path: string
  group: SiteRouteGroup
  changeFrequency: RouteChangeFrequency
  priority: number
  /**
   * Include in `/sitemap.xml` only when the App Router page exists.
   * Set to `true` when you ship the route.
   */
  published: boolean
  /** Optional fixed last-modified; defaults to build time in the sitemap */
  lastModified?: string | Date
}

// -----------------------------------------------------------------------------
// Route registry — single source of truth for sitemap & crawl policy
// -----------------------------------------------------------------------------

/**
 * Site route catalog aligned with navigation and planned App Router pages.
 * Keep paths in sync with `lib/navigation.ts` and section links.
 */
export const siteRoutes = [
  // Home
  {
    path: "/",
    group: "home",
    changeFrequency: "weekly",
    priority: 1,
    published: true,
  },

  // Visa services
  {
    path: "/visas",
    group: "visa",
    changeFrequency: "weekly",
    priority: 0.9,
    published: true,
  },
  {
    path: "/visas/retirement",
    group: "visa",
    changeFrequency: "monthly",
    priority: 0.8,
    published: true,
  },
  {
    path: "/visas/dtv",
    group: "visa",
    changeFrequency: "monthly",
    priority: 0.8,
    published: true,
  },
  {
    path: "/visas/elite",
    group: "visa",
    changeFrequency: "monthly",
    priority: 0.8,
    published: true,
  },
  {
    path: "/visas/business",
    group: "visa",
    changeFrequency: "monthly",
    priority: 0.8,
    published: true,
  },
  {
    path: "/visas/education",
    group: "visa",
    changeFrequency: "monthly",
    priority: 0.8,
    published: true,
  },
  {
    path: "/visas/marriage",
    group: "visa",
    changeFrequency: "monthly",
    priority: 0.7,
    published: false,
  },
  {
    path: "/visas/tourist",
    group: "visa",
    changeFrequency: "monthly",
    priority: 0.7,
    published: false,
  },
  {
    path: "/visas/ltr",
    group: "visa",
    changeFrequency: "monthly",
    priority: 0.7,
    published: false,
  },

  // Guides — evergreen authority
  {
    path: "/guides",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.9,
    published: true,
  },
  {
    path: "/guides/topic/dtv",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.85,
    published: true,
  },
  {
    path: "/guides/topic/retirement",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.85,
    published: true,
  },
  {
    path: "/guides/topic/business",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.85,
    published: true,
  },
  {
    path: "/guides/topic/education",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.85,
    published: true,
  },
  {
    path: "/guides/topic/thailand-immigration",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.85,
    published: true,
  },
  {
    path: "/guides/category/visa-requirements",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.8,
    published: true,
  },
  {
    path: "/guides/how-to-get-thailand-retirement-visa",
    group: "resource",
    changeFrequency: "monthly",
    priority: 0.7,
    published: true,
  },

  // Blog — freshness publication
  {
    path: "/blog",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.85,
    published: true,
  },
  {
    path: "/blog/category/immigration-news",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.75,
    published: true,
  },
  {
    path: "/blog/category/visa-rule-changes",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.75,
    published: true,
  },
  {
    path: "/blog/category/embassy-updates",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.75,
    published: true,
  },
  {
    path: "/blog/category/policy-changes",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.75,
    published: true,
  },
  {
    path: "/blog/category/thailand-living",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.75,
    published: true,
  },
  {
    path: "/blog/category/comparisons",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.75,
    published: true,
  },

  // Marketing
  {
    path: "/reviews",
    group: "marketing",
    changeFrequency: "weekly",
    priority: 0.8,
    published: false,
  },
  {
    path: "/consultation",
    group: "marketing",
    changeFrequency: "monthly",
    priority: 0.85,
    published: true,
  },
  {
    path: "/contact",
    group: "marketing",
    changeFrequency: "monthly",
    priority: 0.8,
    published: true,
  },

  // Legal
  {
    path: "/privacy",
    group: "legal",
    changeFrequency: "yearly",
    priority: 0.3,
    published: true,
  },
  {
    path: "/terms",
    group: "legal",
    changeFrequency: "yearly",
    priority: 0.3,
    published: true,
  },
] as const satisfies readonly SiteRoute[]

export type SiteRoutePath = (typeof siteRoutes)[number]["path"]

/** Paths blocked in production `robots.txt` (framework & API internals) */
export const robotsDisallowPaths = ["/api/", "/_next/"] as const

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

export function getPublishedRoutes(): SiteRoute[] {
  return siteRoutes.filter((route) => route.published)
}

export function getRouteByPath(path: string): SiteRoute | undefined {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return siteRoutes.find((route) => route.path === normalized)
}

/** Build sitemap entries for published static routes plus published MDX articles */
export async function buildSitemap(): Promise<MetadataRoute.Sitemap> {
  const { getPublishedBlogArticlePaths, getPublishedGuideArticlePaths } =
    await import("@/lib/content")
  const { getPublishedVisaPages } = await import("@/lib/visas/publish")
  const builtAt = new Date()
  const entries = new Map<string, MetadataRoute.Sitemap[number]>()

  for (const route of getPublishedRoutes()) {
    entries.set(route.path, {
      url: resolveCanonicalUrl(route.path).toString(),
      lastModified: route.lastModified ?? builtAt,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })
  }

  for (const visa of getPublishedVisaPages()) {
    entries.set(visa.path, {
      url: resolveCanonicalUrl(visa.path).toString(),
      lastModified: visa.updatedAt ? new Date(visa.updatedAt) : builtAt,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  }

  const [guidePaths, blogPaths] = await Promise.all([
    getPublishedGuideArticlePaths(),
    getPublishedBlogArticlePaths(),
  ])
  for (const path of [...guidePaths, ...blogPaths]) {
    if (entries.has(path)) continue
    entries.set(path, {
      url: resolveCanonicalUrl(path).toString(),
      lastModified: builtAt,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  }

  return [...entries.values()]
}
