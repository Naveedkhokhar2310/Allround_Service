import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="legal-page section-padding container-allround">
      <a routerLink="/" class="back-link">← Zurück zur Startseite</a>
      <h1>Impressum</h1>

      <section class="legal-section">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p><strong>Allround Dienstleistung GbR</strong></p>
        <p>Standort: Weingarten, Baden-Württemberg, Deutschland</p>
        <p>Telefon: <a href="tel:+491739074381">+49 173 9074381</a></p>
        <p>E-Mail: kontakt&#64;allround-weingarten.de</p>
      </section>

      <section class="legal-section">
        <h2>Vertretungsberechtigte Gesellschafter</h2>
        <p>Gesellschafter der Allround Dienstleistung GbR</p>
      </section>

      <section class="legal-section">
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>Allround Dienstleistung GbR<br />Weingarten, Deutschland</p>
      </section>

      <section class="legal-section">
        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>

      <section class="legal-section">
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
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
export class ImpressumComponent {}
