"use client";
import { motion } from "framer-motion";
import { FormToggle } from "../../FormToggle";
import { TrackingForm } from "../../TrackingForm";
import { ScheduleForm } from "../../ScheduleForm/ScheduleForm/ScheduleForm";
import { SearchButton } from "../../SearchButton/SearchButton/SearchButton";
import {SearchFormCardProps}from '@/types'


export function SearchFormCard({
  activeTab,
  formData,
  errors,
  onTabChange,
  onInputChange,
  onSearch,
}: SearchFormCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      whileHover={{ scale: 1.02 }}
      className="backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-2xl relative z-10"
    >
      <FormToggle activeTab={activeTab} onTabChange={onTabChange} />

      {activeTab === "tracking" ? (
        <TrackingForm
          trackingNumber={formData.trackingNumber}
          onInputChange={onInputChange}
          error={errors.trackingNumber}
        />
      ) : (
        <ScheduleForm
          formData={formData}
          onInputChange={onInputChange}
          errors={errors}
        />
      )}

      <SearchButton activeTab={activeTab} onSearch={onSearch} />
    </motion.div>
  );
}