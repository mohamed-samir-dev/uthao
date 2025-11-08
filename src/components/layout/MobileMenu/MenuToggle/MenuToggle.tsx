'use client'
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {MenuToggleProps}from '@/types'

export function MenuToggle({ isMenuOpen, onClick }: MenuToggleProps) {
  return (
    <motion.button 
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="max-[820px]:block hidden z-10 text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isMenuOpen ? 'close' : 'menu'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}