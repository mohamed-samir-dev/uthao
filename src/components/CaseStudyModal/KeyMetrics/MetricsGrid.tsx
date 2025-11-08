import { Calendar, MapPin, Package, TrendingUp } from "lucide-react";

export const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="text-center p-4 bg-blue-50 rounded-lg">
        <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
        <div className="text-2xl font-bold text-blue-600">2,500</div>
        <div className="text-sm text-gray-600">Containers</div>
      </div>
      <div className="text-center p-4 bg-green-50 rounded-lg">
        <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
        <div className="text-2xl font-bold text-green-600">18</div>
        <div className="text-sm text-gray-600">Days Transit</div>
      </div>
      <div className="text-center p-4 bg-purple-50 rounded-lg">
        <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
        <div className="text-2xl font-bold text-purple-600">12</div>
        <div className="text-sm text-gray-600">Countries</div>
      </div>
      <div className="text-center p-4 bg-yellow-50 rounded-lg">
        <TrendingUp className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
        <div className="text-2xl font-bold text-yellow-600">98%</div>
        <div className="text-sm text-gray-600">On-Time</div>
      </div>
    </div>
  );
};