import { Geist, Geist_Mono } from "next/font/google"

import { SiteShell } from "@/components/layout/site-shell"
import { SiteBusinessJsonLd } from "@/components/seo/site-business-json-ld"
import { rootMetadata, viewport } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
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

export const metadata = rootMetadata
export { viewport }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={siteConfig.locale}
      className={cn(geistSans.variable, geistMono.variable)}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "flex min-h-dvh flex-col bg-background font-sans antialiased",
          geistSans.className
        )}
      >
        <SiteBusinessJsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
