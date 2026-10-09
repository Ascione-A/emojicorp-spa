import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [],
  templateUrl: './fruits.html',
  styleUrl: './fruits.css'
})
export class FruitsComponent {
  fruits = [
    { name: 'Mela', emoji: '🍎' },
    { name: 'Banana', emoji: '🍌' },
    { name: 'Fragola', emoji: '🍓' },
    { name: 'Limone', emoji: '🍋' }
  ];
}