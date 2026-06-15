import Image from "next/image"

import { cn } from "@/lib/utils"

type ArticleImageProps = {
  src: string
  alt: string
  caption?: string
  credit?: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

function ArticleImage({
  src,
  alt,
  caption,
  credit,
  width = 1200,
  height = 675,
  priority = false,
  className,
}: ArticleImageProps) {
  return (
    <figure className={cn("editorial-figure", className)}>
      <div className="editorial-figure__media relative overflow-hidden rounded-[var(--radius-card)] border border-border/40">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, min(52rem, 70vw)"
          priority={priority}
        />
      </div>
      {caption || credit ? (
        <figcaption className="editorial-figure__caption">
          {caption ? <span>{caption}</span> : null}
          {credit ? (
            <span className="editorial-figure__credit">{credit}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  )
}

export { ArticleImage }
