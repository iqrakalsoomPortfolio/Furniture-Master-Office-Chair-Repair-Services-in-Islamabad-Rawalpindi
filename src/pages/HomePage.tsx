import React, { useState } from 'react';
import { PageType, GalleryItem } from '../types';
import { PRIMARY_SERVICES, WHY_CHOOSE_US_POINTS, CHAIR_TYPES_SERVICED, TABLE_TYPES_SERVICED } from '../data/servicesData';
import { GALLERY_ITEMS } from '../data/galleryData';
import { TESTIMONIALS } from '../data/testimonialsData';
import { FAQSection } from '../components/FAQSection';
import { 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Award, 
  DollarSign, 
  Star, 
  Wrench, 
  Sliders, 
  ArrowUpDown, 
  Disc, 
  Palette,
  MapPin,
  Calendar,
  MessageCircle,
  HelpCircle,
  Sparkles,
  LayoutGrid
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: (serviceId?: string) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  onOpenBooking, 
  onOpenLightbox 
}) => {
  const [selectedIssue, setSelectedIssue] = useState<number>(0);
  const [furnitureTab, setFurnitureTab] = useState<'chairs' | 'tables'>('chairs');

  const commonIssues = [
    {
      title: 'Chair sinks slowly when sitting down',
      serviceId: 'gas-lift',
      solution: 'Worn hydraulic seal in pneumatic cylinder. Replaced with heavy-duty Class-4 gas lift.',
      eta: '15-20 minutes on-site',
      warranty: '6 Months Replacement Warranty',
      approxCost: 'From Rs. 1,800',
      image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Broken wheels or scratches on floor tiles',
      serviceId: 'base-and-wheels',
      solution: 'Stuck or broken caster bearings. Replaced with smooth-glide polyurethane floor-safe casters.',
      eta: '10 minutes on-site',
      warranty: '6 Months Replacement Warranty',
      approxCost: 'From Rs. 1,200 / set of 5',
      image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Cracked 5-star spider base or tipping hazard',
      serviceId: 'base-and-wheels',
      solution: 'Shattered plastic base. Upgraded to 350mm solid die-cast chrome or reinforced nylon base.',
      eta: '20 minutes on-site',
      warranty: '6 Months Replacement Warranty',
      approxCost: 'From Rs. 2,200',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Chair tilts backward or locks awkwardly',
      serviceId: 'mechanism-repair',
      solution: 'Stripped tilt-lock plate or worn spring. Serviced or replaced with reinforced steel mechanism.',
      eta: '25-30 minutes on-site',
      warranty: '6 Months Replacement Warranty',
      approxCost: 'From Rs. 2,200',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Torn leather, sagging foam, or torn mesh',
      serviceId: 're-upholstery',
      solution: 'Old foam replaced with 50D high-density orthopedic foam and premium executive upholstery.',
      eta: 'On-site or 24h turnaround',
      warranty: '1 Year Stitching & Foam Warranty',
      approxCost: 'From Rs. 2,500',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Wobbly conference table or jammed desk drawers',
      serviceId: 'table-repair',
      solution: 'Bolts tightened, structural leveling adjusted, and smooth 3-stage ball-bearing drawer slide channels fitted.',
      eta: '20-30 minutes on-site',
      warranty: '6 Months Replacement Warranty',
      approxCost: 'From Rs. 1,500',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ArrowUpDown':
        return <ArrowUpDown className="w-6 h-6" />;
      case 'Disc':
        return <Disc className="w-6 h-6" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      default:
        return <Wrench className="w-6 h-6" />;
    }
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="w-6 h-6 text-blue-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
      case 'Award': return <Award className="w-6 h-6 text-blue-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-blue-600" />;
      default: return <DollarSign className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Background Image with Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Office furniture and chair repair workshop"
            className="w-full h-full object-cover opacity-20 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-blue-950/80"></div>
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Location Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-xs">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Doorstep Repairs Across Islamabad &amp; Rawalpindi</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
                Professional Office Chairs &amp; Desks Repair in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
                  Islamabad &amp; Rawalpindi
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Get your office chairs, conference tables, and workstation desks repaired at your doorstep by <strong>Furniture Master</strong>. Genuine Class-4 gas lifts, heavy-duty chrome bases, floor-safe wheels, and table hardware installed on-site.
              </p>

              {/* Two Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-book-now-btn"
                  onClick={() => onOpenBooking()}
                  className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Repair Now</span>
                </button>

                <a
                  id="hero-call-now-btn"
                  href="tel:03361572145"
                  className="px-7 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-400/20 active:scale-98 transition-all flex items-center justify-center gap-2.5"
                >
                  <Phone className="w-5 h-5 fill-current text-slate-950" />
                  <span>Call: 0336-1572145</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% On-Site Doorstep Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>6 Months Free Warranty</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Same-Day 60-Min Arrival</span>
                </div>
              </div>
            </div>

            {/* Right: Rich Visual Showcase of Office Chairs & Tables (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80"
                  alt="Modern office chairs, conference tables and workstations repaired by Furniture Master"
                  className="w-full h-[400px] sm:h-[440px] object-cover group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Office Chairs &amp; Desks</span>
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold shadow-md backdrop-blur-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Certified Parts</span>
                  </span>
                </div>

                {/* Bottom Content within Image Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-left">
                  <div className="flex items-center justify-between text-xs text-amber-300 font-semibold mb-1">
                    <span>Active Mobile Service Unit</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      On Road Now
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm sm:text-base">
                    Chairs, Boardroom Tables &amp; Workstations
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-300">
                    <span className="bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">Gas Lifts</span>
                    <span className="bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">Chrome Bases</span>
                    <span className="bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">Drawer Slides</span>
                    <span className="bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">Table Legs</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP (4 Icons with text) */}
      <section className="bg-white border-b border-slate-200 py-8 relative z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                  Doorstep Service
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  We visit your office or home in Twin Cities
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                  Expert Technicians
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  10+ years dedicated seating mechanics
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                  Affordable Pricing
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Save up to 70% vs buying new chairs
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                  Quick Turnaround
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Most repairs completed in 20 minutes
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION (2-Column: Image + Text) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Dual Image Collage of Office Chairs & Tables */}
            <div className="relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-80 sm:h-96">
                  <img
                    src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=800&q=80"
                    alt="Technician repairing executive office chair"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="col-span-5 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-[152px] sm:h-[184px]">
                    <img
                      src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=80"
                      alt="Boardroom conference tables and executive seating"
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-[152px] sm:h-[184px]">
                    <img
                      src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=500&q=80"
                      alt="Office workstation desks and ergonomic chairs"
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -left-3 sm:left-4 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-800 max-w-[270px]">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-extrabold text-xl">15,000+</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  Office Chairs, Boardroom Tables &amp; Desks restored in Islamabad &amp; Rawalpindi.
                </p>
              </div>
            </div>

            {/* Right: Text Information */}
            <div className="space-y-6 text-left">
              <div>
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-3 tracking-tight">
                  The Trusted Office Seating &amp; Workstation Specialists
                </h2>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                Founded with a mission to eliminate workplace discomfort and excessive corporate replacement spending, <strong>Furniture Master</strong> is Islamabad and Rawalpindi’s premier on-site repair workshop for office chairs, meeting tables, and computer workstations.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                Whether you have a single executive leather chair in your home study or 200 workstation chairs and meeting tables in a Blue Area software house, our mobile technician vans carry high-precision tools and certified commercial-grade replacement components right to your door.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>ANSI/BIFMA Class-4 Gas Lifts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Chrome 350mm Solid Spider Bases</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Tile &amp; Hardwood-Safe PU Wheels</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Conference Table &amp; Drawer Channel Repairs</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  id="about-learn-more-btn"
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex items-center gap-2 shadow-md cursor-pointer transition-all"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:03361572145"
                  className="text-slate-700 hover:text-blue-600 font-semibold text-sm flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Speak With Technician</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW (4 Cards in Grid) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-md">
              Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Comprehensive Chair Repair Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From sinking gas cylinders to damaged tilt mechanisms and worn cushions, we restore your chairs to showroom condition at your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {PRIMARY_SERVICES.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Service Real Image Header */}
                <div className="relative h-44 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent"></div>
                  
                  {/* Tag on Top */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 shadow-md backdrop-blur-xs">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon & Starting Price at Bottom of Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-bold text-white bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-xs border border-white/20">
                      Starts: {service.startingPrice}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-medium">
                    <span>Doorstep Islamabad &amp; Rwp</span>
                  </div>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                    aria-label={`Book ${service.title}`}
                  >
                    <span>Book Fix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Genuine Spare Parts Visual Showcase */}
          <div className="mt-14 pt-12 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  Original Factory Inventory
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mt-1">
                  Genuine Replacement Hardware Carried in Mobile Repair Vans
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
                100% Guaranteed Fit &amp; Warranty
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-shadow group">
                <div className="h-36 overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=500&q=80"
                    alt="Class-4 BIFMA Certified Gas Lift Hydraulic Cylinder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-3.5 text-left">
                  <h4 className="font-heading font-bold text-slate-900 text-xs sm:text-sm">
                    Class-4 Nitrogen Gas Cylinder
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Heavy-duty 200kg rated nitrogen seal</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-shadow group">
                <div className="h-36 overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=500&q=80"
                    alt="350mm Mirror-Polished Chrome Spider Base"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-3.5 text-left">
                  <h4 className="font-heading font-bold text-slate-900 text-xs sm:text-sm">
                    350mm Solid Chrome Spider Base
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Die-cast reinforced steel, zero crack</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-shadow group">
                <div className="h-36 overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80"
                    alt="Multi-Lock Butterfly Recline & Tilt Mechanism"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-3.5 text-left">
                  <h4 className="font-heading font-bold text-slate-900 text-xs sm:text-sm">
                    Multi-Lock Tilt Mechanism
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Synchronous recline and tension spring</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-shadow group">
                <div className="h-36 overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80"
                    alt="High Resilience 50D Molded Orthopedic Foam"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-3.5 text-left">
                  <h4 className="font-heading font-bold text-slate-900 text-xs sm:text-sm">
                    50D Molded Cushion Foam
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Anti-sagging breathable comfort foam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              id="view-all-services-btn"
              onClick={() => onNavigate('services')}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-blue-50 text-blue-600 font-bold text-sm border-2 border-blue-600 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>View All Services &amp; Detailed Specs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* INTERACTIVE CHAIR PROBLEM DIAGNOSTIC TOOL (High conversion value!) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden relative">
            <div className="relative z-10 max-w-4xl mx-auto">
              
              <div className="text-center space-y-2 mb-8">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  Interactive Chair Problem Diagnoser
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  What seems to be wrong with your chair?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Select your chair’s symptom below to see the recommended on-site fix, parts used, and warranty.
                </p>
              </div>

              {/* Symptom Pills */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {commonIssues.map((issue, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedIssue(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      selectedIssue === idx
                        ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30 ring-2 ring-blue-400'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
                    }`}
                  >
                    {issue.title}
                  </button>
                ))}
              </div>

              {/* Diagnostic Result Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Component Visual Thumbnail */}
                <div className="lg:col-span-3 w-full h-36 lg:h-32 rounded-xl overflow-hidden relative shadow-md border border-white/20">
                  <img
                    src={commonIssues[selectedIssue].image}
                    alt={commonIssues[selectedIssue].title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/60 px-2 py-0.5 rounded">
                    Replacement Part
                  </span>
                </div>

                <div className="lg:col-span-6 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <Wrench className="w-4 h-4" />
                    <span>Recommended Doorstep Solution</span>
                  </div>
                  <h4 className="text-lg font-heading font-bold text-white">
                    {commonIssues[selectedIssue].solution}
                  </h4>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300 pt-1">
                    <span>⏱️ ETA: <strong>{commonIssues[selectedIssue].eta}</strong></span>
                    <span>🛡️ <strong>{commonIssues[selectedIssue].warranty}</strong></span>
                    <span>💰 Est: <strong>{commonIssues[selectedIssue].approxCost}</strong></span>
                  </div>
                </div>

                <div className="lg:col-span-3 flex flex-col gap-2.5">
                  <button
                    onClick={() => onOpenBooking(commonIssues[selectedIssue].serviceId)}
                    className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm shadow-md transition-colors cursor-pointer"
                  >
                    Book Doorstep Fix
                  </button>
                  <a
                    href="tel:03361572145"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs text-center border border-white/20 transition-colors"
                  >
                    Discuss: 0336-1572145
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION (Light Blue-Gray Background, 4 Columns) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-md">
              Why Furniture Master
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Why Corporate &amp; Home Clients Trust Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We bring factory-level precision, certified replacement parts, and upfront pricing straight to your office or home in Islamabad &amp; Rawalpindi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US_POINTS.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-md border border-slate-200/80 transition-all text-left space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  {getPillarIcon(item.icon)}
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Chair & Table Types We Service with Real Images */}
          <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 text-left shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 flex items-center gap-2.5">
                  <CheckCircle2 className="w-7 h-7 text-blue-600 shrink-0" />
                  <span>Office Furniture We Service Across Twin Cities</span>
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  On-site diagnostics and repairs for all models of office seating, boardroom tables, and workstations.
                </p>
              </div>

              {/* Interactive Tabs: Chairs vs Tables */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl shrink-0 self-start md:self-auto">
                <button
                  type="button"
                  onClick={() => setFurnitureTab('chairs')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    furnitureTab === 'chairs'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Office Chairs (6 Models)
                </button>
                <button
                  type="button"
                  onClick={() => setFurnitureTab('tables')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    furnitureTab === 'tables'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tables &amp; Desks (4 Types)
                </button>
              </div>
            </div>

            {/* Display Chairs Grid */}
            {furnitureTab === 'chairs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CHAIR_TYPES_SERVICED.map((chair, i) => (
                  <div 
                    key={i} 
                    className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 hover:bg-white hover:shadow-md transition-all flex flex-col group"
                  >
                    <div className="relative h-44 overflow-hidden bg-slate-200">
                      <img
                        src={chair.image}
                        alt={chair.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                      <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-600 text-white shadow-xs">
                        {chair.tag}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="font-heading font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                          {chair.name}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {chair.desc}
                        </p>
                      </div>
                      <button
                        onClick={() => onOpenBooking(chair.name)}
                        className="w-full py-2 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold text-xs transition-colors cursor-pointer text-center"
                      >
                        Book Repair for This Chair
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Display Tables Grid */}
            {furnitureTab === 'tables' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {TABLE_TYPES_SERVICED.map((table, i) => (
                  <div 
                    key={i} 
                    className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 hover:bg-white hover:shadow-md transition-all flex flex-col group"
                  >
                    <div className="relative h-44 overflow-hidden bg-slate-200">
                      <img
                        src={table.image}
                        alt={table.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                      <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 shadow-xs">
                        {table.tag}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="font-heading font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                          {table.name}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {table.desc}
                        </p>
                      </div>
                      <button
                        onClick={() => onOpenBooking(table.name)}
                        className="w-full py-2 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold text-xs transition-colors cursor-pointer text-center"
                      >
                        Book Repair for This Table
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 text-center sm:text-left">
                Need urgent bulk maintenance for 10+ chairs or whole office workstation desks?
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-blue-600 hover:text-blue-700 font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Explore All 5 Office Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. GALLERY PREVIEW (Small Image Grid 4-6 images + View Full Gallery) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
                Recent Projects
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mt-2 tracking-tight">
                Our Work in Islamabad &amp; Rawalpindi
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Real before-and-after chair restorations completed on-site by our technicians.
              </p>
            </div>

            <button
              id="gallery-preview-btn"
              onClick={() => onNavigate('gallery')}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm flex items-center gap-2 transition-colors self-start md:self-auto cursor-pointer"
            >
              <span>View Full Gallery (12+ Repairs)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Grid of 6 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.slice(0, 6).map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 cursor-pointer aspect-4/3 bg-slate-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-600 text-white">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <p className="text-xs text-amber-300 font-medium">{item.chairType}</p>
                  <h4 className="font-heading font-bold text-sm sm:text-base leading-snug line-clamp-2 mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION (2-3 Review Cards with Star Ratings) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-md">
              Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Trusted by Hundreds in Twin Cities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              See what law firms, tech companies, and home office professionals in Islamabad &amp; Rawalpindi say about our doorstep chair repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((test) => (
              <div 
                key={test.id}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-200 flex flex-col justify-between text-left space-y-4"
              >
                <div className="space-y-3">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    {test.avatar && (
                      <img
                        src={test.avatar}
                        alt={test.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-blue-100 shadow-xs shrink-0"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">
                        {test.name}
                      </h4>
                      <p className="text-xs text-slate-500">{test.role}, {test.company}</p>
                      <p className="text-[11px] text-blue-600 font-medium flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{test.location}</span>
                      </p>
                    </div>
                  </div>
                  <span className="inline-block mt-3 text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md border border-emerald-200/60">
                    Verified: {test.verifiedService}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7.5 FREQUENTLY ASKED QUESTIONS (Rich Snippet & Local SEO Powerhouse) */}
      <FAQSection />

      {/* 8. CTA BANNER (Full-width blue section with both numbers & ambient background) */}
      <section className="relative py-16 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80"
            alt="Office boardroom and conference tables"
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-slate-950/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-xs font-semibold backdrop-blur-xs border border-white/10">
            Same-Day Dispatch Available Right Now
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Need Office Chairs or Tables Fixed Today? Call or WhatsApp Us!
          </h2>

          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Our certified technician van is active in Islamabad &amp; Rawalpindi sectors. Call directly or chat on WhatsApp for a quick estimate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              id="cta-call-1"
              href="tel:03361572145"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base shadow-xl flex items-center justify-center gap-2.5 transition-transform active:scale-98"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call Primary: 0336-1572145</span>
            </a>

            <a
              id="cta-call-2"
              href="tel:03451514212"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-base border border-white/30 backdrop-blur-xs flex items-center justify-center gap-2.5 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Alt Phone: 0345-1514212</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Online</span>
            </button>
          </div>

          <p className="text-xs text-blue-200">
            Serving F-Sectors, G-Sectors, I-Sectors, Blue Area, Bahria Town, DHA, Saddar, Satellite Town &amp; Westridge
          </p>
        </div>
      </section>
    </div>
  );
};
