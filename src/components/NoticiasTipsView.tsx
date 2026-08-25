import React, { useState } from 'react';
import Markdown from 'react-markdown';
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
  Share2,
  ExternalLink,
  BookOpen
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
          Entrada 3 • Noticias, Tips & Recursos (Semana 2)
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Noticias, Tips y Recursos del Proyecto
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
          Consejos prácticos, métodos de estudio con entretenimiento, recomendaciones para la prueba Saber 11 y artículos de investigación científica (como estudios en Dialnet) que respaldan nuestra propuesta pedagógica.
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
            onClick={() => setSelectedCategory('noticia')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'noticia'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            📰 Noticias & Artículos
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
            className={`bg-white rounded-3xl border overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
              item.sourceUrl ? 'border-emerald-300 ring-1 ring-emerald-200/60' : 'border-slate-200'
            }`}
          >
            <div>
              <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-slate-900/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs">
                    {item.category === 'tip' && 'Tip Práctico'}
                    {item.category === 'icfes' && 'Prueba Saber 11'}
                    {item.category === 'noticia' && 'Noticia'}
                    {item.category === 'recurso' && 'Recurso Libre'}
                  </span>

                  {item.sourceCitation && (
                    <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      Ref. Dialnet
                    </span>
                  )}
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

            <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-4 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs text-slate-500 font-medium truncate max-w-[200px]">Por: {item.author}</span>
              
              <div className="flex items-center gap-2">
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors flex items-center gap-1"
                  >
                    <span>Dialnet</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                
                <button
                  onClick={() => setActiveArticle(item)}
                  className="text-xs font-bold text-sky-600 hover:text-sky-800 bg-sky-50 px-3.5 py-1.5 rounded-lg border border-sky-100 transition-colors"
                >
                  Leer Completo →
                </button>
              </div>
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

            {activeArticle.sourceUrl && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-emerald-900 text-xs sm:text-sm">
                <div>
                  <span className="font-bold flex items-center gap-1.5 text-emerald-800">
                    <BookOpen className="w-4 h-4" />
                    Artículo Científico Indexado en Dialnet (Código: 8722118)
                  </span>
                  <p className="text-emerald-700 text-xs mt-0.5">
                    Universidad de La Rioja • Estudio sobre herramientas digitales en grado 11
                  </p>
                </div>
                <a
                  href={activeArticle.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shrink-0 shadow-sm"
                >
                  <span>Abrir en Dialnet</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
              <Markdown
                components={{
                  h3: ({ children }) => <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-6 mb-3 flex items-center gap-2">{children}</h3>,
                  p: ({ children }) => <p className="text-slate-700 leading-relaxed my-2">{children}</p>,
                  strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
                  ol: ({ children }) => <ol className="list-decimal pl-5 space-y-2 my-3 text-slate-700">{children}</ol>,
                  ul: ({ children }) => <ul className="list-disc pl-5 space-y-2 my-3 text-slate-700">{children}</ul>,
                  li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
                  code: ({ children }) => <code className="bg-slate-100 text-sky-700 font-mono text-xs px-2 py-0.5 rounded border border-slate-200">{children}</code>,
                  hr: () => <hr className="my-6 border-slate-200" />
                }}
              >
                {activeArticle.content}
              </Markdown>
            </div>

            <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-sky-900">
              <span>Publicado por <strong>{activeArticle.author}</strong> en Let's Do It Together</span>
              <button 
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold transition-colors"
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
