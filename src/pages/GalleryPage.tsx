import React, { useState } from 'react';
import { PageType, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/galleryData';
import { 
  Wrench, 
  MapPin, 
  Filter, 
  ArrowRight, 
  Calendar, 
  Phone, 
  Maximize2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ 
  onNavigate, 
  onOpenBooking, 
  onOpenLightbox 
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Repairs' },
    { id: 'gas-lift', label: 'Gas Lift' },
    { id: 'base', label: 'Base Replacement' },
    { id: 'upholstery', label: 'Upholstery' },
    { id: 'mechanism', label: 'Mechanism' },
    { id: 'tables', label: 'Tables & Desks' }
  ];

  const filteredItems = selectedFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedFilter);

  return (
    <div className="w-full">
      {/* 1. Page Header with Ambient Background */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80"
            alt="Office furniture and chairs repair gallery"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-blue-950/85"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-400/20">
            Real Transformations
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Our Work &amp; Repair Gallery
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our on-site chair repairs, conference table realignments, modular workstation maintenance, and executive re-upholstery jobs completed across Islamabad &amp; Rawalpindi.
          </p>
        </div>
      </section>

      {/* 2. Filter Bar & Interactive Grid */}
      <section className="py-16 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mr-2 hidden sm:flex">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter By:</span>
            </span>
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                id={`filter-btn-${opt.id}`}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedFilter === opt.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 ring-2 ring-blue-600'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid (Responsive Masonry/Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Photo with Overlay */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-xs">
                      {item.categoryLabel}
                    </span>
                    {item.isBeforeAfter && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Before/After</span>
                      </span>
                    )}
                  </div>

                  {/* Enlarge Hint */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 text-left space-y-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">
                      {item.chairType}
                    </span>
                    <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mt-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs line-clamp-2 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>On-Site Repaired</span>
                    </span>
                    <span className="font-semibold text-blue-600 group-hover:underline flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <p>No gallery items found for this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* 3. Bottom CTA Section */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Have a Chair That Needs Similar Restoration?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Send us a quick WhatsApp video or photo of your damaged chair, and our technicians will quote you immediately.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/923361572145?text=${encodeURIComponent(
                'Hello Furniture Master, I saw your work gallery and would like an estimate for my office chair.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-colors"
            >
              WhatsApp Chair Photos: 0336-1572145
            </a>

            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md cursor-pointer transition-colors"
            >
              Book Doorstep Technician
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
