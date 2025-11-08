"use client";
import TestimonialContent from '../TestimonialContent';
import TestimonialImage from '../TestimonialImage';
import {TestimonialSectionProps} from '@/types'

const TestimonialSection = ({ onOpenModal }: TestimonialSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20 text-left">
      <TestimonialContent onOpenModal={onOpenModal} />
      <TestimonialImage />
    </div>
  );
};

export default TestimonialSection;