import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <section class="hero-section" aria-label="Hero">
      <!-- Background Image -->
      <div class="hero-bg-media">
        <img
          src="/assets/images/haus-und-garten.png"
          alt="Haus und Gartenpflege Weingarten"
          class="hero-bg-img"
          fetchpriority="high"
        />
      </div>

      <!-- Linear Gradient Overlay for High Readability (from Figma node 5:130) -->
      <div class="hero-overlay"></div>

      <!-- Hero Content Container -->
      <div class="hero-container container-allround">
        <div class="hero-text-block">
          <!-- Standort Badge -->
          <div class="hero-location-badge">
            <span class="location-dot">●</span>
            <span class="location-text">IHR ALLROUND-SERVICE IN WEINGARTEN</span>
          </div>

          <!-- Hero Headline -->
          <h1 class="hero-title">
            <span>Ein Ansprechpartner.</span>
            <span class="hero-title-accent">Viele Lösungen.</span>
          </h1>

          <!-- Hero Subtitle -->
          <p class="hero-subtitle">
            Ob Zuhause, unterwegs oder rund um Ihre Immobilie: Wir kümmern uns. Persönlich, unkompliziert und mit dem Blick fürs Ganze.
          </p>

          <!-- Dual Hero CTAs -->
          <div class="hero-actions">
            <app-button
              label="Unverbindlich anfragen"
              variant="primary"
              size="md"
              arrowDirection="right"
              href="#kontakt"
            />

            <app-button
              label="Leistungen entdecken"
              variant="secondary"
              size="md"
              arrowDirection="right"
              href="#leistungen"
            />
          </div>
        </div>

        <!-- Hero Footer Bar (from Figma node 5:144) -->
        <div class="hero-bottom-bar">
          <p class="bottom-bar-text">Persönlich vor Ort. Mit Sorgfalt erledigt.</p>
          <a href="#ueber-uns" class="bottom-bar-link">
            <span>WEITER ENTDECKEN</span>
            <span class="arrow-down">↓</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .hero-section {
      position: relative;
      background-color: var(--color-navy);
      min-height: 620px;
      padding-top: 92px;
      padding-bottom: 48px;
      padding-left: clamp(20px, 6vw, 96px);
      padding-right: clamp(20px, 6vw, 96px);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: var(--color-white);
    }

    .hero-bg-media {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 0;

      .hero-bg-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center right;
        opacity: 0.5;

        @media (min-width: 1024px) {
          opacity: 0.65;
        }
      }
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: linear-gradient(
        to right,
        rgba(16, 40, 61, 0.98) 0%,
        rgba(16, 40, 61, 0.88) 45%,
        rgba(16, 40, 61, 0.55) 75%,
        rgba(16, 40, 61, 0.15) 100%
      );
    }

    .hero-container {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      min-height: 480px;
      gap: 56px;
    }

    .hero-text-block {
      max-width: 860px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .hero-location-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.1px;
      color: var(--color-white);

      .location-dot {
        color: var(--color-green);
        font-size: 10px;
      }
    }

    .hero-title {
      font-size: clamp(38px, 5.5vw, 76px);
      font-weight: 600;
      line-height: 1.12;
      letter-spacing: -2.28px;
      color: var(--color-white);
      display: flex;
      flex-direction: column;

      .hero-title-accent {
        color: var(--color-green);
      }
    }

    .hero-subtitle {
      font-size: clamp(15px, 2vw, 17px);
      font-weight: 400;
      line-height: 1.6;
      color: var(--color-white);
      max-width: 520px;
      opacity: 0.92;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      padding-top: 8px;
    }

    .hero-bottom-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      padding-top: 24px;
      font-size: 11px;
      font-weight: 500;
      color: var(--color-white);

      .bottom-bar-text {
        opacity: 0.85;
      }

      .bottom-bar-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-weight: 700;
        font-size: 10px;
        letter-spacing: 0.8px;
        color: var(--color-white);
        text-decoration: none;
        transition: transform var(--transition-fast);

        &:hover {
          color: var(--color-green);
          .arrow-down {
            transform: translateY(2px);
          }
        }

        .arrow-down {
          display: inline-block;
          transition: transform var(--transition-fast);
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {}
