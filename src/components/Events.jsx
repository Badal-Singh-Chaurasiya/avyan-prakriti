import React, { useState } from 'react';
import { Calendar, Users, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      title: "Mega Hostel Cleanup Drive",
      date: "March 15, 2026",
      location: "Visvesvaraya Hall, NITR",
      description: "Large-scale cleanup across all hostel blocks focusing on plastic waste segregation and paper collection.",
      participants: 85,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "AASRA Notebook Redistribution",
      date: "March 22, 2026",
      location: "Sector-2 Schools",
      description: "Distribution of 150+ hand-bound notebooks to underprivileged students in collaboration with AASRA NGO.",
      participants: 42,
      image: "https://images.unsplash.com/photo-1427504494785-cdfc993b6a7b?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Riverside Cleanup Expedition",
      date: "April 5, 2026",
      location: "Tons River Bank",
      description: "Environmental restoration drive targeting plastic removal and vegetation planning for riverside ecosystem.",
      participants: 120,
      image: "https://images.unsplash.com/photo-1559614853-a90b9b248d16?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Awareness Workshop Series",
      date: "April 12, 2026",
      location: "NITR Auditorium",
      description: "Educational sessions on waste management, recycling practices, and sustainable campus living.",
      participants: 300,
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
          <div className="inline-block bg-secondary/15 dark:bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold font-jakarta uppercase tracking-wider">
            Featured Events
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Join Our Upcoming Drives
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Event Card Slider */}
          <motion.div 
            className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
                    
                    <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">
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

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-primary hover:bg-primary/90 dark:bg-secondary dark:hover:bg-secondary/90 text-white shadow-lg transition-all hover:scale-110 active:scale-95"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-primary hover:bg-primary/90 dark:bg-secondary dark:hover:bg-secondary/90 text-white shadow-lg transition-all hover:scale-110 active:scale-95"
              aria-label="Next event"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
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
    </section>
  );
}
