import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Induction() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    year: '',
    skills: '',
    reason: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.department || !formData.year || !formData.reason.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', department: '', year: '', skills: '', reason: '' });
    setIsSubmitted(false);
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
    <section id="induction" className="py-24 bg-gradient-to-br from-white via-secondary/5 to-white dark:from-darkbg dark:via-secondary/5 dark:to-darkbg border-b border-gray-100 dark:border-darkbg-border/20 transition-colors">
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
            Join Our Movement
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Become a Changemaker
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        {/* Split Layout: Form & Info */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Info Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Why Join Us?
              </h3>
              <p className="font-jakarta text-slate-600 dark:text-darkbg-text/70 leading-relaxed">
                Avyan Prakriti is more than a club—it's a movement to embed sustainability into campus culture. We believe in action over words, and community over competition.
              </p>
            </div>

            {[
              {
                icon: "✓",
                title: "100% Volunteer-Driven",
                desc: "No membership fees, pure passion for the environment"
              },
              {
                icon: "✓",
                title: "Data-Backed Impact",
                desc: "Every kilogram collected is documented and tracked"
              },
              {
                icon: "✓",
                title: "NGO Partnerships",
                desc: "Collaborate with AASRA for real-world social impact"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (idx + 1) }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="font-jakarta text-sm text-slate-600 dark:text-darkbg-text/70">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Form Section */}
          <motion.div
            className="glass-card rounded-3xl p-6 sm:p-8 border border-white/30 dark:border-white/5 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              /* Success State */
              <motion.div
                className="text-center space-y-6 py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <CheckCircle className="w-16 h-16 text-secondary" />
                  </motion.div>
                </div>
                <h3 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white">
                  Application Received!
                </h3>
                <p className="font-jakarta text-slate-600 dark:text-darkbg-text/70">
                  Welcome to the movement, <strong>{formData.name}</strong>! Our team will review your application and reach out within 48 hours.
                </p>
                <div className="bg-secondary/10 dark:bg-secondary/5 border border-secondary/30 dark:border-secondary/10 rounded-2xl p-4 text-left text-xs space-y-2 font-jakarta text-slate-600 dark:text-darkbg-text/70">
                  <div><strong>Department:</strong> {formData.department}</div>
                  <div><strong>Year:</strong> {formData.year}</div>
                  {formData.skills && <div><strong>Skills:</strong> {formData.skills}</div>}
                </div>
                <button
                  onClick={handleReset}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95"
                >
                  Apply Again
                </button>
              </motion.div>
            ) : (
              /* Form State */
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-outfit text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Application Form
                </h3>

                {error && (
                  <div className="text-xs font-semibold text-red-600 bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-900/30">
                    {error}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-darkbg-text/80 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-darkbg-border/30 bg-white dark:bg-darkbg-card text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
                    required
                  />
                </div>

                {/* Department */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-darkbg-text/80 uppercase tracking-wider mb-2">
                    Department *
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-darkbg-border/30 bg-white dark:bg-darkbg-card text-slate-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
                    required
                  >
                    <option value="">Select department</option>
                    <option value="cse">Computer Science Engineering</option>
                    <option value="mechanical">Mechanical Engineering</option>
                    <option value="civil">Civil Engineering</option>
                    <option value="electrical">Electrical Engineering</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Year */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-darkbg-text/80 uppercase tracking-wider mb-2">
                    Year *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-darkbg-border/30 bg-white dark:bg-darkbg-card text-slate-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
                    required
                  >
                    <option value="">Select year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-darkbg-text/80 uppercase tracking-wider mb-2">
                    Skills / Interests
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="e.g., Design, Content, Logistics, Web Dev"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-darkbg-border/30 bg-white dark:bg-darkbg-card text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
                  />
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-darkbg-text/80 uppercase tracking-wider mb-2">
                    Why do you want to join? *
                  </label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Share your motivation and goals..."
                    rows="3"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-darkbg-border/30 bg-white dark:bg-darkbg-card text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 mt-2"
                >
                  Apply for Induction
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
