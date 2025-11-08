"use client";

export const BookingReference = () => {
  return (
    <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl">
      <h4 className="font-semibold mb-2 text-sm sm:text-base">Booking Reference</h4>
      <p className="text-lg sm:text-2xl font-mono text-blue-600 font-bold">
        OCL-{Math.random().toString(36).substr(2, 9).toUpperCase()}
      </p>
    </div>
  );
};