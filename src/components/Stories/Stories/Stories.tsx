"use client";
import { useState } from "react";
import CaseStudyModal from "../../CaseStudyModal/CaseStudyModal";
import {TestimonialSection} from '../TestimonialSection';
import StatsSection from '../StatsSection/StatsSection';

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
