"use client";
import { useState } from "react";
import { ShippingModal } from "../ShippingModal";
const Button = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-playfair font-medium"
      >
        Ship Now
      </button>

      <ShippingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
export default Button;
