import { X } from "lucide-react";
import {HeaderContentProps}from '@/types'

export const HeaderContent = ({ title, subtitle, onClose }: HeaderContentProps) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          {title}
        </h2>
        <p className="text-blue-100 mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg font-medium">
          {subtitle}
        </p>
      </div>
      <button
        onClick={onClose}
        className="text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
      >
        <X size={28} />
      </button>
    </div>
  );
};