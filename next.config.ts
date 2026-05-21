import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
}

const withMDX = createMDX({
  options: {
    // String tuples keep options serializable for Turbopack
    rehypePlugins: [["rehype-slug", {}]],
  },
})

export default withMDX(nextConfig)
