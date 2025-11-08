"use client";
import { MapPin, Navigation, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import type { ScheduleFormProps } from '@/types';

export function ScheduleForm({ formData, onInputChange, errors }: ScheduleFormProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 mb-6 max-[1030px]:grid max-[1030px]:grid-cols-1 max-[1030px]:md:grid-cols-2 max-[1030px]:gap-4 max-[1030px]:space-y-0"
    >
      <motion.div whileHover={{ scale: 1.02 }} className="relative">
        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
        <input
          type="text"
          placeholder="Boston, US (BDCGP)"
          value={formData.from}
          onChange={(e) => onInputChange("from", e.target.value)}
          className="w-full pl-12 pr-4 py-2 md:py-3 text-sm md:text-base bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-all backdrop-blur-sm font-medium h-10 md:h-12"
        />
        {errors.from && <p className="text-red-400 text-sm mt-1">{errors.from}</p>}
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} className="relative">
        <Navigation className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
        <input
          type="text"
          placeholder="Singapore (SGSIN)"
          value={formData.to}
          onChange={(e) => onInputChange("to", e.target.value)}
          className="w-full pl-12 pr-4 py-2 md:py-3 text-sm md:text-base bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-all backdrop-blur-sm font-medium h-10 md:h-12"
        />
        {errors.to && <p className="text-red-400 text-sm mt-1">{errors.to}</p>}
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} className="relative">
        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => onInputChange("date", e.target.value)}
          style={{ fontSize: "16px", height: "48px" }}
          className="w-full pl-12 pr-4 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-white/40 focus:border-white/40 outline-none transition-all backdrop-blur-sm font-medium"
        />
        {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
      </motion.div>
    </motion.div>
  );
}