"use client";
import React from "react";
import { ContactModalContent } from "../ContactModalContent/ContactModalContent";
import type { ContactModalProps } from '@/types';

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <ContactModalContent onClose={onClose} />
    </div>
  );
};