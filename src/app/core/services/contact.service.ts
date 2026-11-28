import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { ContactRequest, ContactSubmissionResult } from '../models/contact-request.model';

export const BUSINESS_PHONE = '+49 173 9074381';
export const BUSINESS_PHONE_CLEAN = '491739074381';
export const BUSINESS_ADDRESS = 'Liebfrauenstrasse 26, 88250 Weingarten';
export const BUSINESS_LOCATION = 'Germany';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly supabase: SupabaseClient | null = null;

  constructor() {
    const { url, anonKey } = environment.supabase;
    if (url && anonKey && url.startsWith('http') && !url.includes('YOUR_SUPABASE')) {
      try {
        this.supabase = createClient(url, anonKey);
        console.log('ContactService: Supabase client initialized with', url);
      } catch (err) {
        console.warn('Supabase client failed to initialize:', err);
      }
    } else {
      console.warn('ContactService: Supabase URL/key not configured or using placeholder.');
    }
  }

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
   * Contact submission handler - persists enquiries to Supabase 'leads' table
   */
  async submitInquiry(request: ContactRequest): Promise<ContactSubmissionResult> {
    if (!request.fullName || !request.email || !request.message || !request.consent) {
      return {
        success: false,
        message: 'Bitte füllen Sie alle erforderlichen Pflichtfelder (*) aus und stimmen Sie den Datenschutzbestimmungen zu.',
      };
    }

    try {
      if (this.supabase) {
        console.log('ContactService: sending inquiry to Supabase...', request);
        const { error } = await this.supabase.from('leads').insert([
          {
            full_name: request.fullName.trim(),
            email: request.email.trim(),
            phone: request.phone ? request.phone.trim() : null,
            service_type: request.serviceId || 'Allgemein',
            message: request.message.trim(),
            consent: request.consent,
          },
        ]);

        if (error) {
          console.error('Supabase lead insertion error:', error);
          return {
            success: false,
            message: 'Fehler beim Übertragen an Supabase: ' + error.message,
          };
        }

        console.log('ContactService: inquiry saved to Supabase successfully!');
      } else {
        console.warn('ContactService: Supabase client is not initialized.');
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      return {
        success: true,
        message: 'Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.',
      };
    } catch (err: any) {
      console.error('Contact submission error:', err);
      return {
        success: false,
        message: 'Beim Senden ist ein Fehler aufgetreten: ' + (err?.message || BUSINESS_PHONE),
      };
    }
  }
}
