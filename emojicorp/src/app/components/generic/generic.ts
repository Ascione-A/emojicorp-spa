// Importazione dei decoratori e dei servizi principali del core di Angular
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// Importazione delle classi per la gestione delle rotte e dei parametri dell'URL
import { ActivatedRoute, ParamMap } from '@angular/router';
// Importazione dell'interfaccia/modello per la tipizzazione degli elementi
import { Emoji } from '../../models/emoji.model';

// Decoratore che definisce i metadati del componente Angular
@Component({
  selector: 'app-generic',       // Tag HTML personalizzato per usufruire del componente
  standalone: true,              // Componente autonomo (non richiede la dichiarazione in un NgModule)
  imports: [],                   // Moduli o componenti aggiuntivi necessari al template
  templateUrl: './generic.html', // Percorso del file HTML di template
  styleUrl: './generic.css'      // Percorso del file CSS di stile
})
export class GenericComponent implements OnInit {
  // Proprietà pubblica per memorizzare il nome/chiave della categoria corrente
  categoryKey: string = '';
  // Lista degli elementi (emoji) da mostrare nella vista
  itemsList: Emoji[] = [];

  // Database simulato in memoria: mappa la chiave della categoria a un array di oggetti Emoji
  private dataset: Record<string, Emoji[]> = {
    animals: [
      { name: 'Leone', emoji: '🦁', category: 'Savana' },
      { name: 'Aquila', emoji: '🦅', category: 'Montagna' },
      { name: 'Squalo', emoji: '🦈', category: 'Oceano' },
      { name: 'Panda', emoji: '🐼', category: 'Giungla' }
    ],
    fruits: [
      { name: 'Mela', emoji: '🍎', category: 'Fresco' },
      { name: 'Banana', emoji: '🍌', category: 'Tropicale' },
      { name: 'Fragola', emoji: '🍓', category: 'Dolce' }
    ],
    food: [
      { name: 'Pizza', emoji: '🍕', category: 'Italiano' },
      { name: 'Burger', emoji: '🍔', category: 'Americano' },
      { name: 'Taco', emoji: '🌮', category: 'Messicano' }
    ],
    vehicles: [
      { name: 'Auto', emoji: '🚗', category: 'Terrestre' },
      { name: 'Aereo', emoji: '✈️', category: 'Cielo' },
      { name: 'Razzo', emoji: '🚀', category: 'Spaziale' }
    ]
  };

  // Iniezione delle dipendenze nel costruttore:
  // - route: consente di accedere ai dati e ai parametri della rotta attiva
  // - cdr: gestisce manualmente il rilevamento delle modifiche dell'interfaccia
  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  // Hook del ciclo di vita eseguito all'inizializzazione del componente
  ngOnInit(): void {
    // Sottoscrizione ai cambiamenti dei parametri della rotta (URL dinamico)
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Estrae il parametro 'id' dall'URL
      const id = params.get('id');
      
      // Verifica se l'id esiste ed è presente tra le chiavi del dataset
      if (id && this.dataset[id]) {
        this.categoryKey = id;
        this.itemsList = this.dataset[id];
      } else {
        // Gestione del caso in cui la categoria non sia valida o non esista
        this.categoryKey = id || 'Sconosciuta';
        this.itemsList = [];
      }

      // Forza il refresh immediato dell'interfaccia grafica
      this.cdr.detectChanges();
    });
  }
}