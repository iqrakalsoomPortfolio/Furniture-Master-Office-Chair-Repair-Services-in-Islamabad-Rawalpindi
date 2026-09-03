import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Facebook, 
  Instagram, 
  Linkedin,
  ShieldCheck,
  Building,
  Navigation
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    serviceRequired: 'Hydraulic Gas Lift Replacement',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*NEW CONTACT MESSAGE*\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📍 *Location:* ${formData.location}\n` +
      `🛠️ *Service:* ${formData.serviceRequired}\n` +
      `💬 *Message:* ${formData.message || 'Need chair repair assistance.'}`;

    window.open(`https://wa.me/923361572145?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-400/20">
            Immediate Response
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Get In Touch
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Book a doorstep chair repair technician or get an instant quote. We are active across all sectors of Islamabad and Rawalpindi.
          </p>
        </div>
      </section>

      {/* 2. Two-Column Layout (Form + Details) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact & Booking Form (7 Cols) */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xs text-left">
              <div className="mb-8">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-md">
                  Send a Request
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mt-2">
                  Request a Doorstep Technician
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Fill out this short form and our senior technician will call you within 15–30 minutes to confirm the appointment.
                </p>
              </div>

              {submitted ? (
                <div className="bg-white rounded-2xl p-8 text-center space-y-4 border border-emerald-100 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. We have received your inquiry for <strong>{formData.location}</strong>. Our technician is reviewing your request and will call you on <strong>{formData.phone}</strong>.
                  </p>

                  <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Forward Directly to WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Usman"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0336-1572145"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Location / Sector *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Blue Area, F-8, Saddar, Bahria"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Hydraulic Gas Lift Replacement">Hydraulic Gas Lift Replacement (Sinking / Won't stay up)</option>
                      <option value="Heavy Duty Wheels & Chrome Base">Heavy Duty Wheels &amp; Nylon / Chrome Base</option>
                      <option value="Mechanism Repair & Tilt Control">Mechanism Repair &amp; Tilt Control</option>
                      <option value="Executive Re-Upholstery & Foam">Re-Upholstery &amp; High-Density Foam</option>
                      <option value="Corporate Office Chair AMC / Bulk">Corporate Office Chairs Inspection (Bulk)</option>
                      <option value="Other Chair Issue">Other / General Inspection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Chair Details (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what's happening with your chair, number of chairs, or preferred visit time..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-md shadow-blue-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      <span>Submit Doorstep Request</span>
                    </button>
                  </div>

                  <p className="text-center text-xs text-slate-500 pt-1">
                    🛡️ No advance deposit needed. Pay on-site after job completion and testing.
                  </p>
                </form>
              )}
            </div>

            {/* Right: Contact Details Card (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Photo Banner */}
              <div className="relative h-48 rounded-3xl overflow-hidden shadow-md border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1541558869434-2840d308329a?auto=format&fit=crop&w=700&q=80"
                  alt="Furniture Master mobile technical squad"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">Doorstep Mobile Squad</span>
                  <p className="text-sm font-semibold text-white mt-0.5">Mobile technical units dispatched within 60–90 minutes across Twin Cities</p>
                </div>
              </div>

              {/* Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 space-y-8">
                <div>
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
                    Direct Contact
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mt-1">
                    Furniture Master Helpdesk
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Reach our technical dispatch team immediately via phone or WhatsApp.
                  </p>
                </div>

                {/* Details List */}
                <div className="space-y-6 text-sm">
                  
                  {/* Phone & WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase text-slate-400 font-semibold block">Call / WhatsApp:</span>
                      <a href="tel:03361572145" className="text-base font-bold text-white hover:text-amber-400 block transition-colors mt-0.5">
                        0336-1572145 (Primary)
                      </a>
                      <a href="tel:03451514212" className="text-sm font-semibold text-slate-300 hover:text-amber-400 block transition-colors">
                        0345-1514212 (Support)
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Quick Direct Link */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/20">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase text-slate-400 font-semibold block">Instant WhatsApp Chat:</span>
                      <a 
                        href="https://wa.me/923361572145" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 underline block mt-0.5"
                      >
                        Click to Chat on WhatsApp Now →
                      </a>
                      <span className="text-[11px] text-slate-400">Send chair photos for 5-min quote</span>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase text-slate-400 font-semibold block">Service Area:</span>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        Islamabad &amp; Rawalpindi
                      </p>
                      <p className="text-xs text-slate-400">
                        Blue Area, F-6 to F-11, G-Sectors, I-Sectors, DHA, Bahria Town, Saddar, Satellite Town, Westridge
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase text-slate-400 font-semibold block">Business Hours:</span>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        Mon – Sat: 9:00 AM – 8:00 PM
                      </p>
                      <p className="text-xs text-slate-400">
                        Sunday visits available for commercial offices upon appointment
                      </p>
                    </div>
                  </div>

                </div>

                {/* Social Media Links */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Follow Our Updates:</span>
                  <div className="flex items-center space-x-3">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-800 hover:bg-pink-600 text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-800 hover:bg-blue-700 text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Trust Callout */}
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-4">
                <ShieldCheck className="w-10 h-10 text-emerald-600 shrink-0" />
                <div className="text-xs text-emerald-950">
                  <p className="font-bold text-sm">6-Month Guarantee Card</p>
                  <p className="text-emerald-800 mt-0.5">
                    Every replaced hydraulic cylinder, chrome base, and caster wheel comes with an official printed warranty.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* 3. Embedded Google Map (Islamabad / Rawalpindi) */}
          <div className="mt-16 text-left space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-blue-600" />
                  <span>Doorstep Operational Coverage Map</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Centrally serving all residential and corporate zones across Islamabad &amp; Rawalpindi
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Active Mobile Units on Duty</span>
              </span>
            </div>

            <div className="w-full h-[380px] rounded-3xl overflow-hidden shadow-md border border-slate-200 relative bg-slate-100">
              <iframe
                title="Furniture Master Islamabad & Rawalpindi Service Zone"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106208.57143494726!2d72.9868742880757!3d33.68442017260515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1709400000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[0.2] contrast-[1.05]"
              ></iframe>
              
              {/* Overlay Tag */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-200 text-xs text-slate-800 max-w-xs pointer-events-none">
                <p className="font-bold text-slate-950 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Furniture Master Service Dispatch</span>
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Covering Blue Area, F/G/I Sectors, DHA, Bahria Town, Saddar &amp; Satellite Town.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Bottom CTA Banner (Repeating Phone Numbers Prominently) */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold">
            Instant Phone Dispatch
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Need An Immediate On-Site Chair Inspection?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto">
            Call our helpline directly or send photos of your damaged chair on WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              id="contact-call-primary"
              href="tel:03361572145"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-base shadow-lg flex items-center justify-center gap-2.5 transition-transform active:scale-98"
            >
              <Phone className="w-5 h-5 fill-current text-slate-950" />
              <span>Call Primary: 0336-1572145</span>
            </a>

            <a
              id="contact-call-secondary"
              href="tel:03451514212"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-950 hover:bg-black text-white font-bold text-base shadow-lg flex items-center justify-center gap-2.5 transition-colors"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Support Line: 0345-1514212</span>
            </a>
          </div>

          <p className="text-xs text-blue-200">
            Open Monday – Saturday 9:00 AM – 8:00 PM • Fast Doorstep Service
          </p>
        </div>
      </section>
    </div>
  );
};
