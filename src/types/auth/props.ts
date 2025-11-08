
import {User,Benefit } from "@/types";

// Props for SignUpFormProps
export interface SignUpFormProps {
  onToggleMode: () => void;
  onError: (error: string) => void;
}
export interface LoginFormProps {
  onToggleMode: () => void;
  onError: (error: string) => void;
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpFormErrors {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpFormContentProps {
  formData: SignUpFormData;
  errors: SignUpFormErrors;
  isLoading: boolean;
  onFormDataChange: (data: SignUpFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onToggleMode: () => void;
}

export interface PortSelectionProps {
  formData: { origin: string; destination: string };
  handleInputChange: (field: string, value: string) => void;
}
export interface ShippingDetailsProps {
  formData: { cargoType: string; weight: string; shipDate: string };
  handleInputChange: (field: string, value: string) => void;
}
export interface QuoteHeaderProps {
  title: string;
  subtitle: string;
}
export interface ActionButtonsProps {
  handleDownloadReceipt: () => void;
  handleTrackShipment: () => void;
}
export interface Step4Props {
  handleDownloadReceipt: () => void;
  handleTrackShipment: () => void;
}
export interface HeaderContentProps {
  title: string;
  subtitle: string;
  onClose: () => void;
}

export interface ProgressIndicatorProps {
  step: number;
}
export interface StepHeaderProps {
  step: number;
  onClose: () => void;
  t: {
    title: string;
    subtitle: string;
  };
}
export interface UserAvatarProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  onClick: () => void;
}


export interface UserDropdownProps {
  onSignOut: () => void;
}
export interface DropdownMenuProps {
  user: User;
  onSignOut: () => void;
  onClose: () => void

}



export interface BenefitCardProps {
  benefit: Benefit;
}