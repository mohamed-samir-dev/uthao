"use client";
import { lazy } from 'react';
import { CaseStudyModalProps } from '@/types';

// Lazy loaded components
const ModalHeader = lazy(() => import('./Header/ModalHeader').then(module => ({ default: module.ModalHeader })));
const MetricsGrid = lazy(() => import('./KeyMetrics/MetricsGrid').then(module => ({ default: module.MetricsGrid })));
const ChallengeSection = lazy(() => import('./Content').then(module => ({ default: module.ChallengeSection })));
const SolutionSection = lazy(() => import('./Content').then(module => ({ default: module.SolutionSection })));
const ResultsSection = lazy(() => import('./Content').then(module => ({ default: module.ResultsSection })));
const ClientQuote = lazy(() => import('./Content').then(module => ({ default: module.ClientQuote })));

const CaseStudyModal = ({ isOpen, onClose }: CaseStudyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-50 backdrop-blur-sm">
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