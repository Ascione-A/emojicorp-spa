// Importazione della funzione per l'avvio (bootstrap) di applicazioni Angular standalone
import { bootstrapApplication } from '@angular/platform-browser';
// Importazione del file di configurazione globale dell'applicazione (provider, rotte, ecc.)
import { appConfig } from './app/app.config';
// Importazione del componente principale/radice (Root Component)
import { AppComponent } from './app/app';

// Inizializza e avvia l'applicazione Angular caricando il componente radice con la configurazione fornita
bootstrapApplication(AppComponent, appConfig)
  // Gestisce ed evidenzia in console eventuali errori che si verificano durante la fase di avvio
  .catch((err) => console.error(err));