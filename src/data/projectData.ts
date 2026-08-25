import { BusinessProfile, WeeklyEntry, NewsTip, IcfesQuestion } from '../types';

export const businessProfile: BusinessProfile = {
  name: "Let's Do It Together",
  slogan: "Aprender inglés nunca fue tan divertido, interactivo y accesible.",
  author: "Daniel Ricardo Ropero Mantilla",
  institution: "Corporación Universitaria Minuto de Dios - UNIMINUTO",
  subject: "Emprendimiento / Proyecto de Negocio",
  semester: "Formación Académica",
  city: "San José de Cúcuta, Norte de Santander",
  year: 2026,
  mission: "Transformar la enseñanza del inglés en Cúcuta mediante metodologías interactivas, dinámicas y contextualizadas con series, música y cómics en inglés, inspirados en principios de solidaridad, fe y servicio para que jóvenes y familias alcancen un dominio fluido y mejores oportunidades de vida.",
  vision: "Para el 2030, consolidarnos como la academia y plataforma comunitaria líder en educación bilingüe alternativa e interactiva en la región fronteriza, destacada por sus altos puntajes en pruebas Saber 11 y su impacto social positivo.",
  objectives: [
    "Diseñar una metodología de inmersión lúdica a través de contenidos del entretenimiento (series, canciones, cómics y clubes de conversación).",
    "Brindar preparación estratégica para las pruebas de Estado (ICFES Saber 11) enfocada en estudiantes de colegios oficiales y privados.",
    "Fomentar una comunidad de aprendizaje colaborativo basada en valores cristianos de apoyo mutuo, empatía, perseverancia y excelencia.",
    "Ofrecer tarifas solidarias y becas de impacto social para jóvenes talentosos de escasos recursos en la ciudad de Cúcuta."
  ],
  targetAudience: "Niños, adolescentes, estudiantes de grado 10 y 11 próximos a presentar las pruebas Saber 11, universitarios y adultos que buscan aprender inglés sin el aburrimiento de la enseñanza tradicional de gramática rígida.",
  valueProposition: "No enseñamos inglés con libros aburridos. Enseñamos inglés viviendo el idioma a través de lo que amas: tus series favoritas subtituladas de forma pedagógica, la música en inglés que escuchas a diario, cómics interactivos y un ambiente cálido de hermandad y valores.",
  christianValues: [
    "Amor y Servicio al Prójimo: Enseñar con paciencia y empatía a cada estudiante.",
    "Integridad y Honestidad: Compromiso real con el progreso pedagógico de cada alumno.",
    "Perseverancia y Fe: Motivar a los alumnos a no rendirse ante las dificultades del bilingüismo.",
    "Solidaridad Comunitaria: Acceso equitativo a la educación bilingüe como motor de superación."
  ]
};

export const weeklyEntries: WeeklyEntry[] = [
  {
    weekNumber: 1,
    title: "Semana 1: Planteamiento de la Idea de Negocio y Diagnóstico Regional",
    subtitle: "Nacimiento de 'Let's Do It Together' y justificación en Cúcuta",
    description: "Durante la primera semana se estructuró la identidad y fundamentación del proyecto educativo: análisis del bajo nivel de inglés en la región nororiental de Colombia, definición del público objetivo y estructuración de la propuesta de valor basada en entretenimiento pedagógico.",
    date: "Semana 1 • Lanzamiento",
    tags: ["Diagnóstico", "Propuesta de Valor", "Misión & Visión", "Cúcuta"],
    highlights: [
      "Identificación de la problemática: altos índices de deserción en academias tradicionales por clases monótonas.",
      "Definición de las 4 líneas metodológicas: Series TV, Música, Webcomics y Preparación Saber 11.",
      "Planteamiento de la misión y visión con valores de apoyo mutuo y servicio cristiano."
    ],
    imageUrl: "",
    imageAlt: "Evidencia gráfica: El propio sitio web desarrollado",
    multimediaType: "series"
  },
  {
    weekNumber: 2,
    title: "Semana 2: Creación de Sección de Noticias, Referenciación y Actualización Web",
    subtitle: "Investigación en Dialnet sobre herramientas digitales y diseño de la sección de noticias",
    description: "Para la segunda entrega se actualizó el sitio web con la creación y estructuración de la sección de Noticias, Tips y Recursos. Se integró una referencia académica e investigativa indexada en Dialnet (Cód. 8722118) que analiza el impacto de herramientas digitales e interactivas en la motivación y competencias comunicativas de estudiantes de grado 11 en Colombia. Además, se perfeccionó el diseño (paleta cromática, tipografías, menú interactivo y organización estética de Semana 1 y Semana 2).",
    date: "Semana 2 • Noticias y Actualización",
    tags: ["Sección de Noticias", "Referencia Dialnet", "Diseño & Menú", "Investigación Grado 11", "Actualización Web"],
    highlights: [
      "Diseño y estructuración de la nueva sección de Noticias, Tips y Recursos clasificados por categorías.",
      "Integración y referenciación académica de la investigación de Dialnet (Cód. 8722118) sobre el uso de tecnologías e interactividad en el aprendizaje del inglés.",
      "Consolidación estética del sitio web: colores corporativos, tipografía refinada, menú responsive y organización de entradas.",
      "Presentación estructurada de las actividades y avances correspondientes a Semana 1 y Semana 2."
    ],
    imageUrl: "",
    imageAlt: "Evidencia gráfica: Sección de Noticias y artículo de Dialnet integrado en el sitio",
    multimediaType: "music"
  },
  {
    weekNumber: 3,
    title: "Semana 3: ¿?",
    subtitle: "¿?",
    description: "¿?",
    date: "Semana 3 • Pendiente",
    tags: ["¿?"],
    highlights: [],
    imageUrl: "",
    imageAlt: "¿?",
    multimediaType: "comics"
  },
  {
    weekNumber: 4,
    title: "Semana 4: ¿?",
    subtitle: "¿?",
    description: "¿?",
    date: "Semana 4 • Pendiente",
    tags: ["¿?"],
    highlights: [],
    imageUrl: "",
    imageAlt: "¿?",
    multimediaType: "christian"
  }
];

