import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Testimonial } from '../types';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 bg-[#73846f] text-[#faf8f5] relative overflow-hidden">
      {/* Subtle background grain/watercolor texture opacity */}
      <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Title */}
        <h2 className="font-serif-title text-3xl sm:text-4xl font-light tracking-wide text-white/95 mb-4">
          Testimonials
        </h2>

        {/* Large Decorative Calligraphic Ink Quote Mark */}
        <div className="my-2 flex justify-center text-[#e8f0e6]/50">
          <svg width="80" height="60" viewBox="0 0 100 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M 25 20 C 10 35 12 55 28 65 C 40 72 50 60 42 48 C 35 38 42 32 45 28 C 48 24 40 12 25 20 Z" />
            <path d="M 70 20 C 55 35 57 55 73 65 C 85 72 95 60 87 48 C 80 38 87 32 90 28 C 93 24 85 12 70 20 Z" />
          </svg>
        </div>

        {/* Quote Content */}
        {current && (
          <div className="min-h-[140px] flex flex-col items-center justify-center space-y-4">
            <blockquote className="font-serif-title text-2xl sm:text-3xl lg:text-4xl italic font-light leading-snug text-white max-w-2xl">
              "{current.quote}"
            </blockquote>

            <div className="pt-2">
              <p className="font-sans-body text-base font-semibold tracking-wide text-[#e8f0e6]">
                - {current.author}, {current.location} <span className="font-normal opacity-85">({current.tripName})</span>
              </p>
            </div>
          </div>
        )}

        {/* Testimonial Carousel Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-colors"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Link to /testimonials/ */}
        <div className="mt-10 pt-6 border-t border-white/20 inline-block">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#e8f0e6] underline decoration-white/40 underline-offset-4 hover:decoration-white transition-all"
          >
            <span>Read all guest reviews on Testimonials</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </Link>
        </div>

      </div>
    </section>
  );
};
