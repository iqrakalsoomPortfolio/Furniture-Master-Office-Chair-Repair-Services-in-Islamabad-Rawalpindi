import React, { useState } from 'react';
import { PageType } from '../types';
import { PRIMARY_SERVICES, CHAIR_TYPES_SERVICED, TABLE_TYPES_SERVICED } from '../data/servicesData';
import { 
  ArrowUpDown, 
  Disc, 
  Sliders, 
  Palette, 
  Wrench, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Phone, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  Zap,
  DollarSign
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ 
  onNavigate, 
  onOpenBooking 
}) => {
  const [activeCategory, setActiveCategory] = useState<'chairs' | 'tables'>('chairs');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ArrowUpDown': return <ArrowUpDown className="w-6 h-6" />;
      case 'Disc': return <Disc className="w-6 h-6" />;
      case 'Sliders': return <Sliders className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full">
      {/* 1. Page Header with Office Background */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Office furniture and chair repair service"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-blue-950/85"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-400/20">
            Professional Doorstep Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Office Chairs &amp; Workstations Repair Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Class-4 gas cylinders, heavy-duty chrome bases, PU caster wheels, reclining mechanisms, custom upholstery, and conference table hardware across Islamabad &amp; Rawalpindi.
          </p>
        </div>
      </section>

      {/* 2. Detailed Service Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {PRIMARY_SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div 
                key={service.id}
                id={`service-${service.id}`}
                className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Text Column (7 cols) */}
                  <div className={`space-y-6 text-left lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Badge & Title */}
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                          {getServiceIcon(service.iconName)}
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                          {service.tag}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          Starts at: <strong className="text-slate-900">{service.startingPrice}</strong>
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Common Symptoms */}
                    <div className="bg-white rounded-xl p-4 border border-slate-200/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1.5 mb-2.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Common Signs You Need This Repair:</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {service.commonSymptoms.map((symptom, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Benefits */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        What’s Included:
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onOpenBooking(service.id)}
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md cursor-pointer transition-all flex items-center gap-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Request This Service</span>
                      </button>

                      <a
                        href={`https://wa.me/923361572145?text=${encodeURIComponent(
                          `Hello Furniture Master, I need an estimate for ${service.title} in Islamabad/Rawalpindi.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-xs transition-colors flex items-center gap-2"
                      >
                        <span>WhatsApp Quick Quote</span>
                      </a>
                    </div>

                  </div>

                  {/* Image & Specifications Column (5 cols) */}
                  <div className={`space-y-4 lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3 relative bg-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 right-3 bg-slate-900/80 text-white text-[11px] font-semibold px-3 py-1 rounded-full backdrop-blur-xs flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>6-Month Warranty</span>
                      </div>
                    </div>

                    {/* Technical Specifications Box */}
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 text-left text-xs space-y-2">
                      <p className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-blue-600" />
                        <span>Technical Specifications:</span>
                      </p>
                      <ul className="space-y-1 text-slate-600">
                        {service.specs.map((spec, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-blue-500 font-bold">›</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 3. Furniture Models & Types Serviced with Rich Photos */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 text-left">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
                Furniture Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mt-2">
                Office Chairs, Desks &amp; Tables We Service
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Explore supported chair types and office table styles serviced across Islamabad &amp; Rawalpindi.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl shrink-0 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setActiveCategory('chairs')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === 'chairs'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Chairs (6 Types)
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('tables')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === 'tables'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tables &amp; Desks (4 Types)
              </button>
            </div>
          </div>

          {/* Chairs Showcase */}
          {activeCategory === 'chairs' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {CHAIR_TYPES_SERVICED.map((chair, i) => (
                <div 
                  key={i} 
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 hover:bg-white hover:shadow-md transition-all flex flex-col group"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-200">
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
                      className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold text-xs transition-colors cursor-pointer text-center"
                    >
                      Book Repair for This Chair
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tables Showcase */}
          {activeCategory === 'tables' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {TABLE_TYPES_SERVICED.map((table, i) => (
                <div 
                  key={i} 
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 hover:bg-white hover:shadow-md transition-all flex flex-col group"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-200">
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
                      className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold text-xs transition-colors cursor-pointer text-center"
                    >
                      Book Repair for This Table
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Transparent Pricing Matrix */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-md">
              Transparent Pricing
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
              Estimated Service &amp; Part Costs
            </h3>
            <p className="text-slate-600 text-sm">
              All prices include genuine replacement components and professional doorstep installation in Islamabad &amp; Rawalpindi.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-left">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-100 text-slate-700 text-xs uppercase font-semibold border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4">Service / Component</th>
                    <th className="px-6 py-4">Specification</th>
                    <th className="px-6 py-4">Warranty</th>
                    <th className="px-6 py-4 text-right">Standard Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-semibold text-slate-900">Class-4 Hydraulic Gas Lift</td>
                    <td className="px-6 py-4 text-xs text-slate-500">200kg rated, ANSI/BIFMA certified cylinder</td>
                    <td className="px-6 py-4 text-xs font-medium text-emerald-600">6 Months On-Site</td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900">Rs. 1,800 – 2,400</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-semibold text-slate-900">PU Soft Caster Wheels (Set of 5)</td>
                    <td className="px-6 py-4 text-xs text-slate-500">Silent, anti-scratch dual-bearing polyurethane</td>
                    <td className="px-6 py-4 text-xs font-medium text-emerald-600">6 Months On-Site</td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900">Rs. 1,200 – 1,600</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-semibold text-slate-900">Chrome Spider Base (350mm)</td>
                    <td className="px-6 py-4 text-xs text-slate-500">Heavy gauge polished steel, 250kg weight test</td>
                    <td className="px-6 py-4 text-xs font-medium text-emerald-600">6 Months On-Site</td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900">Rs. 2,200 – 2,800</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-semibold text-slate-900">Tilt Mechanism Replacement</td>
                    <td className="px-6 py-4 text-xs text-slate-500">Dual-paddle sync or butterfly steel plate</td>
                    <td className="px-6 py-4 text-xs font-medium text-emerald-600">6 Months On-Site</td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900">Rs. 2,200 – 3,500</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-semibold text-slate-900">Full Seat &amp; Back Re-Upholstery</td>
                    <td className="px-6 py-4 text-xs text-slate-500">50D molded foam + executive fabric / leatherette</td>
                    <td className="px-6 py-4 text-xs font-medium text-emerald-600">1 Year Stitching</td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900">Rs. 2,500 – 4,500</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-semibold text-slate-900">Table &amp; Desk Drawer Channels / Leveling</td>
                    <td className="px-6 py-4 text-xs text-slate-500">3-Fold ball-bearing slides, wobble realignment &amp; hardware</td>
                    <td className="px-6 py-4 text-xs font-medium text-emerald-600">6 Months On-Site</td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900">Rs. 1,500 – 2,500</td>
                  </tr>
                  <tr className="bg-blue-50/40">
                    <td className="px-6 py-4 font-semibold text-blue-900">Corporate Bulk Servicing (10+ units)</td>
                    <td className="px-6 py-4 text-xs text-slate-600">Full office chairs &amp; workstations maintenance audit</td>
                    <td className="px-6 py-4 text-xs font-medium text-emerald-600">Full AMC Support</td>
                    <td className="px-6 py-4 text-right font-bold text-blue-700">Special Discount</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2">
              <span>* Exact cost depends on chair/table make and model. Free diagnosis upon inspection.</span>
              <span className="font-semibold text-slate-700">No Hidden Visiting Charges on Completed Jobs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA: "Don't see your issue listed? Call us!" */}
      <section className="relative py-16 bg-slate-950 text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80"
            alt="Office furniture workshop"
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-slate-950/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-xs border border-white/10">
            Custom Repair Requests Welcome
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Need Custom Chair or Desk Repairs?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Call or WhatsApp us — we fix all types of office chairs, conference tables, computer workstations, and executive leather models!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:03361572145"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base shadow-lg flex items-center justify-center gap-2.5 transition-transform active:scale-98"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call: 0336-1572145</span>
            </a>

            <a
              href="tel:03451514212"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-base shadow-lg flex items-center justify-center gap-2.5 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call: 0345-1514212</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base border border-blue-400/40 backdrop-blur-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Inspection</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
