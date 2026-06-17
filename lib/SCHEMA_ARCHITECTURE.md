# Schema.org JSON-LD architecture

Public entry: **`@/lib/schema`** (`lib/schema.ts`).

## Design

- **Typed builders** per schema type (Organization, LocalBusiness, FAQ, Article, Breadcrumb, Review, Service, Web)
- **`buildPageSchemaGraph`** merges nodes into one `@graph` document per page
- **`JsonLdScript`** renders safe inline JSON-LD in Server Components
- **Stable `@id` anchors** (`/#organization`, `/#localbusiness`, `/#website`) for entity linking

## Builders

| Function | Schema type |
|----------|-------------|
| `buildOrganization` | Organization |
| `buildLocalBusiness` | LocalBusiness |
| `buildFaqPage` | FAQPage (single node) |
| `buildFaqSchemaGraph` | FAQPage-only `@graph` |
| `buildHomepageFaqSchemaGraph` | Homepage preset |
| `buildVisaPageFaqSchemaGraph` | Visa page preset |
| `buildResourceArticleFaqSchemaGraph` | Resource article preset |
| `<FaqJsonLd />` | Renders FAQ JSON-LD beside FAQ UI |
| `buildArticle` | Article / HowTo / … |
| `buildBreadcrumbList` | BreadcrumbList |
| `buildReview` / `buildEntityWithReviews` | Review + AggregateRating |
| `buildService` | Service |
| `buildWebSite` / `buildWebPage` | WebSite / WebPage |

## Page usage

```tsx
import {
  buildOrganization,
  buildFaqPage,
  buildPageSchemaGraph,
  JsonLdScript,
} from "@/lib/schema"

const graph = buildPageSchemaGraph({
  nodes: [buildOrganization(), buildFaqPage(items)],
})

return <JsonLdScript data={graph} />
```

Resource articles: `<ArticleJsonLd />` (Article only). Breadcrumbs via `<Breadcrumbs />` / `PageBreadcrumbs` with `<BreadcrumbJsonLd />`. FAQ via `<FaqJsonLd />` on `ArticleInlineFaq`.

### Resource Article schema

`toArticleInputFromResourceArticle()` maps meta → `ArticleInput` with:

| Field | Schema.org |
|-------|------------|
| `title` | `headline`, `name` |
| `seo.description` | `description` |
| `lead` | `abstract` |
| `publishedAt` / `updatedAt` | `datePublished` / `dateModified` |
| Organization | `author`, `publisher` |
| `path` | `url`, `mainEntityOfPage.@id` |
| `schema.featuredImage` or `/images/articles/<slug>.jpg` | `image`, `thumbnailUrl` |
| `category` | `articleSection` |
| `tags` | `keywords` |

Optional `schema.featuredImage` in article meta; placeholder path documented in `getArticleFeaturedImagePath()`.

## FAQ sections (rich results + AI)

FAQ JSON-LD is co-located with visible FAQ UI so structured data matches on-page Q&A (Google requirement).

| Surface | Component | Schema helper |
|---------|-----------|---------------|
| Homepage | `FaqSection` | Default: `Thailand visa FAQ`, path `/` |
| Visa pages | `FaqSection` | `jsonLd={{ name, path, description }}` from visa content |
| Resource articles | `ArticleInlineFaq` | `jsonLd={{ name, path }}` from article meta |

Use `normalizeFaqItems()` when bridging `VisaFaqItem[]` to schema. Page-level graphs (home, visa, article) no longer duplicate FAQ nodes.

## Site-wide business entities

`lib/schema/business-profile.ts`  -  single source for name, description, LINE, WhatsApp, email, Google reviews URL, expertise (`knowsAbout`), and sample reviews.

`buildPlatformBusinessSchemaGraph()`  -  Organization + LocalBusiness with:
- `contactPoint` array (LINE, WhatsApp, email, phone)
- `sameAs` (LINE, WhatsApp, Google Maps)
- `aggregateRating` + `review` excerpts
- `@type`: `["LocalBusiness", "ProfessionalService"]`

Rendered site-wide via `SiteBusinessJsonLd` in `app/layout.tsx`. Homepage JSON-LD adds WebSite + FAQ only (no duplicate business nodes).

Override per page via builder `input` arguments; extend graphs with `additionalNodes` on articles.

### Environment variables

| Variable | Schema use |
|----------|------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical `url` |
| `NEXT_PUBLIC_LINE_URL` | ContactPoint + `sameAs` |
| `NEXT_PUBLIC_WHATSAPP_URL` | ContactPoint + `sameAs` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | ContactPoint + Organization `email` |
| `NEXT_PUBLIC_CONTACT_PHONE` | ContactPoint + `telephone` |
| `NEXT_PUBLIC_GOOGLE_REVIEWS_URL` | `sameAs` + Google reviews link |

## Deprecated

`lib/content/schema/json-ld.ts` re-exports `@/lib/schema` for the content pipeline.
