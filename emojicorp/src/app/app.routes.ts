import { Routes } from '@angular/router';
import { GenericComponent } from './components/generic/generic';

export const routes: Routes = [
  // Redirection automatica della home vuota su 'generic/animals'
  { path: '', redirectTo: '/generic/animals', pathMatch: 'full' },
  
  // Rotta dinamica con parametro :id
  { path: 'generic/:id', component: GenericComponent },

  // Rotta wildcard per gestire percorsi inesistenti
  { path: '**', redirectTo: '/generic/animals' }
];