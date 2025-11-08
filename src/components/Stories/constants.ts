import { Stat } from '@/types';

export const STATS: Stat[] = [
  {
    id: 1,
    targetValue: 16000,
    suffix: "+",
    description: "Successful shipments delivered worldwide",
    bgColor: "bg-yellow-200",
    textColor: "text-yellow-900"
  },
  {
    id: 3,
    targetValue: 89,
    suffix: "%",
    description: "On-time delivery rate",
    bgColor: "bg-gray-200",
    textColor: "text-gray-900"
  },
  {
    id: 4,
    targetValue: 250,
    suffix: "%",
    description: "Growth in shipping efficiency",
    bgColor: "bg-green-200",
    textColor: "text-green-900"
  }
];