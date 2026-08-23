import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { InicioView } from './components/InicioView';
import { ContenidoSemanalView } from './components/ContenidoSemanalView';
import { NoticiasTipsView } from './components/NoticiasTipsView';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'semanas' | 'noticias'>('inicio');

  return (
    <div className="min-h-screen bg-slate-100/60 text-slate-800 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Barra de Navegación Principal */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Contenido Principal con las 3 Entradas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        {activeTab === 'inicio' && (
          <InicioView 
            onNavigateToWeeks={() => setActiveTab('semanas')}
          />
        )}

        {activeTab === 'semanas' && (
          <ContenidoSemanalView />
        )}

        {activeTab === 'noticias' && (
          <NoticiasTipsView />
        )}
      </main>

      {/* Pie de Página */}
      <Footer 
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
