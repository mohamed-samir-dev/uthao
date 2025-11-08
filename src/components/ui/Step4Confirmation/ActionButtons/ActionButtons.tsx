"use client";
import { Download, Search } from "lucide-react";
import {ActionButtonsProps}from '@/types'


export const ActionButtons = ({ handleDownloadReceipt, handleTrackShipment }: ActionButtonsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
      <button 
        onClick={handleDownloadReceipt}
        className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center"
      >
        <Download size={16} className="mr-2" />Download Receipt
      </button>
      <button 
        onClick={handleTrackShipment}
        className="w-full sm:w-auto border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center"
      >
        <Search size={16} className="mr-2" />Track Shipment
      </button>
    </div>
  );
};