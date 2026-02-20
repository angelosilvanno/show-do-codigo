interface HeroProps {
  onStartClick?: () => void;
}

export default function Hero({ onStartClick }: HeroProps) {
  return (
    <section className="flex-1 w-full flex flex-col items-center justify-center relative overflow-hidden py-12 md:py-0">

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-100 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] leading-tight">
          SHOW DO CÓDIGO
        </h2>

        <p className="text-base md:text-xl lg:text-2xl text-blue-200/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Prepare-se para a rodada de perguntas onde só passa quem pensa como dev.
        </p>

        <button
          onClick={onStartClick}
          className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 text-lg md:text-xl font-black rounded-full 
                     bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 
                     shadow-[0_0_20px_rgba(234,179,8,0.5)] 
                     hover:shadow-[0_0_30px_rgba(234,179,8,0.8)] 
                     hover:scale-105 active:scale-95 transition-all duration-300 ease-out uppercase tracking-wider"
        >
          Iniciar Partida
        </button>
      </div>

      <div className="absolute -top-10 -left-10 md:-top-20 md:-left-20 w-40 h-40 md:w-80 md:h-80 border border-white/5 rounded-full blur-sm pointer-events-none" />
      <div className="absolute top-20 right-5 md:top-40 md:right-10 w-24 h-24 md:w-40 md:h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 w-48 h-48 md:w-96 md:h-96 border border-white/5 rounded-full blur-sm pointer-events-none" />
      
    </section>
  );
}