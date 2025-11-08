import { motion } from "framer-motion";
import {QuoteHeaderProps}from '@/types'


export const QuoteHeader = ({ title, subtitle }: QuoteHeaderProps) => {
  return (
    <motion.div 
      initial={{ x: 50, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      className="mb-6"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </motion.div>
  );
};