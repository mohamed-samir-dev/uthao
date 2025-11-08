import { FormData } from '../forms/shipping';
import { Pricing } from '../business/shipping';
import { TranslationFunction } from '../i18n/translations';

// Props for main shipping modal component
export interface ShippingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Props for Step 1 shipping details component
export interface Step1Props {
  formData: {
    origin: string;
    destination: string;
    cargoType: string;
    weight: string;
    shipDate: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

// Props for Step 2 company details component
export interface Step2Props {
  formData: {
    company: string;
    contact: string;
    email: string;
    phone: string;
    priority: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

// Props for Step 3 quote component
export interface Step3QuoteProps {
  formData: FormData;
  pricing: Pricing;
  t: TranslationFunction;
}

// Props for Step 4 confirmation component
export interface Step4Props {
  pricing: {
    total: number;
  };
  handleDownloadReceipt: () => void;
  handleTrackShipment: () => void;
}

// Translation structure for step 3 quote
export interface Translations {
  step3: {
    title: string;
    subtitle: string;
    routeDetails: string;
    costBreakdown: string;
    from: string;
    to: string;
    container: string;
    weight: string;
    priority: string;
    oceanFreight: string;
    fuelSurcharge: string;
    documentation: string;
    portHandling: string;
    insurance: string;
    totalCost: string;
    realTimeTracking: string;
    trackingDesc: string;
    documentationTitle: string;
    documentationDesc: string;
    insuranceTitle: string;
    insuranceDesc: string;
  };
}

// Translation structure for step header
export interface StepHeaderTranslations {
  title: string;
  subtitle: string;
}

// Props for step header component
export interface StepHeaderProps {
  step: number;
  onClose: () => void;
  t: StepHeaderTranslations;
}

export interface ShippingModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalContentProps {
  step: number;
  setStep: (step: number) => void;
  formData: FormData;
  handleInputChange: (field: string, value: string) => void;
  pricing: Pricing;
  t: TranslationFunction;
  onClose: () => void;
  showToastMessage: (message: string, type?: "success" | "error") => void;
  handleDownloadReceipt: () => void;
  handleTrackShipment: () => void;
}

export interface ShippingModalHeaderProps {
  step: number;
  onClose: () => void;
  t: TranslationFunction;
}

export interface ShippingModalStepsProps {
  step: number;
  formData: FormData;
  handleInputChange: (field: string, value: string) => void;
  pricing: Pricing;
  t: TranslationFunction;
  handleDownloadReceipt: () => void;
  handleTrackShipment: () => void;
}

export interface ShippingModalFooterProps {
  step: number;
  setStep: (step: number) => void;
  formData: FormData;
  onClose: () => void;
  showToastMessage: (message: string, type?: "success" | "error") => void;
}

export interface ShippingModalContentProps {
  step: number;
  formData: FormData;
  handleInputChange: (field: string, value: string) => void;
  pricing: Pricing;
  t: Translations;
  onClose: () => void;
  handleDownloadReceipt: () => void;
  handleTrackShipment: () => void;
}