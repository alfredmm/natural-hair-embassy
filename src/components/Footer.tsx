import React from 'react';
import { PageType } from '../types';
import { SALON_INFO } from '../data/salonData';
import { ShieldCheck, ArrowUpRight, Clock, MapPin, Phone, Calendar, Sparkles, ExternalLink } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';
import { BrandLogo } from './BrandLogo';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const defaultWhatsAppUrl = createWhatsAppUrl(
    "Hello Zainab! I'm reaching out through the Natural Hair Embassy website to inquire about booking an appointment for women's Microlocs/Sisterlocks™ services."
  );

  return (
    <footer className="bg-[#070504] text-[#EDE7DF] border-t border-[#241E19] mt-24">
      {/* Top Pre-Footer Bar with Quick Choice */}
      <div className="border-b border-[#1E1914] py-8 bg-[#0B0907]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-11 h-11 rounded-full bg-[#181410] border border-[#C5A059]/50 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <p className="font-serif text-lg sm:text-xl text-white tracking-wide">
                Certified Loctician Care & Tension-Free Practice for Women
              </p>
              <p className="text-xs text-[#BDB2A6]">
                Rooted in healthy natural hair sciences, precision interlocking, and lifelong education in Marietta, GA.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181410] hover:bg-[#251E18] text-white text-xs font-semibold uppercase tracking-wider border border-[#2B231C] hover:border-[#C5A059] transition-all cursor-pointer font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call Us</span>
            </a>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#172418] hover:bg-[#203322] text-[#60D869] border border-[#274029] hover:border-[#25D366] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Book in WhatsApp</span>
            </a>

            <a
              href={SALON_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A059] text-[#0B0907] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-all cursor-pointer shadow-md shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Online</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Col 1: Brand & Bio Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center pb-2">
              <BrandLogo className="h-24 sm:h-28 lg:h-32 w-auto max-w-[360px] sm:max-w-[480px]" />
            </div>
            <p className="text-sm leading-relaxed text-[#BDB2A6] pr-4">
              Where women's natural hair is celebrated, nurtured, and transformed with care. Led by Certified Loctician Zainab Sawadogo, offering personalized Microlocs/Sisterlocks™ installations, transfer assessments, and ongoing maintenance.
            </p>
            <div className="pt-2 flex items-center gap-2.5 text-xs text-[#C5A059]">
              <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span className="text-[#EDE7DF]">Accepting New Women Clients & Transfer Locks</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] font-semibold text-[#C5A059]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#BDB2A6]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>Our Work (Clients)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Studio Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] font-semibold text-[#C5A059] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              Studio Hours
            </h4>
            <div className="space-y-2 text-xs text-[#EDE7DF]">
              <div className="flex justify-between pb-1 border-b border-[#1E1914]">
                <span>Monday – Thursday</span>
                <span className="font-mono text-[#C5A059]">9:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-[#1E1914]">
                <span className="text-[#8C7D70]">Friday</span>
                <span className="text-red-400 font-semibold uppercase">Closed</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-[#1E1914]">
                <span>Saturday</span>
                <span className="font-mono text-[#C5A059]">9:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-mono text-[#C5A059]">9:00 AM – 4:00 PM</span>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-[#A3968A]">
              Open 6 days a week (Closed Fridays) by appointment for dedicated loctician focus.
            </div>
          </div>

          {/* Col 4: Studio Location & Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] font-semibold text-[#C5A059] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              Marietta Studio
            </h4>
            <p className="text-xs text-[#BDB2A6] leading-relaxed">
              {SALON_INFO.streetAddress}<br />
              {SALON_INFO.cityStateZip}
            </p>
            <div className="pt-1">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C5A059] hover:text-[#E2BC68] transition-colors inline-flex items-center gap-1"
              >
                <span>View Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="pt-2">
              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="font-mono text-sm text-white hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{SALON_INFO.phone}</span>
              </a>
            </div>
            <div className="pt-3">
              <a
                href={SALON_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] font-bold uppercase tracking-wider hover:underline"
              >
                <span>Naturalhairembassy.as.me</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links Row */}
        <div className="border-t border-[#1C1713] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8C7D70]">
            © {new Date().getFullYear()} Natural Hair Embassy. Sisterlocks™ is a registered trademark of Sisterlocks. All rights reserved. Specialized loctician services for women.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={SALON_INFO.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#181410] border border-[#2B231C] hover:border-[#C5A059] flex items-center justify-center text-[#BDB2A6] hover:text-[#C5A059] transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={SALON_INFO.socials.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#181410] border border-[#2B231C] hover:border-[#C5A059] flex items-center justify-center text-[#BDB2A6] hover:text-[#C5A059] transition-all"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>

            <a
              href={SALON_INFO.socials.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#181410] border border-[#2B231C] hover:border-[#C5A059] flex items-center justify-center text-[#BDB2A6] hover:text-[#C5A059] transition-all"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#141C15] border border-[#274029] hover:border-[#25D366] flex items-center justify-center text-[#60D869] hover:text-white transition-all"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
