import React from 'react';
import { Hero } from '../components/Hero';
import { DestinationsGrid } from '../components/DestinationsGrid';
import { UpcomingTrips } from '../components/UpcomingTrips';
import { YourHost } from '../components/YourHost';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BlogSection } from '../components/BlogSection';
import { FaqSection } from '../components/FaqSection';
import { CtaSection } from '../components/CtaSection';
import { DESTINATIONS, TESTIMONIALS } from '../data/holidaysData';
import { Destination } from '../types';

interface HomePageProps {
  onSelectDestination: (dest: Destination) => void;
  onOpenBookModal: (destinationId?: string, dateId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectDestination,
  onOpenBookModal,
}) => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        onExploreClick={() => {
          const el = document.getElementById('destinations');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenBookModal={() => onOpenBookModal()}
      />

      {/* Featured Destinations Grid */}
      <DestinationsGrid
        destinations={DESTINATIONS}
        onSelectDestination={onSelectDestination}
        onBookDestination={(destId) => onOpenBookModal(destId)}
      />

      {/* Upcoming Trips Table Section */}
      <UpcomingTrips
        onBookTrip={(destId) => onOpenBookModal(destId)}
      />

      {/* Your Host Section - Mary King */}
      <YourHost
        onOpenBookModal={() => onOpenBookModal()}
      />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={TESTIMONIALS} />

      {/* From the Blog Section */}
      <BlogSection />

      {/* FAQs Section */}
      <FaqSection />

      {/* Call To Action Section */}
      <CtaSection
        onOpenBookModal={() => onOpenBookModal()}
      />
    </>
  );
};
