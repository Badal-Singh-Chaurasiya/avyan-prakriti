import React from 'react';
import { Heart, Globe, Users, Lightbulb, Eye } from 'lucide-react';

const VALUES = [
  { icon: Heart, title: 'Action Over Advocacy', desc: 'Act meaningfully rather than advocating endlessly' },
  { icon: Globe, title: 'Fundamental Duty', desc: 'Fulfill our environmental duty towards nature' },
  { icon: Users, title: 'Social Integration', desc: 'Build a stronger community while strengthening social bonds' },
  { icon: Eye, title: 'Transparency', desc: 'Remain transparent in our impact and all initiatives' },
  { icon: Lightbulb, title: 'Continuous Growth', desc: 'Think, improve, and create lasting impact' },
];

const STORY = [
  {
    tag: 'WHO WE ARE',
    heading: 'A Student-Led Force for Nature',
    body: 'Founded in 2026 at NIT Rourkela, Avyan Prakriti is a student-led Environmental Protection Club dedicated to building an environmentally conscious campus community and working towards a greener, more sustainable future for everyone.',
  },
  {
    tag: 'WHAT WE\'VE DONE',
    heading: 'From Words to Action',
    body: 'Previously operating as Avyan Prithvi, our organization successfully diverted over 800+ kgs of waste through multiple sustainability drives, supported by a passionate network of 100+ volunteers dedicated to creating meaningful environmental impact.',
  },
  {
    tag: 'WHY IT MATTERS',
    heading: 'Building Habits That Outlast Drives',
    body: 'Campus sustainability cannot be a one-time event. By embedding eco-conscious habits into daily student life — through awareness campaigns, data-tracked recycling, and cross-institutional partnerships — we aim to make environmental stewardship an instinct.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-transparent dark:bg-gradient-to-b dark:from-[#050b08] dark:via-[#07130c] dark:to-[#050b08] py-24 overflow-hidden transition-colors"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-200/40 dark:bg-emerald-800/20 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200/40 dark:bg-teal-800/20 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="reveal text-center mb-16">
          <span className="inline-block text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-[0.25em] uppercase bg-emerald-100/80 dark:bg-emerald-900/40 border border-emerald-300/60 dark:border-emerald-700 px-4 py-1.5 rounded-full mb-5 shadow-sm">
            ESTABLISHED 2026 · NIT ROURKELA
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-emerald-950 dark:text-white leading-tight">
            About <span className="nature-gradient">Avyan Prakriti</span>
          </h2>
          <p className="mt-4 text-emerald-900/80 dark:text-emerald-100/70 text-base sm:text-lg max-w-2xl mx-auto font-jakarta leading-relaxed">
            Nature + Leadership + Student Action — elegant, trustworthy, and inspiring.
          </p>
        </div>

        {/* Story cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {STORY.map((s, i) => (
            <div
              key={s.tag}
              className={`reveal reveal-delay-${i + 1} glass rounded-3xl p-7 shadow-md shadow-emerald-100/50 hover:shadow-lg hover:shadow-emerald-200/60 dark:shadow-none transition-all duration-300 hover:-translate-y-1`}
            >
              <span className="inline-block text-[10px] font-extrabold tracking-[0.2em] text-emerald-700 dark:text-emerald-300 uppercase mb-4 bg-emerald-100/80 dark:bg-emerald-900/40 border border-emerald-200/80 dark:border-emerald-700/60 px-3 py-1 rounded-full">
                {s.tag}
              </span>
              <h3 className="font-outfit text-xl font-bold text-emerald-950 dark:text-emerald-50 mb-3 leading-snug">{s.heading}</h3>
              <p className="text-emerald-900/80 dark:text-emerald-100/70 text-sm leading-relaxed font-jakarta">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Two-column: Mission + Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Mission + Quote */}
          <div className="reveal-left space-y-8">
            <div>
              <h3 className="font-outfit text-3xl font-bold text-emerald-950 dark:text-emerald-50 mb-4">Our Mission</h3>
              <p className="text-emerald-900/80 dark:text-emerald-100/70 leading-relaxed font-jakarta text-base">
                Our mission is to reduce waste, promote recycling, encourage sustainable consumption, raise environmental awareness, and channel community resources for the benefit of people and the planet.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-emerald-500 dark:border-emerald-400 pl-5 py-2 bg-emerald-100/40 dark:bg-emerald-900/20 rounded-r-2xl">
              <p className="text-emerald-900/90 dark:text-emerald-100/80 italic text-base leading-relaxed font-jakarta">
                "At Avyan Prakriti, we believe that every hand extended in service is a small step towards a greener tomorrow. Together, let us make environmental consciousness an instinct rather than a responsibility."
              </p>
              <footer className="mt-3 text-xs text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider font-outfit">
                — Avyan Prakriti Founding Council
              </footer>
            </blockquote>
          </div>

          {/* Values card */}
          <div className="reveal-right glass-green rounded-3xl p-8 shadow-lg shadow-emerald-100/40 dark:shadow-none">
            <h3 className="font-outfit text-2xl font-bold text-emerald-950 dark:text-emerald-50 mb-6">Our Core Values</h3>
            <div className="space-y-5">
              {VALUES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-emerald-200/60 dark:bg-emerald-800/60 flex items-center justify-center group-hover:bg-emerald-300/80 dark:group-hover:bg-emerald-700/80 transition-colors">
                    <Icon className="w-4.5 h-4.5 text-emerald-800 dark:text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-emerald-950 dark:text-emerald-50 text-sm mb-0.5">{title}</h4>
                    <p className="text-emerald-900/70 dark:text-emerald-100/60 text-xs font-jakarta leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
