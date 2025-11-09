// Component imports for home page
import { Header } from "@/components/layout/Header/Header";
import { Metadata } from "next";
import { lazy } from "react";

// Lazy loaded components
const Partner = lazy(() => import("@/components/layout/Partner/Partner"));
const Services = lazy(() => import("@/components/services").then(module => ({ default: module.Services })));
const Benefits = lazy(() => import("@/components/Benefits"));
const Steps = lazy(() => import("@/components/Steps"));
const Stories = lazy(() => import("@/components/Stories"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));
// SEO metadata for home page
export const metadata: Metadata = {
  title: "Global Ocean Logistics & Shipping Solutions | Uthao",
  description:
    "Navigate global trade with trusted ocean logistics. Professional shipping services, real-time tracking, and reliable worldwide delivery solutions for your business.",
  keywords:
    "ocean logistics, global shipping, freight forwarding, supply chain management, cargo transport, international shipping, maritime logistics, container shipping, real-time tracking",
  openGraph: {
    title: "Uthao - Global Ocean Logistics & Shipping Solutions",
    description:
      "Navigate global trade with trusted ocean logistics. Professional shipping services with real-time tracking and reliable worldwide delivery.",
    images: ["/anchor.png"],
  },
  alternates: {
    canonical: "/",
  },
};

// Home page component with main sections
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Uthao - Global Ocean Logistics Solutions",
            description:
              "Navigate global trade with trusted ocean logistics and shipping services",
            url: "https://uthao-cwtk.vercel.app/",
            mainEntity: {
              "@type": "Service",
              name: "Ocean Contract Logistics",
              description:
                "Comprehensive ocean freight services with real-time tracking and flexible setup for global supply chain optimization",
              provider: {
                "@type": "Organization",
                name: "Uthao",
              },
              areaServed: "Worldwide",
            },
          }),
        }}
      />
      <div className="space-y-8">
        {/* Main content section with centered layout */}
        <section className="text-center space-y-4">
          {/* Navigation header */}
          <Header />
          {/* Partner logos section */}
          <Partner />
          {/* Services showcase */}
          <Services />
          {/* <StepsPage /> */}
          <Steps />
          {/* <BenefitsPage /> */}
          <Benefits />
          {/* <StoriesPage /> */}
          <Stories />
          {/* <FAQPage /> */}
          <FAQ />
          {/* <FooterPage /> */}
          <Footer />
        </section>
      </div>
    </>
  );
}
