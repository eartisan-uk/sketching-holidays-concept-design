import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, Search, Mail, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FAQS_DATA, FAQ_CATEGORIES, FaqItem } from '../data/faqData';

export const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All FAQs');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true,
    'faq-3': true
  });

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((faq) => {
      const matchesCategory = activeCategory === 'All FAQs' || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-16 bg-[#faf8f5]">
      
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#70826b]">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-[#2c322b]">Frequently Asked Questions</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#70826b]" />
          <span>Travel & Workshop Information</span>
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl font-bold text-[#1e251c]">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-base text-[#525d4f] font-sans-body max-w-xl mx-auto">
          Everything you need to know about our sketching holidays, daily tuition, packing materials, group sizes, and booking terms.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border-2 border-[#323d30] shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#70826b] text-white shadow-xs'
                    : 'bg-[#f4f1e9] text-[#3d463b] hover:bg-[#e4ded4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#70826b] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#faf8f5] border border-[#323d30] rounded-md focus:outline-none focus:ring-1 focus:ring-[#70826b]"
            />
          </div>

        </div>
      </div>

      {/* FAQ Accordion List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 mb-16">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-[#323d30]">
            <p className="text-base text-[#525d4f]">No questions found matching your search.</p>
            <button
              onClick={() => {
                setActiveCategory('All FAQs');
                setSearchQuery('');
              }}
              className="mt-2 text-xs font-bold text-[#70826b] underline"
            >
              Show all FAQs
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openFaqIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-lg border-2 border-[#323d30] shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-[#faf8f5] transition-colors"
                >
                  <div>
                    <span className="text-[11px] font-bold text-[#70826b] uppercase tracking-wider block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#1e251c]">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-1.5 rounded-full bg-[#f4f1e9] text-[#2c322b] transition-transform duration-300 shrink-0 mt-1 ${isOpen ? 'rotate-180 bg-[#70826b] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-[#3d463b] font-sans-body leading-relaxed border-t border-[#f2ede4] pt-4 bg-[#fdfbf7]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* Still Have Questions Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#73846f] text-white p-8 sm:p-10 rounded-xl shadow-md border-2 border-[#323d30] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-title text-2xl font-bold mb-2">
              Have a question not covered here?
            </h3>
            <p className="text-sm text-[#e8f0e6] max-w-md">
              Mary and the Vistas team are always happy to chat about workshop dates, materials, or custom arrangements.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 bg-white text-[#2c3829] font-bold text-xs uppercase tracking-wider rounded shadow-md hover:bg-[#faf8f5] transition-all shrink-0 flex items-center gap-2"
          >
            <span>Ask A Question</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
};
