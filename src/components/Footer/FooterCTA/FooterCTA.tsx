import React from "react";

interface FooterCTAProps {
  onContactClick: () => void;
}

const FooterCTA = ({ onContactClick }: FooterCTAProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 text-center">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Ready to ship smarter?</h2>
      <button 
        onClick={onContactClick}
        className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-colors"
      >
        Contact us
      </button>
    </div>
  );
};

export default FooterCTA;