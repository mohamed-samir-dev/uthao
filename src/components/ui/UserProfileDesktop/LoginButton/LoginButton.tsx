"use client";
import { motion } from "framer-motion";

export function LoginButton() {
  return (
    <motion.a
      href="/login"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-red-600 hover:bg-red-700 text-white border-none px-6 py-3 rounded-lg font-semibold transition-colors"
    >
      Get Started
    </motion.a>
  );
}