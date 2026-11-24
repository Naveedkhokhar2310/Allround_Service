import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  template: `
    <header class="allround-header">
      <div class="header-container">
        <!-- Brand Logo -->
        <a routerLink="/" class="header-logo" aria-label="Allround Dienstleistung GbR Startseite">
          <span class="logo-title">allround</span>
          <span class="logo-subtitle">DIENSTLEISTUNG GbR</span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="desktop-nav" aria-label="Hauptnavigation">
          <a href="#ueber-uns" class="nav-link">Über uns</a>
          <a href="#leistungen" class="nav-link">Leistungen</a>
          <a href="#warum-allround" class="nav-link">Warum Allround</a>
          <app-button
            label="Kontakt aufnehmen"
            variant="primary"
            size="md"
            arrowDirection="right"
            href="#kontakt"
          />
        </nav>

        <!-- Mobile Menu Toggle Button -->
        <button
          type="button"
          class="mobile-toggle"
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="mobileMenuOpen()"
          aria-label="Menü öffnen"
        >
          <span class="hamburger-bar" [class.open]="mobileMenuOpen()"></span>
          <span class="hamburger-bar" [class.open]="mobileMenuOpen()"></span>
          <span class="hamburger-bar" [class.open]="mobileMenuOpen()"></span>
        </button>
      </div>

      <!-- Mobile Dropdown Drawer -->
      @if (mobileMenuOpen()) {
        <div class="mobile-drawer animate-fade-in">
          <nav class="mobile-nav" aria-label="Mobile Navigation">
            <a href="#ueber-uns" class="mobile-nav-link" (click)="closeMobileMenu()">Über uns</a>
            <a href="#leistungen" class="mobile-nav-link" (click)="closeMobileMenu()">Leistungen</a>
            <a href="#warum-allround" class="mobile-nav-link" (click)="closeMobileMenu()">Warum Allround</a>
            <div class="mobile-cta-wrapper" (click)="closeMobileMenu()">
              <app-button
                label="Kontakt aufnehmen"
                variant="primary"
                size="md"
                arrowDirection="right"
                href="#kontakt"
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

    // Logo (from Figma node 5:120)
    .header-logo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-decoration: none;
      line-height: 1;

      .logo-title {
        font-size: 32px;
        font-weight: 700;
        color: var(--color-navy);
        letter-spacing: -1.6px;
        line-height: 1.12;
      }

      .logo-subtitle {
        font-size: 8px;
        font-weight: 700;
        color: var(--color-muted);
        letter-spacing: 1.2px;
        line-height: 1.6;
        margin-top: 2px;
      }
    }

    // Desktop Nav
    .desktop-nav {
      display: none;
      align-items: center;
      gap: 32px;

      @media (min-width: 900px) {
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

      @media (min-width: 900px) {
        display: none;
      }

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

      @media (min-width: 900px) {
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
  readonly mobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
