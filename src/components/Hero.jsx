import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Award, Users, Leaf, Recycle } from 'lucide-react';

// Animated count-up hook
function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(step);
      else setCount(target);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, active]);

  return count;
}

const STATS = [
  { icon: Recycle,  value: 800,  suffix: '+ KG', label: 'Waste Diverted'    },
  { icon: Users,    value: 100,  suffix: '+',     label: 'Active Stewards'   },
  { icon: Leaf,     value: 100,  suffix: '%',     label: 'Student-Led Drive' },
];

function StatCard({ icon: Icon, value, suffix, label }) {
  const ref  = useRef(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 1800, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-1">
        <Icon className="w-5 h-5 text-emerald-200" />
      </div>
      <div className="count-up text-3xl sm:text-4xl font-extrabold font-outfit text-white drop-shadow">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-emerald-200/90 font-medium">{label}</div>
    </div>
  );
}

export default function Hero({ openModal }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop')`
      }}
    >
      {/* Multi-layer overlay */}
      <div className="hero-overlay absolute inset-0 z-0" aria-hidden="true" />
      {/* Ambient glows */}
      <div className="absolute -top-[8%] right-[-8%] w-[40%] h-[40%] rounded-full bg-emerald-400/20 blur-[100px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-[-8%] left-[-8%] w-[40%] h-[40%] rounded-full bg-teal-400/15 blur-[100px] pointer-events-none z-0" aria-hidden="true" />

      {/* Main content */}
      <div className="w-full px-4 sm:px-6 relative z-10 text-center flex flex-col items-center justify-center gap-7 max-w-5xl mx-auto">

        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2 bg-white/10 border border-white/25 px-5 py-2 rounded-full text-emerald-100 text-xs font-bold tracking-widest uppercase font-jakarta shadow-lg backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
          <span>NIT Rourkela's Eco Stewardship Club</span>
        </div>

        {/* Heading */}
        <h1 className="reveal reveal-delay-1 font-outfit text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
          Act Locally.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300">
            Think Sustainably.
          </span>{' '}
          <br className="hidden sm:block" />
          Uplift Collectively.
        </h1>

        {/* Description */}
        <p className="reveal reveal-delay-2 font-jakarta text-base sm:text-lg lg:text-xl text-emerald-100/90 max-w-2xl leading-relaxed">
          Avyan Prakriti is the premier environmental powerhouse at NITR — bridging student intent with data-backed campus sustainability campaigns that create real, measurable change.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3 flex flex-wrap justify-center gap-4">
          <a
            href="#events"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base px-8 py-3.5 rounded-full shadow-lg shadow-emerald-900/40 transition-all hover:scale-105 active:scale-95 font-outfit"
          >
            <span>Explore Initiatives</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-base px-8 py-3.5 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95 font-outfit"
          >
            <Leaf className="w-4 h-4" />
            <span>Join The Movement</span>
          </button>
        </div>

        {/* Stats */}
        <div className="reveal reveal-delay-4 w-full max-w-lg grid grid-cols-3 gap-4 mt-2 pt-8 border-t border-white/15">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* NGO Badge */}
        <div className="reveal reveal-delay-5 inline-flex items-center gap-3 bg-white/8 border border-white/15 p-3 px-5 rounded-2xl max-w-xs sm:max-w-sm shadow-lg backdrop-blur-md">
          <div className="bg-emerald-400/20 p-2 rounded-xl flex-shrink-0">
            <Award className="w-5 h-5 text-emerald-300" />
          </div>
          <div className="text-left">
            <div className="text-xs sm:text-sm font-bold text-white font-outfit">Inspired by Avyan Prithvi NGO</div>
            <div className="text-[10px] sm:text-xs text-emerald-200/80">Established 2026 · Real campus impact</div>
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-white text-[10px] tracking-widest uppercase font-jakarta">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex items-start justify-center pt-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
