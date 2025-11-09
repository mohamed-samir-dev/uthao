"use client";

import {TestimonialContentProps} from '@/types'

const TestimonialContent = ({ onOpenModal }: TestimonialContentProps) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full px-3 sm:px-4 md:px-6 py-2 inline-block font-inter text-xs sm:text-sm font-medium">
        Success Stories
      </h3>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-inter">
        Delivering Growth Across Ocean Cargo
      </h2>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
        &ldquo;Working with Uthao was an outstanding experience. Their expertise in ocean cargo services impressed us deeply. The team delivered results that exceeded our expectations.&rdquo;
      </p>
      <div className="pt-2 sm:pt-4">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Mohammed Samier</h3>
        <p className="text-gray-400 text-sm mb-4 sm:mb-6">Developer of this site</p>
        <button 
          onClick={onOpenModal}
          className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-colors duration-300"
        >
          See Case Study
        </button>
      </div>
    </div>
  );
};

export default TestimonialContent;