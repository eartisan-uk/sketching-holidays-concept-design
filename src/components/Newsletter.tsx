import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-16 bg-[#faf8f5] relative overflow-hidden border-t border-[#e8e4da]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <span className="font-sans-body text-xs uppercase font-bold tracking-widest text-[#70826b] block mb-1">
          Newsletter
        </span>

        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1e251c]">
          Stay Inspired
        </h2>

        <p className="mt-3 text-sm sm:text-base text-[#525d4f] font-sans-body max-w-xl mx-auto leading-relaxed">
          Join our guided sketching and painting newsletters, and receive creative tips and upcoming dates.
        </p>

        {subscribed ? (
          <div className="mt-6 p-4 rounded-md bg-[#edf2eb] border border-[#b2bcad] text-[#2e3b2b] max-w-md mx-auto flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#70826b]" />
            <span className="text-sm font-semibold">Thank you for subscribing! Your art tips are on their way.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="flex-1 px-4 py-2.5 text-sm bg-white border border-[#c4beaf] rounded-md text-[#2c322b] placeholder-[#808a7e] focus:outline-none focus:ring-2 focus:ring-[#70826b]"
            />
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#70826b] hover:bg-[#5a6a56] rounded-md shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

      </div>

      {/* Decorative Calligraphic Fountain Pen & Paintbrush Sketch Accent matching screenshot bottom right! */}
      <div className="absolute bottom-3 right-6 sm:right-16 pointer-events-none opacity-80">
        <svg
          width="160"
          height="70"
          viewBox="0 0 200 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#323d30]"
        >
          {/* Paintbrush body */}
          <path
            d="M 190 10 L 120 50 Q 115 53 110 50 L 80 35 L 185 5 Z"
            fill="#808d7c"
            stroke="#2c322b"
            strokeWidth="1.5"
          />
          {/* Brush tip / nib */}
          <path
            d="M 120 50 Q 80 65 30 75 Q 10 78 5 85 Q 25 80 70 70 Z"
            fill="#3d483a"
            stroke="#1d221c"
            strokeWidth="1.5"
          />
          {/* Hand-drawn ink line flourish underneath */}
          <path
            d="M 5 85 Q 40 82 80 87 T 160 82"
            stroke="#2c322b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};
