import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Induction from './components/Induction';
import JoinForm from './components/JoinForm';
// import Suggestions from './components/Suggestions';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Synchronize theme state with the HTML document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen bg-gray-50 text-slate-900 dark:bg-[#060d08] dark:text-[#e2f0e6] transition-colors duration-300 overflow-x-hidden font-jakarta">
      {/* Dynamic Floating Navbar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        openModal={() => setIsModalOpen(true)} 
      />

      {/* Primary Landing Page Sections */}
      <main>
        <Hero openModal={() => setIsModalOpen(true)} />
        <About />
        <Team openModal={() => setIsModalOpen(true)} />
        <Events />
        <Induction />
        {/* <Suggestions /> */}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Join Drive Form Dialog */}
      <JoinForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
