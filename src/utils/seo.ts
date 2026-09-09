import { PageType } from '../types';

interface PageSeoMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string;
}

export const SEO_METADATA_BY_PAGE: Record<PageType, PageSeoMetadata> = {
  home: {
    title: 'Office Chair & Table Repair Islamabad & Rawalpindi | Doorstep Service | Furniture Master',
    description: 'No.1 Doorstep office chair & table repair service in Islamabad & Rawalpindi. Heavy-duty Class-4 gas lift replacement, wheels, bases, mechanisms & upholstery with 6-month warranty. Call 0336-1572145.',
    canonicalPath: '',
    keywords: 'office chair repair islamabad, chair repair rawalpindi, revolving chair repair near me, kursi repair islamabad, kursi repairing rawalpindi, kursi repair karnay wala, kursi mechanic near me, kursi ka shock change, chair ka pump repair, office furniture mistri islamabad, hydraulic gas lift replacement islamabad, office chair gas cylinder change, chair wheels replacement, executive chair repair rawalpindi, boss chair repair islamabad, gaming chair repair islamabad, computer chair repair twin cities, office furniture repair blue area islamabad, chair repair saddar rawalpindi, bahria town chair repair, dha islamabad chair repair, office table repair islamabad, sinking chair fix doorstep'
  },
  services: {
    title: 'Chair & Table Repair Services Islamabad & Rawalpindi | Gas Lifts, Wheels, Bases & Foam',
    description: 'Specialized doorstep repair services across Islamabad & Rawalpindi: Class-4 hydraulic gas lifts, scratch-free PU wheels, chrome spider bases, tilt locks, and ergonomic executive re-upholstery.',
    canonicalPath: 'services',
    keywords: 'hydraulic cylinder repair islamabad, chair wheel replacement rawalpindi, revolving chair gas lift price, office chair mechanism repair, chair upholstery islamabad, boss chair foam repair, gaming chair mechanism replacement, table repair rawalpindi, workstation drawer channel repair'
  },
  about: {
    title: 'About Furniture Master | 10+ Years Office Furniture Mechanics in Islamabad & Rawalpindi',
    description: 'Meet Islamabad and Rawalpindi\'s leading office chair repair specialists. Over 10 years of trusted on-site service for multinational firms, government offices, co-working spaces, and home offices.',
    canonicalPath: 'about',
    keywords: 'about furniture master, office chair mechanics twin cities, commercial furniture repair islamabad, revolving chair mistri rawalpindi, corporate furniture AMC islamabad'
  },
  gallery: {
    title: 'Work Gallery & Before-After Transformations | Furniture Master Islamabad & Rawalpindi',
    description: 'View genuine before-and-after photographs of executive chairs, ergonomic mesh seating, and office tables repaired and restored across Islamabad and Rawalpindi.',
    canonicalPath: 'gallery',
    keywords: 'chair repair gallery islamabad, executive chair restoration photos rawalpindi, office chair repair portfolio, revolving chair before after photos'
  },
  contact: {
    title: 'Contact & Book Doorstep Chair Repair | Islamabad & Rawalpindi | 0336-1572145',
    description: 'Schedule a doorstep office chair mechanic across Islamabad & Rawalpindi. 60–90 minute rapid dispatch in Blue Area, F-Sectors, G-Sectors, I-Sectors, Saddar, DHA, and Bahria Town. Call 0336-1572145.',
    canonicalPath: 'contact',
    keywords: 'contact furniture master, chair repair phone number islamabad, whatsapp chair repair rawalpindi, doorstep chair mechanic contact 03361572145, office chair emergency repair twin cities'
  }
};

const BASE_CANONICAL = 'https://furniture-master-office-chair-repai.vercel.app/';

export function updatePageSeo(page: PageType): void {
  const meta = SEO_METADATA_BY_PAGE[page] || SEO_METADATA_BY_PAGE.home;
  const canonicalUrl = meta.canonicalPath ? `${BASE_CANONICAL}${meta.canonicalPath}` : BASE_CANONICAL;

  // 1. Update Title
  document.title = meta.title;

  // 2. Helper to set or update meta tags
  const setMetaTag = (attribute: string, key: string, content: string) => {
    let element = document.querySelector(`meta[${attribute}="${key}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, key);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // 3. Update Standard Meta Description & Keywords
  setMetaTag('name', 'description', meta.description);
  if (meta.keywords) {
    setMetaTag('name', 'keywords', meta.keywords);
  }

  // 4. Update OpenGraph Tags
  setMetaTag('property', 'og:title', meta.title);
  setMetaTag('property', 'og:description', meta.description);
  setMetaTag('property', 'og:url', canonicalUrl);
  setMetaTag('property', 'og:image', 'https://images.unsplash.com/photo-1580481077197-9e47265a88ba?auto=format&fit=crop&w=1200&q=80');

  // 5. Update Twitter Card Tags
  setMetaTag('name', 'twitter:title', meta.title);
  setMetaTag('name', 'twitter:description', meta.description);
  setMetaTag('name', 'twitter:image', 'https://images.unsplash.com/photo-1580481077197-9e47265a88ba?auto=format&fit=crop&w=1200&q=80');

  // 6. Update Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);
}
