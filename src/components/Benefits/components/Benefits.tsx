import { BENEFITS } from "../data/benefits";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h3 className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full px-3 sm:px-4 md:px-6 py-2 inline-block font-playfair text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6">
            Key Benefits{" "}
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight font-playfair px-2">
            Benefits of Our Ocean Freight Services
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {BENEFITS.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;