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
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col items-center p-3 md:p-6 text-white 
                    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-blue-900 to-purple-950 relative">
      
      <div className="w-full max-w-6xl flex justify-between items-center mb-4 md:mb-8 px-2 shrink-0">
        <button 
            onClick={handleStop} 
            className="px-3 py-2 md:px-5 md:py-2.5 rounded-lg bg-red-500/20 text-red-300 border border-red-500/50 hover:bg-red-500 hover:text-white transition-all text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg shadow-red-900/20"
        >
            Parar Jogo
        </button>
        <div className="text-right">
            <p className="text-[10px] md:text-xs text-blue-300 uppercase tracking-wider font-medium">
                Tema: {theme} | Valendo
            </p>
            <p className="text-2xl md:text-4xl font-black text-yellow-400 drop-shadow-[0_2px_10px_rgba(234,179,8,0.4)]">{formatMoney(currentPrize.hit)}</p>
        </div>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch justify-center flex-1 pb-6">
        
        <main className="flex-1 w-full flex flex-col gap-4 md:gap-8 relative z-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center shadow-2xl relative overflow-hidden min-h-[160px] md:min-h-[220px] flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
                <span className="inline-block px-3 py-1 bg-blue-600/30 rounded-full text-[10px] md:text-xs font-bold text-blue-200 mb-4 border border-blue-500/30 uppercase tracking-tighter md:tracking-normal">
                    Questão {currentQuestionIndex + 1} / {gameQuestions.length} • {currentQuestion.category.toUpperCase()}
                </span>
                <h2 className="text-xl md:text-4xl font-bold leading-tight md:leading-relaxed drop-shadow-md">
                    {currentQuestion.question}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {currentQuestion.options.map((option, index) => {
                    if (hiddenOptions.includes(index)) return <div key={index} className="h-[68px] md:h-[84px] hidden md:block opacity-0" />;

                    let bgClass = "bg-slate-800/60 hover:bg-blue-600/40 border-white/10";
                    if (selectedOption === index) {
                        if (gameState === 'suspense') bgClass = "bg-yellow-600/80 text-white border-yellow-400 scale-[1.01] md:scale-[1.02] shadow-[0_0_20px_rgba(234,179,8,0.3)]";
                        else if (gameState === 'result') {
                            if (isCorrect) bgClass = "bg-green-600 border-green-400 scale-[1.01] md:scale-[1.02] shadow-[0_0_20px_rgba(34,197,94,0.4)]";
                            else bgClass = "bg-red-600 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.4)]";
                        }
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(index)}
                            disabled={gameState !== 'thinking'}
                            className={`relative group p-4 md:p-6 rounded-xl md:rounded-2xl border-2 text-left transition-all duration-300 flex items-center gap-3 md:gap-5 text-base md:text-xl font-semibold cursor-pointer shadow-lg active:scale-95 ${bgClass}`}
                        >
                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-black border transition-colors shrink-0 ${selectedOption === index ? 'border-white bg-white/20' : 'border-white/20 bg-slate-900/50 group-hover:border-blue-300'}`}>
                                {index + 1}
                            </div>
                            <span className="flex-1 leading-snug">{option}</span>
                        </button>
                    );
                })}
            </div>
        </main>

        <aside className="w-full lg:w-56 flex flex-col gap-3 md:gap-4 shrink-0 lg:mt-0">
            <p className="text-center text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60 lg:mb-2">Ajudas Disponíveis</p>
            <div className="flex flex-row lg:flex-col gap-3 md:gap-4 justify-center">
                <HelpCard icon="⏭️" label="Pular" used={lifelines.skip} onClick={handleSkip} />
                <HelpCard icon="✂️" label="Eliminar" used={lifelines.eliminate} onClick={handleEliminate} />
                <HelpCard icon="🎓" label="Alunos" used={lifelines.students} onClick={handleStudents} />
            </div>
        </aside>
      </div>

      {notification && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="bg-slate-800 border-2 border-blue-500/50 p-6 md:p-8 rounded-3xl max-w-sm w-full text-center shadow-[0_0_40px_rgba(0,0,0,0.5)] transform scale-100 animate-in zoom-in-95 duration-200">
                  <h3 className="text-xl md:text-2xl font-black text-yellow-400 mb-3 tracking-tight">{notification.title}</h3>
                  <p className="text-white mb-8 text-base md:text-lg leading-relaxed">{notification.message}</p>
                  <button 
                    onClick={() => setNotification(null)}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-black transition-all w-full shadow-lg shadow-blue-900/40 active:translate-y-1"
                  >
                    ENTENDI
                  </button>
              </div>
          </div>
      )}

      {gameOver && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-500">
              <div className="bg-slate-900 border-2 border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-md w-full text-center shadow-[0_0_80px_rgba(0,0,0,0.8)] transform scale-100">
                  
                  <h2 className={`text-3xl md:text-5xl font-black mb-4 tracking-tighter ${gameOver.status === 'won' ? 'text-yellow-400' : 'text-red-500'}`}>
                      {gameOver.title}
                  </h2>
                  
                  <p className="text-blue-100/70 mb-8 text-base md:text-xl font-medium">{gameOver.message}</p>
                  
                  <div className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-8 mb-10 border border-white/10 shadow-inner">
                      <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-blue-300 font-bold mb-3">Prêmio Conquistado</p>
                      <p className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">{formatMoney(gameOver.prize)}</p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button 
                        onClick={onExit}
                        className="w-full py-5 rounded-2xl font-black bg-blue-600 hover:bg-blue-500 text-white text-lg transition-all shadow-xl shadow-blue-900/40 hover:scale-[1.02] active:scale-95"
                    >
                        NOVO JOGO
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
            className={`flex flex-col items-center justify-center flex-1 lg:w-full h-24 md:h-28 lg:h-36 rounded-2xl border-2 transition-all duration-300 ${used ? 'bg-slate-800/30 border-slate-800 opacity-40 cursor-not-allowed grayscale' : 'bg-gradient-to-b from-blue-500 to-blue-800 border-blue-400/50 hover:scale-105 hover:border-yellow-400 hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)] cursor-pointer active:scale-90'}`}
        >
            <span className="text-2xl md:text-4xl mb-2 drop-shadow-md">{icon}</span>
            <span className="text-[9px] md:text-[11px] font-black uppercase text-blue-100 tracking-wider px-1">{label}</span>
        </button>
    );
}