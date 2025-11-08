import Image from "next/image";
import { BenefitCardProps } from "@/types";



const BenefitCard = ({ benefit }: BenefitCardProps) => (
  <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
    <div className="mb-2 sm:mb-3 md:mb-4 flex justify-center">
      <Image
        src={benefit.icon}
        alt={benefit.alt}
        width={64}
        height={64}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
      />
    </div>
    <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
      {benefit.title}
    </h3>
  </div>
);

export default BenefitCard;