# Uthao - Global Ocean Logistics & Shipping Solutions

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://uthao-zeta.vercel.app/)

A modern, responsive web application for global ocean logistics and shipping solutions. Navigate global trade with trusted ocean logistics, professional shipping services, real-time tracking,and reliable worldwide delivery solutions.

## 🌐 Live Demo

**Production:** [https://uthao-7o3c.vercel.app/](https://uthao-zeta.vercel.app/)

## 📸 Screenshots

<table>
  <tr>
    <td align="center">
      <h3>🖥️ Desktop View</h3>
      <img src="./public/screencapture-desktop.webp" alt="Desktop Homepage" width="400"/>
      <br/>
      <em>Homepage showcasing our comprehensive logistics solutions with modern UI design</em>
    </td>
    <td align="center">
      <h3>📱 Mobile View</h3>
      <img src="./public/Screenshot Mobile.png" alt="Mobile Homepage" width="200"/>
      <br/>
      <img src="./public/Screenshot 2025-11-09 000341.png" alt="Mobile View 2" width="200"/>
      <br/>
      <img src="./public/Screenshot 2025-11-09 000349.png" alt="Mobile View 3" width="200"/>
            <br/>
<img src="./public/Screenshot 2025-11-09 001303.png" alt="Mobile View 3" width="200"/>
<br/>
<img src="./public/Screenshot 2025-11-09 001310.png" alt="Mobile View 3" width="200"/>
      <br/>
<img src="./public/Screenshot 2025-11-09 001316.png" alt="Mobile View 3" width="200"/>
     <br/>
      <em>Responsive mobile interface optimized for all devices</em>
    </td>

  </tr>
</table>

## ✨ Key Features

### 🚢 Core Services

- **Ocean Contract Logistics** - Comprehensive freight forwarding services
- **Real-time Shipment Tracking** - Monitor cargo worldwide with live updates
- **Global Port Coverage** - Extensive network across major shipping routes
- **Supply Chain Management** - End-to-end logistics optimization
- **Container Shipping** - Full and LCL container services

### 💻 Technical Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Fast Performance** - Built with Next.js 15 and Turbopack for optimal speed
- **SEO Optimized** - Complete meta tags, structured data, and sitemap
- **Secure Authentication** - Local authentication with email/password
- **Modern Animations** - Smooth Framer Motion transitions
- **Progressive Web App** - PWA capabilities with offline support

### 🎨 User Experience

- **Interactive Forms** - Multi-step shipping quote calculator
- **Partner Showcase** - Trusted global logistics partners
- **Success Stories** - Client testimonials and case studies
- **FAQ Section** - Comprehensive help and support
- **Contact Integration** - Multiple communication channels

## 🛠️ Tech Stack

### Frontend Framework

- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5.x** - Type-safe development

### Styling & UI

- **Tailwind CSS 4.x** - Utility-first CSS framework
- **Framer Motion 12.x** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icons
- **Custom Fonts** - Geist Sans, Geist Mono, Playfair Display

### Authentication & Security

- **Local Authentication** - Email/password based authentication
- **Security Headers** - XSS protection, content security

### Development Tools

- **Turbopack** - Ultra-fast bundler for development
- **ESLint 9** - Code linting and formatting
- **Jest** - Unit testing framework
- **PostCSS** - CSS processing and optimization

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js 18+** (LTS recommended)
- **npm**, **yarn**, **pnpm**, or **bun**
- **Git** for version control

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/mohamed-samir-dev/uthao.git
cd uthao
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

4. **Start development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Architecture

```
src/
│   ├── login/             # Authentication pages
│   ├── page/              # Additional pages
│   │   ├── services/      # Services showcase
│   │   ├── career/        # Career opportunities
│   │   ├── Steps/         # Process workflow
│   │   └── Stories/       # Success stories
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # XML sitemap
├── components/            # Reusable components
│   ├── Benefits/          # Benefits showcase
│   ├── FAQ/               # Frequently asked questions
│   ├── Footer/            # Footer components
│   ├── forms/             # Form components
│   ├── layout/            # Layout components
│   ├── partners/          # Partner logos
│   ├── providers/         # Context providers
│   ├── seo/               # SEO components
│   ├── services/          # Service sections
│   ├── Steps/             # Process steps
│   ├── Stories/           # Testimonials
│   └── ui/                # UI components
├── constants/             # Application constants
├── data/                  # Static data
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── types/                 # TypeScript definitions
└── utils/                 # Helper functions
```

## 🔧 Available Scripts

| Command              | Description                             |
| -------------------- | --------------------------------------- |
| `npm run dev`        | Start development server with Turbopack |
| `npm run build`      | Build production application            |
| `npm run start`      | Start production server                 |
| `npm run lint`       | Run ESLint code analysis                |
| `npm run test`       | Execute Jest test suite                 |
| `npm run test:watch` | Run tests in watch mode                 |

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**

   - Push code to GitHub
   - Import project in [Vercel Dashboard](https://uthao-zeta.vercel.app/)
   - Configure environment variables
   - Deploy automatically

2. **Environment Variables**
   ```
   # No external authentication variables needed
   # Local authentication uses localStorage
   ```

### Alternative Platforms

- **Netlify**: Use Next.js build adapter
- **AWS Amplify**: Deploy with SSR support
- **Docker**: Containerized deployment
- **Railway**: Simple deployment platform

## 🔒 Security Features

- **Content Security Policy** - XSS protection
- **Security Headers** - OWASP recommended headers
- **Authentication** - Secure local authentication
- **Input Validation** - Form data sanitization
- **HTTPS Enforcement** - Secure data transmission

## 📊 Performance Optimizations

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic bundle splitting
- **Lazy Loading** - Component-level lazy loading
- **Caching Strategy** - Optimized caching headers
- **Turbopack** - Ultra-fast development builds

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure responsive design compatibility

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **Website**: [https://uthao-7o3c.vercel.app/](https://uthao-zeta.vercel.app/)
- **Email**: mohammedsamiermouawad@gmail.com
- **LinkedIn**: [Mohammed Samier Mouawad](https://www.linkedin.com/in/mohammed-samier-mouawad/)
- **Portfolio**: [Frontend Portfolio](https://my-frontend-portfolio-five.vercel.app/)

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) - Amazing React framework
- [Vercel](https://vercel.com/) - Seamless deployment platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready animations
- [Lucide](https://lucide.dev/) - Beautiful icon library

## 📈 Project Stats

- **Performance Score**: 95+ (Lighthouse)
- **SEO Score**: 100 (Lighthouse)
- **Accessibility**: 98+ (Lighthouse)
- **Best Practices**: 100 (Lighthouse)

---

<div align="center">
  <strong>🌊 Navigate Global Trade with Confidence 🚢</strong>
  <br><br>
  Built with ❤️ by <a href="https://www.linkedin.com/in/mohammed-samier-mouawad/">Mohammed Samier Mouawad</a>
</div>
