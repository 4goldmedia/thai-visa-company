"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import type { VisaProcessStep } from "@/lib/visas/types"
import { visaEditorialProcessTimelineClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaEditorialProcessTimelineProps = {
  steps: ReadonlyArray<VisaProcessStep>
  ariaLabel: string
  className?: string
}

type StepState = "complete" | "active" | "upcoming"

function formatStepNumber(step: number): string {
  return String(step).padStart(2, "0")
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function resolveConnectorFill(
  index: number,
  activeIndex: number,
  segmentProgress: number,
  reduceMotion: boolean,
): number {
  if (reduceMotion) return 1
  if (index < activeIndex) return 1
  if (index === activeIndex) return segmentProgress
  return 0
}

function VisaEditorialProcessTimeline({
  steps,
  ariaLabel,
  className,
}: VisaEditorialProcessTimelineProps) {
  const shellRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [segmentProgress, setSegmentProgress] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  const measureTimeline = useCallback(() => {
    const shell = shellRef.current
    if (!shell || !steps.length) return

    const markers = stepRefs.current
      .map((step) => step?.querySelector<HTMLElement>(".visa-process-timeline__number"))
      .filter((marker): marker is HTMLElement => Boolean(marker))

    if (!markers.length) return

    const activationY = window.innerHeight * 0.42

    let nextActiveIndex = 0
    markers.forEach((marker, index) => {
      const markerRect = marker.getBoundingClientRect()
      if (markerRect.top <= activationY) {
        nextActiveIndex = index
      }
    })

    let nextSegmentProgress = 0
    if (nextActiveIndex < markers.length - 1) {
      const currentRect = markers[nextActiveIndex].getBoundingClientRect()
      const nextRect = markers[nextActiveIndex + 1].getBoundingClientRect()
      const segmentStart = currentRect.bottom
      const segmentEnd = nextRect.top
      const segmentHeight = segmentEnd - segmentStart

      if (segmentHeight > 0) {
        nextSegmentProgress = clamp((activationY - segmentStart) / segmentHeight, 0, 1)
      }
    }

    setActiveIndex(nextActiveIndex)
    setSegmentProgress(nextSegmentProgress)
  }, [steps.length])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const syncMotionPreference = () => setReduceMotion(media.matches)

    syncMotionPreference()
    media.addEventListener("change", syncMotionPreference)

    measureTimeline()

    const shell = shellRef.current
    if (!shell) {
      return () => media.removeEventListener("change", syncMotionPreference)
    }

    const observer = new ResizeObserver(measureTimeline)
    observer.observe(shell)
    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    window.addEventListener("scroll", measureTimeline, { passive: true })
    window.addEventListener("resize", measureTimeline, { passive: true })

    return () => {
      media.removeEventListener("change", syncMotionPreference)
      observer.disconnect()
      window.removeEventListener("scroll", measureTimeline)
      window.removeEventListener("resize", measureTimeline)
    }
  }, [measureTimeline])

  const resolvedActiveIndex = reduceMotion ? steps.length - 1 : activeIndex

  return (
    <div ref={shellRef} className={cn("visa-process-timeline-shell", className)}>
      <ol className={visaEditorialProcessTimelineClass} aria-label={ariaLabel}>
        {steps.map((item, index) => {
          const state: StepState =
            index < resolvedActiveIndex
              ? "complete"
              : index === resolvedActiveIndex
                ? "active"
                : "upcoming"

          const connectorFill = resolveConnectorFill(
            index,
            resolvedActiveIndex,
            segmentProgress,
            reduceMotion,
          )

          return (
            <li
              key={item.step}
              ref={(element) => {
                stepRefs.current[index] = element
              }}
              className="visa-process-timeline__step"
              data-state={state}
            >
              <div className="visa-process-timeline__marker" aria-hidden>
                <span className="visa-process-timeline__node">
                  <span className="visa-process-timeline__number">
                    {formatStepNumber(item.step)}
                  </span>
                </span>
                {index < steps.length - 1 ? (
                  <span
                    className="visa-process-timeline__connector"
                    style={
                      {
                        "--connector-fill": connectorFill,
                      } as React.CSSProperties
                    }
                  >
                    <span className="visa-process-timeline__connector-track" />
                    <span className="visa-process-timeline__connector-fill" />
                  </span>
                ) : null}
              </div>
              <div className="visa-process-timeline__content">
                <h3 className="visa-process-timeline__title">
                  <span className="sr-only">Step {item.step}: </span>
                  {item.title}
                </h3>
                <p className="visa-process-timeline__description">{item.description}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export { VisaEditorialProcessTimeline }
