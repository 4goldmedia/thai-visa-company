#!/usr/bin/env node
/**
 * Fails the build when internal hrefs still point at redirect sources.
 * Mirrors lib/site/internal-links.ts and next.config.ts redirects.
 */
import { readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"

const ROOT = process.cwd()

const EXACT = {
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

function resolvePath(pathname) {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname
  if (EXACT[normalized]) return EXACT[normalized]
  if (normalized.startsWith("/resources/")) return `/blog/${normalized.slice(11)}`
  if (normalized.startsWith("/guides/topic/")) return `/blog/cluster/${normalized.slice(14)}`
  if (normalized.startsWith("/guides/category/")) {
    const category = normalized.slice(18)
    if (category === "thailand-living") return "/blog/cluster/living-in-thailand"
    if (category === "visa-requirements") return "/blog/cluster/retirement"
    return "/blog"
  }
  if (normalized.startsWith("/guides/")) return `/blog/${normalized.slice(8)}`
  if (normalized.startsWith("/blog/category/")) return "/blog"
  return normalized
}

function isRedirecting(pathname) {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname
  return resolvePath(normalized) !== normalized
}

const HREF_PATTERNS = [
  /href:\s*"(\/[^"]+)"/g,
  /\]\((\/[^)]+)\)/g,
  /href=\{?"(\/[^"']+)"/g,
]

const SKIP_FILES = new Set(["next.config.ts", "lib/site/internal-links.ts"])

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (/\.(ts|tsx|mdx|mjs)$/.test(entry.name)) files.push(full)
  }
  return files
}

const errors = []

for (const file of walk(ROOT)) {
  const rel = file.slice(ROOT.length + 1)
  if (SKIP_FILES.has(rel)) continue
  if (rel.startsWith("scripts/validate-internal-links.mjs")) continue

  const text = readFileSync(file, "utf8")
  for (const pattern of HREF_PATTERNS) {
    pattern.lastIndex = 0
    let match = pattern.exec(text)
    while (match) {
      const href = match[1].split("#")[0].split("?")[0]
      if (href.startsWith("/") && isRedirecting(href)) {
        errors.push(`${rel}: redirecting internal href "${href}" → ${resolvePath(href)}`)
      }
      match = pattern.exec(text)
    }
  }
}

if (errors.length > 0) {
  console.error("Internal link validation failed:\n")
  for (const error of errors) console.error(`✗ ${error}`)
  process.exit(1)
}

console.log("✓ Internal links resolve to canonical destinations (no redirecting hrefs).")
