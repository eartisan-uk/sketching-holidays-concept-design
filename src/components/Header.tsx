import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Palette, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBookModal: (destinationId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBookModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'destinations', label: 'Destinations', path: '/#destinations' },
    { id: 'scotland', label: 'Scotland', path: '/painting-holidays-scotland' },
    { id: 'holidays', label: 'Holidays', path: '/#upcoming-trips' },
    { id: 'your-host', label: 'Your Host', path: '/your-host' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'faqs', label: 'FAQs', path: '/faqs' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setMobileMenuOpen(false);

    if (item.path.startsWith('/#')) {
      const sectionId = item.path.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(item.path);
      }
    } else {
      navigate(item.path);
    }
  };

  const isItemActive = (item: typeof navItems[0]) => {
    if (item.path === '/painting-holidays-scotland' && (location.pathname.startsWith('/painting-holidays-scotland') || location.pathname.startsWith('/scotland'))) return true;
    if (item.path === '/your-host' && location.pathname.startsWith('/your-host')) return true;
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
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
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
        <div className="md:hidden bg-[#faf8f5] border-b border-[#e2ded4] px-4 pt-2 pb-6 space-y-3 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
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
