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
  priority = false,
  className,
}: ArticleImageProps) {
  return (
    <figure className={cn("editorial-figure editorial-figure--inline", className)}>
      <div className="editorial-figure__media">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80vw, 20rem"
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
