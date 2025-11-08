'use client'

import { motion } from 'framer-motion'

/**
 * Animated section title for partners showcase
 * Features scale-in animation and responsive text sizing
 */
export const PartnerTitle = () => {
  return (
    // Animated title with scale entrance and hover effect
    <motion.h2 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="text-2xl font-bold text-center text-gray-600 mb-6 md:mb-8 lg:mb-12 max-[460px]:text-[20px] max-[366px]:text-[16px]"
    >
      Partners of World Leading Companies
    </motion.h2>
  )
}