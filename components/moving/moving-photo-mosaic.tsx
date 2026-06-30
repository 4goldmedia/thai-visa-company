import Link from "next/link"

import { OptimizedImage } from "@/components/ui/optimized-image"
import { whyThailandCollageImages } from "@/lib/content/why-thailand"
import type { MovingWhyTopic } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

type MovingPhotoMosaicProps = {
  topics: ReadonlyArray<MovingWhyTopic>
  className?: string
}

function MovingPhotoMosaic({ topics, className }: MovingPhotoMosaicProps) {
  const [lead, ...supporting] = whyThailandCollageImages

  return (
    <div className={cn("moving-photo-mosaic", className)}>
      <div className="moving-photo-mosaic__grid" aria-hidden>
        <div className="moving-photo-mosaic__lead">
          <OptimizedImage
            src={lead.src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            style={lead.objectPosition ? { objectPosition: lead.objectPosition } : undefined}
          />
        </div>
        {supporting.map((image) => (
          <div key={image.id} className="moving-photo-mosaic__tile">
            <OptimizedImage
              src={image.src}
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className="object-cover"
              style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
            />
          </div>
        ))}
      </div>

      <ul className="moving-photo-mosaic__topics">
        {topics.map((topic, index) => {
          const inner = (
            <>
              <span className="moving-photo-mosaic__index" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="moving-photo-mosaic__copy">
                <span className="moving-photo-mosaic__title">{topic.title}</span>
                <span className="moving-photo-mosaic__description">{topic.description}</span>
              </span>
            </>
          )

          return (
            <li key={topic.id}>
              {topic.href ? (
                <Link href={topic.href} className="moving-photo-mosaic__topic">
                  {inner}
                </Link>
              ) : (
                <div className="moving-photo-mosaic__topic">{inner}</div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { MovingPhotoMosaic }
