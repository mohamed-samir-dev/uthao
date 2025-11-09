import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { lazy } from "react";

// Lazy loaded components
const Services = lazy(() => import("@/components/services"));
const Footer = lazy(() => import("@/components/Footer"));
export const metadata: Metadata = {
  title: "Ocean Logistics Services | Global Shipping Solutions | Uthao",
  description:
    "Comprehensive ocean freight services with real-time tracking, flexible setup, and reliable global delivery. Optimize your supply chain with Uthao Ocean Contract.",
  keywords:
    "ocean contract, freight services, supply chain optimization, real-time tracking, global shipping, maritime logistics, cargo transport, allocation portal",
  openGraph: {
    title: "Ocean Logistics Services | Uthao",
    description:
      "Comprehensive ocean freight services with real-time tracking and flexible setup for global supply chain optimization.",
    images: ["/android-chrome-512x512.png"],
  },
  alternates: {
    canonical: "/page/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8  mb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Ocean Contract Logistics Services",
            description:
              "Comprehensive ocean freight services with real-time tracking, flexible setup, and reliable global delivery for supply chain optimization.",
            provider: {
              "@type": "Organization",
              name: "Uthao",
              url: "https://uthao-cwtk.vercel.app/page/services",
            },
            areaServed: "Worldwide",
            serviceType: "Ocean Freight and Logistics",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Ocean Logistics Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Real-time Tracking",
                    description:
                      "Access to real-time data on all your ocean lanes with Allocation Portal",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Flexible Setup",
                    description:
                      "Flexible ocean contract setup for optimized production and delivery",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Global Delivery",
                    description:
                      "Reliable global delivery solutions for time-critical goods",
                  },
                },
              ],
            },
          }),
        }}
      />
      <Services />
      <Footer/>
    </>
  );
}
