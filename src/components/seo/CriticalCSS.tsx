'use client'

export function CriticalCSS() {
  return (
    <style jsx>{`
      /* Critical above-the-fold styles */
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .nav-container {
        position: relative;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1.5rem;
      }
      
      /* Preload critical fonts */
      @font-face {
        font-family: 'Geist';
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Playfair Display';
        font-display: swap;
      }
    `}</style>
  )
}