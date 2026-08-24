import React, { useState } from 'react';
import { DESTINATIONS } from '../data/holidaysData';
import { BookingFormData } from '../types';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, Calendar, User, Mail, Phone, Palette, ShieldCheck, Sparkles } from 'lucide-react';

interface BookingModalProps {
  initialDestinationId?: string;
  initialDateId?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  initialDestinationId,
  initialDateId,
  onClose,
}) => {
  const [destinationId, setDestinationId] = useState<string>(
    initialDestinationId || DESTINATIONS[0].id
  );

  const selectedDestination = DESTINATIONS.find((d) => d.id === destinationId) || DESTINATIONS[0];

  const [dateId, setDateId] = useState<string>(
    initialDateId || selectedDestination.upcomingDates[0]?.id || ''
  );

  const [formData, setFormData] = useState<Partial<BookingFormData>>({
    guestsCount: 1,
    fullName: '',
    email: '',
    phone: '',
    roomType: 'Single Occupancy',
    experienceLevel: 'Beginner',
    mediumPreference: 'Watercolor',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'VS-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#70826b', '#8a9a86', '#d8c3a5', '#42503d']
    });
  };

  const selectedDateObj = selectedDestination.upcomingDates.find((d) => d.id === dateId) || selectedDestination.upcomingDates[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="bg-[#faf8f5] w-full max-w-2xl rounded-lg shadow-2xl border border-[#d8d2c4] overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white text-[#2c322b] hover:bg-gray-100 shadow-xs transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 bg-[#70826b] text-white space-y-1">
          <span className="font-handwriting text-lg text-[#dbe6d7]">Reserve Your Easel</span>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold">
            Book a Sketching Holiday
          </h2>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center space-y-4 py-6">
              <div className="w-16 h-16 rounded-full bg-[#eef2ec] text-[#70826b] flex items-center justify-center mx-auto border border-[#b2bcad]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-serif-title text-3xl font-bold text-[#1e251c]">
                Reservation Request Received!
              </h3>

              <div className="p-4 rounded-md bg-white border border-[#e2ded4] text-left max-w-md mx-auto space-y-2 text-xs text-[#323d30]">
                <div className="flex justify-between border-b pb-1">
                  <span className="font-semibold text-[#6e786b]">Booking Reference:</span>
                  <span className="font-mono font-bold text-[#70826b]">{bookingRef}</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="font-semibold text-[#6e786b]">Destination:</span>
                  <span className="font-bold">{selectedDestination.name}</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="font-semibold text-[#6e786b]">Dates:</span>
                  <span>{selectedDateObj?.startDate} — {selectedDateObj?.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#6e786b]">Guest Name:</span>
                  <span>{formData.fullName}</span>
                </div>
              </div>

              <p className="text-xs text-[#525d4f] max-w-md mx-auto font-sans-body">
                We have sent a provisional confirmation email to <strong className="text-[#2c322b]">{formData.email}</strong>. Our art team will contact you within 24 hours to finalize room options and equipment needs.
              </p>

              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#70826b] hover:bg-[#5a6a56] rounded shadow-xs"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Destination Selector */}
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2c322b]">
                  Choose Destination:
                </label>
                <select
                  value={destinationId}
                  onChange={(e) => {
                    const id = e.target.value;
                    setDestinationId(id);
                    const dest = DESTINATIONS.find((d) => d.id === id);
                    if (dest && dest.upcomingDates[0]) {
                      setDateId(dest.upcomingDates[0].id);
                    }
                  }}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#c4beaf] rounded text-[#2c322b] focus:outline-none focus:ring-2 focus:ring-[#70826b]"
                >
                  {DESTINATIONS.map((dest) => (
                    <option key={dest.id} value={dest.id}>
                      {dest.name} ({dest.durationDays} Days - £{dest.priceGBP})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Selector */}
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2c322b]">
                  Select Trip Dates:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDestination.upcomingDates.map((d) => (
                    <button
                      type="button"
                      key={d.id}
                      onClick={() => setDateId(d.id)}
                      className={`p-2.5 rounded text-xs text-left border transition-all ${
                        dateId === d.id
                          ? 'bg-[#70826b] text-white border-[#70826b] font-semibold'
                          : 'bg-white text-[#2c322b] border-[#c8c2b4] hover:bg-[#f2efe8]'
                      }`}
                    >
                      <span className="block">{d.startDate} — {d.endDate}</span>
                      <span className="text-[10px] opacity-80">{d.spotsLeft} spots available</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#2c322b]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#c4beaf] rounded text-[#2c322b] focus:ring-2 focus:ring-[#70826b]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#2c322b]">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#c4beaf] rounded text-[#2c322b] focus:ring-2 focus:ring-[#70826b]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#2c322b]">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+44 7700 900077"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#c4beaf] rounded text-[#2c322b] focus:ring-2 focus:ring-[#70826b]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#2c322b]">Room Preference</label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value as any })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#c4beaf] rounded text-[#2c322b]"
                  >
                    <option value="Single Occupancy">Single Occupancy Room</option>
                    <option value="Double / Twin Sharing">Double / Twin Sharing</option>
                    <option value="Non-Painting Partner">Non-Painting Partner Joining</option>
                  </select>
                </div>
              </div>

              {/* Skill & Preferred Medium */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#2c322b]">Art Experience Level</label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#c4beaf] rounded text-[#2c322b]"
                  >
                    <option value="Complete Beginner">Complete Beginner</option>
                    <option value="Intermediate Painter">Intermediate Painter</option>
                    <option value="Experienced Artist">Experienced Artist</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#2c322b]">Preferred Art Medium</label>
                  <select
                    value={formData.mediumPreference}
                    onChange={(e) => setFormData({ ...formData, mediumPreference: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#c4beaf] rounded text-[#2c322b]"
                  >
                    <option value="Watercolor">Watercolor</option>
                    <option value="Pen & Ink Sketching">Pen & Ink Sketching</option>
                    <option value="Soft Pastels">Soft Pastels</option>
                    <option value="Gouache">Gouache</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#2c322b]">Dietary or Special Requests</label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g. Vegetarian diet, ground floor room request..."
                  className="w-full px-3 py-2 text-sm bg-white border border-[#c4beaf] rounded text-[#2c322b]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between border-t border-[#e2ded4]">
                <div className="flex items-center gap-1.5 text-xs text-[#525d4f]">
                  <ShieldCheck className="w-4 h-4 text-[#70826b]" />
                  <span>No payment required today. 100% refundable deposit.</span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#70826b] hover:bg-[#5a6a56] rounded shadow-md transition-all shrink-0"
                >
                  Submit Reservation Request
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
