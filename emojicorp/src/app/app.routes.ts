import { Routes } from '@angular/router';
import { AnimalsComponent } from './components/animals/animals';
import { FruitsComponent } from './components/fruits/fruits';
import { GenericComponent } from './components/generic/generic';

export const routes: Routes = [
  // Aggiunta la barra / in redirectTo
  { path: '', redirectTo: '/generic/animals', pathMatch: 'full' },
  { path: 'animals', component: AnimalsComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'generic/:id', component: GenericComponent },
  { path: '**', redirectTo: '/generic/animals' }
];