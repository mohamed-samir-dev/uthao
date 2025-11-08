"use client";
import { motion } from "framer-motion";
import { Step1Props } from "@/types/index";;
import { FormHeader } from '../FormHeader/FormHeader';
import { PortSelection } from '../PortSelection/PortSelection';
import { ShippingDetails } from '../ShippingDetails/ShippingDetails';

export const Step1ShippingDetails = ({ formData, handleInputChange }: Step1Props) => {
  return (
    <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-4 max-w-3xl mx-auto">
      <FormHeader />
      <PortSelection formData={formData} handleInputChange={handleInputChange} />
      <ShippingDetails formData={formData} handleInputChange={handleInputChange} />
    </motion.div>
  );
};