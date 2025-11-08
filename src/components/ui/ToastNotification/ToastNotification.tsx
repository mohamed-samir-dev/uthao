"use client";
import { motion, AnimatePresence } from "framer-motion";
import {ToastProps} from "@/types"

/**
 * Animated toast notification component with success/error states
 * Displays temporary messages with slide-up animation and manual close option
 */
export const ToastNotification = ({ showToast, toastMessage, toastType, onClose }: ToastProps) => {
  return (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-4 rounded-2xl shadow-2xl max-w-sm sm:max-w-md z-60 mx-4 sm:mx-0 ${
            // Dynamic styling based on toast type
            toastType === "success" 
              ? "bg-gradient-to-r from-green-500 to-green-600 text-white" 
              : "bg-gradient-to-r from-red-500 to-red-600 text-white"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="font-medium text-sm leading-relaxed">{toastMessage}</p>
            </div>
            {/* Manual close button */}
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white text-lg leading-none"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};