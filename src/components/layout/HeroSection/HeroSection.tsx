'use client'
import { motion } from "framer-motion";
import { SearchForm } from "../../forms/SearchForm";

/**
 * Hero section with animated title and search form
 * Features staggered animations and responsive layout for ocean cargo services
 */
export function HeroSection() {
  return (
    // Main hero container with faster animation
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="relative z-10 flex items-end min-h-[calc(100vh-80px)] px-6 max-[1030px]:flex-col max-[1030px]:justify-center max-[1030px]:py-12"
    >
      {/* Two-column layout: content and search form */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-end pb-12 max-[1030px]:flex max-[1030px]:flex-col max-[1030px]:items-center max-[1030px]:pb-0">
        {/* Hero content with faster animation */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-5 text-left max-[1030px]:text-center max-[1030px]:mb-12"
        >
          {/* Subtitle badge with faster animation */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-md rounded-full px-6 py-1 border border-white/30 shadow-lg mb-4 inline-block"
          >
            <h2 className="text-lg md:text-xl px-1 lg:text-2xl text-white font-medium max-[360px]:text-[11px]">
              Unmatched Worldwide Reach
            </h2>
          </motion.div>
          {/* Main title with faster animation */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-[360px]:text-[25px]"
          >
            Global Ocean Cargo
            {/* Subtitle with faster animation */}
            <motion.span 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="block text-blue-200"
            >
              Efficient, On Time & Trusted
            </motion.span>
          </motion.h1>
        </motion.div>
        {/* Search form component */}
        <SearchForm />
      </div>
    </motion.div>
  );
}