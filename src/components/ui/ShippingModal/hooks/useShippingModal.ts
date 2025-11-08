import { useState } from "react";
import { useShippingCalculator } from "@/hooks/useShippingCalculator/useShippingCalculator";
import { downloadReceipt, generateBookingReference } from "@/utils/shippingUtils";
import { translations } from "@/types/index";
import { FormData } from "@/types";

export const useShippingModal = () => {
  const [step, setStep] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [language] = useState("en");

  const [formData, setFormData] = useState<FormData>({
    origin: "",
    destination: "",
    cargoType: "Container (20ft)",
    weight: "",
    company: "",
    contact: "",
    email: "",
    phone: "",
    shipDate: "",
    priority: "Standard",
  });

  const t = translations[language as keyof typeof translations];
  const { calculatePrice } = useShippingCalculator();
  const pricing = calculatePrice(formData);

  const showToastMessage = (
    message: string,
    type: "success" | "error" = "success"
  ) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDownloadReceipt = () => {
    downloadReceipt(formData, pricing);
    showToastMessage(
      "📄 Receipt downloaded successfully! Check your downloads folder.",
      "success"
    );
  };

  const handleTrackShipment = () => {
    const trackingRef = generateBookingReference();
    showToastMessage(
      `🚢 Tracking initiated! Reference: ${trackingRef}. You will be redirected to the tracking portal.`,
      "success"
    );
  };

  return {
    step,
    setStep,
    formData,
    handleInputChange,
    pricing,
    t,
    showToastMessage,
    handleDownloadReceipt,
    handleTrackShipment,
    showToast,
    toastMessage,
    toastType,
    setShowToast,
  };
};