'use client'

import { useEffect } from 'react'

/**
 * Web Vitals monitoring component
 * Tracks Core Web Vitals metrics for performance optimization
 */
export function WebVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(console.log)
        onFID(console.log)
        onFCP(console.log)
        onLCP(console.log)
        onTTFB(console.log)
      })
    }
  }, [])

  return null
}