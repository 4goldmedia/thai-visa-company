#!/usr/bin/env node
/**
 * Validates blog `relatedSlugs` and visa hub `relatedArticleSlugs` against the
 * frozen editorial knowledge graph in lib/content/editorial-knowledge-graph.ts
 */
import { readFileSync, readdirSync, existsSync } from "node:fs"
import { join } from "node:path"

const ROOT = process.cwd()
const GRAPH_FILE = join(ROOT, "lib/content/editorial-knowledge-graph.ts")
const BLOG_ROOT = join(ROOT, "content/articles/blog")
const VISA_CONTENT = join(ROOT, "lib/visas/content")

function parseFrozenRelatedSlugs(source) {
  const match = source.match(
    /export const frozenRelatedSlugs[\s\S]*?= (\{[\s\S]*?\n\})/,
  )
  if (!match) throw new Error("Could not parse frozenRelatedSlugs from graph file")

  const graph = {}
  const entryPattern =
    /"([^"]+)":\s*\[([\s\S]*?)\]/g
  let entry = entryPattern.exec(match[1])
  while (entry) {
    const slug = entry[1]
    const slugs = [...entry[2].matchAll(/"([^"]+)"/g)].map((m) => m[1])
    graph[slug] = slugs
    entry = entryPattern.exec(match[1])
  }
  return graph
}

function parseHubPrimaryArticles(source) {
  const match = source.match(
    /export const hubPrimaryArticleSlugs[\s\S]*?= (\{[\s\S]*?\n\})/,
  )
  if (!match) throw new Error("Could not parse hubPrimaryArticleSlugs from graph file")

  const hubs = {}
  const hubPattern = /(\w+):\s*\[([\s\S]*?)\]/g
  let entry = hubPattern.exec(match[1])
  while (entry) {
    const hub = entry[1]
    const slugs = [...entry[2].matchAll(/"([^"]+)"/g)].map((m) => m[1])
    hubs[hub] = slugs
    entry = hubPattern.exec(match[1])
  }
  return hubs
}

function extractStringArray(source, fieldName) {
  const match = source.match(
    new RegExp(`${fieldName}:\\s*\\[([\\s\\S]*?)\\]`),
  )
  if (!match) return []

  return [...match[1].matchAll(/"([^"]+)"/g)].map((m) => m[1])
}

function sortedEqual(a, b) {
  if (a.length !== b.length) return false
  const sa = [...a].sort()
  const sb = [...b].sort()
  return sa.every((value, index) => value === sb[index])
}

function main() {
  const graphSource = readFileSync(GRAPH_FILE, "utf8")
  const frozenRelatedSlugs = parseFrozenRelatedSlugs(graphSource)
  const hubPrimaryArticles = parseHubPrimaryArticles(graphSource)
  const errors = []

  for (const slugDir of readdirSync(BLOG_ROOT, { withFileTypes: true })) {
    if (!slugDir.isDirectory()) continue

    const slug = slugDir.name
    const metaPath = join(BLOG_ROOT, slug, "meta.ts")
    if (!existsSync(metaPath)) continue

    const metaSource = readFileSync(metaPath, "utf8")
    const actual = extractStringArray(metaSource, "relatedSlugs")
    const expected = frozenRelatedSlugs[slug]

    if (!expected) {
      if (actual.length > 0) {
        errors.push(`${slug}: relatedSlugs set but slug missing from frozen graph`)
      }
      continue
    }

    if (!sortedEqual(actual, expected)) {
      errors.push(
        `${slug}: relatedSlugs mismatch\n  expected: ${JSON.stringify(expected)}\n  actual:   ${JSON.stringify(actual)}`,
      )
    }
  }

  for (const file of readdirSync(VISA_CONTENT)) {
    if (!file.endsWith(".ts")) continue

    const hubSlug = file.replace(".ts", "")
    if (!(hubSlug in hubPrimaryArticles)) continue

    const source = readFileSync(join(VISA_CONTENT, file), "utf8")
    const actual = extractStringArray(source, "relatedArticleSlugs")
    const primary = hubPrimaryArticles[hubSlug] ?? []
    const expected = ["best-visa-for-living-in-thailand", ...primary]

    if (!sortedEqual(actual, expected)) {
      errors.push(
        `visas/${hubSlug}: relatedArticleSlugs mismatch\n  expected: ${JSON.stringify(expected)}\n  actual:   ${JSON.stringify(actual)}`,
      )
    }
  }

  if (errors.length > 0) {
    console.error("Editorial graph validation failed:\n")
    for (const error of errors) console.error(`✗ ${error}\n`)
    process.exit(1)
  }

  const articleCount = Object.keys(frozenRelatedSlugs).length
  console.log(`✓ Editorial knowledge graph validated (${articleCount} blog articles, 5 visa hubs).`)
}

main()
