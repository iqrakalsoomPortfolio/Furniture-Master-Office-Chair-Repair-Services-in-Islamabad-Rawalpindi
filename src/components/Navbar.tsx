import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { 
  Phone, 
  Wrench, 
  Menu, 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenBooking 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Doorstep Service across <strong>Islamabad &amp; Rawalpindi</strong></span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>6 Months On-Site Parts Warranty</span>
            </span>
            <span className="text-slate-600">|</span>
            <a 
              href="tel:03361572145" 
              className="text-slate-200 hover:text-amber-400 transition-colors font-medium flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>0336-1572145</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100' 
            : 'bg-white border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo / Brand Name */}
            <button 
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <Wrench className="w-6 h-6 text-amber-400 transform -rotate-12 group-hover:rotate-0 transition-transform" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-2xl tracking-tight text-slate-900">
                    Furniture <span className="text-blue-600">Master</span>
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-500 tracking-wide uppercase">
                  Office Chair Repair &amp; Maintenance
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    id={`nav-link-${link.page}`}
                    onClick={() => handleNavClick(link.page)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 cursor-pointer ${
                      isActive 
                        ? 'text-blue-600 bg-blue-50/80 shadow-xs' 
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                id="header-book-repair-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100/80 border border-blue-200 transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Book Doorstep Visit</span>
              </button>

              <a
                id="header-call-now-btn"
                href="tel:03361572145"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 shadow-md shadow-amber-400/20 active:scale-98 transition-all duration-200"
              >
                <Phone className="w-4 h-4 fill-current text-slate-950" />
                <span>Call: 0336-1572145</span>
              </a>
            </div>

            {/* Mobile Hamburger & Quick Call */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href="tel:03361572145"
                className="p-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-sm"
                aria-label="Call Furniture Master"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call</span>
              </a>
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold text-left transition-colors cursor-pointer ${
                      isActive 
                        ? 'bg-blue-600 text-white' 
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-lg bg-blue-50 text-blue-700 font-semibold text-center flex items-center justify-center gap-2 border border-blue-200"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Doorstep Visit</span>
              </button>

              <a
                href="tel:03361572145"
                className="w-full py-3 px-4 rounded-lg bg-amber-400 text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call: 0336-1572145</span>
              </a>

              <a
                href="tel:03451514212"
                className="w-full py-2.5 px-4 rounded-lg bg-slate-100 text-slate-700 font-medium text-center text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Alt Line: 0345-1514212</span>
              </a>
            </div>

            <div className="text-xs text-slate-500 text-center pt-2">
              Islamabad &amp; Rawalpindi • Mon–Sat 9:00 AM – 8:00 PM
            </div>
          </div>
        )}
      </header>
    </>
  );
};
