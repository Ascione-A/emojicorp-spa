import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Emoji } from '../../models/emoji.model';

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [],
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
      { name: 'Squalo', emoji: '🦈', category: 'Pesce' },
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

  // Iniezione di ActivatedRoute e ChangeDetectorRef
  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id && this.dataset[id]) {
        this.categoryKey = id;
        this.itemsList = this.dataset[id];
      } else {
        this.categoryKey = id || 'Sconosciuta';
        this.itemsList = [];
      }

      // Forza il refresh immediato dell'interfaccia grafica
      this.cdr.detectChanges();
    });
  }
}