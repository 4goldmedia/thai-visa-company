import Image from "next/image"

import { cn } from "@/lib/utils"

type ArticleFeaturedImageProps = {
  src: string
  alt: string
  className?: string
}

function ArticleFeaturedImage({ src, alt, className }: ArticleFeaturedImageProps) {
  return (
    <div className={cn("editorial-article-featured", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
            sizes="(max-width: 1024px) 100vw, min(52rem, 72vw)"
        priority
      />
    </div>
  )
}

export { ArticleFeaturedImage }
