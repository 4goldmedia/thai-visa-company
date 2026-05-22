# Content collections architecture

Unified, type-safe content for resource articles and future visa guides. All articles live under `content/articles/`.

## Directory layout

```
content/articles/
  resources/                    # Collection: SEO resource articles → /resources/[slug]
    <slug>/
      meta.ts                   # Typed frontmatter (`export const meta`)
      content.mdx               # Prose body
  visa-guides/                  # Collection: future long-form guides → /visas/guides/[slug]
    <slug>/
      meta.ts
      content.mdx
```

## Collections

| ID | Route prefix | App route (future) |
|----|--------------|-------------------|
| `resources` | `/resources` | `app/resources/[slug]` |
| `visa-guides` | `/visas/guides` | `app/visas/guides/[slug]` (not wired yet) |

Config: `lib/content/collections.ts`

## Metadata model

Every article `meta.ts` extends **`ContentArticleBase`**:

| Field | Purpose |
|-------|---------|
| `collection` | `resources` \| `visa-guides` |
| `slug` | URL segment |
| `title` | Page H1 and index title |
| `description` | Card copy + base SEO description |
| `publishedAt` | ISO date (`YYYY-MM-DD`) |
| `updatedAt` | Optional ISO date |
| `category` | Display category (e.g. Visa guide) |
| `tags` | Semantic tags for filtering / future taxonomy |
| `published` | `false` → 404, omitted from sitemap |
| `seo` | `title`, `description`, `keywords`, optional OG overrides |

Collection-specific fields (FAQ, related, CTA, TOC) live on **`ResourceArticleMeta`** or **`VisaGuideArticleMeta`**.

Define helpers:

- `defineResourceArticle()` — `lib/content/collections/resources.ts`
- `defineVisaGuideArticle()` — `lib/content/collections/visa-guides.ts`

## Registry

`lib/content/registry.ts` is the **only** place to register article loaders (`loadMeta` + `loadModule` per key).

**Add a resource article**

1. Create `content/articles/resources/<slug>/meta.ts` + `content.mdx`
2. Add `"resources/<slug>"` to `articleEntries` in `lib/content/registry.ts`
3. Add the same key to `articleEntriesSync` in `lib/content/articles.ts` (for static index builds)
4. Set `published: true` when shipping

No manual index lists — the resources hub uses `getResourceIndexArticlesSync()` (registry + planned stubs).

## Article collection API

`lib/content/articles.ts` — centralized retrieval (no hardcoded article lists):

| Function | Use |
|----------|-----|
| `getArticleSummariesForCollection(collection)` | All summaries, sorted by date |
| `getPublishedArticleSummaries(collection)` | Published only |
| `groupArticlesByCategory` / `groupArticlesByTag` | Topical clustering |
| `resolveRelatedArticles` in `lib/content/related.ts` | Semantic article links (manual → slugs → tag/topic score) |
| `loadArticleModuleBySlug(collection, slug)` | MDX + meta |
| `loadResourceArticleModule(slug)` | Resources shortcut |
| `getResourceIndexArticles()` / `getResourceIndexArticlesSync()` | Index cards |
| `getPublishedArticlePaths(collection)` | Sitemap merge |
| `getPublishedArticleSlugs(collection)` | `generateStaticParams` |

Registry primitives: `lib/content/registry.ts`  
Public entry: `@/lib/content` (re-exports `@/lib/content/articles`)

## Runtime API (resources shortcuts)

| Function | Use |
|----------|-----|
| `loadResourceContentArticle(slug)` | Alias → `loadResourceArticleModule` |
| `getPublishedResourceArticleSlugs()` | `generateStaticParams` |
| `getPublishedResourceArticlePaths()` | Sitemap merge |
| `toResourceArticlePageProps(meta)` | Article layout / JSON-LD |
| `resourceMetaToIndexCard(meta)` | Resources index grid |

## Resources dynamic routing (`/resources/[slug]`)

App Router page: `app/resources/[slug]/page.tsx` — thin; all logic in `lib/content/routing/`.

| Module | Role |
|--------|------|
| `lib/content/routing/resources.ts` | `resolveResourceArticlePageContext(slug)` — route + metadata + breadcrumbs + related |
| `lib/content/routing/seo.ts` | `buildResourceArticleMetadata`, `buildResourceArticleRouteSchemaGraph` |
| `lib/content/schema/article.ts` | Article → `ArticleInput`, schema graph composer |
| `lib/content/registry.ts` | MDX loaders (single registration point) |
| `components/templates/resource-article-page.tsx` | Layout + MDX view |

Route config: `dynamicParams = false` (404 unknown slugs).

`resolveResourceArticlePageContext` is cached per request so `generateMetadata` and the page share one MDX load.

## SEO (centralized)

| Concern | Source |
|---------|--------|
| Canonical + OG `article` | `createArticlePageMetadata()` via `buildResourceArticleMetadata` |
| Site URL / OG defaults | `lib/site/config` |
| Article JSON-LD | `buildResourceArticleRouteSchemaGraph` — Article + BreadcrumbList |
| FAQ JSON-LD | `ArticleInlineFaq` + `buildResourceArticleFaqSchemaGraph` |
| Related links | `resolveRelatedArticles` (registry + `relatedSlugs`) |
| Sitemap paths | `getPublishedArticlePaths("resources")` |

Optional `meta.schema`: `primaryType`, `featuredImage`, `additionalNodes` for JSON-LD extensions.

## Deprecations

- `lib/resources/routing/*` — re-exports `@/lib/content/routing`
- `lib/resources/mdx/*` — re-exports `@/lib/content`
- `lib/schema/article-schema.ts` — re-exports `@/lib/content/schema/article`

Prefer `@/lib/content/routing` in new code.
