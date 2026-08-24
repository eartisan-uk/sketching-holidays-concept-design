import React from 'react';
import { Instagram, Facebook, Compass, Heart } from 'lucide-react';
import { ResponsibleTravelLogo } from './ResponsibleTravelLogo';

interface FooterProps {
  onSelectTab: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const handleNav = (id: string) => {
    onSelectTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#faf8f5] border-t border-[#e2ded4] pt-10 pb-8 text-[#505a4e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Navigation Links matching screenshot */}
        <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium">
          <button onClick={() => handleNav('hero')} className="hover:text-[#2c322b] transition-colors">
            Home
          </button>
          <button onClick={() => handleNav('destinations')} className="hover:text-[#2c322b] transition-colors">
            Destinations
          </button>
          <button onClick={() => handleNav('upcoming-trips')} className="hover:text-[#2c322b] transition-colors">
            Holidays
          </button>
          <button onClick={() => handleNav('your-host')} className="hover:text-[#2c322b] transition-colors">
            Your Host
          </button>
          <button onClick={() => handleNav('blog')} className="hover:text-[#2c322b] transition-colors">
            Blog
          </button>
          <button onClick={() => handleNav('faqs')} className="hover:text-[#2c322b] transition-colors">
            FAQs
          </button>
          <button onClick={() => handleNav('contact')} className="hover:text-[#2c322b] transition-colors">
            Contact
          </button>
        </nav>

        {/* Responsible Travel Partner Seal in Footer */}
        <div className="flex justify-center items-center pt-2">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md border border-[#c5cebf] bg-[#f2f5f0] shadow-2xs">
            <ResponsibleTravelLogo className="h-7 w-auto" color="#323d30" />
            <span className="text-[11px] font-sans-body text-[#4a5548] border-l border-[#c5cebf] pl-3">
              Official Sustainable Travel Partner
            </span>
          </div>
        </div>

        {/* Social Icons matching screenshot */}
        <div className="flex justify-center items-center gap-4">
          <a
            href="#instagram"
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 rounded-full border border-[#c8c2b4] flex items-center justify-center text-[#424e3f] hover:bg-[#70826b] hover:text-white hover:border-[#70826b] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="#facebook"
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 rounded-full border border-[#c8c2b4] flex items-center justify-center text-[#424e3f] hover:bg-[#70826b] hover:text-white hover:border-[#70826b] transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="#pinterest"
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 rounded-full border border-[#c8c2b4] flex items-center justify-center text-[#424e3f] hover:bg-[#70826b] hover:text-white hover:border-[#70826b] transition-colors"
            aria-label="Pinterest"
          >
            <Compass className="w-4 h-4" />
          </a>
        </div>

        {/* Decorative Divider & Copyright */}
        <div className="pt-4 border-t border-[#ebd8c6]/60 text-xs text-[#788276] font-sans-body">
          <p>© 2026 Vistas Sketching Holidays. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
