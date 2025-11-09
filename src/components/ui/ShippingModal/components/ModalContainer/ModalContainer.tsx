"use client";
import { motion } from "framer-motion";

interface ModalContainerProps {
  children: React.ReactNode;
}

export const ModalContainer = ({ children }: ModalContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 50 }}
      className="bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-sm sm:max-w-8xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col backdrop-blur-sm mx-4 sm:mx-0 text-sm sm:text-base "
    >
      {children}
    </motion.div>
  );
};