import Image, { type ImageProps } from "next/image"

import { cn } from "@/lib/utils"

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string
  /** Responsive sizes hint — required for fill or responsive layouts */
  sizes?: string
}

/**
 * Production-ready `next/image` defaults for LCP and CLS.
 * Use for hero media, OG assets, and content images when added.
 */
function OptimizedImage({
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  loading,
  priority,
  quality = 85,
  fill,
  width,
  height,
  ...rest
}: OptimizedImageProps) {
  return (
    <Image
      className={cn(!fill && "h-auto w-full", className)}
      sizes={sizes}
      fill={fill}
      loading={priority ? undefined : (loading ?? "lazy")}
      quality={quality}
      priority={priority}
      {...(fill ? rest : { ...rest, width, height })}
    />
  )
}

export { OptimizedImage }
export type { OptimizedImageProps }
