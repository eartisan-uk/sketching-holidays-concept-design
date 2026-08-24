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
  ShieldCheck
} from 'lucide-react';
import { SCOTTISH_TRIPS, ScottishTrip } from '../data/scotlandData';

interface ScotlandPageProps {
  onOpenBookModal: (destinationId?: string, dateId?: string) => void;
}

export const ScotlandPage: React.FC<ScotlandPageProps> = ({ onOpenBookModal }) => {
  // State for which trips in the accordion are open (first one open by default)
  const [openTrips, setOpenTrips] = useState<Record<string, boolean>>({
    'the-bonnie-broom': true,
  });

  // State for image/sketch mode toggle per trip
  const [sketchViewMode, setSketchViewMode] = useState<Record<string, 'photo' | 'sketch'>>({});

  // State for open FAQs
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({
    'are-these-for-me': true,
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

  // Dynamically calculate the minimum "From" price
  const minPrice = Math.min(...SCOTTISH_TRIPS.map((t) => t.fromPriceGBP));

  return (
    <div className="bg-[#faf8f5] text-[#2c322b] font-sans-body pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[500px] sm:min-h-[560px] flex items-center justify-center overflow-hidden border-b border-[#e2ded4]">
        {/* Background Image with Atmospheric Moody Scottish Mist Wash */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=1800"
            alt="Moody majestic Scottish Highlands"
            className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b2219]/90 via-[#2c372a]/60 to-[#1b2219]/40" />
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
            <span className="text-white font-bold">Scotland</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-md">
            Sketching &amp; Painting Holidays in Scotland
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#f4efe6] max-w-3xl mx-auto font-sans-body leading-relaxed drop-shadow-xs">
            Refresh your spirit and choose the remotest, wildest and least-inhabited corner of the British Isles for your sketching/painting holiday in Scotland, amidst the moody, majestic scenery of the far North...
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('the-four-trips');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-[#70826b] hover:bg-[#5a6a56] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              Explore the 4 Scottish Trips
            </button>
            <button
              onClick={() => onOpenBookModal('scotland')}
              className="px-6 py-3.5 bg-white/95 hover:bg-white text-[#1e251c] font-bold text-xs uppercase tracking-wider rounded-md shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              Book Your Place
            </button>
          </div>

        </div>
      </section>

      {/* 2. QUICK FACTS STRIP (Directly under Hero, Above Fold) */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 mb-16">
        <div className="bg-white rounded-xl border-2 border-[#323d30] shadow-lg p-4 sm:p-6 overflow-hidden relative">
          <div className="tape-strip absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-6 rotate-[-0.5deg] z-10 pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#ece6d9] text-center">
            
            {/* Fact 1: Trips */}
            <div className="p-3 sm:p-4 flex flex-col items-center justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#70826b] flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" />
                Trips
              </span>
              <span className="font-serif-title font-bold text-base sm:text-lg text-[#1e251c] mt-1">
                4 Itineraries
              </span>
              <span className="text-[11px] text-[#636e60] mt-0.5 leading-tight">
                Ullapool, Lochinver, Inverness, Colonsay
              </span>
            </div>

            {/* Fact 2: Length */}
            <div className="p-3 sm:p-4 flex flex-col items-center justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#70826b] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Length
              </span>
              <span className="font-serif-title font-bold text-base sm:text-lg text-[#1e251c] mt-1">
                4 to 10 days
              </span>
              <span className="text-[11px] text-[#636e60] mt-0.5 leading-tight">
                Day options available
              </span>
            </div>

            {/* Fact 3: From Price */}
            <div className="p-3 sm:p-4 flex flex-col items-center justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#70826b] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                From
              </span>
              <span className="font-serif-title font-bold text-base sm:text-lg text-[#1e251c] mt-1">
                £{minPrice}
              </span>
              <span className="text-[11px] text-[#636e60] mt-0.5 leading-tight">
                Per person
              </span>
            </div>

            {/* Fact 4: Led by */}
            <div className="p-3 sm:p-4 flex flex-col items-center justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#70826b] flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                Led by
              </span>
              <span className="font-serif-title font-bold text-base sm:text-lg text-[#1e251c] mt-1">
                Mary King
              </span>
              <span className="text-[11px] text-[#636e60] mt-0.5 leading-tight">
                In person, every day
              </span>
            </div>

            {/* Fact 5: Solo Travellers */}
            <div className="p-3 sm:p-4 col-span-2 md:col-span-1 flex flex-col items-center justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#70826b] flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                Solo Travellers
              </span>
              <span className="font-serif-title font-bold text-base sm:text-lg text-[#70826b] mt-1">
                Welcome
              </span>
              <span className="text-[11px] text-[#636e60] mt-0.5 leading-tight">
                No single supplement on select trips
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION TO SKETCHING HOLIDAYS IN SCOTLAND */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
            <Palette className="w-3.5 h-3.5 text-[#70826b]" />
            <span>Highland &amp; Coastal Wilderness</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1e251c]">
            Introduction to Sketching Holidays in Scotland
          </h2>
          <div className="w-20 h-1 bg-[#70826b] mx-auto mt-4 rounded-full" />
        </div>

        <div className="prose prose-stone max-w-none text-[#333d31] font-sans-body text-base sm:text-lg leading-relaxed space-y-6">
          
          <p className="first-letter:text-5xl first-letter:font-serif-title first-letter:font-bold first-letter:text-[#70826b] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            The far Northwest - further than many people have ever heard of, let alone visited - contains some of the last true wilderness regions in Europe. Now with global 'Geopark' status, these rocks are believed to be the oldest in the world and looking at the landscape, it is easy to imagine the scene unchanged since the dawn of time. Yet this ancient, primeval land, where golden eagles soar above heather-clad mountains, has seen human habitation since Man first colonised these isles. The remains of their cottages, byres and much earlier 'brochs' can be seen in the remotest corners, firing the imagination with images of a simple, yet harsh life living off the land which at first glance appears so empty, although it has a rich and diverse ecology.
          </p>

          <p>
            In pockets of original Caledonian forest, rare mammals such as the Scottish wildcat and pine marten maintain their final stronghold, while the shoreline is home to families of seals, often seen clumsily hoisting themselves onto rocks for a spot of sunbathing or fixing their big, brown eyes on the fishing boats in Lochinver harbour. The elusive otter, now on the increase, is notoriously difficult to spot although the locals will tell you you're almost sure of a sighting on a summer evening as they frolic playfully amongst the rocks of the river Inver.
          </p>

          <div className="my-8 p-6 bg-[#f2ede4] border-l-4 border-[#70826b] rounded-r-md">
            <p className="italic font-serif-title text-lg text-[#253023] m-0">
              "While the area is steeped in history and the proud locals guard their culture and traditions, a painting holiday to this region is mostly about the incredible landscape: seeing it, smelling it, feeling it."
            </p>
          </div>

          <p>
            My West Coast programmes run from Lochinver in Sutherland and Ullapool, Ross-shire. These small villages are 94 miles and 58 miles from Inverness. 36 miles apart, public transport is scant in this area so even if you bring a car (strongly recommended) you should base yourself in the appropriate village to join the holiday.
          </p>

          <p>
            Far less remote, Inverness is the Highland Capital and is easily accessible, while representing the gateway to an extraordinary variety of painting subjects in all directions, as highlighted in the 'Around the Blooming Heather' itinerary.
          </p>

          <p>
            You may decide to tie in a sketching week with time exploring further afield, or to bring along a non-painting partner. These areas are a magnet to those keen on hill walking, climbing and fishing as well as simply relaxing in a peaceful environment with a few good books! Inverness, of course, is the perfect base for anyone interested in Scottish history and culture.
          </p>

          <p className="bg-[#eef2ec] p-4 rounded-lg border border-[#c4cebf] text-sm text-[#2d392b]">
            <strong>Special Note on Day Trips &amp; Workshops:</strong> In addition to these itineraries, sketching day trips and painting workshops are sometimes available. Please get in touch to enquire about this possibility.
          </p>

          <p className="font-medium text-[#20291e]">
            Many people have told me that they had never really 'seen' the landscape so completely as when they started to paint it, and that it has changed their whole way of looking. See the Northwest Highlands in a new light, in all its windswept, majestic, breathtaking glory, where the city seems a million miles away and Nature always has the final say.
          </p>

        </div>
      </section>

      {/* 4. THE FOUR SCOTTISH TRIPS (INLINE ACCORDION) */}
      <section id="the-four-trips" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-[#70826b]" />
            <span>Choose Your Adventure</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1e251c]">
            The four Scottish trips
          </h2>
          <p className="mt-3 text-base text-[#525d4f] font-sans-body max-w-2xl mx-auto">
            Click each trip below to expand its full itinerary, highlights, included gear, and upcoming departure dates.
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="space-y-6">
          {SCOTTISH_TRIPS.map((trip: ScottishTrip) => {
            const isOpen = !!openTrips[trip.id];
            const viewSketch = sketchViewMode[trip.id] === 'sketch';

            return (
              <div
                key={trip.id}
                id={`trip-${trip.id}`}
                className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen ? 'border-[#70826b] ring-2 ring-[#70826b]/20 shadow-md' : 'border-[#323d30] hover:border-[#70826b]'
                }`}
              >
                {/* 4.1 CLOSED / HEADER STATE */}
                <div
                  onClick={() => toggleTrip(trip.id)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none bg-gradient-to-r from-white to-[#faf8f5]"
                >
                  {/* Left: Thumbnail & Title */}
                  <div className="flex items-center gap-4 sm:gap-6 flex-1">
                    {/* Thumbnail with Sketch Toggle */}
                    <div className="relative w-20 h-20 sm:w-28 sm:h-24 rounded-lg overflow-hidden shrink-0 border border-[#d2cbba] bg-[#f4f1e9]">
                      <img
                        src={viewSketch ? trip.watercolorSketchUrl : trip.imageUrl}
                        alt={trip.name}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={(e) => toggleImageMode(trip.id, e)}
                        className="absolute bottom-1 right-1 px-1.5 py-0.5 text-[9px] font-bold rounded bg-white/90 text-[#2c322b] border border-[#323d30] flex items-center gap-0.5 shadow-2xs hover:bg-[#e2ded4]"
                        title="Toggle Sketch/Photo"
                      >
                        <Sparkles className="w-2.5 h-2.5 text-[#70826b]" />
                        <span>{viewSketch ? 'Photo' : 'Sketch'}</span>
                      </button>
                    </div>

                    {/* Trip Info Summary */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-[#70826b] text-white">
                          Trip {trip.number}
                        </span>
                        <span className="text-xs font-semibold text-[#6e786b] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#70826b]" />
                          {trip.base}
                        </span>
                      </div>

                      <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#1e251c] truncate">
                        {trip.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#4d5749] line-clamp-1 font-sans-body mt-0.5">
                        {trip.oneLineHighlight}
                      </p>
                    </div>
                  </div>

                  {/* Right: Price, Next Departure & Toggle Button */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-[#f0ebe0]">
                    <div className="text-left md:text-right">
                      <span className="text-[11px] uppercase tracking-wider text-[#6e786b] font-bold block">
                        From
                      </span>
                      <span className="font-serif-title font-bold text-lg sm:text-xl text-[#1e251c]">
                        £{trip.fromPriceGBP}
                      </span>
                      <span className="text-[11px] text-[#70826b] block font-semibold">
                        Next: {trip.departures[0]?.startDate}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-[#323d30] flex items-center justify-center text-[#1e251c] bg-[#faf8f5] group-hover:bg-[#70826b] group-hover:text-white transition-colors shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* 4.2 EXPANDED STATE */}
                {isOpen && (
                  <div className="p-6 sm:p-8 border-t border-[#ebd8c6] bg-white space-y-8 animate-fadeIn">
                    
                    {/* Meta Badges */}
                    <div className="flex flex-wrap gap-2.5 text-xs font-medium">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2ede4] text-[#3d483a] border border-[#d8d0c2]">
                        <MapPin className="w-3.5 h-3.5 text-[#70826b]" />
                        <span><strong>Base / Start:</strong> {trip.base}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2ede4] text-[#3d483a] border border-[#d8d0c2]">
                        <Palette className="w-3.5 h-3.5 text-[#70826b]" />
                        <span><strong>Medium:</strong> {trip.medium}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2ede4] text-[#3d483a] border border-[#d8d0c2]">
                        <Clock className="w-3.5 h-3.5 text-[#70826b]" />
                        <span><strong>Duration:</strong> {trip.durationRange}</span>
                      </div>
                      {trip.classification && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8efe6] text-[#2c3d28] border border-[#b8c9b3] font-bold">
                          <Compass className="w-3.5 h-3.5 text-[#70826b]" />
                          <span><strong>Type:</strong> {trip.classification}</span>
                        </div>
                      )}
                      {trip.discountNote && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f9f5ea] text-[#6b5830] border border-[#e0d3b6]">
                          <Sparkles className="w-3.5 h-3.5 text-[#917637]" />
                          <span>{trip.discountNote}</span>
                        </div>
                      )}
                    </div>

                    {/* Trip Description */}
                    <div className="space-y-4 text-sm sm:text-base text-[#3d473b] leading-relaxed">
                      {trip.descriptionParagraphs.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="bg-[#faf8f5] p-5 rounded-lg border border-[#e5dfd2]">
                      <h4 className="font-serif-title font-bold text-lg text-[#1e251c] mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#70826b]" />
                        Trip Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#384336]">
                        {trip.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#70826b] mt-2 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Itinerary Table */}
                    <div>
                      <h4 className="font-serif-title font-bold text-lg text-[#1e251c] mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#70826b]" />
                        Detailed Itinerary
                      </h4>
                      <p className="text-xs text-[#6e786b] italic mb-3">
                        * Itineraries are subject to weather-dependent shuffle. Wet weather contingencies are in place.
                      </p>

                      <div className="overflow-x-auto rounded-lg border border-[#323d30]">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-[#ece7dc] border-b border-[#323d30] text-[#1e251c] font-bold">
                            <tr>
                              <th className="py-3 px-4 w-28 sm:w-36">Day</th>
                              <th className="py-3 px-4">Activity &amp; Sketching Plan</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#ebd8c6]/60 bg-white">
                            {trip.itinerary.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-[#faf8f5]">
                                <td className="py-3 px-4 font-bold text-[#70826b] align-top whitespace-nowrap">
                                  {row.day}
                                </td>
                                <td className="py-3 px-4 text-[#333d31] leading-relaxed">
                                  {row.activity}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* What's Included & What's Not Included */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* What's Included */}
                      <div className="bg-[#f2f6f1] p-5 rounded-lg border border-[#c5cebf]">
                        <h4 className="font-serif-title font-bold text-base text-[#283825] mb-3 flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#70826b]" />
                          What's Included
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#384a34]">
                          {trip.included.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-[#70826b] shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What's Not Included */}
                      <div className="bg-[#fbf7f4] p-5 rounded-lg border border-[#e6d8ce]">
                        <h4 className="font-serif-title font-bold text-base text-[#5c3e32] mb-3 flex items-center gap-2">
                          <X className="w-4 h-4 text-[#9c5f49]" />
                          What's Not Included
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#4d3a32]">
                          {trip.notIncluded.map((notInc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#9c5f49] shrink-0 font-bold">•</span>
                              <span>{notInc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Important Note */}
                    {trip.importantNote && (
                      <div className="p-4 bg-[#fff9ed] rounded-lg border border-[#e6cb99] flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-[#a8741e] shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm text-[#594218] leading-relaxed">
                          <strong>Important Note on Transport:</strong> {trip.importantNote}
                        </div>
                      </div>
                    )}

                    {/* Who This Suits */}
                    <div className="bg-[#faf8f5] p-5 rounded-lg border border-[#e2ded4] space-y-3">
                      <h4 className="font-serif-title font-bold text-base text-[#1e251c] flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#70826b]" />
                        Who this suits
                      </h4>
                      <p className="text-xs sm:text-sm text-[#384336] leading-relaxed">
                        {trip.whoThisSuits}
                      </p>
                      {trip.whoThisIsLessSuitableFor && (
                        <p className="text-xs text-[#6e5d50] pt-2 border-t border-[#ebd8c6]/60 leading-relaxed">
                          <strong>Please Note:</strong> {trip.whoThisIsLessSuitableFor}
                        </p>
                      )}
                      {trip.alsoAvailable && (
                        <p className="text-xs font-semibold text-[#70826b] pt-1">
                          {trip.alsoAvailable}
                        </p>
                      )}
                    </div>

                    {/* NEXT DEPARTURES BLOCK WITH DIRECT BOOK NOW BUTTON */}
                    <div className="pt-4 border-t-2 border-[#e8e4da]">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-serif-title font-bold text-lg text-[#1e251c] flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#70826b]" />
                          Upcoming Departures for {trip.name}
                        </h4>
                        <span className="text-xs font-semibold text-[#70826b]">
                          Host: Mary King
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {trip.departures.map((dep) => (
                          <div
                            key={dep.id}
                            className="bg-[#f7f5f0] p-4 rounded-lg border border-[#323d30] flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between text-xs text-[#6e786b] mb-1">
                                <span className="font-bold text-[#1e251c]">{dep.durationLabel}</span>
                                <span className="text-[#a8741e] font-semibold">{dep.spotsLeft} spots left</span>
                              </div>
                              <p className="font-serif-title font-bold text-base text-[#1e251c]">
                                {dep.startDate} – {dep.endDate}
                              </p>
                              <p className="text-sm font-bold text-[#70826b] mt-1">
                                £{dep.priceGBP} <span className="text-[11px] font-normal text-[#596356]">per person</span>
                              </p>
                            </div>

                            <button
                              onClick={() => onOpenBookModal('scotland', dep.id)}
                              className="mt-4 w-full py-2 bg-[#70826b] hover:bg-[#5a6a56] text-white font-bold text-xs uppercase tracking-wider rounded shadow-xs transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <span>Book Now</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white rounded-xl border-2 border-[#323d30] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="tape-strip absolute -top-3 left-16 w-32 h-6 rotate-[-1deg] z-10 pointer-events-none" />

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-2">
              <Sun className="w-3.5 h-3.5 text-[#70826b]" />
              <span>Daily Rhythm &amp; Flow</span>
            </div>
            <h2 className="font-serif-title text-3xl font-bold text-[#1e251c]">
              Your Sketching Day
            </h2>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-[#384336] leading-relaxed font-sans-body">
            
            <p>
              On the Scottish itineraries we'll try to set off quite early most days as there is much to see. We'll often take a packed lunch to maximise our time in the location and sometimes we'll be far from a settlement.
            </p>

            <p>
              Each day there will be at least two exceptional viewpoints and we'll be sketching quite quickly, aiming to capture and experience as much of the region as possible. In addition, there will be a short but spectacular walk, sometimes with the option of a longer one in place of some sketching, especially if we have a wet or windy day. 'The Bonnie Broom' and 'Around the Blooming Heather' involve shorter walks.
            </p>

            <p>
              We don't need to drive too far in this area to see spectacular sights. Yet we do need transport. If it's cold or damp we might do some sketching from the car and the itinerary is built around this possibility.
            </p>

            <p>
              As on all Vistas itineraries there are specially-designed 'challenges' to stimulate each day's creativity. Occasionally, these might be replaced by individually-tailored exercises, especially in inclement conditions. I'll be on hand at all times, to give guidance and support where needed.
            </p>

            <p>
              We'll aim to arrive back at your accommodation by late afternoon, with a couple of longer days. Timings and stops will ultimately be determined by the interests and needs of the group, as well as the weather. Leaving your evenings free to do as you please and perhaps spend time with a non-painting partner, we'll try to have a group appraisal every couple of afternoons where we can see how we're getting on.
            </p>

            <p>
              Each itinerary bears in mind the possibility of bad weather and alternatives will be offered. Never forgetting that this is YOUR holiday, no day's attendance is compulsory. The trips have been designed to maximise your enjoyment of the area within the short timespan but if you feel like a day 'off', or if the group as a whole would like a change to the itinerary, it is flexible enough to allow for this.
            </p>

            <div className="p-4 bg-[#f2ede4] rounded-lg border-l-4 border-[#70826b] text-sm text-[#2a3528]">
              <strong>On 'Where the Corncrake sings' Colonsay retreat:</strong> The day is yours to design as you choose. The only set time will be dinner, when we'll cook and eat together, perhaps looking through each other's work beforehand. If you're an early bird or a late riser, you have complete freedom on this holiday.
            </div>

            <p className="text-xs sm:text-sm font-semibold text-[#70826b]">
              * 'Windswept Wilderness' is also available as INDIVIDUAL DAYS for people with less time to spare. Please ask for details and costs.
            </p>

          </div>
        </div>
      </section>

      {/* 6. FAQS ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#70826b]" />
            <span>Essential Travel Guidance</span>
          </div>
          <h2 className="font-serif-title text-3xl font-bold text-[#1e251c]">
            FAQs
          </h2>
        </div>

        <div className="space-y-4">
          
          {/* FAQ 1: Are These Holidays For Me? */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('are-these-for-me')}
              className="w-full p-5 text-left font-serif-title font-bold text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>Are These Holidays For Me?</span>
              {openFaq['are-these-for-me'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['are-these-for-me'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed space-y-3">
                <p>
                  The Scottish Highlands, and the West Coast in particular, is for anyone who loves wild, dramatic, spectacular scenery and the feeling of being miles from anywhere in a remote and isolated community. It is not for those who need to be near fancy shops, cinemas and clubs, although we do have the odd bar and restaurant! You also need a somewhat flexible approach to the weather and an understanding of the saying: <em>'There's no such thing as bad weather, just bad clothing'</em>.
                </p>
                <p>
                  If you don't mind the odd wet day and can see beauty in a howling gale; if you are comfortable with miles of twisting single-track roads where there are likely to be more sheep than cars, and if you are eager to leave the stresses and pretentions of a city lifestyle behind, then it is certainly the place for you. It might even be life-changing.
                </p>
              </div>
            )}
          </div>

          {/* FAQ 2: Which trip suits me? */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('which-trip')}
              className="w-full p-5 text-left font-serif-title font-bold text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>Which trip suits me?</span>
              {openFaq['which-trip'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['which-trip'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed space-y-2">
                <p>
                  Please refer to the <strong>"Who this suits"</strong> section under each of the four trips in the accordion above:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                  <li><strong>The Bonnie Broom:</strong> Ideal for anyone who wants a gentler trip, less strenuous walking, or Gaelic culture/islands.</li>
                  <li><strong>Windswept Wilderness:</strong> Geared towards energetic sketchers who relish wild walks and capturing rapid impressions.</li>
                  <li><strong>Around the Blooming Heather:</strong> Perfect for non-drivers who prefer city amenities in Inverness with daily excursions.</li>
                  <li><strong>Where the Corncrakes Sing:</strong> Ideal for independent artists wanting complete island peace on Colonsay.</li>
                </ul>
              </div>
            )}
          </div>

          {/* FAQ 3: Non-painting partner */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('non-painter')}
              className="w-full p-5 text-left font-serif-title font-bold text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>Can my non-painting partner come?</span>
              {openFaq['non-painter'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['non-painter'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  Yes! Non-painting partners are warmly welcome. Room-sharing discounts apply on our residential trips. While you paint, non-painting partners can enjoy world-class hill walking, climbing, fishing, wildlife photography, or simply unwinding with a book.
                </p>
              </div>
            )}
          </div>

          {/* FAQ 4: Weather */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('weather')}
              className="w-full p-5 text-left font-serif-title font-bold text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>What if the weather turns?</span>
              {openFaq['weather'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['weather'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  All itineraries are designed with Highland weather flexibility in mind. Wet-weather contingencies are prepared, we make use of sheltered historic sites and indoor spaces, and we frequently sketch directly from the warmth of the car when showers pass.
                </p>
              </div>
            )}
          </div>

          {/* FAQ 5: Individual Days */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('individual-days')}
              className="w-full p-5 text-left font-serif-title font-bold text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>Can I book individual days?</span>
              {openFaq['individual-days'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['individual-days'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  Yes, on <em>'Windswept Wilderness'</em> (Lochinver), individual day participation is available for those with less time to spare or who already have accommodation in the area. Please get in touch for daily rates and availability.
                </p>
              </div>
            )}
          </div>

          {/* FAQ 6: How do I book? */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('how-to-book')}
              className="w-full p-5 text-left font-serif-title font-bold text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>How do I book?</span>
              {openFaq['how-to-book'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['how-to-book'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed space-y-2">
                <p>
                  You can click the <strong>"Book Now"</strong> button under any of the upcoming trip departures in the accordion above, or see the <strong>"How to Book"</strong> section below to contact us or submit an enquiry form.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 7. YOUR HOST: MARY KING (Using 'Host' Terminology) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white rounded-xl border-2 border-[#323d30] p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="tape-strip absolute -top-3 right-12 w-28 h-6 rotate-[2deg] z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Host Photo in Polaroid Frame */}
            <div className="md:col-span-4 flex justify-center">
              <div className="polaroid-card p-3 rounded-md border-2 border-[#323d30] bg-[#faf8f5] shadow-md w-full max-w-xs rotate-[-1deg]">
                <div className="aspect-4/5 rounded overflow-hidden bg-[#e8e4da] border border-[#d2cbba]">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600"
                    alt="Mary King - Your Host"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-serif-title font-bold text-center text-base text-[#1e251c] mt-2">
                  Mary King
                </p>
                <p className="text-[11px] text-center text-[#70826b] font-semibold">
                  Founder &amp; Host
                </p>
              </div>
            </div>

            {/* Host Excerpt & Link to /your-host */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eef2ec] text-[#3d4a3a] text-xs font-semibold">
                <Palette className="w-3.5 h-3.5 text-[#70826b]" />
                <span>Your Host</span>
              </div>

              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c]">
                Your Host: Mary King
              </h2>

              <p className="text-sm sm:text-base text-[#384336] leading-relaxed">
                Mary King has painted and guided in the Northwest Highlands for decades, having founded her <em>Picture Shack</em> studio gallery in remote Ross-shire. Her friendly, encouraging approach demystifies fast-changing Scottish light and helps every painter find their authentic voice amidst the wild mountains and sea lochs.
              </p>

              <div className="pt-2">
                <Link
                  to="/your-host"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#70826b] hover:text-[#4a5846] underline decoration-[#70826b]/40 underline-offset-4 hover:decoration-[#70826b] transition-all"
                >
                  <span>Read Mary’s Full Story &amp; Teaching Philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-2">
            <Quote className="w-3.5 h-3.5 text-[#70826b]" />
            <span>Guest Experiences</span>
          </div>
          <h2 className="font-serif-title text-3xl font-bold text-[#1e251c]">
            What guests say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Testimonial 1: Clare */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#323d30] shadow-sm relative flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-[#70826b]/30 mb-2" />
              <p className="font-serif-title text-base sm:text-lg text-[#1e251c] italic leading-relaxed">
                "I definitely had a fantastic time. Such an amazing trip. Learned loads and met some great people."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f0ebe0] flex items-center justify-between text-xs">
              <span className="font-bold text-[#1e251c]">— Clare</span>
              <span className="text-[#6e786b]">Scotland</span>
            </div>
          </div>

          {/* Testimonial 2: Caroline */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#323d30] shadow-sm relative flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-[#70826b]/30 mb-2" />
              <p className="font-serif-title text-base sm:text-lg text-[#1e251c] italic leading-relaxed">
                "An incredible journey through gorgeous landscapes... I had my first try at painting outside... I learned so much."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f0ebe0] flex items-center justify-between text-xs">
              <span className="font-bold text-[#1e251c]">— Caroline</span>
              <span className="text-[#6e786b]">Scotland</span>
            </div>
          </div>

        </div>
      </section>

      {/* 9. HOW TO BOOK */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#f5f1e8] to-[#e8efe6] rounded-xl border-2 border-[#323d30] p-8 sm:p-12 text-center relative overflow-hidden shadow-md">
          <div className="tape-strip absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-6 rotate-[-0.5deg] z-10 pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1e251c]">
              How to Book
            </h2>

            <p className="text-base sm:text-lg text-[#3d473b] font-sans-body leading-relaxed">
              Ready to book, or want to know more? See our full booking guide for deposit, payment and everything else you need, or get in touch to ask about this trip.
            </p>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={() => onOpenBookModal('scotland')}
                className="px-6 py-3.5 bg-[#70826b] hover:bg-[#5a6a56] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                Book a Scottish Holiday
              </button>

              <Link
                to="/contact"
                className="px-6 py-3.5 bg-white hover:bg-[#faf8f5] text-[#1e251c] border-2 border-[#323d30] font-bold text-xs uppercase tracking-wider rounded-md shadow-sm hover:shadow transition-all active:scale-95 inline-flex items-center gap-2"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="pt-6 flex items-center justify-center gap-6 text-xs text-[#626e5f]">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#70826b]" />
                Financial protection guaranteed
              </span>
              <span className="inline-flex items-center gap-1">
                <Mail className="w-4 h-4 text-[#70826b]" />
                Friendly personal replies
              </span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
