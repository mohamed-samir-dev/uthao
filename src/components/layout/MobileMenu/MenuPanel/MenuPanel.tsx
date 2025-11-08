'use client'
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ROUTES } from "@/constants";
import { UserProfileMobile } from "../../../ui/UserProfileMobile";
import { MenuItem } from "../MenuItem";

interface MenuPanelProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

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
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl z-[99999] max-[820px]:block hidden"
        >
          <div className="p-6">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
            
            <div className="mt-16 space-y-6">
              {menuItems.map((item, index) => (
                <MenuItem 
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  index={index}
                  onClick={onClose}
                />
              ))}
              
              <div className="pt-6 border-t border-white/20">
                <UserProfileMobile />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}