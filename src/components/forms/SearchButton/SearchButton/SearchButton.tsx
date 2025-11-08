"use client";
import { motion } from "framer-motion";
import { SearchButtonProps } from '@/types';

export function SearchButton({ activeTab, onSearch }: SearchButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onSearch}
      style={{ fontSize: "16px", height: "48px" }}
      className={`bg-red-600 hover:bg-red-700 text-white border-none px-6 font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl ${
        activeTab === "schedules" ? "max-[1030px]:md:col-span-2" : "w-full"
      }`}
    >
      {activeTab === "tracking" ? "Track Package" : "Search Routes"}
    </motion.button>
  );
}