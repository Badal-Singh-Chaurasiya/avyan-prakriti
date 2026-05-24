import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import AvyanLogo from '../assets/avyanlogo.png.jpeg';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // 1. Scroll effect for Navbar background with smooth tracking
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Optimized Scrollspy for graceful active state tracking
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
      { 
        rootMargin: '-50% 0px -50% 0px', 
        threshold: 0 
      }
    );
    
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'py-3 bg-white/80 dark:bg-darkbg-card/85 backdrop-blur-md shadow-md border-b border-gray-200/50 dark:border-darkbg-border/60' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-white p-1 rounded-full border-2 border-primary dark:border-[#a3f5ae] shadow-md">
            <img alt="Avyan Prakriti" className="w-12 h-12 rounded-full object-cover" src="/src/assets/avyanlogo.png.jpeg" /> 
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
                className={`text-sm font-medium relative py-2 px-1 group
                  ${isActive 
                    ? 'text-primary dark:text-[#a3f5ae] [text-shadow:0_0_10px_rgba(34,197,94,0.6)]' 
                    : !isScrolled && !darkMode ? 'text-white/90 hover:text-white' : 'text-slate-600 dark:text-[#e2f0e6]/80 hover:text-slate-900 dark:hover:text-[#e2f0e6]'
                  } transition-colors duration-300`}
              >
                {item}
                {/* Animated Underline */}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-emerald-400 dark:from-[#a3f5ae] dark:to-emerald-300 transition-all duration-500 ease-out ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
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