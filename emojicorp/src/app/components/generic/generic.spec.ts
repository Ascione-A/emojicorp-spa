// Importazione dei moduli di testing ufficiali di Angular e del componente da testare
import { ComponentFixture, TestBed } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { GenericComponent } from './generic';

// Definisce la suite di test unitari per GenericComponent
describe('GenericComponent', () => {
  // Riferimenti per l'istanza del componente e per la fixture (wrapper di test)
  let component: GenericComponent;
  let fixture: ComponentFixture<GenericComponent>;

  // Blocco di configurazione eseguito in modo asincrono prima di ciascun test
  beforeEach(async () => {
    // Inizializza l'ambiente di testing di Angular
    await TestBed.configureTestingModule({
      imports: [GenericComponent, RouterTestingModule] // Importa il componente standalone e il modulo simulato di routing
    }).compileComponents(); // Compila il template HTML e gli stili CSS del componente

    // Crea la fixture che gestisce il ciclo di vita e l'elemento DOM del componente
    fixture = TestBed.createComponent(GenericComponent);
    // Estrae l'istanza della classe TypeScript del componente
    component = fixture.componentInstance;
    // Forzza il primo ciclo di Rilevamento Modifiche (Change Detection) per inizializzare il componente
    fixture.detectChanges();
  });

  // Caso di test: verifica che il componente venga creato correttamente
  it('should create', () => {
    // Controlla che l'istanza del componente sia definita e non nulla
    expect(component).toBeTruthy();
  });
});