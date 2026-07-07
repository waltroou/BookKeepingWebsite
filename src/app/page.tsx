import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
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
      "QuickBooks Online",
      "Bookkeeping",
      "Nonprofit accounting",
      "Financial reporting",
      "Grant and fund accounting",
      "Audit preparation",
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
