"use client";
import { CaseStudyModalProps } from '@/types';
import { ModalHeader } from './Header/ModalHeader';
import { MetricsGrid } from './KeyMetrics/MetricsGrid';
import { ChallengeSection, SolutionSection, ResultsSection, ClientQuote } from './Content';

const CaseStudyModal = ({ isOpen, onClose }: CaseStudyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <ModalHeader onClose={onClose} />
        <div className="p-6 space-y-8">
          <MetricsGrid />
          <ChallengeSection />
          <SolutionSection />
          <ResultsSection />
          <ClientQuote />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;