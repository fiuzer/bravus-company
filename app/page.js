import { BenefitsSection } from "@/components/site/benefits-section";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { PortfolioSection } from "@/components/site/portfolio-section";
import { ProcessSection } from "@/components/site/process-section";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="page-mesh" />
      <Header />
      <Hero />
      <BenefitsSection />
      <PortfolioSection />
      <ProcessSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
