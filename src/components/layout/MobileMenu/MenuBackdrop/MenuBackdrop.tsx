'use client'
import { motion, AnimatePresence } from "framer-motion";
import {MenuBackdropProps}from '@/types'


export function MenuBackdrop({ isMenuOpen, onClose }: MenuBackdropProps) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/50 to-teal-800/40 backdrop-blur-md z-[99998] max-[820px]:block hidden"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}