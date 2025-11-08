// Application configuration constants
export const APP_CONFIG = {
  name: "Uthao",
  description: "Navigate global trade with trusted ocean logistics. Professional shipping services, real-time tracking, and reliable worldwide delivery solutions for your business.",
  version: "1.0.0",
  url: "https://uthao-cwtk.vercel.app/",
  keywords: "ocean logistics, global shipping, freight forwarding, supply chain, cargo transport, international shipping, maritime logistics, container shipping",
  author: "Mohammed Samier Mouawad",
  type: "website",
  locale: "en_US",
} as const;

// API endpoint routes
export const API_ROUTES = {
  AUTH: "/api/auth",
} as const;

// Application page routes
export const ROUTES = {
  HOME: "/",
  Services: "/page/services",
  Process: "/page/Steps",
  Stories: "/page/Stories",
  Career: "/page/career",
  LOGIN: "/login",
  login: "/login", 
  REGISTER: "/login",
} as const;
