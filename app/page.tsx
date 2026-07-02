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
import WhatsAppPage from "./whatsapp/page";
import CallPage from "./call/page";
import PrivacyPage from "./privacy/page";

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  // Await the search parameters in Next.js App Router
  const { page } = await searchParams;

  // Intercept and load your precise WhatsApp view natively
  if (page === "whatsapp") {
    return <WhatsAppPage />;
  }

  // Intercept and load your precise Call view natively
  if (page === "call") {
    return <CallPage />;
  }

  // Intercept and load your precise Privacy view natively
  if (page === "privacy") {
    return <PrivacyPage />;
  }

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
