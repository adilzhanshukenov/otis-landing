import { CertificatesSection } from "@/components/landing/CertificatesSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { LeadFormSection } from "@/components/landing/LeadFormSection";
import { PackagesSection } from "@/components/landing/PackagesSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { QualitySection } from "@/components/landing/QualitySection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { WhyOtisSection } from "@/components/landing/WhyOtisSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />
      <main>
        <HeroSection />
        <WhyOtisSection />
        <PackagesSection />
        <CertificatesSection />
        <QualitySection />
        <CtaSection />
        <TestimonialsSection />
        <ProcessSection />
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  );
}
