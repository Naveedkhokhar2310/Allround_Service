import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItem } from '@core/models/service-item.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="service-card" (click)="onCardClick()">
      <div class="service-image-wrapper">
        <img
          [src]="service().image"
          [alt]="service().title"
          class="service-image"
          loading="lazy"
        />
      </div>

      <div class="service-content">
        <div class="service-header">
          <h3 class="service-title">{{ service().title }}</h3>
          <span class="service-number">{{ service().number }}</span>
        </div>

        <p class="service-description">{{ service().description }}</p>

        @if (service().features && service().features!.length > 0) {
          <ul class="service-features">
            @for (feature of service().features; track feature) {
              <li class="feature-item">
                <span class="feature-check">✓</span>
                <span>{{ feature }}</span>
              </li>
            }
          </ul>
        }

        <button
          type="button"
          class="service-action"
          (click)="onActionClick($event)"
          [attr.aria-label]="service().title + ' anfragen'"
        >
          <span>{{ service().actionText }}</span>
          <span class="action-arrow">→</span>
        </button>
      </div>
    </article>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .service-card {
      background-color: var(--color-white);
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
      border: 1px solid var(--color-border);
      transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
      cursor: pointer;

      &:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-hover);
        border-color: var(--color-green);

        .service-action .action-arrow {
          transform: translateX(4px);
        }

        .service-image {
          transform: scale(1.03);
        }
      }
    }

    .service-image-wrapper {
      position: relative;
      width: 100%;
      height: 226px;
      overflow: hidden;
      background-color: var(--color-mist);
    }

    .service-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
      transition: transform 0.4s ease;
    }

    .service-content {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      flex: 1;
    }

    .service-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 8px;
    }

    .service-title {
      font-size: 22px;
      font-weight: 600;
      color: var(--color-navy);
      line-height: 1.3;
    }

    .service-number {
      font-size: 11px;
      font-weight: 500;
      color: var(--color-muted);
    }

    .service-description {
      font-size: 14px;
      color: var(--color-muted);
      line-height: 1.6;
      flex: 1;
    }

    .service-features {
      list-style: none;
      padding: 0;
      margin: 4px 0 8px 0;
      display: flex;
      flex-direction: column;
      gap: 6px;

      .feature-item {
        font-size: 13px;
        color: var(--color-navy);
        display: flex;
        align-items: center;
        gap: 8px;

        .feature-check {
          color: var(--color-green-hover);
          font-weight: bold;
        }
      }
    }

    .service-action {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      font-weight: 700;
      color: var(--color-navy);
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
      margin-top: auto;
      text-align: left;

      .action-arrow {
        transition: transform var(--transition-fast);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  readonly service = input.required<ServiceItem>();
  readonly cardSelect = output<ServiceItem>();

  onCardClick(): void {
    this.cardSelect.emit(this.service());
  }

  onActionClick(event: Event): void {
    event.stopPropagation();
    this.cardSelect.emit(this.service());
  }
}
