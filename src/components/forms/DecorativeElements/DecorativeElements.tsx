"use client";
import { motion } from "framer-motion";

export function DecorativeElements() {
  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-16 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-12 backdrop-blur-lg rounded-full border border-white/30 shadow-md"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 2.2 }}
        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-8 backdrop-blur-xl rounded-full border border-white/40 shadow-sm"
      />
    </>
  );
}