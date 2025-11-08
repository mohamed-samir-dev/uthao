import { ReactNode } from "react";
import { FormData } from "../forms/shipping";
import { Pricing } from "../business/shipping";
import { TranslationFunction } from "../i18n/translations";

// Props for toast notification component
export interface ToastProps {
  showToast: boolean;
  toastMessage: string;
  toastType: "success" | "error";
  onClose: () => void;
}

export interface Benefit {
  id: number;
  icon: string;
  title: string;
  alt: string;
}

export interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface Question {
  id: number;
  question: string;
  answer: string;
}

export interface SubmitButtonProps {
  isLoading: boolean;
  loadingText?: string;
  children: ReactNode;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface StepCardProps {
  step: Step;
}

export interface Stat {
  id: number;
  targetValue: number;
  suffix: string;
  description: string;
  bgColor: string;
  textColor: string;
}

export interface TestimonialContentProps {
  onOpenModal: () => void;
}

export interface TestimonialSectionProps {
  onOpenModal: () => void;
}

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ContactModalContentProps {
  onClose: () => void;
}

export interface QuoteDetailsProps {
  formData: FormData;
  pricing: Pricing;
  t: TranslationFunction;
}

export interface ServiceFeaturesProps {
  t: TranslationFunction;
}