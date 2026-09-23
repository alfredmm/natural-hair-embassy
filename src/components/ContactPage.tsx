import React from 'react';
import { PageType } from '../types';
import { SALON_INFO, CONSULTATION_CHECKLIST } from '../data/salonData';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const defaultWhatsAppUrl = createWhatsAppUrl(
    "Hello Zainab! I'm visiting the Natural Hair Embassy website and would like to inquire about booking an appointment or Transfer Client Loc Assessment at your Marietta studio."
  );

  return (
    <div className="space-y-16 sm:space-y-28 pt-8 sm:pt-12">
      {/* =========================================================================
          PAGE HERO — "Contact Natural Hair Embassy"
         ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181410] border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Women's Microlocs/Sisterlocks™ Studio</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Contact Natural Hair Embassy
        </h1>

        <p className="font-serif italic text-2xl sm:text-3xl text-[#C5A059] mt-2">
          Ready to Start Your Lock Journey?
        </p>

        <p className="text-base sm:text-lg text-[#EDE7DF] mt-5 leading-relaxed max-w-2xl mx-auto">
          Dedicated exclusively to women. Whether you're considering Microlocs/Sisterlocks™ for the first time, need a Transfer Client Loc Assessment, or seek routine maintenance, we welcome you to book directly or reach out via WhatsApp.
        </p>

        {/* Primary Direct Booking & Contact Options */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={SALON_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0907] text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-[0_0_20px_rgba(197,160,89,0.35)] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0B0907]" />
            <span>Book Online (Naturalhairembassy.as.me)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#172418] hover:bg-[#203322] text-[#60D869] hover:text-white border border-[#274029] hover:border-[#25D366] text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Book in WhatsApp</span>
          </a>

          <a
            href={`tel:${SALON_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#181410] hover:bg-[#221C16] text-white text-xs font-semibold uppercase tracking-wider border border-[#C5A059]/60 hover:border-[#C5A059] transition-all cursor-pointer font-mono"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>Call {SALON_INFO.phone}</span>
          </a>
        </div>
      </section>

      {/* =========================================================================
          STUDIO HOURS & DIRECT CONTACT CHANNELS (Forms Removed, Replaced with Direct Channels)
         ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Booking Options Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#120F0D] border border-[#C5A059]/40 shadow-2xl space-y-6">
              <div className="border-b border-[#241E19] pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                  Instant Scheduling
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  Book Your Appointment
                </h3>
                <p className="text-xs text-[#BDB2A6] mt-1">
                  Direct online booking with real-time loctician availability.
                </p>
              </div>

              {/* Online Booking Button Card */}
              <a
                href={SALON_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-2xl bg-[#181410] border border-[#C5A059]/60 hover:border-[#C5A059] hover:bg-[#1E1813] transition-all shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#C5A059] text-[#0B0907] flex items-center justify-center shrink-0 font-bold shadow-md">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#E2BC68] transition-colors">
                          Live Online Calendar
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-[10px] font-semibold uppercase tracking-wider">
                          Recommended
                        </span>
                      </div>
                      <p className="text-xs text-[#BDB2A6] mt-1 leading-relaxed">
                        Book Microlocs/Sisterlocks™ consultations, Transfer Client Loc Assessments, or maintenance sessions.
                      </p>
                      <p className="text-xs text-[#C5A059] font-mono mt-2 flex items-center gap-1 font-bold">
                        <span>https://Naturalhairembassy.as.me</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              {/* WhatsApp Direct Chat Card */}
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-2xl bg-[#141C15] border border-[#274029] hover:border-[#25D366] hover:bg-[#1A261B] transition-all shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 font-bold shadow-md">
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#60D869] transition-colors">
                          WhatsApp Direct Contact
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-[#25D366]/20 text-[#60D869] text-[10px] font-semibold uppercase tracking-wider">
                          Quick Contact
                        </span>
                      </div>
                      <p className="text-xs text-[#BDB2A6] mt-1 leading-relaxed">
                        Have quick questions, want to send photos of your hair, or need guidance before booking? Chat directly with Zainab.
                      </p>
                      <p className="text-xs text-[#60D869] font-mono mt-2 flex items-center gap-1 font-bold">
                        <span>Start WhatsApp Chat</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Notice for Women */}
              <div className="p-4 rounded-xl bg-[#191512] border border-[#2F261E] flex items-start gap-3 text-xs text-[#EDE7DF]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  All services are dedicated exclusively to women in a private, serene studio suite designed for maximum comfort.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Hours & Location Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#120F0D] border border-[#C5A059]/40 shadow-2xl space-y-6">
              <div className="border-b border-[#241E19] pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                  Studio Details
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  Location & Operating Hours
                </h3>
              </div>

              {/* Exact Operating Hours Card */}
              <div className="p-5 rounded-2xl bg-[#181410] border border-[#29211A] space-y-3">
                <div className="flex items-center gap-2 text-[#C5A059] font-bold text-sm uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Studio Hours</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1.5 border-b border-[#261E18]">
                    <span className="text-white font-medium">Monday – Thursday</span>
                    <span className="font-mono text-[#C5A059] font-semibold">9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-[#261E18]">
                    <span className="text-[#A3968A] font-medium">Friday</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-950/60 border border-red-850 text-red-300 text-xs font-bold uppercase">
                      Closed
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-[#261E18]">
                    <span className="text-white font-medium">Saturday</span>
                    <span className="font-mono text-[#C5A059] font-semibold">9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-white font-medium">Sunday</span>
                    <span className="font-mono text-[#C5A059] font-semibold">9:00 AM – 4:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#181410] border border-[#29211A] space-y-2.5">
                <div className="flex items-center gap-2 text-[#C5A059] font-bold text-sm uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span>Studio Address</span>
                </div>
                <p className="text-sm text-white font-serif">
                  Natural Hair Embassy
                </p>
                <p className="text-xs text-[#EDE7DF] leading-relaxed">
                  1720 Powder springs Rd SW suite 130<br />
                  Marietta, GA 30064
                </p>
                <div className="pt-2">
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-[#E2BC68] font-semibold"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Phone Call Card */}
              <div className="p-5 rounded-2xl bg-[#181410] border border-[#29211A] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#221C16] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A3968A] uppercase tracking-wider block">Telephone</span>
                    <a href={`tel:${SALON_INFO.phoneRaw}`} className="font-mono text-sm text-white hover:text-[#C5A059] font-bold">
                      {SALON_INFO.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="px-4 py-2 rounded-full bg-[#1C1713] hover:bg-[#251E18] text-[#C5A059] border border-[#33271E] text-xs font-semibold"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONSULTATION AGENDA — What We Discuss During Your Assessment
         ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#120F0D] rounded-3xl p-8 sm:p-12 border border-[#C5A059]/40 shadow-xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] block mb-1">
              Assessment Framework
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Let's Talk About Your Hair
            </h2>
            <p className="text-sm text-[#EDE7DF] mt-2">
              During your consultation or Transfer Client Loc Assessment, we evaluate:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {CONSULTATION_CHECKLIST.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-[#181410] border border-[#2B231C]"
              >
                <div className="w-6 h-6 rounded-full bg-[#241D17] border border-[#C5A059]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                </div>
                <span className="text-sm text-[#EDE7DF] font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={SALON_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0907] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Assessment Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SOCIAL MEDIA — "Follow the Journey" with exact handles and URLs
         ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0E0C0A] rounded-3xl p-8 sm:p-12 border border-[#C5A059]/40 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181410] border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Connect With Natural Hair Embassy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Follow the Journey
            </h2>

            <p className="text-sm sm:text-base text-[#EDE7DF] leading-relaxed">
              Follow Natural Hair Embassy for our latest transformations for women, natural hair care tips, and Microlocs/Sisterlocks™ inspiration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {/* Instagram */}
            <a
              href={SALON_INFO.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#14100D] border border-[#2B231C] hover:border-[#C5A059] transition-all group flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1F1813] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] transition-colors mb-3">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#E2BC68] transition-colors">
                Instagram
              </h4>
              <p className="text-xs text-[#C5A059] font-mono mt-0.5">
                {SALON_INFO.socials.instagram.handle}
              </p>
              <span className="text-[11px] text-[#EDE7DF] mt-2 inline-flex items-center gap-1">
                <span>View Transformations</span>
                <ExternalLink className="w-3 h-3 text-[#C5A059]" />
              </span>
            </a>

            {/* TikTok */}
            <a
              href={SALON_INFO.socials.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#14100D] border border-[#2B231C] hover:border-[#C5A059] transition-all group flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1F1813] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] transition-colors mb-3">
                <TikTokIcon className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#E2BC68] transition-colors">
                TikTok
              </h4>
              <p className="text-xs text-[#C5A059] font-mono mt-0.5">
                {SALON_INFO.socials.tiktok.handle}
              </p>
              <span className="text-[11px] text-[#EDE7DF] mt-2 inline-flex items-center gap-1">
                <span>Watch Tutorials & Clips</span>
                <ExternalLink className="w-3 h-3 text-[#C5A059]" />
              </span>
            </a>

            {/* Facebook */}
            <a
              href={SALON_INFO.socials.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#14100D] border border-[#2B231C] hover:border-[#C5A059] transition-all group flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1F1813] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] transition-colors mb-3">
                <FacebookIcon className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#E2BC68] transition-colors">
                Facebook
              </h4>
              <p className="text-xs text-[#C5A059] font-mono mt-0.5">
                {SALON_INFO.socials.facebook.handle}
              </p>
              <span className="text-[11px] text-[#EDE7DF] mt-2 inline-flex items-center gap-1">
                <span>Community & Updates</span>
                <ExternalLink className="w-3 h-3 text-[#C5A059]" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
