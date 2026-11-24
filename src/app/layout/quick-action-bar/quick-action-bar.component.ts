import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService, BUSINESS_PHONE } from '@core/services/contact.service';

@Component({
  selector: 'app-quick-action-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="quick-action-bar" aria-label="Schnellkontakt">
      <a [href]="'tel:' + phoneClean" class="action-btn action-call" aria-label="Jetzt anrufen">
        <span class="btn-icon">📞</span>
        <span class="btn-label">Anrufen</span>
      </a>

      <a [href]="whatsappUrl" target="_blank" rel="noopener noreferrer" class="action-btn action-whatsapp" aria-label="WhatsApp Nachricht senden">
        <span class="btn-icon">💬</span>
        <span class="btn-label">WhatsApp</span>
      </a>
    </aside>
  `,
  styles: [`
    :host {
      display: block;

      @media (min-width: 769px) {
        display: none; // Only show on mobile / tablet screens
      }
    }

    .quick-action-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 999;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      padding: 10px 16px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-top: 1px solid var(--color-border);
      box-shadow: 0 -4px 16px rgba(16, 40, 61, 0.1);
    }

    .action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 16px;
      border-radius: var(--border-radius-md);
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      line-height: 1;
      transition: transform var(--transition-fast);

      &:active {
        transform: scale(0.97);
      }
    }

    .action-call {
      background-color: var(--color-navy);
      color: var(--color-white);
    }

    .action-whatsapp {
      background-color: var(--color-green);
      color: var(--color-navy);
    }

    .btn-icon {
      font-size: 16px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickActionBarComponent {
  private readonly contactService = inject(ContactService);
  readonly phone = BUSINESS_PHONE;
  readonly phoneClean = '+491739074381';
  readonly whatsappUrl = this.contactService.getWhatsAppUrl();
}
