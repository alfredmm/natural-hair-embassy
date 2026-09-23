import React, { useState } from 'react';
import { PageType } from '../types';
import { SALON_INFO } from '../data/salonData';
import { Calendar, Menu, X, Phone, ExternalLink } from 'lucide-react';
// import { BrandLogo } from './BrandLogo';
import logoImg from '../assets/images/Natural-Hair-Embassy-Logo-NoBG.png';
import { WhatsAppIcon } from './SocialIcons';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageType; label: string; number: string }[] = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'gallery', label: 'Our Work (Clients)', number: '02' },
    { id: 'contact', label: 'Contact', number: '03' },
  ];

  const handleNav = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const defaultWhatsAppUrl = createWhatsAppUrl(
    "Hello Zainab! I'm visiting Natural Hair Embassy and would like to inquire about booking a consultation or appointment for women's Microlocs/Sisterlocks™ services."
  );

  return (
    <header className="sticky top-0 z-40 bg-[#0B0907]/95 backdrop-blur-md border-b border-[#241E19] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-24 sm:min-h-28 lg:min-h-32 py-2 sm:py-2.5">
          {/* Brand Logo - Single enlarged logo for maximum clarity and visibility */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center text-left group focus:outline-none cursor-pointer pr-2 transition-transform duration-200 active:scale-[0.99]"
            id="brand-logo-btn"
            aria-label="Natural Hair Embassy Home"
          >
            {/* <BrandLogo className="h-16 sm:h-22 md:h-26 lg:h-28 w-auto max-w-[260px] xs:max-w-[320px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[560px]" /> */}
            <img
  src={logoImg}
  alt="Natural Hair Embassy"
  className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto max-w-[260px] xs:max-w-[320px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[560px] object-contain"
  draggable={false}
/>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`text-sm tracking-wide font-medium transition-all relative py-2 cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#BDB2A6] hover:text-white'
                  }`}
                >
                  <span className="text-[11px] text-[#C5A059] font-mono mr-1.5 opacity-90">
                    {item.number}
                  </span>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] rounded-full shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Desktop Action Button: Live Booking & WhatsApp */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-xs font-medium text-[#EDE7DF] hover:text-[#C5A059] transition-colors py-2 px-3 rounded-full bg-[#16120E] border border-[#2A221B] hover:border-[#C5A059]"
              title="Call studio directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-mono text-xs">{SALON_INFO.phone}</span>
            </a>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#172418] hover:bg-[#203322] text-[#60D869] border border-[#274029] hover:border-[#25D366] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              title="Book or chat on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={SALON_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-consultation-btn"
              className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-[#C5A059] text-[#0B0907] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all cursor-pointer shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Online</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile Right: Menu button only to keep header pristine & free of overlapping */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <a
              href={SALON_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xs:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#C5A059] text-[#0B0907] text-[11px] font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-all cursor-pointer shadow-sm"
            >
              <Calendar className="w-3 h-3 text-[#0B0907]" />
              <span>Book</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#191512] text-[#EDE7DF] hover:text-white border border-[#2E251E] focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C5A059]" /> : <Menu className="w-5 h-5 text-[#C5A059]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0D0B] border-b border-[#2E251E] px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-3 duration-200">
          <div className="space-y-1">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1D1814] text-white border-l-2 border-[#C5A059]'
                      : 'text-[#BDB2A6] hover:bg-[#16120E] hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs text-[#C5A059] font-mono">{item.number}</span>
                    <span className="font-serif text-base">{item.label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Direct Action Buttons inside menu */}
          <div className="pt-2 border-t border-[#231C16] space-y-2.5">
            <a
              href={SALON_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C5A059] text-[#0B0907] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-all shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Online (Naturalhairembassy.as.me)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#172418] text-[#60D869] hover:text-white border border-[#274029] text-xs font-bold uppercase tracking-wider transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Book or Chat in WhatsApp</span>
            </a>

            <div className="text-center pt-1 text-[11px] text-[#A3968A]">
              Open Mon–Thu, Sat & Sun: 9:00 AM – 4:00 PM • Closed Fridays
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
