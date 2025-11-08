"use client";
import { motion } from "framer-motion";
import type { FormToggleProps } from '@/types';

export function FormToggle({ activeTab, onTabChange, onToggle, text }: FormToggleProps) {
  // Simple toggle button mode
  if (onToggle && text) {
    return (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <button
          type="button"
          onClick={onToggle}
          className="text-white/80 hover:text-white transition-colors text-sm"
        >
          {text}
        </button>
      </motion.div>
    );
  }

  // Tab switching mode
  if (activeTab && onTabChange) {
    return (
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="mb-2 flex bg-white/10 backdrop-blur-sm rounded-xl p-1.5 w-full">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onTabChange("tracking")}
            className={`flex-1 py-2 md:py-3 text-sm md:text-base font-semibold rounded-lg transition-all ${
              activeTab === "tracking"
                ? "text-black bg-yellow-400 hover:bg-yellow-500"
                : "text-white bg-white/20"
            }`}
          >
            Tracking
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onTabChange("schedules")}
            className={`flex-1 py-2 md:py-3 text-sm md:text-base font-semibold rounded-lg transition-all ${
              activeTab === "schedules"
                ? "text-black bg-yellow-400 hover:bg-yellow-500"
                : "text-white bg-white/20"
            }`}
          >
            Schedules
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return null;
}