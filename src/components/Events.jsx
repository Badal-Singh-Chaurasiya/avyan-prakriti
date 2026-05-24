import React from 'react';
import { motion } from 'framer-motion';

export default function Events() {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
        >
          {/* Forest Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop')",
              backgroundPosition: 'center'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/60 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="font-jakarta text-sm font-bold text-emerald-300 uppercase tracking-wide">Upcoming Events</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-outfit text-5xl md:text-7xl font-black text-white mb-6 leading-tight max-w-3xl"
            >
              Something Green is <span className="text-emerald-300">Sprouting</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-jakarta text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
            >
              We are currently nurturing our next set of initiatives. Stay tuned for our upcoming environmental action drives.
            </motion.p>

            {/* CTA Button */}
            {/* <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-outfit font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Notify Me
            </motion.button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
