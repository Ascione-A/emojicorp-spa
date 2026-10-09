// Importa il decoratore @Component dal pacchetto principale di Angular
import { Component } from '@angular/core';

// Decoratore che definisce i metadati e la configurazione del componente
@Component({
  selector: 'app-fruits',      // Nome del tag HTML personalizzato per usare il componente (<app-fruits>)
  standalone: true,             // Indica che il componente è autonomo (non necessita di un NgModule)
  imports: [],                  // Moduli, direttive o componenti aggiuntivi usati nel template HTML
  templateUrl: './fruits.html',// Percorso del file HTML collegato per la struttura grafica
  styleUrl: './fruits.css'     // Percorso del file CSS con gli stili dedicati
})
export class FruitsComponent {
  // Array di oggetti contenente la lista della frutta (nome ed emoji) da mostrare nel template
  fruits = [
    { name: 'Mela', emoji: '🍎' },
    { name: 'Banana', emoji: '🍌' },
    { name: 'Fragola', emoji: '🍓' },
    { name: 'Limone', emoji: '🍋' }
  ];
}