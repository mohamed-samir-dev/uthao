'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { MenuItemProps } from "@/types";

export function MenuItem({ href, label, index, onClick }: MenuItemProps) {
  return (
    <motion.div 
      initial={{ x: 50, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ delay: index * 0.1 + 0.2 }}
    >
      <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
        <Link 
          href={href} 
          className="block text-white hover:text-blue-200 hover:bg-white/5 transition-all duration-300 font-medium py-2 px-3 rounded-lg" 
          onClick={onClick}
        >
          {label}
        </Link>
      </motion.div>
    </motion.div>
  );
}