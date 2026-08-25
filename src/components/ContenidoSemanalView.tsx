import React, { useState } from 'react';
import { weeklyEntries, sampleSongs, sampleSeriesScenes, icfesQuizQuestions } from '../data/projectData';
import { 
  Calendar, 
  CheckCircle, 
  Sparkles, 
  Film, 
  Music, 
  BookOpen, 
  HelpCircle, 
  Check, 
  X, 
  RotateCcw,
  Volume2,
  ExternalLink,
  Layers,
  ChevronRight,
  Lightbulb,
  Globe,
  Layout
} from 'lucide-react';

export const ContenidoSemanalView: React.FC = () => {
  const [selectedWeekId, setSelectedWeekId] = useState<string>('semana-1');
  const [activeMultimediaTab, setActiveMultimediaTab] = useState<'series' | 'musica' | 'webcomics' | 'simulador'>('series');
  
  // Estado para el mini simulacro ICFES
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Estado para reproducir audio simulado / karaoke de canciones
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);
  const [selectedSceneIndex, setSelectedSceneIndex] = useState(0);

  const selectedWeek = weeklyEntries.find(w => w.id === selectedWeekId) || weeklyEntries[0];

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    if (showQuizResults) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowQuizResults(false);
  };

  const calculateScore = () => {
    let score = 0;
    icfesQuizQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="space-y-12 pb-12">
      
      {/* Encabezado de la Entrada */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800">
          <Calendar className="w-3.5 h-3.5" />
          Entrada 2 • Bitácora de Entregas y Avances
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Contenido Semanal
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
          Bitácora de seguimiento donde se documentan las actividades, avances y entregas solicitadas cada semana para la construcción del proyecto.
        </p>

        {/* Selector de Semanas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          {weeklyEntries.map((week) => {
            const isSelected = week.id === selectedWeekId;
            return (
              <button
                key={week.id}
                id={`week-btn-${week.weekNumber}`}
                onClick={() => setSelectedWeekId(week.id)}
                className={`flex flex-col text-left p-4 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-sky-600 text-white border-sky-600 shadow-md ring-2 ring-sky-300/50'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <span className={`text-xs font-extrabold uppercase tracking-wider ${isSelected ? 'text-sky-200' : 'text-slate-500'}`}>
                  Entrega {week.weekNumber}
                </span>
                <span className="font-bold text-sm sm:text-base mt-1">
                  {week.weekNumber <= 2 ? `Semana ${week.weekNumber}` : `Semana ${week.weekNumber}: ¿?`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detalle de la Semana Seleccionada */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid lg:grid-cols-12">
        {/* Columna Izquierda: Información y Logros */}
        <div className="p-8 sm:p-10 lg:col-span-7 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full border border-sky-100">
                {selectedWeek.date}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedWeek.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {selectedWeek.title}
            </h2>

            {selectedWeek.subtitle !== '¿?' && (
              <p className="text-sky-700 font-semibold text-base">
                {selectedWeek.subtitle}
              </p>
            )}

            <p className="text-slate-700 text-base leading-relaxed">
              {selectedWeek.weekNumber <= 2 
                ? selectedWeek.description 
                : "Esta entrega aún no ha sido solicitada. La información correspondiente a esta semana se añadirá una vez sea asignada por el docente."}
            </p>

            {selectedWeek.highlights && selectedWeek.highlights.length > 0 && (
              <div className="pt-2 space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Puntos Clave y Evidencias de la Semana:
                </h3>
                <ul className="space-y-2.5">
                  {selectedWeek.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Registro de avances • Let's Do It Together</span>
            <span className="font-semibold text-sky-600">Semana {selectedWeek.weekNumber} de 4</span>
          </div>
        </div>

        {/* Columna Derecha: Evidencia Representativa */}
        <div className="relative lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 min-h-[280px] lg:min-h-full flex flex-col justify-between p-8 text-white border-l border-slate-800">
          {selectedWeek.weekNumber === 1 ? (
            <>
              <div className="space-y-3">
                <span className="text-xs font-bold text-sky-400 bg-sky-950/80 px-3 py-1.5 rounded-lg border border-sky-800/80 inline-flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  Evidencia Gráfica • Semana 1
                </span>
                <h3 className="text-xl font-bold text-white">
                  Sitio Web del Proyecto
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  La evidencia gráfica de esta primera entrega es el diseño y desarrollo de este propio prototipo web con sus tres entradas completas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 space-y-2 text-xs text-slate-300">
                <div className="font-semibold text-sky-300 flex items-center gap-2">
                  <Layout className="w-4 h-4 text-sky-400" />
                  Entradas integradas en el sitio:
                </div>
                <ul className="space-y-1 text-slate-400 list-disc list-inside">
                  <li>Inicio con descripción e historia de la idea</li>
                  <li>Contenido semanal estructurado</li>
                  <li>Sección de noticias, tips y recursos</li>
                </ul>
              </div>
            </>
          ) : selectedWeek.weekNumber === 2 ? (
            <>
              <div className="space-y-3">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-800/80 inline-flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  Evidencia Gráfica • Semana 2
                </span>
                <h3 className="text-xl font-bold text-white">
                  Sección de Noticias y Referencia Dialnet
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Evidencia de actualización del sitio: creación de la sección de noticias con investigación indexada en Dialnet (Cód. 8722118) sobre herramientas interactivas en grado 11.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 space-y-2.5 text-xs text-slate-300">
                <div className="font-semibold text-emerald-300 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Entregables logrados en Semana 2:
                </div>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>Sección de noticias vinculada a la idea de negocio</li>
                  <li>Artículo académico de Dialnet referenciado con enlace directo</li>
                  <li>Diseño estético y menú de navegación optimizado</li>
                  <li>Organización secuencial de actividades de Semana 1 y 2</li>
                </ul>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 my-auto">
              <div className="w-16 h-16 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-3xl font-black text-slate-400">
                ¿?
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-200 text-base">Evidencia Gráfica: ¿?</h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  Aún no hay evidencia asignada para la Semana {selectedWeek.weekNumber}.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Taller Multimedia Interactivo (Música, Series, Webcomics y Simulador) */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Taller Multimedia Representativo
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Laboratorio de Aprendizaje Dinámico
            </h2>
            <p className="text-slate-600 text-sm">
              Muestra interactiva de cómo los estudiantes aprenden mediante recursos culturales.
            </p>
          </div>

          {/* Selector de tipo multimedia */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveMultimediaTab('series')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeMultimediaTab === 'series'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Film className="w-4 h-4" />
              Series & Diálogos
            </button>
            <button
              onClick={() => setActiveMultimediaTab('musica')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeMultimediaTab === 'musica'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Music className="w-4 h-4" />
              Música & Letras
            </button>
            <button
              onClick={() => setActiveMultimediaTab('webcomics')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeMultimediaTab === 'webcomics'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Webcomics
            </button>
            <button
              onClick={() => setActiveMultimediaTab('simulador')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeMultimediaTab === 'simulador'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              Simulacro ICFES
            </button>
          </div>
        </div>

        {/* 1. Módulo Series */}
        {activeMultimediaTab === 'series' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Análisis de Diálogos en Series Famosas</h3>
                <p className="text-slate-500 text-sm">Cómo enseñamos gramática aplicada sin memorizaciones tediosas.</p>
              </div>
              <div className="flex gap-2">
                {sampleSeriesScenes.map((scene, i) => (
                  <button
                    key={scene.id}
                    onClick={() => setSelectedSceneIndex(i)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      selectedSceneIndex === i ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    Escena {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white space-y-4">
              <div className="flex items-center justify-between text-xs text-sky-400 font-semibold">
                <span>Serie: {sampleSeriesScenes[selectedSceneIndex].show}</span>
                <span className="bg-sky-950 px-2.5 py-1 rounded border border-sky-800">
                  Nivel: {sampleSeriesScenes[selectedSceneIndex].level}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-300 tracking-tight">
                {sampleSeriesScenes[selectedSceneIndex].phrase}
              </div>
              <p className="text-sm text-slate-300">
                <strong>Contexto en la trama:</strong> {sampleSeriesScenes[selectedSceneIndex].context}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm space-y-1">
              <div className="font-bold flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                Nota Pedagógica de 'Let's Do It Together':
              </div>
              <p>{sampleSeriesScenes[selectedSceneIndex].grammarNote}</p>
            </div>
          </div>
        )}

        {/* 2. Módulo Música */}
        {activeMultimediaTab === 'musica' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Karaoke & Comprensión Auditiva</h3>
                <p className="text-slate-500 text-sm">Entrenando el oído con canciones con mensajes positivos y vocabulario útil.</p>
              </div>
              <div className="flex gap-2">
                {sampleSongs.map((song, i) => (
                  <button
                    key={song.id}
                    onClick={() => setSelectedSongIndex(i)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      selectedSongIndex === i ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    Canción {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
              <div className="flex justify-between items-center text-xs text-sky-400">
                <span className="font-bold text-base text-white">{sampleSongs[selectedSongIndex].title} — {sampleSongs[selectedSongIndex].artist}</span>
                <span className="bg-sky-950 px-2 py-0.5 rounded border border-sky-800">{sampleSongs[selectedSongIndex].difficulty}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                  <span className="text-xs text-sky-400 font-bold uppercase block mb-1">Letra en Inglés:</span>
                  <p className="text-lg font-bold text-white italic">
                    "{sampleSongs[selectedSongIndex].sampleLyricEn}"
                  </p>
                </div>
                <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                  <span className="text-xs text-emerald-400 font-bold uppercase block mb-1">Significado Real / Traducción:</span>
                  <p className="text-lg text-slate-200 italic">
                    "{sampleSongs[selectedSongIndex].sampleLyricEs}"
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">Vocabulario Clave para tu examen ICFES:</h4>
              <div className="flex flex-wrap gap-2">
                {sampleSongs[selectedSongIndex].keyVocabulary.map((voc, idx) => (
                  <span key={idx} className="bg-sky-50 text-sky-800 border border-sky-200 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    ★ {voc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. Módulo Webcomics */}
        {activeMultimediaTab === 'webcomics' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Lectura Visual de Webcomics & Novelas Gráficas</h3>
              <p className="text-slate-500 text-sm">Aprender mediante viñetas permite asociar expresiones con emociones y contexto sin traducir palabra por palabra.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h4 className="font-bold text-slate-900">Inferencia Visual</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Si no conoces una palabra, la ilustración y la expresión del personaje te dan la pista inmediata.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h4 className="font-bold text-slate-900">Diálogos Cortos</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Burbujas de texto con longitud perfecta para no cansar la mente y asimilar estructuras en minutos.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h4 className="font-bold text-slate-900">Conexión con ICFES</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Entrena la parte de avisos y comprensión lectora inferencial requerida en la prueba Saber 11.
                </p>
              </div>
            </div>

            <div className="bg-sky-50 p-5 rounded-2xl border border-sky-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-sky-900 text-sm">Biblioteca Digital de Cómics Juveniles</span>
                <p className="text-xs text-sky-700">Acceso a más de 50 historias gratuitas curadas por nivel para los estudiantes de Cúcuta.</p>
              </div>
              <span className="text-xs font-bold bg-white text-sky-700 px-3 py-1.5 rounded-lg border border-sky-200">
                Material Gratuito
              </span>
            </div>
          </div>
        )}

        {/* 4. Módulo Mini Simulador ICFES */}
        {activeMultimediaTab === 'simulador' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Mini-Simulacro Saber 11 de Inglés</h3>
                <p className="text-slate-500 text-sm">Pon a prueba tus conocimientos con preguntas reales de tipo ICFES contextualizadas.</p>
              </div>
              <div className="flex items-center gap-2">
                {!showQuizResults ? (
                  <button
                    onClick={() => setShowQuizResults(true)}
                    disabled={Object.keys(userAnswers).length === 0}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-xs transition-all"
                  >
                    Calificar Respuestas
                  </button>
                ) : (
                  <button
                    onClick={handleResetQuiz}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reiniciar Simulacro
                  </button>
                )}
              </div>
            </div>

            {showQuizResults && (
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-indigo-900 uppercase">Resultado de tu Simulacro:</span>
                  <p className="text-xl font-black text-indigo-950">
                    {calculateScore()} de {icfesQuizQuestions.length} correctas ({Math.round((calculateScore() / icfesQuizQuestions.length) * 100)}%)
                  </p>
                </div>
                <span className="text-xs font-bold bg-white text-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-200">
                  {calculateScore() >= 3 ? '¡Excelente Nivel!' : '¡Sigue practicando con nosotros!'}
                </span>
              </div>
            )}

            <div className="space-y-6">
              {icfesQuizQuestions.map((q, qIndex) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isCorrect = userAnswers[q.id] === q.correctIndex;

                return (
                  <div key={q.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pregunta #{qIndex + 1}</span>
                      <span className="text-xs text-sky-700 bg-sky-50 px-2 py-0.5 rounded font-medium">{q.context}</span>
                    </div>

                    <p className="font-bold text-slate-900 text-base">
                      {q.question}
                    </p>

                    <div className="grid sm:grid-cols-3 gap-2 pt-1">
                      {q.options.map((opt, optIndex) => {
                        const isSelected = userAnswers[q.id] === optIndex;
                        let btnStyle = "bg-white text-slate-700 border-slate-200 hover:bg-slate-100";

                        if (showQuizResults) {
                          if (optIndex === q.correctIndex) {
                            btnStyle = "bg-emerald-600 text-white border-emerald-600 font-bold";
                          } else if (isSelected && !isCorrect) {
                            btnStyle = "bg-rose-600 text-white border-rose-600";
                          } else {
                            btnStyle = "bg-white text-slate-400 border-slate-200 opacity-60";
                          }
                        } else if (isSelected) {
                          btnStyle = "bg-sky-600 text-white border-sky-600 font-bold shadow-xs";
                        }

                        return (
                          <button
                            key={optIndex}
                            onClick={() => handleSelectAnswer(q.id, optIndex)}
                            className={`p-3 rounded-xl border text-xs text-left transition-all ${btnStyle}`}
                          >
                            <span className="font-bold mr-1.5">{String.fromCharCode(65 + optIndex)}.</span> {opt}
                          </button>
                        );
                      })}
                    </div>

                    {showQuizResults && (
                      <div className={`p-3 rounded-xl text-xs ${isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'}`}>
                        <strong>Explicación:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        )}

      </section>

    </div>
  );
};
