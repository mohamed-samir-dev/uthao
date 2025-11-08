import { HeaderContent } from '../HeaderContent/HeaderContent';
import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator';
import { StepHeaderProps } from '@/types';

export const StepHeader = ({ step, onClose, t }: StepHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-slate-800 via-blue-700 to-blue-800 p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
      <div className="relative z-10">
        <HeaderContent title={t.title} subtitle={t.subtitle} onClose={onClose} />
        <ProgressIndicator step={step} />
      </div>
    </div>
  );
};
