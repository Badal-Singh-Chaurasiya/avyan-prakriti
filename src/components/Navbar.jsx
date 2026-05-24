import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // 1. Scroll effect for Navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Optimized Scrollspy
  useEffect(() => {
    const ids = ['home', 'about', 'council', 'events', 'induction'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/80 dark:bg-darkbg-card/85 backdrop-blur-md shadow-md border-b border-gray-200/50 dark:border-darkbg-border/60' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-primary/10 p-2 rounded-xl dark:bg-accent-lime/10">
            <Leaf className="w-5 h-5 text-primary dark:text-[#a3f5ae]" />
          </div>
          <span className={`font-outfit text-xl font-bold tracking-tight ${!isScrolled && !darkMode ? 'text-white' : 'text-slate-900 dark:text-[#e2f0e6]'}`}>
            Avyan <span className="text-primary dark:text-[#a3f5ae]">Prakriti</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Council', 'Events', 'Induction'].map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={() => setActiveSection(id)}
                className={`text-sm font-medium transition-all duration-300 relative py-2 
                  ${isActive 
                    ? 'text-primary dark:text-[#a3f5ae] [text-shadow:0_0_10px_rgba(34,197,94,0.6)]' 
                    : !isScrolled && !darkMode ? 'text-white/90' : 'text-slate-600 dark:text-[#e2f0e6]/80'
                  }`}
              >
                {item}
                {/* Active Indicator Line */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary dark:bg-[#a3f5ae] animate-in fade-in slide-in-from-bottom-2 duration-300" />
                )}
              </a>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full text-slate-600 dark:text-[#e2f0e6]">
          {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
}