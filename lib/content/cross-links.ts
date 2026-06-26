/**
 * Unified cross-engine linking  -  Visas ↔ Blog articles.
 * Re-exports collection-specific resolvers and shared scoring helpers.
 */

export {
  resolveBlogCrossLinks,
  buildBlogClusterTopicHubLink,
  buildRelatedGuideLink,
  buildPillarVisaLink,
  getBlogArticleClusterBreadcrumb,
  type ResolvedBlogCrossLinks,
} from "@/lib/content/blog-related"

export {
  resolveArticleCrossLinks,
  resolveRelatedArticles,
  resolveRelatedArticlesForVisa,
  resolveRelatedVisas,
  resolveRelatedVisasForArticle,
  resolveVisaCrossLinks,
  filterPublishedRelatedLinks,
  isPublishedArticleHref,
  isPublishedBlogHref,
  mergeRelatedLinks,
  rankRelatedArticles,
  type ResolvedCrossLinks,
  type ResolveRelatedArticlesInput,
} from "@/lib/content/related"
