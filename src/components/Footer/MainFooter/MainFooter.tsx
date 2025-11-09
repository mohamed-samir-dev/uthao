"use client";
import { useState, lazy } from "react";

// Lazy loaded components
const ShippingModal = lazy(() => import("../../ui/ShippingModal").then(module => ({ default: module.ShippingModal })));
const FinalFooter = lazy(() => import("@/components/Footer/FinalFooter/FinalFooter"));
const MainFooter = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="bg-[url('/footer.webp')]  bg-cover bg-center h-[300px] relative mb-0">
        <div className="text-left p-4 sm:p-6 md:p-10 max-w-xs sm:max-w-sm md:max-w-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Tailored Solutions for Your Business Requirements
          </h2>
          <p className="text-white/90 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed drop-shadow-md">
            Transform your vision into reality with our customized business
            solutions designed for success.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-red-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-red-700 transition-colors font-playfair font-medium shadow-lg"
          >
            Ship Now
          </button>

          <ShippingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      </footer>
      <FinalFooter />
    </>
  );
};

export default MainFooter;