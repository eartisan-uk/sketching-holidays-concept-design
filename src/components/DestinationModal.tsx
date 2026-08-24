import React, { useState } from 'react';
import { Destination } from '../types';
import { TUTORS } from '../data/holidaysData';
import { X, Calendar, Check, Sparkles, MapPin, Clock, Award, Users, ChevronRight } from 'lucide-react';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onBook: (destinationId: string, dateId?: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onBook,
}) => {
  if (!destination) return null;

  const tutor = TUTORS.find((t) => t.id === destination.tutorId);
  const [selectedDateId, setSelectedDateId] = useState<string>(
    destination.upcomingDates[0]?.id || ''
  );
  const [activeTab, setActiveTab] = useState<'itinerary' | 'equipment' | 'gallery'>('itinerary');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-[#faf8f5] w-full max-w-4xl rounded-lg shadow-2xl border border-[#d8d2c4] overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#2c322b] hover:bg-white hover:text-black shadow-md transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="relative h-64 sm:h-80 bg-gray-900">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#70826b] text-white">
                {destination.skillLevel}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30">
                {destination.durationDays} Days / {destination.durationDays - 1} Nights
              </span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {destination.name}
            </h2>
            <p className="font-handwriting text-xl text-[#dbe6d7]">
              "{destination.sketchTag}"
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-[#f2ede4] border border-[#e0d9ca] text-xs">
            <div>
              <span className="text-[#6e786b] block">Price</span>
              <span className="font-bold text-base text-[#1e251c]">£{destination.priceGBP}</span>
              <span className="text-[10px] text-[#788275]">per painter</span>
            </div>
            <div>
              <span className="text-[#6e786b] block">Tutor</span>
              <span className="font-bold text-sm text-[#1e251c]">{tutor?.name}</span>
              <span className="text-[10px] text-[#788275]">{tutor?.title.split('&')[0]}</span>
            </div>
            <div>
              <span className="text-[#6e786b] block">Mediums</span>
              <span className="font-bold text-xs text-[#1e251c]">{destination.mediums.join(', ')}</span>
            </div>
            <div>
              <span className="text-[#6e786b] block">Group Size</span>
              <span className="font-bold text-xs text-[#1e251c]">Max 10 Painters</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif-title text-2xl font-bold text-[#1e251c] mb-2">
              About this Art Retreat
            </h3>
            <p className="text-sm text-[#475245] leading-relaxed font-sans-body">
              {destination.description}
            </p>

            {/* Key Highlights */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#323d30]">
                  <Check className="w-4 h-4 text-[#70826b] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs for Itinerary, Equipment, Gallery */}
          <div>
            <div className="flex border-b border-[#e2ded4] gap-6 text-sm font-semibold">
              <button
                onClick={() => setActiveTab('itinerary')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'itinerary' ? 'text-[#1e251c] border-b-2 border-[#70826b]' : 'text-[#6e786b] hover:text-[#2c322b]'
                }`}
              >
                Day-by-Day Itinerary
              </button>
              <button
                onClick={() => setActiveTab('equipment')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'equipment' ? 'text-[#1e251c] border-b-2 border-[#70826b]' : 'text-[#6e786b] hover:text-[#2c322b]'
                }`}
              >
                Included Art Kit
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'gallery' ? 'text-[#1e251c] border-b-2 border-[#70826b]' : 'text-[#6e786b] hover:text-[#2c322b]'
                }`}
              >
                Photo & Sketch Gallery
              </button>
            </div>

            {/* Tab Content */}
            <div className="pt-6">
              {activeTab === 'itinerary' && (
                <div className="space-y-4">
                  {destination.itinerary.map((item) => (
                    <div key={item.day} className="p-4 rounded-md bg-white border border-[#e2ded4] space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#70826b] uppercase tracking-wider">
                          Day {item.day}: {item.title}
                        </span>
                        <span className="font-handwriting text-sm text-[#5a6657]">
                          Focus: {item.sketchFocus}
                        </span>
                      </div>
                      <p className="text-xs text-[#4b5449] font-sans-body leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'equipment' && (
                <div className="p-5 rounded-md bg-white border border-[#e2ded4] space-y-3">
                  <h4 className="font-serif-title text-lg font-bold text-[#1e251c]">
                    Plein-Air Supplies Provided for Every Painter
                  </h4>
                  <p className="text-xs text-[#525d4f]">
                    We supply a complete professional painting kit so you can travel light without worrying about liquids or heavy easels:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2c322b]">
                    {destination.includedEquipment.map((eq, i) => (
                      <li key={i} className="flex items-center gap-2 bg-[#f6f3eb] p-2 rounded border border-[#e4ded0]">
                        <Sparkles className="w-3.5 h-3.5 text-[#70826b]" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {destination.gallery.map((img, i) => (
                    <div key={i} className="polaroid-card p-2 bg-white rounded border border-[#e2ded4]">
                      <img src={img} alt={`Gallery ${i}`} className="w-full h-36 object-cover rounded" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Select Date & Booking Footer Bar */}
          <div className="pt-6 border-t border-[#e2ded4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-auto">
              <label className="block text-xs font-bold text-[#2c322b] uppercase tracking-wider mb-1">
                Select Holiday Dates:
              </label>
              <div className="flex flex-wrap gap-2">
                {destination.upcomingDates.map((date) => (
                  <button
                    key={date.id}
                    onClick={() => setSelectedDateId(date.id)}
                    className={`px-3 py-1.5 rounded text-xs font-medium border transition-all ${
                      selectedDateId === date.id
                        ? 'bg-[#70826b] text-white border-[#70826b]'
                        : 'bg-white text-[#2c322b] border-[#c8c2b4] hover:bg-[#f2efe8]'
                    }`}
                  >
                    <span>{date.startDate} — {date.endDate}</span>
                    <span className="ml-1 opacity-75 text-[10px]">({date.spotsLeft} left)</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBook(destination.id, selectedDateId);
              }}
              className="w-full sm:w-auto px-8 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#70826b] hover:bg-[#5a6a56] rounded shadow-md transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <span>Reserve My Spot</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