export const newsAndTips: NewsTip[] = [
  {
    id: "noticia-dialnet-investigacion",
    category: "noticia",
    title: "Investigación Dialnet: El Impacto de las Herramientas Digitales e Interactivas en el Aprendizaje del Inglés en Grado 11",
    date: "24 Agosto, 2026",
    author: "Análisis Académico • Dialnet (Cód. 8722118)",
    readTime: "5 min de lectura",
    excerpt: "Un estudio científico realizado con 332 estudiantes de grado 11 en Colombia demuestra que las herramientas digitales e interactivas fortalecen significativamente la motivación y las competencias comunicativas del Marco Común Europeo.",
    content: `
Esta investigación académica indexada en el portal científico **Dialnet (Código de artículo: 8722118)** titulada *"El uso de Duolingo para el aprendizaje del inglés como lengua extranjera / The Use of Duolingo in Learning English as a Foreign Language"*, analiza el papel fundamental que desempeñan las aplicaciones y herramientas digitales interactivas en la enseñanza del inglés como lengua extranjera (EFL).

### 🔍 Aspectos clave del estudio:
- **Población evaluada:** Se llevó a cabo con una muestra de **332 estudiantes de grado 11** pertenecientes a cuatro instituciones educativas oficiales y privadas en Colombia (Boyacá y Duitama).
- **Metodología:** Investigación descriptiva cuantitativa con cuestionarios previos y posteriores para medir el desarrollo de competencias comunicativas según los estándares del **Marco Común Europeo de Referencia para las Lenguas (MCER)**.
- **Resultados concluyentes:** El estudio demostró que el aprendizaje a través de dinámicas interactivas y digitales aumenta notablemente la **motivación estudiantil**, favorece la retención de vocabulario contextualizado y supera la apatía provocada por las clases tradicionales de memorización de reglas gramaticales abstractas.

### 💡 Conexión con nuestra idea de negocio "Let's Do It Together":
Este artículo académico valida científicamente el pilar de nuestra academia: **los jóvenes aprenden más y mejor cuando el idioma se conecta con recursos interactivos, multimedia y cotidianos** en lugar de libros de texto monótonos. En *Let's Do It Together*, complementamos este principio sumando además inmersión con series, música en inglés, webcomics y acompañamiento guiado con valores de servicio y apoyo mutuo.

---
**Referencia bibliográfica y enlace oficial:**
- **Portal:** Dialnet (Universidad de La Rioja)
- **Código del documento:** \`8722118\`
- **Enlace de consulta directa:** https://dialnet.unirioja.es/servlet/articulo?codigo=8722118
    `,
    tags: ["Dialnet", "Investigación", "Grado 11", "Herramientas Digitales", "Bilingüismo", "Evidencia Científica"],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    sourceUrl: "https://dialnet.unirioja.es/servlet/articulo?codigo=8722118",
    sourceCitation: "Dialnet • Código de Artículo 8722118"
  },
  {
    id: "tip-1",
    category: "tip",
    title: "5 Técnicas para Aprender Inglés Viendo tus Series Favoritas sin Frustrarte",
    date: "18 Agosto, 2026",
    author: "Daniel Ropero",
    readTime: "4 min de lectura",
    excerpt: "Descubre cómo pasar del audio en español con subtítulos al inglés con subtítulos en inglés, y cómo tomar notas de expresiones idiomáticas cotidianas.",
    content: `
Aprender inglés viendo series es uno de los métodos más efectivos para adquirir vocabulario natural y entrenar el oído al ritmo real de los hablantes nativos. Sigue estos 5 pasos:

1. **La regla de las 3 fases:**
   - Fase 1: Audio en inglés + Subtítulos en español (solo los primeros 2 capítulos para entender la trama).
   - Fase 2: Audio en inglés + Subtítulos en inglés (la fase dorada para asociar fonética y ortografía).
   - Fase 3: Audio en inglés SIN subtítulos (para entrenar tu listening real).

2. **Repite en voz alta (Shadowing):**
   Cuando un personaje diga una frase corta y expresiva ("No way!", "What are you up to?"), pausa y repítela imitando su entonación y emoción.

3. **Ten tu libreta de 'Slang':**
   No anotes cada palabra desconocida porque te aburrirás. Anota solo aquellas frases que se repitan con frecuencia en los diálogos.

4. **Series recomendadas por nivel:**
   - Principiante/Intermedio: *Friends*, *Modern Family*, *The Good Place*.
   - Intermedio alto: *Stranger Things*, *Brooklyn Nine-Nine*.

5. **Disfruta el proceso:**
   No lo veas como una clase obligatoria; velo como tu momento de entretenimiento en otro idioma.
    `,
    tags: ["Series TV", "Listening", "Shadowing", "Tips"],
    imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "icfes-1",
    category: "icfes",
    title: "Estrategia Clave para la Prueba Saber 11: Cómo responder la Parte 1 y 2 sin equivocarse",
    date: "14 Agosto, 2026",
    author: "Equipo Pedagógico Let's Do It Together",
    readTime: "6 min de lectura",
    excerpt: "Guía práctica para dominar avisos publicitarios y descripciones de palabras en el examen de Estado ICFES.",
    content: `
La prueba de inglés del ICFES Saber 11 consta de 7 partes que evalúan desde vocabulario básico hasta lectura crítica inferencial. En esta entrega analizamos las dos primeras:

### Parte 1: Avisos y Ubicación Contextual
En esta sección te muestran avisos o letreros cortos y debes responder ¿dónde los verías? (ej: in a library, in a hospital, on a bus).
- **Tip Pro:** Identifica las palabras clave de advertencia o instrucción (*Silence, Do not touch, Fasten seatbelt, Turn off cellphones*).
- **Cuidado con las trampas:** Las opciones suelen incluir lugares relacionados, pero solo uno tiene sentido lógico con la acción solicitada.

### Parte 2: Emparejamiento de Definiciones
Se presentan 5 definiciones y una lista de 8 palabras (3 son distractores).
- **Estrategia:** Lee primero las 8 palabras para tener el campo semántico en mente. Luego lee cada definición buscando el sustantivo principal.
- **Descarte sistemático:** Marca las que estés 100% seguro primero para reducir las opciones de las más difíciles.
    `,
    tags: ["Saber 11", "ICFES", "Consejos de Examen", "Gramática"],
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "noticia-1",
    category: "noticia",
    title: "Norte de Santander avanza en programas de bilingüismo para la juventud",
    date: "10 Agosto, 2026",
    author: "Redacción Comunitaria",
    readTime: "3 min de lectura",
    excerpt: "Iniciativas ciudadanas y educativas buscan cerrar la brecha de dominio del idioma extranjero en los municipios fronterizos.",
    content: `
En Cúcuta y el área metropolitana, el interés de los jóvenes por aprender un segundo idioma ha crecido exponencialmente gracias al auge del trabajo remoto, el desarrollo de software y las oportunidades de becas internacionales.

La academia *Let's Do It Together* se suma a este movimiento ofreciendo espacios accesibles con metodologías que rompen con los esquemas rígidos tradicionales, apostando por el arte, la música y la tecnología como canales de enseñanza.
    `,
    tags: ["Cúcuta", "Bilingüismo", "Oportunidades", "Comunidad"],
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "recurso-1",
    category: "recurso",
    title: "Biblioteca de Canciones en Inglés con Letra Sincronizada para Entrenar la Pronunciación",
    date: "5 Agosto, 2026",
    author: "Daniel Ropero",
    readTime: "5 min de lectura",
    excerpt: "Lista curada de baladas, pop y música cristiana contemporánea con pronunciación clara para practicar fonética.",
    content: `
Cantar en inglés ayuda a desarrollar la memoria muscular necesaria para los sonidos que no existen en español (como la 'th', la 'v' labiodental o las vocales cortas).

### Lista de canciones recomendadas por claridad de dicción:
1. **Easy on Me - Adele:** Excelente para vocales abiertas y entonación.
2. **Count on Me - Bruno Mars:** Vocabulario cotidiano y ritmo moderado.
3. **Goodness of God - Bethel Music / CeCe Winans:** Pronunciación limpia, ritmo pausado y mensaje inspirador de fe y gratitud.
4. **Yellow - Coldplay:** Ideal para asociar frases compuestas y rimas naturales.
5. **10,000 Reasons - Matt Redman:** Letra accesible con estructuras gramaticales en presente y futuro.
    `,
    tags: ["Música", "Pronunciación", "Canciones", "Recursos"],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
  }
];

