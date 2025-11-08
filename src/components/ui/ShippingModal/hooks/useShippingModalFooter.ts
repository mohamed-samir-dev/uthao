import { validateStep } from "@/utils/shippingUtils";
import { FormData } from "@/types/index";

export const useShippingModalFooter = (
  step: number,
  setStep: (step: number) => void,
  formData: FormData,
  onClose: () => void,
  showToastMessage: (message: string, type?: "success" | "error") => void
) => {
  const handleNext = () => {
    if (step < 4) {
      if (validateStep(step, formData)) {
        setStep(step + 1);
      } else {
        showToastMessage("⚠️ Please fill in all required fields before continuing.", "error");
      }
    } else {
      onClose();
    }
  };

  return { handleNext };
};