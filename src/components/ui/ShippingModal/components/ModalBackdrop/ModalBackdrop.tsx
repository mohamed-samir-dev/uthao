"use client";
import { AnimatePresence } from "framer-motion";

interface ModalBackdropProps {
  children: React.ReactNode;
}

export const ModalBackdrop = ({ children }: ModalBackdropProps) => {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        {children}
      </div>
    </AnimatePresence>
  );
};