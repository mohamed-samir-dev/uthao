"use client";
import { Step2Props } from "@/types";

export const ContactInfoSection = ({ formData, handleInputChange }: Step2Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
        <input 
          type="email" 
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none" 
          placeholder="company@example.com" 
          value={formData.email} 
          onChange={(e) => handleInputChange('email', e.target.value)} 
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
        <input 
          type="tel" 
          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none" 
          placeholder="+1 (555) 123-4567" 
          value={formData.phone} 
          onChange={(e) => handleInputChange('phone', e.target.value)} 
        />
      </div>
    </div>
  );
};