import React, { useState } from 'react';
import { Tutor } from '../types';
import { ChevronLeft, ChevronRight, Award, Palette, ExternalLink } from 'lucide-react';

interface TutorsCarouselProps {
  tutors: Tutor[];
  onSelectTutor: (tutor: Tutor) => void;
}

export const TutorsCarousel: React.FC<TutorsCarouselProps> = ({ tutors, onSelectTutor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? tutors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === tutors.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="tutors" className="py-16 bg-[#faf8f5] border-t border-[#e8e4da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching screenshot with hand-drawn palette doodle */}
        <div className="text-center max-w-2xl mx-auto mb-12 relative">
          
          <div className="inline-flex items-center gap-2 mb-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#70826b" strokeWidth="2">
              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
              <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM16 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM9 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <span className="font-handwriting text-xl text-[#70826b] font-bold">Artistic Mentors</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e251c]">
            Meet Your Tutors
          </h2>
          <p className="mt-2 text-base text-[#596355] font-sans-body">
            Accomplished professional artists, patient mentors, and warm companions on your creative retreat.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 z-20 w-10 h-10 rounded-full bg-white border border-[#d8d2c4] text-[#2c322b] hover:bg-[#70826b] hover:text-white hover:border-[#70826b] shadow-xs flex items-center justify-center transition-all duration-200"
            aria-label="Previous Tutor"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 z-20 w-10 h-10 rounded-full bg-white border border-[#d8d2c4] text-[#2c322b] hover:bg-[#70826b] hover:text-white hover:border-[#70826b] shadow-xs flex items-center justify-center transition-all duration-200"
            aria-label="Next Tutor"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Tutor Avatars Grid matching watercolor halo style in screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 px-8">
            {tutors.map((tutor, idx) => {
              const isSelected = idx === currentIndex;

              return (
                <div
                  key={tutor.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    onSelectTutor(tutor);
                  }}
                  className={`group cursor-pointer flex flex-col items-center text-center transition-all duration-300 ${
                    isSelected ? 'scale-105' : 'hover:scale-102 opacity-90 hover:opacity-100'
                  }`}
                >
                  {/* Circular Avatar with Organic Watercolor Brush Blob Background Halo */}
                  <div className="relative mb-4">
                    {/* Organic Watercolor Background Stain Blob */}
                    <div 
                      className="absolute -inset-4 brush-border opacity-40 group-hover:opacity-75 transition-opacity blur-2xs transform -rotate-6"
                      style={{ backgroundColor: tutor.watercolorHaloColor }}
                    />
                    
                    {/* Secondary watercolor splatter layer */}
                    <div 
                      className="absolute -inset-2 brush-border-alt opacity-30 group-hover:opacity-60 transition-opacity transform rotate-12"
                      style={{ backgroundColor: tutor.watercolorHaloColor }}
                    />

                    {/* Circular Portrait Image with Hand-drawn Ink Border Ring */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#323d30] shadow-md bg-white">
                      <img
                        src={tutor.avatarUrl}
                        alt={tutor.name}
                        className="w-full h-full object-cover filter saturate-[0.9] group-hover:saturate-100 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* Name and Title */}
                  <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#1e251c] group-hover:text-[#70826b] transition-colors">
                    {tutor.name}
                  </h3>
                  <p className="font-sans-body text-xs text-[#626d5f] max-w-[140px] leading-tight mt-0.5">
                    {tutor.title}
                  </p>

                  <span className="mt-2 text-[11px] font-semibold text-[#70826b] group-hover:underline inline-flex items-center gap-1">
                    <span>View Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              );
            })}
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {tutors.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-7 bg-[#70826b]' : 'bg-[#d2cbba] hover:bg-[#a29b8a]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
