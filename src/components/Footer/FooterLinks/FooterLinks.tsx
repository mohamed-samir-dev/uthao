import React from "react";

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
      <div className="mb-6 sm:mb-0">
        <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
        <ul className="space-y-1 sm:space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">About us</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Our team</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
        </ul>
      </div>
      <div className="mb-6 sm:mb-0">
        <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Services</h3>
        <ul className="space-y-1 sm:space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Worldwide shipping</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Sea shipping</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Ground shipping</a></li>
        </ul>
      </div>
      <div className="mb-6 sm:mb-0">
        <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Shipping</h3>
        <ul className="space-y-1 sm:space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Track Package</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Calculate Fare</a></li>
        </ul>
      </div>
      <div className="mb-6 sm:mb-0">
        <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Support</h3>
        <ul className="space-y-1 sm:space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Customer care</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Instruction Claim</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">News</h3>
        <ul className="space-y-1 sm:space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Press Release</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Our Blog</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;