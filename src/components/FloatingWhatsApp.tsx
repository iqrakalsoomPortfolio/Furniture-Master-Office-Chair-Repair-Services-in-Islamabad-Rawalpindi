import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = '923361572145';
  const whatsappMessage = encodeURIComponent(
    'Hello Furniture Master! I need an office chair repair estimate / doorstep technician in Islamabad/Rawalpindi.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 bg-white text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-emerald-100 max-w-xs animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-xs">
            <p className="font-bold text-slate-900 flex items-center gap-1.5">
              <span>Technicians Online</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </p>
            <p className="text-slate-600 text-[11px]">Send chair photos for instant repair quote!</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Furniture Master"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] active:scale-95 transition-all duration-200"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none"></span>
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10" />

        {/* Small Online Badge */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
        </span>
      </a>
    </aside>
  );
};
