/**
 * Critical CSS for above-the-fold content
 * Inlined to prevent render-blocking
 */
export function CriticalCSS() {
  return (
    <style jsx>{`
      /* Critical hero styles */
      .hero-container {
        position: relative;
        min-height: 100vh;
        overflow: hidden;
      }
      
      .hero-image {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      
      .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to bottom right,
          rgba(30, 58, 138, 0.8),
          rgba(30, 64, 175, 0.7),
          rgba(15, 118, 110, 0.6)
        );
      }
      
      .hero-content {
        position: relative;
        z-index: 10;
        display: flex;
        align-items: flex-end;
        min-height: calc(100vh - 80px);
        padding: 0 1.5rem;
      }
      
      .hero-title {
        font-size: clamp(1.875rem, 5vw, 4rem);
        font-weight: 700;
        color: white;
        line-height: 1.2;
        margin-bottom: 1rem;
      }
      
      @media (max-width: 1030px) {
        .hero-content {
          flex-direction: column;
          justify-content: center;
          padding: 3rem 1.5rem;
        }
      }
    `}</style>
  );
}