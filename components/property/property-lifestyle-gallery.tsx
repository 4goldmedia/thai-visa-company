"use client"

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { OptimizedImage } from "@/components/ui/optimized-image"
import type { PropertyGallerySlide } from "@/lib/content/property"
import { cn } from "@/lib/utils"

type PropertyLifestyleGalleryProps = {
  slides: ReadonlyArray<PropertyGallerySlide>
  ariaLabel: string
  className?: string
}

/**
 * Apple-style horizontal lifestyle gallery  -  snap, drag, prev/next arrows.
 */
function PropertyLifestyleGallery({
  slides,
  ariaLabel,
  className,
}: PropertyLifestyleGalleryProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const dragRef = useRef<{
    active: boolean
    startX: number
    scrollLeft: number
    moved: boolean
  }>({ active: false, startX: 0, scrollLeft: 0, moved: false })
  const [canGoPrev, setCanGoPrev] = useState(false)
  const [canGoNext, setCanGoNext] = useState(true)

  const getStep = useCallback(() => {
    const track = trackRef.current
    if (!track) return 0
    const item = track.querySelector<HTMLElement>(".property-gallery__item")
    if (!item) return track.clientWidth * 0.8
    const styles = getComputedStyle(track)
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "24") || 24
    return item.getBoundingClientRect().width + gap
  }, [])

  const updateNav = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth)
    const left = track.scrollLeft
    setCanGoPrev(left > 8)
    setCanGoNext(left < maxScroll - 8)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    updateNav()
    track.addEventListener("scroll", updateNav, { passive: true })
    window.addEventListener("resize", updateNav)
    return () => {
      track.removeEventListener("scroll", updateNav)
      window.removeEventListener("resize", updateNav)
    }
  }, [updateNav, slides.length])

  const scrollByStep = useCallback(
    (direction: -1 | 1) => {
      const track = trackRef.current
      if (!track) return
      const step = getStep()
      if (step <= 0) return
      const start = track.scrollLeft
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth)
      const target = Math.min(
        maxScroll,
        Math.max(0, start + direction * step),
      )
      const duration = 550
      const startTime = performance.now()

      const tick = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration)
        const eased = 1 - (1 - t) ** 3
        track.scrollLeft = start + (target - start) * eased
        if (t < 1) {
          requestAnimationFrame(tick)
        } else {
          updateNav()
        }
      }

      requestAnimationFrame(tick)
    },
    [getStep, updateNav],
  )

  const onPointerDown = useCallback((event: PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current
    if (!track || event.button !== 0) return
    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
      moved: false,
    }
    track.setPointerCapture(event.pointerId)
    track.dataset.dragging = "true"
  }, [])

  const onPointerMove = useCallback((event: PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current
    const drag = dragRef.current
    if (!track || !drag.active) return
    const delta = event.clientX - drag.startX
    if (Math.abs(delta) > 4) drag.moved = true
    track.scrollLeft = drag.scrollLeft - delta
  }, [])

  const endDrag = useCallback(
    (event: PointerEvent<HTMLUListElement>) => {
      const track = trackRef.current
      const drag = dragRef.current
      if (!track || !drag.active) return
      drag.active = false
      track.dataset.dragging = "false"
      try {
        track.releasePointerCapture(event.pointerId)
      } catch {
        /* already released */
      }
      const step = getStep()
      if (step > 0) {
        const index = Math.round(track.scrollLeft / step)
        track.scrollTo({ left: index * step, behavior: "smooth" })
      }
      updateNav()
    },
    [getStep, updateNav],
  )

  return (
    <div className={cn("property-gallery", className)}>
      <ul
        ref={trackRef}
        className="property-gallery__track"
        aria-label={ariaLabel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {slides.map((slide) => (
          <li key={slide.id} className="property-gallery__item">
            <article className="property-gallery__card">
              <div className="property-gallery__media relative">
                <OptimizedImage
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  quality={90}
                  sizes="(max-width: 767px) 88vw, 420px"
                  className="property-gallery__image"
                  draggable={false}
                />
                <div className="property-gallery__veil" aria-hidden />
                <div className="property-gallery__copy">
                  <h3 className="property-gallery__title">{slide.title}</h3>
                  <p className="property-gallery__text">{slide.description}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={cn(
          "property-gallery__nav property-gallery__nav--prev",
          canGoPrev && "is-visible",
        )}
        aria-label="Show previous homes"
        aria-hidden={!canGoPrev}
        tabIndex={canGoPrev ? 0 : -1}
        disabled={!canGoPrev}
        onClick={() => scrollByStep(-1)}
      >
        <ChevronLeft aria-hidden strokeWidth={1.75} />
      </button>

      <button
        type="button"
        className={cn(
          "property-gallery__nav property-gallery__nav--next",
          canGoNext && "is-visible",
        )}
        aria-label="Show next homes"
        aria-hidden={!canGoNext}
        tabIndex={canGoNext ? 0 : -1}
        disabled={!canGoNext}
        onClick={() => scrollByStep(1)}
      >
        <ChevronRight aria-hidden strokeWidth={1.75} />
      </button>
    </div>
  )
}

export { PropertyLifestyleGallery }
