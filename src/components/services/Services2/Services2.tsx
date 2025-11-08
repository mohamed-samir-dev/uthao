"use client";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";

const Services2 = () => {
  return (
    <section className="w-full">
      <div className="w-full">
        <Image
          src="/Lucid_Origin_A_large_cargo_ship_docked_at_the_port_being_loade_0.webp"
          alt="Ocean Services"
          width={1200}
          height={400}
          className="w-full h-[300px] sm:h-[500px] lg:h-[600px] object-cover mt-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full px-4 sm:px-6 py-2 mb-4 inline-block font-playfair text-xs sm:text-sm font-medium">
            Ocean Services
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Ocean Freight Services
          </h2>
        </div>

        <div className="w-full h-px bg-black mb-8 sm:mb-12"></div>

        <div className="grid grid-cols-1 text-left lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Full Container Load (FCL)
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm sm:text-base">
                  Entire container used by one shipper
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm sm:text-base">
                  Faster and more secure than shared shipment
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm sm:text-base">
                  Cost effective for large or bulk cargo
                </span>
              </li>
            </ul>
            <div className="pt-2 sm:pt-4">
              <Button />
            </div>
          </div>

          <div className="order-first lg:order-last">
            <Image
              src="/6.webp"
              alt="Container Loading"
              width={500}
              height={350}
              className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;