import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '@core/services/translation.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="legal-page section-padding container-allround">
      <a routerLink="/" class="back-link">← {{ currentLang() === 'en' ? 'Back to home' : 'Zurück zur Startseite' }}</a>
      <h1>{{ currentLang() === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung' }}</h1>

      <section class="legal-section">
        <h2>{{ currentLang() === 'en' ? '1. Privacy at a Glance' : '1. Datenschutz auf einen Blick' }}</h2>
        <p>
          {{ currentLang() === 'en'
            ? 'We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this Privacy Policy.'
            : 'Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.' }}
        </p>
      </section>

      <section class="legal-section">
        <h2>{{ currentLang() === 'en' ? '2. Responsible Entity' : '2. Verantwortliche Stelle' }}</h2>
        <p>
          <strong>Allround Dienstleistung GbR</strong><br />
          Liebfrauenstrasse 26, 88250 Weingarten<br />
          Weingarten, Baden-Württemberg, Germany<br />
          Phone: +49 173 9074381<br />
          E-Mail: kontakt&#64;allround-weingarten.de
        </p>
      </section>

      <section class="legal-section">
        <h2>{{ currentLang() === 'en' ? '3. Data Collection on this Website' : '3. Datenerfassung auf dieser Website' }}</h2>
        <p>
          {{ currentLang() === 'en'
            ? 'When you contact us via contact form, your details from the inquiry form, including your contact information, will be stored for the purpose of processing the inquiry and in the event of follow-up questions. We do not pass on this data without your explicit consent.'
            : 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.' }}
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
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyComponent {
  private readonly translationService = inject(TranslationService);
  readonly currentLang = this.translationService.currentLang;
}
