import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/how-to-get-thailand-retirement-visa",
        destination: "/visas/retirement",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/resources/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/guides",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/guides/topic/thailand-immigration",
        destination: "/blog/cluster/living-in-thailand",
        permanent: true,
      },
      {
        source: "/guides/topic/:topic",
        destination: "/blog/cluster/:topic",
        permanent: true,
      },
      {
        source: "/guides/category/thailand-living",
        destination: "/blog/cluster/living-in-thailand",
        permanent: true,
      },
      {
        source: "/guides/category/visa-requirements",
        destination: "/blog/cluster/retirement",
        permanent: true,
      },
      {
        source: "/guides/category/visa-comparisons",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/guides/category/:category",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/guides/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/blog/category/practical-guides",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/category/immigration-news",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/category/visa-rule-changes",
        destination: "/blog/cluster/dtv",
        permanent: true,
      },
      {
        source: "/blog/category/embassy-updates",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/category/policy-changes",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/category/thailand-living",
        destination: "/blog/cluster/living-in-thailand",
        permanent: true,
      },
      {
        source: "/blog/category/comparisons",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/category/immigration-updates",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/category/visa-updates",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/category/visa-comparisons",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/category/commentary",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/category/expert-insights",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/category/visa-process",
        destination: "/blog/cluster/immigration-procedures",
        permanent: true,
      },
      {
        source: "/blog/category/living-in-thailand",
        destination: "/blog/cluster/living-in-thailand",
        permanent: true,
      },
      {
        source: "/blog/category/:path",
        destination: "/blog",
        permanent: true,
      },
    ]
  },
  images: {
    formats: ["image/avif", "image/webp"],
    /** Must include every `quality` passed to next/image. */
    qualities: [75, 85, 90, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
}

const withMDX = createMDX({
  options: {
    // String tuples keep options serializable for Turbopack
    remarkPlugins: [["remark-gfm", {}]],
    rehypePlugins: [["rehype-slug", {}]],
  },
})

export default withMDX(nextConfig)
