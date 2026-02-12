import { Mic2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-slate-50 flex flex-col items-center justify-center z-[100]">
      <div className="relative">
        <div className="w-20 h-20 bg-pink-600 rounded-2xl flex items-center justify-center animate-bounce shadow-xl shadow-pink-200">
          <Mic2 size={40} className="text-white" />
        </div>
        <div className="absolute -inset-4 border-2 border-pink-200 rounded-full animate-ping opacity-25"></div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          La <span className="text-pink-600">Patrona</span> Show
        </h2>
        <p className="text-slate-400 text-sm mt-2 animate-pulse font-medium uppercase tracking-widest">
          Preparando la sorpresa...
        </p>
      </div>
    </div>
  );
}