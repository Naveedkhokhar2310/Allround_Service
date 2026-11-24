import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'impressum',
    loadComponent: () => import('./features/legal/impressum/impressum.component').then((m) => m.ImpressumComponent),
  },
  {
    path: 'datenschutz',
    loadComponent: () => import('./features/legal/datenschutz/datenschutz.component').then((m) => m.DatenschutzComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
