// Importa ApplicationConfig per configurare l'applicazione Angular.
import { ApplicationConfig } from '@angular/core';

// Importa provideRouter per abilitare la navigazione tra le pagine.
import { provideRouter } from '@angular/router';

// Importa le rotte definite nel file app.routes.
import { routes } from './app.routes';

// Definisce la configurazione principale dell'applicazione.
export const appConfig: ApplicationConfig = {
  providers: [
    // Registra il router utilizzando le rotte definite.
    provideRouter(routes)
  ]
};