import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { QuickActionBarComponent } from '@layout/quick-action-bar/quick-action-bar.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { TrustBannerComponent } from './sections/trust-banner/trust-banner.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ServicesSectionComponent } from './sections/services-section/services-section.component';
import { ValuesSectionComponent } from './sections/values-section/values-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { ServiceItem } from '@core/models/service-item.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    QuickActionBarComponent,
    HeroSectionComponent,
    TrustBannerComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ValuesSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    <div class="site-wrapper">
      <!-- Sticky Navigation Header -->
      <app-header />

      <!-- Main Landing Page Content -->
      <main class="main-content">
        <!-- Hero Section -->
        <app-hero-section />

        <!-- Trust Banner -->
        <app-trust-banner />

        <!-- 01 / About Us -->
        <app-about-section />

        <!-- 02 / Our Services (6 Core Services) -->
        <app-services-section (serviceSelected)="onServiceSelected($event)" />

        <!-- 03 / Why Allround -->
        <app-values-section />

        <!-- 04 / Contact & Inquiry Form -->
        <app-contact-section [selectedServiceName]="selectedService()" />
      </main>

      <!-- Footer -->
      <app-footer />

      <!-- Floating Mobile Contact Bar -->
      <app-quick-action-bar />
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .site-wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .main-content {
      flex: 1;
      width: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly selectedService = signal<string>('');

  onServiceSelected(service: ServiceItem): void {
    this.selectedService.set(service.title);
  }
}
