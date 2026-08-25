import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  HelpCircle, 
  BookOpen, 
  User, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { DESTINATIONS } from '../data/holidaysData';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({
    'q-reply-time': true,
    'q-include-in-msg': false,
    'q-whatsapp': false,
    'q-specific-trip': false,
  });

  const toggleFaq = (faqId: string) => {
    setOpenFaq((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 bg-[#faf8f5] text-[#2c322b] font-sans-body">
      
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#70826b]">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-[#2c322b]">Contact Me</span>
        </div>
      </div>

      {/* 1. HERO / INTRO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-xl border-2 border-[#323d30] shadow-md p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="tape-strip absolute -top-3 left-12 w-32 h-6 rotate-[-1.5deg] z-20 pointer-events-none" />
          <div className="tape-strip absolute -top-3 right-12 w-32 h-6 rotate-[1.5deg] z-20 pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-4">
              <MessageSquare className="w-3.5 h-3.5 text-[#70826b]" />
              <span>Get in Touch with Mary King</span>
            </div>

            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e251c] leading-tight mb-6">
              Contact Me
            </h1>

            {/* Direct Contact Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              
              {/* Email Card */}
              <div className="p-4 bg-[#f8f6f0] border border-[#d6cfbe] rounded-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#70826b] mb-1.5">
                  <Mail className="w-4 h-4" />
                  <span>Email Addresses</span>
                </div>
                <div className="space-y-1 text-sm font-semibold text-[#1e251c]">
                  <div>
                    <a href="mailto:hello@sketchingholidays.co.uk" className="hover:text-[#70826b] hover:underline">
                      hello@sketchingholidays.co.uk
                    </a>
                  </div>
                  <div className="text-xs font-normal text-[#5a6556]">or</div>
                  <div>
                    <a href="mailto:maryking.lochinver@gmail.com" className="hover:text-[#70826b] hover:underline">
                      maryking.lochinver@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone / Mobile Card */}
              <div className="p-4 bg-[#f8f6f0] border border-[#d6cfbe] rounded-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#70826b] mb-1.5">
                  <Phone className="w-4 h-4" />
                  <span>Mobile &amp; WhatsApp</span>
                </div>
                <div className="text-sm font-semibold text-[#1e251c]">
                  <a href="tel:+447982812842" className="hover:text-[#70826b] hover:underline">
                    +44 (0)798 281 2842
                  </a>
                </div>
                <p className="text-xs text-[#5a6556] mt-1 leading-relaxed">
                  (active only when I am in the UK; active via WhatsApp when abroad)
                </p>
              </div>

            </div>

            {/* Notice Callout */}
            <div className="p-4 bg-[#f4f7f2] border-l-4 border-[#70826b] rounded-r-md text-xs sm:text-sm text-[#384a36] leading-relaxed flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#70826b] shrink-0 mt-0.5" />
              <p>
                If you use the Contact Form and do not receive a reply within 5 days, please send an email instead, in case of intermittent technical glitches. I always reply to genuine messages, so if I don't, I have not received your query.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BEFORE YOU GET IN TOUCH [NEW] */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#faf8f5] rounded-xl border-2 border-[#70826b] p-6 sm:p-10 relative shadow-xs">
          <div className="tape-strip absolute -top-3 left-16 w-32 h-6 rotate-[-1deg] z-10 pointer-events-none" />

          <div className="mb-4">
            <span className="text-xs uppercase tracking-widest text-[#70826b] font-bold">Helpful Resources</span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c] mt-1">
              Before you get in touch
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#384336] leading-relaxed mb-6">
            A lot of common questions are already answered on the site - you might find what you need faster here:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            
            {/* Guide Card 1 */}
            <div className="bg-white p-5 rounded-lg border border-[#323d30] flex flex-col justify-between shadow-2xs hover:border-[#70826b] transition-colors">
              <div>
                <div className="flex items-center gap-2 font-serif-title font-bold text-base text-[#1e251c] mb-2">
                  <HelpCircle className="w-4 h-4 text-[#70826b]" />
                  <span>Choosing Your Trip</span>
                </div>
                <p className="text-xs text-[#4e584a] leading-relaxed">
                  <strong>Not sure which trip is right for you?</strong> See the{' '}
                  <Link to="/faqs" className="text-[#70826b] font-bold underline decoration-[#70826b]/40 hover:text-[#4d5c49]">
                    FAQs
                  </Link>{' '}
                  for how the different holiday types work, or browse all{' '}
                  <Link to="/painting-holidays-scotland/" className="text-[#70826b] font-bold underline decoration-[#70826b]/40 hover:text-[#4d5c49]">
                    destinations
                  </Link>{' '}
                  directly.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f0ebe0]">
                <Link to="/faqs" className="text-xs font-bold text-[#70826b] hover:underline">
                  Browse FAQs →
                </Link>
              </div>
            </div>

            {/* Guide Card 2 */}
            <div className="bg-white p-5 rounded-lg border border-[#323d30] flex flex-col justify-between shadow-2xs hover:border-[#70826b] transition-colors">
              <div>
                <div className="flex items-center gap-2 font-serif-title font-bold text-base text-[#1e251c] mb-2">
                  <BookOpen className="w-4 h-4 text-[#70826b]" />
                  <span>How Booking Works</span>
                </div>
                <p className="text-xs text-[#4e584a] leading-relaxed">
                  <strong>Want to know how booking works?</strong> See{' '}
                  <Link to="/how-to-book/" className="text-[#70826b] font-bold underline decoration-[#70826b]/40 hover:text-[#4d5c49]">
                    How to Book
                  </Link>{' '}
                  for deposit and payment details, cancellation policies, and booking timelines.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f0ebe0]">
                <Link to="/how-to-book/" className="text-xs font-bold text-[#70826b] hover:underline">
                  Booking Process Details →
                </Link>
              </div>
            </div>

            {/* Guide Card 3 */}
            <div className="bg-white p-5 rounded-lg border border-[#323d30] flex flex-col justify-between shadow-2xs hover:border-[#70826b] transition-colors">
              <div>
                <div className="flex items-center gap-2 font-serif-title font-bold text-base text-[#1e251c] mb-2">
                  <User className="w-4 h-4 text-[#70826b]" />
                  <span>Host &amp; Fellow Guests</span>
                </div>
                <p className="text-xs text-[#4e584a] leading-relaxed">
                  <strong>Curious who you'd be travelling with?</strong> Meet your host,{' '}
                  <Link to="/your-host/" className="text-[#70826b] font-bold underline decoration-[#70826b]/40 hover:text-[#4d5c49]">
                    Mary King
                  </Link>, or read what past guests say on{' '}
                  <Link to="/testimonials/" className="text-[#70826b] font-bold underline decoration-[#70826b]/40 hover:text-[#4d5c49]">
                    Testimonials
                  </Link>.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f0ebe0]">
                <Link to="/your-host/" className="text-xs font-bold text-[#70826b] hover:underline">
                  Meet Mary King →
                </Link>
              </div>
            </div>

          </div>

          <p className="text-xs sm:text-sm text-[#4d594b] italic border-t border-[#e2dcce] pt-4">
            Still have a question, or ready to enquire about a specific trip? Use the form below, or contact me directly using the details above.
          </p>
        </div>
      </section>

      {/* 3. QUICK ANSWERS BEFORE YOU MESSAGE [NEW] */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#70826b]" />
            <span>Common Queries</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c]">
            Quick Answers Before You Message
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          
          {/* Q1 */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-reply-time')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>How quickly will I hear back?</span>
              {openFaq['q-reply-time'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-reply-time'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  I aim to reply promptly; if you haven't heard back within 5 days, please email directly in case of a technical glitch - see above.
                </p>
              </div>
            )}
          </div>

          {/* Q2 */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-include-in-msg')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>What should I include in my message?</span>
              {openFaq['q-include-in-msg'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-include-in-msg'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  Which trip (and ideally which departure date) you're interested in, group size if you're booking for more than yourself, and any specific questions about fitness, walking, or bringing a non-painting partner.
                </p>
              </div>
            )}
          </div>

          {/* Q3 */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-whatsapp')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>Can I message you on WhatsApp instead?</span>
              {openFaq['q-whatsapp'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-whatsapp'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  <strong>Yes</strong> - the mobile number above (+44 (0)798 281 2842) is active via WhatsApp when I'm not in the UK.
                </p>
              </div>
            )}
          </div>

          {/* Q4 */}
          <div className="bg-white rounded-lg border-2 border-[#323d30] overflow-hidden shadow-xs">
            <button
              onClick={() => toggleFaq('q-specific-trip')}
              className="w-full p-5 text-left font-serif-title font-bold text-base sm:text-lg text-[#1e251c] flex items-center justify-between bg-[#faf8f5] hover:bg-[#f2eee6] transition-colors cursor-pointer"
            >
              <span>I want to ask about a specific trip, not a general question.</span>
              {openFaq['q-specific-trip'] ? <ChevronUp className="w-5 h-5 text-[#70826b]" /> : <ChevronDown className="w-5 h-5 text-[#70826b]" />}
            </button>
            {openFaq['q-specific-trip'] && (
              <div className="p-5 border-t border-[#ebd8c6] text-sm sm:text-base text-[#384336] leading-relaxed">
                <p>
                  Each destination page has its own "Enquire Now" link that pre-fills the subject with that trip's name, which helps me reply faster - using one of those instead of this general form is the quickest route if you already know which trip you're interested in.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 4. CONTACT FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border-2 border-[#323d30] shadow-md p-6 sm:p-10 relative">
          <div className="tape-strip absolute -top-3.5 left-10 w-28 h-6 rotate-[-1deg] z-20 pointer-events-none" />

          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#70826b]/20 text-[#70826b] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c]">
                Thank You for Your Message!
              </h3>
              <p className="text-sm sm:text-base text-[#3d463b] max-w-md mx-auto leading-relaxed">
                Your message has been sent to Mary King. You will receive a personal reply promptly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: '',
                      message: ''
                    });
                  }}
                  className="px-6 py-3 bg-[#70826b] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#5a6a56] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1e251c]">
                  Send a Message
                </h2>
                <p className="text-xs sm:text-sm text-[#546050] mt-1">
                  Fill in the details below and Mary will get in touch with you directly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-[#2c322b] uppercase tracking-wider mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-2.5 text-sm bg-[#faf8f5] border border-[#323d30] rounded-md focus:outline-none focus:ring-1 focus:ring-[#70826b]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-[#2c322b] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 text-sm bg-[#faf8f5] border border-[#323d30] rounded-md focus:outline-none focus:ring-1 focus:ring-[#70826b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Telephone */}
                <div>
                  <label className="block text-xs font-bold text-[#2c322b] uppercase tracking-wider mb-1.5">
                    Telephone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+44 798 281 2842"
                    className="w-full px-4 py-2.5 text-sm bg-[#faf8f5] border border-[#323d30] rounded-md focus:outline-none focus:ring-1 focus:ring-[#70826b]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-[#2c322b] uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Scottish Highlands June Trip Enquiry"
                    className="w-full px-4 py-2.5 text-sm bg-[#faf8f5] border border-[#323d30] rounded-md focus:outline-none focus:ring-1 focus:ring-[#70826b]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#2c322b] uppercase tracking-wider mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please include which trip and dates you are interested in, group size, and any specific questions..."
                  className="w-full px-4 py-3 text-sm bg-[#faf8f5] border border-[#323d30] rounded-md focus:outline-none focus:ring-1 focus:ring-[#70826b] resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#70826b] text-white font-bold text-xs uppercase tracking-wider rounded-md hover:bg-[#5a6a56] transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-99"
              >
                <Send className="w-4 h-4" />
                <span>Submit</span>
              </button>
            </form>
          )}

        </div>
      </section>

    </div>
  );
};
