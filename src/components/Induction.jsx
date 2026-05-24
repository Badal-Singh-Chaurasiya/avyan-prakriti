import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Leaf, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const BENEFITS = [
  {
    icon: Leaf,
    title: '100% Volunteer-Driven',
    desc: 'No membership fees — pure passion for the environment and community.',
  },
  {
    icon: BarChart3,
    title: 'Data-Backed Impact',
    desc: 'Every kilogram collected is documented, tracked, and published.',
  },
  {
    icon: Users,
    title: 'Synergised Social Impact',
    desc: 'Fusing environmental cleanup with student welfare alongside other NGOs and clubs.',
  },
];

const DEPARTMENTS = [
  'Computer Science Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Electrical Engineering',
  'Electronics & Communication',
  'Chemical Engineering',
  'Metallurgical Engineering',
  'Life Sciences',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Other',
];

export default function Induction({ openModal }) {

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-emerald-300/60 dark:border-emerald-800/60 bg-white/80 dark:bg-[#07130c]/80 text-emerald-950 dark:text-emerald-50 placeholder-emerald-700/50 dark:placeholder-emerald-400/50 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all text-sm font-jakarta outline-none';
  const labelClass =
    'block text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-2 font-outfit';

  return (
    <section
      id="induction"
      className="relative bg-transparent dark:bg-gradient-to-b dark:from-[#050b08] dark:via-[#06110c] dark:to-[#050b08] py-24 overflow-hidden transition-colors"
    >
      {/* Background blobs */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-emerald-200/50 dark:bg-emerald-800/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-teal-200/40 dark:bg-teal-800/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="reveal text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-[0.25em] uppercase bg-emerald-100/80 dark:bg-emerald-900/40 border border-emerald-300/60 dark:border-emerald-700 px-4 py-1.5 rounded-full mb-5 shadow-sm">
            JOIN THE MOVEMENT
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-emerald-950 dark:text-white leading-tight">
            Become a <span className="nature-gradient">Changemaker</span>
          </h2>
          <p className="mt-4 text-emerald-900/80 dark:text-emerald-100/70 text-base sm:text-lg max-w-2xl mx-auto font-jakarta leading-relaxed">
            Be part of the student force shaping a greener, more sustainable NIT Rourkela.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

          <motion.div
            className="space-y-10 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-emerald-950 dark:text-emerald-50 mb-3">Why Join Us?</h3>
              <p className="font-jakarta text-emerald-900/80 dark:text-emerald-100/70 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
                Avyan Prakriti is more than a club — it's a movement to embed sustainability into campus culture.
                We believe in action over words, and community over competition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  className="flex flex-col items-center text-center group bg-white dark:bg-[#07130c] p-6 rounded-3xl shadow-sm border border-emerald-100 dark:border-emerald-800/60 hover:shadow-md hover:-translate-y-1 transition-all"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 * (i + 1), duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-200/60 dark:bg-emerald-800/60 group-hover:bg-emerald-300/80 dark:group-hover:bg-emerald-700/80 transition-colors flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-emerald-800 dark:text-emerald-300" />
                  </div>
                  <h4 className="font-outfit font-bold text-emerald-950 dark:text-emerald-50 text-base mb-2">{title}</h4>
                  <p className="font-jakarta text-xs text-emerald-900/70 dark:text-emerald-100/60 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative stat pill */}
            <div className="glass-green rounded-3xl p-8 border border-emerald-300/60 dark:border-emerald-700/50">
              <p className="text-sm text-emerald-800 dark:text-emerald-300 font-bold uppercase tracking-wider mb-5 font-outfit">What You'll Gain</p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {['Leadership Skills', 'Event Management', 'NGO Collaboration', 'Content Creation', 'Environmental Science', 'Community Building'].map((tag) => (
                  <span key={tag} className="text-xs sm:text-sm bg-emerald-100/80 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-200 border border-emerald-300/60 dark:border-emerald-700/60 px-4 py-1.5 rounded-full font-jakarta">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://forms.gle/VWqoo3v5RttUbWWL7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold font-outfit text-lg shadow-xl shadow-emerald-200/50 dark:shadow-none transition-all hover:scale-105 active:scale-95"
              >
                Apply for Induction
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
