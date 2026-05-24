import React from 'react';
import { Mail, MapPin, Leaf } from 'lucide-react';

const NAV_GROUPS = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home',           href: '#home'      },
      { label: 'About',          href: '#about'     },
      { label: 'Initiatives',    href: '#events'    },
      { label: 'Council',        href: '#council'   },
      { label: 'Transformation', href: '#slider'    },
      { label: 'Induction',      href: '#induction' },
      { label: 'Contact',        href: '#contact'   },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'Join Us',          href: '#induction' },
      { label: 'Volunteer',        href: '#induction' },
      { label: 'Our Initiatives',  href: '#events'    },
      { label: 'Meet the Council', href: '#council'   },
      { label: 'Send Feedback',    href: '#contact'   },
    ],
  },
];

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/avyanprakriti',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:avyanprakriti@gmail.com',
    icon: <Mail className="w-4 h-4" />,
  },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gradient-to-b from-emerald-900 to-emerald-950 dark:from-[#050b08] dark:to-[#030704] text-emerald-100 transition-colors">

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <button
              onClick={scrollTop}
              className="flex items-center gap-3 group focus-visible:ring-2 rounded-xl p-1"
              aria-label="Back to top"
            >
              <div className="bg-white p-1 rounded-full border-2 border-emerald-400 shadow-md shadow-emerald-900/40">
                <img
                  alt="Avyan Prakriti logo"
                  className="w-11 h-11 rounded-full object-cover"
                  src="/avyanlogo.png"
                />
              </div>
              <span className="font-outfit text-xl font-bold tracking-tight text-white">
                Avyan <span className="text-emerald-300">Prakriti</span>
              </span>
            </button>

            <p className="font-jakarta text-sm leading-relaxed text-emerald-200/80 max-w-sm">
              Professional environmental stewardship at NIT Rourkela. Bridging collective student passion with structured, data-backed waste recycling and sustainability campaigns.
            </p>

            {/* Socials */}
            <div className="flex gap-3 flex-wrap">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/8 hover:bg-emerald-400 hover:text-emerald-900 border border-white/15 hover:border-emerald-400 text-emerald-200 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Contact chips */}
            <div className="space-y-2">
              <a
                href="mailto:avyanprakriti@gmail.com"
                className="flex items-center gap-2 text-sm text-emerald-200 hover:text-emerald-300 transition-colors font-jakarta group"
              >
                <Mail className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 flex-shrink-0" />
                avyanprakriti@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-emerald-200/70 font-jakarta">
                <MapPin className="w-4 h-4 text-emerald-400/70 flex-shrink-0" />
                NIT Rourkela, Odisha — 769 008
              </div>
            </div>
          </div>

          {/* Nav groups */}
          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="md:col-span-3 space-y-4">
              <h4 className="font-outfit text-xs font-bold text-emerald-300 uppercase tracking-widest">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-emerald-200/70 hover:text-emerald-300 transition-colors font-jakarta"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Campaign info */}
          <div className="md:col-span-1" />
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-jakarta text-emerald-200/50">
          <div className="flex items-center gap-1.5">
            <Leaf className="w-3.5 h-3.5 text-emerald-400/60" />
            <span>© 2026 Avyan Prakriti · NIT Rourkela · Together We Can Make This Change Happen.</span>
          </div>
          <button
            onClick={scrollTop}
            className="flex items-center gap-1.5 text-emerald-400/60 hover:text-emerald-300 transition-colors"
            aria-label="Back to top"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
