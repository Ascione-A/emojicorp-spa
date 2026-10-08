import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Emoji } from '../../models/emoji.model';

@Component({
  selector: 'app-generic',
  standalone: true,
  templateUrl: './generic.html',
  styleUrl: './generic.css'
})
export class GenericComponent implements OnInit {
  categoryKey: string = '';
  itemsList: Emoji[] = [];

  private dataset: Record<string, Emoji[]> = {
    animals: [
      { name: 'Leone', emoji: '🦁', category: 'Mammifero' },
      { name: 'Cane', emoji: '🐶', category: 'Mammifero' },
      { name: 'Gatto', emoji: '🐱', category: 'Mammifero' },
      { name: 'Panda', emoji: '🐼', category: 'Mammifero' }
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Iscrizione all'Observable paramMap: intercetta il cambio dell'URL in tempo reale
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.loadCategoryData(id);
    });
  }

  private loadCategoryData(id: string | null): void {
    if (id && this.dataset[id]) {
      this.categoryKey = id;
      // Assegnazione di un nuovo riferimento array per forzare il refresh della vista
      this.itemsList = [...this.dataset[id]];
    } else {
      this.categoryKey = '';
      this.itemsList = [];
    }
  }
}