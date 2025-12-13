'use client'
import { useEffect } from 'react';

/**
 * LCP Performance Monitor
 * Tracks Largest Contentful Paint and reports to console in development
 */
export function LCPMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') return;

    // Monitor LCP using PerformanceObserver
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { element?: Element; url?: string };
      
      if (lastEntry) {
        console.log('🚀 LCP Performance:', {
          value: `${Math.round(lastEntry.startTime)}ms`,
          element: lastEntry.element?.tagName || 'Unknown',
          url: lastEntry.url || 'N/A',
          target: lastEntry.startTime < 2500 ? '✅ Good' : '⚠️ Needs improvement'
        });
      }
    });

    try {
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {
      console.log('LCP monitoring not supported');
    }

    return () => observer.disconnect();
  }, []);

  return null;
}