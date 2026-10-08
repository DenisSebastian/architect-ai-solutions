import type { Translations } from './en';

export const es: Translations = {
  meta: {
    title: 'Denis Berroeta — Arquitecto de Soluciones de IA Aplicadas al Territorio',
    description:
      'Diseño soluciones de IA que decodifican el territorio. Datos territoriales, modelos y agentes inteligentes para transformar información compleja en decisiones.',
  },
  nav: {
    about: 'Sobre mí',
    services: 'Servicios',
    work: 'Trabajo',
    tech: 'Tecnología',
    blog: 'Blog',
    paperReview: 'Reseñas de artículos',
    contact: 'Contacto',
  },
  hero: {
    tag: 'Arquitecto de Soluciones de IA',
    tagline1: 'Decodificando el territorio',
    tagline2: 'con IA',
    description:
      'Diseño sistemas de IA que transforman datos territoriales de múltiples fuentes en información accionable, desde la integración de los datos hasta las decisiones de política pública.',
    cta1: 'Explorar mi trabajo',
    cta2: 'Contáctame',
    scroll: 'Desplázate para explorar',
  },
  about: {
    sectionNum: '01 / Sobre mí',
    title: 'Quién soy',
    subtitle: 'IA · Territorio · Inteligencia',
    bio1: 'Me gusta diseñar soluciones de inteligencia artificial para problemas territoriales. Tengo un Máster en Data Science y un Magíster en Inteligencia Artificial, soy estudiante del Doctorado en Ciencia de Datos y llevo más de 7 años en el CIT-UAI (Centro de Inteligencia Territorial), trabajando donde se cruzan los datos, los modelos y las decisiones.',
    bio2pre: 'Abordo cada problema como lo haría un arquitecto: ',
    bio2highlight: 'pensando el sistema completo',
    bio2post:
      ', desde la integración de datos diversos hasta los modelos y agentes que los transforman en información útil para gobiernos, organizaciones y comunidades.',
    bio3: 'Trabajo con IA agéntica, aprendizaje profundo, flujos de datos geoespaciales y análisis espacial, en ámbitos tan distintos como el medio ambiente, las ciudades, la industria o la política pública. Todo esto lo hago desde la costa, en Isla Negra, cerca del mar.',
    stats: [
      { value: 7, suffix: '+', label: 'Años de\nexperiencia' },
      { value: 15, suffix: '+', label: 'Investigación' },
      { value: 50, suffix: '+', label: 'Flujos geoespaciales\nconstruidos' },
      { value: 3, suffix: '', label: 'Grados\navanzados' },
      { value: 8, suffix: '+', label: 'Cursos\ndictados' },
      { value: 300, suffix: '+', label: 'Estudiantes\nalcanzados' },
    ],
  },
  services: {
    sectionNum: '02 / Servicios',
    title: 'Qué hago',
    description: 'Conecto problemas territoriales con soluciones de IA',
    items: [
      {
        title: 'Teledetección y observación de la Tierra',
        description:
          'Imágenes satelitales y multifuente transformadas en indicadores territoriales para monitoreo ambiental, operaciones mineras e industriales, agronomía y análisis de crecimiento urbano.',
      },
      {
        title: 'Inteligencia artificial para modelación geoespacial',
        description:
          'Modelos fundacionales geoespaciales y flujos de IA personalizados para clasificación de uso y cobertura de suelo, detección de cambios, segmentación y modelos específicos cuando el problema lo requiere.',
      },
      {
        title: 'Sistemas de IA agéntica para soluciones territoriales',
        description:
          'Sistemas de agentes de IA de punta a punta que traducen necesidades territoriales en soluciones integradas, conectando datos, modelos, razonamiento espacial, automatización y flujos de decisión.',
      },
      {
        title: 'Inteligencia territorial',
        description:
          'Desarrollo de indicadores territoriales socioeconómicos, ambientales y de seguridad mediante flujos de análisis espacial para política pública y toma de decisiones basada en evidencia.',
      },
      {
        title: 'Infraestructura de datos geoespaciales',
        description:
          'Infraestructura geoespacial segura, escalable y optimizada para agentes de IA espacial, plataformas analíticas y flujos de producción que necesitan rendimiento confiable.',
      },
      {
        title: 'Formación y desarrollo de capacidades',
        description:
          'Programas aplicados de formación en geoanálisis, indicadores territoriales, análisis espacial criminológico, teledetección y ciencia de datos espaciales, adaptados a equipos, instituciones y personas.',
      },
    ],
  },
  work: {
    sectionNum: '03 / Trabajo',
    title: 'Trabajo seleccionado',
    description:
      'IA geoespacial aplicada, indicadores territoriales y sistemas de apoyo a la decisión a partir de investigación actual y trabajo en producción',
    featured: 'Proyecto destacado',
    requestBtn: 'Leer resumen del proyecto',
    projects: [
      {
        title: 'MiroFish-AHP',
        subtitle: 'Localización eólica multiagente en el norte de Chile',
        description:
          'Un piloto de apoyo a la decisión territorial que combina AHP, perfiles de agentes, rondas de deliberación, construcción de escenarios y salidas raster futuras de aptitud para planificación eólica en Antofagasta.',
      },
      {
        title: 'Laya · Solicitudes de autopista',
        subtitle: 'Modelo de decisión local con revisión humana',
        description:
          'Un prototipo para derivar solicitudes de autopista con un modelo local ajustado, un flujo de decisión explícito, umbrales de confianza y evaluación en 1.000 casos reservados.',
      },
      {
        title: 'Modelos fundacionales geoespaciales',
        subtitle: 'Detección de cambio territorial en Chile',
        description:
          'Una agenda doctoral para detección de cambios transferible en Chile, conectando modelos fundacionales, transiciones semánticas, monitoreo de turberas y análisis geoespacial conversacional.',
      },
      {
        title: 'Geo-LLM',
        subtitle: 'Flujo local de geocodificación de direcciones chilenas',
        description:
          'Un prototipo local de geocodificación que combina preprocesamiento determinístico, análisis estructurado de direcciones con LLM, validación PostGIS, similitud de nombres de calles, ejecución por lotes y monitoreo cartográfico.',
      },
      {
        title: 'SQL espacial en lenguaje natural',
        subtitle: 'Ejecución local con DuckDB y Ollama',
        description:
          'Un prototipo local que traduce preguntas espaciales en lenguaje natural a SQL ejecutable, las corre con DuckDB y retorna resultados listos para tabla y mapa sin dependencias en la nube.',
      },
      {
        title: 'Indicadores de seguridad',
        subtitle: 'Bienestar territorial en Chile',
        description:
          'Una arquitectura responsable de indicadores que transforma registros policiales en puntajes territoriales comparables de seguridad usando clasificación, normalización, puntuación inversa y anonimato espacial.',
      },
    ],
  },
  tech: {
    sectionNum: '04 / Tecnología',
    title: 'Herramientas y tecnologías',
    description: 'El conjunto de herramientas de un arquitecto de inteligencia territorial con IA',
    categories: ['Lenguajes base', 'IA agéntica', 'Geoespacial', 'Infraestructura'],
  },
  blog: {
    sectionNum: '05 / Blog',
    title: 'Últimas ideas',
    viewAll: 'Ver todas las publicaciones',
    readMore: 'Leer más',
    locale: 'es-CL',
  },
  contact: {
    sectionNum: '06 / Contacto',
    title: 'Trabajemos juntos',
    description:
      '¿Tienes un desafío territorial que necesita IA? Decodifiquémoslo juntos.',
    formTitle: 'Contáctame',
    location: "Isla Negra, Chile — 33°26'S, 71°41'W",
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Email',
      emailPlaceholder: 'tu@ejemplo.com',
      subject: 'Asunto',
      subjectPlaceholder: '¿De qué se trata?',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre tu desafío territorial...',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      sent: 'Mensaje enviado',
      tryAgain: 'Intentar otra vez',
      error:
        'Algo salió mal. Por favor escríbeme directamente a denisberroeta@gmail.com',
    },
  },
  footer: {
    tagline: 'Arquitecto de Soluciones de IA Aplicadas al Territorio',
    builtWith: 'Construido con',
  },
  pages: {
    blog: {
      title: 'Blog',
      label: 'Escrituras técnicas',
      description:
        'Análisis en profundidad sobre IA, teledetección, ciencia de datos geoespaciales e inteligencia territorial.',
      backHome: 'Volver al inicio',
      read: 'Leer',
    },
    paperReview: {
      title: 'Reseñas de artículos',
      label: 'Notas de investigación',
      description:
        'Reseñas concisas de artículos relevantes para IA geoespacial, analítica urbana y sistemas de decisión territorial.',
      readReview: 'Leer reseña',
    },
    post: {
      allPosts: 'Todos los posts',
    },
  },
  notFound: {
    label: 'Error 404',
    message: 'Este territorio aún no ha sido mapeado.',
    backBtn: 'Volver a la base',
  },
} as const;
