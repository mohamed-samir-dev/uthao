'use client'

import { motion } from 'framer-motion'
import { PartnerLogo } from '../../PartnerLogo/PartnerLogo'
import type { PartnerCarouselProps } from '@/types'

/**
 * Infinite scrolling carousel for partner logos
 * Features responsive animation speed and seamless loop
 */
export const PartnerCarousel = ({ partners, isMobile }: PartnerCarouselProps) => {
  return (
    <div className="relative">
      {/* Infinite horizontal scrolling animation */}
      <motion.div 
        animate={{ x: ["50%", "-100%"] }}
        transition={{ duration: isMobile ? 15 : 30, repeat: Infinity, ease: "linear" }}
        className="flex space-x-8 sm:space-x-12 md:space-x-16"
      >
        {/* Duplicate partners array for seamless infinite scroll */}
        {[...partners, ...partners].map((src, index) => (
          <PartnerLogo key={index} src={src} index={index} />
        ))}
      </motion.div>
    </div>
  )
}