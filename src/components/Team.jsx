import React from 'react';
import { UserPlus, Code } from 'lucide-react';
import rituparna from "../assets/rituparna.jpg"

export default function Team({ openModal }) {
  const members = [
    {
      name: "Vyom",
      role: "President",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop",
      bio: "Visionary coordinator leading environmental strategies, institutional permissions, and NGO collaborations.",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Arpita",
      role: "Vice President",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
      bio: "Supervising internal block operations, logistics tracking, and inter-hall volunteer mobilization.",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Vitee",
      role: "Vice President",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
      bio: "Driving educational workshops, AASRA NGO liaison, and institutional academic outreach.",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Anand",
      role: "Campaign Head",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
      bio: "Chief on-field operations planner. Leading logistics and weekend room-to-room scrap collection.",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Rituparna",
      role: "PR Head",
      avatar: rituparna,
      bio: "Fostering external institutional collaborations, sponsorships, and administrative public notices.",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Aadita",
      role: "Creative Head",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
      bio: "Spearheading creative graphic layout structures, eco-posters, and drive branding aesthetics.",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Krishna",
      role: "Creative Head",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
      bio: "Coordinating physical drive installations, aesthetic scrap models, and branding assets.",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Anushka",
      role: "Social Media Handler",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop",
      bio: "Amplifying environmental campaigns online. Managing Instagram engagement, Reels, and highlights.",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Badal",
      role: "Web Dev Head",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      bio: "Lead Systems Architect & Full-Stack Developer. Engineered the Avyan Prakriti digital ecosystem & calculators.",
      social: { linkedin: "#", github: "https://github.com" },
      featured: true
    },
    {
      name: "Gayatri",
      role: "R&D Head",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
      bio: "Analyzing waste output logs, ecological metrics, and designing recycling pipeline systems.",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Treasurer Team",
      role: "Treasurer (None / Vacant)",
      avatar: null,
      bio: "Seeking active students to lead financial auditing, budgeting, and fundraising. Apply now!",
      social: null,
      vacant: true
    }
  ];

  return (
    <section id="council" className="py-24 relative bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-50 dark:from-darkbg dark:via-emerald-950/5 dark:to-darkbg border-b border-gray-100 dark:border-darkbg-border/20 transition-colors overflow-hidden">
      {/* Ambient Decorative Glows - Soft Nature Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-emerald-400/12 dark:bg-emerald-900/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-200/10 dark:bg-amber-900/5 blur-3xl pointer-events-none" />

      <div className="px-4 sm:px-6 relative z-10">
        
        {/* Title */}
        <div className="text-left md:text-center mb-20 space-y-4">
          <h2 className="font-outfit text-3xl sm:text-4xl font-black text-stone-950 dark:text-white">
            Meet Our Council
          </h2>
          <p className="font-jakarta text-stone-800 dark:text-[#e2f0e6]/75 text-sm sm:text-base">
            Meet the student team fueling environmental restoration and recycling drives at NIT Rourkela.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {members.map((member, idx) => {
            if (member.featured) {
              // Featured Developer BADAL style
              return (
                <div 
                  key={idx}
                  className="relative h-full rounded-3xl p-6 text-center transition-all duration-300 border-2 border-emerald-500/40 dark:border-[#a3f5ae]/30 shadow-lg bg-gradient-to-br from-stone-50 to-emerald-50/20 dark:from-stone-900/30 dark:to-emerald-950/20 group flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_45px_-5px_rgba(16,185,129,0.2)]" style={{backgroundImage: 'linear-gradient(135deg, rgba(245, 245, 244, 0.8), rgba(167, 243, 208, 0.08))'}} 
                >
                  <div>
                    <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 border-3 border-emerald-400/30 shadow-md group-hover:scale-105 transition-transform duration-300 relative">
                      <img 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        src={member.avatar}
                      />
                    </div>

                    <h3 className="font-outfit text-xl font-black text-stone-950 dark:text-white">{member.name}</h3>
                    <p className="text-emerald-700 dark:text-[#a3f5ae] font-outfit text-[10px] font-extrabold uppercase tracking-widest mb-3 bg-emerald-50/90 dark:bg-emerald-950/50 px-3 py-1.5 rounded-full inline-block mx-auto shadow-sm">{member.role}</p>
                    
                    <p className="font-jakarta text-xs text-stone-800 dark:text-[#e2f0e6]/85 leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex justify-center gap-3">
                    <a href={member.social.linkedin} className="bg-stone-100 dark:bg-stone-700/40 p-2 rounded-full text-stone-600 dark:text-[#e2f0e6]/60 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-950/60 dark:hover:text-[#a3f5ae] transition-all" target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href={member.social.github} className="bg-stone-100 dark:bg-stone-700/40 p-2 rounded-full text-stone-600 dark:text-[#e2f0e6]/60 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-950/60 dark:hover:text-[#a3f5ae] transition-all" target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            }

            if (member.vacant) {
              // Recruiter Card - Vacant Slot
              return (
                <div 
                  key={idx}
                  onClick={openModal}
                  className="h-full rounded-3xl p-6 text-center border-2 border-dashed border-stone-300 dark:border-stone-600/60 flex flex-col justify-between items-center group cursor-pointer transition-all duration-300 hover:border-emerald-400/60 dark:hover:border-[#a3f5ae]/50 bg-stone-50/50 dark:bg-stone-900/20 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20"
                >
                  {/* Empty Profile Placeholder with + */}
                  <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 border-2 border-dashed border-stone-300 dark:border-stone-600/60 bg-stone-100 dark:bg-stone-800/40 flex items-center justify-center group-hover:border-emerald-400/60 transition-all">
                    <div className="text-4xl font-light text-stone-400 dark:text-stone-500 group-hover:text-emerald-400 transition-colors">
                      +
                    </div>
                  </div>

                  <div>
                    <h3 className="font-outfit text-lg font-bold text-stone-700 dark:text-[#e2f0e6]/80 mb-1">{member.name}</h3>
                    <p className="text-stone-500 dark:text-stone-400 font-outfit text-[11px] font-extrabold uppercase tracking-widest mb-4 bg-stone-200/60 dark:bg-stone-700/40 px-2.5 py-1 rounded-full inline-block">{member.role}</p>
                    
                    <p className="font-jakarta text-xs text-stone-600 dark:text-[#e2f0e6]/60 leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>

                  <button className="bg-emerald-500 hover:bg-emerald-600 dark:bg-[#a3f5ae] dark:hover:bg-emerald-400 text-white dark:text-slate-950 px-4 py-2 rounded-xl text-xs font-bold font-outfit transition-all hover:scale-105 active:scale-95 shadow-md">
                    Apply to Join
                  </button>
                </div>
              );
            }

            // Normal Member Card
            return (
              <div 
                key={idx}
                className="h-full rounded-3xl p-6 text-center transition-all duration-300 shadow-lg bg-gradient-to-br from-stone-50 to-emerald-50/20 dark:from-stone-900/30 dark:to-emerald-950/20 border-2 border-emerald-500/40 dark:border-[#a3f5ae]/30 group flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_45px_-5px_rgba(16,185,129,0.2)]" style={{backgroundImage: 'linear-gradient(135deg, rgba(245, 245, 244, 0.8), rgba(167, 243, 208, 0.08))'}}
              >
                <div>
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-emerald-400/30 dark:border-[#a3f5ae]/20 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <img 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      src={member.avatar}
                    />
                  </div>

                  <h3 className="font-outfit text-lg font-black text-stone-950 dark:text-white">{member.name}</h3>
                  <p className="text-emerald-700 dark:text-[#a3f5ae] font-outfit text-[10px] font-extrabold uppercase tracking-widest mb-3 bg-emerald-50/90 dark:bg-emerald-950/50 px-3 py-1.5 rounded-full inline-block mx-auto shadow-sm">{member.role}</p>
                  
                  <p className="font-jakarta text-xs text-stone-800 dark:text-[#e2f0e6]/85 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="flex justify-center gap-3">
                  <a href={member.social.linkedin} className="bg-stone-100 dark:bg-stone-700/40 p-2 rounded-full text-stone-600 dark:text-[#e2f0e6]/60 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-950/60 dark:hover:text-[#a3f5ae] transition-all" target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href={member.social.github} className="bg-stone-100 dark:bg-stone-700/40 p-2 rounded-full text-stone-600 dark:text-[#e2f0e6]/60 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-950/60 dark:hover:text-[#a3f5ae] transition-all" target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
