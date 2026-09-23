import { SALON_INFO } from '../data/salonData';

export const WHATSAPP_PHONE_NUMBER = '19125722495';
export const STUDIO_PHONE_DIAL = '+19125722495';
export const STUDIO_PHONE_DISPLAY = '+1 (912) 572-2495';

/**
 * Creates a direct WhatsApp link that opens chat with Zainab at Natural Hair Embassy
 */
export function createWhatsAppUrl(messageText: string): string {
  const cleanPhone = WHATSAPP_PHONE_NUMBER;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText.trim())}`;
}

/**
 * Autofills message for booking a specific gallery look/style
 */
export function getGalleryStyleWhatsAppUrl(item: {
  title: string;
  categoryLabel?: string;
  hairDetails?: {
    texture?: string;
    density?: string;
    technique?: string;
  };
}): string {
  const details = [];
  if (item.categoryLabel) details.push(`Category: ${item.categoryLabel}`);
  if (item.hairDetails?.texture) details.push(`Texture: ${item.hairDetails.texture}`);
  if (item.hairDetails?.technique) details.push(`Technique: ${item.hairDetails.technique}`);

  const detailsString = details.length > 0 ? ` (${details.join(', ')})` : '';

  const message = `Hello Zainab! I'm browsing the Natural Hair Embassy gallery and I'd like to inquire about booking the style: "${item.title}"${detailsString}.

Could you please let me know your next availability for a consultation? Thank you!`;

  return createWhatsAppUrl(message);
}

/**
 * Autofills message for booking a specific service
 */
export function getServiceBookingWhatsAppUrl(serviceTitle: string): string {
  const message = `Hello Zainab! I'm reaching out from Natural Hair Embassy. I would like to book a consultation for: *${serviceTitle}*.

Could you please share your upcoming available dates and times at your Marietta studio?`;

  return createWhatsAppUrl(message);
}

/**
 * Formats a client consultation inquiry for WhatsApp
 */
export function formatConsultationWhatsAppUrl(data: {
  fullName?: string;
  phone?: string;
  serviceTitle?: string;
  preferredDate?: string;
  hairStatus?: string;
  notes?: string;
}): string {
  const lines: string[] = [
    `*Natural Hair Embassy — Consultation Request*`,
    `Hello Zainab!`
  ];

  if (data.fullName) {
    lines.push(`• *Client Name:* ${data.fullName}`);
  }
  if (data.phone) {
    lines.push(`• *Phone:* ${data.phone}`);
  }
  if (data.serviceTitle) {
    lines.push(`• *Requested Service:* ${data.serviceTitle}`);
  }
  if (data.preferredDate) {
    lines.push(`• *Preferred Date:* ${data.preferredDate}`);
  }
  if (data.hairStatus) {
    lines.push(`• *Current Hair State:* ${data.hairStatus}`);
  }
  if (data.notes) {
    lines.push(`• *Hair Goals / Notes:* ${data.notes}`);
  }

  lines.push('');
  lines.push(`I look forward to discussing my appointment at your Marietta studio. Thank you!`);

  return createWhatsAppUrl(lines.join('\n'));
}
