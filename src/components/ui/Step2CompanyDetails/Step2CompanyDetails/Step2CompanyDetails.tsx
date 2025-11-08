"use client";
import { motion } from "framer-motion";
import { Step2Props } from "@/types";
import { CompanyInfoSection } from '../CompanyInfoSection/CompanyInfoSection';
import { ContactInfoSection } from '../ContactInfoSection/ContactInfoSection';
import { PrioritySection } from '../PrioritySection/PrioritySection';

/**
 * Step 2 of shipping form - Company and contact information collection
 * Handles business details, contact person, and shipping priority selection
 */
export const Step2CompanyDetails = ({ formData, handleInputChange }: Step2Props) => {
  return (
    <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-4 max-w-3xl mx-auto">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Company Information</h3>
        <p className="text-gray-600">Provide your business contact details</p>
      </div>
      
      <CompanyInfoSection formData={formData} handleInputChange={handleInputChange} />
      <ContactInfoSection formData={formData} handleInputChange={handleInputChange} />
      <PrioritySection formData={formData} handleInputChange={handleInputChange} />
    </motion.div>
  );
};