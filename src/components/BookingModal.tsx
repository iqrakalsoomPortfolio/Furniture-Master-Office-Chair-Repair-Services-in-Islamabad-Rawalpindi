import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, MapPin, Wrench, Send, MessageCircle } from 'lucide-react';
import { PRIMARY_SERVICES } from '../data/servicesData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  preselectedService 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Islamabad' as 'Islamabad' | 'Rawalpindi',
    sector: '',
    serviceId: preselectedService || 'gas-lift',
    chairCount: '1-2 chairs',
    urgency: 'Today (Same Day Doorstep)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refNum = 'FM-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(refNum);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const handleSendViaWhatsApp = () => {
    const selectedService = PRIMARY_SERVICES.find(s => s.id === formData.serviceId)?.title || 'Office Chair Repair';
    const message = `*NEW CHAIR REPAIR BOOKING (${referenceId})*\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📍 *Location:* ${formData.sector}, ${formData.city}\n` +
      `🛠️ *Service:* ${selectedService}\n` +
      `🪑 *Chairs:* ${formData.chairCount}\n` +
      `⏱️ *Time:* ${formData.urgency}\n` +
      (formData.notes ? `📝 *Notes:* ${formData.notes}\n` : '') +
      `\nPlease confirm technician arrival time.`;

    window.open(`https://wa.me/923361572145?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-xs">
              <Wrench className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg leading-tight">
                Book Doorstep Chair Repair
              </h3>
              <p className="text-blue-100 text-xs mt-0.5">
                Islamabad &amp; Rawalpindi • Same-Day Technician Visit
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono font-bold rounded-full mb-2">
                  Booking Ref: {referenceId}
                </span>
                <h4 className="text-2xl font-heading font-bold text-slate-900">
                  Doorstep Visit Requested!
                </h4>
                <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our senior technician will call you shortly on <strong>{formData.phone}</strong> to confirm the exact arrival time at your location in {formData.city}.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-left text-xs text-slate-700 space-y-1.5">
                <p className="font-semibold text-blue-900 text-sm">Booking Summary:</p>
                <p>• <strong>Location:</strong> {formData.sector}, {formData.city}</p>
                <p>• <strong>Selected Service:</strong> {PRIMARY_SERVICES.find(s => s.id === formData.serviceId)?.title || 'Office Chair Repair'}</p>
                <p>• <strong>Warranty:</strong> 6-Month On-Site Replacement Guarantee</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleSendViaWhatsApp}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send via WhatsApp for Faster Arrival</span>
                </button>
                <button
                  onClick={handleReset}
                  className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm cursor-pointer transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Ahmed"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0336-1572145"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Sector / Area / Landmark *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={formData.city === 'Islamabad' ? 'e.g. Blue Area, F-10, DHA Phase 2' : 'e.g. Saddar, Satellite Town, Bahria'}
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Required Service *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="gas-lift">Hydraulic Gas Lift Replacement (Sinking Chair)</option>
                  <option value="base-and-wheels">Wheels &amp; Heavy Duty Base Replacement</option>
                  <option value="mechanism-repair">Mechanism Repair &amp; Tilt-Lock Fix</option>
                  <option value="re-upholstery">Re-Upholstery &amp; Seat Foam Replacement</option>
                  <option value="table-repair">Office Table &amp; Workstation Desks Repair</option>
                  <option value="general-inspection">Complete Furniture Checkup &amp; Tune-up</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Number of Chairs
                  </label>
                  <select
                    value={formData.chairCount}
                    onChange={(e) => setFormData({ ...formData, chairCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="1 chair">1 Chair</option>
                    <option value="2-4 chairs">2–4 Chairs</option>
                    <option value="5-10 chairs">5–10 Chairs (Small Office)</option>
                    <option value="10+ chairs">10+ Chairs (Corporate Bulk)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Timeframe
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Today (Same Day Doorstep)">Today (Urgent Doorstep Visit)</option>
                    <option value="Tomorrow">Tomorrow Morning</option>
                    <option value="Weekend / Scheduled">This Weekend</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Chair Problem / Specific Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Boss chair slowly goes down when seated, wheels leave marks on floor..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-98 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Doorstep Booking Request</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>🛡️ No advance payment required</span>
                <span>⏱️ Rapid response in 60 mins</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
