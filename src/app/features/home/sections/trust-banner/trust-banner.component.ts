import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trust-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="trust-banner" aria-label="Vertrauensvorteile">
      <div class="banner-container container-allround">
        <div class="trust-item">
          <span class="trust-check">✓</span>
          <span class="trust-label">Ein Ansprechpartner</span>
        </div>
        <div class="trust-item">
          <span class="trust-check">✓</span>
          <span class="trust-label">Flexible Lösungen</span>
        </div>
        <div class="trust-item">
          <span class="trust-check">✓</span>
          <span class="trust-label">Für Privat & Gewerbe</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .trust-banner {
      background-color: var(--color-mist);
      padding: 24px clamp(20px, 6vw, 96px);
      border-bottom: 1px solid var(--color-border);
    }

    .banner-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      justify-content: space-between;

      @media (min-width: 640px) {
        flex-direction: row;
        align-items: center;
      }
    }

    .trust-item {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-size: 13px;
      font-weight: 600;
      color: var(--color-navy);

      .trust-check {
        color: var(--color-green-hover);
        font-weight: 700;
        font-size: 15px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrustBannerComponent {}
