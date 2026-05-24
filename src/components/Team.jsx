import React from 'react';
import { Leaf, Award, ArrowRight } from 'lucide-react';

const MEMBERS = [
  {
    name: 'Vyom Srivastava',
    role: 'President',
    image: '/src/assets/Vyom.jpeg',
    featured: true,
    desc: 'Leading Avyan Prakriti’s vision, initiatives, and core operations while building a stronger culture of sustainability across campus.',
  },
  {
    name: 'Arpita Patnaik',
    role: 'Vice President',
    image: '/src/assets/Arpita.jpeg',
    featured: false,
    desc: 'Coordinating internal operations, team management, and ensuring every project runs smoothly behind the scenes.',
  },

  {
    name: 'Rituparna Bai',
    role: 'PR Head',
    image: '/src/assets/rituparna.jpg',
    featured: false,
    desc: 'Managing collaborations, outreach, official communications, and building meaningful connections beyond the club.',
  },
  {
    name: 'Aadita Babu',
    role: 'Creative Head',
    image: '/src/assets/Aadita.png',
    featured: false,
    desc: 'Shaping the club’s visual identity through creative storytelling, branding, and impactful design.',
  },
  {
    name: 'Anand Kumar',
    role: 'Campaign Head',
    image: '/src/assets/Anand.jpeg',
    featured: false,
    desc: 'Driving environmental campaigns, awareness initiatives, and on-ground activities that create real impact.',
  },
  {
    name: 'Gayatri Pandit',
    role: 'Research and Development Head',
    image: '/src/assets/Gayatri.jpeg',
    featured: false,
    desc: 'Leading research initiatives, data collection, and developing innovative sustainable solutions for our projects.',
  },
  {
    name: 'Anushka Mech',
    role: 'Publicity Head',
    image: '/src/assets/Anushka.jpeg',
    featured: false,
    desc: 'Managing promotions, outreach, and the club’s public presence while making sure Avyan Prakriti reaches the right audience in the right way.',
  },
  {
    name: 'Badal Singh Chaurasiya',
    role: 'Web Dev Head',
    image: '/src/assets/Badal.jpeg',
    featured: false,
    desc: 'Building and maintaining the club’s digital presence while making sure everything works as smoothly as it looks.',
  },
];

export default function Team({ openModal }) {
  return (
    <section id="council" className="relative bg-transparent dark:bg-[#050b08] py-24 overflow-hidden transition-colors">

      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white via-emerald-50/50 to-transparent dark:from-[#06110c] dark:via-[#07150f] dark:to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-800/20 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-teal-200/30 dark:bg-teal-800/20 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="inline-block text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-[0.25em] uppercase bg-emerald-100/80 dark:bg-emerald-900/40 border border-emerald-300/60 dark:border-emerald-700 px-4 py-1.5 rounded-full mb-5 shadow-sm">
            THE STEWARDSHIP COUNCIL
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-emerald-950 dark:text-white leading-tight">
            Meet the <span className="nature-gradient">Changemakers</span>
          </h2>
          <p className="mt-4 text-emerald-900/80 dark:text-emerald-100/70 text-base sm:text-lg max-w-2xl mx-auto font-jakarta leading-relaxed">
            The dedicated team of student leaders driving environmental action, planning clean-up campaigns, and managing logistics at NIT Rourkela.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {MEMBERS.map((member, i) => {

            return (
              <div
                key={member.name}
                className={`reveal reveal-delay-${(i % 4) + 1} group relative rounded-[32px] overflow-hidden ${member.featured
                    ? 'shadow-xl shadow-emerald-200/50 dark:shadow-none bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-300 dark:border-emerald-600/50 flex flex-col'
                    : 'shadow-md hover:shadow-xl shadow-emerald-100/40 dark:shadow-none bg-white dark:bg-[#091810] border border-emerald-100 dark:border-emerald-800/50 hover:border-emerald-300 dark:hover:border-emerald-600 flex flex-col'
                  } transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Image Wrapper */}
                <div className="relative shrink-0 w-full h-[200px] sm:h-[220px] overflow-hidden">
                  <img
                    alt={`Photo of ${member.name}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={member.image}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop';
                    }}
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {member.featured && (
                    <div className="absolute top-4 right-4 bg-emerald-500/90 text-white p-2 rounded-full shadow-lg backdrop-blur-sm z-10">
                      <Award className="w-5 h-5" />
                    </div>
                  )}
                </div>

                {/* Content info */}
                <div className="flex flex-col justify-center w-full p-5">
                  <h3 className="font-outfit font-extrabold text-emerald-950 dark:text-emerald-50 leading-tight text-lg mb-0.5">
                    {member.name}
                  </h3>
                  <p className="font-jakarta font-medium text-emerald-700 dark:text-emerald-400 text-xs">
                    {member.role}
                  </p>

                  {member.desc && (
                    <p className={`font-jakarta mt-3 leading-relaxed text-[11px] sm:text-xs ${member.featured
                        ? 'text-emerald-800/80 dark:text-emerald-200/80'
                        : 'text-emerald-700/80 dark:text-emerald-300/80'
                      }`}>
                      {member.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-16 text-center">
          <p className="font-jakarta text-sm text-emerald-800/70 dark:text-emerald-300/60 flex items-center justify-center gap-2">
            <Leaf className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            Together, making environmental consciousness an instinct.
          </p>
        </div>

      </div>
    </section>
  );
}
