import React from 'react';
import { Leaf, Heart, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 dark:bg-darkbg-card dark:border-t dark:border-darkbg-border/30 py-16 transition-colors">
      <div className="px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800 dark:border-darkbg-border/30">
          
          {/* Logo & description */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div 
              className="flex items-center gap-2 group cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="bg-emerald-500/10 p-2 rounded-xl text-emerald-400">
                <Leaf className="w-5 h-5 fill-current" />
              </div>
              <span className="font-outfit text-xl font-bold tracking-tight text-white font-outfit">
                Avyan <span className="text-emerald-400">Prakriti</span>
              </span>
            </div>
            
            <p className="font-jakarta text-sm leading-relaxed text-slate-400 max-w-sm">
              Professional environmental stewardship at NIT Rourkela. Bridging collective student passion with structured, data-backed waste recycling expeditions.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-center text-slate-400 border border-slate-800" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-center text-slate-400 border border-slate-800" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-center text-slate-400 border border-slate-800" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-sm font-jakarta">
              <li><a href="#about" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About</a></li>
              <li><a href="#council" className="hover:text-secondary transition-colors">Council</a></li>
              <li><a href="#events" className="hover:text-secondary transition-colors">Events</a></li>
              <li><a href="#induction" className="hover:text-secondary transition-colors">Induction</a></li>
              {/* <li><a href="#suggestions" className="hover:text-secondary transition-colors">Suggestions</a></li> */}
            </ul>
          </div>

          {/* Outreach scope */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="font-outfit text-sm font-bold text-white uppercase tracking-wider">Campaign Outreach</h4>
            <p className="font-jakarta text-xs leading-relaxed text-slate-400">
              Active campaigns conducted in Visvesvaraya (VS) Hall and Kiran Mazumdar-Shaw (KMS) Hall, expanding to Satish Dhawan (SD) and Homi Bhabha (HB) Halls in Spring 2026.
            </p>
            {/* <div className="text-xs font-bold text-emerald-400 font-outfit uppercase bg-emerald-950/40 border border-emerald-900/30 px-3 py-2 rounded-xl w-fit">
              Collaboration with AASRA NGO
            </div> */}
          </div>

        </div>

        {/* Bottom credits & custom tribute to Developer Badal */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-jakarta text-slate-500">
          <div>
            © 2026 Avyan Prakriti. Together We Can Make This Change Happen.
          </div>
          
          {/* <div className="flex items-center gap-2 bg-slate-900/60 dark:bg-darkbg-border/20 border border-slate-800 dark:border-darkbg-border/40 px-4 py-2 rounded-2xl text-slate-300">
            <Code className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>
              Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline animate-bounce" /> by{' '}
              <strong className="text-emerald-400 font-outfit">Badal</strong> (Web Dev Head, AP)
            </span>
          </div> */}
          <div class="flex flex-col items-start col-span-1">
            <a href="mailto:avyanprakriti@gmail.com" class="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition-colors duration-300 mb-6">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
              avyanprakriti@gmail.com
            </a>
            </div>
        </div>
        </div>
    </footer>
  );
}
