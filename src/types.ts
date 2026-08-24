export interface Destination {
  id: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  shortDescription: string;
  sketchTag: string;
  imageUrl: string;
  watercolorSketchUrl: string;
  durationDays: number;
  priceGBP: number;
  skillLevel: 'All Levels Welcome' | 'Beginner Friendly' | 'Intermediate & Advanced';
  mediums: string[];
  tutorId: string;
  upcomingDates: {
    id: string;
    startDate: string;
    endDate: string;
    spotsLeft: number;
  }[];
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    sketchFocus: string;
  }[];
  includedEquipment: string[];
  gallery: string[];
}

export interface Tutor {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  watercolorHaloColor: string; // Tailwind color hex or class
  expertise: string[];
  taughtMediums: string[];
  location: string;
  quote: string;
  featuredArt: {
    title: string;
    imageUrl: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  tripName: string;
  year: string;
  avatarUrl?: string;
}

export interface BookingFormData {
  destinationId: string;
  dateId: string;
  guestsCount: number;
  fullName: string;
  email: string;
  phone: string;
  roomType: 'Single Occupancy' | 'Double / Twin Sharing' | 'Non-Painting Partner';
  experienceLevel: string;
  mediumPreference: string;
  specialRequests: string;
}
