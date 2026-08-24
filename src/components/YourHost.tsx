import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Sparkles, Heart, Award, CheckCircle2, ArrowRight, X, Mail } from 'lucide-react';

interface YourHostProps {
  onOpenBookModal: () => void;
}

export const YourHost: React.FC<YourHostProps> = ({ onOpenBookModal }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="your-host" className="py-20 bg-[#f4f1e9] border-t border-[#e2ded4] relative overflow-hidden">
      {/* Background aesthetic touches */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#70826b]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#d8c3a5]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8eee6] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
            <Palette className="w-3.5 h-3.5 text-[#70826b]" />
            <span className="font-handwriting text-base">Artist & Guide</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e251c]">
            Meet Your Host
          </h2>
          <p className="mt-3 text-base text-[#525d4f] font-sans-body max-w-2xl mx-auto">
            Inspiring guidance, personal feedback, and warm hospitality every step of the journey.
          </p>
        </div>

        {/* Host Card / Showcase */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl border-2 border-[#323d30] shadow-md p-6 sm:p-10 relative">
          
          {/* Top Tape Strips */}
          <div className="tape-strip absolute -top-3.5 left-12 w-28 h-6 rotate-[-2deg] z-20 pointer-events-none" />
          <div className="tape-strip absolute -top-3.5 right-12 w-28 h-6 rotate-[1.5deg] z-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Host Photo in Framed Polaroid Style */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="polaroid-card p-3 sm:p-4 rounded-md border-2 border-[#323d30] bg-[#faf8f5] shadow-md w-full max-w-sm transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative aspect-4/5 rounded overflow-hidden bg-[#e8e4da] border border-[#d2cbba]">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
                    alt="Mary King - Professional Artist and Tutor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 px-2.5 py-1 text-[11px] font-bold rounded bg-white/95 text-[#2c322b] border border-[#323d30] shadow-xs">
                    Mary King
                  </div>
                </div>
                <div className="pt-3 text-center">
                  <p className="font-serif-title font-bold text-lg text-[#1e251c]">Mary King</p>
                  <p className="font-handwriting text-base text-[#70826b] font-bold">
                    "Art is about capturing the soul of a place."
                  </p>
                </div>
              </div>
            </div>

            {/* Host Blurb & Information */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#70826b] font-bold block mb-1">
                  Professional Artist & Sketching Tutor
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c]">
                  Mary King
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#3d463b] font-sans-body leading-relaxed">
                I am Mary King, and with Vistas sketching and painting holidays I get to share some of my greatest passions: art and creativity, natural beauty, travel and exploring.
              </p>

              <p className="text-sm sm:text-base text-[#4a5448] font-sans-body leading-relaxed">
                For many years I ran my own gallery, Picture Shack, in remote NW Scotland, before two years living in Morocco — where the idea for Vistas first took shape — and time spent teaching watercolours in the Italian Dolomites.
              </p>

              {/* Highlights pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#2c322b]">
                  <CheckCircle2 className="w-4 h-4 text-[#70826b] shrink-0" />
                  <span>Small, supportive groups (max 10-12)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#2c322b]">
                  <CheckCircle2 className="w-4 h-4 text-[#70826b] shrink-0" />
                  <span>Daily live plein-air demonstrations</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#2c322b]">
                  <CheckCircle2 className="w-4 h-4 text-[#70826b] shrink-0" />
                  <span>Personalized 1-on-1 artistic coaching</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#2c322b]">
                  <CheckCircle2 className="w-4 h-4 text-[#70826b] shrink-0" />
                  <span>Beginner to advanced welcoming</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-[#f0ebe0]">
                <Link
                  to="/your-host"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#70826b] hover:text-[#4d5c49] underline decoration-[#70826b]/40 underline-offset-4 hover:decoration-[#70826b] transition-all"
                >
                  <span>Read Mary’s Full Bio & Teaching Philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={onOpenBookModal}
                  className="ml-auto px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#70826b] hover:bg-[#5a6a56] rounded-md shadow-xs transition-all active:scale-95 cursor-pointer"
                >
                  Join a Trip with Mary
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Host Detail Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-xl border-2 border-[#323d30] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#f2ede4] hover:bg-[#e2ded4] text-[#1e251c] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#70826b] mb-1">
              <Award className="w-4 h-4" />
              <span>Artist Biography & Tutor Profile</span>
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c] mb-4">
              About Mary King
            </h3>

            <div className="flex flex-col sm:flex-row gap-5 mb-6 items-center sm:items-start bg-[#faf8f5] p-4 rounded-lg border border-[#e2ded4]">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
                alt="Mary King"
                className="w-24 h-24 rounded-full object-cover border-2 border-[#70826b]"
              />
              <div>
                <h4 className="font-serif-title font-bold text-lg text-[#1e251c]">Mary King</h4>
                <p className="text-xs text-[#70826b] font-medium mb-2">BA Fine Art, Painting Tutor & Author</p>
                <p className="text-xs text-[#525d4f] leading-relaxed">
                  "My goal is simple: to help you discover the joy of seeing the world through an artist's eyes and return home with a sketchbook brimming with authentic memories."
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#3d463b] font-sans-body leading-relaxed">
              <h4 className="font-serif-title text-base font-bold text-[#1e251c] border-b border-[#f0ebe0] pb-1">
                Artistic Background & Exhibitions
              </h4>
              <p>
                Mary studied Fine Art and Printmaking before embarking on a lifelong career as a landscape painter and tutor. Her watercolors and mixed-media works have been exhibited across prestigious galleries in the UK and Europe, capturing coastal light, ancient architecture, and organic textures with lively fluidity.
              </p>

              <h4 className="font-serif-title text-base font-bold text-[#1e251c] border-b border-[#f0ebe0] pb-1 pt-2">
                Teaching Philosophy
              </h4>
              <p>
                Painting outside in the elements can sometimes feel daunting. Mary breaks down complex scenes into simple geometric shapes, tonal values, and color temperature. Rather than striving for photo-realism, she encourages personal expression, loose mark-making, and enjoying the process.
              </p>

              <h4 className="font-serif-title text-base font-bold text-[#1e251c] border-b border-[#f0ebe0] pb-1 pt-2">
                What Students Say
              </h4>
              <p className="italic text-[#5a6655] bg-[#f4f7f2] p-3.5 rounded border-l-3 border-[#70826b]">
                "Mary was fantastic! She is a very gifted teacher, knowing how to encourage her students... a perfect combination of expert advice and diplomacy." — Corrine, Australia
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#e8e4da] flex items-center justify-between">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-[#5a6655] hover:text-[#1e251c]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setModalOpen(false);
                  onOpenBookModal();
                }}
                className="px-5 py-2.5 bg-[#70826b] text-white rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#5a6a56] transition-colors"
              >
                Book with Mary
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
