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
  Camera,
  Image as ImageIcon,
  HeartHandshake
} from 'lucide-react';
import { MOROCCO_TRIPS, MoroccoTrip } from '../data/moroccoData';

interface MoroccoPageProps {
  onOpenBookModal: (destinationId?: string, dateId?: string) => void;
}

export const MoroccoPage: React.FC<MoroccoPageProps> = ({ onOpenBookModal }) => {
  // State for which trips in the accordion are open (first one open by default)
  const [openTrips, setOpenTrips] = useState<Record<string, boolean>>({
    'discover-morocco': true,
    'painted-desert': false,
    'argans-and-almonds': false,
  });

  // State for image/sketch mode toggle per trip
  const [sketchViewMode, setSketchViewMode] = useState<Record<string, 'photo' | 'sketch'>>({});

  // State for open FAQs
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({
    'are-these-for-me': true,
    'q-partner': false,
    'q-fitness': false,
    'q-heat': false,
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
    <div id="morocco-destination-page" className="min-h-screen bg-[#faf8f5] text-[#2c322b]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#262b25] text-white pt-14 pb-20 px-4 md:px-8 overflow-hidden">
        {/* Background ambient pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c59b6d_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3c453a] text-[#d4c3aa] text-xs font-semibold uppercase tracking-wider mb-6">
            <Compass className="w-3.5 h-3.5 text-[#e2b77a]" />
            <span>North Africa Destination Guide</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-title font-bold tracking-tight text-white mb-6 leading-tight">
            Sketching &amp; Painting Holidays in Morocco
          </h1>

          <div className="relative pl-5 border-l-3 border-[#c59b6d] max-w-3xl my-6">
            <p className="text-lg md:text-xl text-[#ebdcc9] font-serif-title italic leading-relaxed">
              &ldquo;Sweet mint tea and sticky dates, the scent of exotic spices; deep indigo robes, crumbling red walls and the haunting sound of the muezzin; mystical Morocco assaults the senses&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#morocco-trips"
              className="px-6 py-3 bg-[#c59b6d] hover:bg-[#b0885a] text-[#1c221a] font-bold text-sm rounded-lg transition-colors shadow-sm flex items-center gap-2"
            >
              <span>Explore The 3 Trips</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenBookModal('morocco')}
              className="px-6 py-3 bg-[#3d463b] hover:bg-[#4b5749] text-white font-bold text-sm rounded-lg transition-colors border border-[#525f4f] flex items-center gap-2 cursor-pointer"
            >
              <span>Check 2026/2027 Dates</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. QUICK FACTS STRIP */}
      <section className="bg-[#ede8df] border-y border-[#dfd7c9] py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#717b6e] tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#a87f4f]" />
              <span>Trips</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#1e251c]">
              3 Holidays
            </div>
            <div className="text-xs text-[#606b5d]">
              Discover Morocco, Painted Desert, Argans &amp; Almonds
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#717b6e] tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#a87f4f]" />
              <span>Length</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#1e251c]">
              8 to 13 Nights
            </div>
            <div className="text-xs text-[#606b5d]">
              Flexible durations &amp; extensions
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#717b6e] tracking-wider flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-[#a87f4f]" />
              <span>From</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#1e251c]">
              £1,350 / person
            </div>
            <div className="text-xs text-[#606b5d]">
              Sharing discounts available
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#717b6e] tracking-wider flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#a87f4f]" />
              <span>Led By</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#1e251c]">
              Mary King
            </div>
            <div className="text-xs text-[#606b5d]">
              In person, every single day
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section className="py-14 px-4 md:px-8 max-w-5xl mx-auto space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eae3d5] text-[#5c4a32] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Atmosphere &amp; Landscape</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#1f261d] tracking-tight">
            Introduction to Sketching Holidays in Morocco
          </h2>
        </div>

        <div className="prose prose-stone max-w-none text-base md:text-lg text-[#3f473c] leading-relaxed space-y-5">
          <p>
            Join an entrancing journey through astonishing landscapes and experience the sights, sounds and smells of this unique land. Travel by comfortable 4&times;4 to places as yet little-known to tourists; experience the heat of the desert, the warmth of the welcome!
          </p>

          <p>
            Stimulate your senses and develop your artistic skills in an atmospheric, authentic location. Morocco has been inspiring artists and writers for centuries, and it continues to do so. A timeless land of wide horizons where Africa meets Europe, it is now the destination of choice for those tired of Tuscany, bored of Provence.
          </p>

          {/* Churchill Quote Callout */}
          <div className="p-6 rounded-xl bg-[#f4ede2] border border-[#dfd2be] my-6">
            <p className="font-serif-title italic text-base md:text-lg text-[#2d2419] mb-2 leading-relaxed">
              Sir Winston Churchill was captivated by Marrakesh and visited many times to paint the light, and relax from the stresses he encountered in Britain. He stated: 
              <span className="font-bold"> &ldquo;Morocco to me was a revelation&hellip; reading the newspapers gives not the slightest impression of the charm and value of this splendid territory.&rdquo;</span>
            </p>
          </div>

          <p>
            Once perceived as difficult to access, budget airlines are now serving Marrakesh, Fez and other cities and although it can seem like a different world, it's only a 3 hour flight from the UK. Now within reach of everyone, there's something for artists of every level and interest, as well as those looking for a different type of holiday. There has never been a better time to visit Morocco!
          </p>

          <p>
            In this land of contrasts you will discover towering, snow-capped mountains (including the highest in North Africa); sandy desert pistes; deep river gorges bursting with almond blossom in the spring; lush palm groves hanging heavy with dates in the autumn, and quiet oases resonant with the sound of frogs. In the countryside you will see old men riding donkeys laden with firewood, shy nomad women dressed in traditional clothing and big-eyed children herding floppy-eared goats. The picturesque old Kasbahs, dark, mysterious souks and the bustling street scenes of the world-heritage cities are some of the images that will stay with you long after your holiday has ended. This combination of brilliant, hot colours, bright clear light and the complete sensual overload is sure to revive the most jaded palette and you can't fail to return with a sketchpad full of colour, shoes full of sand, and a head full of wonderful memories!
          </p>
        </div>
      </section>

      {/* 4. THE THREE MOROCCO TRIPS (DETAILED COLLAPSIBLES) */}
      <section id="morocco-trips" className="py-12 px-4 md:px-8 bg-[#f2efe9] border-t border-[#e2dcd0]">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#1f261d]">
              The Three Morocco Trips
            </h2>
            <p className="text-sm md:text-base text-[#626e5e]">
              Click any trip to explore the full day-by-day itinerary, inclusions, mediums, and confirmed departure dates.
            </p>
          </div>

          <div className="space-y-6">
            {MOROCCO_TRIPS.map((trip) => {
              const isOpen = openTrips[trip.id];
              const viewMode = sketchViewMode[trip.id] || 'photo';

              return (
                <div 
                  key={trip.id} 
                  className="bg-white rounded-xl border border-[#ded7ca] shadow-sm overflow-hidden transition-all"
                >
                  {/* Card Header & Toggle Button */}
                  <div 
                    onClick={() => toggleTrip(trip.id)}
                    className="p-6 md:p-8 cursor-pointer hover:bg-[#faf7f2] transition-colors flex items-start justify-between gap-4 select-none"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-1 rounded bg-[#2c322b] text-white text-xs font-bold uppercase tracking-wider">
                          Trip {trip.number}
                        </span>
                        <span className="text-xs font-bold text-[#a87f4f] bg-[#f7f0e6] px-2.5 py-1 rounded border border-[#eddcc8]">
                          {trip.durationRange}
                        </span>
                        <span className="text-xs font-semibold text-[#5a6656]">
                          {trip.route}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-serif-title font-bold text-[#1e251c]">
                        {trip.name}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-[#525d4f] pt-1">
                        <div>
                          <strong className="text-[#20271e]">Medium:</strong> {trip.medium}
                        </div>
                        <div>
                          <strong className="text-[#20271e]">Price:</strong> {trip.priceNote}
                        </div>
                      </div>
                    </div>

                    <button 
                      aria-label="Toggle trip details"
                      className="p-2 rounded-full bg-[#f2efe9] text-[#2c322b] hover:bg-[#e4ded2] transition-colors shrink-0 mt-2"
                    >
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Collapsible Content */}
                  {isOpen && (
                    <div className="px-6 pb-8 md:px-8 pt-2 border-t border-[#eee7dc] space-y-8 animate-fade-in">
                      
                      {/* Image vs Artist Sketch Interactive Toggle */}
                      <div className="relative rounded-xl overflow-hidden bg-[#242922] aspect-16/9 md:aspect-21/9 max-h-[380px] shadow-inner group">
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
                            {viewMode === 'photo' ? '📷 Landscape Location' : '🎨 Mary King Watercolor Sketch Study'}
                          </div>

                          <div className="inline-flex rounded-lg bg-black/60 p-1 backdrop-blur-xs border border-white/20">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSketchViewMode(prev => ({ ...prev, [trip.id]: 'photo' }));
                              }}
                              className={`px-3 py-1 rounded text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                                viewMode === 'photo' ? 'bg-[#c59b6d] text-[#1a2218]' : 'text-white/80 hover:text-white'
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
                                viewMode === 'sketch' ? 'bg-[#c59b6d] text-[#1a2218]' : 'text-white/80 hover:text-white'
                              }`}
                            >
                              <ImageIcon className="w-3.5 h-3.5" />
                              <span>Artist Sketch</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Description Paragraphs */}
                      <div className="space-y-3 text-[#3f473c] text-base leading-relaxed">
                        {trip.descriptionParagraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="bg-[#faf7f2] p-5 rounded-xl border border-[#ded7ca]">
                        <h4 className="font-serif-title font-bold text-lg text-[#1e251c] mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#a87f4f]" />
                          <span>Trip Highlights</span>
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#465042]">
                          {trip.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#a87f4f] font-bold text-base leading-none">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Day-by-Day Itinerary Table */}
                      <div className="space-y-3">
                        <h4 className="font-serif-title font-bold text-xl text-[#1e251c] flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-[#a87f4f]" />
                          <span>Day-by-Day Itinerary</span>
                        </h4>
                        
                        <div className="border border-[#ded7ca] rounded-xl overflow-hidden shadow-xs">
                          <table className="w-full text-left border-collapse text-sm">
                            <thead>
                              <tr className="bg-[#f0ece4] border-b border-[#ded7ca] text-[#2c322b]">
                                <th className="py-3 px-4 font-bold w-24 md:w-32">Day</th>
                                <th className="py-3 px-4 font-bold">Planned Sketching &amp; Travel Activity</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#eee7dc] bg-white">
                              {trip.itinerary.map((item, idx) => (
                                <tr key={idx} className="hover:bg-[#faf8f5] transition-colors">
                                  <td className="py-3 px-4 font-bold text-[#354032] align-top whitespace-nowrap bg-[#fcfbf9]">
                                    {item.day}
                                  </td>
                                  <td className="py-3 px-4 text-[#4a5446] leading-relaxed">
                                    {item.activity}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Extension Note if available */}
                      {trip.extension && (
                        <div className="p-4 rounded-xl bg-[#edf4ea] border border-[#c4dcbc] text-sm text-[#273d22]">
                          <strong className="text-[#1a2d16]">Extension Option:</strong> {trip.extension}
                        </div>
                      )}

                      {/* Note for Non-painters if available */}
                      {trip.note && (
                        <div className="p-4 rounded-xl bg-[#f7f3eb] border border-[#e2d8c3] text-sm text-[#483d29]">
                          <strong className="text-[#2e2617]">Note:</strong> {trip.note}
                        </div>
                      )}

                      {/* Inclusions & Exclusions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div className="p-5 rounded-xl bg-[#f4f7f2] border border-[#d6dfd2] space-y-3">
                          <h5 className="font-bold text-sm text-[#2d4029] uppercase tracking-wider flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#5c8053]" />
                            <span>What's Included</span>
                          </h5>
                          <ul className="space-y-2 text-xs md:text-sm text-[#42503d]">
                            {trip.included.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-[#5c8053] shrink-0 mt-0.5" />
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
                      <div className="p-6 rounded-xl bg-[#262b25] text-white space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#3e473b] pb-4">
                          <div>
                            <div className="text-xs uppercase tracking-wider text-[#d4c3aa] font-bold">
                              Confirmed Departures
                            </div>
                            <div className="font-serif-title font-bold text-lg text-white">
                              Upcoming Dates for {trip.name}
                            </div>
                          </div>
                          <div className="text-xs text-[#a3b39f]">
                            Max 8 artists per group with Mary King
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {trip.departures.map((dep) => (
                            <div 
                              key={dep.id} 
                              className="p-3.5 rounded-lg bg-[#343b32] border border-[#485345] flex items-center justify-between gap-3"
                            >
                              <div>
                                <div className="font-bold text-sm text-white">
                                  {dep.startDate} - {dep.endDate}
                                </div>
                                <div className="text-xs text-[#c3d1be]">
                                  {dep.durationLabel} · £{dep.priceGBP.toLocaleString()}
                                </div>
                              </div>
                              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#495944] text-[#d6eed0]">
                                {dep.spotsLeft} spots
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <Link
                            to="/calendar"
                            className="text-xs font-bold text-[#d4c3aa] hover:text-white underline underline-offset-4"
                          >
                            View on full 2026/2027 Calendar →
                          </Link>

                          <button
                            onClick={() => onOpenBookModal('morocco', trip.departures[0]?.id)}
                            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#c59b6d] hover:bg-[#b0885a] text-[#1c221a] font-bold text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eae3d5] text-[#5c4a32] text-xs font-semibold uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5 text-[#a87f4f]" />
            <span>Daily Flow &amp; Routine</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#1f261d] tracking-tight">
            Your Sketching Day
          </h2>
        </div>

        <div className="prose prose-stone max-w-none text-base md:text-lg text-[#3f473c] leading-relaxed space-y-4">
          <p>
            The landscape in Morocco is probably unlike anything you have ever painted before. It might even be unlike anything you have ever seen before! Especially in late summer, when it is burnt a deep red-brown from the scorching sun, it can appear shockingly stark, vast and harsh. It can take a day or two to &lsquo;get your eye in&rsquo; and feel ready to interpret it. The itineraries take this into account and after a few days the light, the grandeur and the romance will have worked their special magic on you and you will be sketching away furiously!
          </p>

          <p>
            On the Sketchbook Journeys we cover quite a bit of ground, both literally and in terms of things to see and draw, so we try not to waste a single moment! That does not mean, however, that sketching every day is compulsory. Those wishing to simply relax and soak up the atmosphere, or do a little wandering around with a camera, are always welcome to do so.
          </p>

          <p>
            When we are not changing location, you will also have the opportunity to stay around the hotel, sketching or otherwise, perhaps working up earlier sketches into more finished pieces, if you wish. On days when we are moving from one place to another, we try to arrive at our new destination by mid afternoon, leaving time free for sketching and exploring. The holidays are structured to give at least two fantastic views each day, with the first and last day involving more driving.
          </p>

          <p>
            We usually take breakfast together at around 8.30am then set off for the day, armed with our sketchbooks. You will be driven to, or shown, ideal sketching spots and given advice on alternatives. Beginners and those lacking in confidence can be given as much guidance as they need; experienced artists may go off and do their own thing.
          </p>

          <p>
            Most days, everyone will be given a special &lsquo;task&rsquo; to experiment with, which is designed to stimulate and challenge you as an artist. It might be trying a new technique, or looking at the landscape in a new way. You may spend as much or as little time on this as you like, but it may give you inspiration if you are a little overwhelmed by a truly different type of subject, and it can be your starting point for the day.
          </p>

          <p>
            On travelling days the schedule will vary but with your sketchbook always close to hand and your eyes filled with amazing sights you will never feel deprived. For those who just can't put down their pencil, there will often be opportunities to sketch the beautiful objects and textiles found in and around the hotels.
          </p>

          <p>
            Some days will end with an informal &lsquo;appraisal&rsquo; where we will gather to look over our artwork. This should be an exciting and pleasurable activity where we can gain inspiration from each other, relive the beautiful sights we've seen and ask or give advice about any difficulties we may have experienced. Like everything else on the holiday, it is not compulsory but most people will want to join in.
          </p>

          <p>
            We'll eat together at our hotel and then your evenings are yours to do as you choose, but please don't expect much in terms of organised entertainment. Our locations are chosen for their peace, tranquillity and beauty rather than their vibrant social life. In the desert, however, the inhabitants have music in their blood, and many a night they will begin an impromptu drumming session. The rhythm is infectious. Dancing is optional!
          </p>

          <p>
            On Argans &amp; Almonds, the artists' retreat, we base ourselves in one location and once we're there, we're there. Apart from optional outings, you are free to pursue your own creative direction with or without guidance. We will take meals together as a group; beyond that, you may be as free as you like to choose what, where and how you paint.
          </p>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="py-14 px-4 md:px-8 bg-[#f2efe9] border-t border-[#e2dcd0]">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eae3d5] text-[#5c4a32] text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#a87f4f]" />
              <span>Questions &amp; Essential Preparation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#1f261d] tracking-tight">
              FAQs
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* Deep-Dive: Are These Holidays For Me? */}
            <div className="bg-white rounded-xl border border-[#ded7ca] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('are-these-for-me')}
                className="p-6 cursor-pointer hover:bg-[#faf8f5] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-xl font-serif-title font-bold text-[#1e251c] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#a87f4f]" />
                  <span>Are These Holidays For Me?</span>
                </h3>
                <span className="p-1 rounded-full bg-[#f2efe9] text-[#2c322b]">
                  {openFaq['are-these-for-me'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </div>

              {openFaq['are-these-for-me'] && (
                <div className="px-6 pb-6 pt-2 border-t border-[#eee7dc] text-sm md:text-base text-[#3f473c] space-y-4 leading-relaxed">
                  <p>
                    These trips will appeal most to active people of any age who have an open mind, are willing to sacrifice a little luxury for extra authenticity, and who are interested in different cultures as well as unusual landscapes.
                  </p>

                  <div className="space-y-2">
                    <strong className="text-[#1e251c] block text-base">Accommodation:</strong>
                    <p>
                      The hotels we use are chosen primarily for their location, and for their reliability in terms of cleanliness and friendliness. Most people love staying in them but they are not 5-star. You can expect hot water (most of the time), decent, (often excellent) traditional Moroccan food, clean sheets and a warm welcome. Almost always, you will have your own bathroom, but just occasionally it might need to be shared (for instance on the overnight camel trip).
                    </p>
                    <p>
                      Some of the places, especially in the desert, are quite simple and &lsquo;rustic&rsquo;, which in our opinion is part of their charm. Sometimes there may be a problem with the water, or the electricity. Very occasionally, it can not be sorted out. Often the food might take a little longer to arrive than expected and the Wi-Fi, where it exists, will almost certainly be slower than you'd like. Sit back, close your eyes and wiggle your toes in the sand. This is Africa!
                    </p>
                  </div>

                  <div className="space-y-2">
                    <strong className="text-[#1e251c] block text-base">Fitness:</strong>
                    <p>
                      On most days there will be a little walking involved to get to the ideal location. Please do not book a trip to Morocco if you have trouble walking. While there will usually be an alternative for those who don't feel like moving much on any given day, healthy and reasonably fit people will get more out of these trips. There are steep, uneven stairs in some of our most-loved hotels, which could cause issues for anyone unsteady on their feet. If you are concerned about your fitness or mobility for these trips, please contact me.
                    </p>
                    <p>
                      In many cases, a rock or patch of rough sand will be your seat for the day. Please feel free to bring a cushion or stool with you if you don't like sitting on the ground, as these are not provided.
                    </p>
                    <p>
                      I endeavour to find locations with shade. This is usually, but not always, possible. In March/April and October the heat is bearable (or indeed, enjoyable) for most people, but if you really dislike the sun, then perhaps Morocco is not the ideal destination for you.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <strong className="text-[#1e251c] block text-base">Transport &amp; travel:</strong>
                    <p>
                      We travel in a comfy 4&times;4 with experienced, safe and friendly local drivers who speak our language.
                    </p>
                    <p>
                      Some driving days are longer than others. Morocco is a huge country and we travel a good distance to see the best in a relatively short time. However, we stop regularly and the landscapes we pass through are breathtaking. No day is comprised solely of travelling and there is always plenty of sketching time built into the itineraries, but please bear in mind that the airports are not situated in the most paintable locations, so longer driving times on the first and last days are unavoidable.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <strong className="text-[#1e251c] block text-base">The painting:</strong>
                    <p>
                      With one or two exceptions, the trips are designed to be &lsquo;holidays&rsquo; rather than &lsquo;courses&rsquo;, and as such do not follow a structured learning syllabus. However, special &lsquo;tasks&rsquo; will be given most days which are designed to stimulate and inspire. These are optional, but useful and fun, and can be tailored to the individual. We meet regularly for group appraisals and progress is closely monitored. Beginners and novices are given all the help and encouragement they need while the more experienced are at liberty to pursue their own directions.
                    </p>
                    <p>
                      I want everyone who comes on a Vistas Sketching Holiday to have a wonderful time which exceeds their expectations, which is why I aim to be as open and honest as possible about the reality of travel here, and about these trips in particular. On a Vistas &lsquo;Sketchbook Journey&rsquo;, the exploration of the country is as important as the activity of sketching itself, which sets them apart from other painting holidays. They might not be right for everyone. But if you are adventurous in spirit, like dramatic, wild and surprising landscapes as well as ancient and fascinating cultures, and if you appreciate a challenge, then you will not be disappointed.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Q: Can I bring a non-painting partner? */}
            <div className="bg-white rounded-xl border border-[#ded7ca] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-partner')}
                className="p-5 cursor-pointer hover:bg-[#faf8f5] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#1e251c]">
                  Can I bring a non-painting partner?
                </h3>
                <span className="p-1 rounded-full bg-[#f2efe9] text-[#2c322b]">
                  {openFaq['q-partner'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-partner'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#eee7dc] text-sm text-[#4a5446] leading-relaxed">
                  Yes on Painted Desert (explicitly welcomed) and Argans &amp; Almonds (suits writers, hikers, photographers especially).
                </div>
              )}
            </div>

            {/* Q: Do I need to be fit? */}
            <div className="bg-white rounded-xl border border-[#ded7ca] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-fitness')}
                className="p-5 cursor-pointer hover:bg-[#faf8f5] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#1e251c]">
                  Do I need to be fit?
                </h3>
                <span className="p-1 rounded-full bg-[#f2efe9] text-[#2c322b]">
                  {openFaq['q-fitness'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-fitness'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#eee7dc] text-sm text-[#4a5446] leading-relaxed">
                  Some walking is required on most days; please don't book if you have trouble walking. Steep, uneven stairs feature in some hotels.
                </div>
              )}
            </div>

            {/* Q: What if I don't like heat? */}
            <div className="bg-white rounded-xl border border-[#ded7ca] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-heat')}
                className="p-5 cursor-pointer hover:bg-[#faf8f5] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#1e251c]">
                  What if I don't like heat?
                </h3>
                <span className="p-1 rounded-full bg-[#f2efe9] text-[#2c322b]">
                  {openFaq['q-heat'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-heat'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#eee7dc] text-sm text-[#4a5446] leading-relaxed">
                  March/April and October are the trip windows specifically because the heat is bearable then - but if you really dislike sun, Morocco may not suit.
                </div>
              )}
            </div>

            {/* Q: How do I book? */}
            <div className="bg-white rounded-xl border border-[#ded7ca] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-how-to-book')}
                className="p-5 cursor-pointer hover:bg-[#faf8f5] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#1e251c]">
                  How do I book?
                </h3>
                <span className="p-1 rounded-full bg-[#f2efe9] text-[#2c322b]">
                  {openFaq['q-how-to-book'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-how-to-book'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#eee7dc] text-sm text-[#4a5446] leading-relaxed">
                  See &ldquo;How to Book&rdquo; below for full step-by-step deposit guidelines, payment terms, and enquiry links.
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 7. YOUR HOST (MARY KING) */}
      <section className="py-14 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#f7f5ef] p-6 md:p-8 rounded-2xl border border-[#ded7ca] flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-xs">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" 
            alt="Mary King host and tutor"
            referrerPolicy="no-referrer"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-sm shrink-0"
          />
          <div className="space-y-3 text-center md:text-left">
            <div className="text-xs uppercase font-bold text-[#a87f4f] tracking-wider">
              Artist, Guide &amp; Founder
            </div>
            <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-[#1e251c]">
              Your host: Mary King
            </h2>
            <p className="text-sm md:text-base text-[#465042] leading-relaxed">
              Mary King leads every Morocco sketching holiday in person. With decades of travel experience through Marrakech riads, High Atlas passes, and Sahara oases, Mary offers patient daily plein air guidance, individual critiques, and a warm, supportive atmosphere for artists of all levels.
            </p>
            <div className="pt-2">
              <Link
                to="/your-host"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-[#384834] hover:text-[#182017] underline underline-offset-4"
              >
                <span>Read Mary's full story &amp; teaching philosophy →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-14 px-4 md:px-8 bg-[#262b25] text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3c453a] text-[#d4c3aa] text-xs font-semibold uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5 text-[#e2b77a]" />
              <span>Guest Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-white">
              What guests say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Testimonial 1: Alice */}
            <div className="p-6 md:p-8 rounded-xl bg-[#343b32] border border-[#485345] space-y-4 flex flex-col justify-between">
              <p className="font-serif-title italic text-base md:text-lg text-[#ebdcc9] leading-relaxed">
                &ldquo;The most amazing trip I've ever taken. In particular, sketching at Mary's well-selected locations meant we saw all the same places, but had at least an hour to really look at and appreciate each stop.&rdquo;
              </p>
              <div className="pt-3 border-t border-[#485345] flex items-center justify-between text-xs">
                <div className="font-bold text-white">
                  Alice, California
                </div>
                <div className="text-[#a3b39f]">
                  Morocco
                </div>
              </div>
            </div>

            {/* Testimonial 2: Kathy & Salomon */}
            <div className="p-6 md:p-8 rounded-xl bg-[#343b32] border border-[#485345] space-y-4 flex flex-col justify-between">
              <p className="font-serif-title italic text-base md:text-lg text-[#ebdcc9] leading-relaxed">
                &ldquo;From the moment that Mary picked us up in our Marrakesh riad to the moment that she delivered us, seven glorious days later, to our Fez hotel, we enjoyed every minute of traveling with her... We were very lucky to have Mary as our guide.&rdquo;
              </p>
              <div className="pt-3 border-t border-[#485345] flex items-center justify-between text-xs">
                <div className="font-bold text-white">
                  Kathy S. and Salomon M., Toronto
                </div>
                <div className="text-[#a3b39f]">
                  Morocco (non-painting trip)
                </div>
              </div>
            </div>

          </div>

          <div className="text-center pt-2">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4c3aa] hover:text-white underline underline-offset-4"
            >
              <span>Read more reviews from Scotland, Sri Lanka &amp; Morocco →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 9. HOW TO BOOK & CONTACT SECTION */}
      <section className="py-16 px-4 md:px-8 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-2xl border border-[#ded7ca] shadow-sm space-y-6">
          
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2ece1] text-[#6b4e28] text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#a87f4f]" />
              <span>Simple Booking Process</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-[#1f261d]">
              How to Book
            </h2>
          </div>

          <div className="text-base text-[#465042] leading-relaxed space-y-3">
            <p>
              You may reserve a place on any trip with payment of a <strong>10% deposit</strong>. Trips run subject to a minimum number of participants being reached, which will be confirmed before a deposit is taken. Until then you may register your interest, to be notified once the trip is confirmed.
            </p>
            <p>
              For the full step-by-step booking process, payment options and what happens after you enquire, see our <Link to="/how-to-book" className="text-[#3f523b] font-bold underline underline-offset-4 hover:text-[#1e251c]">How to Book page</Link>.
            </p>
            <p className="text-xs text-[#717c6e]">
              By making your booking you are agreeing to our &lsquo;Terms and Conditions&rsquo; which can be found by clicking <Link to="/terms-and-conditions" className="text-[#3f523b] underline hover:text-[#1e251c]">here</Link>.
            </p>
          </div>

          {/* Contact Details Box */}
          <div className="p-5 rounded-xl bg-[#f7f5f0] border border-[#e2dcd0] space-y-2 text-sm text-[#465042]">
            <div className="font-bold text-[#1f261d] mb-1">
              Contact information:
            </div>
            <div>
              <strong>Email:</strong> <a href="mailto:hello@sketchingholidays.co.uk" className="text-[#3f523b] font-medium underline">hello@sketchingholidays.co.uk</a>
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
                className="inline-flex items-center gap-1.5 text-[#303f2d] hover:text-[#182017] underline underline-offset-4"
              >
                <span>Full booking guide →</span>
              </Link>
              <span className="text-[#bbb3a4]">·</span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-[#303f2d] hover:text-[#182017] underline underline-offset-4"
              >
                <span>Get in touch →</span>
              </Link>
            </div>

            <button
              onClick={() => onOpenBookModal('morocco')}
              className="w-full sm:w-auto px-6 py-3 bg-[#2c322b] hover:bg-[#3f4a3d] text-white font-bold text-sm rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Enquire or Reserve Morocco Trip</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
