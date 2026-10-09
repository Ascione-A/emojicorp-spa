import { Component } from '@angular/core';
// 1. Importa RouterLink e RouterLinkActive da @angular/router
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Inseriscili nell'array imports
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'emojicorp';
}