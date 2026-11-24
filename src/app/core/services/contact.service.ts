import { Injectable } from '@angular/core';
import { ContactRequest, ContactSubmissionResult } from '../models/contact-request.model';

export const BUSINESS_PHONE = '+49 173 9074381';
export const BUSINESS_PHONE_CLEAN = '491739074381';
export const BUSINESS_LOCATION = 'Weingarten, Germany';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  /**
   * Generates a pre-filled WhatsApp direct chat link
   */
  getWhatsAppUrl(message?: string): string {
    const text = message
      ? encodeURIComponent(message)
      : encodeURIComponent('Hallo Allround Dienstleistung GbR, ich interessiere mich für Ihre Leistungen.');
    return `https://wa.me/${BUSINESS_PHONE_CLEAN}?text=${text}`;
  }

  /**
   * Generates a pre-filled mailto link for instant inquiry
   */
  getMailtoUrl(request: ContactRequest): string {
    const subject = encodeURIComponent(`Anfrage von ${request.fullName} - ${request.serviceId || 'Allgemein'}`);
    const body = encodeURIComponent(
      `Name: ${request.fullName}\nE-Mail: ${request.email}\nTelefon: ${request.phone || '-'}\nLeistung: ${request.serviceId || '-'}\n\nNachricht:\n${request.message}`
    );
    return `mailto:kontakt@allround-weingarten.de?subject=${subject}&body=${body}`;
  }

  /**
   * Contact submission handler - prepared for future Supabase injection
   */
  async submitInquiry(request: ContactRequest): Promise<ContactSubmissionResult> {
    if (!request.fullName || !request.email || !request.message || !request.consent) {
      return {
        success: false,
        message: 'Bitte füllen Sie alle erforderlichen Pflichtfelder (*) aus und stimmen Sie den Datenschutzbestimmungen zu.'
      };
    }

    // In-memory / client processing until Supabase client is configured
    try {
      // Simulate asynchronous persistence
      await new Promise((resolve) => setTimeout(resolve, 300));
      return {
        success: true,
        message: 'Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.'
      };
    } catch {
      return {
        success: false,
        message: 'Beim Senden ist ein Fehler aufgetreten. Bitte rufen Sie uns direkt an: ' + BUSINESS_PHONE
      };
    }
  }
}
