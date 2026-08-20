/**
 * Canonical internal URL resolution  -  mirrors `next.config.ts` redirects.
 * Use at link output boundaries so crawlers never follow redirecting hrefs.
 */

const EXACT_INTERNAL_REDIRECTS: Readonly<Record<string, string>> = {
  "/contact": "/consultation",
  "/blog/how-to-get-thailand-retirement-visa": "/visas/retirement",
  "/resources": "/blog",
  "/guides": "/blog",
  "/blog/category/practical-guides": "/blog",
  "/blog/category/immigration-news": "/blog",
  "/blog/category/visa-rule-changes": "/blog/cluster/dtv",
  "/blog/category/embassy-updates": "/blog",
  "/blog/category/policy-changes": "/blog",
  "/blog/category/thailand-living": "/blog/cluster/living-in-thailand",
  "/blog/category/comparisons": "/blog",
  "/blog/category/immigration-updates": "/blog",
  "/blog/category/visa-updates": "/blog",
  "/blog/category/visa-comparisons": "/blog",
  "/blog/category/commentary": "/blog",
  "/blog/category/expert-insights": "/blog",
  "/blog/category/visa-process": "/blog/cluster/immigration-procedures",
  "/blog/category/living-in-thailand": "/blog/cluster/living-in-thailand",
  "/guides/topic/thailand-immigration": "/blog/cluster/living-in-thailand",
  "/guides/category/thailand-living": "/blog/cluster/living-in-thailand",
  "/guides/category/visa-requirements": "/blog/cluster/retirement",
  "/guides/category/visa-comparisons": "/blog",
}

function splitHref(href: string): { pathname: string; suffix: string } {
  const hashIndex = href.indexOf("#")
  const queryIndex = href.indexOf("?")

  let pathname = href
  let suffix = ""

  const cutIndex =
    hashIndex >= 0 && queryIndex >= 0
      ? Math.min(hashIndex, queryIndex)
      : hashIndex >= 0
        ? hashIndex
        : queryIndex >= 0
          ? queryIndex
          : href.length

  if (cutIndex < href.length) {
    pathname = href.slice(0, cutIndex)
    suffix = href.slice(cutIndex)
  }

  return { pathname, suffix }
}

function normalizePathname(pathname: string): string {
  if (!pathname.startsWith("/")) return pathname
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname
}

function resolvePathname(pathname: string): string {
  const normalized = normalizePathname(pathname)
  const exact = EXACT_INTERNAL_REDIRECTS[normalized]
  if (exact) return exact

  if (normalized.startsWith("/resources/")) {
    return `/blog/${normalized.slice("/resources/".length)}`
  }

  if (normalized.startsWith("/guides/topic/")) {
    return `/blog/cluster/${normalized.slice("/guides/topic/".length)}`
  }

  if (normalized.startsWith("/guides/category/")) {
    const category = normalized.slice("/guides/category/".length)
    if (category === "thailand-living") return "/blog/cluster/living-in-thailand"
    if (category === "visa-requirements") return "/blog/cluster/retirement"
    if (category === "visa-comparisons") return "/blog"
    return "/blog"
  }

  if (normalized.startsWith("/guides/")) {
    return `/blog/${normalized.slice("/guides/".length)}`
  }

  if (normalized.startsWith("/blog/category/")) {
    return "/blog"
  }

  return normalized
}

/** Resolve legacy internal paths to their final canonical destination. */
export function resolveInternalHref(href: string): string {
  if (!href.startsWith("/")) return href

  const { pathname, suffix } = splitHref(href)
  const resolved = resolvePathname(pathname)
  return resolved === pathname ? href : `${resolved}${suffix}`
}

/** True when `href` is a redirect source rather than a canonical destination. */
export function isRedirectingInternalHref(href: string): boolean {
  if (!href.startsWith("/")) return false
  const { pathname } = splitHref(href)
  return resolvePathname(pathname) !== normalizePathname(pathname)
}
