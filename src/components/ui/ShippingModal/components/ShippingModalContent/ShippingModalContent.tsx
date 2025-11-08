"use client";
import { ShippingModalHeader } from '../ShippingModalHeader/ShippingModalHeader';
import { ShippingModalSteps } from '../ShippingModalSteps/ShippingModalSteps';
import {ModalContentProps} from '../../types'


export const ShippingModalContent = ({
  step,
  formData,
  handleInputChange,
  pricing,
  t,
  onClose,
  handleDownloadReceipt,
  handleTrackShipment,
}: ModalContentProps) => {
  return (
    <>
      <ShippingModalHeader step={step} onClose={onClose} t={t} />
      <ShippingModalSteps
        step={step}
        formData={formData}
        handleInputChange={handleInputChange}
        pricing={pricing}
        t={t}
        handleDownloadReceipt={handleDownloadReceipt}
        handleTrackShipment={handleTrackShipment}
      />
    </>
  );
};
