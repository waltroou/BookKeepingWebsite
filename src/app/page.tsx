import { Consultation } from "@/components/site/consultation";
import { FAQ } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { NonprofitFocus } from "@/components/site/nonprofit-focus";
import { Outcomes } from "@/components/site/outcomes";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { siteConfig } from "@/config/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: "United States",
    serviceType: [
      "Bookkeeping",
      "Nonprofit accounting",
      "Grant reporting support",
      "Monthly financial reporting",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <NonprofitFocus />
        <Process />
        <Outcomes />
        <FAQ />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
