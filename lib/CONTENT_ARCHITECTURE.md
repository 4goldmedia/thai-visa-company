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

- `defineResourceArticle()` — `lib/content/articles/resources.ts`
- `defineVisaGuideArticle()` — `lib/content/articles/visa-guides.ts`

## Registry

`lib/content/registry.ts` lists every article loader:

```ts
"resources/how-to-get-thailand-retirement-visa": async () => { ... }
```

**Add a resource article**

1. Create `content/articles/resources/<slug>/meta.ts` + `content.mdx`
2. Register `"resources/<slug>"` in `lib/content/registry.ts`
3. Import `meta` in `lib/resources/content/articles.ts` for index cards (or use `resourceMetaToIndexCard`)
4. Set `published: true` when shipping

## Runtime API

| Function | Use |
|----------|-----|
| `loadContentArticleBySlug(collection, slug)` | Load MDX + meta |
| `loadResourceContentArticle(slug)` | Shortcut for `resources` |
| `getPublishedResourceArticleSlugs()` | `generateStaticParams` |
| `getPublishedResourceArticlePaths()` | Sitemap merge |
| `toResourceArticlePageProps(meta)` | Article layout / JSON-LD |
| `resourceMetaToIndexCard(meta)` | Resources index grid |

Public entry: `@/lib/content`

## Resources dynamic routing (`/resources/[slug]`)

App Router page: `app/resources/[slug]/page.tsx` (thin — delegates to routing layer).

| Module | Role |
|--------|------|
| `lib/resources/routing/resolve.ts` | `resolveResourceArticleRoute(slug)` — cached MDX + meta |
| `lib/resources/routing/metadata.ts` | `buildResourceArticleMetadata` — canonical, OG `article` type |
| `lib/resources/routing/static-params.ts` | `getResourceArticleStaticParams()` |
| `lib/resources/routing/related.ts` | Merges `related` + optional `relatedSlugs` from registry |
| `components/templates/resource-article-page.tsx` | Layout + MDX view |

Route config: `dynamicParams = false` (404 unknown slugs).

Optional `meta.schema` on any article: `primaryType`, `additionalNodes` for JSON-LD `@graph`.

## SEO

- Page metadata: `createPageMetadata()` from `meta.seo` + `meta.path`
- JSON-LD: `ResourceArticleJsonLd` uses `publishedAt` / `updatedAt`
- Sitemap: `buildSitemap()` merges published paths from the content registry

## Deprecations

`lib/resources/mdx/*` re-exports `@/lib/content` for backward compatibility. Prefer `@/lib/content` in new code.
