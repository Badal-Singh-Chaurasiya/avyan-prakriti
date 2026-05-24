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
  // Sample suggestions list (would come from API in real app)
  const [suggestions, setSuggestions] = useState([
    { id: 1, title: 'More recycling bins', category: 'improvement', message: 'Place more recycling bins across campus, especially near cafeterias.' },
    { id: 2, title: 'Monthly cleanups', category: 'initiative', message: 'Organize monthly community cleanups with volunteers.' },
    { id: 3, title: 'Awareness campaign', category: 'feedback', message: 'Run campaigns to educate students about waste segregation.' }
  ]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

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
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Your Voice Matters
          </h2>
        </motion.div>

        {/* Form + Inbox Container - Split Design */}
        <motion.div
          className="rounded-3xl shadow-xl max-w-4xl mx-auto overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="md:flex">
            {/* Inbox (left) - Soft Gray Background */}
            <aside className="md:w-80 w-full bg-stone-100/60 dark:bg-stone-900/40 md:border-r border-stone-200 dark:border-stone-700/40">
            <div className="px-4 py-3 border-b border-stone-300 dark:border-stone-600/50 flex items-center justify-between bg-stone-100/40 dark:bg-stone-800/30">
                <h4 className="font-outfit font-semibold text-stone-900 dark:text-white">Inbox</h4>
                <span className="text-sm text-stone-600 dark:text-stone-400 font-bold">{suggestions.length}</span>
              </div>
              <div className="px-4 py-4 max-h-96 overflow-y-auto space-y-2">
                {suggestions.map(s => {
                  const categoryColors = {
                    'improvement': { bg: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-700 dark:text-amber-400' },
                    'initiative': { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-700 dark:text-emerald-400' },
                    'feedback': { bg: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-700 dark:text-blue-400' },
                    'concern': { bg: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-700 dark:text-rose-400' }
                  };
                  const colors = categoryColors[s.category] || categoryColors['improvement'];

                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSuggestion(s)}
                      className="w-full text-left px-4 py-3.5 rounded-xl transition-all border border-stone-300 dark:border-stone-600/50 bg-stone-50/50 dark:bg-stone-900/30 hover:bg-stone-100/60 dark:hover:bg-stone-800/40 hover:border-emerald-300 dark:hover:border-emerald-700/50 hover:shadow-md active:scale-98"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="font-jakarta font-semibold text-sm text-stone-900 dark:text-white mb-1.5">{s.title}</div>
                          <div className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${colors.bg} ${colors.text}`}>
                            {s.category}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              {selectedSuggestion && (
                <div className="mx-4 mb-4 p-4 bg-white dark:bg-stone-800/60 rounded-xl border border-stone-300 dark:border-stone-600/50">
                  <h5 className="font-outfit font-semibold text-sm mb-2 text-stone-950 dark:text-white">{selectedSuggestion.title}</h5>
                  <p className="text-xs text-stone-700 dark:text-stone-300">{selectedSuggestion.message}</p>
                </div>
              )}
            </aside>

            {/* Form (right) - Pure White Background */}
            <div className="flex-1 bg-white dark:bg-darkbg-card p-6 sm:p-8">
              {/* Background Glow */}
              
          
              {isSubmitted ? (
            /* Success State */
              <motion.div
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
                    <CheckCircle className="w-20 h-20 text-emerald-600 dark:text-emerald-400" />
                  </motion.div>
                </div>
                <h3 className="font-outfit text-2xl font-black text-stone-950 dark:text-white mt-4">
                  Thank You!
                </h3>
                <p className="font-jakarta text-stone-700 dark:text-stone-300 text-sm sm:text-base">
                  Your suggestion has been received. We appreciate your valuable input and will review it carefully to enhance our environmental initiatives.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 mt-4"
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
                <label className="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-2 uppercase tracking-wide flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Better waste segregation bins"
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 dark:border-stone-700/50 bg-white dark:bg-stone-900/30 text-stone-900 dark:text-white placeholder-stone-500 dark:placeholder-stone-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/15 transition-all text-sm"
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
                <label className="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-2 uppercase tracking-wide">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 dark:border-stone-700/50 bg-white dark:bg-stone-900/30 text-stone-900 dark:text-white text-sm focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/15 transition-all"
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
                <label className="block text-[11px] font-bold text-stone-600 dark:text-stone-400 mb-2 uppercase tracking-wide">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your detailed suggestion..."
                  rows="5"
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 dark:border-stone-700/50 bg-white dark:bg-stone-900/30 text-stone-900 dark:text-white placeholder-stone-500 dark:placeholder-stone-500 text-sm focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/15 transition-all resize-none"
                  required
                />
              </motion.div>

              {/* Submit Button - Dark with Green Hover */}
              <motion.button
                type="submit"
                disabled={isLoading}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full bg-slate-800 hover:bg-emerald-600 dark:bg-slate-900 dark:hover:bg-emerald-600 disabled:opacity-60 text-white py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
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
            </div>
          </div>
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
              className="bg-stone-50/50 dark:bg-stone-900/30 rounded-2xl p-6 text-center border border-stone-200 dark:border-stone-800/60 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 20px -5px rgba(0,0,0,0.05)", borderColor: "rgba(16, 185, 129, 0.3)" }}
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
