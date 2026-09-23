import { ServiceItem, GalleryItem, Testimonial, FAQItem } from '../types';

import heroImg from '../assets/images/Image2.png';
import zainabImg from '../assets/images/image8.png';
import gridImg from '../assets/images/image3.png';
import matureImg from '../assets/images/image4.png';
import retighteningImg from '../assets/images/image12.png';
import updoImg from '../assets/images/image18.png';
import shorthairImg from '../assets/images/image16.png';
import curlsImg from '../assets/images/image6.png';
import studioImg from '../assets/images/image14.png';
import logoIconImg from '../assets/images/nhe_logo_icon_1790115151777.jpg';
import logoCrestImg from '../assets/images/nhe_logo_crest_1790115129510.jpg';
import image5 from '../assets/images/image5.png';
import image7 from '../assets/images/image7.png';
import image9 from '../assets/images/image9.png';
import image10 from '../assets/images/image10.png';
import image11 from '../assets/images/image11.png';
import image13 from '../assets/images/image13.png';
import image15 from '../assets/images/image15.png';
import image17 from '../assets/images/image17.png';
import image19 from '../assets/images/image19.png';
import sisterlocksInstallationAtlanta from '../assets/images/sisterlocks-installation-atlanta-ga.png';
import starterMicrolocsTwoStrandTwist from '../assets/images/starter-microlocs-two-strand-twist-atlanta.png';
import transferClientMicrolocsRetie from '../assets/images/transfer-client-microlocs-re-tie-service-ga.png';

export const HERO_IMAGE = heroImg;
export const ZAINAB_PORTRAIT = zainabImg;
export const GRID_IMAGE = gridImg;
export const MATURE_IMAGE = matureImg;
export const RETIGHTENING_IMAGE = retighteningImg;
export const UPDO_IMAGE = updoImg;
export const SHORTHAIR_IMAGE = shorthairImg;
export const CURLS_IMAGE = curlsImg;
export const STUDIO_IMAGE = studioImg;
export const LOGO_ICON = logoIconImg;
export const LOGO_CREST = logoCrestImg;

