import type { ResourceArticleMeta } from "@/lib/content/collections/resources"
import type { VisaGuideArticleMeta } from "@/lib/content/collections/visa-guides"
import { toContentArticleKey } from "@/lib/content/collections"
import type {
  ContentArticleBase,
  ContentArticleKey,
  ContentArticleModule,
  ContentCollectionId,
} from "@/lib/content/types"

// -----------------------------------------------------------------------------
// Registry — add one entry per `content/articles/<collection>/<slug>/`
// -----------------------------------------------------------------------------

const articleEntries = {
  "resources/how-to-get-thailand-retirement-visa": {
    collection: "resources",
    slug: "how-to-get-thailand-retirement-visa",
    loadMeta: () =>
      import(
        "@/content/articles/resources/how-to-get-thailand-retirement-visa/meta"
      ).then((m) => m.meta),
    loadModule: async (): Promise<ContentArticleModule<ResourceArticleMeta>> => {
      const [{ default: Content }, { meta }] = await Promise.all([
        import(
          "@/content/articles/resources/how-to-get-thailand-retirement-visa/content.mdx"
        ),
        import(
          "@/content/articles/resources/how-to-get-thailand-retirement-visa/meta"
        ),
      ])
      return { default: Content, meta }
    },
  },
} as const

export type RegisteredContentArticleKey = keyof typeof articleEntries

export const registeredContentArticleKeys = Object.keys(
  articleEntries,
) as RegisteredContentArticleKey[]

export function parseContentArticleKey(
  key: string,
): { collection: ContentCollectionId; slug: string } | null {
  const slash = key.indexOf("/")
  if (slash === -1) return null
  const collection = key.slice(0, slash) as ContentCollectionId
  const slug = key.slice(slash + 1)
  if (!slug) return null
  return { collection, slug }
}

export function isRegisteredContentArticleKey(
  key: string,
): key is RegisteredContentArticleKey {
  return key in articleEntries
}

export function getRegistryKeysForCollection(
  collection: ContentCollectionId,
): RegisteredContentArticleKey[] {
  return registeredContentArticleKeys.filter((key) =>
    key.startsWith(`${collection}/`),
  )
}

export async function loadArticleMeta(
  key: RegisteredContentArticleKey,
): Promise<ContentArticleBase | null> {
  const entry = articleEntries[key]
  if (!entry) return null
  return entry.loadMeta()
}

export async function loadContentArticle(
  key: RegisteredContentArticleKey,
): Promise<
  ContentArticleModule<ResourceArticleMeta | VisaGuideArticleMeta> | null
> {
  const entry = articleEntries[key]
  if (!entry) return null
  return entry.loadModule()
}

export async function loadContentArticleBySlug(
  collection: ContentCollectionId,
  slug: string,
): Promise<
  ContentArticleModule<ResourceArticleMeta | VisaGuideArticleMeta> | null
> {
  const key = toContentArticleKey(collection, slug)
  if (!isRegisteredContentArticleKey(key)) return null
  return loadContentArticle(key)
}

export async function getPublishedKeysForCollection(
  collection: ContentCollectionId,
): Promise<RegisteredContentArticleKey[]> {
  const keys = getRegistryKeysForCollection(collection)
  const published = await Promise.all(
    keys.map(async (key) => {
      const meta = await loadArticleMeta(key)
      return meta?.published ? key : null
    }),
  )
  return published.filter((key): key is RegisteredContentArticleKey => key !== null)
}

export async function getPublishedPathsForCollection(
  collection: ContentCollectionId,
): Promise<string[]> {
  const keys = await getPublishedKeysForCollection(collection)
  const metas = await Promise.all(keys.map((key) => loadArticleMeta(key)))
  return metas
    .filter((meta): meta is ContentArticleBase => meta !== null)
    .map((meta) => meta.path)
}
