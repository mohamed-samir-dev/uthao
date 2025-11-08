"use client";
import { Step2Props } from "@/types";

export const CompanyInfoSection = ({ formData, handleInputChange }: Step2Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
        <input 
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none" 
          placeholder="Enter company name" 
          value={formData.company} 
          onChange={(e) => handleInputChange('company', e.target.value)} 
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
        <input 
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none" 
          placeholder="Full name" 
          value={formData.contact} 
          onChange={(e) => handleInputChange('contact', e.target.value)} 
        />
      </div>
    </div>
  );
};