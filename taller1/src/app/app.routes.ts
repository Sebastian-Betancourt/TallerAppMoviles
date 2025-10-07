import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'error',
    loadComponent: () => import('./error/error.page').then( m => m.ErrorPage)
  },
  {
    path: 'calcu',
    loadComponent: () => import('./calcu/calcu.page').then( m => m.CalcuPage)
  },
];
