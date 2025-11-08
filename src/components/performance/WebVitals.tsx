'use client'

import { useEffect } from 'react'

/**
 * Web Vitals monitoring component
 * Tracks Core Web Vitals metrics for performance optimization
 */
export function WebVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }
  }, [])

  return null
}