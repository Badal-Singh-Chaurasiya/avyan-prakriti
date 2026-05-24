import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Sun, Moon } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',           anchor: 'home'       },
  { label: 'About',          anchor: 'about'      },
  { label: 'Initiatives',    anchor: 'events'     },
  { label: 'Council',        anchor: 'council'    },
  { label: 'Transformation', anchor: 'slider'     },
  { label: 'Induction',      anchor: 'induction'  },
  { label: 'Contact',        anchor: 'contact'    },
];

export default function Navbar({ openModal, darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navbar background on scroll
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scrollspy
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.anchor);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (anchor) => {
    setActiveSection(anchor);
    setMobileOpen(false);
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'py-2 glass shadow-lg shadow-green-900/10 border-b border-green-200/40 dark:shadow-green-900/30 dark:border-green-800/40'
          : 'py-4 bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center px-4 sm:px-6 max-w-7xl mx-auto">

        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 group focus-visible:ring-2 rounded-xl p-1"
          aria-label="Go to top"
        >
          <div className="bg-white p-1 rounded-full border-2 border-emerald-400 shadow-md shadow-emerald-200/60 dark:shadow-emerald-900/60 dark:border-emerald-500 group-hover:shadow-emerald-300/80 transition-shadow">
            <img
              alt="Avyan Prakriti logo"
              className="w-10 h-10 rounded-full object-cover"
              src="/avyanlogo.png"
            />
          </div>
          <span className={`font-outfit text-lg font-bold tracking-tight ${isScrolled ? 'text-emerald-900 dark:text-emerald-50' : 'text-emerald-950 dark:text-emerald-50'}`}>
            Avyan <span className="text-emerald-600 dark:text-emerald-400">Prakriti</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, anchor }) => {
            const isActive = activeSection === anchor;
            return (
              <button
                key={anchor}
                onClick={() => handleNav(anchor)}
                className={`relative text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'text-emerald-800 bg-emerald-100/80 dark:text-emerald-200 dark:bg-emerald-800/40'
                    : 'text-emerald-800/80 hover:text-emerald-900 hover:bg-emerald-50/80 dark:text-emerald-200/80 dark:hover:text-emerald-100 dark:hover:bg-emerald-800/30'
                } ${!isScrolled && !darkMode && 'text-emerald-950'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
                <span
                  className={`absolute bottom-0.5 left-3 h-[2px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 ${
                    isActive ? 'w-[calc(100%-1.5rem)]' : 'w-0 group-hover:w-[calc(100%-1.5rem)]'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* CTA + Hamburger + Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full text-emerald-800 hover:bg-emerald-100/50 dark:text-emerald-200 dark:hover:bg-emerald-800/40 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5" />}
          </button>

          <a
            href="https://forms.gle/VWqoo3v5RttUbWWL7" target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md shadow-emerald-300/40 dark:shadow-emerald-900/40 transition-all hover:scale-105 active:scale-95 font-outfit"
            aria-label="Open join form"
          >
            <Leaf className="w-3.5 h-3.5" />
            Join Us
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 rounded-xl text-emerald-800 hover:bg-emerald-50 dark:text-emerald-200 dark:hover:bg-emerald-800/40 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white dark:bg-[#07130c] mx-4 mt-2 mb-3 rounded-2xl shadow-xl border border-green-200/50 dark:border-green-800/40 divide-y divide-green-200/30 dark:divide-green-800/30 overflow-hidden">
          {NAV_LINKS.map(({ label, anchor }) => {
            const isActive = activeSection === anchor;
            return (
              <button
                key={anchor}
                onClick={() => handleNav(anchor)}
                className={`w-full text-left px-5 py-3.5 text-sm font-medium transition-colors font-jakarta ${
                  isActive
                    ? 'text-emerald-800 bg-emerald-100/60 dark:text-emerald-200 dark:bg-emerald-800/40 font-semibold'
                    : 'text-emerald-900 hover:bg-emerald-50 dark:text-emerald-100 dark:hover:bg-emerald-800/20'
                }`}
              >
                {label}
              </button>
            );
          })}
          <a
            href="https://forms.gle/VWqoo3v5RttUbWWL7" target="_blank" rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-left px-5 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-100/50 hover:bg-emerald-200/60 dark:text-emerald-200 dark:bg-emerald-800/50 dark:hover:bg-emerald-700/60 transition-colors font-outfit"
          >
            🌿 Join Us
          </a>
        </div>
      </div>
    </nav>
  );
}