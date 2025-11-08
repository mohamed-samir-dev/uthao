"use client";
import { motion } from "framer-motion";
import {UserDropdownProps}from '@/types'


export function UserDropdown({ onSignOut }: UserDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full mt-2 left-0 right-0 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-2 z-50"
    >
      <motion.button
        onClick={onSignOut}
        whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
        className="w-full text-left px-4 py-3 text-red-400 hover:text-red-300 rounded-lg transition-colors font-medium text-sm flex items-center gap-3"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        Sign Out
      </motion.button>
    </motion.div>
  );
}