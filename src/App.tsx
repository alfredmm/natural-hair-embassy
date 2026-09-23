/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { GalleryPage } from './components/GalleryPage';
import { ContactPage } from './components/ContactPage';
import { BookingChoiceModal } from './components/BookingChoiceModal';
import { SALON_INFO } from './data/salonData';
import { Sparkles, Calendar, Phone } from 'lucide-react';
import { WhatsAppIcon } from './components/SocialIcons';
import { createWhatsAppUrl } from './utils/whatsapp';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingServiceTitle, setBookingServiceTitle] = useState<string | undefined>();

  // Synchronize with URL hash for intuitive navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'our-work' || hash === 'gallery' || hash === 'clients') {
        setCurrentPage('gallery');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else if (hash === 'home') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'gallery' ? 'our-work' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceTitle?: string) => {
    setBookingServiceTitle(serviceTitle);
    setIsBookingModalOpen(true);
  };

  const directWhatsAppUrl = createWhatsAppUrl(
    "Hello Zainab! I'm visiting Natural Hair Embassy and would like to book a consultation or check availability for women's Microlocs/Sisterlocks™ services."
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0907] text-[#EDE7DF] antialiased selection:bg-[#C5A059] selection:text-[#0B0907]">
      {/* Top Banner Notice - Luxury Dark & Gold */}
      <div className="bg-[#070504] text-[#E8DFC8] py-2 px-3 sm:px-4 text-center text-[10px] sm:text-xs tracking-wider border-b border-[#231C16]">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap leading-tight">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A059] shrink-0" />
          <span className="font-semibold text-white">Natural Hair Embassy</span>
          <span className="text-[#C5A059]">•</span>
          <span className="text-[#EDE7DF]">Marietta, GA</span>
          <span className="text-[#C5A059]">•</span>
          <span className="text-[#C5A059] font-medium">Specialized Microlocs/Sisterlocks™ Services for Women</span>
          <span className="hidden md:inline text-[#C5A059]">•</span>
          <span className="hidden md:inline text-[#EDE7DF]">Open Mon–Thu, Sat & Sun 9am–4pm (Closed Fri)</span>
        </div>
      </div>

      {/* Global Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Multi-Page Container */}
      <main className="flex-grow pb-20 sm:pb-0">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBookingWithService={handleOpenBooking}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Direct Booking Modal with Live As.me and WhatsApp Options */}
      <BookingChoiceModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceTitle={bookingServiceTitle}
      />

      {/* Mobile Sticky CTA Bar with Live Booking & WhatsApp */}
      <div className="fixed sm:hidden bottom-0 left-0 right-0 z-40 bg-[#0E0C0A]/95 backdrop-blur-md border-t border-[#C5A059]/30 p-2.5 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#172418] text-[#60D869] border border-[#274029] text-xs font-bold transition-colors"
          title="Chat or book in WhatsApp"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
        <a
          href={SALON_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0907] text-xs font-bold tracking-wide transition-all shadow-md"
        >
          <Calendar className="w-3.5 h-3.5 text-[#0B0907]" />
          <span>Book Online (9am-4pm)</span>
        </a>
      </div>
    </div>
  );
}
