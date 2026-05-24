import React, { useRef, useState, useEffect } from 'react';
import { TreePine, Megaphone, Trash2, GraduationCap } from 'lucide-react';

const INITIATIVES = [
  {
    icon: Trash2,
    tag: 'SIGNATURE DRIVE',
    title: 'Scrap Collection Drives',
    desc: 'Previously operating as Avyan Prithvi, we successfully diverted over 800+ kgs of waste through sustainability drives carried out by a committed team of 100+ volunteers working towards meaningful environmental change.',
    stat: '800+ KG',
    statLabel: 'Waste Diverted',
    color: 'emerald',
  },
  {
    icon: Megaphone,
    tag: 'AWARENESS',
    title: 'Awareness Campaigns',
    desc: 'Informative drives, poster campaigns, and Instagram reels that educate students on sustainable habits, recycling practices, and reducing single-use plastic.',
    stat: '100+',
    statLabel: 'Students Reached',
    color: 'teal',
  },
];

const COLOR_MAP = {
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    icon: 'bg-emerald-200/60 text-emerald-800 dark:bg-emerald-800/60 dark:text-emerald-300',
    tag: 'bg-emerald-100/80 text-emerald-800 border-emerald-300/60 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700/60',
    stat: 'text-emerald-800 dark:text-emerald-300',
    hover: 'hover:border-emerald-300 dark:hover:border-emerald-600',
  },
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    icon: 'bg-teal-200/60 text-teal-800 dark:bg-teal-800/60 dark:text-teal-300',
    tag: 'bg-teal-100/80 text-teal-800 border-teal-300/60 dark:bg-teal-900/40 dark:text-teal-300 dark:border-teal-700/60',
    stat: 'text-teal-800 dark:text-teal-300',
    hover: 'hover:border-teal-300 dark:hover:border-teal-600',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    icon: 'bg-green-200/60 text-green-800 dark:bg-green-800/60 dark:text-green-300',
    tag: 'bg-green-100/80 text-green-800 border-green-300/60 dark:bg-green-900/40 dark:text-green-300 dark:border-green-700/60',
    stat: 'text-green-800 dark:text-green-300',
    hover: 'hover:border-green-300 dark:hover:border-green-600',
  },
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    icon: 'bg-cyan-200/60 text-cyan-800 dark:bg-cyan-800/60 dark:text-cyan-300',
    tag: 'bg-cyan-100/80 text-cyan-800 border-cyan-300/60 dark:bg-cyan-900/40 dark:text-cyan-300 dark:border-cyan-700/60',
    stat: 'text-cyan-800 dark:text-cyan-300',
    hover: 'hover:border-cyan-300 dark:hover:border-cyan-600',
  },
};

function useCountUp(target, duration = 1600, active = false) {
  const [count, setCount] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(e * target));
      if (p < 1) raf.current = requestAnimationFrame(step);
      else setCount(target);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, active]);
  return count;
}

function MilestoneItem({ value, label, suffix = '' }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 1600, active);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="text-center">
      <div className="count-up text-3xl sm:text-4xl font-extrabold font-outfit text-emerald-800 dark:text-emerald-300">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-emerald-700/80 dark:text-emerald-300/80 mt-1 font-jakarta">{label}</div>
    </div>
  );
}

