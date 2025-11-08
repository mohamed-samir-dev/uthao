"use client";
import { motion } from "framer-motion";
import { SuccessIcon } from './SuccessIcon/SuccessIcon';
import { BookingReference } from './BookingReference/BookingReference';
import { ActionButtons } from './ActionButtons/ActionButtons';
import {Step4Props}from '@/types'


/**
 * Final step of shipping form - Booking confirmation with receipt and tracking options
 * Displays success message, booking reference, and action buttons
 */
export const Step4Confirmation = ({ handleDownloadReceipt, handleTrackShipment }: Step4Props) => {
  return (
    <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-center space-y-4 sm:space-y-6 max-w-2xl mx-auto">
      <SuccessIcon />
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Booking Confirmed!</h3>
      <p className="text-gray-600 text-sm sm:text-base">Your shipment has been successfully booked. You will receive a confirmation email shortly.</p>
      <BookingReference />
      <ActionButtons 
        handleDownloadReceipt={handleDownloadReceipt}
        handleTrackShipment={handleTrackShipment}
      />
    </motion.div>
  );
};