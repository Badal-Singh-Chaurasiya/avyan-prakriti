import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/avyanprakriti/',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    color: 'hover:bg-pink-600 dark:hover:bg-pink-500 hover:border-pink-600 dark:hover:border-pink-500 hover:text-white',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/avyanprakriti',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    color: 'hover:bg-blue-700 dark:hover:bg-blue-600 hover:border-blue-700 dark:hover:border-blue-600 hover:text-white',
  },
  {
    name: 'Twitter / X',
    href: 'https://x.com/avyanprakriti',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'hover:bg-gray-900 dark:hover:bg-gray-100 hover:border-gray-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-gray-900',
  },
  {
    name: 'Email',
    href: 'mailto:avyanprakriti@gmail.com',
    icon: <Mail className="w-5 h-5" />,
    color: 'hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:border-emerald-600 dark:hover:border-emerald-500 hover:text-white',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-emerald-300/60 dark:border-emerald-800/60 bg-white/80 dark:bg-[#07130c]/80 text-emerald-950 dark:text-emerald-50 placeholder-emerald-700/50 dark:placeholder-emerald-400/50 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all text-sm font-jakarta outline-none';
  const labelClass =
    'block text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-2 font-outfit';

  return (
    <section
      id="contact"
      className="relative bg-transparent dark:bg-gradient-to-b dark:from-[#050b08] dark:via-[#07130c] dark:to-[#050b08] py-24 overflow-hidden transition-colors"
    >
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-200/50 dark:bg-emerald-800/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200/40 dark:bg-teal-800/20 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="inline-block text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-[0.25em] uppercase bg-emerald-100/80 dark:bg-emerald-900/40 border border-emerald-300/60 dark:border-emerald-700 px-4 py-1.5 rounded-full mb-5 shadow-sm">
            GET IN TOUCH
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-emerald-950 dark:text-white leading-tight">
            Let's <span className="nature-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-emerald-900/80 dark:text-emerald-100/70 text-base sm:text-lg max-w-xl mx-auto font-jakarta leading-relaxed">
            Have a question, want to collaborate, or just say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-3xl mx-auto">

          {/* Info + Socials */}
          <div className="reveal w-full space-y-10">

            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-emerald-200/60 dark:border-emerald-800/60 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-200/60 dark:bg-emerald-800/60 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-800 dark:text-emerald-300" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1 font-outfit">Email Us</p>
                  <a
                    href="mailto:avyanprakriti@gmail.com"
                    className="text-sm text-emerald-900 dark:text-emerald-100 font-semibold hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors font-jakarta"
                  >
                    avyanprakriti@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-emerald-200/60 dark:border-emerald-800/60 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-teal-200/60 dark:bg-teal-800/60 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-800 dark:text-teal-300" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-1 font-outfit">Location</p>
                  <p className="text-sm text-emerald-900 dark:text-emerald-100 font-semibold font-jakarta">
                    NIT Rourkela, Odisha — 769 008
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="text-center pt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-6 font-outfit">
                Follow Our Journey
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {SOCIAL_LINKS.map(({ name, href, icon, color }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full border border-emerald-300/60 dark:border-emerald-700/60 text-emerald-900 dark:text-emerald-100 bg-white dark:bg-[#07130c] text-sm font-semibold font-jakarta transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md ${color}`}
                  >
                    {icon}
                    <span>{name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mission reminder */}
            <div className="glass-green rounded-3xl p-8 border border-emerald-300/60 dark:border-emerald-700/50 text-center mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-3 font-outfit">Our Promise</p>
              <p className="text-base text-emerald-900/90 dark:text-emerald-100/90 font-jakarta leading-relaxed italic max-w-xl mx-auto">
                "Every hand extended in service is a small step towards a greener tomorrow. Together, we make environmental consciousness an instinct."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
