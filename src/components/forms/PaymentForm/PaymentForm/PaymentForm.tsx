"use client";
import { motion } from "framer-motion";
import { PaymentFormProps } from '@/types';

export function PaymentForm({ activeTab }: PaymentFormProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-2xl"
    >
      <h3 className="text-white text-xl font-bold mb-4">Payment</h3>
      <div className="space-y-4">
        <div className="text-white">
          <p className="text-lg font-semibold mb-2">Order Summary:</p>
          <p>
            Service:{" "}
            {activeTab === "tracking" ? "Package Tracking" : "Route Booking"}
          </p>
          <p className="text-2xl font-bold text-green-400 mt-2">$25.00</p>
        </div>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/40 outline-none"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/40 outline-none"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/40 outline-none"
            />
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 font-semibold rounded-xl transition-colors"
        >
          Complete Payment
        </motion.button>
      </div>
    </motion.div>
  );
}