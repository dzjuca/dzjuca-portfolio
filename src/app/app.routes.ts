import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  // Esta ruta es importante: si alguien escribe una URL que no existe, lo redirige a la home.
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
