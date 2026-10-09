// Importa il decoratore @Component dal pacchetto principale di Angular
import { Component } from '@angular/core';

// Decoratore che definisce i metadati e la configurazione del componente
@Component({
  selector: 'app-animals',      // Nome del tag HTML personalizzato per usare il componente (<app-animals>)
  standalone: true,             // Indica che il componente è autonomo (non necessita di un NgModule)
  imports: [],                  // Moduli, direttive o componenti aggiuntivi usati nel template HTML
  templateUrl: './animals.html',// Percorso del file HTML collegato per la struttura grafica
  styleUrl: './animals.css'     // Percorso del file CSS con gli stili dedicati
})
export class AnimalsComponent {
  // Array di oggetti contenente la lista degli animali (nome ed emoji) da mostrare nel template
  animals = [
    { name: 'Leone', emoji: '🦁' },
    { name: 'Cane', emoji: '🐶' },
    { name: 'Gatto', emoji: '🐱' },
    { name: 'Panda', emoji: '🐼' }
  ];
}