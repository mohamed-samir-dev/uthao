"use client";
import { lazy } from 'react';
import { useShippingModal } from "../../hooks/useShippingModal";
import { ShippingModalContainerProps } from "../../types";

// Lazy loaded components
const ModalBackdrop = lazy(() => import('../ModalBackdrop/ModalBackdrop').then(module => ({ default: module.ModalBackdrop })));
const ModalContainer = lazy(() => import('../ModalContainer/ModalContainer').then(module => ({ default: module.ModalContainer })));
const ShippingModalContent = lazy(() => import('../ShippingModalContent/ShippingModalContent').then(module => ({ default: module.ShippingModalContent })));
const ShippingModalFooter = lazy(() => import('../ShippingModalFooter/ShippingModalFooter').then(module => ({ default: module.ShippingModalFooter })));

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
