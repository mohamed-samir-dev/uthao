import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { lazy } from "react";

// Lazy loaded components
const Footer = lazy(() => import("@/components/Footer"));
const Benefits = lazy(() => import("@/components/Benefits"));
const Stories = lazy(() => import("@/components/Stories"));


export const metadata: Metadata = generateSEO({
  title: "Careers at Uthao | Join Our Ocean Logistics Team",
  description:
    "Join Uthao's global team and build your career in ocean logistics. Explore opportunities in shipping, supply chain, and maritime operations worldwide.",
  keywords:
    "uthao careers, logistics jobs, shipping careers, maritime jobs, supply chain careers, ocean freight jobs",
  url: "https://uthao-cwtk.vercel.app/page/career",
});

export default function CareerPage() {
  return (
    <>
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
            "@type": "WebPage",
            name: "Careers at Uthao",
            description:
              "Join Uthao's global team and build your career in ocean logistics and shipping.",
            url: "https://uthao-cwtk.vercel.app/page/career",
            mainEntity: {
              "@type": "Organization",
              name: "Uthao",
              hiringOrganization: {
                "@type": "Organization",
                name: "Uthao",
              },
            },
          }),
        }}
      />
      <Benefits/>
      <Stories/>
      <Footer />
     
    </>
  );
}

