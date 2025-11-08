'use client'
import Link from "next/link";
import { APP_CONFIG, ROUTES } from "@/constants";
import { motion } from "framer-motion";
import { UserProfileDesktop } from "../../ui/UserProfileDesktop";

/**
 * Desktop navigation with animated logo, menu items, and user profile
 * Features staggered animations and hover effects for enhanced UX
 */
export function Navigation() {
  return (
    <>
      {/* Brand logo with scale animation */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={ROUTES.HOME} className="text-2xl font-bold text-white hover:text-blue-200 transition-colors">
          {APP_CONFIG.name}
        </Link>
      </motion.div>

      {/* Main navigation menu with backdrop blur */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hidden min-[821px]:flex backdrop-blur-md rounded-lg p-3 border border-white/30 shadow-lg"
      >
        <ul className="flex items-center gap-8 text-white">
          {/* Navigation links with staggered drop-down animation */}
          {[
            { href: ROUTES.HOME, label: 'Home' },
            { href: ROUTES.Services, label: 'Services' },
            { href: ROUTES.Process, label: 'Process' },
            { href: ROUTES.Stories, label: 'Stories' },
            { href: ROUTES.Career, label: 'Career' }
          ].map((item, index) => (
            <motion.li key={item.label} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 + index * 0.1 }}>
              <motion.div whileHover={{ y: -2 }}>
                <Link href={item.href} className="hover:text-blue-200 transition-colors font-medium px-4 py-2">
                  {item.label}
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* User profile section with slide-in animation */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="hidden min-[821px]:flex items-center"
      >
        <UserProfileDesktop />
      </motion.div>
    </>
  );
}