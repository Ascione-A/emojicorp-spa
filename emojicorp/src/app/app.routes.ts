import { Routes } from '@angular/router';
import { AnimalsComponent } from './components/animals/animals';
import { FruitsComponent } from './components/fruits/fruits';

export const routes: Routes = [
  { path: '', redirectTo: '/animals', pathMatch: 'full' },
  { path: 'animals', component: AnimalsComponent },
  { path: 'fruits', component: FruitsComponent }
];