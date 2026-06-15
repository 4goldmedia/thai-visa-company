/**
 * Unified cross-engine linking — Visas ↔ Guides ↔ Blog.
 * Re-exports collection-specific resolvers and shared scoring helpers.
 */

export {
  resolveGuideCrossLinks,
  buildGuideTopicHubLink,
  buildGuidePillarVisaLink,
  getGuideArticleCategoryBreadcrumb,
  type ResolvedGuideCrossLinks,
} from "@/lib/content/guides-related"

export {
  resolveBlogCrossLinks,
  buildRelatedGuideLink,
  buildPillarVisaLink,
  getBlogArticleCategoryBreadcrumb,
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
  isPublishedGuideHref,
  isPublishedBlogHref,
  mergeRelatedLinks,
  rankRelatedArticles,
  type ResolvedCrossLinks,
  type ResolveRelatedArticlesInput,
} from "@/lib/content/related"
