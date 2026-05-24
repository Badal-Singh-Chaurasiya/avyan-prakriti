import React, { useState, useEffect, useRef } from 'react';
import { Leaf } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Transformation from './components/Transformation';
import Team from './components/Team';
import Induction from './components/Induction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JoinForm from './components/JoinForm';

// Leaf SVG shapes for variety
const LEAF_PATHS = [
  "M12 2C12 2 4 8 4 14a8 8 0 0016 0C20 8 12 2 12 2z",
  "M12 3C8 3 3 8 3 13c0 4.5 4 8 9 8s9-3.5 9-8C21 8 16 3 12 3z",
  "M5 12C5 7 9 3 14 3c3 0 5 2 5 5 0 6-6 12-9 12S5 17 5 12z",
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leaves, setLeaves] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Synchronize theme state with the HTML document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Generate falling leaves
  useEffect(() => {
    const generatedLeaves = Array.from({ length: 14 }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      // Negative delay means they start scattered across the screen immediately, continuously looping
      delay: `-${Math.random() * 25}s`,
      duration: `${Math.random() * 12 + 14}s`,
      size: Math.random() * 22 + 10,
      rotation: `${Math.random() * 360}deg`,
      sway: `${(Math.random() > 0.5 ? 1 : -1) * (Math.random() * 120 + 40)}px`,
      // Increased transparency (0.1 to 0.25 max opacity)
      opacity: Math.random() * 0.15 + 0.1,
      pathIdx: index % LEAF_PATHS.length,
      // Adjust hue and lightness for leaves based on dark mode in inline style below
      hue: Math.floor(Math.random() * 40 + 110), // greens: hsl 110-150
    }));
    setLeaves(generatedLeaves);
  }, []);

  // Scroll-reveal IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden transition-colors duration-300">
      {/* ── Global Falling Leaves Layer ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-40" aria-hidden="true">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute leaf-particle"
            style={{
              left: leaf.left,
              top: '-6%',
              animationDelay: leaf.delay,
              '--fall-duration': leaf.duration,
              '--leaf-rotation': leaf.rotation,
              '--sway-distance': leaf.sway,
              '--leaf-opacity': leaf.opacity,
              color: darkMode ? `hsl(${leaf.hue}, 60%, 55%)` : `hsl(${leaf.hue}, 60%, 35%)`,
            }}
          >
            <svg
              width={leaf.size}
              height={leaf.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d={LEAF_PATHS[leaf.pathIdx]} />
            </svg>
          </div>
        ))}
      </div>

      {/* ── App Content ── */}
      <div className="relative z-20">
        <Navbar 
          openModal={() => setIsModalOpen(true)} 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main>
          <Hero openModal={() => setIsModalOpen(true)} />
          <About />
          <Events />
          <Team openModal={() => setIsModalOpen(true)} />
          <Transformation />
          <Induction openModal={() => setIsModalOpen(true)} />
          <Contact />
        </main>

        <Footer />

        <JoinForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}
