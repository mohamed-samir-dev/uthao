'use client'
import { motion } from "framer-motion";

interface MenuToggleProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

export function MenuToggle({ isMenuOpen, onClick }: MenuToggleProps) {
  return (
    <motion.button 
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="max-[820px]:flex hidden z-10 flex-col justify-center items-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
    >
      <motion.span
        animate={{
          rotate: isMenuOpen ? 45 : 0,
          y: isMenuOpen ? 6 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block w-5 h-0.5 bg-white rounded-full"
      />
      <motion.span
        animate={{
          opacity: isMenuOpen ? 0 : 1,
          x: isMenuOpen ? -10 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="block w-5 h-0.5 bg-white rounded-full mt-1"
      />
      <motion.span
        animate={{
          rotate: isMenuOpen ? -45 : 0,
          y: isMenuOpen ? -6 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block w-5 h-0.5 bg-white rounded-full mt-1"
      />
    </motion.button>
  );
}