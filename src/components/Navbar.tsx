import React from 'react';
import { BookOpen, Calendar, Newspaper, HeartHandshake } from 'lucide-react';

interface NavbarProps {
  activeTab: 'inicio' | 'semanas' | 'noticias';
  setActiveTab: (tab: 'inicio' | 'semanas' | 'noticias') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Marca */}
          <div 
            id="brand-logo-button"
            onClick={() => setActiveTab('inicio')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                  Let's Do It <span className="text-sky-600">Together</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Cúcuta, Colombia
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Academia de Inglés • Aprendizaje Natural & Valores</p>
            </div>
          </div>

          {/* Navegación por pestañas (Las 3 entradas solicitadas) */}
          <nav className="flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/70">
            <button
              id="nav-tab-inicio"
              onClick={() => setActiveTab('inicio')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'inicio'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              1. Inicio
            </button>

            <button
              id="nav-tab-semanas"
              onClick={() => setActiveTab('semanas')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'semanas'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Calendar className="w-4 h-4" />
              2. Contenido Semanal
            </button>

            <button
              id="nav-tab-noticias"
              onClick={() => setActiveTab('noticias')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'noticias'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              3. Noticias & Tips
            </button>
          </nav>
        </div>

        {/* Barra móvil de navegación secundaria */}
        <div className="md:hidden flex items-center justify-around py-2.5 border-t border-slate-100">
          <button
            onClick={() => setActiveTab('inicio')}
            className={`flex flex-col items-center gap-1 text-xs font-semibold py-1 px-2 rounded-lg ${
              activeTab === 'inicio' ? 'text-sky-600' : 'text-slate-500'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Inicio</span>
          </button>
          <button
            onClick={() => setActiveTab('semanas')}
            className={`flex flex-col items-center gap-1 text-xs font-semibold py-1 px-2 rounded-lg ${
              activeTab === 'semanas' ? 'text-sky-600' : 'text-slate-500'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Semanas</span>
          </button>
          <button
            onClick={() => setActiveTab('noticias')}
            className={`flex flex-col items-center gap-1 text-xs font-semibold py-1 px-2 rounded-lg ${
              activeTab === 'noticias' ? 'text-sky-600' : 'text-slate-500'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>Noticias & Tips</span>
          </button>
        </div>
      </div>
    </header>
  );
};
