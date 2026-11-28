import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BUSINESS_PHONE, BUSINESS_LOCATION, BUSINESS_ADDRESS, ContactService } from '@core/services/contact.service';
import { ServicesCatalogService } from '@core/services/services-catalog.service';
import { TranslationService } from '@core/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="allround-footer">
      <div class="footer-container">
        <!-- Main Footer Row -->
        <div class="footer-main-row">
          <!-- Brand Column -->
          <div class="footer-brand">
            <a routerLink="/" class="footer-logo" aria-label="Allround Dienstleistung GbR Startseite">
              <img src="assets/images/logo.svg" alt="Allround Dienstleistung GbR" class="logo-image" width="182" height="40" />
            </a>
            <p class="brand-tagline">{{ t().footer.tagline }}</p>
          </div>

          <!-- Services Column -->
          <div class="footer-col footer-services-col">
            <h4 class="footer-col-title">{{ t().footer.servicesTitle }}</h4>
            <ul class="footer-services-list">
              @for (service of services(); track service.id) {
                <li>
                  <a routerLink="/" fragment="services" class="footer-service-link">
                    {{ service.title }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Company Details & Contact Column -->
          <div class="footer-col footer-details-col">
            <h4 class="footer-col-title">{{ t().footer.contactTitle }}</h4>
            <div class="footer-details">
              <p class="company-name">Allround Dienstleistung GbR</p>
              <p class="company-address">{{ address }}</p>
              <p class="company-location">{{ location }}</p>
              <a [href]="'tel:' + phoneClean" class="company-phone">{{ phone }}</a>
              <a [href]="whatsappUrl" target="_blank" rel="noopener noreferrer" class="company-whatsapp">
                WhatsApp Direktkontakt ↗
              </a>
            </div>
          </div>

          <!-- Back to Top Button -->
          <div class="footer-top-action">
            <button type="button" class="back-to-top-btn" (click)="scrollToTop()" [attr.aria-label]="t().footer.backToTop">
              <span>{{ t().footer.backToTop }}</span>
              <span class="top-arrow">↑</span>
            </button>
          </div>
        </div>

        <!-- Legal Bottom Row -->
        <div class="footer-bottom-row">
          <p class="copyright-text">{{ t().footer.copyright }}</p>
          <div class="legal-links">
            <a routerLink="/imprint" class="legal-link">{{ t().footer.imprint }}</a>
            <a routerLink="/privacy" class="legal-link">{{ t().footer.privacy }}</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .allround-footer {
      background-color: var(--color-mist);
      padding: 56px clamp(20px, 6vw, 96px) 32px;
      border-top: 1px solid var(--color-border);
    }

    .footer-container {
      max-width: var(--container-max-width);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .footer-main-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 36px;

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: 1.3fr 1.3fr 1.2fr auto;
        align-items: flex-start;
        gap: 48px;
      }
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .footer-logo {
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        transition: opacity var(--transition-fast);

        &:hover {
          opacity: 0.9;
        }

        .logo-image {
          display: block;
          height: 40px;
          width: auto;
          max-width: 190px;
        }
      }

      .brand-tagline {
        font-size: 13px;
        font-weight: 400;
        color: var(--color-muted);
        margin-top: 4px;
      }
    }

    .footer-col {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer-col-title {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--color-navy);
      margin: 0;
    }

    .footer-services-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .footer-service-link {
        font-size: 13px;
        color: var(--color-muted);
        text-decoration: none;
        transition: color var(--transition-fast);

        &:hover {
          color: var(--color-navy);
          text-decoration: underline;
        }
      }
    }

    .footer-details {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 13px;

      .company-name {
        font-weight: 600;
        color: var(--color-navy);
        margin: 0;
      }

      .company-address,
      .company-location {
        color: var(--color-muted);
        margin: 0;
      }

      .company-phone,
      .company-whatsapp {
        color: var(--color-navy);
        text-decoration: none;
        font-weight: 500;
        transition: color var(--transition-fast);

        &:hover {
          color: var(--color-green-hover);
        }
      }
    }

    .footer-top-action {
      .back-to-top-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        font-weight: 700;
        color: var(--color-navy);
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px 0;
        transition: transform var(--transition-fast);

        &:hover {
          transform: translateY(-2px);
          .top-arrow {
            transform: translateY(-2px);
          }
        }

        .top-arrow {
          display: inline-block;
          transition: transform var(--transition-fast);
        }
      }
    }

    .footer-bottom-row {
      border-top: 1px solid var(--color-border);
      padding-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      font-size: 11px;

      @media (min-width: 640px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .copyright-text {
        color: var(--color-muted);
      }

      .legal-links {
        display: flex;
        gap: 24px;

        .legal-link {
          color: var(--color-navy);
          text-decoration: none;
          font-weight: 500;
          transition: color var(--transition-fast);

          &:hover {
            color: var(--color-green-hover);
          }
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly translationService = inject(TranslationService);
  private readonly catalogService = inject(ServicesCatalogService);
  private readonly contactService = inject(ContactService);

  readonly t = this.translationService.t;
  readonly services = this.catalogService.services;

  readonly phone = BUSINESS_PHONE;
  readonly phoneClean = '+491739074381';
  readonly address = BUSINESS_ADDRESS;
  readonly location = BUSINESS_LOCATION;
  readonly whatsappUrl = this.contactService.getWhatsAppUrl();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
