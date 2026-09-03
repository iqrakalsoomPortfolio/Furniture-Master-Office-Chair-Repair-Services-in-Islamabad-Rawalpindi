import { ServiceItem } from '../types';

export const PRIMARY_SERVICES: ServiceItem[] = [
  {
    id: 'gas-lift',
    title: 'Hydraulic Gas Lift Replacement',
    shortDesc: 'Fix sinking, wobbling, or stuck chairs with certified heavy-duty Class-4 pneumatic cylinders.',
    fullDesc: 'Does your executive or task chair slowly sink down as you sit, or refuse to adjust up and down? A leaking pneumatic seal is the most common office chair failure. Our certified technicians replace worn-out cylinders on-site with commercial-grade Class-4 hydraulic gas lifts capable of supporting up to 200kg (440 lbs), restoring smooth height adjustment and zero wobble.',
    iconName: 'ArrowUpDown',
    image: 'https://images.unsplash.com/photo-1580481077195-c3a82da91883?auto=format&fit=crop&w=900&q=80', // Office chair component/ergonomic
    tag: 'Most Popular',
    startingPrice: 'Rs. 1,800',
    benefits: [
      'Certified Class-4 BIFMA standard cylinders for maximum safety and longevity',
      'Supports up to 200 kg with reinforced nitrogen pressure chamber',
      'Includes 6-Month On-Site Replacement Warranty',
      'Rapid 15-minute doorstep installation with no mess'
    ],
    commonSymptoms: [
      'Chair gradually sinks to the lowest level when sitting',
      'Height lever feels loose or does not actuate the valve',
      'Noticeable wobble or tilting at the center column',
      'Oil or dark grease residue visible around cylinder shaft'
    ],
    specs: [
      'Cylinder Travel Stroke: 100mm, 120mm, 140mm & 200mm high-stool sizes',
      'Standard Outer Diameter: 50mm (universal fit for 99% office chairs)',
      'Finish Options: Matte Black and Polished Mirror Chrome',
      'Test Standard: ANSI/BIFMA X5.1 Certified'
    ]
  },
  {
    id: 'base-and-wheels',
    title: 'Heavy Duty Wheels & Nylon/Chrome Base Replacement',
    shortDesc: 'Eliminate broken castors and cracked 5-star spider bases with scratch-free PU wheels and reinforced bases.',
    fullDesc: 'Broken wheel casters scratch hardwood floors and make moving sluggish, while a cracked five-star base poses an immediate tipping hazard. We carry ultra-durable nylon and heavy-gauge polished chrome spider bases (320mm & 350mm diameter) alongside premium polyurethane (PU) soft rollerblade-style wheels that glide silently without damaging tiles, marble, or parquet.',
    iconName: 'Disc',
    image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=900&q=80', // Chair base & materials
    tag: 'Safety Critical',
    startingPrice: 'Rs. 1,200 (Wheels Set)',
    benefits: [
      'Heavy-gauge 350mm polished chrome bases tested up to 250kg static load',
      'Silent dual-bearing PU wheels safe for parquet, wood, and porcelain tiles',
      'High-impact reinforced glass-filled nylon spider bases available',
      'Universal 11mm grip-ring stem compatible with all international brands'
    ],
    commonSymptoms: [
      'One or more wheels have popped out, snapped stem, or lost their rubber tread',
      'Wheel casters drag or seize up instead of rolling smoothly',
      'Spider arm of base shows hairline cracks or complete structural bend',
      'Floor scratches, black skid marks, or uneven chair leveling'
    ],
    specs: [
      'Wheel Types: 50mm Twin-Wheel Nylon, 60mm Heavy-Duty PU, 75mm Rollerblade Casters',
      'Base Diameters: 300mm, 320mm, 350mm Heavy Executive Diameter',
      'Material Grades: Solid Die-Cast Chrome Steel or Fiber-Reinforced PA6 Nylon',
      'Stem Size: Universal 11mm x 22mm (7/16" x 7/8")'
    ]
  },
  {
    id: 'mechanism-repair',
    title: 'Mechanism Repair & Tilt Control',
    shortDesc: 'Restore smooth rocking, multi-position angle locking, and ergonomic backrest tension control.',
    fullDesc: 'If your chair tilts uncontrollably back, gets stuck in a forward recline, or the tilt-tension knob no longer resists, the internal spring mechanism or steel plate has failed. We service and replace standard butterfly mechanisms, multi-function synchronized tilt plates, and knee-tilt mechanisms for executive and gaming chairs, ensuring safe lumbar posture and effortless reclining.',
    iconName: 'Sliders',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80', // Professional office seating
    tag: 'Ergonomic Health',
    startingPrice: 'Rs. 2,200',
    benefits: [
      'Multi-lock synchronized reclining for optimal ergonomic posture',
      'Heavy-gauge pressed steel construction with anti-kickback safety',
      'Accurate tilt tension adjustment tailored to user body weight',
      'Direct replacement for executive, managerial, and ergonomic chairs'
    ],
    commonSymptoms: [
      'Chair will not stay upright; leans awkwardly backwards or sideways',
      'Reclining lever snaps, jams, or won’t engage the lock slots',
      'Loud clunking, creaking, or popping sounds when shifting weight',
      'Tension knob feels loose, spun out, or completely stiff'
    ],
    specs: [
      'Configurations: Butterfly Single-Lever, Dual-Lever Sync, 3-Paddle Knee Tilt',
      'Hole Patterns: Standard 150mm x 255mm, 150mm x 200mm, 140mm x 140mm',
      'Weight Capacity: Rated for 150kg–180kg continuous commercial duty',
      'Safety: Anti-rebound lock release feature'
    ]
  },
  {
    id: 're-upholstery',
    title: 'Re-Upholstery & Foam Refurbishment',
    shortDesc: 'Full fabric, breathable mesh, and premium leather replacement with high-density molded foam restoration.',
    fullDesc: 'Save up to 70% compared to purchasing new chairs by having your worn, torn, or sunken seats re-upholstered. We strip away decayed foam and replace it with high-density 40D molded polyurethane foam that never sags. Choose from breathable mesh fabrics, commercial tweed, or supple PU/Rexine leather available in a wide selection of executive colors.',
    iconName: 'Palette',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80', // Chair furniture craft
    tag: 'Cost Saver',
    startingPrice: 'Rs. 2,500',
    benefits: [
      'High-density 40-50D high-resilience foam prevents bottoming out',
      'Wide choice of commercial Grade-A fabrics, breathable mesh, and executive leatherette',
      'Corporate bulk discounts for conference rooms and call center floors',
      'Deep clean and anti-microbial fabric treatment included'
    ],
    commonSymptoms: [
      'Foam padding has flattened, causing discomfort on tailbone during long workdays',
      'Faux leather is peeling, flaking, or cracking around headrest and armpads',
      'Fabric is stained, faded, torn, or has cigarette/pen burns',
      'Breathable backrest mesh has lost its tension and sags'
    ],
    specs: [
      'Foam Material: 40D–50D High-Resilience Cold Cure Molded Foam',
      'Upholstery Choices: Commercial Polyester, Microfiber, Breathable Mesh, Executive PU Leather',
      'Color Palette: Corporate Black, Charcoal Grey, Navy Blue, Maroon, Tan Brown',
      'Turnaround: On-site foam replacement or 24-48h workshop turnaround for bulk lots'
    ]
  }
];

