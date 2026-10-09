// Importa Routes per definire le rotte dell'applicazione.
import { Routes } from '@angular/router';

// Importa i componenti delle diverse pagine.
import { AnimalsComponent } from './components/animals/animals';
import { FruitsComponent } from './components/fruits/fruits';
import { GenericComponent } from './components/generic/generic';

// Definisce tutte le rotte dell'applicazione.
export const routes: Routes = [
  // Reindirizza la pagina iniziale a /generic/animals.
  { path: '', redirectTo: '/generic/animals', pathMatch: 'full' },

  // Mostra AnimalsComponent quando il percorso è /animals.
  { path: 'animals', component: AnimalsComponent },
  
  { path: 'fruits', component: FruitsComponent },

  // Mostra GenericComponent e passa un parametro chiamato id.
  { path: 'generic/:id', component: GenericComponent },

  // Reindirizza tutti i percorsi non riconosciuti alla pagina predefinita.
  { path: '**', redirectTo: '/generic/animals' }
];