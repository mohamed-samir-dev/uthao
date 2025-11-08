"use client";
import React, { useState } from "react";
import { ContactModal } from "../../ui/ContactModal";
import FooterLinks from "../FooterLinks/FooterLinks";
import FooterCTA from "../FooterCTA/FooterCTA";
import FooterBottom from "../FooterBottom/FooterBottom";

const FinalFooter = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  
  return (
    <footer className="bg-gray-900 text-white p-4 sm:p-8 md:p-12 lg:p-16 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FooterLinks />
        <FooterCTA onContactClick={() => setShowContactModal(true)} />
        <FooterBottom />
      </div>
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </footer>
  );
};

export default FinalFooter;