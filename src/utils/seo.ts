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
    keywords: 'office chair repair islamabad, chair repair rawalpindi, hydraulic gas lift replacement islamabad, doorstep chair repair twin cities, office furniture repair'
  },
  services: {
    title: 'Chair & Table Repair Services Islamabad & Rawalpindi | Gas Lifts, Wheels, Bases & Foam',
    description: 'Specialized doorstep repair services across Islamabad & Rawalpindi: Class-4 hydraulic gas lifts, scratch-free PU wheels, chrome spider bases, tilt locks, and ergonomic executive re-upholstery.',
    canonicalPath: '#/services',
    keywords: 'hydraulic cylinder repair islamabad, chair wheel replacement rawalpindi, office chair mechanism repair, chair upholstery islamabad, desk repair rawalpindi'
  },
  about: {
    title: 'About Furniture Master | 10+ Years Office Furniture Mechanics in Islamabad & Rawalpindi',
    description: 'Meet Islamabad and Rawalpindi\'s leading office chair repair specialists. Over 10 years of trusted on-site service for multinational firms, government offices, co-working spaces, and home offices.',
    canonicalPath: '#/about',
    keywords: 'about furniture master, office chair mechanics twin cities, commercial furniture repair islamabad'
  },
  gallery: {
    title: 'Work Gallery & Before-After Transformations | Furniture Master Islamabad & Rawalpindi',
    description: 'View genuine before-and-after photographs of executive chairs, ergonomic mesh seating, and office tables repaired and restored across Islamabad and Rawalpindi.',
    canonicalPath: '#/gallery',
    keywords: 'chair repair gallery islamabad, executive chair restoration photos rawalpindi, office chair repair portfolio'
  },
  contact: {
    title: 'Contact & Book Doorstep Chair Repair | Islamabad & Rawalpindi | 0336-1572145',
    description: 'Schedule a doorstep office chair mechanic across Islamabad & Rawalpindi. 60–90 minute rapid dispatch in Blue Area, F-Sectors, G-Sectors, I-Sectors, Saddar, DHA, and Bahria Town. Call 0336-1572145.',
    canonicalPath: '#/contact',
    keywords: 'contact furniture master, chair repair phone number islamabad, whatsapp chair repair rawalpindi'
  }
};

const BASE_CANONICAL = 'https://iqrakalsoom128.github.io/Furniture-Master-Office-Chair-Repair-Services-in-Islamabad-Rawalpindi/';

export function updatePageSeo(page: PageType): void {
  const meta = SEO_METADATA_BY_PAGE[page] || SEO_METADATA_BY_PAGE.home;

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
  setMetaTag('property', 'og:url', `${BASE_CANONICAL}${meta.canonicalPath}`);

  // 5. Update Twitter Card Tags
  setMetaTag('name', 'twitter:title', meta.title);
  setMetaTag('name', 'twitter:description', meta.description);

  // 6. Update Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', `${BASE_CANONICAL}${meta.canonicalPath}`);
}
