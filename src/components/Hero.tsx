import React from 'react';
import { Compass, MapPin, Leaf, ShieldCheck, Heart } from 'lucide-react';
import { ResponsibleTravelLogo } from './ResponsibleTravelLogo';

interface HeroProps {
  onExploreClick: () => void;
  onOpenBookModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenBookModal }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#faf8f5] paper-texture">
      
      {/* Hand-Drawn / Watercolor Background Washes & Paint Splatters */}
      <div className="absolute top-0 right-0 -mr-20 -mt-10 w-96 h-96 rounded-full bg-[#70826b]/12 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-[#d8c3a5]/20 blur-2xl pointer-events-none" />
      
      {/* Decorative Hand-drawn Pencil / Ink Doodle overlay in background */}
      <svg
        className="absolute top-12 right-12 w-48 h-48 opacity-15 pointer-events-none text-[#2c322b]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 20 180 Q 80 40 180 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 30 190 Q 90 60 190 30" stroke="currentColor" strokeWidth="1" />
        <circle cx="150" cy="50" r="25" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 140 50 L 160 50 M 150 40 L 150 60" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column with Exact Copy Requested */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Hand-drawn Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 hand-drawn-badge text-[#2d3a2b] text-xs font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#70826b] animate-pulse" />
              <span className="font-handwriting text-lg text-[#323d30]">Small groups • Expert tutors • All skill levels</span>
            </div>

            {/* H1 Title: Exact Copy */}
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e251c] leading-[1.12]">
              Sketching & Painting Holidays In Exotic Locations
            </h1>

            {/* Paragraph 1: Exact Copy */}
            <p className="text-base sm:text-lg text-[#3d463b] font-sans-body leading-relaxed">
              Welcome to Vistas and your gateway to a new world, where hidden landscapes lie waiting to be admired and captured; a world of artistic exploration and immersion in the sights, sounds and smells of some of the most beautiful corners of the world. 'Vistas' offers you something completely different.
            </p>

            {/* Paragraph 2: Exact Copy with 'Painting Holidays' bolded */}
            <p className="text-base sm:text-lg text-[#3d463b] font-sans-body leading-relaxed">
              The unique 'Sketchbook Journey' <strong className="font-bold text-[#1a2318] underline decoration-[#70826b]/40 decoration-2 underline-offset-2">Painting Holidays</strong> take you deep into the culture, history and landscape of lesser-visited regions, while relaxing Sketching/Painting Breaks, Retreats and Intensive Courses ensure there's a perfect holiday experience to suit everyone.
            </p>

            {/* Paragraph 3: Exact Copy */}
            <p className="text-base sm:text-lg text-[#3d463b] font-sans-body leading-relaxed">
              Professional artist and teacher Mary King leads you to unforgettable destinations in small, friendly groups for learning, developing or simply enjoying the wonderful experience of sketching in an inspiring new environment.
            </p>

            {/* Responsible Travel Badge - Displaying Official Logo */}
            <div className="pt-2">
              <div className="relative inline-flex flex-wrap items-center gap-4 sm:gap-5 p-3.5 sm:p-4 rounded-lg border-2 border-dashed border-[#70826b] bg-[#f2f5f0]/90 backdrop-blur-xs shadow-2xs transform -rotate-1 hover:rotate-0 transition-transform">
                
                {/* Official Logo Rendered */}
                <div className="px-2 py-1 bg-white rounded border border-[#d2dbce] shadow-2xs">
                  <ResponsibleTravelLogo className="h-10 sm:h-11 w-auto" color="#232b21" />
                </div>

                <div className="max-w-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-handwriting text-sm font-bold text-[#70826b] bg-white px-2 py-0.5 rounded border border-[#c2cebe]">
                      Pledge Certified Partner
                    </span>
                  </div>
                  <p className="text-xs text-[#4a5548] font-sans-body mt-1 leading-snug">
                    Committed to small groups, local culture & sustainable eco-conscious travel.
                  </p>
                </div>

                {/* Hand-drawn accent stamp watermark */}
                <div className="absolute -top-3 -right-3 font-handwriting text-xs font-bold text-[#70826b] bg-[#e8ece5] px-2.5 py-0.5 rounded-full border border-[#c4cebf] rotate-6 shadow-2xs">
                  Eco-Conscious
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#70826b] hover:bg-[#5a6a56] rounded-md shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center gap-2 hand-drawn-border-light border-transparent"
              >
                <span>Explore Holidays</span>
                <Compass className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBookModal}
                className="px-6 py-3 text-sm font-semibold tracking-wide text-[#2c322b] bg-white border-2 border-[#b8c2b3] hover:bg-[#f2efe9] rounded-md shadow-xs transition-all duration-200 flex items-center gap-2"
              >
                <span>Request Custom Itinerary</span>
              </button>
            </div>

          </div>

          {/* Right Hero Image Column with Hand-Drawn Artwork & Watercolor Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Hand-drawn Paint Splatter Background Behind Frame */}
              <div className="absolute -inset-4 rounded-2xl bg-[#70826b]/15 blur-xl pointer-events-none transform rotate-3" />
              
              {/* Decorative Hand-drawn Pencil Mountain Silhouette Overlay */}
              <svg
                className="absolute -top-10 -right-6 w-36 h-28 text-[#3d4a3a] opacity-80 pointer-events-none z-20"
                viewBox="0 0 150 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Mountain ridges */}
                <path d="M 10 90 L 50 30 L 90 90 L 130 40 L 145 90" stroke="#323d30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 50 30 L 60 50 M 130 40 L 120 55" stroke="#323d30" strokeWidth="1.5" />
                {/* Hatching lines */}
                <path d="M 35 70 L 45 75 M 40 60 L 52 66 M 115 60 L 125 65" stroke="#70826b" strokeWidth="1" />
                {/* Sun sketch */}
                <circle cx="110" cy="20" r="12" stroke="#323d30" strokeWidth="1.5" strokeDasharray="3 2" />
              </svg>

              {/* Main Polaroid / Sketchbook Card */}
              <div className="polaroid-card p-4 sm:p-5 border-2 border-[#323d30] bg-white transform rotate-1 hover:rotate-0 transition-transform duration-500 relative z-10">
                
                {/* Paper Tape Pieces on Top Corners */}
                <div className="tape-strip absolute -top-3 left-8 w-20 h-6 rotate-[-4deg] z-20" />
                <div className="tape-strip absolute -top-3 right-8 w-20 h-6 rotate-[3deg] z-20" />

                {/* Main Image Frame with Watercolor Tint */}
                <div className="relative aspect-4/3 rounded overflow-hidden bg-[#faf8f5] border border-[#d8d2c4]">
                  <img
                    src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1200"
                    alt="Watercolor Vista of Rolling Cypress Hills"
                    className="w-full h-full object-cover filter saturate-[0.9] contrast-[1.05]"
                  />
                  
                  {/* Subtle Watercolor wash overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Location badge overlay */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded border border-[#b8c2b3] shadow-xs flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#70826b]" />
                    <span className="text-xs font-bold text-[#2c322b]">Tuscany, Italy • Sketchbook Journey</span>
                  </div>
                </div>

                {/* Handwritten Sketch Caption */}
                <div className="pt-3.5 flex justify-between items-center text-xs text-[#525b50]">
                  <div>
                    <p className="font-handwriting text-xl text-[#283226] font-bold">
                      "Plein air sketching in Val d'Orcia"
                    </p>
                    <p className="text-[11px] text-[#6b7668] font-sans-body">
                      Led by Mary King & local guest tutors
                    </p>
                  </div>
                  
                  {/* Hand-drawn Palette Icon */}
                  <div className="p-2 rounded-full bg-[#f2ede4] border border-[#d3ccba]">
                    <svg className="w-5 h-5 text-[#323d30]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                      <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM16 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM9 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Floating Hand-Sketched Mini Polaroid Accent (Bottom Left) */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 polaroid-card p-2.5 bg-white border-2 border-[#323d30] transform -rotate-6 hover:rotate-0 transition-transform z-30 shadow-md">
                <div className="tape-strip absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-5 rotate-2" />
                <img
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=400"
                  alt="Watercolor sketch study"
                  className="w-full h-28 object-cover rounded-xs border border-[#e2ded4]"
                />
                <p className="font-handwriting text-base text-[#2c322b] text-center pt-1.5 font-bold">
                  Daily sketchbook wash & ink
                </p>
              </div>

              {/* Hand-drawn Cypress Tree Sketch (Bottom Right Accent) */}
              <div className="absolute -bottom-6 -right-4 pointer-events-none z-30">
                <svg width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#323d30]">
                  <path d="M 30 85 L 30 15 M 30 15 Q 15 40 22 75 M 30 15 Q 45 40 38 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 30 25 L 18 45 M 30 35 L 42 55 M 30 50 L 20 70 M 30 60 L 40 78" stroke="currentColor" strokeWidth="1.5" />
                  <ellipse cx="30" cy="85" rx="15" ry="3" fill="#323d30" opacity="0.3" />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

