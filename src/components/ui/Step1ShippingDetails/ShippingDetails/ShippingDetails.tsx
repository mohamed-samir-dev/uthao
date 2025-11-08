
import {ShippingDetailsProps} from '@/types'
export const ShippingDetails = ({ formData, handleInputChange }: ShippingDetailsProps) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Container Type *</label>
      <select 
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
        value={formData.cargoType} 
        onChange={(e) => handleInputChange('cargoType', e.target.value)}
      >
        <option>20ft Standard</option>
        <option>40ft Standard</option>
        <option>40ft High Cube</option>
        <option>20ft Refrigerated</option>
        <option>40ft Refrigerated</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Weight (tons) *</label>
      <input 
        type="number" 
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none" 
        placeholder="0.0" 
        value={formData.weight} 
        onChange={(e) => handleInputChange('weight', e.target.value)} 
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Date *</label>
      <input 
        type="date" 
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
        value={formData.shipDate} 
        onChange={(e) => handleInputChange('shipDate', e.target.value)} 
      />
    </div>
  </div>
);