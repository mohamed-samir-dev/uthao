import { Pricing,FormData } from '@/types';

// Validate form data for each step of the booking process
export const validateStep = (currentStep: number, formData: FormData) => {
  if (currentStep === 1) {
    return formData.origin && formData.destination && formData.weight && formData.shipDate;
  }
  if (currentStep === 2) {
    return formData.company && formData.contact && formData.email && formData.phone;
  }
  return true;
};

// Generate unique booking reference (e.g., "OCL-ABC123DEF")
export const generateBookingReference = () => {
  return 'OCL-' + Math.random().toString(36).substr(2, 9).toUpperCase();
};

// Generate formatted receipt text
export const generateReceipt = (formData: FormData, pricing: Pricing) => {
  return `OCEAN LOGISTICS RECEIPT\n\nBooking Reference: ${generateBookingReference()}\nFrom: ${formData.origin}\nTo: ${formData.destination}\nContainer: ${formData.cargoType}\nWeight: ${formData.weight} tons\nTotal Cost: $${pricing.total.toLocaleString()}\n\nThank you for choosing Ocean Logistics!`;
};

// Download receipt as text file
export const downloadReceipt = (formData: FormData, pricing: Pricing) => {
  const receipt = generateReceipt(formData, pricing);
  const blob = new Blob([receipt], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'shipping-receipt.txt';
  a.click();
  URL.revokeObjectURL(url);
};