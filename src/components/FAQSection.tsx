import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQS_DATA } from '../data/faqsData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions — Office Chair &amp; Table Repair Islamabad
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our doorstep revolving chair repair, Class-4 gas lift replacement, pricing, and 6-month warranty in Islamabad and Rawalpindi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-blue-50/40 border-blue-300 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-slate-900 text-base sm:text-lg flex-1">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-blue-100/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3 pt-3 border-t border-blue-100/40 flex items-center gap-4 text-xs font-semibold text-blue-700">
                      <span>Category: {faq.category}</span>
                      <span>•</span>
                      <a href="tel:03361572145" className="hover:underline flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" /> Call Technician
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading font-bold text-lg text-white">
              Have a specific chair issue not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200">
              Send a 10-second photo or video of your broken chair on WhatsApp for an instant quote!
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/923361572145?text=Hi%20Furniture%20Master,%20I%20need%20chair%20repair%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-md flex items-center gap-2 transition-transform active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Photo</span>
            </a>
            <a
              href="tel:03361572145"
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md flex items-center gap-2 transition-transform active:scale-95"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>0336-1572145</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
