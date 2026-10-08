import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Emoji } from '../../../models/emojimodel';

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic.html',
  styleUrl: './generic.css'
})
export class GenericComponent implements OnInit {



  categoryKey: string = '';
  itemsList: Emoji[] = [];

  private dataset: Record<string, Emoji[]> = {
    animals: [
      { name: 'Leone', emoji: '🦁', category: 'Mammifero' },
      { name: 'Aquila', emoji: '🦅', category: 'Uccello' },
      { name: 'Squalo', emoji: '🦈', category: 'Pesce' }
    ],

    fruits: [
      { name: 'Mela', emoji: '🍎', category: 'Fresco' },
      { name: 'Banana', emoji: '🍌', category: 'Tropicale' },
      { name: 'Fragola', emoji: '🍓', category: 'Rosso' }
    ],

    food: [
      { name: 'Pizza', emoji: '🍕', category: 'Italiano' },
      { name: 'Burger', emoji: '🍔', category: 'Fast Food' },
      { name: 'Taco', emoji: '🌮', category: 'Messicano' }
    ],

    vehicles: [
      { name: 'Auto', emoji: '🚗', category: 'Terrestre' },
      { name: 'Aereo', emoji: '✈️', category: 'Aereo' },
      { name: 'Razzo', emoji: '🚀', category: 'Spaziale' }
    ]
  };

  // Mettiamo 'ActivatedRoute' all'interno del costruttore.
  // Angular fornisce automaticamente l'istanza contenente le informazioni sulla rotta attiva.
  constructor(private route: ActivatedRoute) {}


  // ngOnInit viene eseguito automaticamente subito dopo la creazione del componente
  ngOnInit(): void {
    // 'paramMap' è un Observable (un flusso di dati continuo).
    // Con .subscribe() ci mettiamo in ascolto dei cambiamenti nell'URL.
    // Ogni volta che l'ID nell'URL cambia (es. da /generic/fruits a /generic/food),
    // la funzione callback 'getRouterParam' viene eseguita automaticamente.
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getRouterParam(params);
    });
  }

  // METODO DI LOGICA: Estrae il parametro ed elabora i dati corrispondenti
  getRouterParam(params: ParamMap): void {
    // Estraiamo il valore della variabile ':id' definita nel file app.routes.ts
    const id = params.get('id');

    // Verifichiamo che l'ID esista e sia una chiave valida del nostro datastore
    if (id && this.dataset[id]) {
      this.categoryKey = id;
      this.itemsList = this.dataset[id]; // Aggiorna il vettore con i dati corretti
    } else {
      this.itemsList = []; // Reset se la categoria non esiste
    }
  }
}