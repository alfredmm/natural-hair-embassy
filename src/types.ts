export type PageType = 'home' | 'gallery' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  idealFor: string;
  durationEstimate?: string;
  category: 'consultation' | 'installation' | 'maintenance' | 'specialized' | 'education';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'installations' | 'maintenance' | 'journeys' | 'repairs';
  categoryLabel: string;
  imageUrl: string;
  description: string;
  hairDetails: {
    texture: string;
    density: string;
    journeyStage: string;
    technique: string;
  };
  highlightQuote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  clientType: string;
  quote: string;
  rating: number;
  journeyLength: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'installation' | 'maintenance' | 'policies' | 'specialized';
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  currentHairStatus: string;
  hairLength: string;
  notes: string;
  uploadedPhotoName?: string;
}
