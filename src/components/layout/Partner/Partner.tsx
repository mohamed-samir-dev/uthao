'use client'

import { motion } from 'framer-motion'
import { lazy } from 'react'
import { partnersData } from '@/data/partners'
import { useResponsive } from '@/hooks/useResponsive/useResponsive'

// Lazy loaded components
const PartnerTitle = lazy(() => import('../../partners/PartnerTitle/PartnerTitle').then(module => ({ default: module.PartnerTitle })));
const PartnerCarousel = lazy(() => import('../../partners/PartnerCarousel/PartnerCarousel/PartnerCarousel').then(module => ({ default: module.PartnerCarousel })));

/**
 * Partners section with animated title and responsive carousel
 * Displays company partners with mobile-optimized layout
 */
const Partner = () => {
  const { isMobile } = useResponsive()

  return (
    // Animated section with slide-up entrance
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-8 md:py-12 lg:py-16 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title component */}
        <PartnerTitle />
        {/* Responsive partner carousel */}
        <PartnerCarousel partners={partnersData} isMobile={isMobile} />
      </div>
    </motion.section>
  )
}

export default Partner