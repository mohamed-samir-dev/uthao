'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {PartnerLogoProps} from '@/types/index'

/**
 * Animated partner logo component with hover effects
 * Features staggered entrance animation and interactive hover state
 */
export const PartnerLogo = ({ src, index }: PartnerLogoProps) => {
  return (
    <motion.div 
      // Fade in from bottom with staggered delay based on index
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay: index * 0.01 }}
      // Scale up and lift on hover
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex-shrink-0"
    >
      <Image
        src={src}
        alt="Partner logo"
        width={120}
        height={48}
        className="h-6 sm:h-7 md:h-8 w-auto"
      />
    </motion.div>
  )
}