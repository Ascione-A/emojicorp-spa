// Interfaccia TypeScript che definisce la struttura di ciascun elemento Emoji
export interface Emoji {
  name: string;      // Es. "Leone"
  emoji: string;     // Es. "🦁"
  category?: string; // Es. "Mammifero" (facoltativo per i badge Bootstrap)
}