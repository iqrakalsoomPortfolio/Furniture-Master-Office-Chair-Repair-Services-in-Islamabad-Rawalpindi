import React, { useState, useEffect } from 'react';
import { PageType, GalleryItem } from './types';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  // Sync with window.location.hash and pathname for robust GitHub Pages routing
  useEffect(() => {
    const syncRouteFromLocation = () => {
      try {
        // 1. Check hash first (e.g. #/about, #/services, #about, #/services/)
        const hash = window.location.hash
          .replace(/^#\/?/, '')
          .split('?')[0]
          .replace(/\/$/, '')
          .toLowerCase();

        if (['about', 'services', 'gallery', 'contact'].includes(hash)) {
          setCurrentPage(hash as PageType);
          return;
        }

        // 2. Direct pathname fallback for GitHub Pages (e.g. /repo-name/services or /services/)
        const pathSegments = window.location.pathname.split('/').filter(Boolean);
        const lastSegment = pathSegments[pathSegments.length - 1]
          ?.split('?')[0]
          .replace(/\/$/, '')
          .toLowerCase();

        if (lastSegment && ['about', 'services', 'gallery', 'contact'].includes(lastSegment)) {
          setCurrentPage(lastSegment as PageType);
          // Normalize to hash route for consistent client-side navigation
          window.history.replaceState(null, '', `#/${lastSegment}`);
          return;
        }

        setCurrentPage('home');
      } catch (err) {
        console.error('Routing sync error:', err);
        setCurrentPage('home');
      }
    };

    // Initial check on mount
    syncRouteFromLocation();

    window.addEventListener('hashchange', syncRouteFromLocation);
    window.addEventListener('popstate', syncRouteFromLocation);
    return () => {
      window.removeEventListener('hashchange', syncRouteFromLocation);
      window.removeEventListener('popstate', syncRouteFromLocation);
    };
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title for SEO
    const pageTitles: Record<PageType, string> = {
      home: 'Furniture Master | Office Chair Repair Islamabad & Rawalpindi',
      about: 'About Furniture Master | 10+ Years Office Chair Mechanics Twin Cities',
      services: 'Our Repair Services | Gas Lifts, Bases, Wheels & Upholstery',
      gallery: 'Work Gallery & Transformations | Furniture Master Islamabad',
      contact: 'Contact & Doorstep Booking | Furniture Master Twin Cities'
    };
    document.title = pageTitles[page] || 'Furniture Master | Office Chair Repair';
  };

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setIsBookingOpen(true);
  };

  const handleOpenLightbox = (item: GalleryItem) => {
    setActiveLightboxItem(item);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 pb-16 sm:pb-0">
      
      {/* Sticky Top Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Main Page Routing Container */}
      <main className="flex-1 w-full animate-in fade-in duration-300">
        <ErrorBoundary>
          {currentPage === 'home' && (
            <HomePage 
              onNavigate={navigateTo} 
              onOpenBooking={handleOpenBooking} 
              onOpenLightbox={handleOpenLightbox} 
            />
          )}

          {currentPage === 'about' && (
            <AboutPage 
              onNavigate={navigateTo} 
              onOpenBooking={() => handleOpenBooking()} 
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage 
              onNavigate={navigateTo} 
              onOpenBooking={handleOpenBooking} 
            />
          )}

          {currentPage === 'gallery' && (
            <GalleryPage 
              onNavigate={navigateTo} 
              onOpenBooking={() => handleOpenBooking()} 
              onOpenLightbox={handleOpenLightbox} 
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage />
          )}

          {/* Guaranteed fallback to HomePage if currentPage is an unrecognized route */}
          {!['home', 'about', 'services', 'gallery', 'contact'].includes(currentPage) && (
            <HomePage 
              onNavigate={navigateTo} 
              onOpenBooking={handleOpenBooking} 
              onOpenLightbox={handleOpenLightbox} 
            />
          )}
        </ErrorBoundary>
      </main>

      {/* Standard 4-Column Footer */}
      <Footer 
        onNavigate={navigateTo} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Always Visible Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Docked Mobile Bottom Action Bar */}
      <MobileBottomBar 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Quick Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preselectedService={preselectedService} 
      />

      {/* Gallery Lightbox Modal */}
      <LightboxModal 
        item={activeLightboxItem} 
        onClose={() => setActiveLightboxItem(null)} 
        onSelectItem={(item) => setActiveLightboxItem(item)}
        onBookService={(serviceName) => {
          setActiveLightboxItem(null);
          handleOpenBooking(serviceName);
        }} 
      />

    </div>
  );
}
