
import {ProgressIndicatorProps}from '@/types'
export const ProgressIndicator = ({ step }: ProgressIndicatorProps) => {
  return (
    <div className="mt-4 sm:mt-6 lg:mt-8 flex items-center justify-center overflow-x-auto pb-2">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 flex-shrink-0 ${
              step >= i
                ? "bg-white text-blue-600 shadow-lg scale-110"
                : "bg-blue-500/50 text-white/80"
            }`}
          >
            {i}
          </div>
          {i < 4 && (
            <div
              className={`w-12 sm:w-16 lg:w-20 h-1 mx-2 sm:mx-3 rounded-full transition-all duration-500 flex-shrink-0 ${
                step > i ? "bg-white shadow-sm" : "bg-blue-500/30"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};