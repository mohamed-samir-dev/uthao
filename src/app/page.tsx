// Component imports for home page
import { lazy, Suspense } from 'react';
import { Header } from "@/components/layout/Header/Header";
import { Metadata } from "next";

// Lazy load heavy components to improve initial load
const Partner = lazy(() => import("@/components/layout/Partner/Partner"));
const Services = lazy(() => import("@/components/services").then(mod => ({ default: mod.Services })));
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

// Loading component for better UX
const SectionLoader = () => (
  <div className="flex justify-center items-center py-16">
    <div className="animate-pulse bg-gray-200 h-32 w-full max-w-md rounded-lg"></div>
  </div>
);

// Home page component with optimized loading
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
        {/* Main content section with optimized loading */}
        <section className="text-center space-y-4">
          {/* Critical above-the-fold content */}
          <Header />
          
          {/* Lazy loaded sections */}
          <Suspense fallback={<SectionLoader />}>
            <Partner />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Services />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Steps />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Benefits />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Stories />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <FAQ />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Footer />
          </Suspense>
        </section>
      </div>
    </>
  );
}
