import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'imprint',
    loadComponent: () => import('./features/legal/imprint/imprint.component').then((m) => m.ImprintComponent),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./features/legal/privacy/privacy.component').then((m) => m.PrivacyComponent),
  },
  {
    path: 'impressum',
    redirectTo: 'imprint',
  },
  {
    path: 'datenschutz',
    redirectTo: 'privacy',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
