"use client";
import { lazy } from 'react';
import { SHIPPING_STEPS } from '../shared/data';

// Lazy loaded component
const StepCard = lazy(() => import('../StepCard/component/StepCard'));


const Steps = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-[450px]:text-[20px]">
            Our Shipping Process
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto max-[450px]:text-[16px]">
            Professional logistics solutions delivered through our streamlined 5-step process
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHIPPING_STEPS.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Steps;