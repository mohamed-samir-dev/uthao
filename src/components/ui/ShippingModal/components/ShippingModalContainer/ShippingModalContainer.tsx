"use client";
import { ModalBackdrop } from '../ModalBackdrop/ModalBackdrop';
import { ModalContainer } from '../ModalContainer/ModalContainer';
import { ShippingModalContent } from '../ShippingModalContent/ShippingModalContent';
import { ShippingModalFooter } from '../ShippingModalFooter/ShippingModalFooter';
import { useShippingModal } from "../../hooks/useShippingModal";
import { ShippingModalContainerProps } from "../../types";

export const ShippingModalContainer = ({
  isOpen,
  onClose,
}: ShippingModalContainerProps) => {
  const {
    step,
    setStep,
    formData,
    handleInputChange,
    pricing,
    t,
    showToastMessage,
    handleDownloadReceipt,
    handleTrackShipment,
  } = useShippingModal();

  if (!isOpen) return null;

  return (
    <ModalBackdrop>
      <ModalContainer>
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
      </ModalContainer>
    </ModalBackdrop>
  );
};
