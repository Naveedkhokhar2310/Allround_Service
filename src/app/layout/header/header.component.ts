import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/components/button/button.component';
import { TranslationService } from '@core/services/translation.service';
import { LangCode } from '@core/i18n/i18n.types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  template: `
    <header class="allround-header">
      <div class="header-container">
        <!-- Brand Logo -->
        <a routerLink="/" class="header-logo" aria-label="Allround Dienstleistung GbR Startseite">
          <img src="assets/images/logo.svg" alt="Allround Dienstleistung GbR" class="logo-image" width="182" height="40" />
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <a href="#about" class="nav-link">{{ t().nav.about }}</a>
          <a href="#services" class="nav-link">{{ t().nav.services }}</a>
          <a href="#why-allround" class="nav-link">{{ t().nav.whyUs }}</a>

          <!-- Language Switcher Pill -->
          <div class="lang-switch" role="group" aria-label="Language Selector">
            <button
              type="button"
              class="lang-btn"
              [class.active]="currentLang() === 'de'"
              (click)="setLang('de')"
              aria-label="Deutsch"
            >
              DE
            </button>
            <span class="lang-divider">|</span>
            <button
              type="button"
              class="lang-btn"
              [class.active]="currentLang() === 'en'"
              (click)="setLang('en')"
              aria-label="English"
            >
              EN
            </button>
          </div>

          <app-button
            [label]="t().nav.contactBtn"
            variant="primary"
            size="md"
            arrowDirection="right"
            href="#contact"
          />
        </nav>

        <!-- Mobile Controls: Lang toggle + Hamburger -->
        <div class="mobile-actions">
          <div class="lang-switch lang-switch-mobile" role="group" aria-label="Language Selector">
            <button
              type="button"
              class="lang-btn"
              [class.active]="currentLang() === 'de'"
              (click)="setLang('de')"
            >
              DE
            </button>
            <span class="lang-divider">|</span>
            <button
              type="button"
              class="lang-btn"
              [class.active]="currentLang() === 'en'"
              (click)="setLang('en')"
            >
              EN
            </button>
          </div>

          <button
            type="button"
            class="mobile-toggle"
            (click)="toggleMobileMenu()"
            [attr.aria-expanded]="mobileMenuOpen()"
            [attr.aria-label]="t().nav.openMenu"
          >
            <span class="hamburger-bar" [class.open]="mobileMenuOpen()"></span>
            <span class="hamburger-bar" [class.open]="mobileMenuOpen()"></span>
            <span class="hamburger-bar" [class.open]="mobileMenuOpen()"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Drawer -->
      @if (mobileMenuOpen()) {
        <div class="mobile-drawer animate-fade-in">
          <nav class="mobile-nav" aria-label="Mobile Navigation">
            <a href="#about" class="mobile-nav-link" (click)="closeMobileMenu()">{{ t().nav.about }}</a>
            <a href="#services" class="mobile-nav-link" (click)="closeMobileMenu()">{{ t().nav.services }}</a>
            <a href="#why-allround" class="mobile-nav-link" (click)="closeMobileMenu()">{{ t().nav.whyUs }}</a>
            <div class="mobile-cta-wrapper" (click)="closeMobileMenu()">
              <app-button
                [label]="t().nav.contactBtn"
                variant="primary"
                size="md"
                arrowDirection="right"
                href="#contact"
              />
            </div>
          </nav>
        </div>
      }
    </header>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .allround-header {
      background-color: var(--color-white);
      border-bottom: 1px solid var(--color-border);
      width: 100%;
      box-shadow: 0 1px 3px rgba(16, 40, 61, 0.04);
    }

    .header-container {
      max-width: var(--container-max-width);
      margin: 0 auto;
      padding: 18px clamp(20px, 6vw, 96px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    // Logo
    .header-logo {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      transition: opacity var(--transition-fast);

      &:hover {
        opacity: 0.9;
      }

      .logo-image {
        display: block;
        height: 40px;
        width: auto;
        max-width: 190px;
      }
    }

    // Desktop Nav
    .desktop-nav {
      display: none;
      align-items: center;
      gap: 28px;

      @media (min-width: 960px) {
        display: flex;
      }

      .nav-link {
        font-size: 14px;
        font-weight: 500;
        color: var(--color-navy);
        text-decoration: none;
        transition: color var(--transition-fast);
        padding: 8px 0;

        &:hover {
          color: var(--color-green-hover);
        }
      }
    }

    // Language Switcher Pill
    .lang-switch {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background-color: var(--color-mist);
      padding: 6px 10px;
      border-radius: var(--border-radius-md);
      border: 1px solid var(--color-border);
      font-size: 12px;
      font-weight: 700;

      .lang-btn {
        background: none;
        border: none;
        padding: 2px 4px;
        font-size: 12px;
        font-weight: 600;
        color: var(--color-muted);
        cursor: pointer;
        transition: all var(--transition-fast);
        border-radius: 3px;

        &.active {
          color: var(--color-navy);
          background-color: var(--color-white);
          box-shadow: 0 1px 3px rgba(16, 40, 61, 0.1);
        }

        &:hover:not(.active) {
          color: var(--color-navy);
        }
      }

      .lang-divider {
        color: var(--color-border);
        font-size: 10px;
      }
    }

    .mobile-actions {
      display: flex;
      align-items: center;
      gap: 12px;

      @media (min-width: 960px) {
        display: none;
      }
    }

    // Mobile Toggle
    .mobile-toggle {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 32px;
      height: 32px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 4px;

      .hamburger-bar {
        width: 100%;
        height: 2px;
        background-color: var(--color-navy);
        border-radius: 2px;
        transition: all 0.3s ease;

        &.open:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        &.open:nth-child(2) {
          opacity: 0;
        }
        &.open:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    }

    // Mobile Drawer
    .mobile-drawer {
      background-color: var(--color-white);
      border-top: 1px solid var(--color-border);
      padding: 24px clamp(20px, 6vw, 96px) 32px;

      @media (min-width: 960px) {
        display: none;
      }

      .mobile-nav {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .mobile-nav-link {
          font-size: 16px;
          font-weight: 600;
          color: var(--color-navy);
          text-decoration: none;
          padding: 8px 0;
          border-bottom: 1px solid var(--color-mist);

          &:hover {
            color: var(--color-green-hover);
          }
        }

        .mobile-cta-wrapper {
          margin-top: 8px;
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly translationService = inject(TranslationService);
  readonly t = this.translationService.t;
  readonly currentLang = this.translationService.currentLang;

  readonly mobileMenuOpen = signal<boolean>(false);

  setLang(lang: LangCode): void {
    this.translationService.setLanguage(lang);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
