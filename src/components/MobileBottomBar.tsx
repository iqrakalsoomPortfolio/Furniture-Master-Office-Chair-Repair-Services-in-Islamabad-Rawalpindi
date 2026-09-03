import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/923361572145?text=${encodeURIComponent(
    'Hello Furniture Master, I need an office chair repair in Islamabad/Rawalpindi.'
  )}`;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
      <a
        href="tel:03361572145"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs shadow-xs"
      >
        <Phone className="w-3.5 h-3.5 fill-current" />
        <span>Call Now</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-xs"
      >
        <MessageCircle className="w-3.5 h-3.5 fill-current" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Visit</span>
      </button>
    </div>
  );
};
