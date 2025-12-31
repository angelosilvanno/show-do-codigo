# 🎮 Show do Código

O **Show do Código** é um quiz técnico gamificado inspirado no clássico *Show do Milhão*, totalmente focado no ecossistema de desenvolvimento de software. A missão é simples: responder perguntas progressivamente mais difíceis até conquistar o prêmio máximo virtual de **R$ 1.000.000** — só com conhecimento de código.

## 🚀 Visão Geral

Este projeto foi concebido para proporcionar uma jornada imersiva a desenvolvedores, combinando UI responsiva, efeitos sonoros e mecânicas de jogo que reforçam o engajamento e a retenção de conteúdo técnico.

## 🕹️ Principais Funcionalidades

### 🎯 Trilhas de Conhecimento

O jogador escolhe sua área:

* **Frontend**
* **Backend**
* **Mobile**
* **Fullstack**

### 🧠 Dinâmica de Jogo

* Perguntas de múltipla escolha com feedback imediato
* Progressão incremental de dificuldade
* Sem barras de rolagem — experiência 100% controlada

### 🛟 Sistema de Ajudas

| Ajuda                 | Descrição                           |
| --------------------- | ----------------------------------- |
| ⏭️ **Pular**          | Avança para a próxima pergunta      |
| ✂️ **Eliminar**       | Remove duas alternativas incorretas |
| 🎓 **Universitários** | Sugestão simulada de resposta       |

### 🔊 Feedback e Interação

* Efeitos sonoros (suspense, acerto, erro) via **Howler.js**
* Modais customizados e UI responsiva

## 🔨 Instalação e Execução

**Pré-requisitos**

* Node.js instalado
* Git instalado

```bash
# Clone o repositório
git clone https://github.com/angelosilvanno/show-do-codigo.git

# Acesse a pasta
cd show-do-codigo

# Instale as dependências
npm install

# Execute o servidor local
npm run dev
```

**Acesse no navegador:**

```
http://localhost:5173
```

### 🔈 Sons 

`public/sounds`:

```
suspense.mp3
correct.mp3
wrong.mp3
```

## 🧰 Tecnologias usadas

| Tecnologia       | Finalidade                                  |
| ---------------- | ------------------------------------------- |
| **React**        | UI componentizada e escalável               |
| **TypeScript**   | Segurança de tipos em todo o projeto        |
| **Vite**         | Dev server e build ultrarrápido             |
| **Tailwind CSS** | Estilização com produtização de componentes |
| **Howler.js**    | Engine de áudio                             |
| **ESLint**       | Padronização e governança de código         |


## 👨‍💻 Autor

* **Ângelo Silvano** - *Desenvolvedor Frontend* - [angelosilvanno](https://github.com/angelosilvanno)


## 🏁 Status do Projeto

* **Em evolução contínua** — novas trilhas, melhorias de UI e funcionalidades avançadas já planejadas.
