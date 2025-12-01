import type { Prize } from './types'; 

export const prizes: Prize[] = [
  // Nível 1 (Acerta R$ 1 mil)
  { level: 1, stop: 0, error: 0, hit: 1000 },
  { level: 2, stop: 1000, error: 500, hit: 2000 },
  { level: 3, stop: 2000, error: 1000, hit: 3000 },
  { level: 4, stop: 3000, error: 1500, hit: 4000 },
  { level: 5, stop: 4000, error: 2000, hit: 5000 },
  
  // Nível 6 (Começa a ficar sério)
  { level: 6, stop: 5000, error: 2500, hit: 10000 },
  { level: 7, stop: 10000, error: 5000, hit: 20000 },
  { level: 8, stop: 20000, error: 10000, hit: 30000 },
  { level: 9, stop: 30000, error: 15000, hit: 40000 },
  { level: 10, stop: 40000, error: 20000, hit: 50000 },

  // Reta Final
  { level: 11, stop: 50000, error: 25000, hit: 100000 },
  { level: 12, stop: 100000, error: 50000, hit: 200000 },
  { level: 13, stop: 200000, error: 100000, hit: 300000 },
  { level: 14, stop: 300000, error: 150000, hit: 400000 },
  { level: 15, stop: 400000, error: 200000, hit: 500000 },
  
  // A Pergunta do Milhão (Se errar perde tudo no original, ou ganha pouco)
  { level: 16, stop: 500000, error: 0, hit: 1000000 }
];