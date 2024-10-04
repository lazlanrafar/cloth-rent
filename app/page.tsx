import { FeatureSection } from "@/components/organisms/feature-section";
import { HeroSection } from "@/components/organisms/hero-section";
import { PricingSection } from "@/components/organisms/pricing-section";

export default function Home() {
  return (
    <main className="container">
      <HeroSection />
      <FeatureSection />
      <PricingSection />
    </main>
  );
}
