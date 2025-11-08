import { Ship, FileText, Shield } from "lucide-react";

import { ServiceFeaturesProps } from "@/types/index";


export const ServiceFeatures = ({ t }: ServiceFeaturesProps) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <div className="bg-white border-2 border-green-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
        <div className="text-green-600 mb-3">
          <Ship size={32} className="mx-auto" />
        </div>
        <h5 className="font-semibold text-gray-800">{t.step3.realTimeTracking}</h5>
        <p className="text-sm text-gray-600">{t.step3.trackingDesc}</p>
      </div>
      <div className="bg-white border-2 border-blue-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
        <div className="text-blue-600 mb-3">
          <FileText size={32} className="mx-auto" />
        </div>
        <h5 className="font-semibold text-gray-800">{t.step3.documentationTitle}</h5>
        <p className="text-sm text-gray-600">{t.step3.documentationDesc}</p>
      </div>
      <div className="bg-white border-2 border-purple-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
        <div className="text-purple-600 mb-3">
          <Shield size={32} className="mx-auto" />
        </div>
        <h5 className="font-semibold text-gray-800">{t.step3.insuranceTitle}</h5>
        <p className="text-sm text-gray-600">{t.step3.insuranceDesc}</p>
      </div>
    </div>
  );
};