import React from 'react';
import { Tutor, Destination } from '../types';
import { DESTINATIONS } from '../data/holidaysData';
import { X, Award, Palette, MapPin, Calendar, ExternalLink } from 'lucide-react';

interface TutorModalProps {
  tutor: Tutor | null;
  onClose: () => void;
  onSelectDestination: (dest: Destination) => void;
}

export const TutorModal: React.FC<TutorModalProps> = ({ tutor, onClose, onSelectDestination }) => {
  if (!tutor) return null;

  const ledDestinations = DESTINATIONS.filter((d) => d.tutorId === tutor.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="bg-[#faf8f5] w-full max-w-3xl rounded-lg shadow-2xl border border-[#d8d2c4] overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#2c322b] hover:bg-white shadow-md transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#eef2ec] border-b border-[#d8e0d5] flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative shrink-0">
            <div
              className="absolute -inset-3 rounded-full opacity-40 blur-xs"
              style={{ backgroundColor: tutor.watercolorHaloColor }}
            />
            <img
              src={tutor.avatarUrl}
              alt={tutor.name}
              className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#70826b] text-white">
              Lead Resident Artist
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1e251c]">
              {tutor.name}
            </h2>
            <p className="font-sans-body text-sm font-semibold text-[#576454]">
              {tutor.title}
            </p>
            <p className="font-handwriting text-lg text-[#3f4a3d] italic">
              "{tutor.quote}"
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Bio */}
          <div>
            <h3 className="font-serif-title text-xl font-bold text-[#1e251c] mb-2">
              Teaching Philosophy & Background
            </h3>
            <p className="text-sm text-[#495447] leading-relaxed font-sans-body">
              {tutor.bio}
            </p>
          </div>

          {/* Mediums & Expertise */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-md bg-white border border-[#e2ded4]">
            <div>
              <span className="text-xs font-bold text-[#70826b] uppercase tracking-wider block mb-1">
                Taught Art Mediums
              </span>
              <div className="flex flex-wrap gap-1.5">
                {tutor.taughtMediums.map((m, i) => (
                  <span key={i} className="px-2.5 py-1 rounded text-xs bg-[#f2ede4] text-[#2c322b] border border-[#e0d8c8]">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-[#70826b] uppercase tracking-wider block mb-1">
                Core Specialties
              </span>
              <div className="flex flex-wrap gap-1.5">
                {tutor.expertise.map((e, i) => (
                  <span key={i} className="px-2.5 py-1 rounded text-xs bg-[#eef2ec] text-[#2c322b] border border-[#cbd8c7]">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Artwork */}
          <div>
            <h3 className="font-serif-title text-xl font-bold text-[#1e251c] mb-3">
              Tutor Work Showcase
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tutor.featuredArt.map((art, idx) => (
                <div key={idx} className="polaroid-card p-2 bg-white rounded border border-[#e2ded4]">
                  <img src={art.imageUrl} alt={art.title} className="w-full h-40 object-cover rounded" />
                  <p className="font-handwriting text-base text-[#2c322b] text-center pt-2">
                    {art.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Guided Holidays Led by this Tutor */}
          <div>
            <h3 className="font-serif-title text-xl font-bold text-[#1e251c] mb-3">
              Upcoming Holidays Led by {tutor.name.split(' ')[0]}
            </h3>
            <div className="space-y-3">
              {ledDestinations.map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => {
                    onClose();
                    onSelectDestination(dest);
                  }}
                  className="p-3 rounded-md bg-white border border-[#e2ded4] hover:border-[#70826b] cursor-pointer flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <img src={dest.imageUrl} alt={dest.name} className="w-12 h-12 rounded object-cover" />
                    <div>
                      <h4 className="font-bold text-sm text-[#1e251c]">{dest.name}</h4>
                      <p className="text-xs text-[#525d4f]">{dest.durationDays} Days • £{dest.priceGBP}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#70826b] flex items-center gap-1">
                    <span>View Itinerary</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
