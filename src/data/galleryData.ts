import { GalleryItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Executive Leather High-Back Gas Lift & Base Upgrade',
    category: 'gas-lift',
    categoryLabel: 'Gas Lift & Base',
    chairType: 'Executive Boss Chair',
    location: 'Blue Area, Islamabad (IT Firm)',
    image: 'https://images.unsplash.com/photo-1580481077195-c3a82da91883?auto=format&fit=crop&w=1000&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=1000&q=80',
    isBeforeAfter: true,
    description: 'The executive chair had a leaking hydraulic cylinder causing it to drop to minimum height, along with a cracked plastic star base. We installed a heavy-duty Class-4 black cylinder and a mirror-polished 350mm chrome steel base.'
  },
  {
    id: 'gal-2',
    title: 'Cracked Nylon Spider Base Replaced with Reinforced Chrome',
    category: 'base',
    categoryLabel: 'Base Replacement',
    chairType: 'Managerial Ergonomic Chair',
    location: 'F-7 Markaz, Islamabad (Law Firm)',
    image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?auto=format&fit=crop&w=1000&q=80',
    isBeforeAfter: false,
    description: 'Replaced a shattered five-star nylon spider arm with a solid 350mm die-cast chrome base tested for 250kg weight, plus silent anti-scratch PU casters.'
  },
  {
    id: 'gal-3',
    title: 'Full High-Density Foam & Black Leatherette Re-upholstery',
    category: 'upholstery',
    categoryLabel: 'Re-Upholstery',
    chairType: 'Boardroom Conference Chair',
    location: 'Saddar, Rawalpindi (Corporate HQ)',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    isBeforeAfter: true,
    description: 'Flaking faux leather stripped away and replaced with commercial breathable textured fabric over fresh 50D high-resilience molded seat foam.'
  },
  {
    id: 'gal-4',
    title: 'Synchronized Tilt Mechanism Overhaul & Cable Replacement',
    category: 'mechanism',
    categoryLabel: 'Mechanism Repair',
    chairType: 'Ergonomic Task Chair',
    location: 'I-9 Industrial Area, Islamabad',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80',
    isBeforeAfter: false,
    description: 'Repaired the locking gear teeth and tension spring, resolving an issue where the chair tilted backward uncontrollably without latching upright.'
  },
  {
    id: 'gal-5',
    title: 'Bulk 24-Staff Workstation Chair Wheel & Hydraulic Servicing',
    category: 'gas-lift',
    categoryLabel: 'Gas Lift',
    chairType: 'Call Center Operator Chairs',
    location: 'Bahria Town Phase 4, Rawalpindi',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    isBeforeAfter: false,
    description: 'Completed annual preventive maintenance and gas-lift overhaul for 24 workstation chairs within 3 hours on-site during after-hours.'
  },
  {
    id: 'gal-6',
    title: 'Anti-Scratch Polyurethane Soft Casters Installation',
    category: 'base',
    categoryLabel: 'Wheels & Base',
    chairType: 'Designer Home Office Chair',
    location: 'F-10/2, Islamabad (Architect Studio)',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1000&q=80',
    isBeforeAfter: false,
    description: 'Removed stiff plastic wheels scratching expensive wooden flooring. Installed clear rollerblade-style precision ball-bearing PU wheels.'
  },
  {
    id: 'gal-7',
    title: 'Ergonomic Mesh Seat Tensioning & Lumbar Support Re-fit',
    category: 'upholstery',
    categoryLabel: 'Re-Upholstery',
    chairType: 'Imported Ergonomic Mesh Chair',
    location: 'DHA Phase 2, Islamabad',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=1000&q=80',
    isBeforeAfter: false,
    description: 'Retensioned sagging polyester mesh backing and restored lumbar height sliders for long-hours software engineers.'
  },
  {
    id: 'gal-8',
    title: 'Heavy-Duty 200kg Class-4 Gas Cylinder Fitting on Gaming Chair',
    category: 'gas-lift',
    categoryLabel: 'Gas Lift',
    chairType: 'DXR-Style Gaming Chair',
    location: 'Satellite Town, Rawalpindi',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    isBeforeAfter: false,
    description: 'Upgraded stock 100kg cylinder to an industrial Class-4 reinforced chamber with anti-burst safety certification.'
  },
  {
    id: 'gal-9',
    title: 'Wobbly Base Center Hole Re-Bushing and Locking Plate',
    category: 'mechanism',
    categoryLabel: 'Mechanism Repair',
    chairType: 'Senior Director Chair',
    location: 'G-11 Markaz, Islamabad',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80',
    isBeforeAfter: false,
    description: 'Fixed severe lateral wobble caused by worn mechanism collar. Fitted reinforced steel bushing sleeve for rock-solid stability.'
  },
  {
    id: 'gal-10',
    title: 'Conference Room 12-Chair Leather Cushion Reconditioning',
    category: 'upholstery',
    categoryLabel: 'Re-Upholstery',
    chairType: 'Conference Sled & Swivel Chairs',
    location: 'Chaklala Scheme 3, Rawalpindi',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80',
    isBeforeAfter: false,
    description: 'Complete leatherette refinishing, armrest pad replacements, and deep foam conditioning for an engineering consultancy boardroom.'
  },
  {
    id: 'gal-11',
    title: 'Butterfly Mechanism Replacement with Anti-Drop Bracket',
    category: 'mechanism',
    categoryLabel: 'Mechanism Repair',
    chairType: 'Mid-Back Typing Chair',
    location: 'Westridge, Rawalpindi',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80',
    isBeforeAfter: false,
    description: 'Replaced cracked weld plate on the underside with a brand new reinforced heavy steel butterfly tilt controller.'
  },
  {
    id: 'gal-12',
    title: '350mm Heavy Duty Chrome Star Base with Dual Casters',
    category: 'base',
    categoryLabel: 'Base Replacement',
    chairType: 'Medical Clinic Doctor Chair',
    location: 'F-8 Markaz, Islamabad',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80',
    isBeforeAfter: false,
    description: 'Fitted mirror-finish hospital-grade chrome base with sanitary medical-grade non-marking hooded caster wheels.'
  }
];
