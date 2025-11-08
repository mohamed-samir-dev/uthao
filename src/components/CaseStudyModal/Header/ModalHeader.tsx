import { X } from "lucide-react";

interface ModalHeaderProps {
  onClose: () => void;
}

export const ModalHeader = ({ onClose }: ModalHeaderProps) => {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 rounded-t-2xl">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
      >
        <X size={24} />
      </button>
      <h2 className="text-2xl font-bold mb-2">Global Electronics Shipment</h2>
      <p className="text-slate-300">Complete ocean freight solution from Asia to Europe</p>
    </div>
  );
};