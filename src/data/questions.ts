import type { Question } from './types';

export const questions: Question[] = [
  // ==========================================================
  // TEMA: FRONT-END
  // ==========================================================
  {
    id: 1,
    theme: 'frontend',
    category: 'JavaScript',
    difficulty: 'facil',
    question: 'Qual método converte uma string para número inteiro em JavaScript?',
    options: ['parseInt()', 'Number()', 'toString()', 'JSON.parse()'],
    correctAnswer: 0,
  },
  {
    id: 2,
    theme: 'frontend',
    category: 'JavaScript',
    difficulty: 'medio',
    question: 'Qual estrutura é usada para lidar com operações assíncronas em JavaScript?',
    options: ['Promises', 'Callbacks', 'Threads', 'Interfaces'],
    correctAnswer: 0,
  },
  {
    id: 3,
    theme: 'frontend',
    category: 'CSS',
    difficulty: 'facil',
    question: 'Qual propriedade CSS altera a cor do texto?',
    options: ['background-color', 'font-style', 'color', 'text-align'],
    correctAnswer: 2,
  },
  {
    id: 4,
    theme: 'frontend',
    category: 'CSS',
    difficulty: 'dificil',
    question: 'Qual função CSS permite criar variáveis reutilizáveis no estilo?',
    options: ['var()', 'set()', 'root()', 'let()'],
    correctAnswer: 0,
  },
  {
    id: 5,
    theme: 'frontend',
    category: 'React',
    difficulty: 'medio',
    question: 'Qual hook do React é usado para gerenciar estado em componentes funcionais?',
    options: ['useState()', 'useEffect()', 'useRef()', 'useMemo()'],
    correctAnswer: 0,
  },
  {
    id: 6,
    theme: 'frontend',
    category: 'Interfaces',
    difficulty: 'dificil',
    question: 'Qual conceito define como os elementos devem ser organizados visualmente em uma interface?',
    options: ['UX Writing', 'Grid Layout', 'Design Tokens', 'Refactoring'],
    correctAnswer: 1,
  },

  // ==========================================================
  // TEMA: MOBILE
  // ==========================================================
  {
    id: 7,
    theme: 'mobile',
    category: 'React Native',
    difficulty: 'facil',
    question: 'Qual comando inicia um projeto em React Native?',
    options: ['npm init react-native', 'npx create-native-app', 'npx react-native init', 'npm react-native new'],
    correctAnswer: 2,
  },
  {
    id: 8,
    theme: 'mobile',
    category: 'iOS',
    difficulty: 'medio',
    question: 'Qual ferramenta oficial é usada para desenvolver apps nativos para iOS?',
    options: ['Android Studio', 'Xcode', 'Expo Studio', 'Visual Studio Code'],
    correctAnswer: 1,
  },
  {
    id: 9,
    theme: 'mobile',
    category: 'Android',
    difficulty: 'medio',
    question: 'Qual arquivo define permissões e componentes básicos no Android?',
    options: ['AndroidManifest.xml', 'package.json', 'gradle.build', 'system.config'],
    correctAnswer: 0,
  },

  // ==========================================================
  // TEMA: BACK-END
  // ==========================================================
  {
    id: 10,
    theme: 'backend',
    category: 'Node.js',
    difficulty: 'facil',
    question: 'Qual comando inicia um projeto Node.js criando o arquivo package.json?',
    options: ['npm init', 'npm start', 'node init', 'npm run init'],
    correctAnswer: 0,
  },
  {
    id: 11,
    theme: 'backend',
    category: 'API',
    difficulty: 'medio',
    question: 'Qual status HTTP indica que um recurso foi criado com sucesso?',
    options: ['200', '201', '400', '204'],
    correctAnswer: 1,
  },
  {
    id: 12,
    theme: 'backend',
    category: 'Banco de Dados',
    difficulty: 'medio',
    question: 'Qual comando insere dados em uma tabela SQL?',
    options: ['INSERT INTO', 'ADD RECORD', 'CREATE ROW', 'APPEND DATA'],
    correctAnswer: 0,
  },
  {
    id: 13,
    theme: 'backend',
    category: 'Lógica',
    difficulty: 'facil',
    question: 'Qual estrutura representa uma decisão condicional em programação?',
    options: ['while', 'switch', 'if', 'for'],
    correctAnswer: 2,
  },

  // ==========================================================
  // TEMA: FULLSTACK
  // ==========================================================
  {
    id: 14,
    theme: 'fullstack',
    category: 'Java',
    difficulty: 'facil',
    question: 'Qual palavra-chave cria um objeto em Java?',
    options: ['object', 'instance', 'new', 'class'],
    correctAnswer: 2,
  },
  {
    id: 15,
    theme: 'fullstack',
    category: 'TypeScript',
    difficulty: 'medio',
    question: 'Qual palavra-chave define um tipo personalizado em TypeScript?',
    options: ['let', 'type', 'const', 'enum'],
    correctAnswer: 1,
  },
  {
    id: 16,
    theme: 'fullstack',
    category: 'GitHub',
    difficulty: 'medio',
    question: 'Qual comando envia commits locais para o repositório remoto?',
    options: ['git clone', 'git push', 'git pull', 'git fetch'],
    correctAnswer: 1,
  },
  {
    id: 17,
    theme: 'fullstack',
    category: 'DevOps',
    difficulty: 'dificil',
    question: 'Qual ferramenta orquestra containers em produção em larga escala?',
    options: ['Docker', 'Kubernetes', 'GitHub Actions', 'Nginx'],
    correctAnswer: 1,
  },
  {
    id: 18,
    theme: 'fullstack',
    category: 'DevOps',
    difficulty: 'medio',
    question: 'O que o CI/CD automatiza no ciclo de vida de software?',
    options: ['Criação de bancos de dados', 'Execução de testes, build e deploy', 'Gerenciamento de tickets', 'Monitoramento de servidores'],
    correctAnswer: 1,
  },
  {
    id: 19,
    theme: 'fullstack',
    category: 'TypeScript',
    difficulty: 'dificil',
    question: 'Qual conceito do TypeScript garante que uma função só receba tipos esperados?',
    options: ['Interface', 'Generics', 'Union', 'Any'],
    correctAnswer: 1,
  },
  {
    id: 20,
    theme: 'fullstack',
    category: 'GitHub',
    difficulty: 'dificil',
    question: 'Qual comando cria um novo branch e muda para ele automaticamente?',
    options: ['git branch newBranch', 'git checkout newBranch', 'git switch -c newBranch', 'git clone newBranch'],
    correctAnswer: 2,
  },
];