import Image from "next/image";
import { StepCardProps } from '@/types';

const StepCard = ({ step }: StepCardProps) => (
  <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl">
    <Image 
      src={step.image} 
      alt={step.alt} 
      width={400} 
      height={224} 
      className="w-full h-56 object-cover" 
    />
    <div className="p-6 text-left">
      <div className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
       Step {step.id}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
    </div>
  </div>
);

export default StepCard;