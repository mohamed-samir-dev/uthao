import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // SEO optimizations
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  // Generate sitemap
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  // Headers for SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;