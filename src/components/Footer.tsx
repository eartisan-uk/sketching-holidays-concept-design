import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Compass } from 'lucide-react';
import { ResponsibleTravelLogo } from './ResponsibleTravelLogo';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (targetPath: string) => {
    if (targetPath.startsWith('/#')) {
      const sectionId = targetPath.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(targetPath);
      }
    } else {
      navigate(targetPath);
    }
  };

  return (
    <footer className="bg-[#faf8f5] border-t border-[#e2ded4] pt-10 pb-8 text-[#505a4e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium">
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="hover:text-[#2c322b] transition-colors"
          >
            Home
          </Link>
          <button
            onClick={() => handleNav('/#destinations')}
            className="hover:text-[#2c322b] transition-colors cursor-pointer"
          >
            Destinations
          </button>
          <Link to="/painting-holidays-scotland" className="hover:text-[#2c322b] transition-colors">
            Scotland
          </Link>
          <Link to="/painting-holidays-sri-lanka" className="hover:text-[#2c322b] transition-colors">
            Sri Lanka
          </Link>
          <button
            onClick={() => handleNav('/#upcoming-trips')}
            className="hover:text-[#2c322b] transition-colors cursor-pointer"
          >
            Holidays
          </button>
          <Link to="/your-host" className="hover:text-[#2c322b] transition-colors">
            Your Host
          </Link>
          <Link to="/testimonials" className="hover:text-[#2c322b] transition-colors">
            Testimonials
          </Link>
          <Link to="/blog" className="hover:text-[#2c322b] transition-colors">
            Blog
          </Link>
          <Link to="/faqs" className="hover:text-[#2c322b] transition-colors">
            FAQs
          </Link>
          <Link to="/contact" className="hover:text-[#2c322b] transition-colors">
            Contact
          </Link>
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

        {/* Social Icons */}
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
