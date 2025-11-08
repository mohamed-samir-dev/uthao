"use client";
import { useShippingModalFooter } from "../../hooks/useShippingModalFooter";
import { ShippingModalFooterProps } from "../../types";

export const ShippingModalFooter = ({
  step, setStep, formData, onClose, showToastMessage
}: ShippingModalFooterProps) => {
  const { handleNext } = useShippingModalFooter(
    step, setStep, formData, onClose, showToastMessage
  );

  return (
    <div className="bg-gray-50 p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      {step > 1 ? (
        <button 
          onClick={() => setStep(step - 1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          ← Previous
        </button>
      ) : (
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          ← Cancel
        </button>
      )}
      
      <div className="text-sm text-gray-500 order-first sm:order-none">
        Step {step} of 4
      </div>
      
      <button 
        onClick={handleNext}
        className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        {step < 4 ? 'Continue →' : 'Close'}
      </button>
    </div>
  );
};