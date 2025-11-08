"use client";
import { Step1ShippingDetails } from "../../../Step1ShippingDetails";
import { Step2CompanyDetails } from "../../../Step2CompanyDetails";
import { Step3Quote } from "../../../Step3Quote";
import { Step4Confirmation } from "../../../Step4Confirmation";
import {ShippingModalStepsProps} from "../../types";


export const ShippingModalSteps = ({
  step,
  formData,
  handleInputChange,
  pricing,
  t,
  handleDownloadReceipt,
  handleTrackShipment,
}: ShippingModalStepsProps) => {
  return (
    <div className="p-4 sm:p-6 overflow-y-auto flex-1 min-h-0 bg-gradient-to-br from-gray-50/50 to-white">
      {step === 1 && (
        <Step1ShippingDetails
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 2 && (
        <Step2CompanyDetails
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 3 && (
        <Step3Quote formData={formData} pricing={pricing} t={t} />
      )}
      {step === 4 && (
        <Step4Confirmation
          handleDownloadReceipt={handleDownloadReceipt}
          handleTrackShipment={handleTrackShipment}
        />
      )}
    </div>
  );
};