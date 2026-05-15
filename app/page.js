import { BenefitsSection } from "@/components/site/benefits-section";
import { ContactSection } from "@/components/site/contact-section";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { PortfolioSection } from "@/components/site/portfolio-section";
import { ProcessSection } from "@/components/site/process-section";
import { StatsStrip } from "@/components/site/stats-strip";
import { TestimonialsSection } from "@/components/site/testimonials-section";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="page-mesh" />
      <Header />
      <Hero />
      <StatsStrip />
      <BenefitsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
