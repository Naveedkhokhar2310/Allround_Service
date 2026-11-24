import { Component, ChangeDetectionStrategy, inject, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from '@shared/components/badge/badge.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ContactService, BUSINESS_PHONE, BUSINESS_LOCATION } from '@core/services/contact.service';
import { ServicesCatalogService } from '@core/services/services-catalog.service';

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
  consent?: string;
}

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, BadgeComponent, ButtonComponent],
  template: `
    <section id="kontakt" class="contact-section" aria-label="Kontakt & Anfrage">
      <div class="contact-container container-allround">
        <!-- Contact Left Info Column (from Figma node 5:582) -->
        <div class="contact-info-col">
          <app-badge variant="muted">04 / KONTAKT</app-badge>

          <h2 class="contact-title">
            <span>Was können wir</span>
            <span>für Sie tun?</span>
          </h2>

          <p class="contact-description">
            Erzählen Sie uns, was ansteht. Gemeinsam finden wir die passende Lösung – unverbindlich und persönlich.
          </p>

          <div class="contact-phone-block">
            <a [href]="'tel:' + phoneClean" class="phone-link">
              {{ phone }}
            </a>
            <p class="phone-subtext">Ein Anruf. Ein guter Anfang.</p>
          </div>

          <div class="whatsapp-btn-wrapper">
            <app-button
              label="Per WhatsApp schreiben"
              variant="secondary"
              size="md"
              arrowDirection="right"
              [href]="whatsappUrl"
              target="_blank"
            />
          </div>

          <p class="contact-location">{{ location }}</p>
        </div>

        <!-- Inquiry Form Right Column (from Figma node 5:592) -->
        <div class="contact-form-card">
          <h3 class="form-title">Ihr Anliegen. Unser nächster Schritt.</h3>

          @if (submissionState() === 'success') {
            <div class="alert-box alert-success animate-fade-in" role="alert">
              <span class="alert-icon">✓</span>
              <div>
                <strong>Vielen Dank für Ihre Nachricht!</strong>
                <p>Wir haben Ihr Anliegen erhalten und melden uns in Kürze persönlich bei Ihnen.</p>
              </div>
            </div>
          } @else {
            <form (ngSubmit)="onSubmit()" class="inquiry-form" novalidate>
              <!-- Name Field -->
              <div class="form-group">
                <label for="fullName" class="form-label">Ihr Name *</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  [(ngModel)]="formData.fullName"
                  placeholder="Vor- und Nachname"
                  class="form-input"
                  [class.has-error]="validationErrors().fullName"
                  required
                />
                @if (validationErrors().fullName) {
                  <span class="error-text">{{ validationErrors().fullName }}</span>
                }
              </div>

              <!-- Contact Row: Email & Phone -->
              <div class="form-row">
                <div class="form-group">
                  <label for="email" class="form-label">E-Mail *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    [(ngModel)]="formData.email"
                    placeholder="name@beispiel.de"
                    class="form-input"
                    [class.has-error]="validationErrors().email"
                    required
                  />
                  @if (validationErrors().email) {
                    <span class="error-text">{{ validationErrors().email }}</span>
                  }
                </div>

                <div class="form-group">
                  <label for="phone" class="form-label">Telefon (optional)</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    [(ngModel)]="formData.phone"
                    placeholder="Ihre Telefonnummer"
                    class="form-input"
                  />
                </div>
              </div>

              <!-- Service Selection Dropdown -->
              <div class="form-group">
                <label for="serviceId" class="form-label">Wobei dürfen wir helfen?</label>
                <div class="select-wrapper">
                  <select
                    id="serviceId"
                    name="serviceId"
                    [(ngModel)]="formData.serviceId"
                    class="form-select"
                  >
                    <option value="" disabled selected>Leistung auswählen ↓</option>
                    @for (s of services(); track s.id) {
                      <option [value]="s.title">{{ s.title }}</option>
                    }
                    <option value="Sonstiges Anliegen">Sonstiges Anliegen</option>
                  </select>
                </div>
              </div>

              <!-- Message Field -->
              <div class="form-group">
                <label for="message" class="form-label">Ihre Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="formData.message"
                  rows="4"
                  placeholder="Beschreiben Sie kurz Ihr Anliegen …"
                  class="form-textarea"
                  [class.has-error]="validationErrors().message"
                  required
                ></textarea>
                @if (validationErrors().message) {
                  <span class="error-text">{{ validationErrors().message }}</span>
                }
              </div>

              <!-- GDPR Consent Checkbox (Figma node 5:615) -->
              <div class="form-checkbox-group">
                <label class="checkbox-container">
                  <input
                    type="checkbox"
                    name="consent"
                    [(ngModel)]="formData.consent"
                    required
                    class="checkbox-input"
                  />
                  <span class="checkbox-custom"></span>
                  <span class="checkbox-label">
                    Ich habe die Datenschutzhinweise gelesen und bin mit der Kontaktaufnahme einverstanden. *
                  </span>
                </label>
                @if (validationErrors().consent) {
                  <span class="error-text">{{ validationErrors().consent }}</span>
                }
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="form-submit-btn"
                [disabled]="isSubmitting()"
              >
                <span>{{ isSubmitting() ? 'Wird gesendet …' : 'Anfrage senden' }}</span>
                <span class="btn-arrow">→</span>
              </button>

              <p class="form-footnote">* Pflichtfelder · Ihre Daten behandeln wir vertraulich.</p>
            </form>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .contact-section {
      background-color: var(--color-white);
      padding: clamp(64px, 8vw, 104px) clamp(20px, 6vw, 96px);
      overflow: hidden;
    }

    .contact-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: clamp(40px, 6vw, 88px);
      align-items: flex-start;

      @media (min-width: 1024px) {
        grid-template-columns: 480px 1fr;
      }
    }

    // Left info column
    .contact-info-col {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .contact-title {
        font-size: clamp(34px, 4vw, 48px);
        font-weight: 600;
        line-height: 1.18;
        letter-spacing: -1.44px;
        color: var(--color-navy);
        display: flex;
        flex-direction: column;
      }

      .contact-description {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;
        color: var(--color-muted);
      }

      .contact-phone-block {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-top: 4px;

        .phone-link {
          font-size: clamp(24px, 3vw, 30px);
          font-weight: 600;
          color: var(--color-navy);
          text-decoration: none;
          line-height: 1.3;
          transition: color var(--transition-fast);

          &:hover {
            color: var(--color-green-hover);
          }
        }

        .phone-subtext {
          font-size: 12px;
          font-weight: 400;
          color: var(--color-muted);
        }
      }

      .whatsapp-btn-wrapper {
        margin-top: 4px;
      }

      .contact-location {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 1.2px;
        color: var(--color-muted);
        text-transform: uppercase;
        margin-top: 8px;
      }
    }

    // Right form card (from Figma node 5:592)
    .contact-form-card {
      background-color: var(--color-mist);
      padding: clamp(24px, 4vw, 32px);
      border-radius: var(--border-radius-lg);
      border: 1px solid var(--color-border);
      box-shadow: var(--shadow-subtle);

      .form-title {
        font-size: clamp(20px, 2.5vw, 24px);
        font-weight: 600;
        color: var(--color-navy);
        line-height: 1.4;
        margin-bottom: 24px;
      }
    }

    .inquiry-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;

      @media (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }

    .form-label {
      font-size: 12px;
      font-weight: 600;
      color: var(--color-navy);
      line-height: 1.4;
    }

    .form-input, .form-select, .form-textarea {
      background-color: var(--color-white);
      border: 1px solid var(--color-border);
      border-radius: var(--border-radius-md);
      padding: 16px;
      font-size: 14px;
      color: var(--color-navy);
      outline: none;
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
      width: 100%;

      &::placeholder {
        color: var(--color-muted);
        font-size: 14px;
      }

      &:focus {
        border-color: var(--color-navy);
        box-shadow: 0 0 0 3px rgba(16, 40, 61, 0.08);
      }

      &.has-error {
        border-color: #ef4444;
      }
    }

    .select-wrapper {
      position: relative;
      width: 100%;

      .form-select {
        appearance: none;
        cursor: pointer;
        padding-right: 40px;
      }

      &::after {
        content: '↓';
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        color: var(--color-muted);
        font-size: 14px;
      }
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
      line-height: 1.6;
    }

    .form-checkbox-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .checkbox-container {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      cursor: pointer;
      user-select: none;

      .checkbox-input {
        margin-top: 3px;
        accent-color: var(--color-navy);
        width: 18px;
        height: 18px;
        cursor: pointer;
      }

      .checkbox-label {
        font-size: 11px;
        color: var(--color-muted);
        line-height: 1.6;
      }
    }

    .form-submit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      background-color: var(--color-green);
      color: var(--color-navy);
      border: none;
      border-radius: var(--border-radius-md);
      padding: 17px 24px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: background-color var(--transition-normal), transform var(--transition-normal);
      width: 100%;
      line-height: 1.45;

      &:hover:not(:disabled) {
        background-color: var(--color-green-hover);
        transform: translateY(-2px);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .btn-arrow {
        font-size: 20px;
        font-weight: 500;
        transition: transform var(--transition-fast);
      }

      &:hover:not(:disabled) .btn-arrow {
        transform: translateX(4px);
      }
    }

    .form-footnote {
      font-size: 10px;
      color: var(--color-muted);
      line-height: 1.6;
      margin: 0;
    }

    .error-text {
      font-size: 11px;
      color: #ef4444;
      font-weight: 500;
    }

    .alert-box {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      padding: 20px;
      border-radius: var(--border-radius-md);

      &.alert-success {
        background-color: #ecfdf5;
        border: 1px solid #10b981;
        color: #065f46;

        .alert-icon {
          font-size: 24px;
          color: #10b981;
          font-weight: bold;
        }

        strong {
          font-size: 16px;
          display: block;
          margin-bottom: 4px;
        }

        p {
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  private readonly contactService = inject(ContactService);
  private readonly catalogService = inject(ServicesCatalogService);

  readonly selectedServiceName = input<string>('');
  readonly services = this.catalogService.services;

  readonly phone = BUSINESS_PHONE;
  readonly phoneClean = '+491739074381';
  readonly location = BUSINESS_LOCATION;
  readonly whatsappUrl = this.contactService.getWhatsAppUrl();

  formData = {
    fullName: '',
    email: '',
    phone: '',
    serviceId: '',
    message: '',
    consent: false,
  };

  validationErrors = signal<FormErrors>({});
  isSubmitting = signal<boolean>(false);
  submissionState = signal<'idle' | 'success' | 'error'>('idle');

  validateForm(): boolean {
    const errors: Record<string, string> = {};

    if (!this.formData.fullName.trim()) {
      errors['fullName'] = 'Bitte geben Sie Ihren Vor- und Nachnamen ein.';
    }

    if (!this.formData.email.trim() || !/^\S+@\S+\.\S+$/.test(this.formData.email)) {
      errors['email'] = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }

    if (!this.formData.message.trim()) {
      errors['message'] = 'Bitte beschreiben Sie kurz Ihr Anliegen.';
    }

    if (!this.formData.consent) {
      errors['consent'] = 'Bitte stimmen Sie den Datenschutzhinweisen zu.';
    }

    this.validationErrors.set(errors);
    return Object.keys(errors).length === 0;
  }

  async onSubmit(): Promise<void> {
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting.set(true);
    const result = await this.contactService.submitInquiry(this.formData);
    this.isSubmitting.set(false);

    if (result.success) {
      this.submissionState.set('success');
    }
  }
}
