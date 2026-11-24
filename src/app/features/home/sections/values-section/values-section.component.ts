import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '@shared/components/badge/badge.component';
import { ValueCardComponent } from '@shared/components/value-card/value-card.component';
import { TranslationService } from '@core/services/translation.service';

@Component({
  selector: 'app-values-section',
  standalone: true,
  imports: [CommonModule, BadgeComponent, ValueCardComponent],
  template: `
    <section id="why-allround" class="values-section" aria-label="Why Allround">
      <div class="values-container container-allround">
        <!-- Section Title -->
        <div class="values-header">
          <app-badge variant="green">{{ t().whyUs.badge }}</app-badge>
          <h2 class="values-title">
            <span>{{ t().whyUs.titleLine1 }}</span>
            <span>{{ t().whyUs.titleLine2 }}</span>
          </h2>
        </div>

        <!-- 4 Value Cards in 2x2 Grid -->
        <div class="values-grid">
          <app-value-card
            number="01 /"
            [title]="t().whyUs.value1Title"
            [description]="t().whyUs.value1Desc"
          />

          <app-value-card
            number="02 /"
            [title]="t().whyUs.value2Title"
            [description]="t().whyUs.value2Desc"
          />

          <app-value-card
            number="03 /"
            [title]="t().whyUs.value3Title"
            [description]="t().whyUs.value3Desc"
          />

          <app-value-card
            number="04 /"
            [title]="t().whyUs.value4Title"
            [description]="t().whyUs.value4Desc"
          />
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .values-section {
      background-color: var(--color-navy);
      color: var(--color-white);
      padding: clamp(64px, 8vw, 96px) clamp(20px, 6vw, 96px);
    }

    .values-container {
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    .values-header {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .values-title {
        font-size: clamp(32px, 4vw, 44px);
        font-weight: 600;
        line-height: 1.18;
        letter-spacing: -1.32px;
        color: var(--color-white);
        display: flex;
        flex-direction: column;
      }
    }

    .values-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px 48px;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValuesSectionComponent {
  private readonly translationService = inject(TranslationService);
  readonly t = this.translationService.t;
}
