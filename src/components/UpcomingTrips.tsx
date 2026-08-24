import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

interface UpcomingTrip {
  id: string;
  trip: string;
  destination: string;
  destinationId: string;
  nextDeparture: string;
  duration: string;
}

const UPCOMING_TRIPS: UpcomingTrip[] = [
  {
    id: 'trip-1',
    trip: 'Realm of the Nesoi',
    destination: 'Greece',
    destinationId: 'greece',
    nextDeparture: '17 Sep 2026',
    duration: '15 nights',
  },
  {
    id: 'trip-[#2]',
    trip: 'Discover Morocco',
    destination: 'Morocco',
    destinationId: 'morocco',
    nextDeparture: '16 Oct 2026',
    duration: '12 days',
  },
  {
    id: 'trip-3',
    trip: 'Argans & Almonds',
    destination: 'Morocco',
    destinationId: 'morocco',
    nextDeparture: '31 Oct 2026',
    duration: '8 nights',
  },
  {
    id: 'trip-4',
    trip: 'Ocean Breezes',
    destination: 'Sri Lanka',
    destinationId: 'sri-lanka',
    nextDeparture: '1 Dec 2026',
    duration: '7 nights',
  },
  {
    id: 'trip-5',
    trip: 'Rajarata',
    destination: 'Sri Lanka',
    destinationId: 'sri-lanka',
    nextDeparture: '8 Dec 2026',
    duration: '10 nights',
  },
  {
    id: 'trip-6',
    trip: 'Land of Smiles',
    destination: 'Sri Lanka',
    destinationId: 'sri-lanka',
    nextDeparture: '22 Jan 2027',
    duration: '16 nights',
  },
];

interface UpcomingTripsProps {
  onBookTrip: (destinationId?: string) => void;
}

export const UpcomingTrips: React.FC<UpcomingTripsProps> = ({ onBookTrip }) => {
  return (
    <section id="upcoming-trips" className="py-16 bg-[#faf8f5] border-t border-[#e8e4da] relative overflow-hidden">
      
      {/* Decorative Background Washes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-[#70826b]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#d8c3a5]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#70826b]" />
            <span className="font-handwriting text-base">Schedule & Departures</span>
          </div>
          
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e251c]">
            Upcoming Trips
          </h2>
          <p className="mt-3 text-base text-[#525d4f] font-sans-body">
            Reserve your place on our scheduled sketchbook journeys and painting retreats.
          </p>
        </div>

        {/* Desktop / Tablet Table View */}
        <div className="hidden md:block overflow-hidden rounded-xl border-2 border-[#323d30] bg-white shadow-md relative">
          
          {/* Top Hand-drawn Paper Tape Strip */}
          <div className="tape-strip absolute -top-3 left-12 w-28 h-5 rotate-[-1deg] z-20 pointer-events-none" />
          <div className="tape-strip absolute -top-3 right-12 w-28 h-5 rotate-[2deg] z-20 pointer-events-none" />

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f2f5f0] border-b-2 border-[#323d30] text-[#1e251c] font-serif-title text-base sm:text-lg">
                <th scope="col" className="py-4 px-6 font-bold">Trip</th>
                <th scope="col" className="py-4 px-6 font-bold">Destination</th>
                <th scope="col" className="py-4 px-6 font-bold">Next Departure</th>
                <th scope="col" className="py-4 px-6 font-bold">Duration</th>
                <th scope="col" className="py-4 px-6 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e8e4da] text-sm text-[#2c322b]">
              {UPCOMING_TRIPS.map((item) => (
                <tr 
                  key={item.id}
                  className="hover:bg-[#faf8f5] transition-colors group"
                >
                  <td className="py-4.5 px-6 font-bold text-[#1e251c] text-base group-hover:text-[#70826b] transition-colors">
                    {item.trip}
                  </td>
                  <td className="py-4.5 px-6 font-medium text-[#3d463b]">
                    <div className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#70826b]" />
                      <span>{item.destination}</span>
                    </div>
                  </td>
                  <td className="py-4.5 px-6 font-semibold text-[#2c322b]">
                    <div className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#70826b]" />
                      <span>{item.nextDeparture}</span>
                    </div>
                  </td>
                  <td className="py-4.5 px-6 font-medium text-[#4a5548]">
                    <div className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#70826b]" />
                      <span>{item.duration}</span>
                    </div>
                  </td>
                  <td className="py-4.5 px-6 text-right">
                    <button
                      onClick={() => onBookTrip(item.destinationId)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#70826b] hover:bg-[#5a6a56] rounded-md shadow-xs transition-all active:scale-95"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Grid View */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {UPCOMING_TRIPS.map((item) => (
            <div 
              key={item.id} 
              className="p-5 rounded-lg border-2 border-[#323d30] bg-white shadow-xs flex flex-col justify-between gap-3 relative"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif-title text-xl font-bold text-[#1e251c]">
                    {item.trip}
                  </h3>
                  <span className="text-xs font-bold text-[#70826b] bg-[#f2f5f0] px-2.5 py-1 rounded border border-[#d2dbce]">
                    {item.destination}
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-[#4a5548]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#70826b]" />
                    <span className="font-medium">{item.nextDeparture}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#70826b]" />
                    <span className="font-medium">{item.duration}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onBookTrip(item.destinationId)}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#70826b] hover:bg-[#5a6a56] rounded-md shadow-xs transition-all active:scale-95"
              >
                <span>Book Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
