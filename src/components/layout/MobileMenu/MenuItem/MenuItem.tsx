'use client'
import { motion } from "framer-motion";
import { MenuItemProps } from "@/types";

export function MenuItem({ href, label, index, onClick }: MenuItemProps) {
  const handleClick = () => {
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    onClick?.();
  };

  return (
    <motion.div 
      initial={{ x: 50, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ delay: index * 0.1 + 0.2 }}
    >
      <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
        <button 
          onClick={handleClick}
          className="block w-full text-left text-white hover:text-blue-200 hover:bg-white/5 transition-all duration-300 font-medium py-2 px-3 rounded-lg"
        >
          {label}
        </button>
      </motion.div>
    </motion.div>
  );
}