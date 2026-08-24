import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Destination } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface DestinationsGridProps {
  destinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
  onBookDestination: (destId: string) => void;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({
  destinations,
  onSelectDestination,
  onBookDestination,
}) => {
  const navigate = useNavigate();
  const [sketchViewMode, setSketchViewMode] = useState<Record<string, 'photo' | 'sketch'>>({});

  const toggleImageMode = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSketchViewMode((prev) => ({
      ...prev,
      [id]: prev[id] === 'sketch' ? 'photo' : 'sketch',
    }));
  };

  const handleCardClick = (dest: Destination) => {
    if (dest.id === 'scotland') {
      navigate('/painting-holidays-scotland');
    } else {
      onSelectDestination(dest);
    }
  };

  return (
    <section id="destinations" className="py-16 bg-[#faf8f5] border-t border-[#e8e4da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e251c]">
            Destinations
          </h2>
          <p className="mt-3 text-base text-[#525d4f] font-sans-body">
            Explore our hand-picked locations across the world, chosen for their unique landscapes, rich culture, and artistic inspiration.
          </p>
        </div>

        {/* 6 Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {destinations.map((dest) => {
            const viewSketch = sketchViewMode[dest.id] === 'sketch';

            return (
              <div
                key={dest.id}
                className="group flex flex-col cursor-pointer relative"
                onClick={() => handleCardClick(dest)}
              >
                {/* Hand-Drawn Watercolor Splash Behind Polaroid Card */}
                <div className="absolute -inset-2 bg-[#70826b]/10 rounded-2xl blur-md pointer-events-none group-hover:bg-[#70826b]/20 transition-colors" />

                {/* Hand-sketched doodle overlay specific to destination theme */}
                {dest.id.includes('sri-lanka') && (
                  <div className="absolute -top-6 -right-4 z-20 pointer-events-none text-[#2c322b]">
                    {/* Hand-drawn Elephant Pencil Sketch Doodle */}
                    <svg width="60" height="50" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M 15 45 C 10 35, 15 20, 30 15 C 45 10, 60 15, 65 25 C 70 30, 75 35, 75 45 M 65 30 Q 70 40 68 50 C 66 58 55 58 58 45" strokeLinecap="round" />
                      <path d="M 25 25 A 6 6 0 1 1 25 24.9" strokeWidth="2" fill="#2c322b" />
                      <path d="M 20 45 L 20 55 M 32 45 L 32 55 M 48 45 L 48 55 M 58 45 L 58 55" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                )}

                {dest.id.includes('tuscany') && (
                  <div className="absolute -top-6 -right-4 z-20 pointer-events-none text-[#2c322b]">
                    {/* Hand-drawn Roman Archway / Cypress Doodle */}
                    <svg width="50" height="50" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M 15 50 L 15 25 Q 30 10 45 25 L 45 50 M 10 50 L 50 50" strokeLinecap="round" />
                      <path d="M 22 50 L 22 30 Q 30 18 38 30 L 38 50" strokeDasharray="2 2" />
                    </svg>
                  </div>
                )}

                {dest.id.includes('greece') && (
                  <div className="absolute -top-6 -right-4 z-20 pointer-events-none text-[#2c322b]">
                    {/* Hand-drawn Olive Branch Doodle */}
                    <svg width="50" height="50" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M 10 50 Q 30 30 50 10" strokeLinecap="round" />
                      <path d="M 25 35 Q 20 25 15 30 M 35 25 Q 40 15 45 20 M 20 40 Q 12 42 16 48 M 40 20 Q 48 12 45 8" strokeLinecap="round" />
                    </svg>
                  </div>
                )}

                {/* Polaroid Frame Container */}
                <div className="polaroid-card p-4 sm:p-5 rounded-md border-2 border-[#323d30] bg-white relative transition-all duration-300 flex flex-col justify-between h-full">
                  
                  <div>
                    {/* Top Hand-cut Paper Tape Accent */}
                    <div className="tape-strip absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-5 rotate-[-1deg] z-20" />

                    {/* Polaroid Image Area */}
                    <div className="relative aspect-4/3 rounded overflow-hidden bg-[#f4f1e9] border border-[#d2cbba]">
                      <img
                        src={viewSketch ? dest.watercolorSketchUrl : dest.imageUrl}
                        alt={dest.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Sketch/Photo Toggle Button inside polaroid */}
                      <button
                        onClick={(e) => toggleImageMode(dest.id, e)}
                        className="absolute bottom-2 right-2 z-20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-white/95 text-[#2c322b] backdrop-blur-xs border border-[#323d30] flex items-center gap-1 shadow-xs hover:bg-[#e2ded4] transition-all"
                        title="Toggle Sketch View"
                      >
                        <Sparkles className="w-3 h-3 text-[#70826b]" />
                        <span>{viewSketch ? 'Photo View' : 'Sketch View'}</span>
                      </button>
                    </div>

                    {/* Polaroid Caption Box */}
                    <div className="pt-3.5 pb-2 border-b border-[#f0ebe0]">
                      <h3 className="font-serif-title text-2xl font-bold text-[#1e251c] group-hover:text-[#70826b] transition-colors">
                        {dest.name}
                      </h3>
                      <p className="font-handwriting text-base text-[#70826b] font-bold leading-tight mt-0.5">
                        "{dest.sketchTag}"
                      </p>
                    </div>

                    {/* Card Description Text - Exact Copy */}
                    <div className="pt-3 pb-2">
                      <p className="text-sm text-[#3d463b] font-sans-body leading-relaxed">
                        "{dest.shortDescription}"
                      </p>
                    </div>
                  </div>

                  {/* CTA Footer (Read More) */}
                  <div className="mt-4 pt-3 border-t border-[#f2ede4] flex items-center justify-end text-xs text-[#5e695b]">
                    <span className="inline-flex items-center gap-1.5 text-[#70826b] font-bold group-hover:translate-x-1 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
