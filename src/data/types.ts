export type GameTheme = 'frontend' | 'backend' | 'mobile' | 'fullstack';

export type Difficulty = 'facil' | 'medio' | 'dificil' | 'milhao';

export interface Question {
  id: number;
  theme: GameTheme; 
  category: string; 
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: Difficulty;
}

export interface Prize {
  level: number;
  stop: number;
  error: number;
  hit: number;
}