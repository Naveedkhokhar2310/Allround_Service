import { Injectable, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LangCode, TranslationSchema } from '../i18n/i18n.types';
import { de } from '../i18n/de';
import { en } from '../i18n/en';

const STORAGE_KEY = 'allround_preferred_lang';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly _currentLang = signal<LangCode>('de');
  readonly currentLang = this._currentLang.asReadonly();

  readonly t = computed<TranslationSchema>(() => {
    return this._currentLang() === 'en' ? en : de;
  });

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem(STORAGE_KEY) as LangCode | null;
      if (savedLang === 'de' || savedLang === 'en') {
        this.setLanguage(savedLang, false);
      } else {
        // Fallback to browser language if English
        const browserLang = navigator.language?.toLowerCase() || '';
        if (browserLang.startsWith('en')) {
          this.setLanguage('en', false);
        } else {
          this.setLanguage('de', false);
        }
      }
    }
  }

  setLanguage(lang: LangCode, persist = true): void {
    this._currentLang.set(lang);

    if (isPlatformBrowser(this.platformId)) {
      if (persist) {
        localStorage.setItem(STORAGE_KEY, lang);
      }
      document.documentElement.lang = lang;
    }
  }

  toggleLanguage(): void {
    const nextLang = this._currentLang() === 'de' ? 'en' : 'de';
    this.setLanguage(nextLang);
  }
}
