// Importa il decoratore Component di Angular,
import { Component } from '@angular/core';

// Importa gli strumenti del router di Angular:
// RouterOutlet: mostra il componente associato alla rotta attiva.
// RouterLink: permette di navigare tra le pagine dell'applicazione.
// RouterLinkActive: applica una classe CSS al link della pagina attiva.
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

// Il decoratore @Component definisce le caratteristiche del componente.
@Component({
  // Nome del tag HTML personalizzato che identifica il componente.
  selector: 'app-root',

  // Indica che il componente è standalone,
  // quindi non ha bisogno di essere dichiarato in un NgModule.
  standalone: true,

  // Elenca i componenti e le direttive utilizzabili
  imports: [RouterOutlet, RouterLink, RouterLinkActive],

  // Indica il file HTML che contiene la struttura della pagina.
  templateUrl: './app.html',

  // Indica il file CSS che definisce lo stile del componente.
  styleUrl: './app.css'
})

// Definisce la classe principale del componente.
export class AppComponent {

  // Crea una proprietà chiamata "title" con valore iniziale "emojicorp".
  title = 'emojicorp';
}