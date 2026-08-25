import { ProjectInfo, WeeklyEntry, NewsTip, IcfesQuestion } from '../types';

export const projectInfo: ProjectInfo = {
  name: "Let's Do It Together",
  slogan: "Aprende inglés de forma natural, dinámica y con propósito",
  city: "Cúcuta",
  country: "Colombia",
  introduction: "La idea de este proyecto surge de una realidad evidente en nuestra ciudad de Cúcuta, Colombia, donde el sistema educativo tradicional suele fallar en la enseñanza del inglés, dejando a muchos jóvenes sin dominar el idioma. Esta deficiencia se refleja claramente a nivel nacional en las pruebas ICFES, donde la materia de inglés registra de forma constante los promedios más bajos, limitando el futuro académico y laboral de los estudiantes.",
  historyAndOrigin: "El nombre de nuestra empresa será \"Let's Do It Together\", y nace del deseo de compartir los conocimientos que Dios nos ha dado y que nosotros mismos adquirimos de manera natural y divertida. En lugar de depender de métodos rígidos y aburridos, aprendimos el idioma viendo series y películas, escuchando canciones y leyendo webcomics, descubriendo que el inglés se asimila mejor cuando se conecta con lo que nos apasiona.",
  reasonWhy: "Hemos elegido esta idea de negocio porque queremos transformar esa frustración común en una oportunidad real para los jóvenes cucuteños. Buscamos demostrar que aprender inglés no tiene que ser una carga escolar pesada, sino una experiencia accesible y dinámica, guiada por principios cristianos de servicio, donde juntos podamos superar las barreras del idioma y abrir puertas hacia nuevas oportunidades.",
  macroObjective: "Posicionar a \"Let's Do It Together\" en Cúcuta como una academia de inglés innovadora y accesible, ayudando a los jóvenes a superar las deficiencias del sistema tradicional mediante métodos dinámicos de inmersión cultural para mejorar su rendimiento académico y sus oportunidades de bilingüismo.",
  specificObjectives: [
    "Implementar metodologías de enseñanza basadas en recursos cotidianos y de entretenimiento (como series, música y lectura) para hacer el aprendizaje más natural y efectivo.",
    "Apoyar a los estudiantes en su preparación académica, enfocándonos en elevar los puntajes de la prueba ICFES en el área de inglés.",
    "Crear una comunidad de aprendizaje basada en el apoyo mutuo y principios cristianos, donde cada estudiante se sienta motivado a perder el miedo a hablar."
  ],
  mission: "La misión de 'Let's Do It Together' es transformar la enseñanza del inglés en Cúcuta mediante metodologías dinámicas inspiradas en el entretenimiento y el aprendizaje natural, brindando un espacio guiado por valores cristianos y de servicio para que los jóvenes dominen el idioma y superen las brechas educativas actuales.",
  vision: "Ser para el año 2031 la academia de inglés líder en Cúcuta y reconocida en la región por su enfoque innovador y empírico, destacándonos por elevar el nivel de bilingüismo de los jóvenes y formar una comunidad sólida de estudiantes preparados para competir en un mundo globalizado."
};

