import React, { useState, useEffect } from 'react';
import { X, Sprout, Award, Sparkles } from 'lucide-react';

export default function JoinForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '', roll: '', hall: '', interest: 'campaigns',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError]             = useState('');
  const [stewardId]                   = useState(() => `AP-${Math.floor(1000 + Math.random() * 9000)}`);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else        document.body.style.overflow = '';
    return ()  => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.roll.trim() || !formData.hall) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setFormData({ name: '', roll: '', hall: '', interest: 'campaigns' });
    setIsSubmitted(false);
    setError('');
    onClose();
  };

  const inputClass =
    'w-full bg-white dark:bg-[#07130c] border border-emerald-200 dark:border-emerald-800 rounded-xl px-4 py-3 text-emerald-950 dark:text-emerald-50 placeholder-emerald-500/60 dark:placeholder-emerald-600/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all text-sm font-jakarta';
  const labelClass =
    'block text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-1.5 font-outfit';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Join Avyan Prakriti">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-emerald-950/60 dark:bg-black/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-[#06110c] w-full max-w-md rounded-3xl shadow-2xl shadow-emerald-900/20 dark:shadow-none z-10 overflow-hidden animate-fade-in-up border border-emerald-100 dark:border-emerald-800">
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500" />

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-7 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sprout className="w-5 h-5 text-emerald-500 dark:text-emerald-400 animate-bounce" aria-hidden="true" />
                  <h3 className="font-outfit text-2xl font-extrabold text-emerald-950 dark:text-emerald-50">Join Avyan Prakriti</h3>
                </div>
                <p className="text-xs text-emerald-700/80 dark:text-emerald-300/80 font-jakarta">
                  Volunteer for our next hostel recycling drive at NIT Rourkela.
                </p>
              </div>

              {error && (
                <p className="text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 p-3 rounded-xl font-jakarta">
                  {error}
                </p>
              )}

              {/* Full Name */}
              <div>
                <label htmlFor="jf-name" className={labelClass}>Full Name *</label>
                <input
                  id="jf-name"
                  type="text"
                  placeholder="e.g. Priyanshu Panda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  required
                  autoComplete="name"
                />
              </div>

              {/* Roll Number */}
              <div>
                <label htmlFor="jf-roll" className={labelClass}>NITR Roll Number *</label>
                <input
                  id="jf-roll"
                  type="text"
                  placeholder="e.g. 122XX0000"
                  value={formData.roll}
                  onChange={(e) => setFormData({ ...formData, roll: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>

              {/* Hall */}
              <div>
                <label htmlFor="jf-hall" className={labelClass}>Hall of Residence *</label>
                <select
                  id="jf-hall"
                  value={formData.hall}
                  onChange={(e) => setFormData({ ...formData, hall: e.target.value })}
                  className={inputClass}
                  required
                >
                  <option value="">Select your hall</option>
                  <option value="VS">Visvesvaraya Hall (VS)</option>
                  <option value="KMS">Kiran Mazumdar-Shaw Hall (KMS)</option>
                  <option value="HB">Homi Bhabha Hall (HB)</option>
                  <option value="SD">Satish Dhawan Hall (SD)</option>
                  <option value="GDB">G.D. Birla Hall (GDB)</option>
                  <option value="MV">M. Visvesvaraya Hall (MV)</option>
                  <option value="MSS">M.S. Swaminathan Hall (MSS)</option>
                </select>
              </div>

              {/* Interest */}
              <div>
                <label htmlFor="jf-interest" className={labelClass}>Division of Interest</label>
                <select
                  id="jf-interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className={inputClass}
                >
                  <option value="campaigns">Environmental Campaigns &amp; Drives</option>
                  <option value="creative">Creative Design &amp; Posters</option>
                  <option value="webdev">Web Development &amp; Automation</option>
                  <option value="pr">PR, Outreach &amp; Communications</option>
                  <option value="research">R&amp;D and Segregation Metrics</option>
                  <option value="finance">Finance Division (Treasurer Intern)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white py-3.5 rounded-xl font-bold font-outfit text-base shadow-lg shadow-emerald-200 dark:shadow-none transition-all hover:scale-[1.02] active:scale-95 mt-2"
              >
                Submit Registration
              </button>
            </form>
          ) : (
            /* ── Success ── */
            <div className="text-center py-6 space-y-5">
              <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mx-auto">
                <Award className="w-10 h-10 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              </div>

              <div className="space-y-2">
                <h3 className="font-outfit text-2xl font-extrabold text-emerald-950 dark:text-emerald-50 flex items-center justify-center gap-1.5">
                  Welcome Aboard!
                  <Sparkles className="w-5 h-5 text-yellow-500 dark:text-yellow-400 fill-yellow-400 dark:fill-yellow-300" aria-hidden="true" />
                </h3>
                <p className="font-jakarta text-emerald-800/80 dark:text-emerald-100/80 text-sm leading-relaxed max-w-xs mx-auto">
                  Thank you for joining, <strong className="text-emerald-700 dark:text-emerald-300">{formData.name}</strong>! Our council team will reach out shortly.
                </p>
              </div>

              <div className="glass-green border border-emerald-300/60 dark:border-emerald-700/50 p-4 rounded-2xl text-left text-xs font-jakarta space-y-1.5 text-emerald-900 dark:text-emerald-100 max-w-xs mx-auto">
                <div><strong className="text-emerald-800 dark:text-emerald-300">Steward ID:</strong> {stewardId}</div>
                <div><strong className="text-emerald-800 dark:text-emerald-300">Roll Registered:</strong> {formData.roll.toUpperCase()}</div>
                <div><strong className="text-emerald-800 dark:text-emerald-300">Assigned Hall:</strong> {formData.hall} Hall</div>
              </div>

              <button
                onClick={handleClose}
                className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-bold font-outfit text-sm shadow-md shadow-emerald-200 dark:shadow-none transition-all hover:scale-105 active:scale-95"
              >
                Return Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
