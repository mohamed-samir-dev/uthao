"use client";
import { useState, useEffect, useRef } from "react";

export const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return { isVisible, ref };
};

export const useCountAnimation = (targetValue: number, isVisible: boolean) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCurrentValue(Math.min(Math.floor(increment * step), targetValue));
      
      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return currentValue;
};