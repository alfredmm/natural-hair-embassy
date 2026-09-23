import React, { useState } from 'react';
import { PageType, ServiceItem } from '../types';
import {
  HERO_IMAGE,
  ZAINAB_PORTRAIT,
  GRID_IMAGE,
  SERVICES,
  TESTIMONIALS,
  FAQS,
  SALON_INFO
} from '../data/salonData';
import {
  Sparkles,
  Award,
  Calendar,
  ArrowRight,
  ChevronDown,
  Clock,
  ShieldCheck,
  BookOpen,
  Check,
  MapPin,
  Phone,
  ExternalLink,
  Layers,
  Sparkle,
  Scissors,
  Compass
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { HeroProofOfWorkVideo } from './HeroProofOfWorkVideo';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenBookingWithService: (serviceTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookingWithService
}) => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(SERVICES[0]);

  // Luxury icons mapping for the 8 services
  const serviceIcons = [
    <Sparkles key="1" className="w-5 h-5 text-[#C5A059]" />,
    <ShieldCheck key="2" className="w-5 h-5 text-[#C5A059]" />,
    <Layers key="3" className="w-5 h-5 text-[#C5A059]" />,
    <Clock key="4" className="w-5 h-5 text-[#C5A059]" />,
    <Scissors key="5" className="w-5 h-5 text-[#C5A059]" />,
    <Sparkle key="6" className="w-5 h-5 text-[#C5A059]" />,
    <BookOpen key="7" className="w-5 h-5 text-[#C5A059]" />,
    <Compass key="8" className="w-5 h-5 text-[#C5A059]" />
  ];

  const defaultWhatsAppUrl = createWhatsAppUrl(
    "Hello Zainab! I'm on your website and would like to book a consultation or check availability for women's Microlocs/Sisterlocks™ services."
  );

  return (
    <div className="space-y-24 sm:space-y-36">
      {/* =========================================================================
          HERO SECTION — Autoplaying video background with Women-focused luxury messaging
         ========================================================================= */}
      <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden border-b border-[#231C16]">
        {/* Autoplay video background */}
        <HeroProofOfWorkVideo />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header Content */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-4 sm:px-6 py-6 sm:py-8">
            <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mb-6 opacity-90" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181410]/80 border border-[#C5A059]/50 text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A059] mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Microlocs/Sisterlocks™ for Women</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Healthy Hair. Beautiful Locks. <br />
              <span className="text-[#C5A059] font-normal italic">Naturally You.</span>
            </h1>

            <p className="text-base sm:text-lg text-white mt-6 sm:mt-7 leading-relaxed max-w-2xl mx-auto font-medium">
              Welcome to Natural Hair Embassy, where women's natural hair is celebrated, nurtured, and transformed with precision care.
            </p>

            <p className="text-sm sm:text-base text-[#EDE7DF] mt-3 sm:mt-4 leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you're a woman beginning your Microlocs/Sisterlocks™ journey, transferring existing locks, or seeking routine retightening, you'll receive dedicated, tension-free service in our private Marietta studio suite.
            </p>

            {/* Primary Action Button Group */}
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <a
                href={SALON_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-book-online-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0907] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-[0_0_20px_rgba(197,160,89,0.35)] cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-[#0B0907]" />
                <span>BOOK ONLINE NOW</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#172418] hover:bg-[#203322] text-[#60D869] hover:text-white border border-[#274029] hover:border-[#25D366] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>BOOK IN WHATSAPP</span>
              </a>

              <button
                onClick={() => onNavigate('gallery')}
                id="hero-explore-work-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#181410]/80 hover:bg-[#231E18] text-white text-xs font-semibold uppercase tracking-wider border border-[#C5A059]/50 hover:border-[#C5A059] transition-all cursor-pointer backdrop-blur-sm"
              >
                <span>OUR WORK (CLIENTS)</span>
              </button>
            </div>

            {/* Operating Hours Callout */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-[#E8DFC8]">
              <span className="px-3 py-1 rounded-full bg-[#14100D]/90 border border-[#2F261E]">
                Studio Hours: Mon–Thu, Sat & Sun: <strong className="text-white">9:00 AM – 4:00 PM</strong> • <span className="text-[#C5A059]">Closed Fridays</span>
              </span>
            </div>
          </div>

          {/* Hero Feature Photo with Editorial Badge */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/40 bg-[#120F0D]">
              <img
                src={HERO_IMAGE}
                alt="Flourishing mature microlocs / Sisterlocks on women clients by Natural Hair Embassy"
                referrerPolicy="no-referrer"
                className="w-full h-[340px] sm:h-[480px] lg:h-[560px] object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
              />

              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0907] via-[#0B0907]/30 to-transparent flex items-end p-6 sm:p-10">
                <div className="bg-[#120F0D]/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-[#C5A059]/30 shadow-2xl max-w-md">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059] mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Women's Loctician Studio • Marietta, GA</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Precision Interlocking & Scalp Wellness
                  </h3>
                  <p className="text-xs text-[#EDE7DF] mt-1.5 leading-relaxed">
                    Customized grid architecture tailored to curl diameter, density, and natural lifestyle for women.
                  </p>
                  <div className="mt-3.5 flex items-center justify-between text-[11px] text-[#A3968A] border-t border-[#29211A] pt-3">
                    <span className="text-[#C5A059] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C5A059]" />
                      1720 Powder springs Rd SW
                    </span>
                    <span className="font-mono text-white">+1(912)572-2495</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INTRODUCTION — Philosophy of Care for Women
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text on one side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181410] border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Philosophy of Care</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2]">
              Your Hair Journey Deserves Personalized Care.
            </h2>

            <div className="w-16 h-[2px] bg-[#C5A059]" />

            <div className="space-y-4 text-base text-[#EDE7DF] leading-relaxed">
              <p>
                At <strong className="text-white">Natural Hair Embassy</strong>, we believe that locks are far more than a hairstyle—they are an intimate, empowering journey of natural freedom and self-expression designed exclusively for women.
              </p>
              <p>
                Our studio focuses on three foundational pillars: <strong className="text-[#C5A059]">healthy natural hair</strong>, <strong className="text-[#C5A059]">beautiful Microlocs/Sisterlocks™</strong>, and <strong className="text-[#C5A059]">client education</strong>. We reject one-size-fits-all methods in favor of meticulous, customized interlocking techniques that respect your scalp and celebrate your hair’s unique texture.
              </p>
              <p>
                From your initial consultation or Transfer Client Loc Assessment through installation and continuous maintenance, you receive one-on-one professional attention designed to help your crown flourish for years to come.
              </p>
            </div>

            <div className="pt-3 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#14100D] border border-[#2B231C]">
                <span className="block font-serif text-2xl font-bold text-[#C5A059]">100%</span>
                <span className="text-xs text-[#EDE7DF] uppercase tracking-wider font-medium">
                  Tension-Free Interlocking
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#14100D] border border-[#2B231C]">
                <span className="block font-serif text-2xl font-bold text-[#C5A059]">Women</span>
                <span className="text-xs text-[#EDE7DF] uppercase tracking-wider font-medium">
                  Dedicated Studio Suite
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={SALON_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C5A059] hover:text-[#E2BC68] uppercase tracking-wider transition-colors cursor-pointer group"
              >
                <span>Book your assessment online</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Grid Parting Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/40 bg-[#120F0D]">
              <img
                src={GRID_IMAGE}
                alt="Precision parting grid layout by Natural Hair Embassy"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#0B0907] via-[#0B0907]/80 to-transparent">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] font-medium block">
                  Precision & Symmetry
                </span>
                <p className="font-serif text-lg text-white font-medium">
                  Clean square grid lines with scalp-conscious root weight distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MEET YOUR CERTIFIED LOCTICIAN — Zainab Sawadogo
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#120F0D] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#C5A059]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait Image of Zainab Sawadogo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/50 bg-[#1A1613]">
                  <img
                    src={ZAINAB_PORTRAIT}
                    alt="Zainab Sawadogo - Certified Loctician and Founder of Natural Hair Embassy"
                    referrerPolicy="no-referrer"
                    className="w-full h-[440px] sm:h-[480px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0907]/90 via-transparent to-transparent flex items-end p-5">
                    <div className="w-full text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059] text-[#0B0907] text-[11px] font-bold uppercase tracking-wider mb-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>Certified Loctician</span>
                      </div>
                      <p className="text-xs text-[#EDE7DF]">Marietta Studio • Georgia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Bio Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1613] border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Founder & Specialist</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Meet Your Certified Loctician
              </h2>

              <div className="w-16 h-[2px] bg-[#C5A059]" />

              <div className="space-y-4 text-base sm:text-lg text-[#EDE7DF] leading-relaxed">
                <p>
                  Hi, I'm <strong className="text-white font-semibold">Zainab Sawadogo</strong>, Certified Loctician and founder of <strong className="text-white font-semibold">Natural Hair Embassy</strong>.
                </p>
                <p>
                  I believe every woman's natural hair journey is unique. I specialize in Microlocs/Sisterlocks™ installation, transfer assessments, maintenance, and natural hair care for women, offering personalized services tailored to your hair texture, lifestyle, and individual goals.
                </p>
                <p>
                  My approach combines healthy hair practices, precision, patience, and education to create beautiful, lasting results. My goal is for every woman to feel confident, cared for, and informed throughout every stage of her locking journey.
                </p>
              </div>

              {/* Visual Signature & Action */}
              <div className="pt-4 border-t border-[#29211A] flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="font-serif text-2xl font-bold text-[#C5A059] tracking-wide">
                    Zainab Sawadogo
                  </h4>
                  <p className="text-xs italic text-[#BDB2A6] uppercase tracking-wider">
                    Certified Loctician • Founder, Natural Hair Embassy
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={defaultWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#172418] hover:bg-[#203322] text-[#60D869] border border-[#274029] transition-colors"
                    title="Chat with Zainab on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={SALON_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0907] text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Book with Zainab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: SERVICES — Updated with Transfer Client Assessment & Microlocs/Sisterlocks™
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181410] border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Our Service Portfolio for Women</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Expert Care for Every Stage of Your Lock Journey
          </h2>

          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto my-4" />

          <p className="text-sm sm:text-base text-[#EDE7DF]">
            Specialized Microlocs/Sisterlocks™ services structured for precision, healthy scalp preservation, and lifelong lock retention.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const serviceNumber = `0${index + 1}`;
            const isSelected = selectedService?.id === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isSelected
                    ? 'bg-[#1A1613] border-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.2)]'
                    : 'bg-[#120F0D] border-[#29211A] hover:border-[#C5A059]/60 hover:bg-[#16120F]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-[#C5A059]">
                      {serviceNumber}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#1A1511] border border-[#C5A059]/30 flex items-center justify-center">
                      {serviceIcons[index % serviceIcons.length]}
                    </div>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#EDE7DF] leading-relaxed line-clamp-4 mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#231C16]">
                  <a
                    href={SALON_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A059] hover:text-[#E2BC68] uppercase tracking-wider transition-colors cursor-pointer group"
                  >
                    <span>Book Online</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBookingWithService(service.title);
                    }}
                    className="text-[11px] text-[#A3968A] hover:text-white underline cursor-pointer"
                  >
                    Options
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Detailed View */}
        {selectedService && (
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#14100D] border border-[#C5A059]/40 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#261E18] pb-6 mb-6">
              <div>
                <span className="text-xs font-mono text-[#C5A059] uppercase tracking-wider">
                  Service Detail Overview
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedService.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#C5A059] italic mt-0.5">
                  {selectedService.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                <a
                  href={createWhatsAppUrl(`Hello Zainab! I'd like to book or ask about "${selectedService.title}" at your Marietta studio.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-[#172418] hover:bg-[#203322] text-[#60D869] border border-[#274029] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={SALON_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0907] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book {selectedService.title}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#EDE7DF]">
              <div className="space-y-2">
                <span className="font-semibold text-white uppercase tracking-wider block text-[11px]">
                  What To Expect:
                </span>
                <ul className="space-y-1.5">
                  {selectedService.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#EDE7DF]">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-semibold text-white uppercase tracking-wider block text-[11px] mb-1">
                  Ideal Candidate:
                </span>
                <p className="text-[#EDE7DF] leading-relaxed">
                  {selectedService.idealFor}
                </p>
              </div>

              <div>
                <span className="font-semibold text-white uppercase tracking-wider block text-[11px] mb-1">
                  Estimated Timing:
                </span>
                <p className="text-[#EDE7DF] leading-relaxed">
                  {selectedService.durationEstimate}
                </p>
                <div className="mt-4 p-3 rounded-xl bg-[#191512] border border-[#2F261E] text-[11px] text-[#A3968A]">
                  Open Mon–Thu, Sat & Sun: 9am–4pm (Closed Fri).
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION 5: CLIENT TESTIMONIALS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181410] border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Client Experiences</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Voices of Flourishing Crowns
          </h2>

          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto my-4" />

          <p className="text-sm sm:text-base text-[#EDE7DF]">
            Real feedback from women who trust Natural Hair Embassy with their Microlocs/Sisterlocks™ journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-[#120F0D] border border-[#29211A] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#C5A059]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Sparkles key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#EDE7DF] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#231C16] mt-6">
                <h4 className="font-serif text-base font-bold text-white">
                  {t.name}
                </h4>
                <p className="text-[11px] text-[#C5A059]">
                  {t.clientType}
                </p>
                <p className="text-[10px] text-[#8C7D70]">
                  {t.journeyLength}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FAQ ACCORDION
         ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181410] border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Helpful Information for Women</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="w-16 h-[2px] bg-[#C5A059] mx-auto my-4" />

          <p className="text-sm text-[#EDE7DF]">
            Clear answers about installation, transfer assessments, maintenance schedules, and opening hours.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = activeFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#120F0D] border border-[#2B231C] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#1A1511] border border-[#C5A059]/40 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-[#C5A059]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#EDE7DF] leading-relaxed border-t border-[#211A14]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FINAL HOME CTA — Direct booking links to As.me and WhatsApp
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#080605] border border-[#C5A059] p-8 sm:p-14 lg:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181410] border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A059]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Dedicated Exclusively to Women</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Begin Your Microlocs/Sisterlocks™ Journey
            </h2>

            <div className="w-20 h-[2px] bg-[#C5A059] mx-auto" />

            <div className="space-y-3 text-base sm:text-lg text-[#EDE7DF] leading-relaxed max-w-2xl mx-auto">
              <p className="font-serif italic text-xl text-[#C5A059]">
                Beautiful locks begin with the right foundation.
              </p>
              <p>
                Book your consultation or Transfer Client Loc Assessment directly online, or reach out on WhatsApp for immediate personal assistance.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={SALON_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0907] text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-[0_0_25px_rgba(197,160,89,0.4)] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0B0907]" />
                <span>Book Online (Naturalhairembassy.as.me)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#172418] hover:bg-[#203322] text-[#60D869] hover:text-white border border-[#274029] hover:border-[#25D366] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Book in WhatsApp</span>
              </a>

              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#181410] hover:bg-[#221C16] text-white text-xs font-semibold uppercase tracking-wider border border-[#C5A059]/60 hover:border-[#C5A059] transition-all cursor-pointer font-mono"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call {SALON_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-6 text-xs text-[#A3968A] flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5 text-[#EDE7DF]">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                {SALON_INFO.address}
              </span>
              <span className="text-[#C5A059]">•</span>
              <span className="text-[#EDE7DF]">
                Open Mon–Thu, Sat & Sun 9am–4pm (Closed Fri)
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
