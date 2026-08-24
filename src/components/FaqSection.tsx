import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ExternalLink, MessageCircle, X } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need prior drawing or painting experience to join?',
    answer: 'Not at all! Our sketching holidays are warmly designed for all ability levels — from complete beginners picking up a brush or pencil for the very first time, to experienced painters seeking fresh inspiration and scenic locations. Mary tailors her daily advice and demonstrations to each guest’s individual skill and pace in a relaxed, non-competitive setting.',
  },
  {
    id: 'faq-2',
    question: 'What art materials and equipment should I bring?',
    answer: 'We recommend traveling light with a compact, portable plein-air sketching kit. Essentials include a quality watercolor sketchbook (A4 or A5 with 300gsm paper), a compact pan set of artist watercolours, water-brushes or round travel brushes, waterproof fineliners (0.3 / 0.5), a 2B pencil, putty eraser, and a lightweight folding stool. Upon booking, we provide a complete packing guide and recommended supplier list.',
  },
  {
    id: 'faq-3',
    question: 'What is included in the price of the holiday?',
    answer: 'Our holiday packages typically include all boutique accommodations in hand-selected hotels or villas, daily breakfasts and several gourmet group dinners featuring regional cuisine, daily structured art tuition and personalized feedback from Mary King, private group transport to picturesque painting locations, and welcome drinks. International flights and personal travel insurance are arranged independently.',
  },
  {
    id: 'faq-4',
    question: 'How large are the groups and what is the daily rhythm?',
    answer: 'To ensure an intimate and supportive atmosphere with ample one-on-one attention, group sizes are strictly limited to 8–12 guests. A typical day begins with breakfast followed by a morning plein-air session with a live demonstration. After a relaxed lunch and free time to explore, we hold an afternoon sketching session, finishing the day with an encouraging group sketchbook review over drinks.',
  },
  {
    id: 'faq-5',
    question: 'Are non-painting partners or companions welcome to come?',
    answer: 'Yes, absolutely! Non-painting partners are very warmly welcomed on all our trips. While painters are sketching, non-painters can enjoy hiking scenic trails, exploring historical towns, visiting local wineries and markets, or simply relaxing at the accommodation. Non-painters join the entire group for all excursions, meals, and social evenings.',
  },
];

const ADDITIONAL_FAQS: FAQItem[] = [
  {
    id: 'faq-6',
    question: 'What happens if it rains or weather is poor?',
    answer: 'We always have covered and sheltered sketching alternatives ready! From picturesque historic loggias, village cafes, and greenhouse conservatories to cozy indoor studio sessions focusing on color mixing and still life, rainy spells turn into wonderful sketching opportunities.',
  },
  {
    id: 'faq-7',
    question: 'How much walking and physical fitness is involved?',
    answer: 'Our painting locations are selected for easy accessibility. Most days involve gentle walking over cobblestone streets, garden paths, or short distances from our private transport. We recommend comfortable walking shoes. If you have mobility concerns, please let us know when enquiring.',
  },
  {
    id: 'faq-8',
    question: 'How do I reserve my place and what is the payment structure?',
    answer: 'You can reserve your room with a 20% deposit. The remaining balance is payable 8 weeks before departure. We accept bank transfers and major credit cards securely. Because spaces are limited to 10-12 guests, early booking is recommended.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [modalOpen, setModalOpen] = useState(false);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 bg-[#faf8f5] border-t border-[#e8e4da] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#70826b]" />
            <span className="font-handwriting text-base">Questions & Answers</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e251c]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#525d4f] font-sans-body">
            Everything you need to know about our sketching holidays, daily tuition, materials, and accommodations.
          </p>
        </div>

        {/* 5 FAQ Accordion Cards */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 hover:bg-[#faf8f5] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-serif-title text-base font-bold text-[#70826b] w-6 shrink-0">
                      0{index + 1}.
                    </span>
                    <span className="font-serif-title text-lg sm:text-xl font-bold text-[#1e251c]">
                      {faq.question}
                    </span>
                  </div>

                  <div className="p-1 rounded-full bg-[#f2ede4] text-[#2c322b] shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#70826b]" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#4b5449] font-sans-body leading-relaxed border-t border-[#f2ede4] bg-[#fdfcfb]">
                    <p className="pl-9">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to more FAQs */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#70826b] hover:text-[#4d5c49] underline decoration-[#70826b]/40 underline-offset-4 hover:decoration-[#70826b] transition-all"
          >
            <span>Have more questions? Read our Full FAQ & Travel Guide</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Complete FAQs Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-xl border-2 border-[#323d30] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#f2ede4] hover:bg-[#e2ded4] text-[#1e251c] transition-colors"
              aria-label="Close FAQs modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#70826b] mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>Comprehensive Guest Information</span>
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c] mb-6">
              All Frequently Asked Questions
            </h3>

            <div className="space-y-6 text-sm text-[#3d463b] font-sans-body">
              {[...FAQS, ...ADDITIONAL_FAQS].map((item, idx) => (
                <div key={item.id} className="border-b border-[#eeeae0] pb-5">
                  <h4 className="font-serif-title text-base font-bold text-[#1e251c] mb-2 flex items-start gap-2">
                    <span className="text-[#70826b] shrink-0 font-sans-body">{idx + 1}.</span>
                    <span>{item.question}</span>
                  </h4>
                  <p className="pl-5 text-[#4a5547] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-[#e8e4da] flex items-center justify-between">
              <span className="text-xs text-[#6e7769]">Still have questions? Email info@vistas-sketching.com</span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 bg-[#70826b] text-white rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#5a6a56] transition-colors"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
