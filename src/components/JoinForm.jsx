import React, { useState } from 'react';
import { X, Sparkles, Sprout, Award } from 'lucide-react';

export default function JoinForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    hall: '',
    interest: 'campaigns'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

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

  const handleReset = () => {
    setFormData({ name: '', roll: '', hall: '', interest: 'campaigns' });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <div 
        onClick={handleReset}
        className="absolute inset-0 bg-[#060d08]/75 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative glass-card w-full max-w-lg rounded-[32px] p-6 sm:p-10 border border-white/30 dark:border-white/5 shadow-2xl z-10 overflow-hidden animate-fade-in-up">
        {/* Top Glow Accent */}
        <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-primary to-[#a3f5ae]" />

        {/* Close Button */}
        <button 
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-[#a3f5ae] hover:bg-slate-100 dark:hover:bg-darkbg-border/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <h3 className="font-outfit text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Sprout className="w-5 h-5 text-primary dark:text-[#a3f5ae] animate-bounce" />
                <span>Join Avyan Prakriti</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-[#e2f0e6]/60 font-jakarta mt-1">
                Volunteer for our next hostel recycling drive at NIT Rourkela.
              </p>
            </div>

            {error && (
              <p className="text-xs font-bold text-rose-500 font-jakarta bg-rose-50 dark:bg-rose-950/20 p-3 rounded-xl border border-rose-100 dark:border-rose-950/40">
                {error}
              </p>
            )}

            <div className="space-y-4 font-jakarta text-sm">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-500 dark:text-[#e2f0e6]/60 uppercase tracking-wider">Full Name *</label>
                <input 
                  type="text"
                  placeholder="e.g. Priyanshu Panda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-darkbg border border-slate-200 dark:border-darkbg-border/80 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-[#a3f5ae] focus:bg-white transition-all text-slate-800 dark:text-white"
                />
              </div>

              {/* Roll Number */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-500 dark:text-[#e2f0e6]/60 uppercase tracking-wider">NITR Roll Number *</label>
                <input 
                  type="text"
                  placeholder="e.g. 122XX0000"
                  value={formData.roll}
                  onChange={(e) => setFormData({ ...formData, roll: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-darkbg border border-slate-200 dark:border-darkbg-border/80 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-[#a3f5ae] focus:bg-white transition-all text-slate-800 dark:text-white"
                />
              </div>

              {/* Hall of Residence */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-500 dark:text-[#e2f0e6]/60 uppercase tracking-wider">Hall of Residence *</label>
                <select 
                  value={formData.hall}
                  onChange={(e) => setFormData({ ...formData, hall: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-darkbg border border-slate-200 dark:border-darkbg-border/80 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-[#a3f5ae] focus:bg-white transition-all text-slate-800 dark:text-white"
                >
                  <option value="">Select your hall</option>
                  <option value="vs">Visvesvaraya Hall (VS)</option>
                  <option value="kms">Kiran Mazumdar-Shaw Hall (KMS)</option>
                  <option value="hb">Homi Bhabha Hall (HB)</option>
                  <option value="sd">Satish Dhawan Hall (SD)</option>
                  <option value="gdb">G.D. Birla Hall (GDB)</option>
                  <option value="mv">M. Visvesvaraya Hall (MV)</option>
                  <option value="mss">M.S. Swaminathan Hall (MSS)</option>
                </select>
              </div>

              {/* Division Interest */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-500 dark:text-[#e2f0e6]/60 uppercase tracking-wider">Division of Interest</label>
                <select 
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-darkbg border border-slate-200 dark:border-darkbg-border/80 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-[#a3f5ae] focus:bg-white transition-all text-slate-800 dark:text-white"
                >
                  <option value="campaigns">Environmental Campaigns & Drives</option>
                  <option value="creative">Creative Design & Posters</option>
                  <option value="webdev">Web Development & Automation</option>
                  <option value="pr">PR, Outreach & Communications</option>
                  <option value="research">R&D and Segregation Metrics</option>
                  <option value="finance">Finance Division (Treasurer Intern)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold font-outfit text-base shadow-lg shadow-primary/25 dark:shadow-emerald-950/30 transition-all hover:scale-[1.01] active:scale-95 mt-4"
            >
              Submit Registration
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-6 animate-fade-in-up">
            <div className="bg-primary/10 dark:bg-[#a3f5ae]/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto text-primary dark:text-[#a3f5ae] animate-pulse">
              <Award className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-outfit text-2xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-1">
                <span>Welcome Aboard!</span>
                <Sparkles className="w-5 h-5 text-amber-500 fill-amber-500 animate-spin" />
              </h3>
              <p className="font-jakarta text-slate-600 dark:text-[#e2f0e6]/80 text-sm leading-relaxed max-w-sm mx-auto">
                Thank you for joining, <strong className="text-primary dark:text-[#a3f5ae]">{formData.name}</strong>! Your registration is complete. Our Stewardship Council team will reach out to you shortly.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-darkbg-border/30 border border-slate-100 dark:border-darkbg-border/40 p-4 rounded-2xl text-left max-w-sm mx-auto text-xs font-jakarta space-y-2 text-slate-500 dark:text-[#e2f0e6]/60">
              <div><strong>Steward ID:</strong> AP-{Math.floor(1000 + Math.random() * 9000)}</div>
              <div><strong>Roll Registered:</strong> {formData.roll.toUpperCase()}</div>
              <div><strong>Assigned Hall:</strong> {formData.hall.toUpperCase()} Hall</div>
            </div>

            <button
              onClick={handleReset}
              className="bg-primary hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-bold font-outfit text-sm shadow-md transition-all hover:scale-105 active:scale-95"
            >
              Return Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
