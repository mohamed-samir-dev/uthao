"use client";
import { Step2Props } from "@/types/index";

export const PrioritySection = ({ formData, handleInputChange }: Step2Props) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
      <select 
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
        value={formData.priority} 
        onChange={(e) => handleInputChange('priority', e.target.value)}
      >
        <option>Standard (15-20 days)</option>
        <option>Express (10-12 days)</option>
        <option>Priority (7-9 days)</option>
      </select>
    </div>
  );
};