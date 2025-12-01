import { useState, useEffect, useMemo } from 'react';
import { questions } from '../data/questions';
import { prizes } from '../data/prizes';
import { useGameSound } from '../hooks/useGameSound';
import type { GameTheme } from '../data/types';

interface GameProps {
  onExit: () => void;
  theme: GameTheme;
}

export default function Game({ onExit, theme }: GameProps) {
  const gameQuestions = useMemo(() => {
    if (theme === 'fullstack') return questions;
    return questions.filter(q => q.theme === theme);
  }, [theme]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [gameState, setGameState] = useState<'thinking' | 'suspense' | 'result'>('thinking');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  
  const [notification, setNotification] = useState<{ title: string; message: string } | null>(null);

  const { playSuspense, playCorrect, playWrong, stopSuspense } = useGameSound();

  useEffect(() => {
    playSuspense();
    return () => stopSuspense();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [gameOver, setGameOver] = useState<{
    status: 'won' | 'lost';
    prize: number;
    title: string;
    message: string;
  } | null>(null);

  const [lifelines, setLifelines] = useState({
    skip: false,
    eliminate: false,
    students: false
  });

  const currentQuestion = gameQuestions[currentQuestionIndex];
  const currentPrize = prizes[currentQuestionIndex];

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  const handleOptionClick = (optionIndex: number) => {
    if (gameState !== 'thinking') return;
    setSelectedOption(optionIndex);
    setGameState('suspense');

    setTimeout(() => {
      const rightAnswer = currentQuestion.correctAnswer;
      const hit = optionIndex === rightAnswer;
      setIsCorrect(hit);
      setGameState('result');

      if (hit) playCorrect();
      else playWrong();

      setTimeout(() => {
        if (hit) {
          if (currentQuestionIndex < gameQuestions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            resetTurn();
            playSuspense();
          } else {
            setGameOver({
                status: 'won',
                prize: currentPrize.hit,
                title: 'PARABÉNS, MILIONÁRIO!',
                message: `Você dominou o tema ${theme.toUpperCase()}!`
            });
          }
        } else {
          setGameOver({
            status: 'lost',
            prize: currentPrize.error,
            title: 'QUE PENA!',
            message: 'Você errou, mas jogou muito bem.'
          });
        }
      }, 1500);
    }, 2000);
  };

  const resetTurn = () => {
    setSelectedOption(null);
    setGameState('thinking');
    setIsCorrect(null);
    setHiddenOptions([]); 
  };

  const handleStop = () => {
      stopSuspense();
      setGameOver({
          status: 'won', 
          prize: currentPrize.stop,
          title: 'PAROU O JOGO',
          message: 'Decisão inteligente! Você garantiu seu prêmio.'
      });
  };

  const handleSkip = () => {
    if (lifelines.skip || gameState !== 'thinking') return;
    
    if (currentQuestionIndex < gameQuestions.length - 1) {
        setLifelines(prev => ({ ...prev, skip: true }));
        setCurrentQuestionIndex(prev => prev + 1);
        resetTurn();
    } else {
        setNotification({
            title: 'AVISO',
            message: 'Não é possível pular a última pergunta!'
        });
    }
  };

  const handleEliminate = () => {
    if (lifelines.eliminate || gameState !== 'thinking') return;
    const rightAnswer = currentQuestion.correctAnswer;
    const wrongAnswers = [0, 1, 2, 3].filter(index => index !== rightAnswer);
    const toHide = wrongAnswers.sort(() => Math.random() - 0.5).slice(0, 2);
    setHiddenOptions(toHide);
    setLifelines(prev => ({ ...prev, eliminate: true }));
  };

  const handleStudents = () => {
    if (lifelines.students || gameState !== 'thinking') return;
    const rightAnswer = currentQuestion.correctAnswer;
    const willHelp = Math.random() > 0.2; 
    let suggestedAnswer = rightAnswer;
    if (!willHelp) {
        const wrongAnswers = [0, 1, 2, 3].filter(index => index !== rightAnswer);
        suggestedAnswer = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
    }
    const letter = ['1', '2', '3', '4'][suggestedAnswer];
    
    setNotification({
        title: 'UNIVERSITÁRIOS',
        message: `A maioria dos estudantes sugere a opção: ${letter}`
    });
    
    setLifelines(prev => ({ ...prev, students: true }));
  };

  return (
    <div className="h-screen w-full overflow-y-auto flex flex-col items-center p-4 text-white 
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-blue-900 to-purple-950 relative">
      
      <div className="w-full max-w-6xl flex justify-between items-center mb-6 px-4 shrink-0">
        <button 
            onClick={handleStop} 
            className="px-4 py-2 rounded bg-red-500/20 text-red-300 border border-red-500/50 hover:bg-red-500 hover:text-white transition-all text-xs font-bold uppercase tracking-widest"
        >
            Parar Jogo
        </button>
        <div className="text-right">
            <p className="text-xs text-blue-300 uppercase tracking-wider">
              Tema: {theme} | Valendo
            </p>
            <p className="text-3xl font-bold text-yellow-400 drop-shadow-lg">{formatMoney(currentPrize.hit)}</p>
        </div>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-start justify-center flex-1">
        
        <main className="flex-1 w-full flex flex-col gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden min-h-[180px] flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
                <span className="inline-block px-3 py-1 bg-blue-600/30 rounded-full text-xs font-bold text-blue-200 mb-4 border border-blue-500/30">
                    QUESTÃO {currentQuestionIndex + 1} / {gameQuestions.length} • {currentQuestion.category.toUpperCase()}
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed drop-shadow-md">
                    {currentQuestion.question}
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {currentQuestion.options.map((option, index) => {
                    if (hiddenOptions.includes(index)) return <div key={index} className="h-[76px] invisible" />;

                    let bgClass = "bg-slate-800/60 hover:bg-blue-600/50 border-white/10";
                    if (selectedOption === index) {
                        if (gameState === 'suspense') bgClass = "bg-yellow-600 text-white border-yellow-400 scale-[1.02] shadow-[0_0_15px_rgba(234,179,8,0.5)]";
                        else if (gameState === 'result') {
                            if (isCorrect) bgClass = "bg-green-600 border-green-400 scale-[1.02]";
                            else bgClass = "bg-red-600 border-red-400";
                        }
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(index)}
                            disabled={gameState !== 'thinking'}
                            className={`relative group p-5 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-4 text-lg font-medium cursor-pointer shadow-lg ${bgClass}`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-colors shrink-0 ${selectedOption === index ? 'border-white bg-white/20' : 'border-white/30 bg-slate-700'}`}>
                                {index + 1}
                            </div>
                            {option}
                        </button>
                    );
                })}
            </div>
        </main>

        <aside className="w-full lg:w-48 flex flex-col gap-4 shrink-0">
            <p className="text-center text-blue-200 text-xs uppercase tracking-widest opacity-70 lg:mb-2">Ajudas</p>
            <div className="flex flex-row lg:flex-col gap-4 justify-center">
                <HelpCard icon="⏭️" label="Pular" used={lifelines.skip} onClick={handleSkip} />
                <HelpCard icon="✂️" label="Eliminar" used={lifelines.eliminate} onClick={handleEliminate} />
                <HelpCard icon="🎓" label="Universitários" used={lifelines.students} onClick={handleStudents} />
            </div>
        </aside>
      </div>

      {notification && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="bg-slate-800 border border-blue-500/50 p-6 rounded-2xl max-w-sm w-full text-center shadow-2xl transform scale-100">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{notification.title}</h3>
                  <p className="text-white mb-6 text-lg">{notification.message}</p>
                  <button 
                    onClick={() => setNotification(null)}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-bold transition-colors w-full"
                  >
                    OK
                  </button>
              </div>
          </div>
      )}

      {gameOver && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
              <div className="bg-slate-900 border-2 border-white/20 p-8 rounded-3xl max-w-md w-full text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] transform scale-100">
                  
                  <h2 className={`text-4xl font-extrabold mb-2 ${gameOver.status === 'won' ? 'text-yellow-400' : 'text-red-400'}`}>
                      {gameOver.title}
                  </h2>
                  
                  <p className="text-blue-200 mb-8 text-lg">{gameOver.message}</p>
                  
                  <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
                      <p className="text-sm uppercase tracking-widest text-slate-400 mb-2">Prêmio Final</p>
                      <p className="text-4xl font-bold text-white">{formatMoney(gameOver.prize)}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button 
                        onClick={onExit}
                        className="w-full py-4 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg hover:scale-[1.02]"
                    >
                        Voltar ao Início
                    </button>
                  </div>

              </div>
          </div>
      )}

    </div>
  );
}

function HelpCard({ icon, label, used, onClick }: { icon: string, label: string, used: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            disabled={used}
            className={`flex flex-col items-center justify-center w-24 h-32 lg:w-full lg:h-36 rounded-xl border-2 transition-all duration-300 ${used ? 'bg-slate-800/50 border-slate-700 opacity-50 cursor-not-allowed grayscale' : 'bg-gradient-to-b from-blue-600 to-blue-900 border-blue-400 hover:scale-105 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] cursor-pointer'}`}
        >
            <span className="text-3xl mb-2">{icon}</span>
            <span className="text-xs font-bold uppercase text-white">{label}</span>
        </button>
    );
}