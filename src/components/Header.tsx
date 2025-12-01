export default function Header() {
  return (
    <header className="w-full py-6 px-8 flex justify-between items-center bg-transparent z-50 pointer-events-none">
      
      <div className="flex items-center gap-2 opacity-80">
        <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
        
        <span className="ml-3 text-xs font-mono text-blue-300/40 tracking-widest uppercase">
          Terminal_v1.0
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-mono text-blue-300/40 tracking-widest uppercase">
          SYSTEM: ONLINE
        </span>
      </div>

    </header>
  );
}