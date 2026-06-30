import { CircleCheckBig, ThumbsUp, TriangleAlert } from "lucide-react"

import { MovingSectionHeader } from "@/components/moving/moving-section-header"
import type { MovingEditorialPoint, MovingIsThailandGood } from "@/lib/moving/types"
import { sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type EditorialIsThailandGoodProps = {
  data: MovingIsThailandGood
  headingId: string
  className?: string
}

function EditorialPointList({
  points,
}: {
  points: ReadonlyArray<MovingEditorialPoint>
}) {
  return (
    <ul className="moving-is-good__points">
      {points.map((point) => (
        <li key={point.id} className="moving-is-good__point">
          <p className="moving-is-good__point-title">{point.title}</p>
          <p className="moving-is-good__point-detail">{point.detail}</p>
        </li>
      ))}
    </ul>
  )
}

function EditorialFitList({
  items,
  variant,
}: {
  items: ReadonlyArray<string>
  variant: "pros" | "cons"
}) {
  return (
    <ul
      className={cn(
        "moving-is-good__fit-list",
        variant === "pros" && "moving-is-good__fit-list--pros",
        variant === "cons" && "moving-is-good__fit-list--cons",
      )}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function EditorialIsThailandGood({
  data,
  headingId,
  className,
}: EditorialIsThailandGoodProps) {
  return (
    <div className={cn("moving-is-good", className)}>
      <MovingSectionHeader
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.quickAnswer}
        headingId={headingId}
      />

      {/* Layer 2 — advantages vs considerations */}
      <div className={cn("moving-is-good__compare", sectionContentOffsetClass)}>
        <article
          className="moving-is-good__panel moving-is-good__panel--advantages"
          aria-labelledby="moving-is-good-advantages"
        >
          <ThumbsUp
            className="moving-is-good__panel-icon"
            aria-hidden
            size={30}
            strokeWidth={1.75}
          />
          <h3 id="moving-is-good-advantages" className="moving-is-good__panel-title">
            {data.advantagesTitle}
          </h3>
          <EditorialPointList points={data.advantages} />
        </article>

        <article
          className="moving-is-good__panel moving-is-good__panel--considerations"
          aria-labelledby="moving-is-good-considerations"
        >
          <TriangleAlert
            className="moving-is-good__panel-icon"
            aria-hidden
            size={30}
            strokeWidth={1.75}
          />
          <h3 id="moving-is-good-considerations" className="moving-is-good__panel-title">
            {data.considerationsTitle}
          </h3>
          <EditorialPointList points={data.considerations} />
        </article>
      </div>

      {/* Layer 3 — who thrives */}
      <section className="moving-is-good__fit" aria-labelledby="moving-is-good-fit-heading">
        <h3 id="moving-is-good-fit-heading" className="moving-is-good__fit-heading">
          {data.fitHeading}
        </h3>

        <div className="moving-is-good__fit-grid">
          <article
            className="moving-is-good__fit-column moving-is-good__fit-column--pros"
            aria-labelledby="moving-is-good-fit-pros"
          >
            <div className="moving-is-good__fit-header">
              <CircleCheckBig
                className="moving-is-good__fit-icon"
                aria-hidden
                size={28}
                strokeWidth={1.75}
              />
              <h4 id="moving-is-good-fit-pros" className="moving-is-good__fit-title">
                {data.fitProsTitle}
              </h4>
            </div>
            <EditorialFitList items={data.fitPros} variant="pros" />
          </article>

          <article
            className="moving-is-good__fit-column moving-is-good__fit-column--cons"
            aria-labelledby="moving-is-good-fit-cons"
          >
            <div className="moving-is-good__fit-header">
              <TriangleAlert
                className="moving-is-good__fit-icon"
                aria-hidden
                size={28}
                strokeWidth={1.75}
              />
              <h4 id="moving-is-good-fit-cons" className="moving-is-good__fit-title">
                {data.fitConsTitle}
              </h4>
            </div>
            <EditorialFitList items={data.fitCons} variant="cons" />
          </article>
        </div>
      </section>
    </div>
  )
}

export { EditorialIsThailandGood }
export type { EditorialIsThailandGoodProps }
