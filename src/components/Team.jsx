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
    <section id="council" className="py-24 bg-gray-50 dark:bg-darkbg-card/25 border-b border-gray-100 dark:border-darkbg-border/20 transition-colors">
      <div className="px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-left md:text-center mb-20 space-y-4">
          <div className="inline-block bg-primary/10 dark:bg-[#a3f5ae]/10 text-primary dark:text-[#a3f5ae] px-4 py-1.5 rounded-full text-xs font-bold font-jakarta uppercase tracking-wider">
            Stewardship Council
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Meet Our Council
          </h2>
          <p className="font-jakarta text-slate-500 dark:text-[#e2f0e6]/70 text-sm sm:text-base">
            Meet the student team fueling environmental restoration and recycling drives at NIT Rourkela.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => {
            if (member.featured) {
              // Featured Developer BADAL style
              return (
                <div 
                  key={idx}
                  className="relative glowing-border-trigger glass-card hover-glow rounded-3xl p-6 text-center transition-all duration-300 border-2 border-emerald-500/30 dark:border-[#a3f5ae]/30 shadow-xl bg-emerald-50/10 dark:bg-emerald-950/5 group"
                >
                  {/* Web Dev Glowing Badge */}
                  <span className="absolute top-4 right-4 bg-primary dark:bg-accent-lime text-white dark:text-slate-950 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase font-outfit tracking-wider flex items-center gap-1 shadow-md z-10">
                    <Code className="w-3 h-3" />
                    <span>Dev Architect</span>
                  </span>

                  <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 border-4 border-emerald-500 shadow-inner group-hover:scale-105 transition-transform duration-300 relative">
                    <img 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      src={member.avatar}
                    />
                  </div>

                  <h3 className="font-outfit text-xl font-extrabold text-slate-950 dark:text-white">{member.name}</h3>
                  <p className="text-primary dark:text-[#a3f5ae] font-outfit text-xs font-bold uppercase tracking-wider mb-3">{member.role}</p>
                  
                  <p className="font-jakarta text-xs text-slate-600 dark:text-[#e2f0e6]/80 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="flex justify-center gap-4 text-slate-400 dark:text-[#e2f0e6]/45">
                    <a href={member.social.linkedin} className="hover:text-primary dark:hover:text-[#a3f5ae] transition-colors" target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href={member.social.github} className="hover:text-primary dark:hover:text-[#a3f5ae] transition-colors" target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            }

            if (member.vacant) {
              // Recruiter Card
              return (
                <div 
                  key={idx}
                  onClick={openModal}
                  className="glass-card hover-glow rounded-3xl p-6 text-center border-dashed border-2 border-slate-300 dark:border-darkbg-border/70 hover:border-primary/50 dark:hover:border-accent/50 flex flex-col justify-center items-center group cursor-pointer transition-all duration-300 shadow-sm"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-darkbg-border/40 flex items-center justify-center mb-6 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:text-[#a3f5ae] transition-colors">
                    <UserPlus className="w-8 h-8" />
                  </div>

                  <h3 className="font-outfit text-lg font-bold text-slate-700 dark:text-[#e2f0e6]/80 mb-1">{member.name}</h3>
                  <p className="text-slate-400 dark:text-[#e2f0e6]/40 font-outfit text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>
                  
                  <p className="font-jakarta text-xs text-slate-400 dark:text-[#e2f0e6]/50 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <button className="bg-slate-200 dark:bg-darkbg-border text-slate-700 dark:text-[#e2f0e6] px-4 py-2 rounded-xl text-xs font-bold font-outfit group-hover:bg-primary group-hover:text-white dark:group-hover:bg-emerald-700 transition-colors">
                    Apply to Join
                  </button>
                </div>
              );
            }

            // Normal Member Card
            return (
              <div 
                key={idx}
                className="glass-card hover-glow rounded-3xl p-6 text-center transition-all duration-300 shadow-sm group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-primary/20 dark:border-[#a3f5ae]/10 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    src={member.avatar}
                  />
                </div>

                <h3 className="font-outfit text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-slate-500 dark:text-[#e2f0e6]/60 font-outfit text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                
                <p className="font-jakarta text-xs text-slate-500 dark:text-[#e2f0e6]/60 leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-4 text-slate-400 dark:text-[#e2f0e6]/45">
                  <a href={member.social.linkedin} className="hover:text-primary dark:hover:text-[#a3f5ae] transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href={member.social.github} className="hover:text-primary dark:hover:text-[#a3f5ae] transition-colors">
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
