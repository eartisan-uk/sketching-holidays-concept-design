/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DestinationsGrid } from './components/DestinationsGrid';
import { UpcomingTrips } from './components/UpcomingTrips';
import { YourHost } from './components/YourHost';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

import { DestinationModal } from './components/DestinationModal';
import { BookingModal } from './components/BookingModal';

import { DESTINATIONS, TESTIMONIALS } from './data/holidaysData';
import { Destination } from './types';

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialDestId, setBookingInitialDestId] = useState<string | undefined>(undefined);
  const [bookingInitialDateId, setBookingInitialDateId] = useState<string | undefined>(undefined);

  const [activeTab, setActiveTab] = useState<string>('destinations');

  const handleOpenBookModal = (destinationId?: string, dateId?: string) => {
    setBookingInitialDestId(destinationId);
    setBookingInitialDateId(dateId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c322b] font-sans-body flex flex-col paper-texture selection:bg-[#70826b]/20 selection:text-[#1a2119]">
      
      {/* Sticky Top Header */}
      <Header
        onOpenBookModal={handleOpenBookModal}
        onSelectTab={(tabId) => setActiveTab(tabId)}
        activeTab={activeTab}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('destinations');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenBookModal={() => handleOpenBookModal()}
        />

        {/* Featured Destinations Grid */}
        <DestinationsGrid
          destinations={DESTINATIONS}
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          onBookDestination={(destId) => handleOpenBookModal(destId)}
        />

        {/* Upcoming Trips Table Section */}
        <UpcomingTrips
          onBookTrip={(destId) => handleOpenBookModal(destId)}
        />

        {/* Your Host Section - Mary King */}
        <YourHost
          onOpenBookModal={() => handleOpenBookModal()}
        />

        {/* Testimonials Section matching green banner in screenshot */}
        <TestimonialsSection testimonials={TESTIMONIALS} />

        {/* From the Blog Section */}
        <BlogSection />

        {/* FAQs Section */}
        <FaqSection />

        {/* Call To Action Section */}
        <CtaSection
          onOpenBookModal={() => handleOpenBookModal()}
        />
      </main>

      {/* Footer */}
      <Footer onSelectTab={(tabId) => setActiveTab(tabId)} />

      {/* Modals & Drawers */}
      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onBook={(destId, dateId) => handleOpenBookModal(destId, dateId)}
        />
      )}

      {bookingModalOpen && (
        <BookingModal
          initialDestinationId={bookingInitialDestId}
          initialDateId={bookingInitialDateId}
          onClose={() => setBookingModalOpen(false)}
        />
      )}

    </div>
  );
}
