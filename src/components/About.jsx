import React from 'react';
import { Target, Eye, Shield, Users, Landmark, Trees, Milestone } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: <Milestone className="w-5 h-5 text-primary dark:text-[#a3f5ae]" />,
      title: "Action Over Advocacy",
      desc: "We prioritize actual field clean-ups and direct waste drives over mere discussions and posters."
    },
    {
      icon: <Users className="w-5 h-5 text-primary dark:text-[#a3f5ae]" />,
      title: "Community As Strength",
      desc: "Our momentum scales as student groups mobilize. Solid cooperation builds green ecosystems."
    },
    {
      icon: <Trees className="w-5 h-5 text-primary dark:text-[#a3f5ae]" />,
      title: "Duty to Nature",
      desc: "Environmental restoration is a primary community debt. Protecting local ecosystems is a core call."
    },
    {
      icon: <Landmark className="w-5 h-5 text-primary dark:text-[#a3f5ae]" />,
      title: "Social Integration",
      desc: "We recycle waste paper into customized writing notebooks, donating them to regional schools via AASRA NGO."
    },
    {
      icon: <Shield className="w-5 h-5 text-primary dark:text-[#a3f5ae]" />,
      title: "Transparency",
      desc: "Every single kilogram of collection is documented, cataloged, and accounted for in public impact reviews."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-darkbg border-b border-gray-100 dark:border-darkbg-border/20 transition-colors">
      <div className="px-4 sm:px-6">
        
        {/* Top Header Split Grid */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1 text-left space-y-6">
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Who We Are & What We Stand For
            </h2>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-slate-700 dark:text-[#e2f0e6] font-semibold text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span>100% Volunteer Driven</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-[#e2f0e6] font-semibold text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span>Data-Backed Impact</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-500/5 blur-2xl rounded-full scale-95 pointer-events-none"></div>
            <img 
              alt="Student clean-up campaign" 
              className="rounded-[32px] w-full h-[320px] sm:h-[350px] object-cover shadow-xl border border-gray-200/50 dark:border-white/5"
              src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800&auto=format&fit=crop"
            />
          </div>
        </div>

        {/* Vision & Mission Double Panel */}
        <div className="flex flex-col md:flex-row gap-8 mb-20">
          {/* Vision card */}
          <div className="flex-1 glass-card rounded-[28px] p-8 text-left hover-glow transition-all duration-300 shadow-sm">
            <div className="bg-primary/10 dark:bg-accent-lime/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-primary dark:text-[#a3f5ae]" />
            </div>
            <h3 className="font-outfit text-xl font-bold mb-3 text-slate-900 dark:text-white">Our Vision</h3>
            <p className="font-jakarta text-slate-600 dark:text-[#e2f0e6]/70 leading-relaxed text-sm sm:text-base">
              To embed sustainable environmental actions seamlessly into the campus lifestyle, molding future community leaders who view ecological care not as a duty, but as a habit.
            </p>
          </div>

          {/* Mission card */}
          <div className="glass-card rounded-[28px] p-8 text-left hover-glow transition-all duration-300 shadow-sm">
            <div className="bg-primary/10 dark:bg-accent-lime/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary dark:text-[#a3f5ae]" />
            </div>
            <h3 className="font-outfit text-xl font-bold mb-3 text-slate-900 dark:text-white">Our Mission</h3>
            <p className="font-jakarta text-slate-600 dark:text-[#e2f0e6]/70 leading-relaxed text-sm sm:text-base">
              Deploying scalable recycling systems, targeted clean-up campaigns, and education initiatives across halls of residence that yield quantifiable environmental metrics and social benefits.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center space-y-4">
          <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Our Core Pillars</h3>
          <p className="text-slate-500 dark:text-[#e2f0e6]/60 font-jakarta max-w-xl mx-auto text-sm sm:text-base">
            These fundamental principles guide every campaign we conduct, from small hostel sweeps to institute-wide collaborations.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-10 text-left">
            {coreValues.map((val, idx) => (
              <div 
                key={idx} 
                className="glass-card hover-glow rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                {/* Accent top line on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 dark:bg-[#a3f5ae]" />
                
                <div>
                  <div className="bg-primary/5 dark:bg-[#a3f5ae]/5 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                    {val.icon}
                  </div>
                  <h4 className="font-outfit font-bold text-base text-slate-900 dark:text-white mb-2">{val.title}</h4>
                  <p className="font-jakarta text-xs text-slate-500 dark:text-[#e2f0e6]/60 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
