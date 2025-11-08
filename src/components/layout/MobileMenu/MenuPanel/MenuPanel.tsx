'use client'
import { motion, AnimatePresence } from "framer-motion";
import { ROUTES } from "@/constants";
import { UserProfileMobile } from "../../../ui/UserProfileMobile";
import { MenuItem } from "../MenuItem";
import {MenuPanelProps}from '@/types'


export function MenuPanel({ isMenuOpen, onClose }: MenuPanelProps) {
  const menuItems = [
    { href: ROUTES.HOME, label: 'Home' },
    { href: ROUTES.Services, label: 'Services' },
    { href: ROUTES.Process, label: 'Process' },
    { href: ROUTES.Stories, label: 'Stories' },
    { href: ROUTES.Career, label: 'Career' }
  ];

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-19 right-1 w-64 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-teal-800/85 backdrop-blur-xl border-l border-white/10 shadow-2xl z-[99999] max-[820px]:block hidden rounded-bl-2xl"
        >
          <div className="p-4 pt-16">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <MenuItem 
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  index={index}
                  onClick={onClose}
                />
              ))}
              <motion.div 
                initial={{ x: 50, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ delay: 0.7 }} 
                className="pt-4"
              >
                <UserProfileMobile />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}