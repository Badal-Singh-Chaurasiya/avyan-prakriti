import React, { useState } from 'react';
import { Send, CheckCircle, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Suggestions() {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    category: 'improvement'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { value: 'improvement', label: 'Improvement' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'initiative', label: 'Initiative' },
    { value: 'concern', label: 'Concern' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ title: '', message: '', category: 'improvement' });
    }, 1500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ title: '', message: '', category: 'improvement' });
  };

  return (
    <section id="suggestions" className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/10 dark:via-darkbg dark:to-secondary/10 border-b border-gray-100 dark:border-darkbg-border/20 transition-colors">
      <div className="px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-secondary/15 dark:bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold font-jakarta uppercase tracking-wider">
            Feedback
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Your Voice Matters
          </h2>
        </motion.div>

        {/* Form Container */}
        <motion.div
          className="glass-card rounded-3xl p-6 sm:p-10 border border-white/30 dark:border-white/5 shadow-xl max-w-2xl mx-auto overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {isSubmitted ? (
            /* Success State */
            <motion.div
              className="text-center space-y-6 relative z-10"
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
                Thank You!
              </h3>
              <p className="font-jakarta text-slate-600 dark:text-darkbg-text/70 text-sm sm:text-base">
                Your suggestion has been received. We appreciate your valuable input and will review it carefully to enhance our environmental initiatives.
              </p>
              <button
                onClick={handleReset}
                className="bg-primary hover:bg-primary/90 dark:bg-secondary dark:hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95"
              >
                Send Another Suggestion
              </button>
            </motion.div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Title Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block font-jakarta font-semibold text-slate-900 dark:text-white mb-2 text-sm">
                  <MessageSquare className="w-4 h-4 inline mr-2 text-secondary" />
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Better waste segregation bins"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-darkbg-border/30 bg-white dark:bg-darkbg-card text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  required
                />
              </motion.div>

              {/* Category Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block font-jakarta font-semibold text-slate-900 dark:text-white mb-2 text-sm">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-darkbg-border/30 bg-white dark:bg-darkbg-card text-slate-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block font-jakarta font-semibold text-slate-900 dark:text-white mb-2 text-sm">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your detailed suggestion..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-darkbg-border/30 bg-white dark:bg-darkbg-card text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 disabled:opacity-60 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Suggestion
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Tips Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Be Specific",
              description: "Provide clear details about your suggestion so we can better understand and implement it."
            },
            {
              title: "Focus on Impact",
              description: "Share how your suggestion could improve our environmental initiatives or community reach."
            },
            {
              title: "Join Us",
              description: "Consider becoming a volunteer to help implement these positive changes on campus."
            }
          ].map((tip, idx) => (
            <motion.div
              key={idx}
              className="glass-card rounded-2xl p-6 text-center border border-white/30 dark:border-white/5"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="font-outfit font-bold text-slate-900 dark:text-white mb-2">
                {tip.title}
              </h3>
              <p className="font-jakarta text-sm text-slate-600 dark:text-darkbg-text/70">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
