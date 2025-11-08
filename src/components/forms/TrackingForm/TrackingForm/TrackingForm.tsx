"use client";
import { Package } from "lucide-react";
import { motion } from "framer-motion";
import type { TrackingFormProps } from '@/types';

export function TrackingForm({ trackingNumber, onInputChange, error }: TrackingFormProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 mb-6"
    >
      <motion.div whileHover={{ scale: 1.02 }} className="relative">
        <Package className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
        <input
          type="text"
          placeholder="Enter tracking number"
          value={trackingNumber}
          onChange={(e) => onInputChange("trackingNumber", e.target.value)}
          className="w-full pl-12 pr-4 py-2 md:py-3 text-sm md:text-base bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-all backdrop-blur-sm font-medium h-10 md:h-12"
        />
        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
      </motion.div>
    </motion.div>
  );
}