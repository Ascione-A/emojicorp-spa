// Importa gli strumenti ufficiali di Angular per configurare ed eseguire i test unitari
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa il componente da testare
import { AnimalsComponent } from './animals';

// 'describe': Definisce la suite di test (il contenitore principale) per AnimalsComponent
describe('AnimalsComponent', () => {
  // Dichiarazione delle variabili per mantenere le istanze durante i test
  let component: AnimalsComponent; // Conterra la classe TypeScript del componente
  let fixture: ComponentFixture<AnimalsComponent>; // Gestirà l'ambiente di test (classe + template HTML)

  // 'beforeEach': Blocco eseguito automaticamente PRIMA di ogni singolo test 'it'
  beforeEach(async () => {
    // Configura un modulo di test isolato e compila i componenti usati
    await TestBed.configureTestingModule({
      imports: [AnimalsComponent] // Importa il componente Standalone da testare
    }).compileComponents();

    // Crea un'istanza reale del componente all'interno dell'ambiente di test
    fixture = TestBed.createComponent(AnimalsComponent);
    
    // Estrae l'istanza della classe TypeScript dal componente creato
    component = fixture.componentInstance;
    
    // Forza il primo controllo dei cambiamenti (Change Detection) per aggiornare l'HTML
    fixture.detectChanges();
  });

  // 'it': Definisce un singolo test unitario (in questo caso verifica che il componente si crei con successo)
  it('should create', () => {
    // Asserzione: verifica che l'istanza del componente esista e sia valida (non null/undefined)
    expect(component).toBeTruthy();
  });
});