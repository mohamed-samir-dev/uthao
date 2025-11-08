import {QuoteDetailsProps } from "@/types";



export const QuoteDetails = ({ formData, pricing, t }: QuoteDetailsProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-2xl border border-blue-200">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Route details section */}
        <div>
          <h4 className="font-semibold text-lg text-gray-800 mb-4">{t.step3.routeDetails}</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>{t.step3.from}</span><span className="font-medium">{formData.origin}</span></div>
            <div className="flex justify-between"><span>{t.step3.to}</span><span className="font-medium">{formData.destination}</span></div>
            <div className="flex justify-between"><span>{t.step3.container}</span><span className="font-medium">{formData.cargoType}</span></div>
            <div className="flex justify-between"><span>{t.step3.weight}</span><span className="font-medium">{formData.weight} tons</span></div>
            <div className="flex justify-between"><span>{t.step3.priority}</span><span className="font-medium">{formData.priority}</span></div>
          </div>
        </div>
        {/* Cost breakdown section */}
        <div>
          <h4 className="font-semibold text-lg text-gray-800 mb-4">{t.step3.costBreakdown}</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>{t.step3.oceanFreight}</span><span>${pricing.oceanFreight.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>{t.step3.fuelSurcharge}</span><span>${pricing.fuelSurcharge.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>{t.step3.documentation}</span><span>${pricing.documentation}</span></div>
            <div className="flex justify-between"><span>{t.step3.portHandling}</span><span>${pricing.portHandling.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>{t.step3.insurance}</span><span>${pricing.insurance.toLocaleString()}</span></div>
            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-3">
              <span>{t.step3.totalCost}</span><span className="text-blue-600">${pricing.total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};