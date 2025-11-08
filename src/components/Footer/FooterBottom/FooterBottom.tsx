import React from "react";

const FooterBottom = () => {
  return (
    <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
      <div className="mb-3 sm:mb-0">
        <h1 className="text-xl sm:text-2xl font-bold">Uthao</h1>
      </div>
      <p className="text-gray-400 text-sm sm:text-base">
        © {new Date().getFullYear()} Uthao. All rights reserved.
      </p>
    </div>
  );
};

export default FooterBottom;