import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="legal-page section-padding container-allround">
      <a routerLink="/" class="back-link">← Zurück zur Startseite</a>
      <h1>Datenschutzerklärung</h1>

      <section class="legal-section">
        <h2>1. Datenschutz auf einen Blick</h2>
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
      </section>

      <section class="legal-section">
        <h2>2. Verantwortliche Stelle</h2>
        <p>
          <strong>Allround Dienstleistung GbR</strong><br />
          Weingarten, Baden-Württemberg, Deutschland<br />
          Telefon: +49 173 9074381<br />
          E-Mail: kontakt&#64;allround-weingarten.de
        </p>
      </section>

      <section class="legal-section">
        <h2>3. Datenerfassung auf dieser Website</h2>
        <p><strong>Kontaktformular & Kontaktaufnahme:</strong></p>
        <p>
          Wenn Sie uns per Kontaktformular oder per E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p><strong>WhatsApp:</strong></p>
        <p>
          Wenn Sie uns über den bereitgestellten WhatsApp-Link kontaktieren, gelten die Datenschutzrichtlinien der WhatsApp Ireland Limited.
        </p>
      </section>

      <section class="legal-section">
        <h2>4. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
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
export class DatenschutzComponent {}