export const SALON_INFO = {
  name: 'Natural Hair Embassy',
  tagline: 'Healthy Hair. Beautiful Locks. Naturally You.',
  audience: 'Dedicated Exclusively to Women',
  founder: 'Zainab Sawadogo',
  title: 'Certified Loctician & Founder',
  phone: '+1(912)572-2495',
  phoneFormatted: '+1 (912) 572-2495',
  phoneRaw: '+19125722495',
  email: 'contact@naturalhairembassy.com',
  bookingUrl: 'https://Naturalhairembassy.as.me',
  location: 'Marietta, GA',
  addressShort: 'Marietta, GA',
  address: '1720 Powder springs Rd SW suite 130, Marietta GA 30064',
  streetAddress: '1720 Powder springs Rd SW suite 130',
  cityStateZip: 'Marietta, GA 30064',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=1720+Powder+springs+Rd+SW+suite+130,+Marietta+GA+30064',
  hours: [
    { days: 'Monday – Thursday', time: '9:00 AM – 4:00 PM' },
    { days: 'Friday', time: 'Closed' },
    { days: 'Saturday – Sunday', time: '9:00 AM – 4:00 PM' }
  ],
  scheduleNote: 'Open Monday through Thursday, Saturday and Sunday: 9:00 AM – 4:00 PM. Closed on Fridays.',
  socials: {
    tiktok: {
      name: 'TikTok',
      handle: '@naturalhairembass',
      url: 'https://www.tiktok.com/@naturalhairembass'
    },
    facebook: {
      name: 'Facebook',
      handle: 'Zainab Sawadogo',
      url: 'https://www.facebook.com/zainab.sawadogo.886357'
    },
    instagram: {
      name: 'Instagram',
      handle: '@naturalhairembassy',
      url: 'https://www.instagram.com/naturalhairembassy'
    }
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'consultations',
    title: 'Microlocs/Sisterlocks™ Consultations',
    subtitle: 'Comprehensive Hair Assessment & Foundation Planning for Women',
    description: 'A personalized consultation designed exclusively for women exploring their locs journey. Includes an in-depth evaluation of your natural hair density, curl pattern, scalp health, lifestyle compatibility, and custom locking recommendations.',
    benefits: [
      'In-depth scalp health & natural curl density assessment for women',
      'Test locs installation to evaluate your hair pattern and interlocking response',
      'Clear roadmap with realistic timeframe and investment expectations',
      'Personalized hair preparation regimen prior to your installation'
    ],
    idealFor: 'Women exploring Microlocs/Sisterlocks™, transitioning from loose natural hair, or seeking a trusted specialist.',
    durationEstimate: '45 – 60 Minutes',
    category: 'consultation'
  },
  {
    id: 'transfer-assessment',
    title: 'Transfer Client Locs Assessment',
    subtitle: 'Comprehensive Evaluation for Established Locks by Other Stylists',
    description: 'Dedicated assessment session for women transferring from another loctician or self-maintaining their locks. We examine your current grid symmetry, rotation pattern, locks count, scalp health, and recommend a personalized continuing care plan.',
    benefits: [
      'Thorough audit of your existing locs grid, root rotation, and locs diameter',
      'Detection and correction plan for slippage, bunching, or thinning roots',
      'Customized retightening schedule tailored to your personal growth cycle',
      'Seamless transition into our private, tension-free Marietta studio'
    ],
    idealFor: 'Women with existing Microlocs/Sisterlocks™ seeking a certified Marietta loctician for ongoing maintenance.',
    durationEstimate: '45 – 60 Minutes',
    category: 'consultation'
  },
  {
    id: 'installation',
    title: 'Microlocs/Sisterlocks™ Installation',
    subtitle: 'Artisan Precision & Scalp-Conscious Grid Craft for Women',
    description: 'Professional, artisan-grade installation customized to your unique hair density, texture, length, and desired finished look. Installed with scalp-conscious, tension-free interlocking technique.',
    benefits: [
      'Custom geometric grid layout tailored precisely to your head shape and density',
      'Tension-free interlocking safeguarding delicate edge follicles and temples',
      'Uniform symmetrical parting lines for lifelong styling versatility and volume',
      'Complete starter care kit instructions with washing and banding protocols'
    ],
    idealFor: 'Women ready to embark on their natural locs journey with an expert foundation.',
    durationEstimate: 'Multi-Day Sessions (Scheduled for comfort and precision)',
    category: 'installation'
  },
  {
    id: 'maintenance',
    title: 'Microlocs/Sisterlocks™ Maintenance / Retightening',
    subtitle: 'Neat, Systematic Root Integrity & Pattern Continuity',
    description: 'Keep your locks neat, healthy, and pristine with consistent, tension-free retightening. We maintain clean grid lines and support healthy root growth without thinning or scalp pulling.',
    benefits: [
      'Consistent 4-point or 3-point interlocking rotation matching your locs pattern',
      'Gentle slippage resolution and careful locs separation at every appointment',
      'Individual scalp inspection during every retightening cycle',
      'Even root tension preventing perimeter stress and promoting length retention'
    ],
    idealFor: 'Women maintaining a regular 4 to 7-week retightening cycle.',
    durationEstimate: '2.5 – 4.5 Hours (based on locs count and new growth)',
    category: 'maintenance'
  },
  {
    id: 'new-growth',
    title: 'New Growth Maintenance',
    subtitle: 'Nurturing Pattern Continuity & Scalp Balance',
    description: 'Regular care to maintain the integrity of your locs pattern and support healthy new growth as your hair matures across seasons.',
    benefits: [
      'Preserves the structural grid without causing thinning or root pulling',
      'Maintains clean grid lines without harsh tension on the hairline or nape',
      'Tailored guidance on active lifestyles (workouts, swimming, climate care)'
    ],
    idealFor: 'Women navigating growth spurts, postpartum regrowth, or active lifestyles.',
    durationEstimate: '3 – 4 Hours',
    category: 'maintenance'
  },
  {
    id: 'lock-repair',
    title: 'Locs Repair & Restoration',
    subtitle: 'Structural Restoration & Delicate Reinforcement',
    description: 'Specialized support for weak, thinning, damaged, or detached locks. We restore root integrity and re-establish neat parting without harsh chemicals or tension.',
    benefits: [
      'Root re-attachment and slippage correction using delicate interlocking',
      'Locs re-thickening via organic interlocking and delicate reinforcement',
      'Gentle separation of accidentally fused locks without causing breakage',
      'Protective recovery plan for vulnerable edges, temples, and crown areas'
    ],
    idealFor: 'Women experiencing locs trauma, thinning roots, or combining issues.',
    durationEstimate: 'Assessment Required / 1 – 3 Hours',
    category: 'specialized'
  },
  {
    id: 'care-guidance',
    title: 'Natural Hair & Locs Care Guidance',
    subtitle: 'Holistic Knowledge & Daily Maintenance Routines',
    description: 'Learn how to properly cleanse, moisturize, protect, and maintain your Microlocs/Sisterlocks™ between appointments for lifelong retention.',
    benefits: [
      'Product ingredient audits: what to avoid to prevent lint and buildup',
      'Nighttime protection routines (satin bonnets, silk wraps, sleep bands)',
      'Correct washing techniques with braiding and banding protocols'
    ],
    idealFor: 'All women desiring lifelong healthy hair education, retention, and confidence.',
    durationEstimate: 'Included with all appointments & available as 1-on-1 coaching',
    category: 'education'
  },
  {
    id: 'starter-guidance',
    title: 'Starter Locs Guidance',
    subtitle: 'Clarity & Roadmap for Your Natural Hair Decision',
    description: 'Professional guidance and comparative recommendations for women exploring Microlocs/Sisterlocks™ and assessing their natural hair options.',
    benefits: [
      'Comparison between traditional locks and Microlocs/Sisterlocks™',
      'Lifestyle feasibility review (styling versatility, workout routines)',
      'Transparent maintenance roadmap, schedule expectations, and investment'
    ],
    idealFor: 'Women in the early decision-making phase wondering if locs fit their lifestyle.',
    durationEstimate: '30 – 45 Minutes',
    category: 'education'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Micro-Grid Parting & Coiled Bundles',
    category: 'installations',
    categoryLabel: 'Microlocs/Sisterlocks™ Installations',
    imageUrl: GRID_IMAGE,
    description: 'Meticulous geometric square parting grid prepared for a complete Microlocs/Sisterlocks™ installation. Hair cleanly sectioned into neat coiled bundles with scalp-conscious tension-free technique.',
    hairDetails: {
      texture: '4C Natural Coils',
      density: 'High Density (380+ Locks)',
      journeyStage: 'Installation Prep (Day 1)',
      technique: 'Geometric Square Grid Parting'
    },
    highlightQuote: 'Clean, symmetrical scalp partings are the lifelong foundation of versatile styling and healthy roots.'
  },
  {
    id: 'gal-2',
    title: 'Flourishing Mature Microlocs / Sisterlocks™ with Warm Tips',
    category: 'journeys',
    categoryLabel: 'Client Journeys',
    imageUrl: MATURE_IMAGE,
    description: 'Over 24 months of consistent 6-week maintenance. Healthy, mature microlocs cascading with natural density, beautiful honey-amber ombre tips, and zero product buildup.',
    hairDetails: {
      texture: '4B/4C Texture',
      density: 'High Density',
      journeyStage: '2+ Years Mature',
      technique: 'Continuous Interlocking'
    },
    highlightQuote: 'Healthy locks thrive on consistency, proper hydration, and zero heavy product buildup.'
  },
  {
    id: 'gal-3',
    title: 'Close-Up Precision Root Retightening in Progress',
    category: 'maintenance',
    categoryLabel: 'Maintenance & Retightening',
    imageUrl: RETIGHTENING_IMAGE,
    description: 'Six weeks of fresh new growth cleanly rotated and locked into the established shaft with precision interlocking clips. Note the clean scalp rows and tension-free comfort.',
    hairDetails: {
      texture: '4A/4B Fine Texture',
      density: 'Fine Hair, High Count',
      journeyStage: 'Ongoing 6-Week Retie',
      technique: 'Tension-Free Interlocking Rotation'
    },
    highlightQuote: 'Precision root maintenance safeguards delicate follicles for lifelong retention.'
  },
  {
    id: 'gal-4',
    title: 'Waist-Length High Crown Updo Styling',
    category: 'journeys',
    categoryLabel: 'Client Journeys',
    imageUrl: UPDO_IMAGE,
    description: 'Flourishing, mature Microlocs/Sisterlocks™ gathered into an elegant high-crown ponytail updo. Clean parting lines at the crown and immaculate root health.',
    hairDetails: {
      texture: '4B Natural Texture',
      density: 'Dense / 400+ Locks',
      journeyStage: 'Mature Styling',
      technique: 'Interlocking Starter Grid'
    },
    highlightQuote: 'Crafted for versatility, letting clients transition from active gym days to black-tie elegance effortlessly.'
  },
  {
    id: 'gal-5',
    title: 'Fresh Shoulder-Length Microlocs/Sisterlocks™',
    category: 'installations',
    categoryLabel: 'Microlocs/Sisterlocks™ Installations',
    imageUrl: SHORTHAIR_IMAGE,
    description: 'Completed Microlocs/Sisterlocks™ installation on shoulder-length hair with golden highlights. Neat, uniform locs diameter from root to tip with natural movement.',
    hairDetails: {
      texture: '4B/4C Natural Hair',
      density: 'Medium-High Density',
      journeyStage: 'Fresh Installation',
      technique: 'Interlocked Root-to-Tip'
    },
    highlightQuote: 'Lightweight and tension-free, ensuring complete comfort from night one.'
  },
  {
    id: 'gal-6',
    title: 'Textured Soft Curl locs Definition & Wash Care',
    category: 'maintenance',
    categoryLabel: 'Maintenance & Retightening',
    imageUrl: CURLS_IMAGE,
    description: 'Freshly cleansed and retightened locks displaying soft natural coil bounce and healthy shine without heavy waxy products.',
    hairDetails: {
      texture: '4A/4B Texture',
      density: 'Medium Density',
      journeyStage: 'Budding Stage (Month 8)',
      technique: 'Hydration & Interlocking'
    },
    highlightQuote: 'Pure water hydration misting preserves natural bounce with zero residue.'
  },
  {
    id: 'gal-7',
    title: 'Private Loctician Studio Suite for Women',
    category: 'installations',
    categoryLabel: 'Studio & Experience',
    imageUrl: STUDIO_IMAGE,
    description: 'A glimpse into our serene, private Marietta studio suite designed exclusively for women. Equipped with professional salon amenities, hooded dryers, and ergonomic styling comfort.',
    hairDetails: {
      texture: 'All Natural Textures',
      density: 'Personalized Care',
      journeyStage: 'Studio Environment',
      technique: 'Sanitary Loctician Suite'
    },
    highlightQuote: 'A dedicated, peaceful space where every woman receives undivided loctician care.'
  },
    {
    id: 'gal-8',
    title: 'Natural Microlocs Installation & Foundation',
    category: 'installations',
    categoryLabel: 'Microlocs/Sisterlocks™ Installations',
    imageUrl: image5,
    description: 'A detailed Microlocs/Sisterlocks™ installation showcasing clean parting, consistent loc sizing, and a carefully established foundation designed for healthy natural hair growth and long-term versatility.',
    hairDetails: {
      texture: 'Natural Textured Hair',
      density: 'Medium-High Density',
      journeyStage: 'Fresh Installation',
      technique: 'Precision Interlocking'
    },
    highlightQuote: 'Every beautiful loc journey begins with a carefully crafted foundation.'
  },
  {
    id: 'gal-9',
    title: 'Precision Microlocs Parting & Installation',
    category: 'installations',
    categoryLabel: 'Microlocs/Sisterlocks™ Installations',
    imageUrl: image7,
    description: 'A close look at precision parting and loc formation during installation. Each section is carefully measured and organized to create a balanced, symmetrical grid.',
    hairDetails: {
      texture: '4B/4C Natural Hair',
      density: 'High Density',
      journeyStage: 'Installation',
      technique: 'Geometric Grid & Interlocking'
    },
    highlightQuote: 'Precision at the beginning creates flexibility and beauty throughout the entire loc journey.'
  },
  {
    id: 'gal-10',
    title: 'Fresh Microlocs with Defined Natural Texture',
    category: 'installations',
    categoryLabel: 'Microlocs/Sisterlocks™ Installations',
    imageUrl: image9,
    description: 'Freshly installed Microlocs/Sisterlocks™ displaying natural texture, clean sections, and a lightweight foundation that allows the hair to begin its natural maturation process.',
    hairDetails: {
      texture: '4A/4B Natural Texture',
      density: 'Medium Density',
      journeyStage: 'Fresh Installation',
      technique: 'Tension-Conscious Interlocking'
    },
    highlightQuote: 'Healthy locs should feel like an extension of your natural hair—not a burden on your scalp.'
  },
  {
    id: 'gal-11',
    title: 'Detailed Starter Loc Foundation',
    category: 'installations',
    categoryLabel: 'Starter Loc Installation',
    imageUrl: image10,
    description: 'A detailed starter loc foundation demonstrating careful sectioning, consistent sizing, and professional attention to the natural hair pattern.',
    hairDetails: {
      texture: 'Natural Coily Texture',
      density: 'Medium-High Density',
      journeyStage: 'Starter Stage',
      technique: 'Precision Starter Grid'
    },
    highlightQuote: 'A thoughtful starter foundation gives your natural hair room to grow, mature, and flourish.'
  },
  {
    id: 'gal-12',
    title: 'Microlocs Retightening & New Growth Care',
    category: 'maintenance',
    categoryLabel: 'Maintenance & Retightening',
    imageUrl: image11,
    description: 'Professional retightening focused on maintaining clean roots, preserving the original grid, and managing new growth while protecting the integrity of each individual loc.',
    hairDetails: {
      texture: '4B Natural Texture',
      density: 'High Density',
      journeyStage: 'Ongoing Maintenance',
      technique: 'Controlled Interlocking Rotation'
    },
    highlightQuote: 'Regular maintenance keeps your grid beautiful while supporting healthy root growth.'
  },
  {
    id: 'gal-13',
    title: 'Healthy Mature Locs & Natural Length',
    category: 'journeys',
    categoryLabel: 'Mature Client Journeys',
    imageUrl: image13,
    description: 'A mature loc journey showcasing natural length, density, healthy texture, and the beautiful transformation that develops through consistent maintenance and proper care.',
    hairDetails: {
      texture: '4B/4C Natural Texture',
      density: 'Dense',
      journeyStage: 'Mature Locs',
      technique: 'Consistent Interlocking Maintenance'
    },
    highlightQuote: 'Time, patience, and consistent care allow your natural crown to reveal its full beauty.'
  },
  {
    id: 'gal-14',
    title: 'Elegant Microlocs Styling & Natural Movement',
    category: 'journeys',
    categoryLabel: 'Mature Client Styling',
    imageUrl: image15,
    description: 'An elegant mature Microlocs/Sisterlocks™ look demonstrating natural movement, styling versatility, and the beauty of healthy locs maintained over time.',
    hairDetails: {
      texture: '4B Natural Texture',
      density: 'Medium-High Density',
      journeyStage: 'Mature Styling',
      technique: 'Gentle Loc Styling'
    },
    highlightQuote: 'Healthy mature locs create endless possibilities for effortless and elegant styling.'
  },
  {
    id: 'gal-15',
    title: 'Beautiful Loc Journey Transformation',
    category: 'journeys',
    categoryLabel: 'Client Journeys',
    imageUrl: image17,
    description: 'A client transformation highlighting the progression and beauty of natural loc development, from structured roots to flourishing length and texture.',
    hairDetails: {
      texture: 'Natural Coily Texture',
      density: 'High Density',
      journeyStage: 'Established Loc Journey',
      technique: 'Regular Professional Maintenance'
    },
    highlightQuote: 'Your loc journey evolves with you—every stage has its own beauty.'
  },
  {
    id: 'gal-16',
    title: 'Mature Starter Microlocs with Versatile Styling',
    category: 'journeys',
    categoryLabel: 'Mature Client Journeys',
    imageUrl: image19,
    description: 'Grid Styled Microlocs/Sisterlocks™, showcasing natural density, and styling versatility achieved through consistent professional care.',
    hairDetails: {
      texture: '4B/4C Natural Texture',
      density: 'Dense / High Count',
      journeyStage: 'Mature & Flourishing',
      technique: 'Long-Term Interlocking Maintenance'
    },
    highlightQuote: 'Consistent care allows your locs to retain length, strength, movement, and natural beauty.'
  },
  {
    id: 'gal-17',
    title: 'Sisterlocks™ Installation in Atlanta, GA',
    category: 'installations',
    categoryLabel: 'Sisterlocks™ Installation',
    imageUrl: sisterlocksInstallationAtlanta,
    description: 'Professional Sisterlocks™ installation in Atlanta, GA, featuring precise sectioning and carefully established locks designed around the client’s natural hair characteristics and desired styling goals.',
    hairDetails: {
      texture: 'Natural Textured Hair',
      density: 'Individualized Density',
      journeyStage: 'New Installation',
      technique: 'Precision Interlocking'
    },
    highlightQuote: 'Beautiful Sisterlocks™ begin with precision, patience, and a foundation designed specifically for you.'
  },
  {
    id: 'gal-18',
    title: 'Starter Microlocs with Two-Strand Twist Foundation',
    category: 'installations',
    categoryLabel: 'Starter Microlocs',
    imageUrl: starterMicrolocsTwoStrandTwist,
    description: 'Starter Microlocs created from a two-strand twist foundation, providing a natural-looking beginning for clients starting their loc journey with texture, dimension, and gradual maturation.',
    hairDetails: {
      texture: 'Natural Coily / Curly Texture',
      density: 'Medium-High Density',
      journeyStage: 'Starter Locs',
      technique: 'Two-Strand Twist Foundation'
    },
    highlightQuote: 'Starter locs are the beginning of a journey—patience allows each strand to mature naturally.'
  },
  {
    id: 'gal-19',
    title: 'Transfer Client Microlocs Re-Tie & Restoration',
    category: 'maintenance',
    categoryLabel: 'Transfer Client Maintenance',
    imageUrl: transferClientMicrolocsRetie,
    description: 'Professional re-tie and maintenance service for a transfer client with established Microlocs. The service focuses on restoring root organization, maintaining the existing grid, and supporting healthy continued growth.',
    hairDetails: {
      texture: 'Natural Textured Hair',
      density: 'Established High Density',
      journeyStage: 'Transfer Client / Ongoing Care',
      technique: 'Root Re-Tie & Interlocking'
    },
    highlightQuote: 'Every transfer client deserves a careful assessment and a maintenance plan that respects their existing loc journey.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Amina K.',
    clientType: 'Microlocs/Sisterlocks™ Installation & Retightening Client',
    quote: 'Zainab is a true hair artist and educator for women. Before coming to Natural Hair Embassy, I was terrified of scalp tension and permanent thinning. Zainab took her time during my consultation, tested my hair, and installed my locks completely pain-free. My hair is healthier than it has ever been.',
    rating: 5,
    journeyLength: '2+ Years with Zainab'
  },
  {
    id: 't-2',
    name: 'Nia M.',
    clientType: 'Transfer Client (Retightening & Maintenance)',
    quote: 'Finding a loctician who respects your time, understands transfer clients, maintains pristine hygiene, and actually educates you on scalp moisture was life-changing. My roots are neat, my grid is intact, and my appointments are peaceful and empowering.',
    rating: 5,
    journeyLength: '14 Months with Zainab'
  },
  {
    id: 't-3',
    name: 'Dr. Camille R.',
    clientType: 'New Microlocs/Sisterlocks™ Journey Client',
    quote: "As a busy physician, I needed an elegant, low-maintenance natural hair solution that looked polished every single morning. Zainab's precision is unmatched. She provided me with a detailed washing and care guide that removed all guesswork.",
    rating: 5,
    journeyLength: '8 Months with Zainab'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a Microlocs/Sisterlocks™ installation take?',
    answer: 'Installation duration varies depending on your hair length, density, texture, and locs count. Because precision, tension-free technique, and client comfort are paramount, installation is typically divided into comfortable sessions over 2 to 3 days to ensure scalp comfort and uniform locs symmetry without fatigue.',
    category: 'installation'
  },
  {
    id: 'faq-2',
    question: 'How often do Microlocs/Sisterlocks™ need maintenance / retightening?',
    answer: 'Most women maintain a regular retightening schedule every 4 to 7 weeks. Consistent maintenance preserves clean root patterns, prevents slippage, safeguards hair follicle integrity, and supports healthy locs maturation.',
    category: 'maintenance'
  },
  {
    id: 'faq-3',
    question: 'Who are your services designed for?',
    answer: 'Our studio and loctician services are created exclusively for women seeking healthy, elegant natural hair care. Whether starting a new set of Microlocs/Sisterlocks™ or transferring from another loctician, we provide a private, peaceful, and tension-free environment.',
    category: 'general'
  },
  {
    id: 'faq-4',
    question: 'Are you accepting transfer clients with existing locks?',
    answer: 'Yes! We welcome women with established Microlocs/Sisterlocks™ through our "Transfer Client Locs Assessment." During this session, Zainab evaluates your locs grid, rotation history, locs count, and creates a tailored maintenance plan for your hair.',
    category: 'specialized'
  },
  {
    id: 'faq-5',
    question: 'What are your studio opening hours?',
    answer: 'Our Marietta studio is open Monday through Thursday, Saturday and Sunday from 9:00 AM to 4:00 PM. We are closed on Fridays.',
    category: 'policies'
  },
  {
    id: 'faq-6',
    question: 'How do I book an appointment?',
    answer: 'You can book directly on our live online booking page at https://Naturalhairembassy.as.me. If you prefer quick personal messaging or have questions before booking, you can also reach Zainab directly on WhatsApp or call our studio.',
    category: 'policies'
  },
  {
    id: 'faq-7',
    question: 'How should I prepare for my appointment?',
    answer: 'Please arrive with freshly cleansed, thoroughly detangled, and completely product-free hair. Avoid applying heavy oils, butters, waxes, or leave-in conditioners prior to your appointment, as clean hair allows precision parting and ensures optimal interlocking retention.',
    category: 'policies'
  }
];

export const CONSULTATION_CHECKLIST = [
  'Your current natural hair condition and curl density',
  'Your desired Microlocs/Sisterlocks™ size and parting grid',
  'Installation process and schedule planning',
  'Estimated retightening intervals (typically 4–7 weeks)',
  'Your current hair-care routine and product regimen',
  'Transfer client grid assessment (if transferring existing locks)'
];

export const SALON_POLICIES = [
  {
    title: 'Consultation & Assessment Requirement',
    summary: 'A consultation or Transfer Client Locs Assessment is required prior to new installations or transferring clients.',
    detail: 'This ensures we properly assess your hair texture, grid symmetry, and recommend the best personalized approach.'
  },
  {
    title: 'Clean Hair Preparation',
    summary: 'Please arrive with clean, detangled, and product-free hair.',
    detail: 'Avoid applying heavy oils, greases, or waxes before your appointment so your locks can be crafted with maximum precision.'
  },
  {
    title: 'Dedicated Studio Appointment Time',
    summary: 'Services are by appointment to ensure undivided attention and personalized care for women.',
    detail: 'Each session is reserved exclusively for you in a peaceful, private studio suite in Marietta, GA.'
  }
];