export const SERVICE_AREAS = {
  islamabad: [
    'Blue Area (Commercial Hub)',
    'F-6, F-7, F-8, F-10, F-11 Sectors',
    'G-5, G-6, G-7, G-8, G-9, G-10, G-11 Sectors',
    'H-8, H-9, H-12 (NUST / Educational Hub)',
    'I-8, I-9, I-10 (Industrial & Tech Zones)',
    'DHA Phase 1 & Phase 2 Islamabad',
    'Bahria Town Islamabad (Phases 1-8)',
    'E-11, D-12, B-17 Multi Gardens',
    'PWD Housing & Pakistan Town',
    'Gulberg Greens & Park View City'
  ],
  rawalpindi: [
    'Saddar Rawalpindi (Commercial Center)',
    'Satellite Town & Commercial Market',
    'Westridge 1, 2, 3 & Peshawar Road',
    'Chaklala Scheme 3 & Airport Road',
    'Bahria Town Rawalpindi (Safari & Intellectual Village)',
    'Askari 10, 11, 13 & 14 Housing',
    'Gulraiz Housing Scheme & High Court Road',
    'Adyala Road & Tulsa Road',
    'Shamsabad & Murree Road',
    'Rawal Road & Chandni Chowk'
  ]
};

export const CHAIR_TYPES_SERVICED = [
  { 
    name: 'Executive High-Back Chairs', 
    desc: 'Heavy genuine & faux leather boss chairs with multi-lock tilt synchronizer',
    image: 'https://images.unsplash.com/photo-1580481077195-c3a82da91883?auto=format&fit=crop&w=600&q=80',
    tag: 'Leather & Boss'
  },
  { 
    name: 'Ergonomic Mesh Task Chairs', 
    desc: 'Herman Miller, Haworth, Merryfair, and imported high-tension mesh seating',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600&q=80',
    tag: 'Breathable Mesh'
  },
  { 
    name: 'Staff & Operator Chairs', 
    desc: 'Mid-back typing and computer workstation chairs for team desks',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80',
    tag: 'Team Workstations'
  },
  { 
    name: 'Conference & Boardroom Chairs', 
    desc: 'Sleek chrome sled-base, fixed swivel, and executive meeting room seating',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80',
    tag: 'Boardrooms'
  },
  { 
    name: 'Ergonomic Gaming Chairs', 
    desc: 'Racing bucket seats with 180° recline, 4D armrests, and heavy steel skeletons',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    tag: 'Gaming & Recline'
  },
  { 
    name: 'Reception & Visitor Seating', 
    desc: 'Sturdy guest chairs with cantilever chrome or wooden frames',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=600&q=80',
    tag: 'Guest & Lobby'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: '100% Doorstep Service',
    desc: 'No hassle of transporting heavy chairs. Our technician arrives with full toolkit and parts directly at your office or home in Islamabad/Rawalpindi.',
    icon: 'Truck'
  },
  {
    title: 'Certified Technicians',
    desc: 'Our staff have 10+ years specializing exclusively in office seating mechanics, hydraulics, and ergonomic alignment.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Genuine Class-4 Spare Parts',
    desc: 'We never use cheap unbranded scrap parts. Every cylinder is Class-4 BIFMA certified, bases are heavy-gauge, and wheels are floor-safe.',
    icon: 'CheckCircle2'
  },
  {
    title: '6-Month Service Warranty',
    desc: 'Peace of mind guaranteed. If any replaced part fails under normal use within 6 months, we replace it on-site for free.',
    icon: 'Award'
  },
  {
    title: 'Same-Day Fast Response',
    desc: 'Average arrival time within 60 to 90 minutes across major sectors of Islamabad & Rawalpindi for urgent repairs.',
    icon: 'Clock'
  },
  {
    title: 'Save Up to 70% vs Buying New',
    desc: 'Why spend Rs. 25,000–80,000 on new chairs when a professional rebuild makes your existing chairs feel brand new for a fraction of the price?',
    icon: 'BadgePercent'
  }
];
