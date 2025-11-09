import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import Stories from "@/components/Stories";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
export const metadata: Metadata = generateSEO({
  title: "About Uthao | Leading Ocean Logistics Provider",
  description:
    "Learn about Uthao's mission to revolutionize global ocean logistics. Trusted by businesses worldwide for reliable shipping solutions and supply chain optimization.",
  keywords:
    "about uthao, ocean logistics company, shipping provider, maritime logistics, global trade solutions",
  url: "https://uthao-cwtk.vercel.app/page/about",
});

export default function StoriesPage() {
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
            "@type": "AboutPage",
            name: "About Uthao",
            description:
              "Learn about Uthao's mission to revolutionize global ocean logistics and shipping solutions.",
            url: "https://uthao-cwtk.vercel.app//page/about",
            mainEntity: {
              "@type": "Organization",
              name: "Uthao",
              description:
                "Leading provider of ocean logistics and shipping solutions worldwide",
              foundingDate: "2020",
              industry: "Logistics and Supply Chain",
              numberOfEmployees: "500+",
              areaServed: "Worldwide",
            },
          }),
        }}
      />
      <Stories />
      <Footer/>
    </>
  );
}
