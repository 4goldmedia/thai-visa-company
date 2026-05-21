import type { MetadataRoute } from "next"

import { buildSitemap } from "@/lib/site-routes"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return buildSitemap()
}
