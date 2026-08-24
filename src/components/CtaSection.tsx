import React, { useState } from 'react';
import { Palette, Sparkles, Send, CheckCircle2, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

interface CtaSectionProps {
  onOpenBookModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBookModal }) => {
  const [enquirySent, setEnquirySent] = useState(false);
  const [email, setEmail] = useState('');

  const handleQuickEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEnquirySent(true);
      setTimeout(() => {
        setEnquirySent(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#73846f] text-[#faf8f5] relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent pointer-events-none" />

      {/* Decorative hand-drawn sketch motifs */}
      <div className="absolute top-8 left-8 opacity-15 pointer-events-none hidden md:block">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
          <path d="M 30 50 Q 50 20 70 50 Q 50 80 30 50" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#e2ede0]" />
          <span className="font-handwriting text-base">Your Creative Journey Awaits</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Ready to Fill Your Sketchbook with Memories?
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#e8f0e6] font-sans-body leading-relaxed mb-8">
          Join Mary King on an unforgettable artistic retreat. Small groups, handpicked accommodations, and warm daily guidance ensure a journey you will cherish forever.
        </p>

        {/* Trust Points */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-[#eef5ed] mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#cad8c6]" />
            <span>Strictly 8–12 Guests per Trip</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#cad8c6]" />
            <span>Beginner to Advanced Artists</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#cad8c6]" />
            <span>Daily 1-on-1 Guidance</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenBookModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-white text-[#252f23] font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-[#faf8f5] hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <span>Book Your Holiday</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="mailto:info@vistas-sketching.com?subject=Enquiry%20About%20Vistas%20Sketching%20Holidays"
            className="w-full sm:w-auto px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Enquire / Ask Mary</span>
          </a>
        </div>

        {/* Quick Newsletter / Brochure request form */}
        <div className="mt-12 pt-8 border-t border-white/20 max-w-lg mx-auto">
          <p className="text-xs sm:text-sm text-[#e8f0e6] mb-3">
            Want our 2026/2027 printed travel brochure & materials checklist?
          </p>
          
          {enquirySent ? (
            <div className="p-3 bg-white/20 border border-white/40 rounded text-sm text-white font-medium animate-fade-in">
              ✓ Thank you! We’ve sent the digital brochure and checklist to your inbox.
            </div>
          ) : (
            <form onSubmit={handleQuickEnquiry} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-2.5 rounded bg-white/15 border border-white/30 text-white placeholder-white/70 text-xs focus:outline-none focus:bg-white/25 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded bg-white text-[#2c3829] text-xs font-bold uppercase tracking-wider hover:bg-[#f2ede4] transition-colors"
              >
                Send Brochure
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
