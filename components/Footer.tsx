import React from 'react';
import { projectInfo } from '../data/projectData';
import { BookOpen, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: 'inicio' | 'semanas' | 'noticias') => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Marca & Origen */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {projectInfo.name}
              </span>
            </div>
            
            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Academia de inglés innovadora y accesible en {projectInfo.city}, {projectInfo.country}. 
              Enseñamos mediante métodos dinámicos de inmersión cultural (música, series y webcomics) guiados por valores cristianos de servicio mutuo.
            </p>

            <div className="flex items-center gap-2 text-xs text-sky-400 font-medium">
              <MapPin className="w-4 h-4" />
              Cúcuta, Norte de Santander, Colombia
            </div>
          </div>

          {/* Col 2: Enlaces Rápidos */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Entradas del Sitio</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => setActiveTab('inicio')}
                  className="hover:text-white transition-colors"
                >
                  1. Inicio & Misión
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('semanas')}
                  className="hover:text-white transition-colors"
                >
                  2. Contenido Semanal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('noticias')}
                  className="hover:text-white transition-colors"
                >
                  3. Noticias, Tips & ICFES
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Ubicación y Contacto */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Ubicación</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cúcuta, Norte de Santander. Formación complementaria de inglés para jóvenes estudiantes.
            </p>
            <div className="text-xs text-sky-400 font-medium">
              Let's Do It Together • Proyecto Educativo
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © 2026 <strong>{projectInfo.name}</strong> • Proyecto Pedagógico de Emprendimiento Social.
          </p>
          <p className="flex items-center gap-1">
            Diseñado con pasión por la educación bilingüe en Cúcuta.
          </p>
        </div>

      </div>
    </footer>
  );
};
