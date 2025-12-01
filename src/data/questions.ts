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
    question: 'Qual operador é usado para verificar igualdade estrita em JavaScript (valor e tipo)?',
    options: ['==', '===', '=', '!='],
    correctAnswer: 1,
  },
  {
    id: 2,
    theme: 'frontend',
    category: 'JavaScript',
    difficulty: 'medio',
    question: 'Qual método percorre cada elemento de um array e retorna um novo array com os resultados?',
    options: ['forEach()', 'map()', 'filter()', 'reduce()'],
    correctAnswer: 1,
  },
  {
    id: 3,
    theme: 'frontend',
    category: 'TypeScript',
    difficulty: 'medio',
    question: 'Em TypeScript, qual palavra-chave é usada para definir um tipo que não pode ser alterado?',
    options: ['let', 'const', 'type', 'interface'],
    correctAnswer: 1,
  },
  {
    id: 4,
    theme: 'frontend',
    category: 'TypeScript',
    difficulty: 'dificil',
    question: 'Como você define uma interface em TypeScript para um objeto que deve ter "id" como número e "nome" como string?',
    options: [
      'interface Obj { id: number, nome: string }',
      'type Obj = { id, nome }',
      'class Obj { id: number, nome: string }',
      'let Obj: object = { id, nome }'
    ],
    correctAnswer: 0,
  },
  {
    id: 5,
    theme: 'frontend',
    category: 'Vite',
    difficulty: 'facil',
    question: 'Qual comando inicializa um projeto Vite com React?',
    options: ['vite create react-app', 'npm create vite@latest', 'npx vite-react', 'npm init vite react'],
    correctAnswer: 1,
  },
  {
    id: 6,
    theme: 'frontend',
    category: 'Angular',
    difficulty: 'medio',
    question: 'No Angular, qual comando gera um novo componente chamado "login"?',
    options: [
      'ng generate component login',
      'ng new component login',
      'ng create component login',
      'ng add component login'
    ],
    correctAnswer: 0,
  },

  // ==========================================================
  // TEMA: MOBILE (adicionados)
  // ==========================================================
  {
    id: 7,
    theme: 'mobile',
    category: 'React Native',
    difficulty: 'facil',
    question: 'No React Native, qual componente substitui a <div> do HTML?',
    options: ['<Container>', '<Div>', '<View>', '<Section>'],
    correctAnswer: 2,
  },
  {
    id: 8,
    theme: 'mobile',
    category: 'Conceitos',
    difficulty: 'medio',
    question: 'O que é uma WebView em apps móveis?',
    options: [
      'Um navegador completo instalado no celular',
      'Um componente para exibir conteúdo web dentro do app',
      'Uma ferramenta de depuração nativa',
      'Um módulo de conexão Bluetooth'
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    theme: 'mobile',
    category: 'Android',
    difficulty: 'dificil',
    question: 'Qual linguagem o Kotlin substituiu como principal no desenvolvimento Android nativo?',
    options: ['C#', 'Java', 'Swift', 'Go'],
    correctAnswer: 1,
  },

  // ==========================================================
  // TEMA: BACK-END
  // ==========================================================
  {
    id: 10,
    theme: 'backend',
    category: 'Java',
    difficulty: 'facil',
    question: 'Em Java, qual palavra-chave é usada para criar uma classe?',
    options: ['function', 'class', 'object', 'def'],
    correctAnswer: 1,
  },
  {
    id: 11,
    theme: 'backend',
    category: 'Java',
    difficulty: 'medio',
    question: 'Qual é o método principal de uma aplicação Java que deve ser executado primeiro?',
    options: ['start()', 'main()', 'init()', 'run()'],
    correctAnswer: 1,
  },
  {
    id: 12,
    theme: 'backend',
    category: 'Python',
    difficulty: 'facil',
    question: 'Qual é a forma correta de declarar uma função em Python?',
    options: ['function myFunc():', 'def myFunc():', 'func myFunc()', 'define myFunc():'],
    correctAnswer: 1,
  },
  {
    id: 13,
    theme: 'backend',
    category: 'Node.js',
    difficulty: 'facil',
    question: 'Qual comando instala uma dependência no Node.js?',
    options: ['npm install package', 'npm add package', 'node install package', 'node add package'],
    correctAnswer: 0,
  },
  {
    id: 14,
    theme: 'backend',
    category: 'API',
    difficulty: 'medio',
    question: 'Em APIs RESTful, qual método HTTP é normalmente usado para remover um recurso?',
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    correctAnswer: 3,
  },
  {
    id: 15,
    theme: 'backend',
    category: 'Banco de Dados',
    difficulty: 'medio',
    question: 'Qual comando SQL retorna todos os registros de uma tabela chamada "usuarios"?',
    options: ['SELECT * FROM usuarios', 'GET * FROM usuarios', 'FETCH usuarios', 'SHOW usuarios'],
    correctAnswer: 0,
  },
  {
    id: 16,
    theme: 'backend',
    category: 'POO',
    difficulty: 'dificil',
    question: 'Em POO, qual conceito permite que objetos de classes diferentes sejam tratados de forma uniforme?',
    options: ['Encapsulamento', 'Herança', 'Polimorfismo', 'Abstração'],
    correctAnswer: 2,
  },

  // ==========================================================
  // TEMA: FULLSTACK / DEVOPS
  // ==========================================================
  {
    id: 17,
    theme: 'fullstack',
    category: 'DevOps',
    difficulty: 'medio',
    question: 'Qual ferramenta permite criar containers isolados e padronizar ambientes de desenvolvimento e produção?',
    options: ['Git', 'Docker', 'Kubernetes', 'Jenkins'],
    correctAnswer: 1,
  },
  {
    id: 18,
    theme: 'fullstack',
    category: 'DevOps',
    difficulty: 'dificil',
    question: 'No Git, qual comando traz alterações do repositório remoto sem mesclar automaticamente?',
    options: ['git pull', 'git fetch', 'git merge', 'git clone'],
    correctAnswer: 1,
  },
  {
    id: 19,
    theme: 'fullstack',
    category: 'DevOps',
    difficulty: 'medio',
    question: 'O que o CI/CD automatiza no ciclo de vida de software?',
    options: [
      'Criação de bancos de dados',
      'Execução de testes, build e deploy',
      'Gerenciamento de tickets',
      'Monitoramento de servidores'
    ],
    correctAnswer: 1,
  },
  {
    id: 20,
    theme: 'fullstack',
    category: 'DevOps',
    difficulty: 'dificil',
    question: 'Qual é o principal objetivo do Kubernetes em uma arquitetura de microsserviços?',
    options: [
      'Gerenciar versões de aplicações usando Git',
      'Automatizar deployment, escalabilidade e orquestração de containers',
      'Criar imagens Docker padronizadas',
      'Hospedar bancos de dados na nuvem'
    ],
    correctAnswer: 1,
  },
];
