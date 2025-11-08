"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { SearchFormCard } from "../SearchFormCard/SearchFormCard";
import { PaymentForm } from "../../PaymentForm/PaymentForm/PaymentForm";
import { DecorativeElements } from "../../DecorativeElements/DecorativeElements";

export function SearchFormContainer() {
  const [activeTab, setActiveTab] = useState<"tracking" | "schedules">("schedules");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    trackingNumber: "",
  });
  const [showPayment, setShowPayment] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    const newErrors: { [key: string]: string } = {};

    if (activeTab === "tracking") {
      if (!formData.trackingNumber.trim()) {
        newErrors.trackingNumber = "Please enter tracking number";
      }
    } else {
      if (!formData.from.trim()) {
        newErrors.from = "Please enter origin location";
      }
      if (!formData.to.trim()) {
        newErrors.to = "Please enter destination";
      }
      if (!formData.date) {
        newErrors.date = "Please select a date";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowPayment(true);
    }
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex justify-end items-start pt-16 max-[1030px]:justify-center max-[1030px]:w-full max-[1030px]:max-w-4xl max-[1030px]:pt-0"
    >
      <div className="w-[450px] max-[1030px]:w-full space-y-4 relative">
        {!showPayment && (
          <SearchFormCard
            activeTab={activeTab}
            formData={formData}
            errors={errors}
            onTabChange={setActiveTab}
            onInputChange={handleInputChange}
            onSearch={handleSearch}
          />
        )}

        {showPayment && <PaymentForm activeTab={activeTab} />}

        <DecorativeElements />
      </div>
    </motion.div>
  );
}