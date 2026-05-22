import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, openModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy: observe sections and update active nav link
  useEffect(() => {
    const ids = ['home','about','council','events','induction','suggestions','team','transformation'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -50% 0px', threshold: 0.25 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/80 dark:bg-darkbg-card/85 backdrop-blur-md shadow-md border-b border-gray-200/50 dark:border-darkbg-border/60' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 dark:bg-accent-lime/10 dark:group-hover:bg-accent-lime/20 transition-colors">
            <Leaf className="w-5 h-5 text-primary dark:text-[#a3f5ae]" />
          </div>
          <span className="font-outfit text-xl font-bold tracking-tight text-slate-900 dark:text-[#e2f0e6]">
            Avyan <span className="text-primary dark:text-[#a3f5ae]">Prakriti</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-jakarta">
          {['About', 'Council', 'Events', 'Induction', 'Suggestions'].map((item) => {
            const id = item.toLowerCase();
            const active = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`text-sm font-medium text-slate-600 dark:text-[#e2f0e6]/80 hover:text-primary dark:hover:text-secondary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary dark:after:bg-secondary after:transition-all hover:after:w-full ${active ? 'after:w-full' : ''}`}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Actions (Theme Switcher) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-darkbg-border/60 text-slate-600 dark:text-[#e2f0e6] transition-colors"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-slate-600 dark:text-[#e2f0e6] transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-[#e2f0e6] hover:bg-gray-100 dark:hover:bg-darkbg-border/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-darkbg-card border-b border-gray-200 dark:border-darkbg-border py-4 px-6 flex flex-col gap-4 shadow-xl animate-fade-in-up">
          {['About', 'Council', 'Events', 'Induction', 'Suggestions'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 dark:text-[#e2f0e6]/80 hover:text-primary dark:hover:text-secondary py-2 border-b border-gray-100 dark:border-darkbg-border/20 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