export const weeklyEntries: WeeklyEntry[] = [
  {
    id: "semana-1",
    weekNumber: 1,
    title: "Semana 1: Planteamiento de la Idea y Diagnóstico Inicial",
    subtitle: "Justificación de la idea de negocio y análisis de la situación en Cúcuta",
    description: "En esta primera entrega se definió la base del proyecto 'Let's Do It Together'. Analizamos el problema del bajo nivel de inglés en los colegios de Cúcuta y los resultados en las pruebas ICFES, justificando por qué un método basado en gustos e intereses personales es una alternativa real frente a la enseñanza tradicional.",
    date: "Semana 1 • Entrega Inicial",
    tags: ["Idea de Negocio", "Diagnóstico Cúcuta", "Justificación", "ICFES"],
    highlights: [
      "Definición del nombre e identidad del proyecto: 'Let's Do It Together'.",
      "Redacción de la introducción, justificación y problemática en la ciudad de Cúcuta.",
      "Formulación de los objetivos generales y específicos del proyecto.",
      "Planteamiento de la misión y visión con valores de apoyo mutuo y servicio cristiano."
    ],
    imageUrl: "",
    imageAlt: "Evidencia gráfica: El propio sitio web desarrollado",
    multimediaType: "series"
  },
  {
    id: "semana-2",
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
    id: "semana-3",
    weekNumber: 3,
    title: "Semana 3: ¿?",
    subtitle: "¿?",
    description: "¿?",
    date: "Semana 3 • Pendiente",
    tags: ["¿?"],
    highlights: [],
    imageUrl: "",
    imageAlt: "¿?",
    multimediaType: "webcomic"
  },
  {
    id: "semana-4",
    weekNumber: 4,
    title: "Semana 4: ¿?",
    subtitle: "¿?",
    description: "¿?",
    date: "Semana 4 • Pendiente",
    tags: ["¿?"],
    highlights: [],
    imageUrl: "",
    imageAlt: "¿?",
    multimediaType: "icfes"
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
    date: "20 Agosto, 2026",
    author: "Equipo Let's Do It Together",
    readTime: "4 min de lectura",
    excerpt: "¿Subtítulos en español, en inglés o sin subtítulos? Te enseñamos el método de 3 pasos que usamos en nuestra academia para pasar de principiante a fluido con series de Netflix y streaming.",
    content: `
Aprender con series no significa solo sentarse a ver maratones pasivamente; requiere una técnica activa pero divertida:

1. **Paso 1: Audio en inglés con subtítulos en inglés (CC):** Evita subtítulos en español porque tu cerebro leerá en español e ignorará el audio en inglés. Al leer en inglés mientras escuchas, asocias la ortografía con los fonemas reales.
2. **Paso 2: La técnica del 'Shadowing' (Eco Vocal):** Elige una escena corta de 2 minutos. Pausa después de cada frase de tu personaje favorito y repítela imitando su entonación, ritmo y emoción.
3. **Paso 3: El cuaderno de expresiones vivas:** Anota frases completas que te gusten (ej: "I've got your back" en vez de solo traducir "back = espalda").
4. **Paso 4: Repite el episodio sin subtítulos:** Te sorprenderá notar cómo tu oído ahora caza palabras que antes sonaban como un solo murmullo.
    `,
    tags: ["Series", "Pronunciación", "Método Natural", "Tips"],
    imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "icfes-hack",
    category: "icfes",
    title: "Estrategias Clave para Sacar más de 75 Puntos en el ICFES de Inglés en Cúcuta",
    date: "18 Agosto, 2026",
    author: "Tutoría Académica Saber 11",
    readTime: "6 min de lectura",
    excerpt: "Desglosamos las 7 partes de la prueba de inglés del ICFES. Conoce las trampas más comunes en avisos públicos, diálogos cortos y comprensión de lectura.",
    content: `
La prueba de inglés del ICFES no busca que seas un diccionario andante, sino que entiendas la función comunicativa del idioma:

- **Parte 1 (Avisos de señalización):** Fíjate en los lugares (Hospital, Airport, Street). Identifica palabras clave de peligro, instrucción o prohibición (No parking, Danger, Please wash hands).
- **Parte 2 (Emparejamiento de definiciones):** Lee primero las opciones de la A a la H y luego busca palabras clave en cada enunciado.
- **Parte 3 (Conversaciones cortas):** Responde según la cortesía y la intención social, no de forma literal.
- **Parte 4 (Gramática y vocabulario en textos):** Revisa las palabras antes y después del espacio para deducir si falta una preposición, un conector o un verbo.
- **Parte 7 (Textos complejos):** Lee las preguntas antes que el texto para saber qué información específica estás rastreando.
    `,
    tags: ["ICFES", "Saber 11", "Técnicas de Examen", "Cúcuta"],
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "noticia-cucuta",
    category: "noticia",
    title: "La Brecha del Bilingüismo en Norte de Santander: Un Desafío que Podemos Vencer Juntos",
    date: "15 Agosto, 2026",
    author: "Redacción Educativa Cúcuta",
    readTime: "5 min de lectura",
    excerpt: "Los informes recientes revelan la urgencia de métodos pedagógicos modernos en la frontera para brindar oportunidades de empleo remoto y becas internacionales a nuestros jóvenes.",
    content: `
Cúcuta es una ciudad con un potencial inmenso de talento juvenil y creatividad. Sin embargo, el acceso a academias de idiomas tradicionales con mensualidades elevadas y metodologías monótonas ha dejado atrás a miles de estudiantes talentosos.

En **Let's Do It Together** creemos firmemente que la educación debe ser un acto de amor y servicio cristiano. Al romper con el molde anticuado de copiar tablas gramaticales en un cuaderno y conectar a los muchachos con la cultura viva del idioma, el inglés pasa de ser 'la materia que se pierde' a ser la herramienta que transforma vidas.
    `,
    tags: ["Educación", "Frontera", "Oportunidades", "Impacto Social"],
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "recurso-webcomics",
    category: "recurso",
    title: "Top 5 Webcomics Gratuitos en Inglés Ideales para Mejorar tu Fluidez",
    date: "12 Agosto, 2026",
    author: "Club de Lectura Digital",
    readTime: "3 min de lectura",
    excerpt: "Descubre cómo leer historias gráficas ilustradas en tu celular te ayuda a adquirir gramática sin tener que memorizar reglas.",
    content: `
Los webcomics combinan ilustraciones de alta calidad con diálogos cortos y coloquiales. Son ideales para estudiantes con poco tiempo:

1. **Heartstopper:** Diálogos cotidianos, vocabulario escolar y oraciones sencillas para nivel A2-B1.
2. **Lore Olympus:** Mitología moderna con lenguaje descriptivo y rico para nivel B1-B2.
3. **Sarah's Scribbles:** Cómics de 4 viñetas con humor del día a día, perfectos para principiantes absolutos (A1-A2).
4. **Tower of God:** Aventura y acción con expresiones de estrategia y diálogo dramático.
5. **Everyday Cuteness:** Tiras cómicas con frases de gratitud, amistad y valores.
    `,
    tags: ["Webcomics", "Lectura", "Recursos Gratis", "Autodidacta"],
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
  }
];

