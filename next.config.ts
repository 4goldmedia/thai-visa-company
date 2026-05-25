import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    /** Must include every `quality` passed to next/image (OptimizedImage uses 85). */
    qualities: [75, 85],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
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
    rehypePlugins: [["rehype-slug", {}]],
  },
})

export default withMDX(nextConfig)
