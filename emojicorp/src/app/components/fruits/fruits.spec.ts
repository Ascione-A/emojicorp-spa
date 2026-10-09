// Importa gli strumenti di testing ufficiali di Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa il componente da testare
import { FruitsComponent } from './fruits';

// Contenitore principale (suite di test) per FruitsComponent
describe('FruitsComponent', () => {
  let component: FruitsComponent; // Manterrà l'istanza della classe del componente
  let fixture: ComponentFixture<FruitsComponent>; // Gestirà l'ambiente di test (classe + template HTML)

  // Blocco eseguito automaticamente prima di ogni singolo test
  beforeEach(async () => {
    // Configura il modulo di test e compila il componente Standalone
    await TestBed.configureTestingModule({
      imports: [FruitsComponent]
    }).compileComponents();

    // Crea l'istanza di test del componente
    fixture = TestBed.createComponent(FruitsComponent);
    // Estrae l'istanza della classe TypeScript
    component = fixture.componentInstance;
    // Forza la verifica e l'aggiornamento dell'HTML (Change Detection)
    fixture.detectChanges();
  });

  // Test unitario: verifica la corretta creazione del componente
  it('should create', () => {
    // Asserzione: controlla che l'istanza del componente esista e sia valida
    expect(component).toBeTruthy();
  });
});