import { Routes } from '@angular/router';
import { GenericComponent } from './components/generic/generic';
import { AnimalsComponent } from './components/animals/animals';
import { FruitsComponent } from './components/fruits/fruits';

export const routes: Routes = [
// REDIRECT DI DEFAULT: Se l'utente entra nella home (''), viene reindirizzato su '/animals'
  // 'pathMatch: full' garantisce che il reindirizzamento avvenga solo se il percorso è esattamente vuoto
  { 
    path: '', 
    redirectTo: '/animals', 
    pathMatch: 'full' 
  },

  // ROTTE STATICHE: Associano un URL specifico a un componente fisso
  { 
    path: 'animals', 
    component: AnimalsComponent 
  },
  { 
    path: 'fruits', 
    component: FruitsComponent 
  },

  // ROTTA DINAMICA : I due punti ':id' indicano un parametro variabile nell'URL.
  // Esempio validi: /generic/animals
  { 
    path: 'generic/:id', 
    component: GenericComponent 
  },

  // ROTTA WILDCARD: Se l'utente scrive un URL inesistente, viene riportato alle rotte generiche
  { 
    path: '**', 
    redirectTo: '/generic/animals' 
  }
];