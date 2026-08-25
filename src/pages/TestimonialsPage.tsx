import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Quote, 
  MapPin, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Heart, 
  MessageSquare,
  ExternalLink,
  Filter
} from 'lucide-react';
import { DESTINATIONS } from '../data/holidaysData';
import { Destination } from '../types';

interface TestimonialsPageProps {
  onOpenBookModal: (destinationId?: string) => void;
  onSelectDestination?: (destination: Destination) => void;
}

interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  tripName: string;
  region: 'morocco' | 'italy' | 'scotland' | 'canary-islands' | 'sri-lanka';
  regionLabel: string;
  quote: string;
  sourceNote?: string;
  isNonPainting?: boolean;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ 
  onOpenBookModal, 
  onSelectDestination 
}) => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const testimonialsData: TestimonialItem[] = [
    // Morocco
    {
      id: 'morocco-1',
      author: 'Alice',
      location: 'California',
      tripName: 'Morocco',
      region: 'morocco',
      regionLabel: 'Morocco',
      quote: "The most amazing trip I've ever taken. In particular, sketching at Mary's well-selected locations meant we saw all the same places, but had at least an hour to really look at and appreciate each stop."
    },
    {
      id: 'morocco-2',
      author: 'Kathy S. and Salomon M.',
      location: 'Toronto',
      tripName: 'Morocco, non-painting trip',
      region: 'morocco',
      regionLabel: 'Morocco',
      isNonPainting: true,
      quote: "From the moment that Mary picked us up in our Marrakesh riad to the moment that she delivered us, seven glorious days later, to our Fez hotel, we enjoyed every minute of traveling with her. Mary is a bright, energetic, and well-traveled English artist who is interesting to listen to and fun to be with. She seems to know every stone and turn in Morocco. She was able to give us great advice when planning the trip (always answering questions promptly and fully); and she knew the route, with all the twists and turns and weather-related changes, in great detail. As a Westerner living in Morocco, Mary was able to share some very thoughtful observations about this fascinating country. And, with her artist's eye and traveler's curiosity, she was a great companion for our trip. Traveling with Mary was like traveling with a good friend - one that is knowledgeable about the country and its people, and respectful of her companions' pace and interests. We were very lucky to have Mary as our guide."
    },
    {
      id: 'morocco-3',
      author: 'Pauline',
      location: 'UK',
      tripName: 'Morocco',
      region: 'morocco',
      regionLabel: 'Morocco',
      quote: "Mary was a wonderful teacher and very patient and tried to get the best out of us. She had given us tasks to do, so it was very helpful as we sketched. I would go again on this holiday."
    },
    {
      id: 'morocco-4',
      author: 'Kathleen',
      location: 'Canada',
      tripName: 'Morocco',
      region: 'morocco',
      regionLabel: 'Morocco',
      quote: "Wow! Was it spending the night in a Kasbah? Was it sitting at the top of a mountain nestled in to sketch a breathtaking view? Was it lunch in the desert with mint tea on an open fire? Was it the incredible scenery? Was it sharing a tagine with a small group of like minded people? Seriously the whole trip was exciting and memorable!"
    },

    // Italian Dolomites
    {
      id: 'italy-1',
      author: 'Kelly',
      location: 'UK',
      tripName: 'Italian Dolomites',
      region: 'italy',
      regionLabel: 'Italian Dolomites',
      sourceNote: "courtesy of Kelly's blog: Blue-eyed View",
      quote: "Constant assistance was provided as Mary made her way between guests, lending tips to improve, offering words of encouragement and praise as each individual work of art came together. After a successful first try, paintings were handed round and positives were exchanged, creating an atmosphere of encouragement and pride amongst the group. ...at the beginning, just after Mary had finished her demonstration, guest Naomi described watercolour as not being '…as easy as it looks!' She then left bursting with excitement explaining 'That was absolutely brilliant, I love painting!'"
    },
    {
      id: 'italy-2',
      author: 'Corrine',
      location: 'Australia',
      tripName: 'Italian Dolomites',
      region: 'italy',
      regionLabel: 'Italian Dolomites',
      quote: "Mary was fantastic! She is a very gifted teacher, knowing how to encourage her students and help them with a perfect combination of expert advice and diplomacy. I liked the way she would point out problems and struggles she has had, or was having, with her own work, which made us all feel better about our own."
    },
    {
      id: 'italy-3',
      author: 'Meg',
      location: 'UK',
      tripName: 'Italian Dolomites',
      region: 'italy',
      regionLabel: 'Italian Dolomites',
      quote: "Watercolour painting with Mary was wonderful. Really special days were spent with her. Lovely to have started something new. So encouraging with our efforts!"
    },
    {
      id: 'italy-4',
      author: 'Alan',
      location: 'UK',
      tripName: 'Italian Dolomites',
      region: 'italy',
      regionLabel: 'Italian Dolomites',
      quote: "Mary was an outstanding painting teacher; she was enthusiastic, a great and encouraging instructor for us first timers."
    },

    // Scotland
    {
      id: 'scotland-1',
      author: 'Cathy',
      location: 'UK',
      tripName: 'Scotland',
      region: 'scotland',
      regionLabel: 'Scotland',
      quote: "I wanted to spend time sitting in the wonderful landscape rather than just walking through it and Mary's offering combines the two things very well. She is there to rescue you when you think 'it's all going wrong', with plenty of words of encouragement and advice. If you're happier doing your own thing, she provides the views in inspiring places. It's a happy mix of fun and hard work which is what a holiday of this type is all about."
    },

    // Canary Islands
    {
      id: 'canary-1',
      author: 'Cathy',
      location: 'UK',
      tripName: 'Canary Islands',
      region: 'canary-islands',
      regionLabel: 'Canary Islands',
      quote: "I recently went on the Mists of Time sketching holiday in La Gomera. My husband came too and did lots of walking whilst the rest of us sketched in the (mostly) lovely warm sunshine! The programme was nicely varied, taking us to different locations with plenty of sketching challenges each day. Mary mixes up the tasks to keep us interested as well as providing structure for beginners. When you think you really cannot paint any more rocks, she is there with advice and encouragement. It isn't all hard work - we had a lot of laughs and enjoyed the end of day review usually over a civilised glass of wine and some olives. Totally recommend this as a location and a great adventure."
    },
    {
      id: 'canary-2',
      author: 'Clare',
      location: 'Scotland',
      tripName: 'Canary Islands',
      region: 'canary-islands',
      regionLabel: 'Canary Islands',
      quote: "I definitely had a fantastic time. Such an amazing trip. Learned loads and met some great people."
    },

    // Sri Lanka
    {
      id: 'srilanka-1',
      author: 'Caroline',
      location: 'Scotland',
      tripName: 'Sri Lanka',
      region: 'sri-lanka',
      regionLabel: 'Sri Lanka',
      quote: "An incredible journey through gorgeous landscapes. We saw so much and I had my first try at painting outside... I learned so much. Thank you!"
    }
  ];

  const regionDestLinks: Record<string, { label: string; url: string; destId: string }> = {
    'morocco': { label: 'See the Morocco trips →', url: '/painting-holidays-morocco/', destId: 'morocco' },
    'italy': { label: 'See the Italy / Dolomites trip →', url: '/painting-holidays-italy/', destId: 'italy' },
    'scotland': { label: 'See the Scotland trips →', url: '/painting-holidays-scotland/', destId: 'scotland' },
    'canary-islands': { label: 'See the Canary Islands trips →', url: '/painting-holidays-canary-islands/', destId: 'canary-islands' },
    'sri-lanka': { label: 'See the Sri Lanka trips →', url: '/painting-holidays-sri-lanka/', destId: 'sri-lanka' },
  };

  const handleDestinationRoute = (destId: string) => {
    if (destId === 'scotland') {
      navigate('/painting-holidays-scotland');
      return;
    }
    const found = DESTINATIONS.find((d) => d.id === destId);
    if (found && onSelectDestination) {
      onSelectDestination(found);
    } else {
      navigate('/#destinations');
    }
  };

  const filteredTestimonials = selectedFilter === 'all'
    ? testimonialsData
    : testimonialsData.filter((t) => t.region === selectedFilter);

  const sections: Array<{ id: 'morocco' | 'italy' | 'scotland' | 'canary-islands' | 'sri-lanka'; title: string }> = [
    { id: 'morocco', title: 'Morocco' },
    { id: 'italy', title: 'Italian Dolomites' },
    { id: 'scotland', title: 'Scotland' },
    { id: 'canary-islands', title: 'Canary Islands' },
    { id: 'sri-lanka', title: 'Sri Lanka' },
  ];

  return (
    <div className="py-12 sm:py-16 bg-[#faf8f5] text-[#2c322b] font-sans-body">
      
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#70826b]">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-[#2c322b]">Testimonials</span>
        </div>
      </div>

      {/* 1. HERO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-xl border-2 border-[#323d30] shadow-md p-6 sm:p-10 lg:p-12 relative overflow-hidden text-center sm:text-left">
          <div className="tape-strip absolute -top-3 left-12 w-32 h-6 rotate-[-1.5deg] z-20 pointer-events-none" />
          <div className="tape-strip absolute -top-3 right-12 w-32 h-6 rotate-[1.5deg] z-20 pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-4">
              <Quote className="w-3.5 h-3.5 text-[#70826b]" />
              <span>Guest Reviews &amp; Experiences</span>
            </div>

            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e251c] leading-tight mb-4">
              What Our Guests Say
            </h1>

            <p className="text-base sm:text-lg text-[#384336] leading-relaxed">
              First-hand reviews from guests who've sketched Morocco, Italy, Scotland, Sri Lanka and the Canary Islands with Mary.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="mt-8 pt-6 border-t border-[#f0ebe0] flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#70826b] mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter by Region:</span>
            </div>
            
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#70826b] text-white shadow-xs'
                  : 'bg-[#f4f7f2] text-[#334030] hover:bg-[#e4ebdf]'
              }`}
            >
              All Regions ({testimonialsData.length})
            </button>

            {sections.map((sec) => {
              const count = testimonialsData.filter((t) => t.region === sec.id).length;
              return (
                <button
                  key={sec.id}
                  onClick={() => setSelectedFilter(sec.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedFilter === sec.id
                      ? 'bg-[#70826b] text-white shadow-xs'
                      : 'bg-[#f4f7f2] text-[#334030] hover:bg-[#e4ebdf]'
                  }`}
                >
                  {sec.title} ({count})
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. REVIEWS BY REGION */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-20">
        {sections.map((sec) => {
          const items = filteredTestimonials.filter((t) => t.region === sec.id);
          if (items.length === 0) return null;

          const linkInfo = regionDestLinks[sec.id];

          return (
            <section key={sec.id} id={sec.id} className="scroll-mt-24 space-y-6">
              
              {/* Region Header Strip */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b-2 border-[#323d30] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#70826b]" />
                  <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c]">
                    {sec.title}
                  </h2>
                </div>

                {linkInfo && (
                  <button
                    onClick={() => handleDestinationRoute(linkInfo.destId)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#70826b] hover:text-[#4d5c49] underline decoration-[#70826b]/40 hover:decoration-[#70826b] cursor-pointer"
                  >
                    <span>{linkInfo.label}</span>
                  </button>
                )}
              </div>

              {/* Grid of Testimonial Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {items.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white rounded-xl border-2 border-[#323d30] p-6 sm:p-7 shadow-xs relative flex flex-col justify-between hover:border-[#70826b] transition-all"
                  >
                    {/* Small Tape Accent */}
                    <div className="tape-strip absolute -top-3 left-8 w-24 h-5 rotate-[-1deg] pointer-events-none" />

                    <div>
                      {/* Badge / Metadata */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#f4f7f2] border border-[#c4cebf] text-[#3d4a3a]">
                          <MapPin className="w-3 h-3 text-[#70826b]" />
                          <span>{t.regionLabel}</span>
                        </span>
                        {t.isNonPainting && (
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-[#806b52] bg-[#f7f2e9] px-2 py-0.5 rounded border border-[#dfd6c6]">
                            Non-Painting Partner
                          </span>
                        )}
                      </div>

                      {/* Quote */}
                      <div className="relative text-sm sm:text-base text-[#384336] leading-relaxed font-sans-body">
                        <Quote className="w-5 h-5 text-[#70826b]/30 mb-1 inline mr-1 -mt-1" />
                        <span>"{t.quote}"</span>
                      </div>
                    </div>

                    {/* Attribution Line */}
                    <div className="mt-6 pt-4 border-t border-[#f0ebe0]">
                      <p className="font-bold text-sm text-[#1e251c]">
                        - {t.author}, {t.location}
                      </p>
                      <p className="text-xs text-[#6e786b] mt-0.5">
                        {t.tripName} {t.sourceNote && <span className="italic">({t.sourceNote})</span>}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </section>
          );
        })}
      </div>

      {/* 3. READY TO CREATE YOUR OWN STORY? [NEW] */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#73846f] text-white p-8 sm:p-12 rounded-xl shadow-md border-2 border-[#323d30] relative overflow-hidden">
          <div className="tape-strip absolute -top-3 left-1/2 -translate-x-1/2 w-40 h-6 rotate-[-0.5deg] z-10 pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/30 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Sketching Community</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold mb-4">
            Ready to create your own story?
          </h2>

          <p className="text-sm sm:text-base text-[#e8f0e6] mb-8 max-w-lg mx-auto leading-relaxed">
            These are real trips, real guests, real sketchbooks filled. Six destinations are waiting for yours.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold">
            <Link
              to="/painting-holidays-scotland/"
              className="px-5 py-3 bg-white text-[#2c3829] uppercase tracking-wider rounded shadow-md hover:bg-[#faf8f5] transition-all"
            >
              Browse all destinations
            </Link>

            <Link
              to="/your-host/"
              className="px-5 py-3 bg-white/20 border border-white/40 text-white uppercase tracking-wider rounded hover:bg-white/30 transition-all"
            >
              Meet your host, Mary King
            </Link>

            <Link
              to="/contact-me/"
              className="px-5 py-3 bg-white/20 border border-white/40 text-white uppercase tracking-wider rounded hover:bg-white/30 transition-all"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
