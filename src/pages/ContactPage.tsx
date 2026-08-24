import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/holidaysData';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'General Enquiry',
    guests: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 bg-[#faf8f5]">
      
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#70826b]">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-[#2c322b]">Contact & Enquiries</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef2ec] border border-[#c4cebf] text-[#3d4a3a] text-xs font-semibold mb-3">
          <MessageSquare className="w-3.5 h-3.5 text-[#70826b]" />
          <span>Get in Touch with Mary</span>
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl font-bold text-[#1e251c]">
          Contact & Enquiries
        </h1>
        <p className="mt-3 text-base text-[#525d4f] font-sans-body max-w-xl mx-auto">
          Whether you have a question about our sketching retreats, want to discuss materials, or wish to arrange a private group, we’d love to hear from you.
        </p>
      </div>

      {/* Main Grid: Form + Info Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border-2 border-[#323d30] shadow-md p-6 sm:p-10 relative">
            <div className="tape-strip absolute -top-3.5 left-10 w-28 h-6 rotate-[-1deg] z-20 pointer-events-none" />

            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#70826b]/20 text-[#70826b] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif-title text-2xl font-bold text-[#1e251c]">
                  Thank You for Your Message!
                </h3>
                <p className="text-sm text-[#3d463b] max-w-md mx-auto leading-relaxed">
                  We have received your enquiry. Mary or a member of the Vistas team will get back to you within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        destination: 'General Enquiry',
                        guests: '1',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 bg-[#70826b] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#5a6a56] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-serif-title text-2xl font-bold text-[#1e251c] mb-2">
                  Send a Message
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2c322b] uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-2.5 text-xs bg-[#faf8f5] border border-[#323d30] rounded-md focus:outline-none focus:ring-1 focus:ring-[#70826b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2c322b] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full px-4 py-2.5 text-xs bg-[#faf8f5] border border-[#323d30] rounded-md focus:outline-none focus:ring-1 focus:ring-[#70826b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2c322b] uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7700 900000"
                      className="w-full px-4 py-2.5 text-xs bg-[#faf8f5] border border-[#323d30] rounded-md focus:outline-none focus:ring-1 focus:ring-[#70826b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2c322b] uppercase tracking-wider mb-1.5">
                      Trip of Interest
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-[#faf8f5] border border-[#323d30] rounded-md focus:outline-none focus:ring-1 focus:ring-[#70826b]"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      {DESTINATIONS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} ({d.country})
                        </option>
                      ))}
                      <option value="Private Group Request">Private Group / Custom Dates</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2c322b] uppercase tracking-wider mb-1.5">
                    How can we help you? *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your art experience, questions on specific departure dates, or any special requirements..."
                    className="w-full px-4 py-3 text-xs bg-[#faf8f5] border border-[#323d30] rounded-md focus:outline-none focus:ring-1 focus:ring-[#70826b] resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#70826b] text-white font-bold text-xs uppercase tracking-wider rounded-md hover:bg-[#5a6a56] transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Your Enquiry</span>
                </button>
              </form>
            )}

          </div>

          {/* Right: Contact Information & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white rounded-xl border-2 border-[#323d30] shadow-xs p-6 sm:p-8 space-y-6">
              <h3 className="font-serif-title text-xl font-bold text-[#1e251c]">
                Direct Contacts
              </h3>

              <div className="space-y-4">
                
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-full bg-[#eef2ec] text-[#70826b] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#70826b] uppercase tracking-wider block">
                      Email Us
                    </span>
                    <a
                      href="mailto:info@vistas-sketching.com"
                      className="text-sm font-semibold text-[#1e251c] hover:underline"
                    >
                      info@vistas-sketching.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-full bg-[#eef2ec] text-[#70826b] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#70826b] uppercase tracking-wider block">
                      Phone & WhatsApp
                    </span>
                    <a
                      href="tel:+447700900123"
                      className="text-sm font-semibold text-[#1e251c] hover:underline"
                    >
                      +44 (0) 7700 900123
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-full bg-[#eef2ec] text-[#70826b] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#70826b] uppercase tracking-wider block">
                      Response Times
                    </span>
                    <p className="text-xs text-[#4b5449]">
                      Monday – Friday, 9:00 AM – 5:30 PM GMT.<br />
                      We respond to all emails within 24 hours.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Note from Mary Card */}
            <div className="bg-[#f0ece1] rounded-xl border border-[#323d30] p-6 text-xs text-[#3d463b] leading-relaxed relative">
              <p className="font-handwriting text-base font-bold text-[#70826b] mb-1">
                A Note from Mary:
              </p>
              <p>
                "If you are feeling nervous about your painting ability or traveling solo, please don’t hesitate to reach out. I am always happy to answer your questions and reassure you before you book!"
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
