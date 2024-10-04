import { FeatureSection } from "@/components/organisms/feature-section";
import { HeroSection } from "@/components/organisms/hero-section";
import { PricingSection } from "@/components/organisms/pricing-section";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  if (session?.id) return redirect("/dashboard");

  return (
    <main className="container">
      <HeroSection />
      <FeatureSection />
      <PricingSection />
    </main>
  );
}
