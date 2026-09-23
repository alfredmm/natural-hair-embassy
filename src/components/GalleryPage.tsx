import React, { useState } from 'react';
import { PageType, GalleryItem } from '../types';
import { GALLERY_ITEMS, RETIGHTENING_IMAGE, SALON_INFO } from '../data/salonData';
import {
  Sparkles,
  Calendar,
  X,
  Clock,
  Layers,
  Check,
  ChevronRight,
  Info,
  Maximize2,
  ShieldCheck,
  ArrowRight,
  Phone,
  ExternalLink
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { getGalleryStyleWhatsAppUrl, createWhatsAppUrl } from '../utils/whatsapp';

interface GalleryPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

type FilterCategory = 'all' | 'installations' | 'maintenance' | 'journeys';

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'ALL WORK' },
    { id: 'installations', label: 'INSTALLATIONS' },
    { id: 'maintenance', label: 'MAINTENANCE & RETIGHTENING' },
    { id: 'journeys', label: 'MATURE CLIENT JOURNEYS' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Client journey progression timeline
  const journeyStages = [
    {
      stage: 'Month 0 — The Foundation',
      subtitle: 'Precision Installation & Geometric Starter Grid for Women',
      characteristics: 'Clean scalp partings, uniform square grid distribution, lightweight starter locks using 4-point rotation.',
      careFocus: 'Braiding and banding before washing, zero heavy products, scalp hydration misting only.',
      clientExperience: 'Immediate scalp comfort, freedom from daily styling, initial settling phase.'
    },
    {
      stage: 'Months 3–6 — The Budding Phase',
      subtitle: 'Texture Swelling & Internal Matrix Formation',
      characteristics: 'The hair begins to expand inside the lock shaft, creating the classic spongy feel of budding locks.',
      careFocus: 'Consistent 4–6 week retightenings to catch any root slippage and separate the locks at every wash.',
      clientExperience: 'Embracing the texture! Frizz is the raw material that knots and matures your locks.'
    },
    {
      stage: 'Months 7–12 — The Shooting Phase',
      subtitle: 'Uniform Density & Weight Formation',
      characteristics: 'Locks condense, become firmer, and begin to hang with noticeable downward weight and movement.',
      careFocus: 'Gentle clarifying washes, inspecting root integrity, nighttime satin bonnet protection.',
      clientExperience: 'Effortless morning shake-and-go styling with high volume and density.'
    },
    {
      stage: 'Year 2+ — Mature Flourishing Locks',
      subtitle: 'Complete Maturation & Maximum Length Retention',
      characteristics: 'Sealed ends, solid cylindrical lock structure, incredible natural sheen, and versatile updos.',
      careFocus: 'Bi-monthly 6–8 week maintenance, botanical rinses, seasonal deep-cleansing.',
      clientExperience: 'Complete hair liberation, waist or back length retention, and unmatched crown pride.'
    }
  ];

  const defaultWhatsAppUrl = createWhatsAppUrl(
    "Hello Zainab! I'm viewing Our Work (Clients) on your website and would like to book a consultation or check availability."
  );

  return (
    <div className="space-y-16 sm:space-y-28 pt-8 sm:pt-12">
      {/* =========================================================================
          HERO SECTION — "Our Work (Clients)"
         ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181410] border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Real Client Transformations for Women</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Our Work (Clients)
        </h1>

        <p className="font-serif italic text-2xl sm:text-3xl text-[#C5A059] mt-2">
          Every Woman's Lock Journey Is Unique.
        </p>

        <p className="text-base sm:text-lg text-[#EDE7DF] mt-5 leading-relaxed max-w-2xl mx-auto">
          Explore real client transformations crafted at Natural Hair Embassy in Marietta, GA. From clean square-grid Microlocs/Sisterlocks™ installations to ongoing retightenings, transfer client recoveries, and mature crown styling, our portfolio showcases the artistry and precision dedicated exclusively to women.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={SALON_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0907] text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Online (Naturalhairembassy.as.me)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#172418] hover:bg-[#203322] text-[#60D869] hover:text-white border border-[#274029] hover:border-[#25D366] text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Book in WhatsApp</span>
          </a>
        </div>

        {/* Cinematic Featured Photo */}
        <div className="mt-10 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/40 bg-[#120F0D]">
          <img
            src={RETIGHTENING_IMAGE}
            alt="Artisan Microlocs and Sisterlocks on women clients by Natural Hair Embassy"
            referrerPolicy="no-referrer"
            className="w-full h-[320px] sm:h-[460px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0907] via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full bg-[#120F0D]/85 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#C5A059]/30">
              <p className="text-xs sm:text-sm text-white font-medium">
                Showcasing healthy women's natural hair retention and tension-free interlocking craft.
              </p>
              <span className="text-[11px] text-[#C5A059] font-mono shrink-0">
                Open Mon–Thu, Sat–Sun 9am–4pm
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GALLERY CATEGORIES FILTER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-12">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C5A059] text-[#0B0907] shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                    : 'bg-[#14100D] text-[#BDB2A6] hover:text-white border border-[#2B231C] hover:border-[#C5A059]/50'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid of Real Client Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group rounded-3xl overflow-hidden bg-[#120F0D] border border-[#261E18] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-[#181410]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#0B0907]/90 text-[#C5A059] text-[10px] uppercase font-bold tracking-wider border border-[#C5A059]/40 backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0907] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white font-semibold bg-[#16120E]/90 px-3.5 py-1.5 rounded-full border border-[#C5A059]/50">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>View Client Details</span>
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#E2BC68] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EDE7DF] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-[#231C16]">
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-[#181410] border border-[#271F19]">
                      <span className="text-[#8C7D70] block text-[9px] uppercase tracking-wider">Texture</span>
                      <span className="font-medium text-white truncate block">{item.hairDetails.texture}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#181410] border border-[#271F19]">
                      <span className="text-[#8C7D70] block text-[9px] uppercase tracking-wider">Stage</span>
                      <span className="font-medium text-[#C5A059] truncate block">{item.hairDetails.journeyStage}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <a
                      href={SALON_INFO.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#C5A059] hover:text-[#E2BC68] uppercase tracking-wider"
                    >
                      <span>Book Online</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={getGalleryStyleWhatsAppUrl(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] text-[#60D869] hover:text-white"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CLIENT JOURNEY PROGRESSION TIMELINE
         ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#120F0D] rounded-3xl p-8 sm:p-14 border border-[#C5A059]/40 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] block mb-2">
              Education For Women
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              The Microlocs/Sisterlocks™ Maturation Journey
            </h2>
            <p className="text-xs sm:text-sm text-[#EDE7DF] mt-2 leading-relaxed">
              Locks are living, evolving crowns. Understanding each stage helps women embrace natural texture changes with complete peace of mind.
            </p>
          </div>

          <div className="space-y-6">
            {journeyStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#181410] border border-[#2B231C] space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#261E18] pb-3">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#C5A059]">
                    {stage.stage}
                  </h3>
                  <span className="text-xs text-[#EDE7DF] italic">
                    {stage.subtitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#EDE7DF]">
                  <div>
                    <strong className="text-white block mb-1">Lock Characteristics:</strong>
                    <p className="leading-relaxed">{stage.characteristics}</p>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Maintenance & Care:</strong>
                    <p className="leading-relaxed">{stage.careFocus}</p>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">The Client Experience:</strong>
                    <p className="leading-relaxed">{stage.clientExperience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={SALON_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0907] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Assessment Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAILED ITEM MODAL
         ========================================================================= */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#120F0D] rounded-3xl shadow-2xl border border-[#C5A059]/50 overflow-hidden">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#181410] hover:bg-[#261E17] text-white hover:text-[#C5A059] border border-[#2E251E] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto h-full min-h-[300px] bg-black">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-5 flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#1C1712] text-[#C5A059] text-[10px] uppercase font-bold tracking-wider border border-[#C5A059]/40">
                    {selectedItem.categoryLabel}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-white mt-3">
                    {selectedItem.title}
                  </h3>

                  <p className="text-xs text-[#EDE7DF] mt-2 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="mt-5 space-y-2.5 p-4 rounded-xl bg-[#181410] border border-[#2B231C] text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#8C7D70]">Texture Profile:</span>
                      <span className="font-medium text-white">{selectedItem.hairDetails.texture}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C7D70]">Density:</span>
                      <span className="font-medium text-white">{selectedItem.hairDetails.density}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C7D70]">Maturation Stage:</span>
                      <span className="font-medium text-[#C5A059]">{selectedItem.hairDetails.journeyStage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C7D70]">Interlocking Craft:</span>
                      <span className="font-medium text-white">{selectedItem.hairDetails.technique}</span>
                    </div>
                  </div>

                  {selectedItem.highlightQuote && (
                    <blockquote className="mt-4 text-xs italic text-[#C5A059] border-l-2 border-[#C5A059] pl-3 py-0.5">
                      "{selectedItem.highlightQuote}"
                    </blockquote>
                  )}
                </div>

                <div className="pt-4 border-t border-[#261E18] space-y-2.5">
                  <a
                    href={SALON_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0907] text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Online (Naturalhairembassy.as.me)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={getGalleryStyleWhatsAppUrl(selectedItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#172418] text-[#60D869] hover:text-white border border-[#274029] text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Ask About This Style in WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
