import { Component } from '@angular/core';

@Component({
  selector: 'app-animals',
  standalone: true,
  templateUrl: './animals.html',
  styleUrl: './animals.css'
})
export class AnimalsComponent {
  animals = [
    { name: 'Leone', emoji: '🦁' },
    { name: 'Cane', emoji: '🐶' },
    { name: 'Gatto', emoji: '🐱' },
    { name: 'Panda', emoji: '🐼' }
  ];
} 