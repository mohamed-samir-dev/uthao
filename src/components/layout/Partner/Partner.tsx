'use client'

import { lazy, Suspense } from 'react'
import { PartnerTitle } from '../../partners/PartnerTitle/PartnerTitle'
import { partnersData } from '@/data/partners'
import { useResponsive } from '@/hooks/useResponsive/useResponsive'

// Lazy load carousel for better performance
const PartnerCarousel = lazy(() => 
  import('../../partners/PartnerCarousel/PartnerCarousel/PartnerCarousel').then(mod => ({
    default: mod.PartnerCarousel
  }))
)

/**
 * Optimized Partners section with lazy loading
 * Displays company partners with mobile-optimized layout
 */
const Partner = () => {
  const { isMobile } = useResponsive()

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title component */}
        <PartnerTitle />
        {/* Lazy loaded partner carousel */}
        <Suspense fallback={
          <div className="flex justify-center items-center h-32">
            <div className="animate-pulse bg-gray-300 h-16 w-32 rounded"></div>
          </div>
        }>
          <PartnerCarousel partners={partnersData} isMobile={isMobile} />
        </Suspense>
      </div>
    </section>
  )
}

export default Partner