import {PortSelectionProps}from '@/types'

export const PortSelection = ({ formData, handleInputChange }: PortSelectionProps) => (
  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Origin Port *</label>
      <select 
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none" 
        value={formData.origin} 
        onChange={(e) => handleInputChange('origin', e.target.value)}
      >
        <option value="">Select origin port</option>
        <option value="Shanghai, China">Shanghai, China</option>
        <option value="Singapore">Singapore</option>
        <option value="Rotterdam, Netherlands">Rotterdam, Netherlands</option>
        <option value="Los Angeles, USA">Los Angeles, USA</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Destination Port *</label>
      <select 
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
        value={formData.destination} 
        onChange={(e) => handleInputChange('destination', e.target.value)}
      >
        <option value="">Select destination port</option>
        <option value="New York, USA">New York, USA</option>
        <option value="Hamburg, Germany">Hamburg, Germany</option>
        <option value="Dubai, UAE">Dubai, UAE</option>
        <option value="Tokyo, Japan">Tokyo, Japan</option>
      </select>
    </div>
  </div>
);