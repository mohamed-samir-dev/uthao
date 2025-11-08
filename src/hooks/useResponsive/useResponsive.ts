'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to detect mobile screen size
 * @returns {object} Object containing isMobile boolean
 */
export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if screen width is mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])
  
  return { isMobile }
}