export default function Events() {
  return (
    <section id="events" className="relative bg-transparent dark:bg-gradient-to-b dark:from-[#050b08] dark:via-[#06110c] dark:to-[#050b08] py-24 overflow-hidden transition-colors">

      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(167,243,208,0.35),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_20%,rgba(6,78,59,0.3),transparent_50%)] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="inline-block text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-[0.25em] uppercase bg-emerald-100/80 dark:bg-emerald-900/40 border border-emerald-300/60 dark:border-emerald-700 px-4 py-1.5 rounded-full mb-5 shadow-sm">
            INITIATIVES & IMPACT
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-emerald-950 dark:text-white leading-tight">
            What We're{' '}
            <span className="nature-gradient">Doing</span>
          </h2>
          <p className="mt-4 text-emerald-900/80 dark:text-emerald-100/70 text-base sm:text-lg max-w-2xl mx-auto font-jakarta leading-relaxed">
            From scrap collection to plantation drives — every action is tracked, documented, and designed for lasting impact.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {INITIATIVES.map((item, i) => {
            const c = COLOR_MAP[item.color];
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`reveal reveal-delay-${i + 1} glass rounded-3xl p-6 flex flex-col gap-4 shadow-md hover:shadow-xl dark:shadow-none transition-all duration-300 hover:-translate-y-2 border border-transparent ${c.hover} group`}
              >
                <div>
                  <span className={`inline-block text-[9px] font-extrabold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border ${c.tag} mb-4`}>
                    {item.tag}
                  </span>
                  <div className={`w-11 h-11 rounded-2xl ${c.icon} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-outfit text-lg font-bold text-emerald-950 dark:text-emerald-50 mb-2">{item.title}</h3>
                  <p className="text-emerald-900/80 dark:text-emerald-100/70 text-sm leading-relaxed font-jakarta">{item.desc}</p>
                </div>

              </div>
            );
          })}
          
          {/* Coming Soon Card */}
          <div className="reveal reveal-delay-3 sm:col-span-2 lg:col-span-2 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-inner shadow-emerald-900/5 dark:shadow-none border border-emerald-200/60 dark:border-emerald-800/40 bg-emerald-50/40 dark:bg-[#06110c]/40 relative overflow-hidden group min-h-[260px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_60%)] group-hover:scale-125 transition-transform duration-1000" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100/50 dark:bg-emerald-900/40 flex items-center justify-center mb-5 border border-emerald-200/50 dark:border-emerald-700/50 animate-[pulse_3s_ease-in-out_infinite]">
                <span className="w-3 h-3 bg-emerald-400 dark:bg-emerald-500 rounded-full" />
              </div>
              <h3 className="font-outfit text-xl sm:text-2xl font-bold text-emerald-900/60 dark:text-emerald-100/40 mb-3">
                More Initiatives Coming Soon
              </h3>
              <p className="text-emerald-800/50 dark:text-emerald-300/40 text-sm font-jakarta max-w-sm leading-relaxed">
                We're actively brainstorming and planning our next set of environmental action drives. Stay tuned for what's sprouting next!
              </p>
            </div>
          </div>
        </div>

        {/* Milestone bar */}
        <div className="reveal glass-green rounded-3xl p-8 sm:p-10 shadow-md dark:shadow-none">
          <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-emerald-700 dark:text-emerald-400 mb-8 font-outfit">
            Milestones at a Glance
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <MilestoneItem value={800} suffix="+ KG" label="Waste Diverted" />
            <MilestoneItem value={100} suffix="+" label="Active Stewards" />
            
            <div className="col-span-2 flex flex-col items-center justify-center text-center">
              <div className="text-3xl sm:text-4xl font-extrabold font-outfit text-emerald-800/40 dark:text-emerald-300/40 animate-pulse">
                ...
              </div>
              <div className="text-xs sm:text-sm text-emerald-700/60 dark:text-emerald-300/60 mt-1 font-jakarta font-bold tracking-widest uppercase">
                More Coming Soon
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming teaser */}
        <div className="reveal mt-10 rounded-3xl overflow-hidden shadow-2xl dark:shadow-none group relative h-[280px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=400&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 gap-4">
            <span className="inline-flex items-center gap-2 bg-emerald-400/20 border border-emerald-300/40 rounded-full px-4 py-1.5 text-emerald-100 text-xs font-bold uppercase tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Upcoming Events
            </span>
            <h3 className="font-outfit text-3xl sm:text-4xl font-black text-white leading-tight">
              Something Green is <span className="text-emerald-300">Sprouting</span>
            </h3>
            <p className="text-emerald-100/90 font-jakarta text-sm max-w-lg">
              We're nurturing our next set of initiatives. Stay tuned for our upcoming environmental action drives.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
