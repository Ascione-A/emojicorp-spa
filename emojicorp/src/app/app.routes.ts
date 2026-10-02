import { Routes } from '@angular/router';
import { GenericComponent } from './components/generic/generic';

export const routes: Routes = [
  { path: '', redirectTo: '/generic/animals', pathMatch: 'full' },
  { path: 'generic/:id', component: GenericComponent },
  { path: '**', redirectTo: '/generic/animals' }
];