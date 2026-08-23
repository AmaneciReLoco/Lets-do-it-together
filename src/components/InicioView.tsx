import React from 'react';
import { projectInfo } from '../data/projectData';
import { 
  Target, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Film, 
  Music, 
  BookOpenCheck, 
  Heart, 
  MapPin, 
  TrendingUp, 
  GraduationCap, 
  Users, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

interface InicioViewProps {
  onNavigateToWeeks: () => void;
}

export const InicioView: React.FC<InicioViewProps> = ({ onNavigateToWeeks }) => {
  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. Hero Principal con Introducción y Contexto */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl">
        {/* Luces sutiles de fondo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30">
            <MapPin className="w-3.5 h-3.5" />
            Proyecto Educativo • Cúcuta, Colombia
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            {projectInfo.name}
          </h1>

          <p className="text-lg sm:text-2xl font-light text-slate-200">
            "{projectInfo.slogan}"
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-slate-100 leading-relaxed text-base sm:text-lg space-y-4">
            <p className="text-slate-100">
              {projectInfo.introduction}
            </p>
            <p className="text-slate-200">
              {projectInfo.historyAndOrigin}
            </p>
            <p className="text-sky-200 font-medium">
              {projectInfo.reasonWhy}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              id="hero-explore-weekly-btn"
              onClick={onNavigateToWeeks}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold transition-all shadow-lg hover:shadow-sky-600/30 hover:-translate-y-0.5"
            >
              Explorar Contenido Semanal
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Misión y Visión */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Misión y Visión
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            El propósito y la proyección a futuro de nuestra propuesta en Cúcuta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta Misión */}
          <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Misión</h3>
              <p className="text-slate-700 leading-relaxed text-base italic bg-slate-50 p-5 rounded-xl border border-slate-100">
                "{projectInfo.mission}"
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-sky-700">
              <ShieldCheck className="w-4 h-4" />
              Compromiso pedagógico y social con los jóvenes de Cúcuta
            </div>
          </div>

          {/* Tarjeta Visión */}
          <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Visión (2031)</h3>
              <p className="text-slate-700 leading-relaxed text-base italic bg-slate-50 p-5 rounded-xl border border-slate-100">
                "{projectInfo.vision}"
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-indigo-700">
              <Award className="w-4 h-4" />
              Proyección de crecimiento y liderazgo regional
            </div>
          </div>
        </div>
      </section>

      {/* 3. Objetivos del Proyecto */}
      <section className="space-y-8 bg-slate-50/80 p-8 sm:p-12 rounded-3xl border border-slate-200">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Objetivos del Proyecto
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
            Metas planteadas para ayudar a los estudiantes a mejorar su nivel de inglés y su desempeño en las pruebas de estado.
          </p>
        </div>

        {/* Objetivo General (Macro) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold">
              ★
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-sky-700">Meta Principal</span>
              <h3 className="text-xl font-bold text-slate-900">Objetivo General (Macro)</h3>
            </div>
          </div>
          <p className="text-slate-800 text-base sm:text-lg leading-relaxed bg-sky-50/50 p-5 rounded-xl border border-sky-100/70">
            {projectInfo.macroObjective}
          </p>
        </div>

        {/* Objetivos Específicos */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            Objetivos Específicos
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {projectInfo.specificObjectives.map((obj, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {obj}
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  Objetivo #{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Enfoque de Aprendizaje */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            ¿Cómo aprendemos en Let's Do It Together?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Recursos y actividades prácticas para aprender de forma amena y conectada con lo cotidiano.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Film className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Series y Películas</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Práctica con diálogos reales y frases cotidianas que no suelen enseñar en las clases tradicionales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Music className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Música y Letras</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Escuchar y cantar canciones para acostumbrar el oído a la pronunciación y aprender nuevo vocabulario.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <BookOpenCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Webcomics y Lectura</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Lecturas cortas e ilustradas que ayudan a entender el contexto sin tener que traducir palabra por palabra.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Apoyo Mutuo</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Un ambiente de confianza, valores y respeto para practicar en grupo sin pena a equivocarse.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Cifras y Diagnóstico del Contexto en Cúcuta */}
      <section className="bg-gradient-to-r from-sky-900 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-lg">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="space-y-2 p-4">
            <span className="text-4xl sm:text-5xl font-black text-sky-300">#1</span>
            <p className="text-sm sm:text-base text-slate-200 font-medium">
              Materia con mayor necesidad de refuerzo en el ICFES Saber 11 en Norte de Santander.
            </p>
          </div>
          <div className="space-y-2 p-4">
            <span className="text-4xl sm:text-5xl font-black text-sky-300">100%</span>
            <p className="text-sm sm:text-base text-slate-200 font-medium">
              Enfoque en motivación, inmersión cultural y eliminación del miedo escénico al hablar.
            </p>
          </div>
          <div className="space-y-2 p-4">
            <span className="text-4xl sm:text-5xl font-black text-sky-300">2031</span>
            <p className="text-sm sm:text-base text-slate-200 font-medium">
              Horizonte de visión: Convertirnos en la academia de bilingüismo referente de la región.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
