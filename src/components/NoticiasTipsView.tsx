import React, { useState } from 'react';
import { newsAndTips } from '../data/projectData';
import { NewsTip } from '../types';
import { 
  Newspaper, 
  Sparkles, 
  Lightbulb, 
  GraduationCap, 
  Globe, 
  Clock, 
  User, 
  Tag, 
  Play,
  Share2
} from 'lucide-react';

export const NoticiasTipsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<NewsTip | null>(null);

  const filteredNews = selectedCategory === 'all' 
    ? newsAndTips 
    : newsAndTips.filter(n => n.category === selectedCategory);

  return (
    <div className="space-y-12 pb-12">
      
      {/* Encabezado de Entrada 3 */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
          <Newspaper className="w-3.5 h-3.5" />
          Entrada 3 • Noticias, Tips & Recursos
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Noticias, Tips y Recursos
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
          Consejos prácticos, métodos de estudio con entretenimiento, recomendaciones para la prueba Saber 11 y artículos de interés para complementar el proyecto.
        </p>

        {/* Filtros por Categoría */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos ({newsAndTips.length})
          </button>
          <button
            onClick={() => setSelectedCategory('tip')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'tip'
                ? 'bg-sky-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            💡 Tips de Estudio
          </button>
          <button
            onClick={() => setSelectedCategory('icfes')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'icfes'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🎯 Estrategias ICFES
          </button>
          <button
            onClick={() => setSelectedCategory('noticia')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'noticia'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            📰 Noticias Cúcuta
          </button>
          <button
            onClick={() => setSelectedCategory('recurso')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'recurso'
                ? 'bg-amber-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            📚 Recursos Gráficos
          </button>
        </div>
      </div>

      {/* Grid de Artículos */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredNews.map((item) => (
          <article 
            key={item.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs">
                    {item.category === 'tip' && 'Tip Práctico'}
                    {item.category === 'icfes' && 'Prueba Saber 11'}
                    {item.category === 'noticia' && 'Noticia'}
                    {item.category === 'recurso' && 'Recurso Libre'}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Por: {item.author}</span>
              <button
                onClick={() => setActiveArticle(item)}
                className="text-xs font-bold text-sky-600 hover:text-sky-800 bg-sky-50 px-3.5 py-1.5 rounded-lg border border-sky-100 transition-colors"
              >
                Leer Artículo Completo →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal / Lector del Artículo Completo */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl overflow-y-auto p-6 sm:p-10 space-y-6 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  {activeArticle.category.toUpperCase()} • {activeArticle.readTime}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activeArticle.title}
                </h2>
              </div>
              <button 
                onClick={() => setActiveArticle(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <img 
              src={activeArticle.imageUrl} 
              alt={activeArticle.title} 
              className="w-full h-56 sm:h-72 object-cover rounded-2xl"
            />

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {activeArticle.content}
            </div>

            <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 flex items-center justify-between text-xs text-sky-900">
              <span>Publicado por <strong>{activeArticle.author}</strong> en Let's Do It Together</span>
              <button 
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-sky-600 text-white rounded-xl font-bold"
              >
                Cerrar Artículo
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
