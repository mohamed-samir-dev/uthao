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
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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