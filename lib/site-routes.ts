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
    published: false,
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

  // Resources / guides
  {
    path: "/resources",
    group: "resource",
    changeFrequency: "weekly",
    priority: 0.9,
    published: true,
  },
  {
    path: "/resources/what-is-thailand-dtv-visa",
    group: "resource",
    changeFrequency: "monthly",
    priority: 0.7,
    published: false,
  },
  {
    path: "/resources/how-long-does-thai-visa-take",
    group: "resource",
    changeFrequency: "monthly",
    priority: 0.7,
    published: false,
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
    published: false,
  },
  {
    path: "/terms",
    group: "legal",
    changeFrequency: "yearly",
    priority: 0.3,
    published: false,
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
  const { getPublishedResourceArticlePaths } = await import("@/lib/content")
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

  const mdxPaths = await getPublishedResourceArticlePaths()
  for (const path of mdxPaths) {
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
