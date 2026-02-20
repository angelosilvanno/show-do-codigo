interface HeroProps {
  onStartClick?: () => void;
}

export default function Hero({ onStartClick }: HeroProps) {
  return (
    <section className="flex-1 w-full flex flex-col items-center justify-center relative overflow-hidden py-8 md:py-12">

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 flex flex-col items-center justify-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-100 drop-shadow-[0_5px_15px_rgba(59,130,246,0.3)] leading-tight uppercase">
          Show do Código
        </h2>

        <p className="text-base md:text-xl lg:text-2xl text-blue-100/70 max-w-2xl mx-auto mb-8 md:mb-12 font-medium leading-relaxed">
          Prepare-se para a rodada de perguntas onde <br className="hidden md:block" /> só passa quem pensa como dev.
        </p>

        <button
          onClick={onStartClick}
          className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-5 text-lg md:text-xl font-black rounded-full 
                     bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 
                     shadow-[0_10px_25px_rgba(234,179,8,0.3)] 
                     hover:shadow-[0_15px_35px_rgba(234,179,8,0.5)] 
                     hover:scale-105 active:scale-95 transition-all duration-300 ease-out uppercase tracking-widest"
        >
          Iniciar Partida
        </button>
      </div>

      {/* Elementos decorativos mais sutis para não poluir */}
      <div className="absolute -top-20 -left-20 w-64 h-64 md:w-96 md:h-96 border border-white/5 rounded-full blur-sm pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 md:w-96 md:h-96 border border-white/5 rounded-full blur-sm pointer-events-none" />
      
    </section>
  );
}