import { BenefitsSection } from "@/components/benefits";
import { CTASection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/Features";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/How-It-works";
import { PricingSection } from "@/components/pricing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="w-full max-w-none mx-auto">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <PricingSection />
        <CTASection />
      </div>
    </div>
  )
}