import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Palette, Menu, X, ChevronDown, Compass, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenBookModal: (destinationId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBookModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDestDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDestDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isDestinationsActive = 
    location.pathname.startsWith('/painting-holidays-scotland') ||
    location.pathname.startsWith('/scotland') ||
    location.pathname.startsWith('/painting-holidays-sri-lanka') ||
    location.pathname.startsWith('/sri-lanka');

  const navItems = [
    { id: 'holidays', label: 'Holidays', path: '/#upcoming-trips' },
    { id: 'your-host', label: 'Your Host', path: '/your-host' },
    { id: 'testimonials', label: 'Testimonials', path: '/testimonials' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'faqs', label: 'FAQs', path: '/faqs' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    setDestDropdownOpen(false);

    if (path.startsWith('/#')) {
      const sectionId = path.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(path);
      }
    } else {
      navigate(path);
    }
  };

  const isItemActive = (item: typeof navItems[0]) => {
    if (item.path === '/your-host' && location.pathname.startsWith('/your-host')) return true;
    if (item.path === '/testimonials' && location.pathname.startsWith('/testimonials')) return true;
    if (item.path === '/blog' && location.pathname.startsWith('/blog')) return true;
    if (item.path === '/faqs' && location.pathname.startsWith('/faqs')) return true;
    if (item.path === '/contact' && location.pathname.startsWith('/contact')) return true;
    return false;
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-xs border-b border-[#e2ded4]' 
          : 'bg-[#faf8f5] border-b border-[#ebd7c2]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          to="/"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 group text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#70826b]/15 flex items-center justify-center text-[#42503d] group-hover:bg-[#70826b] group-hover:text-white transition-all duration-300">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif-title text-2xl font-bold tracking-tight text-[#2c322b] block leading-none">
              Vistas Sketching Holidays
            </span>
            <span className="font-handwriting text-xs text-[#6e786b] tracking-wide">
              Guided Art Journeys Worldwide
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7">
          
          {/* Destinations Dropdown */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDestDropdownOpen(true)}
            onMouseLeave={() => setDestDropdownOpen(false)}
          >
            <button
              onClick={() => setDestDropdownOpen(!destDropdownOpen)}
              className={`text-sm font-medium transition-colors hover:text-[#42503d] relative py-1 cursor-pointer flex items-center gap-1 ${
                isDestinationsActive ? 'text-[#2c322b] font-semibold' : 'text-[#5a6258]'
              }`}
            >
              <span>Destinations</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${destDropdownOpen ? 'rotate-180' : ''}`} />
              {isDestinationsActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#70826b] rounded-full" />
              )}
            </button>

            {/* Dropdown Menu */}
            {destDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border-2 border-[#323d30] rounded-lg shadow-lg py-2 z-50 animate-fade-in divide-y divide-[#eee7dc]">
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#70826b]">
                  Featured Guides
                </div>
                
                <div className="py-1">
                  {/* Scotland Sub-page */}
                  <Link
                    to="/painting-holidays-scotland"
                    onClick={() => setDestDropdownOpen(false)}
                    className="px-4 py-2.5 hover:bg-[#f4f7f2] flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-serif-title font-bold text-sm text-[#1e251c] group-hover:text-[#70826b]">
                        Scotland
                      </div>
                      <div className="text-[11px] text-[#6e786b]">
                        Wilderness &amp; sea lochs (5 trips)
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#eef2ec] text-[#3d4a3a]">
                      From £750
                    </span>
                  </Link>

                  {/* Sri Lanka Sub-page */}
                  <Link
                    to="/painting-holidays-sri-lanka"
                    onClick={() => setDestDropdownOpen(false)}
                    className="px-4 py-2.5 hover:bg-[#f4f7f2] flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-serif-title font-bold text-sm text-[#1e251c] group-hover:text-[#70826b]">
                        Sri Lanka
                      </div>
                      <div className="text-[11px] text-[#6e786b]">
                        Emerald island &amp; tea country (3 trips)
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#eef2ec] text-[#3d4a3a]">
                      From £1,280
                    </span>
                  </Link>
                </div>

                <div className="py-1">
                  <button
                    onClick={() => handleNavClick('/#destinations')}
                    className="w-full text-left px-4 py-2 hover:bg-[#f4f7f2] text-xs font-semibold text-[#5a6556] flex items-center gap-1.5 cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#70826b]" />
                    <span>View All Destinations Overview →</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Standard Navigation Items */}
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium transition-colors hover:text-[#42503d] relative py-1 cursor-pointer ${
                  active ? 'text-[#2c322b] font-semibold' : 'text-[#5a6258]'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#70826b] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenBookModal()}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#70826b] hover:bg-[#5a6a56] rounded-md shadow-xs transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Book Holiday
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#2c322b] hover:bg-[#eae6dd] rounded-md cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f5] border-b border-[#e2ded4] px-4 pt-2 pb-6 space-y-2 animate-fade-in">
          
          {/* Mobile Destinations Submenu */}
          <div className="border-b border-[#e8e2d5] pb-2">
            <button
              onClick={() => setMobileDestOpen(!mobileDestOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-semibold text-[#2c322b]"
            >
              <span>Destinations</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileDestOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileDestOpen && (
              <div className="pl-3 space-y-1.5 pt-1 pb-2">
                <Link
                  to="/painting-holidays-scotland"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded hover:bg-[#eef2ec] text-sm text-[#2c322b] font-medium"
                >
                  🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland (5 trips)
                </Link>
                <Link
                  to="/painting-holidays-sri-lanka"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded hover:bg-[#eef2ec] text-sm text-[#2c322b] font-medium"
                >
                  🇱🇰 Sri Lanka (3 trips)
                </Link>
                <button
                  onClick={() => handleNavClick('/#destinations')}
                  className="block w-full text-left py-1.5 px-2 text-xs text-[#70826b] font-semibold"
                >
                  All Destinations Overview →
                </button>
              </div>
            )}
          </div>

          {/* Standard Mobile Nav Items */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.path)}
              className="block w-full text-left py-2 text-base font-medium text-[#2c322b] hover:text-[#70826b] cursor-pointer"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#70826b] hover:bg-[#5a6a56] rounded-md shadow-xs text-center cursor-pointer"
            >
              Book Holiday
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
