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
  Camera,
  Image as ImageIcon,
  Waves,
  ShieldCheck,
  Sailboat
} from 'lucide-react';
import { GREECE_TRIPS } from '../data/greeceData';

interface GreecePageProps {
  onOpenBookModal: (destinationId?: string, dateId?: string) => void;
}

export const GreecePage: React.FC<GreecePageProps> = ({ onOpenBookModal }) => {
  // State for image/sketch mode toggle per trip
  const [sketchViewMode, setSketchViewMode] = useState<Record<string, 'photo' | 'sketch'>>({});

  // State for open FAQs
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({
    'are-these-for-me': true,
    'q-shorter-version': false,
    'q-walking-stairs': false,
    'q-buildings-vs-landscape': false,
    'q-how-to-book': false
  });

  const toggleFaq = (faqId: string) => {
    setOpenFaq((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const trip = GREECE_TRIPS[0];
  const viewMode = sketchViewMode[trip.id] || 'photo';

  return (
    <div id="greece-destination-page" className="min-h-screen bg-[#faf9f6] text-[#1c2833]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0d2847] text-white pt-14 pb-20 px-4 md:px-8 overflow-hidden">
        {/* Background ambient pattern with Aegean sapphire tones */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3a86ff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b3d68] text-[#90c2ff] text-xs font-semibold uppercase tracking-wider mb-6">
            <Compass className="w-3.5 h-3.5 text-[#3a86ff]" />
            <span>Greek Dodecanese Destination Guide</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-title font-bold tracking-tight text-white mb-6 leading-tight">
            Sketching &amp; Painting Holidays in the Greek Dodecanese
          </h1>

          <div className="relative pl-5 border-l-3 border-[#3a86ff] max-w-3xl my-6">
            <p className="text-lg md:text-xl text-[#d0e5ff] font-serif-title italic leading-relaxed">
              &ldquo;Uncountable islands on an endless expanse of blue; fishing boats bobbing in colourful harbours; beckoning tavernas and hidden, rocky coves: Greek island hopping through the charming, historic Dodecanese&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#greece-trip"
              className="px-6 py-3 bg-[#3a86ff] hover:bg-[#2563eb] text-white font-bold text-sm rounded-lg transition-colors shadow-sm flex items-center gap-2"
            >
              <span>Explore Realm of the Nesoi</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenBookModal('greece')}
              className="px-6 py-3 bg-[#173a63] hover:bg-[#204e84] text-white font-bold text-sm rounded-lg transition-colors border border-[#2b5991] flex items-center gap-2 cursor-pointer"
            >
              <span>Check 2026/2027 Dates</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. QUICK FACTS STRIP */}
      <section className="bg-[#edf4fc] border-y border-[#d0e1f4] py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#1d4ed8] tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
              <span>Trips</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#0d2847]">
              1 Island Journey
            </div>
            <div className="text-xs text-[#476685]">
              Realm of the Nesoi (Kos to Rhodes)
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#1d4ed8] tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2563eb]" />
              <span>Length</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#0d2847]">
              15/16 Nights
            </div>
            <div className="text-xs text-[#476685]">
              7 or 10-day circuits on request
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#1d4ed8] tracking-wider flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-[#2563eb]" />
              <span>From</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#0d2847]">
              £2,600 / person
            </div>
            <div className="text-xs text-[#476685]">
              Non-painter £2,600 · Sharing £2,700
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#1d4ed8] tracking-wider flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#2563eb]" />
              <span>Led By</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#0d2847]">
              Mary King
            </div>
            <div className="text-xs text-[#476685]">
              In person, every day
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section className="py-14 px-4 md:px-8 max-w-5xl mx-auto space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbeafe] text-[#1e40af] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sailboat className="w-3.5 h-3.5 text-[#2563eb]" />
            <span>Aegean Light, Mythological Isles &amp; Coastal Charm</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#0d2847] tracking-tight">
            Introduction to Sketching Holidays in Greece
          </h2>
        </div>

        <div className="prose prose-stone max-w-none text-base md:text-lg text-[#2a3e51] leading-relaxed space-y-5">
          <p>
            What's the first thing that comes to mind when you hear the words, Greek Islands?
          </p>

          <p>
            Is it the infinity of blue, from the water to the sky to the serenely painted chapels, perched on high above rocky bays? Is it a wizened fisherman, mending his nets beside brightly coloured boats in the harbour in timeless fashion, while the buzz of the new world hurries, unnoticed, around him?
          </p>

          <p>
            A fig tree, dripping with plump deliciousness, draped across a taverna table laid with a tempting mezze, perhaps a glass of retsina on the side? Towering cliffs above the clearest water, goats among the olive trees, whitewashed villages clinging to the hillsides, the smell of wild oregano as you stroll sandy paths?
          </p>

          <p>
            You will find all these things on a trip to the region. Yet with up to six thousand islands and islets, and over two hundred which are inhabited, it might be surprising to learn that each one has a character all its own, along with an unmistakeably Greek flavour. One could spend a lifetime carrying a sketchbook from island to island; every one of them bursts with subjects just begging to be splashed onto the page, and it must be almost impossible to choose just one.
          </p>

          {/* Dodecanese Spotlight Box */}
          <div className="p-6 rounded-xl bg-[#eaf3fe] border border-[#c3daf9] my-6 space-y-3">
            <h3 className="font-serif-title font-bold text-xl text-[#0b2440] flex items-center gap-2">
              <Waves className="w-5 h-5 text-[#2563eb]" />
              <span>Late Season Warmth in the Eastern Aegean</span>
            </h3>
            <p className="text-base text-[#1b3a5b] leading-relaxed">
              In the Eastern Aegean, nudging up to the Turkish border, lie the sun-drenched Dodecanese. These include the well-known tourist meccas of Kos and Rhodes, along with some lesser known but stunningly iconic islands such as Symi, and quieter, peaceful havens which have so far avoided the ravages of mass tourism.
            </p>
            <p className="text-sm text-[#254b73] leading-relaxed">
              The beauty of this group, in particular, is the weather, which stays warm into late September and October, long after schools have returned and the crowds have dissipated. This is when we will travel, with the aim of sitting outside to paint in comfortable, not stiflingly hot, sunshine and swimming in a wonderfully warmed-up sea.
            </p>
          </div>

          <p>
            From ancient ruins to rocky hillsides, hidden coves and sparking seas, the Dodecanese have everything a visit to Greece should provide, along with delicious regional food, and sights you might never have imagined – or painted.
          </p>
        </div>
      </section>

      {/* 4. THE TRIP */}
      <section id="greece-trip" className="py-12 px-4 md:px-8 bg-[#f2f7fc] border-t border-[#d5e4f5]">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#0d2847]">
              Realm of the Nesoi
            </h2>
            <p className="text-sm md:text-base text-[#4a6b8c]">
              15 nights island-hopping through Kos, Kalymnos, Telendos, Symi, and Rhodes in the sunny Greek Dodecanese.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[#cfe0f2] shadow-sm overflow-hidden p-6 md:p-8 space-y-8">
            
            {/* Header / Meta */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded bg-[#0d2847] text-white text-xs font-bold uppercase tracking-wider">
                  Sketchbook Journey
                </span>
                <span className="text-xs font-bold text-[#1d4ed8] bg-[#dbeafe] px-2.5 py-1 rounded border border-[#bfdbfe]">
                  {trip.durationRange}
                </span>
                <span className="text-xs font-semibold text-[#4b6d90]">
                  {trip.route}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif-title font-bold text-[#0d2847]">
                {trip.name}
              </h3>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-[#315273] pt-1">
                <div>
                  <strong className="text-[#0d2847]">Medium:</strong> {trip.medium}
                </div>
                <div>
                  <strong className="text-[#0d2847]">Price:</strong> {trip.priceNote}
                </div>
              </div>
            </div>

            {/* Image vs Artist Sketch Interactive Toggle */}
            <div className="relative rounded-xl overflow-hidden bg-[#091a2e] aspect-16/9 md:aspect-21/9 max-h-[380px] shadow-inner group">
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
                  {viewMode === 'photo' ? '📷 Aegean Sea & Harbour Photo' : '🎨 Mary King Watercolor Sketch Study'}
                </div>

                <div className="inline-flex rounded-lg bg-black/60 p-1 backdrop-blur-xs border border-white/20">
                  <button
                    onClick={() => setSketchViewMode(prev => ({ ...prev, [trip.id]: 'photo' }))}
                    className={`px-3 py-1 rounded text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                      viewMode === 'photo' ? 'bg-[#3a86ff] text-white' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Photo</span>
                  </button>
                  <button
                    onClick={() => setSketchViewMode(prev => ({ ...prev, [trip.id]: 'sketch' }))}
                    className={`px-3 py-1 rounded text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                      viewMode === 'sketch' ? 'bg-[#3a86ff] text-white' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Artist Sketch</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-3 text-[#2a3e51] text-base leading-relaxed">
              {trip.descriptionParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Highlights */}
            <div className="bg-[#f0f6fd] p-5 rounded-xl border border-[#d0e2f5]">
              <h4 className="font-serif-title font-bold text-lg text-[#0d2847] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2563eb]" />
                <span>Trip Highlights</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#2f5072]">
                {trip.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#2563eb] font-bold text-base leading-none">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Day-by-Day Itinerary Table */}
            <div className="space-y-3">
              <h4 className="font-serif-title font-bold text-xl text-[#0d2847] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#2563eb]" />
                <span>Day-by-Day Itinerary</span>
              </h4>
              
              <div className="border border-[#cfe0f2] rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#e2edf9] border-b border-[#cfe0f2] text-[#0d2847]">
                      <th className="py-3 px-4 font-bold w-24 md:w-32">Day</th>
                      <th className="py-3 px-4 font-bold">Planned Sketching, Island Crossing &amp; Excursions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e1ecf8] bg-white">
                    {trip.itinerary.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#f5f9fe] transition-colors">
                        <td className="py-3 px-4 font-bold text-[#1d4ed8] align-top whitespace-nowrap bg-[#f9fcff]">
                          {item.day}
                        </td>
                        <td className="py-3 px-4 text-[#334e68] leading-relaxed">
                          {item.activity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Shorter Circuits Callout */}
            <div className="p-5 rounded-xl bg-[#edf5ff] border border-[#b9d5f7] text-sm text-[#183b63] space-y-1">
              <div className="font-bold text-[#0c2a4d] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2563eb]" />
                <span>Shorter circuits available on request:</span>
              </div>
              <p className="leading-relaxed">
                {trip.shorterCircuitsNote}
              </p>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-[#f0f6fd] border border-[#d0e2f5] space-y-3">
                <h5 className="font-bold text-sm text-[#113a68] uppercase tracking-wider flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563eb]" />
                  <span>What's Included</span>
                </h5>
                <ul className="space-y-2 text-xs md:text-sm text-[#264b73]">
                  {trip.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2563eb] shrink-0 mt-0.5" />
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
            <div className="p-6 rounded-xl bg-[#0d2847] text-white space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1b3d68] pb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#90c2ff] font-bold">
                    Confirmed Departures
                  </div>
                  <div className="font-serif-title font-bold text-lg text-white">
                    Upcoming Dates for {trip.name}
                  </div>
                </div>
                <div className="text-xs text-[#c5ddfa]">
                  Small group with Mary King
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trip.departures.map((dep) => (
                  <div 
                    key={dep.id} 
                    className="p-3.5 rounded-lg bg-[#183a60] border border-[#2b588c] flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="font-bold text-sm text-white">
                        {dep.startDate} - {dep.endDate}
                      </div>
                      <div className="text-xs text-[#90c2ff]">
                        {dep.durationLabel} · £{dep.priceGBP.toLocaleString()}
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#2563eb] text-white">
                      {dep.spotsLeft} spots
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  to="/calendar"
                  className="text-xs font-bold text-[#90c2ff] hover:text-white underline underline-offset-4"
                >
                  View on full 2026/2027 Calendar →
                </Link>

                <button
                  onClick={() => onOpenBookModal('greece', trip.departures[0]?.id)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#3a86ff] hover:bg-[#2563eb] text-white font-bold text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Now ({trip.name})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. YOUR SKETCHING DAY */}
      <section className="py-14 px-4 md:px-8 max-w-5xl mx-auto space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbeafe] text-[#1e40af] text-xs font-semibold uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5 text-[#2563eb]" />
            <span>Plein Air Rhythm &amp; Greek Island Atmosphere</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#0d2847] tracking-tight">
            Your Sketching Day
          </h2>
        </div>

        <div className="prose prose-stone max-w-none text-base md:text-lg text-[#2a3e51] leading-relaxed space-y-4">
          <p>
            Every day on this holiday will have an opportunity for painting. You can even sketch from the ferries!
          </p>

          <p>
            We do not need particularly early starts on this trip. Even on days when we are moving islands the ferries are not at an antisocial hour, and we will begin whatever we are doing after a decent breakfast.
          </p>

          <p>
            Despite the apparent &lsquo;busyness&rsquo; of the itinerary you will find the days quite relaxing, and once we have found a good spot to paint we won't be as rushed as we are on some Vistas trips. Although I encourage sketchbook work, to keep a pictorial record of our special journey in one place, this itinerary is better suited than most to the completion of more traditionally &lsquo;finished&rsquo; watercolour paintings, if desired. Just bear in mind you'll probably need a drawing board for this, which will have to be carried – in your lightweight hand luggage.
          </p>

          <p>
            An opportunity for swimming will be provided on most days. In many cases we'll already be painting from the beach, so from sketchbook to sea to taverna and back is often the order of the day. Guidance, instruction, demos and exercises will be available at all times, and if you are a novice, this is a wonderfully unintimidating environment for developing your technique.
          </p>

          <p>
            The most iconic subjects include dazzling white churches with cobalt domes against a background of deep turquoise sea; prettily painted, small fishing boats full of buoys and nets bobbing beside the jetties; dry, rocky mountainsides plunging down to pale pebble beaches and the stack of pastel-coloured sponge-merchants' houses around Symi and Chalki harbours. In addition, we have the chance to sketch famous archaeological sites in Rhodes and Kos, testing your perspective skills with all those archways.
          </p>

          <p>
            We end the day with dinner together at a local restaurant, perhaps watching the sunset with a glass of something cold in hand. Every few days we'll have a sketchbook appraisal where we can provide encouragement and constructive input for each other, while marvelling at how much we have managed to achieve in such a short space of time!
          </p>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="py-14 px-4 md:px-8 bg-[#f2f7fc] border-t border-[#d5e4f5]">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbeafe] text-[#1e40af] text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#2563eb]" />
              <span>Questions &amp; Practical Advice</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#0d2847] tracking-tight">
              FAQs
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* Detailed: Are These Holidays For Me? */}
            <div className="bg-white rounded-xl border border-[#cfe0f2] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('are-these-for-me')}
                className="p-6 cursor-pointer hover:bg-[#f6fbf8] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-xl font-serif-title font-bold text-[#0d2847] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#2563eb]" />
                  <span>Are These Holidays For Me?</span>
                </h3>
                <span className="p-1 rounded-full bg-[#edf4fc] text-[#0d2847]">
                  {openFaq['are-these-for-me'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </div>

              {openFaq['are-these-for-me'] && (
                <div className="px-6 pb-6 pt-2 border-t border-[#e1ecf8] text-sm md:text-base text-[#2a3e51] space-y-4 leading-relaxed">
                  <p>
                    Greece, with its islands, is no stranger to tourists of all types and is regarded as a welcoming, family-friendly destination. Most locals speak English and provide warm hospitality.
                  </p>

                  <div className="space-y-2">
                    <strong className="text-[#0d2847] block text-base">Travel Pace &amp; Physical Mobility:</strong>
                    <p>
                      This itinerary entails frequent sea travel between islands and public buses on land. While our time in the main locations is slow-paced, there is much to see and reach. It involves boats of all sizes, sea crossings of up to 3 hours, and walking up and down stone steps.
                    </p>
                    <p>
                      Most island towns are built into the hillside and many streets are too narrow for cars. Accommodation must often be reached on foot with luggage. A small backpack is by far the most practical solution, and you should pack light.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <strong className="text-[#0d2847] block text-base">Accommodation &amp; Island Life:</strong>
                    <p>
                      All accommodations are safe and clean with a private bathroom, often family-run Greek properties supporting the local economy. A relaxed &lsquo;mañana&rsquo; approach often prevails, and embracing that easy-going philosophy will ensure you have a fabulous time.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Q: Can I do a shorter version? */}
            <div className="bg-white rounded-xl border border-[#cfe0f2] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-shorter-version')}
                className="p-5 cursor-pointer hover:bg-[#f6fbf8] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#0d2847]">
                  Can I do a shorter version?
                </h3>
                <span className="p-1 rounded-full bg-[#edf4fc] text-[#0d2847]">
                  {openFaq['q-shorter-version'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-shorter-version'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#e1ecf8] text-sm text-[#315273] leading-relaxed">
                  Yes - a Kos-Kos 10-day circuit or a Rhodes-Rhodes 7-day circuit can be arranged instead of the full 15/16-night journey. These are strictly number-dependent; please enquire.
                </div>
              )}
            </div>

            {/* Q: How much walking/stairs are involved? */}
            <div className="bg-white rounded-xl border border-[#cfe0f2] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-walking-stairs')}
                className="p-5 cursor-pointer hover:bg-[#f6fbf8] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#0d2847]">
                  How much walking/stairs are involved?
                </h3>
                <span className="p-1 rounded-full bg-[#edf4fc] text-[#0d2847]">
                  {openFaq['q-walking-stairs'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-walking-stairs'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#e1ecf8] text-sm text-[#315273] leading-relaxed">
                  A fair amount - island towns are built into hillsides and reached on foot with luggage, sometimes uphill. Pack light; a small backpack is recommended over a heavy suitcase.
                </div>
              )}
            </div>

            {/* Q: Is this trip better for painters who like buildings or pure landscape? */}
            <div className="bg-white rounded-xl border border-[#cfe0f2] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-buildings-vs-landscape')}
                className="p-5 cursor-pointer hover:bg-[#f6fbf8] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#0d2847]">
                  Is this trip better for painters who like buildings or pure landscape?
                </h3>
                <span className="p-1 rounded-full bg-[#edf4fc] text-[#0d2847]">
                  {openFaq['q-buildings-vs-landscape'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-buildings-vs-landscape'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#e1ecf8] text-sm text-[#315273] leading-relaxed">
                  Built structures (whitewashed chapels, stone archways, harbours, pastel sponge-merchants' mansions) feature heavily. If you strongly prefer pure wilderness landscape without manmade subjects, our Italian Dolomites or Scottish Highlands trips may suit better.
                </div>
              )}
            </div>

            {/* Q: How do I book? */}
            <div className="bg-white rounded-xl border border-[#cfe0f2] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-how-to-book')}
                className="p-5 cursor-pointer hover:bg-[#f6fbf8] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#0d2847]">
                  How do I book?
                </h3>
                <span className="p-1 rounded-full bg-[#edf4fc] text-[#0d2847]">
                  {openFaq['q-how-to-book'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-how-to-book'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#e1ecf8] text-sm text-[#315273] leading-relaxed">
                  See &ldquo;How to Book&rdquo; below for full step-by-step deposit guidelines, payment terms, and enquiry links.
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 7. YOUR HOST (MARY KING) */}
      <section className="py-14 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#edf4fc] p-6 md:p-8 rounded-2xl border border-[#cfe0f2] flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-xs">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" 
            alt="Mary King host and tutor"
            referrerPolicy="no-referrer"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-sm shrink-0"
          />
          <div className="space-y-3 text-center md:text-left">
            <div className="text-xs uppercase font-bold text-[#1d4ed8] tracking-wider">
              Artist, Guide &amp; Founder
            </div>
            <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-[#0d2847]">
              Your host: Mary King
            </h2>
            <p className="text-sm md:text-base text-[#315273] leading-relaxed">
              Mary King travels with you every step of the way across the Greek Dodecanese, from the quiet boat journeys around Telendos to the shaded pastel alleyways of Symi. She provides attentive watercolor guidance, helps beginners loosen up their style, and hosts enjoyable evening appraisals.
            </p>
            <div className="pt-2">
              <Link
                to="/your-host"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-[#1d4ed8] hover:text-[#0d2847] underline underline-offset-4"
              >
                <span>Read Mary's full story &amp; teaching philosophy →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-14 px-4 md:px-8 bg-[#0d2847] text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b3d68] text-[#90c2ff] text-xs font-semibold uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5 text-[#3a86ff]" />
              <span>Guest Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-white">
              What guests say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 md:p-8 rounded-xl bg-[#17385e] border border-[#2b578c] space-y-4 flex flex-col justify-between">
              <p className="font-serif-title italic text-base md:text-lg text-[#d0e5ff] leading-relaxed">
                &ldquo;Island hopping with sketchbooks in hand was pure magic. Mary's encouragement made drawing complex harbour scenes feel effortless and joyful.&rdquo;
              </p>
              <div className="pt-3 border-t border-[#2b578c] flex items-center justify-between text-xs">
                <div className="font-bold text-white">
                  Helena, UK
                </div>
                <div className="text-[#90c2ff]">
                  Greek Dodecanese
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-[#17385e] border border-[#2b578c] space-y-4 flex flex-col justify-between">
              <p className="font-serif-title italic text-base md:text-lg text-[#d0e5ff] leading-relaxed">
                &ldquo;Swimming between painting sessions in crystal-clear waters and dining on fresh seafood with wonderful companions... the highlight of my year.&rdquo;
              </p>
              <div className="pt-3 border-t border-[#2b578c] flex items-center justify-between text-xs">
                <div className="font-bold text-white">
                  David &amp; Sarah, Australia
                </div>
                <div className="text-[#90c2ff]">
                  Realm of the Nesoi
                </div>
              </div>
            </div>

          </div>

          <div className="text-center pt-2">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#90c2ff] hover:text-white underline underline-offset-4"
            >
              <span>Read more reviews from our worldwide painting adventures →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 9. HOW TO BOOK & CONTACT SECTION */}
      <section className="py-16 px-4 md:px-8 bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-2xl border border-[#cfe0f2] shadow-sm space-y-6">
          
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dbeafe] text-[#1e40af] text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
              <span>Simple Booking Process</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-[#0d2847]">
              How to Book
            </h2>
          </div>

          <div className="text-base text-[#2a3e51] leading-relaxed space-y-3">
            <p>
              You may reserve a place on any trip with payment of a <strong>10% deposit</strong>. Trips run subject to a minimum number of participants being reached, which will be confirmed before a deposit is taken. Until then you may register your interest, to be notified once the trip is confirmed.
            </p>
            <p>
              For the full step-by-step booking process, payment options and what happens after you enquire, see our <Link to="/how-to-book" className="text-[#1d4ed8] font-bold underline underline-offset-4 hover:text-[#0d2847]">How to Book page</Link>.
            </p>
            <p className="text-xs text-[#5c7a99]">
              By making your booking you are agreeing to our &lsquo;Terms and Conditions&rsquo; which can be found by clicking <Link to="/terms-and-conditions" className="text-[#1d4ed8] underline hover:text-[#0d2847]">here</Link>.
            </p>
          </div>

          {/* Contact Details Box */}
          <div className="p-5 rounded-xl bg-[#edf4fc] border border-[#cfe0f2] space-y-2 text-sm text-[#315273]">
            <div className="font-bold text-[#0d2847] mb-1">
              Contact information:
            </div>
            <div>
              <strong>Email:</strong> <a href="mailto:hello@sketchingholidays.co.uk" className="text-[#1d4ed8] font-medium underline">hello@sketchingholidays.co.uk</a>
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
                className="px-6 py-3 bg-[#0d2847] hover:bg-[#183a60] text-white rounded-lg transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Full Booking Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact-me"
                className="px-6 py-3 bg-[#edf4fc] hover:bg-[#d8e8f8] text-[#0d2847] rounded-lg transition-colors border border-[#bfd7f5] inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

            <button
              onClick={() => onOpenBookModal('greece')}
              className="w-full sm:w-auto px-8 py-3 bg-[#3a86ff] hover:bg-[#2563eb] text-white font-bold text-sm rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              Reserve a Place (10% Deposit)
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
