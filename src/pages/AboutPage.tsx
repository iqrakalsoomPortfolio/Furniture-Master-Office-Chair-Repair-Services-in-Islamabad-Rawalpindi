import React from 'react';
import { PageType } from '../types';
import { SERVICE_AREAS, WHY_CHOOSE_US_POINTS } from '../data/servicesData';
import { 
  Wrench, 
  Phone, 
  CheckCircle2, 
  Truck, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  ArrowRight,
  Target,
  Award,
  Users
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="w-full">
      {/* 1. Page Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-400/20">
            Twin Cities’ Seating Mechanics
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            About Furniture Master
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Islamabad &amp; Rawalpindi’s dedicated doorstep office chair repair, refurbishment, and ergonomic maintenance service.
          </p>
        </div>
      </section>

      {/* 2. Our Story & Our Mission (2-Column Layout) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Content Blocks */}
            <div className="space-y-8 text-left">
              <div>
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2 tracking-tight">
                  Over a Decade of Restoring Comfort in the Workplace
                </h2>
              </div>

              <div className="prose prose-slate text-slate-600 text-base leading-relaxed space-y-4">
                <p>
                  <strong>Furniture Master</strong> was established with a simple realization: high-end ergonomic chairs and executive seating are built to last for decades, yet businesses and individuals across Islamabad and Rawalpindi were discarding them simply because a hydraulic gas cylinder failed, a plastic wheel cracked, or the tilt mechanism lost its grip.
                </p>
                <p>
                  Buying brand-new imported office chairs today costs upwards of Rs. 25,000 to Rs. 85,000 each. We built Furniture Master to bridge that gap with factory-grade restoration, commercial spare parts, and unmatched doorstep convenience.
                </p>
                <p>
                  Over the past decade, our mobile technical squads have repaired and refurbished more than <strong>15,000+ office chairs</strong> for tech incubators in Blue Area, corporate boardrooms in Saddar Rawalpindi, educational faculties at NUST &amp; Quaid-e-Azam University, and home offices in DHA &amp; Bahria Town.
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    Our Mission
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    To deliver affordable, dependable, and prompt doorstep office chair repair across Islamabad &amp; Rawalpindi, preserving valuable furniture assets, protecting workplace spine health, and eliminating unnecessary landfill waste.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Realistic Workshop & Technicians Image */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1541558869434-2840d308329a?auto=format&fit=crop&w=1000&q=80"
                  alt="Technician assembling office chair components"
                  className="w-full h-[460px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">Certified Mechanics</p>
                  <p className="text-base font-semibold mt-1">Equipped mobile units carrying all Class-4 cylinders, 350mm bases &amp; casters</p>
                </div>
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-2xl sm:text-3xl font-heading font-extrabold text-blue-600">10+ Yrs</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Experience</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-2xl sm:text-3xl font-heading font-extrabold text-blue-600">15,000+</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Chairs Repaired</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-2xl sm:text-3xl font-heading font-extrabold text-blue-600">100%</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Doorstep Service</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Simple 3-Step Process */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-md">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Our 3-Step Doorstep Repair Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Getting your office chair fixed is frictionless. No transporting bulky chairs across city traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-slate-200 transition-all flex flex-col group">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=700&q=80"
                  alt="Customer sending photo on phone for quote"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-blue-600 text-white font-heading font-extrabold text-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                  1
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold">
                  Instant WhatsApp or Phone Estimate
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-amber-500" />
                    <span>Call or WhatsApp Us</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">
                    Tell us your chair issue (or send a quick photo/video of the wobbling or sinking chair on WhatsApp to <strong>0336-1572145</strong>). We provide an instant upfront quote.
                  </p>
                </div>
                <span className="text-xs text-blue-600 font-semibold inline-block pt-2">Step 1: Diagnostics &amp; Pricing</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-slate-200 transition-all flex flex-col group">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80"
                  alt="Uniformed technician arriving on-site with tools"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-blue-600 text-white font-heading font-extrabold text-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                  2
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold">
                  Mobile Unit Dispatched Across Twin Cities
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-600" />
                    <span>We Visit Your Location</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">
                    Our uniformed technician arrives at your office, home, or co-working space in Islamabad or Rawalpindi carrying original Class-4 spare cylinders, bases, and specialized extractors.
                  </p>
                </div>
                <span className="text-xs text-blue-600 font-semibold inline-block pt-2">Step 2: Doorstep Arrival</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-slate-200 transition-all flex flex-col group">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1580481077195-c3a82da91883?auto=format&fit=crop&w=700&q=80"
                  alt="Office chair fully repaired and tested"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-blue-600 text-white font-heading font-extrabold text-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                  3
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold">
                  15-30 Min Repair + 6-Mo Warranty
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Chair Fixed Same Day</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">
                    Repairs are executed right in front of you within 15–30 minutes with zero workplace disruption. We test weight capacity and hand you your official <strong>6-Month Warranty Card</strong>.
                  </p>
                </div>
                <span className="text-xs text-emerald-600 font-semibold inline-block pt-2">Step 3: Quality Handover</span>
              </div>
            </div>

          </div>

          <div className="mt-12">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md cursor-pointer transition-all inline-flex items-center gap-2"
            >
              <span>Schedule a Technician Visit Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. Detailed Why Choose Us List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
              Our Standard of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Why Furniture Master is the Preferred Choice
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We never compromise on the mechanical safety, structural integrity, or aesthetics of your seating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <h3 className="font-heading font-bold text-lg text-slate-900">Certified Technicians</h3>
              <p className="text-sm text-slate-600">Experienced mechanics trained specifically in multi-lever ergonomics, hydraulic pressures, and precision upholstery stitching.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <Award className="w-8 h-8 text-blue-600" />
              <h3 className="font-heading font-bold text-lg text-slate-900">Genuine Spare Parts</h3>
              <p className="text-sm text-slate-600">We source heavy-gauge Class-4 BIFMA gas cylinders, solid die-cast chrome bases, and commercial PU wheels that never crack.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <Truck className="w-8 h-8 text-blue-600" />
              <h3 className="font-heading font-bold text-lg text-slate-900">Doorstep Convenience</h3>
              <p className="text-sm text-slate-600">Zero logistics headaches. We come to your commercial premises or residence anywhere in Islamabad &amp; Rawalpindi.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <Clock className="w-8 h-8 text-blue-600" />
              <h3 className="font-heading font-bold text-lg text-slate-900">Fast Response Time</h3>
              <p className="text-sm text-slate-600">Average response and arrival within 60 to 90 minutes. Emergency corporate callouts prioritized to keep work flowing.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <CheckCircle2 className="w-8 h-8 text-blue-600" />
              <h3 className="font-heading font-bold text-lg text-slate-900">Affordable Rates</h3>
              <p className="text-sm text-slate-600">Transparent quotes with no hidden charges. Starting from just Rs. 1,200 for wheel sets and Rs. 1,800 for hydraulic gas lifts.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <Wrench className="w-8 h-8 text-blue-600" />
              <h3 className="font-heading font-bold text-lg text-slate-900">6-Month Service Warranty</h3>
              <p className="text-sm text-slate-600">If any replaced gas cylinder, base, or caster fails under normal working conditions within 6 months, we replace it on-site free.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Service Area Breakdown (Sectors in Islamabad & Rawalpindi) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-md">
              Complete Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Service Areas in Islamabad &amp; Rawalpindi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Our mobile repair units operate daily across all major commercial and residential sectors in the Twin Cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Islamabad Sectors */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  ISB
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Islamabad Coverage
                  </h3>
                  <p className="text-xs text-slate-500">Capital Territory &amp; Adjoining Societies</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICE_AREAS.islamabad.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 p-2 rounded-lg bg-slate-50">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rawalpindi Areas */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  RWP
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Rawalpindi Coverage
                  </h3>
                  <p className="text-xs text-slate-500">Garrison City &amp; Cantt Areas</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICE_AREAS.rawalpindi.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 p-2 rounded-lg bg-slate-50">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Bottom CTA Linking to Contact Page */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Ready for a Doorstep Office Chair Overhaul?
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Contact us today for a free phone consultation or book a mobile technician to visit your office in Islamabad or Rawalpindi.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-blue-700 font-bold text-sm shadow-md cursor-pointer transition-colors"
            >
              Contact Us &amp; View Locations
            </button>
            <a
              href="tel:03361572145"
              className="px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm shadow-md flex items-center gap-2 transition-transform active:scale-98"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call: 0336-1572145</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
