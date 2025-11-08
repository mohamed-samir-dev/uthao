import { motion } from "framer-motion";
import type { SubmitButtonProps } from '@/types';

export function SubmitButton({ isLoading, loadingText = "Loading...", children }: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      disabled={isLoading}
      whileHover={{ scale: isLoading ? 1 : 1.05 }}
      whileTap={{ scale: isLoading ? 1 : 0.95 }}
      className={`w-full font-semibold py-3 px-6 rounded-xl transition-colors ${
        isLoading
          ? "bg-red-400 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-700"
      } text-white`}
    >
      {isLoading ? loadingText : children}
    </motion.button>
  );
}