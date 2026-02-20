export default function Footer() {
  return (
    <footer className="w-full py-6 bg-transparent border-t border-white/5 text-slate-400">
      
      <div className="max-w-4xl mx-auto text-center px-4 flex flex-col items-center">
        
        <span className="text-xs font-bold text-blue-500/50 uppercase tracking- mb-2">
          Game Version 1.0
        </span>

        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} Show do Código. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}