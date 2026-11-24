import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '@shared/components/badge/badge.component';
import { ValueCardComponent } from '@shared/components/value-card/value-card.component';

@Component({
  selector: 'app-values-section',
  standalone: true,
  imports: [CommonModule, BadgeComponent, ValueCardComponent],
  template: `
    <section id="warum-allround" class="values-section" aria-label="Warum Allround">
      <div class="values-container container-allround">
        <!-- Section Title (from Figma node 5:397) -->
        <div class="values-header">
          <app-badge variant="green">03 / WARUM ALLROUND</app-badge>
          <h2 class="values-title">
            <span>Gute Arbeit beginnt</span>
            <span>mit einem guten Gefühl.</span>
          </h2>
        </div>

        <!-- 4 Value Cards in 2x2 Grid (from Figma node 5:400) -->
        <div class="values-grid">
          <app-value-card
            number="01 /"
            title="Auf uns ist Verlass."
            description="Klare Absprachen, sorgfältige Arbeit. Wir nehmen Ihr Anliegen ernst."
          />

          <app-value-card
            number="02 /"
            title="So flexibel wie Ihr Alltag."
            description="Wir finden eine passende Lösung – auch wenn es einmal anders kommt."
          />

          <app-value-card
            number="03 /"
            title="Sorgfalt in jedem Detail."
            description="Wir packen nicht nur an. Wir denken mit und arbeiten mit Anspruch."
          />

          <app-value-card
            number="04 /"
            title="Persönlich statt anonym."
            description="Direkter Kontakt, kurze Wege. Sie wissen immer, wer sich kümmert."
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
export class ValuesSectionComponent {}
