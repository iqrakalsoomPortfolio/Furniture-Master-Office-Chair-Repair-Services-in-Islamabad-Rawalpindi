import React, { useEffect, useState } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  Wrench, 
  MessageCircle, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/galleryData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onBookService: (serviceName?: string) => void;
  onSelectItem?: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ 
  item, 
  onClose, 
  onBookService,
  onSelectItem
}) => {
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');

  // Find index in GALLERY_ITEMS to enable previous/next navigation
  const currentIndex = item ? GALLERY_ITEMS.findIndex(g => g.id === item.id) : -1;
  const totalItems = GALLERY_ITEMS.length;

  const handlePrev = () => {
    if (currentIndex > 0 && onSelectItem) {
      setViewMode('after');
      onSelectItem(GALLERY_ITEMS[currentIndex - 1]);
    } else if (currentIndex === 0 && onSelectItem) {
      setViewMode('after');
      onSelectItem(GALLERY_ITEMS[totalItems - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < totalItems - 1 && onSelectItem) {
      setViewMode('after');
      onSelectItem(GALLERY_ITEMS[currentIndex + 1]);
    } else if (currentIndex === totalItems - 1 && onSelectItem) {
      setViewMode('after');
      onSelectItem(GALLERY_ITEMS[0]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose]);

  // Reset viewMode to 'after' whenever item changes
  useEffect(() => {
    setViewMode('after');
  }, [item?.id]);

  if (!item) return null;

  const currentImageUrl = (viewMode === 'before' && item.beforeImage) 
    ? item.beforeImage 
    : item.image;

  const handleWhatsApp = () => {
    const msg = `Hello Furniture Master, I saw your work on "${item.title}" (${item.chairType}) in your gallery. I have a similar chair problem and need repair in Islamabad/Rawalpindi.`;
    window.open(`https://wa.me/923361572145?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-700 animate-in fade-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar with Back & Cross (Close) Options */}
        <div className="bg-slate-900 px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-slate-800 text-white select-none">
          
          {/* Back Option Button */}
          <button
            id="lightbox-back-btn"
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            title="Back to gallery (Wapis)"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>← Back / واپس</span>
          </button>

          {/* Photo Counter */}
          <div className="text-xs text-slate-400 font-medium hidden sm:block">
            {currentIndex >= 0 && `Photo ${currentIndex + 1} of ${totalItems}`}
          </div>

          {/* Cross (Close) Option Button */}
          <button
            id="lightbox-close-btn"
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white text-xs sm:text-sm font-semibold border border-red-500/30 transition-colors cursor-pointer"
            title="Close popup (Band Karein)"
            aria-label="Close image popup"
          >
            <X className="w-4 h-4" />
            <span>Close / بند کریں</span>
          </button>

        </div>

        {/* Image Container with Nav Arrows & Before/After Toggle */}
        <div className="relative w-full aspect-4/3 sm:aspect-16/9 bg-slate-950 flex items-center justify-center overflow-hidden group">
          <img
            src={currentImageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-300"
            referrerPolicy="no-referrer"
          />

          {/* Category & Status Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600/90 text-white shadow-md backdrop-blur-xs">
              {item.categoryLabel}
            </span>
            {item.isBeforeAfter && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600/90 text-white shadow-md backdrop-blur-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Before &amp; After Available</span>
              </span>
            )}
          </div>

          {/* Before / After Toggle Switch */}
          {item.beforeImage && (
            <div className="absolute top-4 right-4 z-10 flex bg-black/60 backdrop-blur-md rounded-full p-1 border border-white/20 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('before')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  viewMode === 'before'
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                    : 'text-white hover:text-amber-300'
                }`}
              >
                Before Repair
              </button>
              <button
                type="button"
                onClick={() => setViewMode('after')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  viewMode === 'after'
                    ? 'bg-emerald-500 text-white font-bold shadow-xs'
                    : 'text-white hover:text-emerald-300'
                }`}
              >
                After Fixed ✓
              </button>
            </div>
          )}

          {/* Previous Photo Arrow */}
          {onSelectItem && (
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg"
              title="Previous Photo (Pichli Tasweer)"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Photo Arrow */}
          {onSelectItem && (
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg"
              title="Next Photo (Agli Tasweer)"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image Caption overlay on bottom of photo */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4 text-white text-left flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1 text-amber-400 font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{item.location}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-blue-400 font-semibold">
                <Wrench className="w-3.5 h-3.5" />
                <span>{item.chairType}</span>
              </span>
            </div>
            
            {item.beforeImage && (
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-white/20">
                Viewing: {viewMode === 'before' ? 'Original Damaged State' : 'Completed Doorstep Repair'}
              </span>
            )}
          </div>
        </div>

        {/* Information & Action Details */}
        <div className="p-6 text-left space-y-4 bg-white">
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mt-2">
              {item.description}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs text-slate-700">
            <span className="flex items-center gap-1.5 font-medium text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Tested &amp; Handed Over with 6-Month Official On-Site Warranty</span>
            </span>
            <span className="text-slate-500 font-semibold hidden sm:inline">
              Doorstep Twin Cities
            </span>
          </div>

          {/* Bottom Action Buttons (Back + Book + WhatsApp) */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            
            {/* Back Button */}
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-slate-600" />
              <span>Back to Gallery</span>
            </button>

            {/* Book Service Button */}
            <button
              onClick={() => {
                onClose();
                onBookService(item.categoryLabel);
              }}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doorstep Repair for This</span>
            </button>

            {/* WhatsApp Quote Button */}
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp This Photo</span>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};
