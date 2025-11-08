"use client";
import { Stat } from '@/types';
import { useIntersectionObserver, useCountAnimation } from '../hooks/hooks';
import { formatValue } from '../utils/utils';

interface StatCardProps {
  stat: Stat;
}

const StatCard = ({ stat }: StatCardProps) => {
  const { isVisible, ref: cardRef } = useIntersectionObserver();
  const currentValue = useCountAnimation(stat.targetValue, isVisible);

  return (
    <div ref={cardRef} className={`text-left p-4 sm:p-6 ${stat.bgColor} rounded-lg sm:rounded-xl border border-slate-600 shadow-lg h-fit`}>
      <h4 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.textColor} mb-2`}>
        {stat.id === 4 ? "+" : ""}{formatValue(currentValue)}{stat.suffix}
      </h4>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{stat.description}</p>
    </div>
  );
};

export default StatCard;