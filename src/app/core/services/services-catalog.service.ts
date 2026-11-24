import { Injectable, inject, computed } from '@angular/core';
import { ServiceItem } from '../models/service-item.model';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root',
})
export class ServicesCatalogService {
  private readonly translationService = inject(TranslationService);

  private readonly serviceImages: Record<string, string> = {
    courier: '/assets/images/courier.png',
    clearance: '/assets/images/clearance.png',
    moving: '/assets/images/moving.png',
    caretaker: '/assets/images/caretaker.png',
    cleaning: '/assets/images/cleaning.png',
    gardening: '/assets/images/house-and-garden.png',
  };

  readonly services = computed<readonly ServiceItem[]>(() => {
    const items = this.translationService.t().services.items;
    return items.map((item) => ({
      ...item,
      image: this.serviceImages[item.id] || '/assets/images/house-and-garden.png',
    }));
  });

  getServiceById(id: string): ServiceItem | undefined {
    return this.services().find((s) => s.id === id);
  }
}
