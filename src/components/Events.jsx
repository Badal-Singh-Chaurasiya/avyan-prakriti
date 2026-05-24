import React, { useState, useEffect } from 'react';
import { Calendar, Users, MapPin, ChevronLeft, ChevronRight, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-slide effect with hover pause
  useEffect(() => {
    if (isHovering) return; // Pause on hover
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isHovering]);

  const events = [
    {
      id: 1,
      title: "Mega Hostel Cleanup Drive",
      date: "March 15, 2026",
      location: "Visvesvaraya Hall, NITR",
      description: "Large-scale cleanup across all hostel blocks focusing on plastic waste segregation and paper collection.",
      participants: 85,
      capacity: 100,
      status: "12 Seats Left",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "AASRA Notebook Redistribution",
      date: "March 22, 2026",
      location: "Sector-2 Schools",
      description: "Distribution of 150+ hand-bound notebooks to underprivileged students in collaboration with AASRA NGO.",
      participants: 42,
      capacity: 50,
      status: "8 Seats Left",
      image: "https://images.unsplash.com/photo-1427504494785-cdfc993b6a7b?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Riverside Cleanup Expedition",
      date: "April 5, 2026",
      location: "Tons River Bank",
      description: "Environmental restoration drive targeting plastic removal and vegetation planning for riverside ecosystem.",
      participants: 120,
      capacity: 120,
      status: "Full",
      image: "https://images.unsplash.com/photo-1559614853-a90b9b248d16?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Awareness Workshop Series",
      date: "April 12, 2026",
      location: "NITR Auditorium",
      description: "Educational sessions on waste management, recycling practices, and sustainable campus living.",
      participants: 300,
      capacity: 500,
      status: "200 Seats Left",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-white via-primary/5 to-white dark:from-darkbg dark:via-primary/5 dark:to-darkbg border-b border-gray-100 dark:border-darkbg-border/20 transition-colors overflow-hidden">
      <div className="px-4 sm:px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-outfit text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Join Our Upcoming Drives
          </h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side (65%) - Main Event Slider */}
            <div className="lg:col-span-2">
              <motion.div 
              className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Floating Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 dark:bg-black/30 dark:hover:bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Previous event"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Floating Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 dark:bg-black/30 dark:hover:bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Next event"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Background Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-2 text-secondary">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-semibold font-jakarta">{event.date}</span>
                      </div>
                      
                      <h3 className="font-outfit text-2xl sm:text-3xl font-black text-white">
                        {event.title}
                      </h3>
                      
                      <p className="font-jakarta text-white/80 text-sm sm:text-base leading-relaxed max-w-xl">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap gap-4 pt-2">
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <MapPin className="w-4 h-4 text-secondary" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <Users className="w-4 h-4 text-secondary" />
                          {event.participants} volunteers
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Dots and Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              {/* Slide Indicators */}
              <div className="flex justify-center gap-2">
                {events.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-primary dark:bg-secondary w-8'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to event ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            </div>

          {/* Right Side (35%) - Live Feed Activity Inbox */}
          <motion.div 
            className="lg:col-span-1 bg-gradient-to-br from-emerald-50/80 to-stone-50/60 dark:from-emerald-950/20 dark:to-stone-900/30 rounded-3xl p-6 border border-emerald-200/50 dark:border-emerald-900/40 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Live Feed Header */}
            <div className="mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="font-outfit text-lg font-black text-emerald-950 dark:text-emerald-50">Live Activity Feed</h3>
            </div>

            {/* Event Items Scroll */}
            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {events.map((event, idx) => {
                const isFull = event.status === "Full";
                const isActive = idx === currentSlide;
                
                return (
                  <motion.div
                    key={event.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`p-4 rounded-2xl cursor-pointer transition-all ${
                      isActive 
                        ? 'bg-white dark:bg-stone-800 border-2 border-emerald-500 dark:border-emerald-400 shadow-md' 
                        : 'bg-white/60 dark:bg-stone-800/40 border border-emerald-200/30 dark:border-emerald-900/30 hover:bg-white/80 dark:hover:bg-stone-800/60'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Event Title */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="font-outfit font-bold text-sm text-emerald-950 dark:text-white flex-1 line-clamp-2">
                        {event.title}
                      </p>
                      {isFull ? (
                        <span className="flex items-center gap-1 bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-300 px-2 py-1 rounded-full text-[10px] font-extrabold whitespace-nowrap">
                          <AlertCircle className="w-3 h-3" />
                          Full
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full text-[10px] font-extrabold whitespace-nowrap">
                          <CheckCircle className="w-3 h-3" />
                          {event.status}
                        </span>
                      )}
                    </div>

                    {/* Date and Location */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span className="font-jakarta text-xs">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span className="font-jakarta text-xs line-clamp-1">{event.location}</span>
                      </div>
                    </div>

                    {/* Participants */}
                    <div className="mt-2 flex items-center gap-2 text-stone-600 dark:text-stone-400 text-xs">
                      <Users className="w-3 h-3" />
                      <span className="font-jakarta">{event.participants}/{event.capacity} volunteers</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Action Button */}
            <motion.button
              className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 dark:from-emerald-600 dark:to-emerald-700 dark:hover:from-emerald-700 dark:hover:to-emerald-800 text-white font-outfit font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Register Interest
            </motion.button>
          </motion.div>
        </div>
      </div>

    </div>
    </section>
  );
}
