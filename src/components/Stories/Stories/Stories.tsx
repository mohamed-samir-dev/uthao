"use client";
import { useState, lazy } from "react";

// Lazy loaded components
const CaseStudyModal = lazy(() => import("../../CaseStudyModal/CaseStudyModal"));
const TestimonialSection = lazy(() => import('../TestimonialSection').then(module => ({ default: module.TestimonialSection })));
const StatsSection = lazy(() => import('../StatsSection/StatsSection'));

const Stories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <TestimonialSection onOpenModal={() => setIsModalOpen(true)} />
        <StatsSection />
      </div>
      
      <CaseStudyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Stories;
