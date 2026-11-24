import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '@core/services/translation.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="legal-page section-padding container-allround">
      <a routerLink="/" class="back-link">← {{ currentLang() === 'en' ? 'Back to home' : 'Zurück zur Startseite' }}</a>
      <h1>{{ currentLang() === 'en' ? 'Legal Notice / Imprint' : 'Impressum' }}</h1>

      <section class="legal-section">
        <h2>{{ currentLang() === 'en' ? 'Information according to § 5 TMG' : 'Angaben gemäß § 5 TMG' }}</h2>
        <p><strong>Allround Dienstleistung GbR</strong></p>
        <p>{{ currentLang() === 'en' ? 'Location: Weingarten, Baden-Württemberg, Germany' : 'Standort: Weingarten, Baden-Württemberg, Deutschland' }}</p>
        <p>{{ currentLang() === 'en' ? 'Phone:' : 'Telefon:' }} <a href="tel:+491739074381">+49 173 9074381</a></p>
        <p>E-Mail: kontakt&#64;allround-weingarten.de</p>
      </section>

      <section class="legal-section">
        <h2>{{ currentLang() === 'en' ? 'Authorized Representatives' : 'Vertretungsberechtigte Gesellschafter' }}</h2>
        <p>{{ currentLang() === 'en' ? 'Partners of Allround Dienstleistung GbR' : 'Gesellschafter der Allround Dienstleistung GbR' }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ currentLang() === 'en' ? 'EU Dispute Resolution' : 'EU-Streitschlichtung' }}</h2>
        <p>
          {{ currentLang() === 'en' ? 'The European Commission provides a platform for online dispute resolution (ODR):' : 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:' }}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>
        </p>
      </section>
    </div>
  `,
  styles: [`
    .legal-page {
      max-width: 860px;
      margin: 40px auto;
      padding-top: 40px;
      padding-bottom: 80px;

      .back-link {
        display: inline-block;
        margin-bottom: 24px;
        color: var(--color-navy);
        font-weight: 600;
        text-decoration: underline;
      }

      h1 {
        font-size: 36px;
        margin-bottom: 32px;
        color: var(--color-navy);
      }

      h2 {
        font-size: 20px;
        margin-top: 24px;
        margin-bottom: 12px;
        color: var(--color-navy);
      }

      p {
        margin-bottom: 12px;
        color: var(--color-muted);
        line-height: 1.6;

        a {
          color: var(--color-navy);
          text-decoration: underline;
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImprintComponent {
  private readonly translationService = inject(TranslationService);
  readonly currentLang = this.translationService.currentLang;
}
