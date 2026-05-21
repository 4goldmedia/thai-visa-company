import type { MetadataRoute } from "next"

import { getSiteUrl, isProductionDeployment } from "@/lib/seo"
import { robotsDisallowPaths } from "@/lib/site-routes"

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl()
  const sitemapUrl = new URL("/sitemap.xml", siteUrl).toString()

  if (!isProductionDeployment()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: sitemapUrl,
    }
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [...robotsDisallowPaths],
    },
    host: siteUrl.origin,
    sitemap: sitemapUrl,
  }
}
