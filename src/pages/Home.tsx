// src/pages/Home.tsx
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero"; 
import type { GameTheme } from "../data/types";

interface HomeProps {
  onStartGame: (theme: GameTheme) => void;
}

export default function Home({ onStartGame }: HomeProps) {
  // Estado para controlar a troca de tela (Intro -> Seleção)
  const [showThemes, setShowThemes] = useState(false);

  // Configuração dos Cards de Tema
  const themes = [
    {
      id: 'frontend',
      label: 'FRONT-END',
      desc: 'HTML, CSS, React e Interfaces.',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-400',
      shadow: 'shadow-blue-500/50'
    },
    {
      id: 'backend',
      label: 'BACK-END',
      desc: 'Node, API, Banco de Dados e Lógica.',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-400',
      shadow: 'shadow-green-500/50'
    },
    {
      id: 'mobile',
      label: 'MOBILE',
      desc: 'React Native, iOS e Android.',
      icon: '📱',
      color: 'from-purple-500 to-pink-400',
      shadow: 'shadow-purple-500/50'
    },
    {
      id: 'fullstack',
      label: 'FULLSTACK',
      desc: 'O desafio supremo. Mistura tudo!',
      icon: '🚀',
      color: 'from-yellow-400 to-orange-500',
      shadow: 'shadow-yellow-500/50'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-blue-950 to-purple-950 text-white overflow-hidden">
      
      <Header />

      <main className="flex-1 flex flex-col relative w-full">
        
        {/* CENA 1: A INTRODUÇÃO (Seu design original) */}
        {!showThemes ? (
          <div className="flex-1 flex flex-col animate-in fade-in duration-500">
            <Hero onStartClick={() => setShowThemes(true)} />
          </div>
        ) : (
          
          /* SELEÇÃO DE TEMAS */
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 animate-in zoom-in-95 duration-500">
            
            {/* Botão de Voltar (caso o usuário mude de ideia) */}
            <button 
                onClick={() => setShowThemes(false)}
                className="absolute top-4 left-4 md:left-10 text-sm text-blue-300 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors"
            >
                ← Voltar
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-100">
                ESCOLHA SUA TRILHA
              </h2>
              <p className="text-blue-200/60 text-base md:text-lg max-w-xl mx-auto">
                Selecione sua especialidade para começar o desafio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => onStartGame(theme.id as GameTheme)}
                  className={`
                    group relative overflow-hidden rounded-2xl p-5 text-left border border-white/10
                    bg-slate-900/40 backdrop-blur-sm transition-all duration-300
                    hover:scale-[1.02] hover:border-white/30 hover:shadow-2xl
                  `}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${theme.color} transition-opacity duration-500`} />
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 border-2 border-transparent bg-clip-border rounded-2xl transition-all duration-300 ${theme.shadow} shadow-sm`} />

                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`w-12 h-12 shrink-0 rounded-lg flex items-center justify-center text-2xl bg-gradient-to-br ${theme.color} shadow-lg`}>
                      {theme.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold tracking-wider mb-0 group-hover:text-white transition-colors">
                            {theme.label}
                        </h3>
                        <p className="text-xs text-slate-400 group-hover:text-slate-200">
                            {theme.desc}
                        </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}