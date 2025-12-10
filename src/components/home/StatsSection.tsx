/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import statsData from "../../../lib/data/home/stats.json";

// Counter hook with intersection observer
const useCounter = (endValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible) {
      let startTime: number;
      const startValue = 0;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, endValue, duration]);

  return { count, elementRef };
};

// Individual Counter Component
const StatCard = ({ stat, index }: { stat: any; index: number }) => {
  const { count, elementRef } = useCounter(stat.value, 2000 + index * 200);

  return (
    <div 
      ref={elementRef}
      className="text-center lg:text-start group cursor-default"
    >
      <h3 className="font-cal font-normal text-[42px] lg:text-[50px] xl:text-[62px] text-black leading-[110%] transition-all duration-300 group-hover:text-primary group-hover:scale-110 transform">
        {count}{stat.suffix}
      </h3>
      <div className="w-full h-px bg-[#CACACA] my-5 lg:my-7 xl:my-[30px] transition-all duration-300 group-hover:bg-primary group-hover:h-[2px]"></div>
      <h6 className="font-cal font-normal text-lg xl:text-2xl text-primary leading-[110%] mb-3 xl:mb-4 transition-all duration-300 group-hover:text-black">
        {stat.title}
      </h6>
      <p className="font-golos font-normal text-xs lg:text-base text-[#585353] leading-[110%] transition-all duration-300 group-hover:text-gray-700">
        {stat.description}
      </p>
    </div>
  );
};

const StatsSection = () => (
  <section className="w-full py-10 xl:py-20">
    <div className="container">
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-y-0">
        {statsData.map((stat, index) => (
          <StatCard key={stat.id} stat={stat} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
