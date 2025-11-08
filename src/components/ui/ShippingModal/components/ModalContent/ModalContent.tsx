"use client";
import { ShippingModalContent } from "../ShippingModalContent/ShippingModalContent";
import { ShippingModalFooter } from "../ShippingModalFooter/ShippingModalFooter";
import {ModalContentProps} from "../../types";

export const ModalContent = ({
  step,
  setStep,
  formData,
  handleInputChange,
  pricing,
  t,
  onClose,
  showToastMessage,
  handleDownloadReceipt,
  handleTrackShipment,
}: ModalContentProps) => {
  return (
    <>
      <ShippingModalContent
        step={step}
        setStep={setStep}
        formData={formData}
        handleInputChange={handleInputChange}
        pricing={pricing}
        t={t}
        onClose={onClose}
        showToastMessage={showToastMessage}
        handleDownloadReceipt={handleDownloadReceipt}
        handleTrackShipment={handleTrackShipment}
      />
      <ShippingModalFooter
        step={step}
        setStep={setStep}
        formData={formData}
        onClose={onClose}
        showToastMessage={showToastMessage}
      />
    </>
  );
};