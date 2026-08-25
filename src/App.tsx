/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { YourHostPage } from './pages/YourHostPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { ScotlandPage } from './pages/ScotlandPage';
import { SriLankaPage } from './pages/SriLankaPage';
import { TestimonialsPage } from './pages/TestimonialsPage';

import { DestinationModal } from './components/DestinationModal';
import { BookingModal } from './components/BookingModal';
import { Destination } from './types';

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialDestId, setBookingInitialDestId] = useState<string | undefined>(undefined);
  const [bookingInitialDateId, setBookingInitialDateId] = useState<string | undefined>(undefined);

  const handleOpenBookModal = (destinationId?: string, dateId?: string) => {
    setBookingInitialDestId(destinationId);
    setBookingInitialDateId(dateId);
    setBookingModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#faf8f5] text-[#2c322b] font-sans-body flex flex-col paper-texture selection:bg-[#70826b]/20 selection:text-[#1a2119]">
        
        {/* Sticky Top Header */}
        <Header onOpenBookModal={handleOpenBookModal} />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            {/* Home Page (kept exact as requested) */}
            <Route
              path="/"
              element={
                <HomePage
                  onSelectDestination={(dest) => setSelectedDestination(dest)}
                  onOpenBookModal={handleOpenBookModal}
                />
              }
            />

            {/* Dedicated Your Host Page */}
            <Route
              path="/your-host"
              element={
                <YourHostPage
                  onOpenBookModal={handleOpenBookModal}
                  onSelectDestination={(dest) => setSelectedDestination(dest)}
                />
              }
            />
            <Route
              path="/your-host/"
              element={
                <YourHostPage
                  onOpenBookModal={handleOpenBookModal}
                  onSelectDestination={(dest) => setSelectedDestination(dest)}
                />
              }
            />

            {/* Dedicated Blog List Page */}
            <Route
              path="/blog"
              element={<BlogPage />}
            />

            {/* Dedicated Individual Blog Article Page */}
            <Route
              path="/blog/:id"
              element={<BlogPostPage />}
            />

            {/* Dedicated FAQs Page */}
            <Route
              path="/faqs"
              element={<FaqPage />}
            />

            {/* Dedicated Contact & Enquiry Page */}
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="/contact/"
              element={<ContactPage />}
            />
            <Route
              path="/contact-me"
              element={<ContactPage />}
            />
            <Route
              path="/contact-me/"
              element={<ContactPage />}
            />

            {/* Dedicated Scotland Destination Page */}
            <Route
              path="/painting-holidays-scotland"
              element={<ScotlandPage onOpenBookModal={handleOpenBookModal} />}
            />
            <Route
              path="/painting-holidays-scotland/"
              element={<ScotlandPage onOpenBookModal={handleOpenBookModal} />}
            />
            <Route
              path="/scotland"
              element={<ScotlandPage onOpenBookModal={handleOpenBookModal} />}
            />

            {/* Dedicated Sri Lanka Destination Page */}
            <Route
              path="/painting-holidays-sri-lanka"
              element={<SriLankaPage onOpenBookModal={handleOpenBookModal} />}
            />
            <Route
              path="/painting-holidays-sri-lanka/"
              element={<SriLankaPage onOpenBookModal={handleOpenBookModal} />}
            />
            <Route
              path="/sri-lanka"
              element={<SriLankaPage onOpenBookModal={handleOpenBookModal} />}
            />

            {/* Vistas / Departures aliases */}
            <Route
              path="/vistas"
              element={<Navigate to="/#upcoming-trips" replace />}
            />
            <Route
              path="/vistas/"
              element={<Navigate to="/#upcoming-trips" replace />}
            />

            {/* How to Book & Testimonials aliases */}
            <Route
              path="/how-to-book"
              element={<Navigate to="/#how-it-works" replace />}
            />
            <Route
              path="/how-to-book/"
              element={<Navigate to="/#how-it-works" replace />}
            />
            {/* Dedicated Testimonials Page */}
            <Route
              path="/testimonials"
              element={
                <TestimonialsPage
                  onOpenBookModal={handleOpenBookModal}
                  onSelectDestination={(dest) => setSelectedDestination(dest)}
                />
              }
            />
            <Route
              path="/testimonials/"
              element={
                <TestimonialsPage
                  onOpenBookModal={handleOpenBookModal}
                  onSelectDestination={(dest) => setSelectedDestination(dest)}
                />
              }
            />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Modals */}
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
    </BrowserRouter>
  );
}
