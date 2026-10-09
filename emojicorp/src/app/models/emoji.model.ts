// Interfaccia TypeScript per la struttura delle emoji
export interface Emoji {
  name: string;        // Nome (es. Leone, Mela)
  emoji: string;       // Simbolo emoji (es. 🦁, 🍎)
  category?: string;   // Categoria opzionale per le Card
}