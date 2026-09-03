import React from 'react';
import { PageType } from '../types';
import { 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Facebook, 
  Instagram, 
  Linkedin,
  MessageSquare
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Pre-footer CTA Strip */}
      <div className="bg-blue-600 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-700 text-blue-100 text-xs px-3 py-1 rounded-full font-medium mb-2">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              Rapid Doorstep Dispatch in 60 Minutes
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Have a Broken or Sinking Office Chair in Islamabad / Rawalpindi?
            </h3>
            <p className="text-blue-100 text-sm mt-1 max-w-2xl">
              Don't compromise your spine or spend tens of thousands on new chairs. Let our expert technicians fix it on-site today.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              id="footer-cta-call"
              href="tel:03361572145"
              className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg transition-transform active:scale-98"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call: 0336-1572145</span>
            </a>
            <button
              id="footer-cta-book"
              onClick={onOpenBooking}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center gap-2 transition-colors cursor-pointer border border-slate-700"
            >
              <span>Book Online</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Business Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-md">
                <Wrench className="w-5 h-5 text-amber-400 transform -rotate-12" />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Furniture <span className="text-blue-400">Master</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium office chair repair and maintenance specialists serving corporate offices, law firms, software houses, and homes across Islamabad and Rawalpindi.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Registered Local Technicians • 6-Month Warranty</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-base tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>About Furniture Master</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Our Services</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('gallery')} 
                  className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Work Gallery &amp; Transformations</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Contact &amp; Book Doorstep</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-base tracking-wider uppercase">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="text-slate-400 hover:text-blue-400 text-left transition-colors cursor-pointer"
                >
                  Hydraulic Gas Lift Replacement (Class 4)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="text-slate-400 hover:text-blue-400 text-left transition-colors cursor-pointer"
                >
                  Heavy Duty Wheels &amp; Chrome Base
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="text-slate-400 hover:text-blue-400 text-left transition-colors cursor-pointer"
                >
                  Mechanism Repair &amp; Tilt Controls
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="text-slate-400 hover:text-blue-400 text-left transition-colors cursor-pointer"
                >
                  Executive Re-Upholstery &amp; Foam Refit
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="text-slate-400 hover:text-blue-400 text-left transition-colors cursor-pointer"
                >
                  Corporate AMC &amp; Bulk Chair Overhauls
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-base tracking-wider uppercase">
              Contact &amp; Coverage
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <a href="tel:03361572145" className="hover:text-white font-semibold block text-slate-200">
                    0336-1572145 (Primary / WhatsApp)
                  </a>
                  <a href="tel:03451514212" className="hover:text-white block text-xs mt-0.5">
                    0345-1514212 (Technical Help)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <div>
                  <span className="text-slate-200 font-medium">Doorstep Service Area:</span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Islamabad (F, G, H, I, Blue Area, Bahria, DHA) &amp; Rawalpindi (Saddar, Satellite Town, Westridge, PWD)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-slate-200 font-medium">Business Hours:</span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Monday – Saturday: 9:00 AM – 8:00 PM<br/>
                    Sunday: By appointment for corporate offices
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:info@furnituremaster.pk" className="hover:text-white text-xs">
                  info@furnituremaster.pk
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 Furniture Master. All Rights Reserved. Islamabad &amp; Rawalpindi, Pakistan.</p>
          
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Follow Our Work:</span>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-pink-600 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-blue-700 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/923361572145" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
