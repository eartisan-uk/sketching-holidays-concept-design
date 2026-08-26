import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Clock, 
  User, 
  Calendar, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Compass, 
  Sparkles, 
  Quote, 
  HelpCircle,
  Trees,
  Camera,
  Image as ImageIcon,
  Waves,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { CANARY_TRIPS } from '../data/canaryIslandsData';

interface CanaryIslandsPageProps {
  onOpenBookModal: (destinationId?: string, dateId?: string) => void;
}

export const CanaryIslandsPage: React.FC<CanaryIslandsPageProps> = ({ onOpenBookModal }) => {
  // State for which trips are open in accordion (both open or first open)
  const [openTrips, setOpenTrips] = useState<Record<string, boolean>>({
    'mists-of-time': true,
    'edge-of-the-world': false,
  });

  // State for image/sketch mode toggle per trip
  const [sketchViewMode, setSketchViewMode] = useState<Record<string, 'photo' | 'sketch'>>({});

  // State for open FAQs
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({
    'are-these-for-me': true,
    'q-both-islands': false,
    'q-partner': false,
    'q-how-to-get-there': false,
    'q-how-to-book': false
  });

  const toggleTrip = (tripId: string) => {
    setOpenTrips((prev) => ({
      ...prev,
      [tripId]: !prev[tripId],
    }));
  };

  const toggleFaq = (faqId: string) => {
    setOpenFaq((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  return (
    <div id="canary-islands-destination-page" className="min-h-screen bg-[#faf8f5] text-[#2c322b]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#1a2d24] text-white pt-14 pb-20 px-4 md:px-8 overflow-hidden">
        {/* Background ambient pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#52b788_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#274437] text-[#a7d7c5] text-xs font-semibold uppercase tracking-wider mb-6">
            <Compass className="w-3.5 h-3.5 text-[#52b788]" />
            <span>Atlantic Emerald Destination Guide</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-title font-bold tracking-tight text-white mb-6 leading-tight">
            Sketching &amp; Painting Holidays in the Canary Islands
          </h1>

          <div className="relative pl-5 border-l-3 border-[#52b788] max-w-3xl my-6">
            <p className="text-lg md:text-xl text-[#d8f3dc] font-serif-title italic leading-relaxed">
              &ldquo;Misty, tangled forests; jagged volcanic peaks draped with lush greenery; sleepy villages clinging to towering cliffs and a rich culture, in a compact Atlantic emerald&hellip;&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#canary-trips"
              className="px-6 py-3 bg-[#52b788] hover:bg-[#40916c] text-[#0d1f18] font-bold text-sm rounded-lg transition-colors shadow-sm flex items-center gap-2"
            >
              <span>Explore The 2 Island Trips</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenBookModal('la-gomera')}
              className="px-6 py-3 bg-[#244234] hover:bg-[#315745] text-white font-bold text-sm rounded-lg transition-colors border border-[#3e6b56] flex items-center gap-2 cursor-pointer"
            >
              <span>Check 2026/2027 Dates</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. QUICK FACTS STRIP */}
      <section className="bg-[#edf5f0] border-y border-[#d4e4db] py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#40916c] tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2d6a4f]" />
              <span>Trips</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#1a2d24]">
              2 Holidays
            </div>
            <div className="text-xs text-[#52796f]">
              Mists of Time &amp; Edge of the World
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#40916c] tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2d6a4f]" />
              <span>Length</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#1a2d24]">
              8-9 Nights
            </div>
            <div className="text-xs text-[#52796f]">
              Or 16 days combined
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#40916c] tracking-wider flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-[#2d6a4f]" />
              <span>From</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#1a2d24]">
              £1,200 / person
            </div>
            <div className="text-xs text-[#52796f]">
              Non-painting partner rate
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#40916c] tracking-wider flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#2d6a4f]" />
              <span>Led By</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#1a2d24]">
              Mary King
            </div>
            <div className="text-xs text-[#52796f]">
              In person, every day
            </div>
          </div>

          <div className="space-y-1 col-span-2 md:col-span-1">
            <div className="text-xs uppercase font-bold text-[#2d6a4f] tracking-wider flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#1b4332]" />
              <span>Combinable</span>
            </div>
            <div className="font-serif-title font-bold text-base md:text-lg text-[#1a2d24]">
              Save £300
            </div>
            <div className="text-xs text-[#52796f]">
              Booking both islands together
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section className="py-14 px-4 md:px-8 max-w-5xl mx-auto space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8f3dc] text-[#1b4332] text-xs font-semibold uppercase tracking-wider mb-3">
            <Trees className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span>Volcanic Biosphere Reserves &amp; Ancient Forests</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#1a2d24] tracking-tight">
            Introduction to Sketching Holidays in the Canary Islands
          </h2>
        </div>

        <div className="prose prose-stone max-w-none text-base md:text-lg text-[#354f42] leading-relaxed space-y-5">
          <p>
            Dubbed &lsquo;the island that time forgot&rsquo; La Gomera, second smallest in the Canary Island chain, lies just 28 km from its nearest neighbour Tenerife. But if this conjures up visions of concrete jungle, beer-swilling youth and late night clubbing, think again: La Gomera, World Biosphere Reserve, differs in almost every conceivable way.
          </p>

          <p>
            Although like the other islands it is volcanic in origin, its jagged rocks have been sleeping for 2 million years, while its rural lifestyle appears equally placid. The steep, verdant slopes are traditionally farmed using terraces while the whole island is criss-crossed with well-kept hiking trails leading from the highest peaks down vertiginous ravines to surf-sprayed beaches.
          </p>

          <p>
            In the centre of the island (and a UNESCO world-heritage site), the Garajonay National Park swirls in mist, its ancient laurel cloud forest dripping with moss and lichen, the tangle of branches and vegetation distinctly primordial. Giant heathers and ferns line the way while natural lookouts allow unexpected glimpses of tumbling white villages and cobalt sea, while Mount Teide across the water creates a spectacular backdrop on clear days.
          </p>

          <p>
            Culturally rich, La Gomera has an interesting history and its inhabitants are proud of their traditions which include a unique whistling language. This is now being taught in schools and is used to communicate from hillside to hillside across the &lsquo;barrancos&rsquo;. Strikingly different, off the mainstream tourist path yet an effortlessly easy and relaxing destination, it's easy to fall in love with La Gomera.
          </p>

          {/* La Palma Feature Callout */}
          <div className="p-6 rounded-xl bg-[#e8f5ec] border border-[#c4e4ce] my-6 space-y-3">
            <h3 className="font-serif-title font-bold text-xl text-[#143625] flex items-center gap-2">
              <Waves className="w-5 h-5 text-[#2d6a4f]" />
              <span>Wild &amp; Vital La Palma</span>
            </h3>
            <p className="text-base text-[#244234] leading-relaxed">
              Jutting further still out into the wild, blue Atlantic, La Palma, larger and fiercer in every way, is very much alive. With a volcanic eruption as recent as 2021, and its formidable, brooding peaks as jagged and spiky as the cacti which flank them, the centre of the island seems to quiver with a silent, pent-up energy and anticipation.
            </p>
            <p className="text-sm text-[#2e5340] leading-relaxed">
              There is a vaguely Latin American vitality about Santa Cruz, with streets strikingly reminiscent of Havana, flower-decked wooden balconies, and local cigars. To top it all, La Palma is a world-renowned &lsquo;dark sky&rsquo; star-gazing reserve with its own laws against light pollution.
            </p>
          </div>

          <p>
            La Palma is simply breathtaking, while a Canary Island-hopping adventure combining both of these islands would be pretty hard to beat.
          </p>
        </div>
      </section>

      {/* 4. THE TWO CANARY ISLANDS TRIPS */}
      <section id="canary-trips" className="py-12 px-4 md:px-8 bg-[#f2f7f4] border-t border-[#d8e8de]">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#1a2d24]">
              The Two Canary Islands Trips
            </h2>
            <p className="text-sm md:text-base text-[#52796f]">
              Choose La Gomera's tranquil cloud forest mists, La Palma's volcanic drama, or combine both for an unforgettable 16-day island hop.
            </p>
          </div>

          <div className="space-y-6">
            {CANARY_TRIPS.map((trip) => {
              const isOpen = openTrips[trip.id];
              const viewMode = sketchViewMode[trip.id] || 'photo';

              return (
                <div 
                  key={trip.id} 
                  className="bg-white rounded-xl border border-[#d2e3d8] shadow-sm overflow-hidden transition-all"
                >
                  {/* Card Header & Toggle Button */}
                  <div 
                    onClick={() => toggleTrip(trip.id)}
                    className="p-6 md:p-8 cursor-pointer hover:bg-[#f6fbf8] transition-colors flex items-start justify-between gap-4 select-none"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-1 rounded bg-[#1a2d24] text-white text-xs font-bold uppercase tracking-wider">
                          Trip {trip.number} · {trip.island}
                        </span>
                        <span className="text-xs font-bold text-[#2d6a4f] bg-[#d8f3dc] px-2.5 py-1 rounded border border-[#b7e4c7]">
                          {trip.durationRange}
                        </span>
                        <span className="text-xs font-semibold text-[#52796f]">
                          {trip.route}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-serif-title font-bold text-[#1a2d24]">
                        {trip.name} ({trip.island})
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-[#406a59] pt-1">
                        <div>
                          <strong className="text-[#1a2d24]">Medium:</strong> {trip.medium}
                        </div>
                        <div>
                          <strong className="text-[#1a2d24]">Price:</strong> {trip.priceNote}
                        </div>
                      </div>
                    </div>

                    <button 
                      aria-label="Toggle trip details"
                      className="p-2 rounded-full bg-[#edf5f0] text-[#1a2d24] hover:bg-[#d8e8de] transition-colors shrink-0 mt-2"
                    >
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Collapsible Content */}
                  {isOpen && (
                    <div className="px-6 pb-8 md:px-8 pt-2 border-t border-[#e2efe7] space-y-8 animate-fade-in">
                      
                      {/* Image vs Artist Sketch Interactive Toggle */}
                      <div className="relative rounded-xl overflow-hidden bg-[#14231c] aspect-16/9 md:aspect-21/9 max-h-[380px] shadow-inner group">
                        <img 
                          src={viewMode === 'photo' ? trip.imageUrl : trip.watercolorSketchUrl} 
                          alt={`${trip.name} visual preview`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-opacity duration-300"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                        {/* Toggle Controls */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between flex-wrap gap-2">
                          <div className="text-xs text-white/90 bg-black/50 px-3 py-1.5 rounded-md backdrop-blur-xs font-medium">
                            {viewMode === 'photo' ? '📷 Canary Landscape' : '🎨 Mary King Watercolor Sketch Study'}
                          </div>

                          <div className="inline-flex rounded-lg bg-black/60 p-1 backdrop-blur-xs border border-white/20">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSketchViewMode(prev => ({ ...prev, [trip.id]: 'photo' }));
                              }}
                              className={`px-3 py-1 rounded text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                                viewMode === 'photo' ? 'bg-[#52b788] text-[#0d1f18]' : 'text-white/80 hover:text-white'
                              }`}
                            >
                              <Camera className="w-3.5 h-3.5" />
                              <span>Photo</span>
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSketchViewMode(prev => ({ ...prev, [trip.id]: 'sketch' }));
                              }}
                              className={`px-3 py-1 rounded text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                                viewMode === 'sketch' ? 'bg-[#52b788] text-[#0d1f18]' : 'text-white/80 hover:text-white'
                              }`}
                            >
                              <ImageIcon className="w-3.5 h-3.5" />
                              <span>Artist Sketch</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Description Paragraphs */}
                      <div className="space-y-3 text-[#354f42] text-base leading-relaxed">
                        {trip.descriptionParagraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="bg-[#f0f8f3] p-5 rounded-xl border border-[#d2e5d9]">
                        <h4 className="font-serif-title font-bold text-lg text-[#1a2d24] mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#2d6a4f]" />
                          <span>Trip Highlights</span>
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#355345]">
                          {trip.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#2d6a4f] font-bold text-base leading-none">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Day-by-Day Itinerary Table */}
                      <div className="space-y-3">
                        <h4 className="font-serif-title font-bold text-xl text-[#1a2d24] flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-[#2d6a4f]" />
                          <span>Day-by-Day Itinerary</span>
                        </h4>
                        
                        <div className="border border-[#d2e3d8] rounded-xl overflow-hidden shadow-xs">
                          <table className="w-full text-left border-collapse text-sm">
                            <thead>
                              <tr className="bg-[#e7f3ec] border-b border-[#d2e3d8] text-[#1a2d24]">
                                <th className="py-3 px-4 font-bold w-24 md:w-32">Day</th>
                                <th className="py-3 px-4 font-bold">Planned Sketching &amp; Island Excursion</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2efe7] bg-white">
                              {trip.itinerary.map((item, idx) => (
                                <tr key={idx} className="hover:bg-[#f6fbf8] transition-colors">
                                  <td className="py-3 px-4 font-bold text-[#2d5241] align-top whitespace-nowrap bg-[#f9fdfa]">
                                    {item.day}
                                  </td>
                                  <td className="py-3 px-4 text-[#3a594b] leading-relaxed">
                                    {item.activity}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Combination Saving Note */}
                      {trip.combinationNote && (
                        <div className="p-4 rounded-xl bg-[#e6f4ea] border border-[#a8dab5] text-sm text-[#1b4d2e] flex items-center gap-3">
                          <Sparkles className="w-5 h-5 text-[#2d6a4f] shrink-0" />
                          <div>
                            <strong className="text-[#133c23]">Save £300:</strong> {trip.combinationNote}
                          </div>
                        </div>
                      )}

                      {/* Inclusions & Exclusions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div className="p-5 rounded-xl bg-[#f0f8f3] border border-[#d2e5d9] space-y-3">
                          <h5 className="font-bold text-sm text-[#1b4332] uppercase tracking-wider flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#40916c]" />
                            <span>What's Included</span>
                          </h5>
                          <ul className="space-y-2 text-xs md:text-sm text-[#2d4f3e]">
                            {trip.included.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-[#40916c] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-5 rounded-xl bg-[#fbf5f4] border border-[#edd5d2] space-y-3">
                          <h5 className="font-bold text-sm text-[#632f2b] uppercase tracking-wider flex items-center gap-2">
                            <X className="w-4 h-4 text-[#a64843]" />
                            <span>What's Not Included</span>
                          </h5>
                          <ul className="space-y-2 text-xs md:text-sm text-[#5c3e3c]">
                            {trip.notIncluded.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <X className="w-3.5 h-3.5 text-[#a64843] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Departures & Booking CTA Bar */}
                      <div className="p-6 rounded-xl bg-[#1a2d24] text-white space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2d493c] pb-4">
                          <div>
                            <div className="text-xs uppercase tracking-wider text-[#a7d7c5] font-bold">
                              Confirmed Departures
                            </div>
                            <div className="font-serif-title font-bold text-lg text-white">
                              Upcoming Dates for {trip.name}
                            </div>
                          </div>
                          <div className="text-xs text-[#c1e1d2]">
                            Small group of 6-8 with Mary King
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {trip.departures.map((dep) => (
                            <div 
                              key={dep.id} 
                              className="p-3.5 rounded-lg bg-[#274034] border border-[#395d4c] flex items-center justify-between gap-3"
                            >
                              <div>
                                <div className="font-bold text-sm text-white">
                                  {dep.startDate} - {dep.endDate}
                                </div>
                                <div className="text-xs text-[#a7d7c5]">
                                  {dep.durationLabel} · £{dep.priceGBP.toLocaleString()}
                                </div>
                              </div>
                              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#3c6b54] text-[#d8f3dc]">
                                {dep.spotsLeft} spots
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <Link
                            to="/calendar"
                            className="text-xs font-bold text-[#a7d7c5] hover:text-white underline underline-offset-4"
                          >
                            View on full 2026/2027 Calendar →
                          </Link>

                          <button
                            onClick={() => onOpenBookModal('la-gomera', trip.departures[0]?.id)}
                            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#52b788] hover:bg-[#40916c] text-[#0d1f18] font-bold text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <span>Book Now ({trip.name})</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. YOUR SKETCHING DAY */}
      <section className="py-14 px-4 md:px-8 max-w-5xl mx-auto space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8f3dc] text-[#1b4332] text-xs font-semibold uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span>Plein Air Schedule &amp; Rhythm</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#1a2d24] tracking-tight">
            Your Sketching Day
          </h2>
        </div>

        <div className="prose prose-stone max-w-none text-base md:text-lg text-[#354f42] leading-relaxed space-y-4">
          <p>
            &lsquo;Mists of Time&rsquo; is a relaxed trip and we are not going to be rushing around too much, although we will be visiting as much of the island as possible during our time here. There will be a couple of longer days during our stay but we will balance them with a more restful day and a free afternoon in which to enjoy our hotel and immediate area.
          </p>

          <p>
            &lsquo;Edge of the World&rsquo; is similar in nature although we move hotels twice and the walks may be a little rougher.
          </p>

          <p>
            Most days will start with breakfast at 8.00 or 8.30am and departure from the hotel around 9.30am. The average driving time (La Gomera) to reach the first sketching spot will be under an hour, along very scenic, rural mountain roads.
          </p>

          <p>
            Usually there will be 2 or more different locations for sketching and often a walk as well. In some cases this can be a few hours in length (please ask for a detailed itinerary). We will stop and sketch en route. Although I encourage quick sketching, I usually allow an hour or more at each important location and in some cases much longer.
          </p>

          <p>
            Nearly every day on La Gomera we will take a packed lunch with us so we don't have to worry about being near a restaurant at the right time when out in the wilds. In La Palma, we will usually be near a suitable cafe.
          </p>

          <p>
            On these trips I will tailor &lsquo;challenges&rsquo; to individual and group aspirations and development, and you may choose whether or not to participate, although often this can lend a useful focus for the day and be a lot of fun.
          </p>

          <p>
            After a day out, we'll arrive back at the hotel in the late afternoon and meet up before dinner and, every couple of days, look over our sketchbooks and discuss any difficulties or, indeed, admire our successes over a glass of wine and some olives!
          </p>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="py-14 px-4 md:px-8 bg-[#f2f7f4] border-t border-[#d8e8de]">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8f3dc] text-[#1b4332] text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#2d6a4f]" />
              <span>Questions &amp; Essential Preparation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#1a2d24] tracking-tight">
              FAQs
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* Detailed: Are These Holidays For Me? */}
            <div className="bg-white rounded-xl border border-[#d2e3d8] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('are-these-for-me')}
                className="p-6 cursor-pointer hover:bg-[#f6fbf8] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-xl font-serif-title font-bold text-[#1a2d24] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#2d6a4f]" />
                  <span>Are These Holidays For Me?</span>
                </h3>
                <span className="p-1 rounded-full bg-[#edf5f0] text-[#1a2d24]">
                  {openFaq['are-these-for-me'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </div>

              {openFaq['are-these-for-me'] && (
                <div className="px-6 pb-6 pt-2 border-t border-[#e2efe7] text-sm md:text-base text-[#354f42] space-y-4 leading-relaxed">
                  <p>
                    A sketching or painting holiday in the quieter Canaries would be a very rewarding experience for most people. Tranquil, clean and well-organised, you do not need to be especially intrepid to visit these islands and La Gomera is particularly easy.
                  </p>

                  <div className="space-y-2">
                    <strong className="text-[#1a2d24] block text-base">Accommodation &amp; Dining:</strong>
                    <p>
                      On La Gomera we use extremely comfortable, attractive and well-appointed hotels, probably the best on the island. Our first is large enough to support 2 swimming pools, tennis courts, a spa, and 3 restaurants yet always feels like an oasis of calm. Set on a high cliff above Playa Santiago, rooms are laid out like little cottages. Each person (or couple) has their own large room with balcony. We don't rough it in La Gomera!
                    </p>
                    <p>
                      Food in the main restaurant is included: buffet breakfast and dinner with dishes of every imaginable type. Delicious local cuisine sits alongside Italian, British and other favourites, and special diets are catered for.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <strong className="text-[#1a2d24] block text-base">Fitness &amp; Walking:</strong>
                    <p>
                      There is some walking involved on this itinerary. Not much of the island is flat, and any walking will necessarily involve some steep inclines both upwards and downwards. The trails are very well-maintained, however, and should not present much of a problem to anyone used to regular walking at home.
                    </p>
                    <p>
                      Although we do climb to the highest point of the island (Garajonay), the walk is not long and the gradient not too extreme. The longest we walk in a day is around 4 hours; on most days considerably less.
                    </p>
                    <p>
                      La Palma walks are rougher and rockier and require a certain level of fitness. In some cases they are optional but it would be a shame to miss them. Please contact Mary if you are worried about the walking involved.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <strong className="text-[#1a2d24] block text-base">Who Will Love This Trip:</strong>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-[#2d4f3e]">
                      <li>Anyone with average to good fitness able to walk up and downhill to find the best sketching spots.</li>
                      <li>Anyone seeking a truly different landscape without leaving their comfort zone.</li>
                      <li>Those who appreciate high-quality accommodation and having most costs included.</li>
                      <li>Painters of any level looking for stimulating, unique volcanic subjects.</li>
                      <li>Those who enjoy warm, sunny weather away from lively tourist nightlife.</li>
                      <li>Non-participating partners who love hiking or photography.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Q: Can I do both islands? */}
            <div className="bg-white rounded-xl border border-[#d2e3d8] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-both-islands')}
                className="p-5 cursor-pointer hover:bg-[#f6fbf8] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#1a2d24]">
                  Can I do both islands?
                </h3>
                <span className="p-1 rounded-full bg-[#edf5f0] text-[#1a2d24]">
                  {openFaq['q-both-islands'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-both-islands'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#e2efe7] text-sm text-[#355345] leading-relaxed">
                  Yes - book &lsquo;Mists of Time&rsquo; and &lsquo;Edge of the World&rsquo; together as a 16-day Canary Island-hopping holiday, <strong>saving £300</strong> versus booking separately.
                </div>
              )}
            </div>

            {/* Q: Can my non-painting partner come? */}
            <div className="bg-white rounded-xl border border-[#d2e3d8] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-partner')}
                className="p-5 cursor-pointer hover:bg-[#f6fbf8] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#1a2d24]">
                  Can my non-painting partner come?
                </h3>
                <span className="p-1 rounded-full bg-[#edf5f0] text-[#1a2d24]">
                  {openFaq['q-partner'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-partner'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#e2efe7] text-sm text-[#355345] leading-relaxed">
                  Yes, on both trips, at a discounted rate (£1,200) - especially well-suited to partners who enjoy hiking, coastal walking or photography.
                </div>
              )}
            </div>

            {/* Q: How do I get to the islands? */}
            <div className="bg-white rounded-xl border border-[#d2e3d8] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-how-to-get-there')}
                className="p-5 cursor-pointer hover:bg-[#f6fbf8] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#1a2d24]">
                  How do I get to the islands?
                </h3>
                <span className="p-1 rounded-full bg-[#edf5f0] text-[#1a2d24]">
                  {openFaq['q-how-to-get-there'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-how-to-get-there'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#e2efe7] text-sm text-[#355345] leading-relaxed">
                  Fly to Tenerife (Los Christianos) independently from the UK or Europe, then join the group there. The ferry takes about 1 hour to La Gomera or 3 hours to La Palma.
                </div>
              )}
            </div>

            {/* Q: How do I book? */}
            <div className="bg-white rounded-xl border border-[#d2e3d8] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-how-to-book')}
                className="p-5 cursor-pointer hover:bg-[#f6fbf8] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#1a2d24]">
                  How do I book?
                </h3>
                <span className="p-1 rounded-full bg-[#edf5f0] text-[#1a2d24]">
                  {openFaq['q-how-to-book'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-how-to-book'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#e2efe7] text-sm text-[#355345] leading-relaxed">
                  See &ldquo;How to Book&rdquo; below for full step-by-step deposit guidelines, payment terms, and enquiry links.
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 7. YOUR HOST (MARY KING) */}
      <section className="py-14 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#f0f7f3] p-6 md:p-8 rounded-2xl border border-[#d2e5d9] flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-xs">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" 
            alt="Mary King host and tutor"
            referrerPolicy="no-referrer"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-sm shrink-0"
          />
          <div className="space-y-3 text-center md:text-left">
            <div className="text-xs uppercase font-bold text-[#2d6a4f] tracking-wider">
              Artist, Guide &amp; Founder
            </div>
            <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-[#1a2d24]">
              Your host: Mary King
            </h2>
            <p className="text-sm md:text-base text-[#355345] leading-relaxed">
              Mary King leads every Canary Islands sketching holiday in person. With deep knowledge of La Gomera's laurel trails and La Palma's volcanic viewpoints, Mary provides encouraging daily plein air tuition, creative exercises, and warm feedback for painters of all levels.
            </p>
            <div className="pt-2">
              <Link
                to="/your-host"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-[#1b4332] hover:text-[#0d1f18] underline underline-offset-4"
              >
                <span>Read Mary's full story &amp; teaching philosophy →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-14 px-4 md:px-8 bg-[#1a2d24] text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#274437] text-[#a7d7c5] text-xs font-semibold uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5 text-[#52b788]" />
              <span>Guest Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-white">
              What guests say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Testimonial 1: Cathy */}
            <div className="p-6 md:p-8 rounded-xl bg-[#253f33] border border-[#385e4c] space-y-4 flex flex-col justify-between">
              <p className="font-serif-title italic text-base md:text-lg text-[#d8f3dc] leading-relaxed">
                &ldquo;I recently went on the Mists of Time sketching holiday in La Gomera. My husband came too and did lots of walking whilst the rest of us sketched in the (mostly) lovely warm sunshine! Mary mixes up the tasks to keep us interested as well as providing structure for beginners. When you think you really cannot paint any more rocks, she is there with advice and encouragement. We had a lot of laughs and enjoyed the end of day review usually over a civilised glass of wine and some olives. Totally recommend this as a location and a great adventure.&rdquo;
              </p>
              <div className="pt-3 border-t border-[#385e4c] flex items-center justify-between text-xs">
                <div className="font-bold text-white">
                  Cathy, UK
                </div>
                <div className="text-[#a7d7c5]">
                  Canary Islands (La Gomera)
                </div>
              </div>
            </div>

            {/* Testimonial 2: Clare */}
            <div className="p-6 md:p-8 rounded-xl bg-[#253f33] border border-[#385e4c] space-y-4 flex flex-col justify-between">
              <p className="font-serif-title italic text-base md:text-lg text-[#d8f3dc] leading-relaxed">
                &ldquo;I definitely had a fantastic time. Such an amazing trip. Learned loads and met some great people.&rdquo;
              </p>
              <div className="pt-3 border-t border-[#385e4c] flex items-center justify-between text-xs">
                <div className="font-bold text-white">
                  Clare, Scotland
                </div>
                <div className="text-[#a7d7c5]">
                  Canary Islands
                </div>
              </div>
            </div>

          </div>

          <div className="text-center pt-2">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a7d7c5] hover:text-white underline underline-offset-4"
            >
              <span>Read more reviews from Scotland, Sri Lanka, Morocco &amp; Italy →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 9. HOW TO BOOK & CONTACT SECTION */}
      <section className="py-16 px-4 md:px-8 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-2xl border border-[#d2e3d8] shadow-sm space-y-6">
          
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d8f3dc] text-[#1b4332] text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#2d6a4f]" />
              <span>Simple Booking Process</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-[#1a2d24]">
              How to Book
            </h2>
          </div>

          <div className="text-base text-[#354f42] leading-relaxed space-y-3">
            <p>
              You may reserve a place on any trip with payment of a <strong>10% deposit</strong>. Trips run subject to a minimum number of participants being reached, which will be confirmed before a deposit is taken. Until then you may register your interest, to be notified once the trip is confirmed.
            </p>
            <p>
              For the full step-by-step booking process, payment options and what happens after you enquire, see our <Link to="/how-to-book" className="text-[#2d6a4f] font-bold underline underline-offset-4 hover:text-[#1a2d24]">How to Book page</Link>.
            </p>
            <p className="text-xs text-[#52796f]">
              By making your booking you are agreeing to our &lsquo;Terms and Conditions&rsquo; which can be found by clicking <Link to="/terms-and-conditions" className="text-[#2d6a4f] underline hover:text-[#1a2d24]">here</Link>.
            </p>
          </div>

          {/* Contact Details Box */}
          <div className="p-5 rounded-xl bg-[#f0f7f3] border border-[#d2e5d9] space-y-2 text-sm text-[#355345]">
            <div className="font-bold text-[#1a2d24] mb-1">
              Contact information:
            </div>
            <div>
              <strong>Email:</strong> <a href="mailto:hello@sketchingholidays.co.uk" className="text-[#2d6a4f] font-medium underline">hello@sketchingholidays.co.uk</a>
            </div>
            <div>
              <strong>Phone:</strong> 00 44 (0)798 281 2842 (active only when I am in the UK or via WhatsApp)
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-4 flex-wrap text-sm font-bold w-full sm:w-auto">
              <Link
                to="/how-to-book"
                className="px-6 py-3 bg-[#1a2d24] hover:bg-[#274437] text-white rounded-lg transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Full Booking Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact-me"
                className="px-6 py-3 bg-[#edf5f0] hover:bg-[#d8e8de] text-[#1a2d24] rounded-lg transition-colors border border-[#c4ded0] inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

            <button
              onClick={() => onOpenBookModal('la-gomera')}
              className="w-full sm:w-auto px-8 py-3 bg-[#52b788] hover:bg-[#40916c] text-[#0d1f18] font-bold text-sm rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              Reserve a Place (10% Deposit)
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
