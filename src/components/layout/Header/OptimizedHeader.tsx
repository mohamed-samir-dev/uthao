'use client'
import Image from "next/image";
import { Navigation } from "../Navigation/Navigation";
import { MobileMenu } from "../MobileMenu";
import { HeroSection } from "../HeroSection/HeroSection";

/**
 * Optimized Header component for better LCP performance
 * - Uses Next.js Image with priority prop
 * - Reduced animation delays
 * - Proper z-index layering
 */
export function OptimizedHeader() {
  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Hero background image with highest priority */}
      <Image
        src="/1.webp"
        alt="Global ocean logistics cargo ship at port"
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover object-center"
        loading="eager"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 " />
      
      {/* Navigation without animation to prevent hydration issues */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4">
        <Navigation />
        <MobileMenu />
      </nav>
      
      {/* Hero content */}
      <HeroSection />
    </header>
  );
}