export const icfesSimuladorQuestions: IcfesQuestion[] = [
  {
    id: 1,
    part: 1,
    title: "Parte 1: ¿Dónde puedes ver estos avisos?",
    instruction: "¿Dónde puedes ver este aviso?",
    context: "SILENCE PLEASE - EXAM IN PROGRESS",
    question: "¿En qué lugar encontrarías este anuncio?",
    options: [
      { letter: "A", text: "In a park" },
      { letter: "B", text: "In a school library or classroom" },
      { letter: "C", text: "In a supermarket" }
    ],
    correctAnswer: "B",
    explanation: "El aviso pide silencio por un examen en curso ('Exam in progress'), lo cual es propio de un aula escolar o una biblioteca.",
    tipForSaber11: "Busca palabras contextuales como 'Silence' o 'Exam' que delimitan el lugar inmediatamente."
  },
  {
    id: 2,
    part: 1,
    title: "Parte 1: ¿Dónde puedes ver estos avisos?",
    instruction: "¿Dónde puedes ver este aviso?",
    context: "PLEASE FASTEN YOUR SEATBELT WHILE SEATED",
    question: "¿Dónde es más probable que veas esta instrucción?",
    options: [
      { letter: "A", text: "On an airplane or bus" },
      { letter: "B", text: "In a clothing shop" },
      { letter: "C", text: "In a swimming pool" }
    ],
    correctAnswer: "A",
    explanation: "'Seatbelt' significa cinturón de seguridad. Se utiliza en medios de transporte como aviones o autobuses.",
    tipForSaber11: "Aprende el vocabulario básico de seguridad en viajes (seatbelt, emergency exit, luggage)."
  },
  {
    id: 3,
    part: 2,
    title: "Parte 2: Emparejamiento de Definiciones",
    instruction: "Lea las descripciones y seleccione la palabra correcta.",
    question: "A person who helps people and treats them when they are sick in a hospital.",
    options: [
      { letter: "A", text: "Teacher" },
      { letter: "B", text: "Doctor" },
      { letter: "C", text: "Engineer" }
    ],
    correctAnswer: "B",
    explanation: "'Treats them when they are sick' (los atiende cuando están enfermos) corresponde a la profesión de un Doctor o Médico.",
    tipForSaber11: "En la Parte 2 del ICFES, busca los verbos clave de la acción ('helps', 'treats', 'sick')."
  },
  {
    id: 4,
    part: 3,
    title: "Parte 3: Conversaciones Cortas",
    instruction: "Complete la conversación cotidiana seleccionando la respuesta más adecuada.",
    context: "Person 1: 'Can you lend me your dictionary for the English class?'",
    question: "¿Cuál es la respuesta más natural y educada?",
    options: [
      { letter: "A", text: "Sure, here you are!" },
      { letter: "B", text: "I am twelve years old." },
      { letter: "C", text: "Yesterday morning." }
    ],
    correctAnswer: "A",
    explanation: "'Sure, here you are!' es la respuesta cortés en inglés para decir '¡Claro, aquí tienes!' al prestar algo.",
    tipForSaber11: "Identifica la intención comunicativa: pedir un favor requiere una aceptación amable o una excusa educada."
  },
  {
    id: 5,
    part: 4,
    title: "Parte 4: Texto con Espacios (Gramática y Conectores)",
    instruction: "Elija la opción gramatical correcta para completar la oración.",
    context: "If you practice every day with TV series and music, you _______ improve your fluency faster.",
    question: "¿Qué forma verbal completa correctamente el primer condicional?",
    options: [
      { letter: "A", text: "will" },
      { letter: "B", text: "would have" },
      { letter: "C", text: "are" }
    ],
    correctAnswer: "A",
    explanation: "Estructura del primer condicional: If + Presente Simple (practice), Cláusula principal con WILL + Verbo en forma base (will improve).",
    tipForSaber11: "Revisa siempre la regla del First Conditional: If + Present, Will + Infinitive."
  }
];
