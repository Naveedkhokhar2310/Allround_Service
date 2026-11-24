import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '@shared/components/badge/badge.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  template: `
    <section id="ueber-uns" class="about-section" aria-label="Über uns">
      <div class="about-container container-allround">
        <!-- Visual Media Left Column -->
        <div class="about-media-col">
          <div class="image-card">
            <img
              src="/assets/images/umzuege.png"
              alt="Umzug und Allround Service Weingarten"
              class="about-image"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Narrative Right Column (from Figma node 5:150) -->
        <div class="about-content-col">
          <app-badge variant="muted">01 / ÜBER UNS</app-badge>

          <h2 class="about-title">
            <span>Viel zu tun?</span>
            <span>Wir sind für Sie da.</span>
          </h2>

          <div class="about-body">
            <p>
              Manchmal braucht es einfach jemanden, der anpackt. Als Allround Dienstleistung GbR unterstützen wir Privatpersonen und Unternehmen in Weingarten – genau dort, wo Hilfe gebraucht wird.
            </p>
            <p>
              Von der ersten Absprache bis zum letzten Handgriff: Sie haben einen festen Ansprechpartner und wir behalten alles im Blick.
            </p>
          </div>

          <!-- Service Promise Box (from Figma node 5:155) -->
          <div class="about-promise-box">
            <span class="promise-arrow">→</span>
            <div class="promise-text">
              <p class="promise-title">Aus Weingarten. Für Ihren Alltag.</p>
              <p class="promise-subtitle">Nah dran. Einfach erreichbar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .about-section {
      background-color: var(--color-white);
      padding: clamp(64px, 8vw, 96px) clamp(20px, 6vw, 96px);
      overflow: hidden;
    }

    .about-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: clamp(32px, 6vw, 88px);
      align-items: center;

      @media (min-width: 1024px) {
        grid-template-columns: 540px 1fr;
      }
    }

    .about-media-col {
      width: 100%;

      .image-card {
        width: 100%;
        max-width: 540px;
        height: clamp(320px, 40vw, 460px);
        border-radius: var(--border-radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-card);
        background-color: var(--color-mist);

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;

          &:hover {
            transform: scale(1.02);
          }
        }
      }
    }

    .about-content-col {
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 620px;
    }

    .about-title {
      font-size: clamp(32px, 4vw, 44px);
      font-weight: 600;
      line-height: 1.18;
      letter-spacing: -1.32px;
      color: var(--color-navy);
      display: flex;
      flex-direction: column;
    }

    .about-body {
      display: flex;
      flex-direction: column;
      gap: 16px;

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;
        color: var(--color-muted);
      }
    }

    .about-promise-box {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding-top: 8px;

      .promise-arrow {
        font-size: 26px;
        line-height: 1.2;
        color: var(--color-navy);
        font-weight: 500;
      }

      .promise-text {
        display: flex;
        flex-direction: column;
        gap: 2px;

        .promise-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-navy);
        }

        .promise-subtitle {
          font-size: 12px;
          font-weight: 400;
          color: var(--color-muted);
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {}
