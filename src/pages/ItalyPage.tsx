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
  Mountain,
  Camera,
  Image as ImageIcon,
  Flower2,
  ShieldCheck
} from 'lucide-react';
import { ITALY_TRIPS } from '../data/italyData';

interface ItalyPageProps {
  onOpenBookModal: (destinationId?: string, dateId?: string) => void;
}

export const ItalyPage: React.FC<ItalyPageProps> = ({ onOpenBookModal }) => {
  // State for image/sketch mode toggle per trip
  const [sketchViewMode, setSketchViewMode] = useState<Record<string, 'photo' | 'sketch'>>({});

  // State for open FAQs
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({
    'are-these-for-me': true,
    'q-partner': false,
    'q-fitness': false,
    'q-ski-lifts': false,
    'q-how-to-book': false
  });

  const toggleFaq = (faqId: string) => {
    setOpenFaq((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const trip = ITALY_TRIPS[0];
  const viewMode = sketchViewMode[trip.id] || 'photo';

  return (
    <div id="italy-destination-page" className="min-h-screen bg-[#faf8f5] text-[#2c322b]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#2e1f18] text-white pt-14 pb-20 px-4 md:px-8 overflow-hidden">
        {/* Background ambient pattern with warm alpine rose & limestone tones */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e07a5f_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#482e22] text-[#f7b2a0] text-xs font-semibold uppercase tracking-wider mb-6">
            <Compass className="w-3.5 h-3.5 text-[#e07a5f]" />
            <span>Italian Dolomites Destination Guide</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-title font-bold tracking-tight text-white mb-6 leading-tight">
            Sketching &amp; Painting Holidays in the Dolomites, Italy
          </h1>

          <div className="relative pl-5 border-l-3 border-[#e07a5f] max-w-3xl my-6">
            <p className="text-lg md:text-xl text-[#fceae5] font-serif-title italic leading-relaxed">
              &ldquo;Towering pillars of rock, sculptured and splintered into surreal monolithic columns&hellip; jagged ridges thrusting high into the clouds above serene, fertile valleys&hellip; Alpine meadows alive with the sound of cowbells&hellip; Sleepy villages, ablaze with flowers. A landscape and culture like no other; the perfect setting for your sketching/painting holiday in Italy&hellip;&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#italy-trip"
              className="px-6 py-3 bg-[#e07a5f] hover:bg-[#d0694e] text-white font-bold text-sm rounded-lg transition-colors shadow-sm flex items-center gap-2"
            >
              <span>Explore Enrosadira</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenBookModal('italy-dolomites')}
              className="px-6 py-3 bg-[#42291e] hover:bg-[#573628] text-white font-bold text-sm rounded-lg transition-colors border border-[#6b4535] flex items-center gap-2 cursor-pointer"
            >
              <span>Check 2026/2027 Dates</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. QUICK FACTS STRIP */}
      <section className="bg-[#f7ece8] border-y border-[#edd5cc] py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#c85a3a] tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e07a5f]" />
              <span>Trips</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#2e1f18]">
              1 Alpine Journey
            </div>
            <div className="text-xs text-[#78594e]">
              Enrosadira (Alta Badia)
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#c85a3a] tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#e07a5f]" />
              <span>Length</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#2e1f18]">
              13 Nights
            </div>
            <div className="text-xs text-[#78594e]">
              From Verona
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#c85a3a] tracking-wider flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-[#e07a5f]" />
              <span>From</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#2e1f18]">
              £2,500 / person
            </div>
            <div className="text-xs text-[#78594e]">
              Non-painter £2,500 · Sharing £2,800
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-[#c85a3a] tracking-wider flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#e07a5f]" />
              <span>Led By</span>
            </div>
            <div className="font-serif-title font-bold text-lg md:text-xl text-[#2e1f18]">
              Mary King
            </div>
            <div className="text-xs text-[#78594e]">
              In person, every day
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section className="py-14 px-4 md:px-8 max-w-5xl mx-auto space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fde8e3] text-[#9c381d] text-xs font-semibold uppercase tracking-wider mb-3">
            <Mountain className="w-3.5 h-3.5 text-[#e07a5f]" />
            <span>UNESCO World Heritage &amp; Ladin Alpine Culture</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#2e1f18] tracking-tight">
            Introduction to Sketching Holidays in the Dolomites, Italy
          </h2>
        </div>

        <div className="prose prose-stone max-w-none text-base md:text-lg text-[#4a3b34] leading-relaxed space-y-5">
          <p>
            Just a short flight from the UK can bring you into an unforgettable world, a million dream-miles away. In the north of Italy, rubbing shoulders with Austria and with characteristics of both, lies the glorious mountain region known as the Dolomites. Nestled in the midst of all this splendour is Alta Badia, a collection of valleys and soaring rocky peaks which maintains its own unique culture and language. The Ladin people proudly inhabit this much fought-over area and the peaceful serenity which now reigns does much to conceal its turbulent past; the region is scattered with world war 1 trenches, tunnels and memorials, drawing visitors interested in its history.
          </p>

          <p>
            Most of the Dolomites area is a UNESCO world heritage site and with good reason. Apart from the native wildlife (which includes ibex, chamoix and moufflon - even brown bear - along with the endearing, iconic marmot) and profusion of flower meadows protecting many rare species, the landscape is like nowhere else on Earth. Geographically forming the southern end of the Alps, the mountains here are quite different both geologically and in appearance; although somewhat lower in height their shapes are at once more striking and unique.
          </p>

          {/* Dolomites Atmosphere Spotlight Box */}
          <div className="p-6 rounded-xl bg-[#faf1ee] border border-[#ebd2c9] my-6 space-y-3">
            <h3 className="font-serif-title font-bold text-xl text-[#3d2319] flex items-center gap-2">
              <Flower2 className="w-5 h-5 text-[#e07a5f]" />
              <span>An Other-Worldly Canvas of Alpine Wonder</span>
            </h3>
            <p className="text-base text-[#523c34] leading-relaxed">
              This &lsquo;other-worldly&rsquo; landscape lies somewhere between &lsquo;The Sound of Music&rsquo; and a fantasy 70&rsquo;s album cover and when you first feast your eyes on these incredible peaks you will pinch yourself to check you're not dreaming. Yet it is very real, as thousands of visitors from all over the world can testify, and for all its mind-blowing grandeur and apparent remoteness, the area is actually quite accessible, with connections from major airports and an excellent tourist infrastructure within the valleys.
            </p>
            <p className="text-sm text-[#664b41] leading-relaxed">
              The Dolomites are a virtually infinite source of creative stimulation for the landscape artist. Suitable for total beginners or professional artists alike, non-painting partners with an interest in photography, walking or flowers will find plenty to amuse them.
            </p>
          </div>

          <p>
            There are many glorious walking routes and exhilarating via ferratas in the Alta Badia area so you could potentially tag on an active week after some relaxing painting.
          </p>
        </div>
      </section>

      {/* 4. THE TRIP */}
      <section id="italy-trip" className="py-12 px-4 md:px-8 bg-[#f5edea] border-t border-[#ebd8d1]">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#2e1f18]">
              Enrosadira
            </h2>
            <p className="text-sm md:text-base text-[#78594e]">
              13 nights from Verona into the high wildflower pastures, dramatic limestone massifs and cozy refugios of Alta Badia.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[#e8d5cc] shadow-sm overflow-hidden p-6 md:p-8 space-y-8">
            
            {/* Header / Meta */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded bg-[#2e1f18] text-white text-xs font-bold uppercase tracking-wider">
                  Sketchbook Holiday
                </span>
                <span className="text-xs font-bold text-[#c85a3a] bg-[#fde8e3] px-2.5 py-1 rounded border border-[#f7c2b5]">
                  {trip.durationRange}
                </span>
                <span className="text-xs font-semibold text-[#78594e]">
                  {trip.route}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif-title font-bold text-[#2e1f18]">
                {trip.name} ({trip.region})
              </h3>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-[#5d463e] pt-1">
                <div>
                  <strong className="text-[#2e1f18]">Medium:</strong> {trip.medium}
                </div>
                <div>
                  <strong className="text-[#2e1f18]">Price:</strong> {trip.priceNote}
                </div>
              </div>
            </div>

            {/* Image vs Artist Sketch Interactive Toggle */}
            <div className="relative rounded-xl overflow-hidden bg-[#241712] aspect-16/9 md:aspect-21/9 max-h-[380px] shadow-inner group">
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
                  {viewMode === 'photo' ? '📷 Dolomites Alpine Peak Photo' : '🎨 Mary King Watercolor Sketch Study'}
                </div>

                <div className="inline-flex rounded-lg bg-black/60 p-1 backdrop-blur-xs border border-white/20">
                  <button
                    onClick={() => setSketchViewMode(prev => ({ ...prev, [trip.id]: 'photo' }))}
                    className={`px-3 py-1 rounded text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                      viewMode === 'photo' ? 'bg-[#e07a5f] text-white' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Photo</span>
                  </button>
                  <button
                    onClick={() => setSketchViewMode(prev => ({ ...prev, [trip.id]: 'sketch' }))}
                    className={`px-3 py-1 rounded text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                      viewMode === 'sketch' ? 'bg-[#e07a5f] text-white' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Artist Sketch</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-3 text-[#4a3b34] text-base leading-relaxed">
              {trip.descriptionParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Highlights */}
            <div className="bg-[#faf1ee] p-5 rounded-xl border border-[#ebd2c9]">
              <h4 className="font-serif-title font-bold text-lg text-[#2e1f18] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#e07a5f]" />
                <span>Trip Highlights</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#5d463e]">
                {trip.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#e07a5f] font-bold text-base leading-none">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Day-by-Day Itinerary Table */}
            <div className="space-y-3">
              <h4 className="font-serif-title font-bold text-xl text-[#2e1f18] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#e07a5f]" />
                <span>Day-by-Day Itinerary</span>
              </h4>
              
              <div className="border border-[#e8d5cc] rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#faeae5] border-b border-[#e8d5cc] text-[#2e1f18]">
                      <th className="py-3 px-4 font-bold w-24 md:w-32">Day</th>
                      <th className="py-3 px-4 font-bold">Planned Sketching, Cable Car &amp; Valley Excursion</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f2e2dc] bg-white">
                    {trip.itinerary.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#fdf8f6] transition-colors">
                        <td className="py-3 px-4 font-bold text-[#c85a3a] align-top whitespace-nowrap bg-[#fff8f6]">
                          {item.day}
                        </td>
                        <td className="py-3 px-4 text-[#4a3b34] leading-relaxed">
                          {item.activity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-[#faf1ee] border border-[#ebd2c9] space-y-3">
                <h5 className="font-bold text-sm text-[#572314] uppercase tracking-wider flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#e07a5f]" />
                  <span>What's Included</span>
                </h5>
                <ul className="space-y-2 text-xs md:text-sm text-[#523c34]">
                  {trip.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#e07a5f] shrink-0 mt-0.5" />
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
            <div className="p-6 rounded-xl bg-[#2e1f18] text-white space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#473026] pb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#f7b2a0] font-bold">
                    Confirmed Departures
                  </div>
                  <div className="font-serif-title font-bold text-lg text-white">
                    Upcoming Dates for {trip.name}
                  </div>
                </div>
                <div className="text-xs text-[#edd5cc]">
                  Small group with Mary King
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trip.departures.map((dep) => (
                  <div 
                    key={dep.id} 
                    className="p-3.5 rounded-lg bg-[#422c22] border border-[#5c3e32] flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="font-bold text-sm text-white">
                        {dep.startDate} - {dep.endDate}
                      </div>
                      <div className="text-xs text-[#f7b2a0]">
                        {dep.durationLabel} · £{dep.priceGBP.toLocaleString()}
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#e07a5f] text-white">
                      {dep.spotsLeft} spots
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  to="/calendar"
                  className="text-xs font-bold text-[#f7b2a0] hover:text-white underline underline-offset-4"
                >
                  View on full 2026/2027 Calendar →
                </Link>

                <button
                  onClick={() => onOpenBookModal('italy-dolomites', trip.departures[0]?.id)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#e07a5f] hover:bg-[#d0694e] text-white font-bold text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fde8e3] text-[#9c381d] text-xs font-semibold uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5 text-[#e07a5f]" />
            <span>Plein Air Rhythm in Corvara &amp; Alta Badia</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#2e1f18] tracking-tight">
            Your Sketching Day
          </h2>
        </div>

        <div className="prose prose-stone max-w-none text-base md:text-lg text-[#4a3b34] leading-relaxed space-y-4">
          <p>
            Corvara is the main transport hub of the area, with buses from here going to all the places we plan to visit. Usually we'll begin our sketching day after breakfast, at around 10am. On many days we'll be taking a packed lunch, for flexibility and to maximise time spent sketching. Each carrying our own materials and refreshments we'll get onto one of the reliable and friendly local buses to our destination for the day, from where there's usually a short, pretty walk to reach our chosen place.
          </p>

          <p>
            When we get there I might go over the day's exercise and perhaps give a quick demonstration, before you settle down in front of your first subject. During the week there will be a range of these painting exercises/challenges specifically designed to develop and stimulate your sketching and painting. These are especially valuable for beginners and novices; experienced painters may choose not to participate in them, or they may find some of them interesting. They will not take up more than half of your sketching time unless you wish them to! I will encourage you to produce around 2 to 4 watercolour sketches a day, or as many as you feel like doing.
          </p>

          <p>
            On some days where appropriate we'll have lunch and a good break in one of the excellent &lsquo;refugios&rsquo;, which offer full meals as well as snacks, pastries and coffee, and are often good places to go if the weather decides to play tricks on us.
          </p>

          <p>
            Where possible, I will provide a wet weather alternative if we're unlucky enough to experience a washout day, and it will be optional. Additionally if you wake up one morning and don't feel like painting, that's fine, as long as you let me know. Nothing on these holidays is compulsory, except having an enjoyable time!
          </p>

          <p>
            The day will usually finish around 5pm, depending on the bus schedule. Every few days we'll have an informal get-together to look over our sketchbooks, perhaps over a hot chocolate in one of the many wonderful cafes or outside soaking up the late afternoon sun with an Aperol Spritz.
          </p>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="py-14 px-4 md:px-8 bg-[#f5edea] border-t border-[#ebd8d1]">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fde8e3] text-[#9c381d] text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#e07a5f]" />
              <span>Questions &amp; Essential Preparation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-[#2e1f18] tracking-tight">
              FAQs
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* Detailed: Are These Holidays For Me? */}
            <div className="bg-white rounded-xl border border-[#e8d5cc] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('are-these-for-me')}
                className="p-6 cursor-pointer hover:bg-[#fdf8f6] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-xl font-serif-title font-bold text-[#2e1f18] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#e07a5f]" />
                  <span>Are These Holidays For Me?</span>
                </h3>
                <span className="p-1 rounded-full bg-[#f7ece8] text-[#2e1f18]">
                  {openFaq['are-these-for-me'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </div>

              {openFaq['are-these-for-me'] && (
                <div className="px-6 pb-6 pt-2 border-t border-[#f2e2dc] text-sm md:text-base text-[#4a3b34] space-y-4 leading-relaxed">
                  <p>
                    A holiday in the Dolomites will suit anyone who appreciates truly stunning mountain scenery. It will appeal to those who don't like to travel too far from their comfort zone, but want to feel as if they're somewhere really different. Nature lovers, botanists, photographers, walkers, those who just like to sit in a cafe and eat strudel&hellip; all will feel totally at home here.
                  </p>

                  <div className="space-y-2">
                    <strong className="text-[#2e1f18] block text-base">Outdoor Conditions &amp; Walking:</strong>
                    <p>
                      On this painting itinerary we will need to walk a certain distance on well-made but stony tracks. We will be sketching and painting out in the open, mostly sitting on the ground. We will be spending time in the sun and although it's not &lsquo;hot&rsquo; in a Moroccan way, there is not always going to be shade in the exact place we want it.
                    </p>
                    <p>
                      A basic level of health and fitness and an enjoyment of the Great Outdoors is required for this trip. The walks sometimes involve steep inclines and rough tracks, so you should be comfortable with regular walking in a mountain environment.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <strong className="text-[#2e1f18] block text-base">Ski Lifts &amp; High Altitude:</strong>
                    <p>
                      The itinerary involves several ski lift rides, which quickly transport us halfway up mountains with breathtaking views. They are perfectly safe and reliable; however, if you are terrified of heights this is worth considering.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Q: Can my non-painting partner come? */}
            <div className="bg-white rounded-xl border border-[#e8d5cc] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-partner')}
                className="p-5 cursor-pointer hover:bg-[#fdf8f6] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#2e1f18]">
                  Can my non-painting partner come?
                </h3>
                <span className="p-1 rounded-full bg-[#f7ece8] text-[#2e1f18]">
                  {openFaq['q-partner'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-partner'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#f2e2dc] text-sm text-[#5d463e] leading-relaxed">
                  Yes - explicitly, at a discounted rate (£2,500 vs £2,800 standard sharing). Ideal if they enjoy longer hikes, via ferrata, alpine cycling, photography, or WW1 mountain history.
                </div>
              )}
            </div>

            {/* Q: Do I need to be fit? */}
            <div className="bg-white rounded-xl border border-[#e8d5cc] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-fitness')}
                className="p-5 cursor-pointer hover:bg-[#fdf8f6] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#2e1f18]">
                  Do I need to be fit?
                </h3>
                <span className="p-1 rounded-full bg-[#f7ece8] text-[#2e1f18]">
                  {openFaq['q-fitness'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-fitness'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#f2e2dc] text-sm text-[#5d463e] leading-relaxed">
                  A basic level of health and fitness is required - trails are well-made but stony, and some walks involve steep inclines up to vantage points.
                </div>
              )}
            </div>

            {/* Q: Are the ski lift rides scary? */}
            <div className="bg-white rounded-xl border border-[#e8d5cc] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-ski-lifts')}
                className="p-5 cursor-pointer hover:bg-[#fdf8f6] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#2e1f18]">
                  Are the ski lift rides scary?
                </h3>
                <span className="p-1 rounded-full bg-[#f7ece8] text-[#2e1f18]">
                  {openFaq['q-ski-lifts'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-ski-lifts'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#f2e2dc] text-sm text-[#5d463e] leading-relaxed">
                  They are perfectly safe and reliable, providing effortless access to mountain summits. However, if you have a severe fear of heights, please let Mary know beforehand.
                </div>
              )}
            </div>

            {/* Q: How do I book? */}
            <div className="bg-white rounded-xl border border-[#e8d5cc] shadow-sm overflow-hidden">
              <div 
                onClick={() => toggleFaq('q-how-to-book')}
                className="p-5 cursor-pointer hover:bg-[#fdf8f6] transition-colors flex items-center justify-between gap-4 select-none"
              >
                <h3 className="text-base md:text-lg font-serif-title font-bold text-[#2e1f18]">
                  How do I book?
                </h3>
                <span className="p-1 rounded-full bg-[#f7ece8] text-[#2e1f18]">
                  {openFaq['q-how-to-book'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {openFaq['q-how-to-book'] && (
                <div className="px-5 pb-5 pt-1 border-t border-[#f2e2dc] text-sm text-[#5d463e] leading-relaxed">
                  See &ldquo;How to Book&rdquo; below for full step-by-step deposit guidelines, payment terms, and enquiry links.
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 7. YOUR HOST (MARY KING) */}
      <section className="py-14 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-[#f7ece8] p-6 md:p-8 rounded-2xl border border-[#ebd2c9] flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-xs">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" 
            alt="Mary King host and tutor"
            referrerPolicy="no-referrer"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-sm shrink-0"
          />
          <div className="space-y-3 text-center md:text-left">
            <div className="text-xs uppercase font-bold text-[#c85a3a] tracking-wider">
              Artist, Guide &amp; Founder
            </div>
            <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-[#2e1f18]">
              Your host: Mary King
            </h2>
            <p className="text-sm md:text-base text-[#5d463e] leading-relaxed">
              Mary King leads every Dolomite painting holiday in person. With extensive experience painting Alpine wildflower meadows and dramatic limestone crags, Mary offers supportive daily demonstrations, individual guidance, and an encouraging atmosphere for artists of all abilities.
            </p>
            <div className="pt-2">
              <Link
                to="/your-host"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-[#c85a3a] hover:text-[#2e1f18] underline underline-offset-4"
              >
                <span>Read Mary's full story &amp; teaching philosophy →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-14 px-4 md:px-8 bg-[#2e1f18] text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#482e22] text-[#f7b2a0] text-xs font-semibold uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5 text-[#e07a5f]" />
              <span>Guest Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif-title font-bold text-white">
              What guests say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Testimonial 1: Corrine */}
            <div className="p-6 md:p-8 rounded-xl bg-[#3f2920] border border-[#573b2f] space-y-4 flex flex-col justify-between">
              <p className="font-serif-title italic text-base md:text-lg text-[#fceae5] leading-relaxed">
                &ldquo;Mary was fantastic! She is a very gifted teacher, knowing how to encourage her students... a perfect combination of expert advice and diplomacy. I liked the way she would point out problems and struggles she has had, or was having, with her own work, which made us all feel better about our own.&rdquo;
              </p>
              <div className="pt-3 border-t border-[#573b2f] flex items-center justify-between text-xs">
                <div className="font-bold text-white">
                  Corrine, Australia
                </div>
                <div className="text-[#f7b2a0]">
                  Italian Dolomites
                </div>
              </div>
            </div>

            {/* Testimonial 2: Meg */}
            <div className="p-6 md:p-8 rounded-xl bg-[#3f2920] border border-[#573b2f] space-y-4 flex flex-col justify-between">
              <p className="font-serif-title italic text-base md:text-lg text-[#fceae5] leading-relaxed">
                &ldquo;Watercolour painting with Mary was wonderful. Really special days were spent with her. Lovely to have started something new. So encouraging with our efforts!&rdquo;
              </p>
              <div className="pt-3 border-t border-[#573b2f] flex items-center justify-between text-xs">
                <div className="font-bold text-white">
                  Meg, UK
                </div>
                <div className="text-[#f7b2a0]">
                  Italian Dolomites
                </div>
              </div>
            </div>

          </div>

          <div className="text-center pt-2">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f7b2a0] hover:text-white underline underline-offset-4"
            >
              <span>Read more reviews from Scotland, Sri Lanka, Morocco &amp; Greece →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 9. HOW TO BOOK & CONTACT SECTION */}
      <section className="py-16 px-4 md:px-8 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-2xl border border-[#e8d5cc] shadow-sm space-y-6">
          
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fde8e3] text-[#9c381d] text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#e07a5f]" />
              <span>Simple Booking Process</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif-title font-bold text-[#2e1f18]">
              How to Book
            </h2>
          </div>

          <div className="text-base text-[#4a3b34] leading-relaxed space-y-3">
            <p>
              Ready to book, or want to know more? You may reserve a place on any trip with payment of a <strong>10% deposit</strong>. Trips run subject to a minimum number of participants being reached, which will be confirmed before a deposit is taken.
            </p>
            <p>
              For the full step-by-step booking process, payment options and what happens after you enquire, see our <Link to="/how-to-book" className="text-[#c85a3a] font-bold underline underline-offset-4 hover:text-[#2e1f18]">How to Book page</Link>.
            </p>
            <p className="text-xs text-[#78594e]">
              By making your booking you are agreeing to our &lsquo;Terms and Conditions&rsquo; which can be found by clicking <Link to="/terms-and-conditions" className="text-[#c85a3a] underline hover:text-[#2e1f18]">here</Link>.
            </p>
          </div>

          {/* Contact Details Box */}
          <div className="p-5 rounded-xl bg-[#faf1ee] border border-[#ebd2c9] space-y-2 text-sm text-[#5d463e]">
            <div className="font-bold text-[#2e1f18] mb-1">
              Contact information:
            </div>
            <div>
              <strong>Email:</strong> <a href="mailto:hello@sketchingholidays.co.uk" className="text-[#c85a3a] font-medium underline">hello@sketchingholidays.co.uk</a>
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
                className="px-6 py-3 bg-[#2e1f18] hover:bg-[#482e22] text-white rounded-lg transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Full Booking Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact-me"
                className="px-6 py-3 bg-[#f7ece8] hover:bg-[#ebd8d1] text-[#2e1f18] rounded-lg transition-colors border border-[#debdb1] inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

            <button
              onClick={() => onOpenBookModal('italy-dolomites')}
              className="w-full sm:w-auto px-8 py-3 bg-[#e07a5f] hover:bg-[#d0694e] text-white font-bold text-sm rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              Reserve a Place (10% Deposit)
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
