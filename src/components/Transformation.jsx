import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export default function Transformation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="slider" className="py-24 bg-gradient-to-br from-emerald-50/20 via-white to-sky-50/20 dark:from-[#050f08]/20 dark:via-darkbg dark:to-[#081a0e]/20 border-b border-gray-100 dark:border-darkbg-border/20 transition-colors">
      <div className="px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-left md:text-center mb-16 space-y-4">
          <div className="inline-block bg-primary/10 dark:bg-[#a3f5ae]/10 text-primary dark:text-[#a3f5ae] px-4 py-1.5 rounded-full text-xs font-bold font-jakarta uppercase tracking-wider">
            Expedition Reports
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 md:justify-center">
            <Sparkles className="w-5 h-5 text-emerald-500 fill-emerald-500" />
            <span>The Ecological Transformation</span>
          </h2>
          <p className="font-jakarta text-slate-500 dark:text-[#e2f0e6]/70 text-sm sm:text-base">
            Drag the visual slider below horizontally to witness the actual impact of our physical cleanliness drives.
          </p>
        </div>

        {/* Custom Drag Slider Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="relative w-full rounded-[32px] overflow-hidden shadow-2xl h-[380px] sm:h-[450px] select-none border border-slate-200/50 dark:border-white/5 cursor-ew-resize"
        >
          {/* Before Image */}
          <div className="absolute inset-0">
            <img 
              alt="Riverside clutter before campaign" 
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=800&auto=format&fit=crop"
            />
            <div className="absolute top-6 left-6 bg-rose-600/90 text-white px-4 py-1.5 rounded-full text-xs font-extrabold uppercase font-outfit shadow-md">
              Before Campaign
            </div>
          </div>

          {/* After Image (Clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden border-r-2 border-white z-10 pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              alt="Riverside clean and green after campaign" 
              className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100vw', height: '100%' }}
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop"
            />
            <div className="absolute top-6 right-6 bg-primary/95 text-white px-4 py-1.5 rounded-full text-xs font-extrabold uppercase font-outfit shadow-md shrink-0">
              After Campaign
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-0.5 bg-white pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-darkbg-card rounded-full flex items-center justify-center shadow-2xl border border-gray-200 dark:border-darkbg-border/60 transition-transform hover:scale-110 active:scale-95">
              <MoveHorizontal className="w-5 h-5 text-primary dark:text-[#a3f5ae]" />
            </div>
          </div>
        </div>

        {/* Drag Helper */}
        <p className="text-center font-jakarta text-xs text-slate-400 dark:text-[#e2f0e6]/45 mt-4">
          Click and drag the horizontal comparison bar across the window.
        </p>

      </div>
    </section>
  );
}
