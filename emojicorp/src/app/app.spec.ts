// Importa TestBed per configurare e testare i componenti Angular.
import { TestBed } from '@angular/core/testing';

// Importa il componente principale dell'applicazione.
import { AppComponent } from './app';

// Raggruppa i test del componente AppComponent.
describe('AppComponent', () => {

  // Esegue la configurazione prima di ogni test.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importa il componente da testare.
      imports: [AppComponent],
    }).compileComponents(); // Compila il componente.
  });

  // Verifica che il componente venga creato correttamente.
  it('should create the app', () => {
    // Crea un'istanza di test del componente.
    const fixture = TestBed.createComponent(AppComponent);

    // Recupera l'istanza del componente.
    const app = fixture.componentInstance;

    // Verifica che il componente esista.
    expect(app).toBeTruthy();
  });
});