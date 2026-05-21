import type { ResourceArticleMeta } from "@/lib/content/articles/resources"
import type { VisaGuideArticleMeta } from "@/lib/content/articles/visa-guides"
import { toContentArticleKey } from "@/lib/content/collections"
import type {
  ContentArticleKey,
  ContentArticleModule,
  ContentCollectionId,
} from "@/lib/content/types"

// -----------------------------------------------------------------------------
// Article loaders — one entry per `content/articles/<collection>/<slug>/`
// -----------------------------------------------------------------------------

const articleLoaders = {
  "resources/how-to-get-thailand-retirement-visa":
    async (): Promise<ContentArticleModule<ResourceArticleMeta>> => {
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
} as const satisfies Record<
  string,
  () => Promise<ContentArticleModule<ResourceArticleMeta | VisaGuideArticleMeta>>
>

export type RegisteredContentArticleKey = keyof typeof articleLoaders

export const registeredContentArticleKeys = Object.keys(
  articleLoaders,
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
  return key in articleLoaders
}

export async function loadContentArticle(
  key: RegisteredContentArticleKey,
): Promise<
  ContentArticleModule<ResourceArticleMeta | VisaGuideArticleMeta> | null
> {
  const loader = articleLoaders[key]
  if (!loader) return null
  return loader()
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

export function getRegistryKeysForCollection(
  collection: ContentCollectionId,
): RegisteredContentArticleKey[] {
  return registeredContentArticleKeys.filter((key) =>
    key.startsWith(`${collection}/`),
  )
}

export async function getPublishedKeysForCollection(
  collection: ContentCollectionId,
): Promise<RegisteredContentArticleKey[]> {
  const keys = getRegistryKeysForCollection(collection)
  const published = await Promise.all(
    keys.map(async (key) => {
      const mod = await loadContentArticle(key)
      return mod?.meta.published ? key : null
    }),
  )
  return published.filter((key): key is RegisteredContentArticleKey => key !== null)
}

export async function getPublishedPathsForCollection(
  collection: ContentCollectionId,
): Promise<string[]> {
  const keys = await getPublishedKeysForCollection(collection)
  const modules = await Promise.all(keys.map((key) => loadContentArticle(key)))
  return modules
    .filter((mod): mod is NonNullable<typeof mod> => mod !== null)
    .map((mod) => mod.meta.path)
}
