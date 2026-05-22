import React, { useEffect, useState } from 'react';
import { ArrowRight, Leaf, Sparkles, Award } from 'lucide-react';

export default function Hero({ openModal }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // Generate organic fall parameters for background leaf visuals
    const generated = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 95}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 8 + 7}s`,
      size: Math.random() * 18 + 12,
      rotation: Math.random() * 360,
    }));
    setLeaves(generated);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-cover bg-center bg-no-repeat transition-colors duration-300"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop')`
      }}
    >
      {/* Premium Multi-Layer Dynamic Overlay Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-emerald-950/70 to-slate-950/90 dark:from-black/90 dark:via-[#040e07]/85 dark:to-black/95 z-0"></div>

      {/* Background Leaves Animations */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute leaf-particle text-emerald-400/20 dark:text-[#a3f5ae]/15"
            style={{
              left: leaf.left,
              animationDelay: leaf.delay,
              animationDuration: leaf.duration,
              fontSize: `${leaf.size}px`,
              top: '-5%',
              transform: `rotate(${leaf.rotation}deg)`,
            }}
          >
            <Leaf style={{ width: leaf.size, height: leaf.size, fill: 'currentColor' }} />
          </div>
        ))}
      </div>

      {/* Ambient background glows for added depth */}
      <div className="absolute -top-[10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-emerald-400/10 dark:bg-emerald-900/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-teal-400/10 dark:bg-teal-950/5 blur-[120px] pointer-events-none z-0"></div>

      {/* Centered Main Content Grid */}
      <div className="px-4 sm:px-6 w-full relative z-20 text-center flex flex-col items-center justify-center min-h-[75vh] space-y-8">
        
        {/* NITR Club Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/15 dark:bg-[#a3f5ae]/10 border border-emerald-400/30 dark:border-[#a3f5ae]/20 px-4 py-1.5 rounded-full text-emerald-300 dark:text-[#a3f5ae] text-xs font-bold tracking-wide uppercase font-jakarta shadow-lg backdrop-blur-md animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#a3f5ae]" />
          <span>NIT Rourkela's Eco Stewardship Club</span>
        </div>

        {/* Main Centered Heading */}
        <h1 className="font-outfit text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] text-white">
          Act Locally. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3f5ae] via-[#ccffd4] to-emerald-400 drop-shadow-sm">
            Think Sustainably.
          </span> <br />
          Uplift Collectively.
        </h1>

        {/* Description Paragraph */}
        <p className="font-jakarta text-base sm:text-lg lg:text-xl text-emerald-50/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Avyan Prakriti is the premier environmental powerhouse at NITR, bridging the gap between student intent and large-scale, data-backed campus sustainability campaigns.
        </p>

        {/* Action Button Links */}
        <div className="flex flex-wrap justify-center gap-4 pt-2 font-outfit">
          <a
            href="#events"
            className="bg-primary hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-emerald-950/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border border-emerald-500/20"
          >
            <span>Join The Movement</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Statistics Centered Panel */}
        <div className="pt-10 mt-6 border-t border-white/10 w-full max-w-2xl grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit text-white drop-shadow-md">800+ KG</div>
            <div className="text-xs sm:text-sm text-emerald-200/80 font-medium">Waste Diverted</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit text-white drop-shadow-md">100+</div>
            <div className="text-xs sm:text-sm text-emerald-200/80 font-medium">Active Stewards</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-outfit text-white drop-shadow-md">100%</div>
            <div className="text-xs sm:text-sm text-emerald-200/80 font-medium">Student-Led Drive</div>
          </div>
        </div>

        {/* Inspired By Badge Floating */}
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 p-3 px-5 rounded-2xl max-w-md shadow-lg backdrop-blur-md mt-4">
          <div className="bg-primary/20 p-2 rounded-xl">
            <Award className="w-5 h-5 text-[#a3f5ae]" />
          </div>
          <div className="text-left">
            <div className="text-xs sm:text-sm font-bold text-white font-outfit">Inspired by Avyan Prithvi NGO</div>
            <div className="text-[10px] sm:text-xs text-slate-300">Established in 2022. Working on real campus impact.</div>
          </div>
        </div>

      </div>
    </section>
  );
}
