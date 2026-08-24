import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, CheckCircle2, ArrowRight, Star, Heart, MapPin, Sparkles, BookOpen, Quote } from 'lucide-react';
import { DESTINATIONS } from '../data/holidaysData';

interface YourHostPageProps {
  onOpenBookModal: (destinationId?: string) => void;
}

export const YourHostPage: React.FC<YourHostPageProps> = ({ onOpenBookModal }) => {
  return (
    <div className="py-12 sm:py-16 bg-[#faf8f5]">
      
      {/* Breadcrumb & Top Tag */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#70826b]">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-[#2c322b]">Your Host</span>
        </div>
      </div>

      {/* Main Profile Hero Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-xl border-2 border-[#323d30] shadow-md p-6 sm:p-12 relative overflow-hidden">
          
          {/* Top Tape Strips */}
          <div className="tape-strip absolute -top-3 left-16 w-32 h-6 rotate-[-1.5deg] z-20 pointer-events-none" />
          <div className="tape-strip absolute -top-3 right-16 w-32 h-6 rotate-[2deg] z-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Polaroid Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="polaroid-card p-4 rounded-md border-2 border-[#323d30] bg-[#faf8f5] shadow-lg w-full max-w-sm transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative aspect-4/5 rounded overflow-hidden bg-[#e8e4da] border border-[#d2cbba]">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
                    alt="Mary King - Host and Art Tutor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 px-2.5 py-1 text-[11px] font-bold rounded bg-white/95 text-[#2c322b] border border-[#323d30] shadow-xs">
                    Mary King
                  </div>
                </div>
                <div className="pt-3 text-center">
                  <p className="font-serif-title font-bold text-xl text-[#1e251c]">Mary King</p>
                  <p className="font-handwriting text-lg text-[#70826b] font-bold mt-1">
                    "Art is about capturing the soul of a place."
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Intro & Story */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold">
                <Palette className="w-3.5 h-3.5 text-[#70826b]" />
                <span>Artist, Tutor & Founder</span>
              </div>

              <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e251c] leading-tight">
                Hello, I’m Mary King.
              </h1>

              <p className="text-base sm:text-lg text-[#3d463b] font-sans-body leading-relaxed">
                With Vistas sketching and painting holidays I get to share some of my greatest passions: art and creativity, natural beauty, travel and exploring.
              </p>

              <p className="text-sm sm:text-base text-[#4a5448] font-sans-body leading-relaxed">
                For many years I ran my own gallery, <em>Picture Shack</em>, in remote northwest Scotland, before spending two transformative years living in Morocco — where the idea for Vistas first took shape — alongside time teaching watercolours in the Italian Dolomites and across Europe.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenBookModal()}
                  className="px-6 py-3 bg-[#70826b] text-white rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#5a6a56] shadow-xs transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Join Mary On A Trip</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/contact"
                  className="px-5 py-3 border border-[#323d30] text-[#1e251c] bg-white rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#f5f1e8] transition-all"
                >
                  Send Mary A Message
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Chapters / The Journey */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        
        <div className="text-center mb-12">
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1e251c]">
            The Story Behind Vistas
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#525d4f] max-w-xl mx-auto">
            From the rugged Scottish Atlantic coast to Moroccan riads and Dolomite meadows.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Chapter 1: Picture Shack */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-[#eef2ec] border border-[#70826b] text-[#70826b] flex items-center justify-center font-serif-title font-bold text-xl shrink-0">
              1
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#1e251c]">
                The Picture Shack & Remote Scotland
              </h3>
              <p className="text-sm sm:text-base text-[#3d463b] leading-relaxed">
                For years, I operated my studio gallery, Picture Shack, nestled in the dramatic landscapes of northwest Scotland. Working immersed in the elements taught me to observe how fast northern light changes — how a silver sea loch can transform into radiant turquoise in seconds. It was here that I began holding informal outdoor workshops, discovering how much joy guests found when guided to look closer at nature.
              </p>
            </div>
          </div>

          {/* Chapter 2: The Moroccan Residency */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-[#eef2ec] border border-[#70826b] text-[#70826b] flex items-center justify-center font-serif-title font-bold text-xl shrink-0">
              2
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#1e251c]">
                Two Years in Morocco & The Birth of Vistas
              </h3>
              <p className="text-sm sm:text-base text-[#3d463b] leading-relaxed">
                Relocating to Morocco for two years opened my eyes to vibrant earthy pigments, intricate architectural geometry, and tranquil palm courtyards. Friends and artists constantly asked if they could visit and sketch together without the rush of commercial tour groups. That was when Vistas Sketching Holidays was born: intimate, unhurried journeys where art, camaraderie, and discovery take center stage.
              </p>
            </div>
          </div>

          {/* Chapter 3: Teaching across Europe & Beyond */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-[#eef2ec] border border-[#70826b] text-[#70826b] flex items-center justify-center font-serif-title font-bold text-xl shrink-0">
              3
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#1e251c]">
                Teaching in the Dolomites & Beyond
              </h3>
              <p className="text-sm sm:text-base text-[#3d463b] leading-relaxed">
                Over the last two decades, I have led hundreds of sketching sessions across the Italian Dolomites, the Canary Islands, Sri Lanka, and Greece. My focus is always on creating a warm, non-judgmental environment where participants gain confidence, learn practical techniques, and return home with sketchbooks they are genuinely proud of.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Teaching Philosophy */}
      <section className="bg-[#f0ece1] py-16 border-y border-[#dfd9cc] mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#70826b] font-bold">Approach & Values</span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1e251c] mt-1">
              Mary’s Teaching Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-lg border border-[#323d30] p-6 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#70826b]/15 flex items-center justify-center text-[#70826b] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title font-bold text-lg text-[#1e251c] mb-2">
                No Mistakes, Only Experiments
              </h3>
              <p className="text-xs sm:text-sm text-[#4b5449] leading-relaxed">
                Plein-air painting is about capturing feeling and atmosphere rather than mechanical photographic accuracy. We celebrate spontaneous marks and happy accidents.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-[#323d30] p-6 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#70826b]/15 flex items-center justify-center text-[#70826b] mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title font-bold text-lg text-[#1e251c] mb-2">
                Small, Caring Groups
              </h3>
              <p className="text-xs sm:text-sm text-[#4b5449] leading-relaxed">
                By strictly limiting each trip to 8–12 guests, Mary ensures everyone receives generous individual demonstrations, guidance, and daily encouragement.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-[#323d30] p-6 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#70826b]/15 flex items-center justify-center text-[#70826b] mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title font-bold text-lg text-[#1e251c] mb-2">
                All Levels Welcomed
              </h3>
              <p className="text-xs sm:text-sm text-[#4b5449] leading-relaxed">
                Complete beginners receive gentle foundational steps in perspective and washes, while experienced artists find fresh compositional challenges.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Guest Reviews on Mary */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c]">
            What Guests Say About Mary
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-[#323d30] p-6 relative">
            <Quote className="w-8 h-8 text-[#cad8c6] mb-2" />
            <p className="font-serif-title text-base sm:text-lg italic text-[#2c322b] leading-relaxed mb-4">
              "Mary was fantastic! She is a very gifted teacher, knowing how to encourage her students... a perfect combination of expert advice and diplomacy."
            </p>
            <p className="text-xs font-bold text-[#70826b]">
              — Corrine, Australia <span className="font-normal text-[#6c7667]">(Italian Dolomites)</span>
            </p>
          </div>

          <div className="bg-white rounded-lg border border-[#323d30] p-6 relative">
            <Quote className="w-8 h-8 text-[#cad8c6] mb-2" />
            <p className="font-serif-title text-base sm:text-lg italic text-[#2c322b] leading-relaxed mb-4">
              "An incredible journey through gorgeous landscapes. I had my first try at painting outside and Mary made me feel instantly confident. I learned so much!"
            </p>
            <p className="text-xs font-bold text-[#70826b]">
              — Caroline, Scotland <span className="font-normal text-[#6c7667]">(Sri Lanka)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#73846f] text-white p-8 sm:p-10 rounded-xl shadow-md border-2 border-[#323d30]">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold mb-3">
            Ready to Paint with Mary?
          </h2>
          <p className="text-sm sm:text-base text-[#e8f0e6] mb-6 max-w-lg mx-auto">
            Browse our upcoming departures to the Italian Dolomites, Scotland, Morocco, Sri Lanka, and Greece.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenBookModal()}
              className="px-6 py-3 bg-white text-[#2c3829] font-bold text-xs uppercase tracking-wider rounded shadow-md hover:bg-[#faf8f5] transition-all"
            >
              Book Your Holiday
            </button>
            <Link
              to="/#destinations"
              className="px-6 py-3 bg-white/15 border border-white/40 text-white font-semibold text-xs uppercase tracking-wider rounded hover:bg-white/25 transition-all"
            >
              View Destinations
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
