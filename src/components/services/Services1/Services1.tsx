"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button/Button";

const Services1 = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-8 text-left">
            <h3 className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full px-6 py-2 inline-block font-playfair text-sm font-medium">
              Service Overview
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair">
              Navigate global trade with trusted ocean logistics
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-playfair">
              Need to optimize production or deliver time-critical goods? Ocean
              Contract ensures a smoother supply chain with flexible setup,
              clear insights, and reliable global delivery.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-playfair">
              Ocean Contract provides you with access to real-time data on all
              your ocean lanes with its Allocation Portal.
            </p>
            <Button />
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/2.webp"
                alt="Ocean logistics service"
                className="rounded-2xl shadow-lg sm:col-span-2 w-full h-48 sm:h-64 object-cover"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/3.webp"
                alt="Global shipping network"
                className="rounded-2xl shadow-lg w-full h-40 sm:h-48 object-cover"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/4.webp"
                alt="Real-time tracking portal"
                className="rounded-2xl shadow-lg w-full h-40 sm:h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;