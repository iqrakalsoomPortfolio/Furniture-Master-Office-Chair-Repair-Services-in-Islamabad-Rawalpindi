export type PageType = 'home' | 'about' | 'services' | 'gallery' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  benefits: string[];
  commonSymptoms: string[];
  specs: string[];
  startingPrice: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'gas-lift' | 'base' | 'upholstery' | 'mechanism';
  categoryLabel: string;
  beforeImage?: string;
  afterImage?: string;
  image: string;
  description: string;
  chairType: string;
  location: string;
  isBeforeAfter?: boolean;
}

export interface ChairTypeItem {
  name: string;
  desc: string;
  image: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verifiedService: string;
  avatar?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  alternatePhone?: string;
  city: 'Islamabad' | 'Rawalpindi';
  sector: string;
  address: string;
  serviceType: string;
  chairCount: string;
  urgency: 'Same Day' | 'Tomorrow' | 'Within This Week';
  notes: string;
}
