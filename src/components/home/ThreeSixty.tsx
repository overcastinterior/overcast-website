'use client';

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import threeSixty from "@/../public/images/360-degree.webp";
import CommonTitle from "@/components/small/CommonTitle";

const ThreeSixty = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [rotationX, setRotationX] = useState(0); // Horizontal rotation
  const [rotationY, setRotationY] = useState(0); // Vertical rotation
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sensitivity = 0.8; // Adjust for drag sensitivity

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    const newRotationX = rotationX + (deltaX * sensitivity);
    const newRotationY = Math.max(-180, Math.min(180, rotationY + (deltaY * sensitivity))); // Limit vertical rotation

    setRotationX(newRotationX);
    setRotationY(newRotationY);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;

    const newRotationX = rotationX + (deltaX * sensitivity);
    const newRotationY = Math.max(-180, Math.min(180, rotationY + (deltaY * sensitivity))); // Limit vertical rotation

    setRotationX(newRotationX);
    setRotationY(newRotationY);
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      if (containerRef.current) {
        containerRef.current.style.cursor = 'grab';
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <>
      <section className="w-full py-10 xl:py-20">
        <div className="container">
          {/* common title */}
          <CommonTitle
            feat="360-degree panoramas"
            title="Create an even"
            sTitle="greater experience"
            description="Drag to explore the space in full 360-degree view"
          />
        </div>
        <div className="container mt-4 lg:mt-8">
          <div className="w-full">
            {/* 360 Viewer Container */}
            <div
              ref={containerRef}
              className="relative w-full rounded-md lg:rounded-xl overflow-hidden cursor-grab select-none bg-gradient-to-br from-gray-100 to-gray-200"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                minHeight: '400px',
                touchAction: 'pan-y'
              }}
            >
              <div
                className="w-full h-full transition-transform duration-100 ease-out"
                style={{
                  transform: `translateX(${-rotationX}px) translateY(${-rotationY}px)`,
                  willChange: 'transform'
                }}
              >
                <Image
                  src={threeSixty}
                  alt="360 degree interactive view - Drag to explore"
                  className="w-full h-full object-cover"
                  priority
                  draggable={false}
                />
              </div>

              {/* Drag Instructions Overlay */}
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm font-golos backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span>Drag in any direction</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Rotation Indicators */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm font-golos backdrop-blur-sm">
                <div className="flex flex-col">
                  <span>X: {Math.round(((rotationX % 360) + 360) % 360)}°</span>
                  <span>Y: {Math.round(rotationY)}°</span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center mt-4 gap-3 flex-wrap">
              <button
                onClick={() => { setRotationX(0); setRotationY(0); }}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-golos text-sm"
              >
                Reset View
              </button>
              <button
                onClick={() => setRotationX(prev => prev - 90)}
                className="px-3 py-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-lg hover:bg-secondary/30 transition-colors font-golos text-sm"
              >
                ← X
              </button>
              <button
                onClick={() => setRotationX(prev => prev + 90)}
                className="px-3 py-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-lg hover:bg-secondary/30 transition-colors font-golos text-sm"
              >
                X →
              </button>
              <button
                onClick={() => setRotationY(prev => Math.max(-180, prev - 90))}
                className="px-3 py-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-lg hover:bg-secondary/30 transition-colors font-golos text-sm"
              >
                ↑ Y
              </button>
              <button
                onClick={() => setRotationY(prev => Math.min(180, prev + 90))}
                className="px-3 py-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-lg hover:bg-secondary/30 transition-colors font-golos text-sm"
              >
                Y ↓
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThreeSixty;
