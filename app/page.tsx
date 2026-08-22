import { FaqSection } from "@/components/sections/faq"
import { HomeFinalCtaSection } from "@/components/sections/final-cta"
import { HeroSection } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { MovingSimpleSection } from "@/components/sections/moving-simple"
import { ProcessSection } from "@/components/sections/process"
import { ReviewsSection } from "@/components/sections/reviews"
import { TeamIntroSection } from "@/components/sections/team-intro"
import { WhyThailandSection } from "@/components/sections/why-thailand"
import { VisaTypesSection } from "@/components/sections/visa-types"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { HomeJsonLd } from "@/components/seo/home-json-ld"
import { homepageAiCopy } from "@/lib/seo/ai-search"
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
        className="flex flex-1 flex-col bg-background"
      >
        <HeroSection />
        <TrustBar {...homepageAiCopy.trustBar} className="hidden min-[1100px]:block" />
        <VisaTypesSection />
        <WhyChooseUsSection />
        <MovingSimpleSection />
        <ProcessSection />
        <ReviewsSection />
        <TeamIntroSection />
        <WhyThailandSection />
        <FaqSection />
        <HomeFinalCtaSection />
      </main>
    </>
  )
}
