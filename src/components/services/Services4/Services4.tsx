"use client";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";

const Services4 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 mt-18 text-left lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        <div className="h-[300px] sm:h-[350px] lg:h-[400px] flex flex-col justify-center space-y-6 sm:space-y-8 lg:space-y-10 bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Sustainable deliveries & collections
          </h2>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 text-sm sm:text-base">
                Eco-friendly vehicles for low emissions
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 text-sm sm:text-base">
                Consolidated shipments to reduce trips
              </span>
            </li>
          </ul>
          <div className="pt-2 sm:pt-4">
            <Button />
          </div>
        </div>

        <div className="order-first lg:order-last relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl transform rotate-3 opacity-20"></div>
          <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
            <Image
              src="/8.webp"
              alt="Sustainable container loading with eco-friendly logistics solutions"
              width={600}
              height={400}
              className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-xl"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌍</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services4;