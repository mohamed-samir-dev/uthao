"use client";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";

const Services5 = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="relative">
              <div className="absolute space-y-20 inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
              <Image
                src="/9.webp"
                alt="Full Container Load - Professional shipping services"
                width={600}
                height={400}
                className="w-full h-[150px] sm:h-[400px] lg:h-[400px] object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="space-y-10 text-left sm:space-y-8 lg:space-y-10 bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg">
            <div className="space-y-15 space-x-20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                Expert advice & tailored solutions
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Expert guidance tailored to yours needs{" "}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Tailored solutions for real result{" "}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Innovative approaches for optimal outcomes{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services5;