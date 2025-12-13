// Next.js imports and type definitions
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
// Layout components (currently commented out)
// import { Header } from '@/components/layout/Header';
// import { Footer } from '@/components/layout/Footer';
import { APP_CONFIG } from "@/constants";
import { AuthProvider } from "@/components/providers/SessionProvider";
import { PerformanceMonitor } from "@/components/seo/PerformanceMonitor";
import { LCPMonitor } from "@/components/seo/LCPMonitor";

// Font configurations with display swap for better LCP
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// SEO metadata configuration
export const metadata: Metadata = {
  title: {
    default: APP_CONFIG.name,
    template: "%s | Uthao - Ocean Logistics",
  },
  description: APP_CONFIG.description,
  keywords: APP_CONFIG.keywords,
  authors: [{ name: APP_CONFIG.author }],
  creator: APP_CONFIG.author,
  publisher: APP_CONFIG.author,
  metadataBase: new URL(APP_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: APP_CONFIG.locale,
    url: APP_CONFIG.url,
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
    siteName: "Uthao",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "Uthao - Global Ocean Logistics Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
    images: ["/android-chrome-512x512.png"],
    creator: "@uthao_logistics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Root layout component that wraps all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical hero image */}
        <link rel="preload" as="image" href="/1.webp" fetchPriority="high" />
        {/* Preload critical fonts */}
        <link rel="preload" href="/_next/static/media/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="any" />
        <link
          rel="icon"
          href="/android-chrome-192x192.png"
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        {/* Defer non-critical JSON-LD */}
        <script
          type="application/ld+json"
          defer
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Uthao",
              description:
                "Global ocean logistics and shipping solutions provider",
              url: "https://uthao-cwtk.vercel.app/",
              logo: "/android-chrome-512x512.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+201012486445",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://www.linkedin.com/in/mohammed-samier-mouawad/",
                "https://x.com/Mouawad18804",
              ],
              service: {
                "@type": "Service",
                name: "Ocean Logistics Services",
                description:
                  "Comprehensive ocean freight and logistics solutions",
                provider: {
                  "@type": "Organization",
                  name: "Mohammed Samier Mouawad",
                  url: "https://my-frontend-portfolio-five.vercel.app/",
                },
              },
            }),
          }}
        />
      </head>
      {/* Body with font variables and flex layout */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        {/* Authentication context provider */}
        <AuthProvider>
          {/* Performance monitoring */}
          <PerformanceMonitor />
          <LCPMonitor />
          {/* Global header (currently disabled) */}
          {/* <Header /> */}
          {/* Main content area */}
          <main className="flex-1">{children}</main>
          {/* Global footer (currently disabled) */}
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
