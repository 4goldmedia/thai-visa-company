#!/usr/bin/env node
/**
 * Validates article metadata and content:
 * - `tableOfContents[].id` matches `##` heading slugs in MDX
 * - Blog heroes and inline images do not reuse visa page gallery assets
 */
import { readFileSync, readdirSync, existsSync } from "node:fs"
import { join } from "node:path"
import GithubSlugger from "github-slugger"

const ROOT = process.cwd()
const ARTICLES_ROOT = join(ROOT, "content/articles")

/** Keep in sync with `visaPageImageSrcs` in lib/media/photography.ts */
const VISA_PAGE_IMAGE_SRCS = new Set([
  "/images/visas/dtv-remote-work.jpg",
  "/images/visas/thailand-elite-visa.webp",
  "/images/visas/thailand-business-visa-2.webp",
  "/images/visas/retirement.png",
  "/images/visas/thailand-education-visa.webp",
  "/images/visas/education.jpg",
  "/images/editorial/krabi-thailand-beachside.webp",
  "/images/visas/elite.jpg",
])

function listArticleDirs(collection) {
  const dir = join(ARTICLES_ROOT, collection)
  if (!existsSync(dir)) return []

  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(dir, entry.name))
}

function extractTocIds(metaSource) {
  const blockMatch = metaSource.match(
    /tableOfContents:\s*\[([\s\S]*?)\n\s*\],/,
  )
  if (!blockMatch) return []

  const ids = []
  const idPattern = /id:\s*["'`]([^"'`]+)["'`]/g
  let match = idPattern.exec(blockMatch[1])
  while (match) {
    ids.push(match[1])
    match = idPattern.exec(blockMatch[1])
  }
  return ids
}

function extractH2Slugs(mdxSource) {
  const slugger = new GithubSlugger()
  const slugs = []

  for (const line of mdxSource.split("\n")) {
    const match = line.match(/^##\s+(.+?)\s*$/)
    if (!match) continue
    slugs.push(slugger.slug(match[1]))
  }

  return slugs
}

function extractHeroImage(metaSource) {
  const match = metaSource.match(/heroImage:\s*["'`]([^"'`]+)["'`]/)
  return match?.[1]
}

function extractArticleImageSrcs(mdxSource) {
  const srcs = []
  const pattern = /<ArticleImage[\s\S]*?src=["'`]([^"'`]+)["'`]/g
  let match = pattern.exec(mdxSource)
  while (match) {
    srcs.push(match[1])
    match = pattern.exec(mdxSource)
  }
  return srcs
}

function findVisaPageImageViolations(collection, metaSource, mdxSource) {
  if (collection !== "blog") return []

  const violations = []
  const heroImage = extractHeroImage(metaSource)
  if (heroImage && VISA_PAGE_IMAGE_SRCS.has(heroImage)) {
    violations.push(`heroImage reuses visa page asset: ${heroImage}`)
  }

  for (const src of extractArticleImageSrcs(mdxSource)) {
    if (VISA_PAGE_IMAGE_SRCS.has(src)) {
      violations.push(`ArticleImage reuses visa page asset: ${src}`)
    }
  }

  return violations
}

function validateArticle(collection, articleDir) {
  const slug = articleDir.split("/").pop()
  const metaPath = join(articleDir, "meta.ts")
  const mdxPath = join(articleDir, "content.mdx")

  if (!existsSync(metaPath) || !existsSync(mdxPath)) {
    return { slug, skipped: true }
  }

  const metaSource = readFileSync(metaPath, "utf8")
  const mdxSource = readFileSync(mdxPath, "utf8")
  const tocIds = extractTocIds(metaSource)
  const headingSlugs = extractH2Slugs(mdxSource)

  const missingInMdx = tocIds.filter((id) => !headingSlugs.includes(id))
  const extraInMdx = headingSlugs.filter((slug) => !tocIds.includes(slug))
  const imageViolations = findVisaPageImageViolations(collection, metaSource, mdxSource)

  return {
    slug,
    collection,
    tocIds,
    headingSlugs,
    missingInMdx,
    extraInMdx,
    imageViolations,
    heroImage: extractHeroImage(metaSource),
    ok:
      missingInMdx.length === 0 &&
      extraInMdx.length === 0 &&
      imageViolations.length === 0,
  }
}

function findDuplicateBlogHeroes(results) {
  const blogHeroes = results
    .filter((result) => !result.skipped && result.collection === "blog" && result.heroImage)
    .map((result) => ({ slug: result.slug, heroImage: result.heroImage }))

  const byHero = new Map()
  for (const entry of blogHeroes) {
    const list = byHero.get(entry.heroImage) ?? []
    list.push(entry.slug)
    byHero.set(entry.heroImage, list)
  }

  const violations = []
  for (const [heroImage, slugs] of byHero.entries()) {
    if (slugs.length > 1) {
      violations.push(
        `duplicate blog heroImage ${heroImage} used by: ${slugs.join(", ")}`,
      )
    }
  }
  return violations
}

function main() {
  const collections = readdirSync(ARTICLES_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)

  const results = []
  for (const collection of collections) {
    for (const articleDir of listArticleDirs(collection)) {
      results.push(validateArticle(collection, articleDir))
    }
  }

  const duplicateHeroViolations = findDuplicateBlogHeroes(results)
  if (duplicateHeroViolations.length > 0) {
    console.error("\nDuplicate blog hero images:")
    for (const violation of duplicateHeroViolations) {
      console.error(`  ${violation}`)
    }
  }

  const failures = results.filter((result) => result.ok === false)
  const validated = results.filter((result) => !result.skipped)

  if (validated.length === 0) {
    console.log("No articles found to validate.")
    process.exit(0)
  }

  for (const result of validated) {
    if (result.ok) {
      console.log(`✓ ${result.collection}/${result.slug}`)
      continue
    }

    console.error(`✗ ${result.collection}/${result.slug}`)
    if (result.missingInMdx.length) {
      console.error(`  TOC ids missing from MDX ## headings: ${result.missingInMdx.join(", ")}`)
    }
    if (result.extraInMdx.length) {
      console.error(`  MDX ## headings missing from TOC: ${result.extraInMdx.join(", ")}`)
    }
    if (result.imageViolations?.length) {
      for (const violation of result.imageViolations) {
        console.error(`  ${violation}`)
      }
    }
  }

  if (failures.length > 0 || duplicateHeroViolations.length > 0) {
    if (failures.length > 0) {
      console.error(`\n${failures.length} article(s) failed validation.`)
    }
    process.exit(1)
  }

  console.log(`\n${validated.length} article(s) passed TOC validation.`)
}

main()