export const icfesQuizQuestions: IcfesQuestion[] = [
  {
    id: 1,
    context: "¿Dónde puedes ver este aviso? -> 'PLEASE DO NOT FEED THE ANIMALS'",
    question: "Where can you see this notice?",
    options: [
      "In a zoo or nature park",
      "In a library",
      "In a computer store"
    ],
    correctIndex: 0,
    explanation: "El aviso 'Por favor no alimentar a los animales' se encuentra típicamente en zoológicos o reservas naturales (zoo / nature park)."
  },
  {
    id: 2,
    context: "Conversación cotidiana en inglés",
    question: "Tom: 'I passed my English exam with the highest score!' — Mary: '_______'",
    options: [
      "Never mind, try again tomorrow.",
      "Congratulations! I knew you could do it!",
      "I am so sorry to hear that."
    ],
    correctIndex: 1,
    explanation: "Ante una buena noticia académica de un compañero ('Pasé mi examen de inglés con la nota más alta'), la respuesta adecuada y cortés es felicitarlo ('Congratulations! I knew you could do it!')."
  },
  {
    id: 3,
    context: "Completar la frase con la preposición y tiempo verbal correcto",
    question: "At 'Let's Do It Together', we believe learning English is easier when you practice _____ music and movies every day.",
    options: [
      "with",
      "at",
      "for"
    ],
    correctIndex: 0,
    explanation: "Usamos la preposición 'with' para indicar la compañía o el medio que acompaña la acción ('practicar con música y películas')."
  },
  {
    id: 4,
    context: "Comprensión de lectura corta",
    question: "Why does 'Let's Do It Together' use entertainment like series and webcomics?",
    options: [
      "Because grammar books are too expensive to print.",
      "Because students learn more naturally when connected to things they enjoy.",
      "Because students only want to play video games in class."
    ],
    correctIndex: 1,
    explanation: "Nuestra metodología se fundamenta en que el idioma se asimila mejor cuando se conecta con lo que apasiona al estudiante de forma natural y divertida."
  }
];

export const sampleSongs = [
  {
    id: "song-1",
    title: "Count on Me",
    artist: "Bruno Mars",
    theme: "Amistad y Apoyo Mutuo",
    difficulty: "Fácil (A1 - A2)",
    sampleLyricEn: "You can count on me like one, two, three / I'll be there...",
    sampleLyricEs: "Puedes contar conmigo como uno, dos, tres / Allí estaré...",
    keyVocabulary: ["Count on (Contar con alguien)", "Be there (Estar presente / apoyar)", "Find out (Descubrir)"]
  },
  {
    id: "song-2",
    title: "What a Wonderful World",
    artist: "Louis Armstrong",
    theme: "Apreciación y Esperanza",
    difficulty: "Intermedio (A2 - B1)",
    sampleLyricEn: "I see trees of green, red roses too / I see them bloom for me and you...",
    sampleLyricEs: "Veo árboles verdes, rosas rojas también / Las veo florecer para ti y para mí...",
    keyVocabulary: ["Bloom (Florecer)", "Wonderful (Maravilloso)", "Bright (Brillante / radiante)"]
  },
  {
    id: "song-3",
    title: "You've Got a Friend in Me",
    artist: "Randy Newman (Toy Story)",
    theme: "Lealtad y Superación de Obstáculos",
    difficulty: "Intermedio (B1)",
    sampleLyricEn: "When the road looks rough ahead / And you're miles and miles from your nice warm bed...",
    sampleLyricEs: "Cuando el camino se vea difícil adelante / Y estés a millas y millas de tu cama cálida...",
    keyVocabulary: ["Rough (Áspero / difícil)", "Ahead (Adelante / en el futuro)", "Miles away (A kilómetros de distancia)"]
  }
];

export const sampleSeriesScenes = [
  {
    id: "scene-1",
    show: "Stranger Things",
    level: "A2 - B1",
    phrase: "“Friends don't lie.”",
    context: "Eleven estableciendo la regla dorada de confianza con sus amigos.",
    grammarNote: "Presente simple en negativo ('don't + verbo base'). Una estructura elemental del ICFES."
  },
  {
    id: "scene-2",
    show: "Spider-Man: Into the Spider-Verse",
    level: "B1",
    phrase: "“It's a leap of faith. That's all it is, Miles.”",
    context: "Peter Parker animando a Miles Morales a dar el paso decisivo sin tener miedo a equivocarse.",
    grammarNote: "Modismo idiomático 'Leap of faith' (Salto de fe / confiar a pesar de la incertidumbre)."
  },
  {
    id: "scene-3",
    show: "Brooklyn Nine-Nine",
    level: "B1 - B2",
    phrase: "“Cool, cool, cool, no doubt, no doubt!”",
    context: "Jake Peralta expresando acuerdo enfático en lenguaje informal estadounidense.",
    grammarNote: "Uso de 'no doubt' (sin duda) para concordancia en diálogos orales fluidos."
  }
];
