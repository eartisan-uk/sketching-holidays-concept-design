import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  MapPin, 
  Clock, 
  User, 
  Users, 
  Calendar, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Compass, 
  Sparkles, 
  AlertCircle, 
  Quote, 
  HelpCircle,
  Mail,
  Sun,
  ShieldCheck,
  Palmtree,
  Camera,
  Image as ImageIcon
} from 'lucide-react';
import { SRI_LANKA_TRIPS, SriLankaTrip } from '../data/sriLankaData';

interface SriLankaPageProps {
  onOpenBookModal: (destinationId?: string, dateId?: string) => void;
}

export const SriLankaPage: React.FC<SriLankaPageProps> = ({ onOpenBookModal }) => {
  // State for which trips in the accordion are open (first one open by default)
  const [openTrips, setOpenTrips] = useState<Record<string, boolean>>({
    'land-of-smiles': true,
    'ocean-breezes': false,
    'rajarata': false,
  });

  // State for image/sketch mode toggle per trip
  const [sketchViewMode, setSketchViewMode] = useState<Record<string, 'photo' | 'sketch'>>({});

  // State for open FAQs
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({
    'are-these-for-me': true,
    'q-partner': false,
    'q-fitness': false,
    'q-climate': false,
    'q-combine': false,
    'q-how-to-book': false
  });

  const toggleTrip = (tripId: string) => {
    setOpenTrips((prev) => ({
      ...prev,
      [tripId]: !prev[tripId],
    }));
  };

  const toggleImageMode = (tripId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSketchViewMode((prev) => ({
      ...prev,
      [tripId]: prev[tripId] === 'sketch' ? 'photo' : 'sketch',
    }));
  };

  const toggleFaq = (faqId: string) => {
    setOpenFaq((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  return (
    <div className="bg-[#faf8f5] text-[#2c322b] font-sans-body pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[500px] sm:min-h-[560px] flex items-center justify-center overflow-hidden border-b border-[#e2ded4]">
        {/* Background Image with Warm Tropical Golden Wash */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=1800"
            alt="Lush emerald landscapes and ocean of Sri Lanka"
            className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b2519]/90 via-[#273724]/60 to-[#1b2519]/40" />
        </div>

        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none paper-texture" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          
          {/* Breadcrumb Navigation */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white mb-6 border border-white/30">
            <Link to="/" className="hover:underline text-white/90">Home</Link>
            <span className="text-white/60">/</span>
            <Link to="/#destinations" className="hover:underline text-white/90">Destinations</Link>
            <span className="text-white/60">/</span>
            <span className="text-white font-bold">Sri Lanka</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-md">
            Sketching &amp; Painting Holidays in Sri Lanka
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#f0f4ee] max-w-3xl mx-auto font-serif-title italic leading-relaxed drop-shadow-sm font-light">
            "Let the warm breezes of the Indian Ocean caress you as the scent of exotic spices fill the air; leave behind your misconceptions along with dark, damp winter days and allow yourself to be enveloped by the mysterious, exotic beauty of this lush emerald island gem..."
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <a
              href="#the-trips"
              className="px-6 py-3 bg-[#70826b] hover:bg-[#5a6a56] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md shadow-md transition-all duration-200"
            >
              Explore 3 Itineraries
            </a>
            <button
              onClick={() => onOpenBookModal('sri-lanka')}
              className="px-6 py-3 bg-white/90 hover:bg-white text-[#2c322b] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md shadow-md transition-all duration-200 cursor-pointer"
            >
              Reserve a Place
            </button>
          </div>
        </div>
      </section>

      {/* 2. QUICK FACTS STRIP */}
      <section className="relative -mt-6 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg border-2 border-[#323d30] p-4 sm:p-6 grid grid-cols-2 md:grid-cols-5 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-[#eee7dc]">
          
          <div className="pt-2 md:pt-0">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#70826b] mb-1">
              <Compass className="w-4 h-4" />
              <span>Trips</span>
            </div>
            <p className="font-serif-title font-bold text-sm sm:text-base text-[#1e251c]">
              3 Distinct Routes
            </p>
            <p className="text-[11px] text-[#6e786b]">Land of Smiles, Ocean Breezes, Rajarata</p>
          </div>

          <div className="pt-2 md:pt-0 md:pl-3">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#70826b] mb-1">
              <Clock className="w-4 h-4" />
              <span>Length</span>
            </div>
            <p className="font-serif-title font-bold text-sm sm:text-base text-[#1e251c]">
              7 to 16 Nights
            </p>
            <p className="text-[11px] text-[#6e786b]">Short breaks to deep tours</p>
          </div>

          <div className="pt-2 md:pt-0 md:pl-3">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#70826b] mb-1">
              <Sparkles className="w-4 h-4" />
              <span>From</span>
            </div>
            <p className="font-serif-title font-bold text-sm sm:text-base text-[#70826b]">
              £1,280 <span className="text-xs font-normal text-[#2c322b]">/ person</span>
            </p>
            <p className="text-[11px] text-[#6e786b]">Sharing discounts available</p>
          </div>

          <div className="pt-2 md:pt-0 md:pl-3">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#70826b] mb-1">
              <User className="w-4 h-4" />
              <span>Led By</span>
            </div>
            <p className="font-serif-title font-bold text-sm sm:text-base text-[#1e251c]">
              Mary King
            </p>
            <p className="text-[11px] text-[#6e786b]">In person, every single day</p>
          </div>

          <div className="pt-2 md:pt-0 md:pl-3 col-span-2 md:col-span-1">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#70826b] mb-1">
              <Users className="w-4 h-4" />
              <span>Partners</span>
            </div>
            <p className="font-serif-title font-bold text-sm sm:text-base text-[#1e251c]">
              Welcome
            </p>
            <p className="text-[11px] text-[#6e786b]">On all three trips</p>
          </div>

        </div>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="bg-white rounded-xl border-2 border-[#323d30] shadow-sm p-6 sm:p-10 relative">
          <div className="tape-strip absolute -top-3.5 left-10 w-32 h-6 rotate-[-1deg] z-10 pointer-events-none" />

          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-2">
              <Palmtree className="w-3.5 h-3.5 text-[#70826b]" />
              <span>An Emerald Island Gem</span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-[#1e251c]">
              Introduction to Sketching Holidays in Sri Lanka
            </h2>
          </div>

          <div className="space-y-4 text-[#384336] leading-relaxed text-sm sm:text-base font-sans-body">
            <p>
              Voted 'world’s smiliest country' in a recent poll, this sun-drenched, verdant land, steeped in natural beauty, culture and history yet with less of the 'hassle' often associated with parts of Asia, delivers to the discerning traveller on all levels. Consistently in the top 10 travellers' favourite islands and recovering well, with boundless energy and optimism, from the recent civil war and less recent but equally devastating tsunami of 2004, the people will melt your heart with their resilience in the face of adversity and their matchless welcome on your painting/sketching holidays in Sri Lanka.
            </p>
            <p>
              Although visibly bustling and vibrant in an Asian way, many parts of the country remain extremely unspoilt and tranquil, breathtakingly beautiful and surprisingly accessible. While undisputedly a long flight from Europe, most who make the journey are enchanted from the minute they step off the plane. Exotic with a capital E, Sri Lanka, when known as Ceylon, was a former British colony and as such can feel strangely familiar to a visitor from the UK. The country is very well-used to welcoming tourists and delights in seeing the Brits returning, now as their guests. In general they also appreciate art and have a long history of painting in their culture, much of it intertwined with religion while modern landscape painters sometimes display their canvasses on the beach.
            </p>
            <p>
              Closing your eyes and imagining this country will probably conjure up images of docile elephants, elaborately decorated with gold and brightly coloured fabrics; swaying palms, crashing surf and warm seas; pretty tea plantations and hot, fiery curries. Sri Lanka is all this, and so much more….. and much of it eminently sketchable. Within this small island lies much variety in terms of scenery and climate as well as cultural and religious diversity. Ancient and modern Buddhist, Hindu and even Christian monuments can be found, along with world-class national parks which are home to populations of wild elephant, leopards, crocodiles and various monkeys along with a striking number of birds. While we are unlikely to find an opportunity to sketch these desirable yet elusive subjects, the knowledge of their presence helps complete the vivid pictorial atmosphere and we will not be short of inspiration during our time here.
            </p>
            <p className="font-semibold text-[#1e251c] pt-2">
              From the hot, sultry south where mile after mile of deserted, coconut-fringed, golden sands demand to be strolled upon to the cooler, misty green highlands complete with tumbling waterfalls; from colourful fishing boats to fascinating temples, the only dilemma is how to squeeze it all into one visit. Be warned… Sri Lanka's charms are addictive and your first visit may well not be your last!
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE THREE SRI LANKA TRIPS */}
      <section id="the-trips" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-[#70826b]" />
            <span>Itineraries &amp; Routes</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1e251c]">
            The Three Sri Lanka Trips
          </h2>
          <p className="text-sm sm:text-base text-[#5a6556] mt-2 max-w-2xl mx-auto">
            Click any trip to explore full day-by-day itineraries, highlights, what's included, and upcoming departure dates.
          </p>
        </div>

        <div className="space-y-8">
          {SRI_LANKA_TRIPS.map((trip) => {
            const isOpen = openTrips[trip.id];
            const currentMode = sketchViewMode[trip.id] || 'photo';

            return (
              <div 
                key={trip.id}
                className="bg-white rounded-xl border-2 border-[#323d30] shadow-md overflow-hidden transition-all duration-300 relative"
              >
                {/* Header Bar / Collapsible Trigger */}
                <div 
                  onClick={() => toggleTrip(trip.id)}
                  className="p-6 sm:p-8 cursor-pointer hover:bg-[#faf8f5] transition-colors border-b border-[#ebd7c2]/60 flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#70826b] text-white font-bold flex items-center justify-center shrink-0 font-serif-title text-lg shadow-xs">
                      {trip.number}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs uppercase tracking-wider font-bold text-[#70826b]">
                          Trip {trip.number}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#f4f7f2] border border-[#c4cebf] font-semibold text-[#3d4a3a]">
                          {trip.route}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#ebd8c6]/50 text-[#5a4838] font-semibold">
                          {trip.medium}
                        </span>
                      </div>

                      <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c]">
                        {trip.name}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-[#5a6556] mt-1 font-semibold">
                        {trip.priceNote}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center">
                    <div className="text-right hidden sm:block">
                      <span className="text-xs text-[#6e786b] block">Duration</span>
                      <span className="font-bold text-sm text-[#1e251c]">{trip.durationRange}</span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#f4f7f2] border border-[#d6dfd3] flex items-center justify-center text-[#70826b]">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="p-6 sm:p-8 sm:pt-6 bg-white space-y-8 animate-fade-in">
                    
                    {/* Visual Media with Photo/Watercolor Toggle */}
                    <div className="relative rounded-lg overflow-hidden border border-[#d6cfbe] shadow-inner max-h-[380px]">
                      <img
                        src={currentMode === 'sketch' ? trip.watercolorSketchUrl : trip.imageUrl}
                        alt={`${trip.name} in Sri Lanka`}
                        className="w-full h-72 sm:h-80 object-cover object-center"
                      />

                      {/* Photo / Sketch Toggle Button */}
                      <button
                        onClick={(e) => toggleImageMode(trip.id, e)}
                        className="absolute bottom-3 right-3 px-3 py-1.5 rounded-md bg-white/95 backdrop-blur-md text-xs font-bold text-[#2c322b] shadow-md border border-[#c8c2b4] hover:bg-white flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        {currentMode === 'sketch' ? (
                          <>
                            <Camera className="w-3.5 h-3.5 text-[#70826b]" />
                            <span>View Location Photo</span>
                          </>
                        ) : (
                          <>
                            <Palette className="w-3.5 h-3.5 text-[#70826b]" />
                            <span>View Artist Sketch</span>
                          </>
                        )}
                      </button>

                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#1e251c]/80 backdrop-blur-xs text-[11px] font-semibold text-white">
                        {currentMode === 'sketch' ? 'Watercolor Study View' : 'Location Snapshot'}
                      </div>
                    </div>

                    {/* Description Paragraphs */}
                    <div className="space-y-3 text-sm sm:text-base text-[#384336] leading-relaxed">
                      {trip.descriptionParagraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                      {trip.offerings && (
                        <p className="bg-[#f8f6f0] p-4 rounded-md border-l-4 border-[#70826b] text-xs sm:text-sm italic">
                          <strong>Offerings:</strong> {trip.offerings}
                        </p>
                      )}
                    </div>

                    {/* Highlights Grid */}
                    <div className="bg-[#faf8f5] p-5 rounded-lg border border-[#e8e2d5]">
                      <h4 className="font-serif-title font-bold text-base text-[#1e251c] mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#70826b]" />
                        <span>Trip Highlights</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#384336]">
                        {trip.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#70826b] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Itinerary Table */}
                    <div>
                      <h4 className="font-serif-title font-bold text-lg text-[#1e251c] mb-3 flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#70826b]" />
                          <span>Day-by-Day Itinerary</span>
                        </span>
                        <span className="text-xs font-normal text-[#6e786b]">
                          (Please ask for full detailed itinerary notes)
                        </span>
                      </h4>

                      <div className="border border-[#323d30] rounded-lg overflow-hidden shadow-2xs">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-[#f0ece1] text-[#1e251c] font-serif-title font-bold border-b border-[#323d30]">
                            <tr>
                              <th className="py-2.5 px-4 w-28 sm:w-36">Day</th>
                              <th className="py-2.5 px-4">Activity &amp; Sketching Focus</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e2ded4] bg-white">
                            {trip.itinerary.map((row, rIdx) => (
                              <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-[#faf8f5]' : 'bg-white'}>
                                <td className="py-2.5 px-4 font-bold text-[#70826b] align-top whitespace-nowrap">
                                  {row.day}
                                </td>
                                <td className="py-2.5 px-4 text-[#384336] leading-relaxed">
                                  {row.activity}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* What's Included / Not Included Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* What's Included */}
                      <div className="p-5 bg-[#f4f7f2] rounded-lg border border-[#c4cebf]">
                        <h5 className="font-serif-title font-bold text-sm text-[#1e251c] mb-3 flex items-center gap-1.5 text-[#3d4a3a]">
                          <Check className="w-4 h-4 text-[#70826b]" />
                          <span>What's Included</span>
                        </h5>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#384336]">
                          {trip.included.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#70826b] font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What's Not Included */}
                      <div className="p-5 bg-[#faf6f3] rounded-lg border border-[#e4d5c9]">
                        <h5 className="font-serif-title font-bold text-sm text-[#1e251c] mb-3 flex items-center gap-1.5 text-[#6b4733]">
                          <X className="w-4 h-4 text-[#8a5d48]" />
                          <span>What's Not Included</span>
                        </h5>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#4d423b]">
                          {trip.notIncluded.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#8a5d48] font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Trip Specific Notes & Combinability */}
                    {(trip.note || trip.combinable) && (
                      <div className="p-4 bg-[#f8f6f0] border border-[#d6cfbe] rounded-lg text-xs sm:text-sm space-y-2">
                        {trip.note && (
                          <p className="text-[#5a4838]">
                            <strong>Note:</strong> {trip.note}
                          </p>
                        )}
                        {trip.combinable && (
                          <p className="text-[#384336]">
                            <strong>Combinable Itinerary:</strong> {trip.combinable}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Departures & Booking Box */}
                    <div className="pt-4 border-t border-[#f0ebe0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider font-bold text-[#70826b] block mb-1">
                          Upcoming Scheduled Departures
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {trip.departures.map((dep) => (
                            <div 
                              key={dep.id}
                              className="px-3 py-1.5 bg-[#faf8f5] border border-[#323d30] rounded-md text-xs"
                            >
                              <span className="font-bold text-[#1e251c]">{dep.startDate} - {dep.endDate}</span>
                              <span className="text-[#6e786b] ml-1.5">({dep.durationLabel})</span>
                              <span className="text-[#70826b] font-semibold ml-2">£{dep.priceGBP}</span>
                              <span className="text-[10px] text-[#8c6b4e] block">{dep.spotsLeft} spots left</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-3">
                        <button
                          onClick={() => onOpenBookModal('sri-lanka')}
                          className="w-full sm:w-auto px-6 py-3 bg-[#70826b] hover:bg-[#5a6a56] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-sm transition-all duration-200 cursor-pointer"
                        >
                          Book Now →
                        </button>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* 5. YOUR SKETCHING DAY */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#faf8f5] rounded-xl border-2 border-[#70826b] p-6 sm:p-10 shadow-xs relative">
          <div className="tape-strip absolute -top-3.5 right-12 w-32 h-6 rotate-[1deg] z-10 pointer-events-none" />

          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-[#70826b] font-bold">Daily Rhythm &amp; Atmosphere</span>
            <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-[#1e251c] mt-1">
              Your Sketching Day
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#384336] leading-relaxed">
            <p>
              With the huge amount of subject matter and relatively short space of time, we will want to fill those pages with bright, mouthwatering images. That does not mean that sketching all day every day is compulsory. Those wishing to simply relax and soak up the atmosphere, hang out on the beach, visit a temple or do a little swimming are always welcome to do so, where the itinerary allows.
            </p>
            <p>
              On days when we are not changing location, you will also have the opportunity to stay around the hotel, sketching or otherwise, perhaps working up earlier drawings into more finished pieces.
            </p>
            <p>
              Even on the busier Sketchbook Journeys there will be no day without some opportunity to sketch. Vistas Journeys are structured to give at least a half day's painting in every main location. Some early starts are required if we have further to go, or to see the sunrise or view wildlife.
            </p>
            <p>
              On stay-put days and on Ocean Breezes, we will usually take breakfast at around 8.30am, then set off for the day, perhaps armed with snacks for lunch, to a nearby sketching spot. Often a short walk will get us to the ideal place. Everywhere we sketch in the hot parts of Sri Lanka will have available shade and usually a swimming opportunity also.
            </p>
            <p>
              Most days, you will be given a special exercise to experiment with, which is designed to stimulate and challenge you as an artist. It might be trying a new technique for you, or looking at the landscape in a new way. You may spend as much or as little time on this as you like, but it may give you inspiration if you are a little overwhelmed by being faced with a truly different type of subject, and it can be your starting point for the day. We can look at the results together during the evening's appraisal; you may be surprised!
            </p>
            <p>
              Often we will paint until late afternoon, when we return to our hotel to relax, eat and perhaps look through our sketches. The rest of the evening is yours to do as you choose, but mostly expect this to be wiggling your toes in the sand, listening to the sound of the waves, maybe clutching a Lion beer. We pick our hotels for their location, peace and tranquillity so nightlife is not a feature of the holidays. Many people find the soporific effects of sand, sea, warmth and concentration send them earlier than usual to a restful sleep, so they can bounce out of bed to the first sounds of tropical birdsong and the promise of a new creative day.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#70826b]" />
            <span>Essential Advice &amp; Queries</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-[#1e251c]">
            FAQs
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          
          {/* Are These Holidays For Me? (Detailed) */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('are-these-for-me')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>Are These Holidays For Me?</span>
              {openFaq['are-these-for-me'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['are-these-for-me'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed space-y-3">
                <p>
                  Without beating around the bush, Sri Lanka is a HOT destination, in every sense of the word. The holidays here are for those who can tolerate a hot and humid climate. The rewards are immeasurable; in fact the sunny weather is reward itself for those who enjoy it. But the honest truth is, if you can't take the heat, stay out of Sri Lanka.
                </p>
                <p>
                  Landing for the first time in an Asian country can be a full-blown assault on the senses and somewhat bewildering after a long, tiring flight. But for those eager for new experiences and adventures who are culturally open, tolerant and patient, it will without a doubt be intoxicating and life-enriching. Both Sri Lankan trips try to limit the impact of this culture-shock and we seek out safe, tranquil havens for our sketching. In addition, the painting itself need not be overly challenging.
                </p>
                <p>
                  The hotels are generally of a pretty good standard and they take customer service seriously. While we do NOT go 5 star, our hotels have been chosen for comfort, cleanliness, location and friendliness as well as authenticity. Some places, notably in the rainforest, are quite simple, but you will have your own ensuite room with aircon or in some cases (absolutely my preference) a ceiling fan, and a mosquito net in places where it's useful. We do NOT stay in faceless, foreign-owned resorts; we choose smaller, local-run properties full of character.
                </p>
                <p>
                  Outside the accommodation, the 'hassle' you may expect to receive in such a destination will be largely absent. Curiosity and friendly approaches, while out and about, will probably not be. Sri Lankan culture is gentle and polite, but as a tourist you represent an irresistible conversational opportunity. Most locals would be mortified if they thought they had caused offence; likewise, we should be ready to respect their cultural traditions, and they are truly some of the friendliest people in the world.
                </p>
                <p>
                  These trips are NOT suitable for those with mobility issues. Most of the sketching spots do not entail much walking but they do involve some, on sand or rock, which is unavoidable, and on the Sketchbook Journeys we move from place to place frequently, with occasional one-night stays. Packing light is important for 'Land of Smiles' in particular.
                </p>
                <p>
                  The hotel we use for Ocean Breezes is idyllically located on a quiet rural lane a good 10-15 minutes walk to the main road and beach. Sometimes we may have transport, often not. The way to the beach is glorious, flat and full of birdlife, and hot.
                </p>
                <p className="font-semibold text-[#1e251c]">
                  In short, most people adore Sri Lanka and feel extremely comfortable here. If you are of a timid disposition or have never been outside Europe before, you might like to contact me for further advice (as well as the 'Useful Information' fact-sheet). If you are healthy, adaptable and easy-going I will certainly encourage you to come!
                </p>
              </div>
            )}
          </div>

          {/* Q1: Non-painting partner */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-partner')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>Can my non-painting partner come?</span>
              {openFaq['q-partner'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-partner'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  <strong>Yes</strong> - welcome on all three trips with room sharing discounts available.
                </p>
              </div>
            )}
          </div>

          {/* Q2: Fitness & Walking */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-fitness')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>Do I need to be fit / able to walk long distances?</span>
              {openFaq['q-fitness'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-fitness'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  <strong>No</strong>, but these trips are not suitable for anyone with mobility issues - some walking on sand or rock is unavoidable, and 'Land of Smiles' changes location frequently.
                </p>
              </div>
            )}
          </div>

          {/* Q3: Climate */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-climate')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>What's the climate like?</span>
              {openFaq['q-climate'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-climate'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  Hot and humid, consistently. If you can't tolerate heat, these trips aren't for you - see above.
                </p>
              </div>
            )}
          </div>

          {/* Q4: Combining Trips */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-combine')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>Can I combine Ocean Breezes and Rajarata?</span>
              {openFaq['q-combine'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-combine'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  <strong>Yes</strong> - they're designed to link together, at a combined price of £1,360 for Rajarata when taken with Ocean Breezes. Enquire for a combined itinerary.
                </p>
              </div>
            )}
          </div>

          {/* Q5: How to Book */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-how-to-book')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>How do I book?</span>
              {openFaq['q-how-to-book'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-how-to-book'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  See "How to Book" section below or jump straight to{' '}
                  <Link to="/how-to-book/" className="font-bold text-[#70826b] underline decoration-[#70826b]/40 hover:text-[#4d5c49]">
                    How to Book
                  </Link>.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 7. YOUR HOST */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border-2 border-[#323d30] shadow-sm p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 relative">
          <div className="tape-strip absolute -top-3 left-10 w-28 h-6 rotate-[-1deg] z-10 pointer-events-none" />

          <div className="w-40 sm:w-48 shrink-0">
            <div className="p-3 bg-[#faf8f5] border border-[#323d30] rounded shadow-sm rotate-[-1.5deg]">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600"
                alt="Mary King - Host & Tutor"
                className="w-full h-44 object-cover rounded"
              />
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#70826b] font-bold">Your Tutor &amp; Tour Leader</span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c]">
              Your Host: Mary King
            </h2>
            <p className="text-sm sm:text-base text-[#4d5849] leading-relaxed">
              Every Vistas sketching holiday in Sri Lanka is guided and hosted personally by Mary King. With decades of international painting experience, a warm, encouraging approach for artists of all levels, and intimate local knowledge, Mary ensures you find the most inspiring vantage points while feeling completely supported every step of the journey.
            </p>
            <div className="pt-2">
              <Link
                to="/your-host/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#70826b] hover:text-[#4d5c49] hover:underline"
              >
                <span>Read Mary King's full bio and background →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#73846f] text-white rounded-xl border-2 border-[#323d30] shadow-md p-8 sm:p-10 relative overflow-hidden">
          <div className="tape-strip absolute -top-3.5 right-12 w-32 h-6 rotate-[1.5deg] z-10 pointer-events-none" />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d8e2d4] font-bold mb-2">
              <Quote className="w-4 h-4 text-white" />
              <span>What Guests Say</span>
            </div>

            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold mb-4">
              What Guests Say
            </h2>

            <blockquote className="italic text-base sm:text-xl font-serif-title leading-relaxed text-[#f4f7f2] mb-4">
              "An incredible journey through gorgeous landscapes... I had my first try at painting outside... I learned so much."
            </blockquote>

            <div className="flex items-center justify-between border-t border-white/20 pt-4">
              <div>
                <p className="font-bold text-sm sm:text-base text-white">
                  - Caroline, Scotland
                </p>
                <p className="text-xs text-[#d8e2d4]">
                  Sri Lanka Sketching Holiday
                </p>
              </div>

              <Link
                to="/testimonials/"
                className="text-xs font-bold text-white hover:underline uppercase tracking-wider"
              >
                Read all guest reviews →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. HOW TO BOOK */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border-2 border-[#323d30] shadow-md p-6 sm:p-10 relative">
          <div className="tape-strip absolute -top-3.5 left-12 w-32 h-6 rotate-[-1deg] z-10 pointer-events-none" />

          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-[#70826b] font-bold">Simple Reservations</span>
            <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-[#1e251c] mt-1">
              How to Book
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#384336] leading-relaxed mb-8">
            <p>
              You may reserve a place on any trip with payment of a 10% deposit. Trips run subject to a minimum number of participants being reached, which will be confirmed before a deposit is taken. Until then you may register your interest, to be notified once the trip is confirmed.
            </p>
            <p>
              For the full step-by-step booking process, payment options and what happens after you enquire, see our{' '}
              <Link to="/how-to-book/" className="font-bold text-[#70826b] underline decoration-[#70826b]/40 hover:text-[#4d5c49]">
                How to Book page
              </Link>.
            </p>
            <p className="text-xs sm:text-sm text-[#6e786b]">
              By making your booking you are agreeing to our{' '}
              <Link to="/faqs" className="underline hover:text-[#2c322b]">
                Terms and Conditions
              </Link>.
            </p>
          </div>

          {/* Contact Details Box */}
          <div className="p-4 sm:p-5 bg-[#faf8f5] border border-[#323d30] rounded-lg mb-8">
            <h4 className="font-serif-title font-bold text-sm sm:text-base text-[#1e251c] mb-2">
              Contact Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#70826b]" />
                <a href="mailto:hello@sketchingholidays.co.uk" className="hover:underline font-semibold">
                  hello@sketchingholidays.co.uk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#70826b]" />
                <a href="tel:+447982812842" className="hover:underline font-semibold">
                  00 44 (0)798 281 2842
                </a>
                <span className="text-[11px] text-[#6e786b]">(UK / WhatsApp)</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              to="/how-to-book/"
              className="px-6 py-3.5 bg-[#70826b] hover:bg-[#5a6a56] text-white font-bold text-xs uppercase tracking-wider rounded shadow-sm transition-all"
            >
              Full booking guide →
            </Link>

            <Link
              to="/contact-me/"
              className="px-6 py-3.5 bg-[#faf8f5] hover:bg-[#f0ebe0] text-[#2c322b] border border-[#323d30] font-bold text-xs uppercase tracking-wider rounded shadow-2xs transition-all"
            >
              Get in touch →
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
