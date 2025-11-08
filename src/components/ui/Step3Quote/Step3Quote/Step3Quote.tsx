import { Step3QuoteProps } from "@/types";
import { QuoteHeader, QuoteDetails, ServiceFeatures } from "../index";

// Step 3: Quote display component showing shipping details and pricing breakdown
export const Step3Quote = ({ formData, pricing, t }: Step3QuoteProps) => {
  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <QuoteHeader title={t.step3.title} subtitle={t.step3.subtitle} />
      <QuoteDetails formData={formData} pricing={pricing} t={t} />
      <ServiceFeatures t={t} />
    </div>
  );
};