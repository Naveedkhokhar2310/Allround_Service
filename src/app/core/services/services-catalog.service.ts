import { Injectable, signal } from '@angular/core';
import { ServiceItem } from '../models/service-item.model';

@Injectable({
  providedIn: 'root',
})
export class ServicesCatalogService {
  private readonly _services = signal<readonly ServiceItem[]>([
    {
      id: 'kurierfahrten',
      number: '01',
      title: 'Kurierfahrten',
      headline: 'Direkt ans Ziel. Sicher und zuverlässig.',
      description: 'Direkt ans Ziel. Sicher und zuverlässig – vom einzelnen Paket bis zur wichtigen Lieferung.',
      image: '/assets/images/kurierfahrten.png',
      actionText: 'Leistung anfragen',
      features: ['Dokumenten- & Direkttransporte', 'Pünktliche Expresszustellung', 'Flexibel buchbar für Gewerbe & Privat']
    },
    {
      id: 'entruempelungen',
      number: '02',
      title: 'Entrümpelungen',
      headline: 'Platz für Neues. Sorgfältig freigeräumt.',
      description: 'Platz für Neues. Wir räumen Wohnungen, Keller und Räume sorgfältig für Sie frei.',
      image: '/assets/images/entruempelungen.png',
      actionText: 'Leistung anfragen',
      features: ['Wohnungs- & Haushaltsauflösungen', 'Fachgerechte & umweltbewusste Entsorgung', 'Besenreine Übergabe']
    },
    {
      id: 'umzuege',
      number: '03',
      title: 'Umzüge',
      headline: 'Entspannt ankommen. Tatkräftige Hilfe.',
      description: 'Entspannt ankommen. Tatkräftige Unterstützung für Ihren nächsten Ortswechsel.',
      image: '/assets/images/umzuege.png',
      actionText: 'Leistung anfragen',
      features: ['Privat- & Büroumzüge', 'Möbeltransport & Tragehilfe', 'Sorgsamer Umgang mit Ihrem Hab und Gut']
    },
    {
      id: 'hausmeisterservice',
      number: '04',
      title: 'Hausmeisterservice',
      headline: 'Alles im Blick rund um Ihre Immobilie.',
      description: 'Alles im Blick. Wir kümmern uns um Ihre Immobilie und die kleinen Dinge im Alltag.',
      image: '/assets/images/hausmeisterservice.png',
      actionText: 'Leistung anfragen',
      features: ['Regelmäßige Objektkontrolle', 'Kleinreparaturen & Instandhaltung', 'Zuverlässiger Ansprechpartner für Mieter']
    },
    {
      id: 'reinigungsarbeiten',
      number: '05',
      title: 'Reinigungsarbeiten',
      headline: 'Spürbar sauber für Wohlfühlatmosphäre.',
      description: 'Spürbar sauber. Gepflegte Räume und klare Fenster, in denen Sie sich wohlfühlen.',
      image: '/assets/images/reinigungsarbeiten.png',
      actionText: 'Leistung anfragen',
      features: ['Treppenhaus- & Unterhaltsreinigung', 'Fenster- & Glasreinigung', 'Gründliche Endreinigung']
    },
    {
      id: 'gartenpflege',
      number: '06',
      title: 'Gartenpflege',
      headline: 'Draußen aufblühen. Einladend gepflegt.',
      description: 'Draußen aufblühen. Wir halten Ihren Garten grün, gepflegt und einladend.',
      image: '/assets/images/haus-und-garten.png',
      actionText: 'Leistung anfragen',
      features: ['Rasenmähen & Heckenschnitt', 'Unkraut- & Laubentfernung', 'Schnittgutabfuhr & Saisonpflege']
    }
  ]);

  readonly services = this._services.asReadonly();

  getServiceById(id: string): ServiceItem | undefined {
    return this._services().find((s) => s.id === id);
  }
}
