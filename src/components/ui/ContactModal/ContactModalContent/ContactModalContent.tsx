import React from "react";
import type { ContactModalContentProps } from '@/types';



export const ContactModalContent: React.FC<ContactModalContentProps> = ({ onClose }) => {
  return (
    <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
      >
        ×
      </button>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Developer</h2>
      <p className="text-gray-600 mb-6">
        Get in touch with our development team for custom solutions and support.
      </p>
      <div className="space-y-4">
        <a
          href="https://my-frontend-portfolio-five.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors"
        >
          View Portfolio
        </a>
        <button
          onClick={onClose}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded-lg font-semibold transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};