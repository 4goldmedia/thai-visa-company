import Link from "next/link"

import { Container } from "@/components/layout/container"
import { FooterMessagingLinks } from "@/components/cta/footer-messaging-links"
import { CONTACT_URLS } from "@/lib/contact"
import {
  footerLegalLinks,
  footerResourceLinks,
  footerVisaLinks,
  homeSectionAnchors,
} from "@/lib/navigation"
import { siteRoutes } from "@/lib/site-routes"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

const footerLinkClass = cn(
  "inline-flex min-h-8 max-w-full items-center rounded-md text-[13px] leading-snug text-muted-foreground",
  "transition-colors hover:text-foreground",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  "sm:text-sm"
)

const footerHeadingClass =
  "text-[11px] font-medium tracking-wide text-muted-foreground sm:text-xs"

type FooterNavLink = {
  label: string
  href: string
  external?: boolean
}

type FooterNavGroupProps = {
  title: string
  links: ReadonlyArray<FooterNavLink>
}

function FooterNavGroup({ title, links }: FooterNavGroupProps) {
  const navId = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <nav aria-labelledby={`footer-${navId}`} className="min-w-0 break-words">
      <h3 id={`footer-${navId}`} className={footerHeadingClass}>
        {title}
      </h3>
      <ul className="mt-2.5 flex flex-col gap-1 p-0 sm:mt-3">
        {links.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            {item.external ? (
              <a
                href={item.href}
                className={footerLinkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className={footerLinkClass}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

type FooterContactItemProps = {
  href: string
  label: string
  external?: boolean
}

function FooterContactItem({
  href,
  label,
  external = false,
}: FooterContactItemProps) {
  if (external) {
    return (
      <a
        href={href}
        className={footerLinkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    )
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={cn(footerLinkClass, "break-all sm:break-normal")}>
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className={footerLinkClass}>
      {label}
    </Link>
  )
}

function FooterBrand() {
  return (
    <div className="flex flex-col">
      <Link
        href="/"
        className={cn(
          "w-fit rounded-md text-sm font-semibold tracking-tight text-foreground",
          "transition-opacity hover:opacity-80",
          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        )}
      >
        <span className="sr-only">{siteConfig.name} — Home</span>
        <span aria-hidden>{siteConfig.name}</span>
      </Link>

      <p className="mt-2.5 max-w-[28rem] text-[14px] leading-[1.7] text-muted-foreground sm:mt-3 sm:max-w-sm sm:leading-[1.65]">
        Thailand visa guidance for foreigners, with clear answers and responsive
        support when you need it.
      </p>

      <ul className="mt-4 flex flex-col gap-1 p-0 sm:mt-5">
        <FooterMessagingLinks />
        <li>
          <FooterContactItem
            href={`mailto:${CONTACT_URLS.email}`}
            label={CONTACT_URLS.email}
          />
        </li>
      </ul>
    </div>
  )
}

function FooterLegalBar() {
  const year = new Date().getFullYear()
  const publishedLegalLinks = footerLegalLinks.filter((item) => {
    const route = siteRoutes.find((entry) => entry.path === item.href)
    return route?.published === true
  })

  return (
    <div
      className={cn(
        "flex flex-col gap-4 border-t border-border/50 pt-6",
        "sm:flex-row sm:items-center sm:justify-between sm:gap-6"
      )}
    >
      <p className="text-[12px] leading-snug text-muted-foreground sm:text-[13px]">
        © {year} {siteConfig.name}
      </p>

      {publishedLegalLinks.length > 0 ? (
        <nav aria-label="Legal">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 p-0">
            {publishedLegalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    footerLinkClass,
                    "min-h-8 text-[12px] sm:text-[13px]"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  )
}

type FooterProps = {
  className?: string
}

function Footer({ className }: FooterProps) {
  const reviewsLinks = [
    { label: "Client reviews", href: homeSectionAnchors.reviews },
  ] as const
  const contactNavLinks = [{ label: "Contact us", href: "/contact" }] as const

  return (
    <footer
      data-slot="footer"
      aria-label="Site footer"
      className={cn(
        "mt-auto shrink-0 border-t border-border/50 bg-background",
        className
      )}
    >
      <Container>
        <div className="py-10 sm:py-12 lg:py-14">
          <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:gap-12 xl:gap-16">
            <div className="border-b border-border/50 pb-8 lg:w-[min(100%,17.5rem)] lg:shrink-0 lg:border-b-0 lg:pb-0 lg:pr-4">
              <FooterBrand />
            </div>

            <div
              className={cn(
                "grid flex-1 grid-cols-2 gap-x-6 gap-y-8",
                "sm:grid-cols-2 sm:gap-x-10 sm:gap-y-9",
                "lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8"
              )}
            >
              <FooterNavGroup title="Visa Services" links={footerVisaLinks} />
              <FooterNavGroup title="Resources" links={footerResourceLinks} />
              <FooterNavGroup title="Reviews" links={reviewsLinks} />
              <FooterNavGroup title="Contact" links={contactNavLinks} />
            </div>
          </div>

          <FooterLegalBar />
        </div>
      </Container>
    </footer>
  )
}

export { Footer, FooterBrand, FooterNavGroup, FooterLegalBar }
export type { FooterProps }
