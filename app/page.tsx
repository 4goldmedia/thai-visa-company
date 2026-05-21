import { FinalCTASection } from "@/components/sections/final-cta"
import { FaqSection } from "@/components/sections/faq"
import { HeroSection } from "@/components/sections/hero"
import { ProcessSection } from "@/components/sections/process"
import { ResourcesPreviewSection } from "@/components/sections/resources-preview"
import { ReviewsSection } from "@/components/sections/reviews"
import { VisaTypesSection } from "@/components/sections/visa-types"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { HomeJsonLd } from "@/components/seo/home-json-ld"
import { homeMetadata } from "@/lib/seo"

export const metadata = homeMetadata

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label="Homepage"
        className="flex flex-1 flex-col overflow-x-clip bg-background"
      >
        <HeroSection />
        <VisaTypesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <ReviewsSection />
        <FaqSection />
        <ResourcesPreviewSection />
        <FinalCTASection />
      </main>
    </>
  )
}
