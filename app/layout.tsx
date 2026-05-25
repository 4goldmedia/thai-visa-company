import { Geist, Geist_Mono, Inter_Tight } from "next/font/google"

import { AnalyticsRoot } from "@/components/analytics"
import { SiteShell } from "@/components/layout/site-shell"
import { SiteBusinessJsonLd } from "@/components/seo/site-business-json-ld"
import { rootMetadata, viewport } from "@/lib/seo"
import { siteLocale } from "@/lib/site"
import { cn } from "@/lib/utils"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
})

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
  adjustFontFallback: true,
})

export const metadata = rootMetadata
export { viewport }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={siteLocale.html}
      className={cn(geistSans.variable, geistMono.variable, interTight.variable)}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "flex min-h-dvh flex-col bg-background font-sans antialiased",
          geistSans.className
        )}
      >
        <AnalyticsRoot />
        <SiteBusinessJsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
