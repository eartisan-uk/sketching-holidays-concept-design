import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Palette, 
  ArrowRight, 
  Sparkles, 
  Heart, 
  MapPin, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Mail,
  GraduationCap
} from 'lucide-react';
import { DESTINATIONS } from '../data/holidaysData';
import { Destination } from '../types';

interface YourHostPageProps {
  onOpenBookModal: (destinationId?: string) => void;
  onSelectDestination?: (destination: Destination) => void;
}

export const YourHostPage: React.FC<YourHostPageProps> = ({ onOpenBookModal, onSelectDestination }) => {
  const navigate = useNavigate();

  // State for Q&A accordion
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({
    'q-experience': true,
    'q-contact': false,
    'q-lead-every-trip': false,
    'q-which-trip': false,
  });

  const toggleFaq = (faqId: string) => {
    setOpenFaq((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const handleDestinationClick = (destSlug: string, destId: string) => {
    if (destId === 'scotland' || destSlug === '/painting-holidays-scotland/') {
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

  const destinationItems = [
    {
      id: 'scotland',
      name: 'Scotland',
      path: '/painting-holidays-scotland/',
      description: 'the far north-west Highlands, where I ran my own gallery for many years.',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
      badge: 'Home Studio Territory'
    },
    {
      id: 'sri-lanka',
      name: 'Sri Lanka',
      path: '/painting-holidays-sri-lanka/',
      description: 'sun-drenched landscapes and a culture that will surprise and delight you.',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=800',
      badge: 'Tropical Light'
    },
    {
      id: 'morocco',
      name: 'Morocco',
      path: '/painting-holidays-morocco/',
      description: 'where the idea for Vistas first took shape, and I still return every year.',
      image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800',
      badge: 'Vistas Birthplace'
    },
    {
      id: 'italy',
      name: 'Italy - the Dolomites',
      path: '/painting-holidays-italy/',
      description: 'Alpine meadows and rock towers unlike anywhere else on Earth.',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
      badge: 'Alpine Majesty'
    },
    {
      id: 'greece',
      name: 'Greece - the Dodecanese',
      path: '/painting-holidays-greece/',
      description: 'island-hopping through history, harbours and warm late-season sun.',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
      badge: 'Aegean Light'
    },
    {
      id: 'canary-islands',
      name: 'Canary Islands',
      path: '/painting-holidays-canary-islands/',
      description: 'La Gomera and La Palma, two volcanic islands, two very different characters.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
      badge: 'Atlantic Sun'
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-[#faf8f5] text-[#2c322b] font-sans-body">
      
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#70826b]">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-[#2c322b]">Your Host</span>
        </div>
      </div>

      {/* 1. HERO / INTRO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-xl border-2 border-[#323d30] shadow-md p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Top Tape Strips */}
          <div className="tape-strip absolute -top-3 left-16 w-32 h-6 rotate-[-1.5deg] z-20 pointer-events-none" />
          <div className="tape-strip absolute -top-3 right-16 w-32 h-6 rotate-[2deg] z-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left: Polaroid Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="polaroid-card p-4 rounded-md border-2 border-[#323d30] bg-[#faf8f5] shadow-lg w-full max-w-sm transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative aspect-4/5 rounded overflow-hidden bg-[#e8e4da] border border-[#d2cbba]">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
                    alt="Mary King - Your Host"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-3 text-center">
                  <p className="font-serif-title font-bold text-xl text-[#1e251c]">Mary King</p>
                  <p className="text-xs text-[#70826b] font-semibold mt-0.5">
                    Artist &amp; Host, Vistas Sketching Holidays
                  </p>
                  <a
                    href="https://www.pictureshack.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#70826b] hover:text-[#4d5c49] underline decoration-[#70826b]/40 mt-2"
                  >
                    <span>www.pictureshack.co.uk</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Quick Credentials Badge */}
              <div className="mt-6 w-full max-w-sm p-4 bg-[#f4f7f2] border border-[#c4cebf] rounded-lg text-xs text-[#384a35] space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#2a3827]">
                  <ShieldCheck className="w-4 h-4 text-[#70826b]" />
                  <span>Host Background &amp; Credentials</span>
                </div>
                <ul className="space-y-1 text-[11px] text-[#4d5c4b]">
                  <li>• BA (Hons) in Illustration</li>
                  <li>• Qualified TEFL teacher</li>
                  <li>• Decades of tourism &amp; hospitality experience</li>
                  <li>• Accompanies &amp; leads every holiday personally</li>
                </ul>
              </div>
            </div>

            {/* Right: Full Narrative Bio */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold">
                <Palette className="w-3.5 h-3.5 text-[#70826b]" />
                <span>Artist &amp; Host</span>
              </div>

              <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e251c] leading-tight">
                Mary King - Your Host
              </h1>

              <div className="space-y-4 text-sm sm:text-base text-[#384336] leading-relaxed">
                <p className="font-medium text-[#20291e]">
                  My name is Mary King and with 'Vistas' sketching and painting holidays I hope to share with you some of my greatest passions: Art and creativity; natural beauty; travel and exploring.
                </p>

                <p>
                  A widely collected landscape artist with a BA (Hons) in Illustration I specialise in pastels, coloured pencils, inks and watercolours, with a particular love of sketching outside.
                </p>

                <p>
                  For many years I ran my own gallery Picture Shack in remote NW Scotland, one of the most beautiful places imaginable and a constant source of inspiration for painters. Wandering spirits can never stay still, however, and looking for a new challenge I discovered Morocco, where I remained for 2 years. During this time the idea for Vistas took shape, originally entitled 'Painted Desert' and focusing solely on painting holidays in Morocco.
                </p>

                <p>
                  On my return to Scotland I began designing and delivering drawing and painting courses in the Highlands, before spending a few months teaching watercolours in the Italian Dolomites which convinced me to resurrect the Sketching Holidays, and expand them to include other areas I love.
                </p>

                <p>
                  When I have time I continue with my own art work, samples of which can be found on my gallery website{' '}
                  <a
                    href="https://www.pictureshack.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#70826b] hover:text-[#4d5c49] underline decoration-[#70826b]/40 hover:decoration-[#70826b] inline-flex items-center gap-1"
                  >
                    <span>www.pictureshack.co.uk</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>.
                </p>

                <p>
                  I have always felt a compulsion to travel and am constantly on the lookout for interesting and beautiful new destinations, although I seem to have run out of months for new holidays - they're all so wonderful I can't bear to decommission any! I enjoy sharing my enthusiasm and knowledge with others as much as I love sitting and painting, although I am always inspired by beautiful landscapes no matter where in the world I find myself.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 border-t border-[#f0ebe0]">
                <button
                  onClick={() => onOpenBookModal()}
                  className="px-6 py-3 bg-[#70826b] text-white rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#5a6a56] shadow-xs transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book with Mary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/contact"
                  className="px-5 py-3 border border-[#323d30] text-[#1e251c] bg-white rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#f5f1e8] transition-all"
                >
                  Contact Mary Directly
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. EXPERT ADVICE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#f4f7f2] rounded-xl border-2 border-[#70826b] p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="tape-strip absolute -top-3 left-12 w-28 h-6 rotate-[-1deg] z-10 pointer-events-none" />

          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-[#70826b]" />
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c]">
              Expert advice
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#324030] leading-relaxed font-sans-body">
            I accompany and lead all the trips and know the areas intimately, while my many years in the tourism / hospitality industry ensure that guests are treated like friends, as many of my clients have become. This combination of local knowledge, approachability and painting expertise ensures you get the holiday experience you deserve: a mixture of surprise, stimulation and comfort.
          </p>
        </div>
      </section>

      {/* 3. THE TEACHING */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-xl border-2 border-[#323d30] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="tape-strip absolute -top-3 right-16 w-32 h-6 rotate-[1.5deg] z-10 pointer-events-none" />

          <div className="mb-4">
            <span className="text-xs uppercase tracking-widest text-[#70826b] font-bold">Philosophy &amp; Voice</span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c] mt-1">
              The teaching
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#384336] leading-relaxed">
            <p className="italic text-[#4a5847] bg-[#f9f7f2] p-4 rounded-md border-l-4 border-[#70826b]">
              I often hear questions such as: <em>Who is this person? Why haven't I heard of her? What does she paint?</em>
            </p>

            <p>
              I can understand the uncertainty involved in booking a painting holiday with someone whose style and approach may be unknown, or different from what you're used to. Many artists lead holidays with the aim of showing their students how to paint the way that they do, in their particular style, and plenty of clients are looking for this.
            </p>

            <div className="my-4 p-5 bg-[#f0ece1] rounded-lg border border-[#ded7c8]">
              <p className="font-serif-title font-bold text-lg sm:text-xl text-[#243022] leading-snug">
                "I tend to have a rather more holistic approach. You may - or may not - like and admire my style. It possibly helps if you do, but it's not the most important thing. My aim is not to teach you how to paint like me. My aim is to help you paint like you."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HELP ON HAND */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-xl border-2 border-[#323d30] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="tape-strip absolute -top-3 left-16 w-32 h-6 rotate-[-1deg] z-10 pointer-events-none" />

          <div className="mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#70826b]" />
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c]">
              Help on hand
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#384336] leading-relaxed">
            <p>
              I have taught people who have never so much as lifted a pencil and while I initially show them the way that I approach things, I always marvel at how quickly they start to find their own voice, which I wholeheartedly encourage. While imitation is, of course, the sincerest form of flattery (so they say), I am not looking for hordes of little disciples. I prefer happy and confident sketchers singing their own song. After all, expecting to adopt the exact painting style of your favourite artist is like trying to forge someone's handwriting. It's nigh on impossible: it's always going to be subtly different.
            </p>

            <p>
              If you're a beginner, I'll help you get started, then let you do you, with as much ongoing support as you need. If that sounds as if I take your learning casually, you are mistaken. You can rest assured I have years of teaching experience behind me; I'm also a qualified TEFL teacher!
            </p>

            <p>
              Experienced painters are free to go in their own direction as far as they want to although almost everyone can benefit from seeing things through another's eyes and, perhaps, learn a new medium or technique - including me!
            </p>
          </div>
        </div>
      </section>

      {/* 5. WHERE I LEAD SKETCHING HOLIDAYS [NEW] */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-[#70826b]" />
            <span>Destinations &amp; Itineraries</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1e251c]">
            Where I lead sketching holidays
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#525d4f] max-w-xl mx-auto">
            Six distinctive regions personally curated, scoped, and led every year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleDestinationClick(item.path, item.id)}
              className="group bg-white rounded-xl border-2 border-[#323d30] overflow-hidden shadow-xs hover:border-[#70826b] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-[#e8e4da] border-b border-[#323d30]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-[#70826b] text-white">
                  {item.badge}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-title font-bold text-lg text-[#1e251c] group-hover:text-[#70826b] transition-colors flex items-center justify-between">
                    <span>{item.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#70826b]" />
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4d5749] mt-2 leading-relaxed">
                    - {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#f0ebe0] flex items-center justify-between text-xs font-bold text-[#70826b]">
                  <span>Explore Itinerary</span>
                  <span className="text-[11px] font-normal text-[#6c7667]">View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Upcoming Departures CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/#upcoming-trips"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#70826b] hover:bg-[#5a6a56] text-white rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <span>See all upcoming departures</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. QUESTIONS PEOPLE ASK ABOUT BOOKING WITH ME [NEW] */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#70826b]" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-serif-title text-3xl font-bold text-[#1e251c]">
            Questions People Ask About Booking With Me
          </h2>
        </div>

        <div className="space-y-4">
          
          {/* Q1 */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-experience')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>Do I need to be an experienced artist to come on one of your trips?</span>
              {openFaq['q-experience'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-experience'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  <strong>No</strong> - as above, I help beginners find their own starting point, and every itinerary builds in as much or as little guidance as you need. See each{' '}
                  <Link to="/painting-holidays-scotland/" className="font-bold text-[#70826b] underline decoration-[#70826b]/40 hover:text-[#4d5c49]">
                    destination page (such as Scotland)
                  </Link>{' '}
                  for what specifically suits beginners on that trip.
                </p>
              </div>
            )}
          </div>

          {/* Q2 */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-contact')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>Can I contact you directly before booking?</span>
              {openFaq['q-contact'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-contact'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  <strong>Yes</strong> - see{' '}
                  <Link to="/contact" className="font-bold text-[#70826b] underline decoration-[#70826b]/40 hover:text-[#4d5c49]">
                    Contact Me
                  </Link>{' '}
                  or ask a question via any destination page's enquiry link.
                </p>
              </div>
            )}
          </div>

          {/* Q3 */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-lead-every-trip')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>Do you lead every trip yourself?</span>
              {openFaq['q-lead-every-trip'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-lead-every-trip'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  <strong>Yes</strong> - I accompany and lead every holiday personally, as above.
                </p>
              </div>
            )}
          </div>

          {/* Q4 */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-which-trip')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>I'm still not sure which trip is right for me.</span>
              {openFaq['q-which-trip'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-which-trip'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  That's normal with six destinations to choose from.{' '}
                  <Link to="/contact" className="font-bold text-[#70826b] underline decoration-[#70826b]/40 hover:text-[#4d5c49]">
                    Get in touch
                  </Link>{' '}
                  and I'll help you decide, or browse the{' '}
                  <Link to="/faqs" className="font-bold text-[#70826b] underline decoration-[#70826b]/40 hover:text-[#4d5c49]">
                    FAQs
                  </Link>{' '}
                  for more on how the different trip types work.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Direct Booking / Message CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#73846f] text-white p-8 sm:p-10 rounded-xl shadow-md border-2 border-[#323d30] relative overflow-hidden">
          <div className="tape-strip absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-6 rotate-[-0.5deg] z-10 pointer-events-none" />

          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold mb-3">
            Ready to Paint with Mary?
          </h2>
          <p className="text-sm sm:text-base text-[#e8f0e6] mb-6 max-w-lg mx-auto leading-relaxed">
            Join Mary in person across Scotland, Morocco, Sri Lanka, the Italian Dolomites, Greece, or the Canary Islands.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenBookModal()}
              className="px-6 py-3 bg-white text-[#2c3829] font-bold text-xs uppercase tracking-wider rounded shadow-md hover:bg-[#faf8f5] transition-all cursor-pointer"
            >
              Book Your Place
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/15 border border-white/40 text-white font-semibold text-xs uppercase tracking-wider rounded hover:bg-white/25 transition-all"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
