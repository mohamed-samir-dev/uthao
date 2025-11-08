'use client'
import { lazy, Suspense } from 'react';
import Image from 'next/image';
import { Navigation } from "../Navigation/Navigation";
import { MobileMenu } from "../MobileMenu";

// Lazy load heavy components
const HeroSection = lazy(() => import("../HeroSection/HeroSection").then(mod => ({ default: mod.HeroSection })));

/**
 * Optimized Header component with better performance
 * Features optimized image loading and reduced animations
 */
export function Header() {
  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Optimized background image with Next.js Image */}
      <div className="absolute inset-0">
        <Image
          src="/1.webp"
          alt="Ocean logistics background"
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </div>
      
      {/* Navigation bar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4">
        <Navigation />
        <MobileMenu />
      </nav>
      
      {/* Main hero content with suspense */}
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-pulse text-white text-xl">Loading...</div>
        </div>
      }>
        <HeroSection />
      </Suspense>
    </header>
  );
}