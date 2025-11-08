import { Metadata } from "next";
import {SEOConfig}from '@/types'

export function generateSEO({
  title,
  description,
  keywords = "ocean logistics, global shipping, freight forwarding, supply chain",
  image = "/android-chrome-512x512.png",
  url = "https://uthao-cwtk.vercel.app/",
  type = "website",
}: SEOConfig): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      type,
      title,
      description,
      images: [image],
      url,
      siteName: "Uthao",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export const defaultSEO = {
  title: "Uthao - Global Ocean Logistics & Shipping Solutions",
  description:
    "Navigate global trade with trusted ocean logistics. Professional shipping services, real-time tracking, and reliable worldwide delivery solutions.",
  keywords:
    "ocean logistics, global shipping, freight forwarding, supply chain management, cargo transport, international shipping, maritime logistics, container shipping",
  url: "https://uthao-cwtk.vercel.app/",
};