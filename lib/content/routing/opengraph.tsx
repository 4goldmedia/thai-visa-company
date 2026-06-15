import { ImageResponse } from "next/og"

import { getDefaultOgImagePath } from "@/lib/site/config"
import { siteBrand } from "@/lib/site"

export const articleOgImageSize = {
  width: 1200,
  height: 630,
} as const

export const articleOgImageContentType = "image/png"

type ArticleOgImageInput = {
  title: string
  eyebrow?: string
  heroImagePath?: string
}

export async function renderArticleOgImage(input: ArticleOgImageInput) {
  const heroSrc = input.heroImagePath ?? getDefaultOgImagePath()

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#f7f4ef",
          padding: 72,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {input.eyebrow ? (
            <div
              style={{
                fontSize: 22,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6f6a61",
              }}
            >
              {input.eyebrow}
            </div>
          ) : null}
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#1a1814",
              maxWidth: 980,
            }}
          >
            {input.title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <div style={{ fontSize: 24, color: "#5c574f" }}>{siteBrand.name}</div>
          <div
            style={{
              width: 220,
              height: 124,
              borderRadius: 8,
              background: "#e8e3da",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#8a847a",
              fontSize: 18,
            }}
          >
            {heroSrc.endsWith(".svg") ? "Guide" : " "}
          </div>
        </div>
      </div>
    ),
    articleOgImageSize,
  )
}
