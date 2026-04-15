import { BenefitsSection } from "@/components/site/benefits-section";
import { DemoSection } from "@/components/site/demo-section";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { ProcessSection } from "@/components/site/process-section";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="page-mesh" />
      <Header />
      <Hero />
      <DemoSection />
      <BenefitsSection />
      <ProcessSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
