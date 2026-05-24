import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal, Sparkles } from 'lucide-react';

export default function Transformation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging]         = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    setSliderPosition(pct);
  };

  useEffect(() => {
    const up = () => setIsDragging(false);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
    };
  }, []);

  return (
    <section
      id="slider"
      className="relative bg-transparent dark:bg-gradient-to-b dark:from-[#050b08] dark:via-[#07130c] dark:to-[#050b08] py-24 overflow-hidden transition-colors"
    >
      {/* Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-200/40 dark:bg-emerald-800/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="inline-block text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-[0.25em] uppercase bg-emerald-100/80 dark:bg-emerald-900/40 border border-emerald-300/60 dark:border-emerald-700 px-4 py-1.5 rounded-full mb-5 shadow-sm">
            BEFORE & AFTER
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-emerald-950 dark:text-white flex items-center justify-center gap-3">
            <Sparkles className="w-7 h-7 text-emerald-500 dark:text-emerald-400" />
            The Ecological Transformation
          </h2>
          <p className="mt-4 text-emerald-900/80 dark:text-emerald-100/70 text-base sm:text-lg max-w-2xl mx-auto font-jakarta leading-relaxed">
            Drag the slider to witness the real-world impact of our campus clean-up drives.
          </p>
        </div>

        {/* Placeholder */}
        <div className="reveal w-full max-w-3xl mx-auto rounded-[32px] overflow-hidden shadow-xl shadow-emerald-200/50 dark:shadow-none h-[280px] sm:h-[360px] border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-900/10 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm relative group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.1),transparent_70%)] pointer-events-none" aria-hidden="true" />
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-800/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-emerald-200 dark:border-emerald-700/50">
            <Sparkles className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
          </div>
          <h3 className="font-outfit text-3xl sm:text-4xl font-black text-emerald-900 dark:text-emerald-50 uppercase tracking-widest">
            Coming Soon!
          </h3>
          <p className="mt-4 text-emerald-700/80 dark:text-emerald-300/80 font-jakarta text-sm sm:text-base max-w-lg">
            We are gathering data and imagery from our latest clean-up drives. Check back soon to see the incredible before and after transformations!
          </p>
        </div>
      </div>
    </section>
  );
}
