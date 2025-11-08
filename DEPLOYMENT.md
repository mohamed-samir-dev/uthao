# Deployment Guide

## 🚀 Uthao Deployment Documentation

This guide provides comprehensive instructions for deploying the Uthao application across different platforms and environments.

## 📋 Prerequisites

### System Requirements
- **Node.js**: 18.x or higher (LTS recommended)
- **npm/yarn/pnpm**: Latest stable version
- **Git**: For version control
- **Domain**: For production deployment (optional)

### Environment Setup
- Google OAuth credentials
- Environment variables configured
- SSL certificate (handled by platforms)

## 🌐 Platform Deployments

### Vercel (Recommended)

Vercel provides the best experience for Next.js applications with automatic optimizations.

#### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mohamed-samir-dev/uthao)

#### Manual Deployment

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy from project directory**
```bash
cd uthao
vercel
```

4. **Follow the prompts**
```
? Set up and deploy "~/uthao"? [Y/n] y
? Which scope do you want to deploy to? [Your Account]
? Link to existing project? [y/N] n
? What's your project's name? uthao
? In which directory is your code located? ./
```

#### Environment Variables

Set these in Vercel Dashboard → Project → Settings → Environment Variables:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your_secure_random_string
```

#### Custom Domain

1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Update `NEXTAUTH_URL` to your custom domain

### Netlify

#### Deploy via Git

1. **Connect Repository**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add the same variables as Vercel

#### Deploy via CLI

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build and Deploy**
```bash
npm run build
netlify deploy --prod --dir=.next
```

### AWS Amplify

#### Console Deployment

1. **Create New App**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your repository

2. **Build Settings**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

3. **Environment Variables**
   - Add in App Settings → Environment Variables

### Railway

#### Deploy via CLI

1. **Install Railway CLI**
```bash
npm install -g @railway/cli
```

2. **Login and Deploy**
```bash
railway login
railway init
railway up
```

3. **Environment Variables**
```bash
railway variables set GOOGLE_CLIENT_ID=your_client_id
railway variables set GOOGLE_CLIENT_SECRET=your_client_secret
railway variables set NEXTAUTH_URL=https://your-app.railway.app
railway variables set NEXTAUTH_SECRET=your_secret
```

### DigitalOcean App Platform

#### App Spec Configuration

```yaml
name: uthao
services:
- name: web
  source_dir: /
  github:
    repo: your-username/uthao
    branch: main
  run_command: npm start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: GOOGLE_CLIENT_ID
    value: your_client_id
  - key: GOOGLE_CLIENT_SECRET
    value: your_client_secret
  - key: NEXTAUTH_URL
    value: https://your-app.ondigitalocean.app
  - key: NEXTAUTH_SECRET
    value: your_secret
```

## 🐳 Docker Deployment

### Dockerfile

```dockerfile
# Use the official Node.js image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
version: '3.8'

services:
  uthao:
    build: .
    ports:
      - "3000:3000"
    environment:
      - GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}
      - GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET}
      - NEXTAUTH_URL=${NEXTAUTH_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - uthao
    restart: unless-stopped
```

### Build and Run

```bash
# Build the image
docker build -t uthao .

# Run the container
docker run -p 3000:3000 \
  -e GOOGLE_CLIENT_ID=your_client_id \
  -e GOOGLE_CLIENT_SECRET=your_client_secret \
  -e NEXTAUTH_URL=http://localhost:3000 \
  -e NEXTAUTH_SECRET=your_secret \
  uthao

# Or use docker-compose
docker-compose up -d
```

## ☁️ Cloud Provider Specific

### Google Cloud Platform

#### Cloud Run Deployment

1. **Build and Push to Container Registry**
```bash
# Build for Cloud Run
docker build -t gcr.io/PROJECT_ID/uthao .

# Push to registry
docker push gcr.io/PROJECT_ID/uthao
```

2. **Deploy to Cloud Run**
```bash
gcloud run deploy uthao \
  --image gcr.io/PROJECT_ID/uthao \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars GOOGLE_CLIENT_ID=your_client_id,GOOGLE_CLIENT_SECRET=your_client_secret
```

### Microsoft Azure

#### Azure Container Instances

```bash
# Create resource group
az group create --name uthao-rg --location eastus

# Deploy container
az container create \
  --resource-group uthao-rg \
  --name uthao-app \
  --image your-registry/uthao:latest \
  --dns-name-label uthao-app \
  --ports 3000 \
  --environment-variables \
    GOOGLE_CLIENT_ID=your_client_id \
    GOOGLE_CLIENT_SECRET=your_client_secret
```

## 🔧 Configuration

### Next.js Configuration

```typescript
// next.config.ts
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  
  // Optimize images
  images: {
    domains: ['your-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Security headers
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
    ]
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
```

### Environment Variables

#### Development (.env.local)
```env
GOOGLE_CLIENT_ID=your_development_client_id
GOOGLE_CLIENT_SECRET=your_development_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=development_secret_key
```

#### Production (.env.production)
```env
GOOGLE_CLIENT_ID=your_production_client_id
GOOGLE_CLIENT_SECRET=your_production_client_secret
NEXTAUTH_URL=https://your-production-domain.com
NEXTAUTH_SECRET=secure_production_secret_key
```

### Google OAuth Setup

1. **Create Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create new project or select existing

2. **Enable Google+ API**
   - Navigate to APIs & Services → Library
   - Search for "Google+ API" and enable it

3. **Create OAuth Credentials**
   - Go to APIs & Services → Credentials
   - Click "Create Credentials" → "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (development)
     - `https://your-domain.com/api/auth/callback/google` (production)

## 🔍 Monitoring & Analytics

### Performance Monitoring

```typescript
// pages/_app.tsx or app/layout.tsx
export function reportWebVitals(metric: NextWebVitalsMetric) {
  // Send to analytics service
  if (process.env.NODE_ENV === 'production') {
    // Google Analytics, Vercel Analytics, etc.
    console.log(metric)
  }
}
```

### Error Tracking

```typescript
// Sentry integration example
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
})
```

## 🚨 Troubleshooting

### Common Issues

#### Build Failures

**Issue**: `Module not found` errors
```bash
# Solution: Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Issue**: TypeScript errors
```bash
# Solution: Check TypeScript configuration
npx tsc --noEmit
```

#### Authentication Issues

**Issue**: OAuth redirect mismatch
- Check `NEXTAUTH_URL` matches your domain
- Verify Google OAuth redirect URIs
- Ensure HTTPS in production

**Issue**: Session not persisting
- Check `NEXTAUTH_SECRET` is set
- Verify cookie settings
- Check domain configuration

#### Performance Issues

**Issue**: Slow loading times
- Enable image optimization
- Check bundle size: `npm run build`
- Implement code splitting
- Use CDN for static assets

### Debug Mode

```bash
# Enable debug logging
DEBUG=* npm run dev

# Next.js specific debugging
DEBUG=next:* npm run dev
```

## 📊 Performance Optimization

### Build Optimization

```json
// package.json
{
  "scripts": {
    "build": "next build",
    "analyze": "ANALYZE=true next build",
    "start": "next start -p $PORT"
  }
}
```

### Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Analyze bundle
npm run analyze
```

## 🔄 CI/CD Pipeline

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build application
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'

## 📞 Support

For deployment issues:

- **Email**: mohammedsamiermouawad@gmail.com
- **Documentation**: Check README.md and this guide
- **Issues**: Create GitHub issue with deployment details

---

**Last Updated**: January 12, 2025
**Version**: 1.0.0