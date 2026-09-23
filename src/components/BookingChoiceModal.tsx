import React from 'react';
import { X, Calendar, ArrowRight, ShieldCheck, Sparkles, Phone, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { WhatsAppIcon } from './SocialIcons';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export const BookingChoiceModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  serviceTitle
}) => {
  if (!isOpen) return null;

  const bookingUrl = SALON_INFO.bookingUrl;
  const whatsappMessage = serviceTitle
    ? `Hello Zainab! I'm on your website and would like to book or ask about "${serviceTitle}" at your Marietta studio.`
    : `Hello Zainab! I'm visiting Natural Hair Embassy and would like to book a consultation or check availability at your Marietta studio.`;
  const whatsappUrl = createWhatsAppUrl(whatsappMessage);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#120F0D] rounded-3xl shadow-2xl border border-[#C5A059]/40 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#0A0807] text-[#EDE7DF] p-6 sm:p-8 relative border-b border-[#241E19]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#181410] hover:bg-[#261E17] text-white hover:text-[#C5A059] border border-[#2E251E] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Book With Zainab</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Choose How to Book
          </h3>
          <p className="text-xs sm:text-sm text-[#BDB2A6] mt-1.5 leading-relaxed">
            Select your preferred booking option below. You can schedule online instantly or message us directly on WhatsApp for quick contact.
          </p>
          {serviceTitle && (
            <div className="mt-3 inline-block px-3 py-1 rounded-full bg-[#1C1712] border border-[#C5A059]/40 text-xs text-[#C5A059] font-medium">
              Selected: <span className="text-white">{serviceTitle}</span>
            </div>
          )}
        </div>

        {/* Modal Body: Direct Booking Options */}
        <div className="p-6 sm:p-8 space-y-4">
          {/* Option 1: Live Online Calendar Booking (Primary) */}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group block p-5 rounded-2xl bg-[#181410] border border-[#C5A059]/60 hover:border-[#C5A059] hover:bg-[#1F1914] transition-all shadow-md relative overflow-hidden"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#C5A059] text-[#0B0907] flex items-center justify-center shrink-0 font-bold shadow-md">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#E2BC68] transition-colors">
                      Book Online Instantly
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-[10px] font-semibold uppercase tracking-wider">
                      Recommended
                    </span>
                  </div>
                  <p className="text-xs text-[#BDB2A6] mt-1 leading-relaxed">
                    View real-time calendar availability and secure your appointment date and time directly.
                  </p>
                  <p className="text-[11px] text-[#C5A059] font-mono mt-1.5 flex items-center gap-1">
                    <span>Naturalhairembassy.as.me</span>
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#C5A059] group-hover:translate-x-1 transition-transform shrink-0 mt-2" />
            </div>
          </a>

          {/* Option 2: WhatsApp Direct Chat (Quick Contact) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group block p-5 rounded-2xl bg-[#141C15] border border-[#274029] hover:border-[#25D366] hover:bg-[#1A261B] transition-all shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 font-bold shadow-md">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#60D869] transition-colors">
                      Book or Chat in WhatsApp
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-[#25D366]/20 text-[#60D869] text-[10px] font-semibold uppercase tracking-wider">
                      Quick Contact
                    </span>
                  </div>
                  <p className="text-xs text-[#BDB2A6] mt-1 leading-relaxed">
                    Prefer direct messaging? Chat with Zainab about your hair, ask questions, or request an appointment.
                  </p>
                  <p className="text-[11px] text-[#60D869] font-mono mt-1.5 flex items-center gap-1">
                    <span>Direct Loctician Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#60D869] group-hover:translate-x-1 transition-transform shrink-0 mt-2" />
            </div>
          </a>

          {/* Studio Direct Phone Call */}
          <div className="pt-2 text-center">
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-xs text-[#BDB2A6] hover:text-[#C5A059] transition-colors py-2 px-4 rounded-full bg-[#181410] border border-[#2B231C]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Or call the studio directly: <strong className="text-white font-mono">{SALON_INFO.phone}</strong></span>
            </a>
          </div>

          {/* Studio Hours and Policy Note */}
          <div className="p-3.5 rounded-xl bg-[#16120E] border border-[#2B231C] text-[11px] text-[#A3968A] space-y-1">
            <div className="flex items-center gap-1.5 text-[#C5A059] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Women's Microlocs / Sisterlocks™ Specialist Studio</span>
            </div>
            <p>
              Open Mon–Thu, Sat & Sun: 9:00 AM – 4:00 PM • Closed Fridays. Studio in Marietta, GA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
