interface HeroProps {
  onStartClick?: () => void;
}

export default function Hero({ onStartClick }: HeroProps) {
  return (
    <section className="flex-1 w-full flex flex-col items-center justify-center relative overflow-hidden">

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-100 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          SHOW DO CÓDIGO
        </h2>

        <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto mb-10 font-light">
          Prepare-se para a rodada de perguntas onde só passa quem pensa como dev.
        </p>

        <button
          onClick={onStartClick}
          className="px-12 py-5 text-xl font-bold rounded-full 
                     bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 
                     shadow-[0_0_20px_rgba(234,179,8,0.5)] 
                     hover:shadow-[0_0_30px_rgba(234,179,8,0.8)] 
                     hover:scale-105 active:scale-95 transition-all duration-300 ease-out"
        >
          INICIAR PARTIDA
        </button>
      </div>

      <div className="absolute -top-20 -left-20 w-80 h-80 border border-white/5 rounded-full blur-sm pointer-events-none" />
      <div className="absolute top-40 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 border border-white/5 rounded-full blur-sm pointer-events-none" />
      
    </section>
  );
}