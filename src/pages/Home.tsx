import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero"; 
import type { GameTheme } from "../data/types";

interface HomeProps {
  onStartGame: (theme: GameTheme) => void;
}

export default function Home({ onStartGame }: HomeProps) {
  const [showThemes, setShowThemes] = useState(false);

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
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-blue-950 to-purple-950 text-white overflow-x-hidden">
      
      <Header />

      <main className="flex-1 flex flex-col relative w-full overflow-y-auto">
        
        {!showThemes ? (
          <div className="flex-1 flex flex-col animate-in fade-in duration-500">
            <Hero onStartClick={() => setShowThemes(true)} />
          </div>
        ) : (
          
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12 animate-in zoom-in-95 duration-500">
            
            <button 
                onClick={() => setShowThemes(false)}
                className="absolute top-4 left-4 md:top-8 md:left-10 text-xs md:text-sm text-blue-300 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors z-20"
            >
                ← Voltar
            </button>

            <div className="text-center mb-8 md:mb-12 mt-8 md:mt-0">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-100 uppercase">
                Escolha sua trilha
              </h2>
              <p className="text-blue-200/60 text-sm md:text-lg max-w-lg mx-auto px-4">
                Selecione sua especialidade para começar o desafio e testar seus conhecimentos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl px-2 md:px-0">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => onStartGame(theme.id as GameTheme)}
                  className={`
                    group relative overflow-hidden rounded-2xl md:rounded-3xl p-5 md:p-7 text-left border border-white/10
                    bg-slate-900/40 backdrop-blur-md transition-all duration-300
                    hover:scale-[1.03] hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                    active:scale-95
                  `}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${theme.color} transition-opacity duration-500`} />
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 border-2 border-transparent bg-clip-border rounded-2xl transition-all duration-300 ${theme.shadow} shadow-sm`} />

                  <div className="relative z-10 flex items-center gap-5">
                    <div className={`w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${theme.color} shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                      {theme.icon}
                    </div>
                    <div>
                        <h3 className="text-lg md:text-2xl font-black tracking-tight mb-1 group-hover:text-white transition-colors">
                            {theme.label}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-400 group-hover:text-slate-200 leading-tight">
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