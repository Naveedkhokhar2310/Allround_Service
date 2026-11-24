import { Component, ChangeDetectionStrategy, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesCatalogService } from '@core/services/services-catalog.service';
import { TranslationService } from '@core/services/translation.service';
import { ServiceItem } from '@core/models/service-item.model';
import { ServiceCardComponent } from '@shared/components/service-card/service-card.component';
import { BadgeComponent } from '@shared/components/badge/badge.component';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, BadgeComponent],
  template: `
    <section id="services" class="services-section" aria-label="Our services">
      <div class="services-container container-allround">
        <!-- Section Header -->
        <div class="services-header">
          <div class="header-left">
            <app-badge variant="muted">{{ t().services.badge }}</app-badge>
            <h2 class="services-title">
              <span>{{ t().services.titleLine1 }}</span>
              <span>{{ t().services.titleLine2 }}</span>
            </h2>
          </div>

          <div class="header-right">
            <p>{{ t().services.descLine1 }}</p>
            <p>{{ t().services.descLine2 }}</p>
            <p>{{ t().services.descLine3 }}</p>
          </div>
        </div>

        <!-- 6-Card Grid -->
        <div class="services-grid">
          @for (service of services(); track service.id) {
            <div class="service-grid-item">
              <app-service-card
                [service]="service"
                (cardSelect)="onSelectService($event)"
              />
            </div>
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

    .services-section {
      background-color: var(--color-mist);
      padding: clamp(64px, 8vw, 96px) clamp(20px, 6vw, 96px);
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
    }

    .services-container {
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    .services-header {
      display: flex;
      flex-direction: column;
      gap: 24px;
      justify-content: space-between;

      @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-end;
      }

      .header-left {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .services-title {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -1.32px;
          color: var(--color-navy);
          display: flex;
          flex-direction: column;
        }
      }

      .header-right {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.6;
        color: var(--color-muted);
        max-width: 380px;

        p {
          margin: 0;
        }
      }
    }

    .services-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .service-grid-item {
      display: flex;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  private readonly catalogService = inject(ServicesCatalogService);
  private readonly translationService = inject(TranslationService);

  readonly t = this.translationService.t;
  readonly services = this.catalogService.services;
  readonly serviceSelected = output<ServiceItem>();

  onSelectService(service: ServiceItem): void {
    this.serviceSelected.emit(service);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
