"use client";
import { motion } from "framer-motion";
import {ResultsDisplayProps} from '@/types'


export function ResultsDisplay({
  activeTab,
  formData,
  onProceedToPayment,
}: ResultsDisplayProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-2xl mt-4"
    >
      <h3 className="text-white text-xl font-bold mb-4">Search Results</h3>
      <div className="space-y-3 text-white">
        {activeTab === "tracking" ? (
          <p>
            <strong>Tracking Number:</strong> {formData.trackingNumber}
          </p>
        ) : (
          <>
            <p>
              <strong>From:</strong> {formData.from}
            </p>
            <p>
              <strong>To:</strong> {formData.to}
            </p>
            <p>
              <strong>Date:</strong> {formData.date}
            </p>
          </>
        )}
        <p className="text-green-400 font-semibold">
          ✓ Data processed successfully
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onProceedToPayment}
        className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 px-6 font-semibold rounded-xl transition-colors"
      >
        Proceed to Payment
      </motion.button>
    </motion.div>
  );
}