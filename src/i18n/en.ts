export const en = {
  meta: {
    title: 'Denis Berroeta — AI Solutions Architect Applied to Territory',
    description:
      'Architecting AI solutions that decode territory. Satellite imagery, geospatial data, and deep learning for actionable territorial intelligence.',
  },
  nav: {
    about: 'About',
    services: 'Services',
    work: 'Work',
    tech: 'Tech',
    blog: 'Blog',
    contact: 'Contact',
  },
  hero: {
    tag: 'AI Solutions Architect',
    tagline1: 'Decoding Territory',
    tagline2: 'with AI',
    description:
      'Architecting agentic AI systems that transform satellite imagery and geospatial data into actionable territorial intelligence — from field sensors to policy decisions.',
    cta1: 'Explore My Work',
    cta2: 'Get In Touch',
    scroll: 'Scroll to explore',
  },
  about: {
    sectionNum: '01 / About',
    title: 'Who I Am',
    subtitle: 'AI · Territory · Intelligence',
    bio1: 'I architect AI solutions that decode territory. With a PhD candidate background in Data Science and 7+ years at CIT-UAI (Center for Territorial Intelligence), I bridge the gap between satellite sensors and policy decisions.',
    bio2pre: "I'm not a data scientist who happens to work with maps — I'm a ",
    bio2highlight: 'territorial intelligence architect',
    bio2post:
      ' who designs end-to-end AI systems that connect earth observation data to actionable insights for governments, organizations, and communities.',
    bio3: 'Specializing in agentic AI for territorial problems, deep learning for change detection, geospatial data pipelines, and spatial analysis for public policy. Based in the beautiful coastal town of Isla Negra, Chile.',
    stats: [
      { value: 7, suffix: '+', label: 'Years\nExperience' },
      { value: 15, suffix: '+', label: 'Research' },
      { value: 50, suffix: '+', label: 'Geospatial\nWorkflows Built' },
      { value: 3, suffix: '', label: 'Advanced\nDegrees' },
      { value: 8, suffix: '+', label: 'Courses\nTaught' },
      { value: 300, suffix: '+', label: 'Students\nReached' },
    ],
  },
  services: {
    sectionNum: '02 / Services',
    title: 'What I Do',
    description: 'Connecting territorial problems with AI solutions',
    items: [
      {
        title: 'Remote Sensing & Earth Observation',
        description:
          'Satellite and multi-source imagery transformed into territorial indicators for environmental monitoring, mining and industrial operations, agronomy, and urban growth analysis.',
      },
      {
        title: 'Artificial Intelligence for Geospatial Modeling',
        description:
          'Geospatial foundation models and custom AI workflows for land-use and land-cover classification, change detection, segmentation, and task-specific models when the problem requires it.',
      },
      {
        title: 'Agentic AI Systems for Territorial Solutions',
        description:
          'End-to-end AI agent systems that translate territorial needs into integrated solutions, connecting data, models, spatial reasoning, automation, and decision workflows.',
      },
      {
        title: 'Territorial Intelligence',
        description:
          'Development of socioeconomic, environmental, and crime-related territorial indicators through spatial analysis workflows for public policy and evidence-based decision-making.',
      },
      {
        title: 'Geospatial Data Infrastructure',
        description:
          'Secure, scalable, and optimized geospatial data infrastructure for spatial AI agents, analytical platforms, and production workflows that need reliable performance.',
      },
      {
        title: 'Training & Capacity Building',
        description:
          'Applied training programs in geoanalysis, territorial indicators, criminological spatial analysis, remote sensing, and spatial data science, tailored to teams, institutions, and individual needs.',
      },
    ],
  },
  work: {
    sectionNum: '03 / Work',
    title: 'Selected Work',
    description:
      'Applied geospatial AI, territorial indicators, and decision-support systems drawn from current research and production work',
    featured: 'Featured Project',
    requestBtn: 'Read Project Summary',
    projects: [
      {
        title: 'MiroFish-AHP',
        subtitle: 'Multi-agent wind siting in Northern Chile',
        description:
          'A territorial decision-support pilot that combines AHP, agent profiles, deliberation rounds, scenario building, and future raster suitability outputs for wind energy planning in Antofagasta.',
      },
      {
        title: 'Geospatial Foundation Models',
        subtitle: 'Territorial change detection in Chile',
        description:
          'A doctoral research agenda for transferable change detection across Chile, connecting foundation models, semantic transitions, peatland monitoring, and conversational geospatial analysis.',
      },
      {
        title: 'Geo-LLM',
        subtitle: 'Local Chilean address geocoding pipeline',
        description:
          'A local geocoding prototype that combines deterministic preprocessing, LLM address parsing, PostGIS validation, street-name similarity, batch execution, and map monitoring.',
      },
      {
        title: 'Natural Language Spatial SQL',
        subtitle: 'Running locally with DuckDB and Ollama',
        description:
          'A local-first prototype that translates plain-language spatial questions into executable SQL, runs them with DuckDB, and returns table and map-ready results without cloud dependencies.',
      },
      {
        title: 'Security Indicators',
        subtitle: 'Territorial wellbeing in Chile',
        description:
          'A responsible indicator architecture that transforms police records into comparable territorial security scores using classification, normalization, inverse scoring, and spatial anonymization.',
      },
    ],
  },
  tech: {
    sectionNum: '04 / Tech',
    title: 'Tools & Technologies',
    description: 'The full stack of an AI territorial intelligence architect',
    categories: ['Core Languages', 'Agentic AI', 'Geospatial', 'Infrastructure'],
  },
  blog: {
    sectionNum: '05 / Blog',
    title: 'Latest Insights',
    viewAll: 'View All Posts',
    readMore: 'Read More',
    locale: 'en-US',
  },
  contact: {
    sectionNum: '06 / Contact',
    title: "Let's Work Together",
    description:
      'Have a territorial challenge that needs AI? Let\'s decode it together.',
    formTitle: 'Get In Touch',
    location: "Isla Negra, Chile — 33°26'S, 71°41'W",
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      subject: 'Subject',
      subjectPlaceholder: "What's this about?",
      message: 'Message',
      messagePlaceholder: 'Tell me about your territorial challenge...',
      send: 'Send Message',
      sending: 'Sending...',
      sent: 'Message Sent!',
      tryAgain: 'Try Again',
      error:
        'Something went wrong. Please email me directly at denisberroeta@gmail.com',
    },
  },
  footer: {
    tagline: 'AI Solutions Architect Applied to Territory',
    builtWith: 'Built with',
  },
  notFound: {
    label: '404 Error',
    message: "This territory hasn't been mapped yet.",
    backBtn: 'Return to Base',
  },
} as const;

export type Translations = typeof en;
