import { Geist, Geist_Mono } from "next/font/google"

import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { SkipLink } from "@/components/layout/skip-link"
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
        <SkipLink />
        <Navbar />
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
