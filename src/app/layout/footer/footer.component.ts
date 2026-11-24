import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BUSINESS_PHONE, BUSINESS_LOCATION } from '@core/services/contact.service';
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
            <div class="brand-logo">
              <span class="logo-title">allround</span>
              <span class="logo-subtitle">Dienstleistung GbR</span>
            </div>
            <p class="brand-tagline">{{ t().footer.tagline }}</p>
          </div>

          <!-- Company Details Column -->
          <div class="footer-details">
            <p class="company-name">Allround Dienstleistung GbR</p>
            <p class="company-location">{{ location }}</p>
            <a [href]="'tel:' + phoneClean" class="company-phone">{{ phone }}</a>
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
      display: flex;
      flex-direction: column;
      gap: 32px;
      justify-content: space-between;

      @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
      }
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .brand-logo {
        display: flex;
        flex-direction: column;
        line-height: 1.1;

        .logo-title {
          font-size: 32px;
          font-weight: 700;
          color: var(--color-navy);
          letter-spacing: -0.96px;
        }

        .logo-subtitle {
          font-size: 12px;
          font-weight: 500;
          color: var(--color-muted);
        }
      }

      .brand-tagline {
        font-size: 13px;
        font-weight: 400;
        color: var(--color-muted);
        margin-top: 4px;
      }
    }

    .footer-details {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 13px;

      .company-name {
        font-weight: 600;
        color: var(--color-navy);
      }

      .company-location {
        color: var(--color-muted);
      }

      .company-phone {
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
  readonly t = this.translationService.t;

  readonly phone = BUSINESS_PHONE;
  readonly phoneClean = '+491739074381';
  readonly location = BUSINESS_LOCATION;

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
