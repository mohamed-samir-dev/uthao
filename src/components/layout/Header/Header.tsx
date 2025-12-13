'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "../Navigation/Navigation";
import { MobileMenu } from "../MobileMenu";
import { HeroSection } from "../HeroSection/HeroSection";

/**
 * Header component with animated background and navigation
 * Features full-screen hero section with gradient overlay and smooth entrance animations
 */
export function Header() {
  return (
    // Main header with background image and gradient overlay
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Hero background image with highest priority */}
      <Image
        src="/1.webp"
        alt="Global ocean logistics cargo ship"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-teal-700/60" />
      {/* Navigation bar with slide-down animation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-50 flex items-center justify-between px-6 py-4"
      >
        <Navigation />
        <MobileMenu />
      </motion.nav>
      
      {/* Main hero content */}
      <HeroSection />


    </motion.header>
  );
}