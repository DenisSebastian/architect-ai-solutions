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
      { value: 15, suffix: '+', label: 'Projects\nDelivered' },
      { value: 3, suffix: '', label: 'Advanced\nDegrees' },
      { value: 8, suffix: '+', label: 'Courses\nTaught' },
      { value: 50, suffix: 'K+', label: 'km² Analyzed' },
      { value: 95, suffix: '%', label: 'Client\nSatisfaction' },
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
          'Satellite image analysis, multispectral processing, and Google Earth Engine pipelines at scale. From raw pixel values to meaningful land cover classifications.',
      },
      {
        title: 'Deep Learning for Change Detection',
        description:
          'Custom CNN and transformer architectures for detecting land use change from multi-temporal satellite imagery. End-to-end pipelines from data ingestion to model deployment.',
      },
      {
        title: 'Territorial Intelligence',
        description:
          'Spatial analysis for public policy design, urban planning, and security assessment. Turning geospatial data into evidence-based decisions.',
      },
      {
        title: 'Geospatial Data Infrastructure',
        description:
          'End-to-end pipelines: collection, processing, modeling, and deployment of geospatial data. PostGIS, cloud-native rasters, and scalable ETL workflows.',
      },
      {
        title: 'Drone Mapping & Photogrammetry',
        description:
          'Aerial survey, 3D model reconstruction, orthomosaic generation, and digital elevation model production from UAV imagery.',
      },
      {
        title: 'Training & Capacity Building',
        description:
          'Workshops and university courses in GIS, Remote Sensing, and Spatial Data Science. Teaching 8+ courses with proven methodologies for technical and non-technical audiences.',
      },
    ],
  },
  work: {
    sectionNum: '03 / Work',
    title: 'Selected Work',
    description: 'Agentic AI systems applied to real territorial problems',
    featured: 'Featured Project',
    requestBtn: 'Request Case Study',
    projects: [
      {
        title: 'Land Use Change Detection',
        subtitle: 'Chilean Central Valley',
        description:
          'Deep learning pipeline for multi-temporal Sentinel-2 analysis. Detected 12,000+ ha of land cover transitions over 5 years using a U-Net architecture trained on labeled time-series data.',
      },
      {
        title: 'Urban Expansion Monitoring',
        subtitle: 'Santiago Metropolitan Area',
        description:
          'Google Earth Engine + ML classification for tracking urban sprawl and impervious surface growth across the Santiago metro region.',
      },
      {
        title: 'Territorial Security Analysis',
        subtitle: 'National Crime Intelligence',
        description:
          'Spatio-temporal crime modeling for public policy. Hexagonal grid density mapping with predictive hotspot analysis for law enforcement resource allocation.',
      },
      {
        title: 'Drone-Based 3D Terrain Reconstruction',
        subtitle: 'Coastal Erosion Monitoring',
        description:
          'High-resolution digital elevation models from UAV photogrammetry to monitor coastal erosion rates and predict shoreline change.',
      },
      {
        title: 'Environmental Change Monitoring',
        subtitle: 'Patagonia Ecosystem Health',
        description:
          'Multi-source satellite data fusion for monitoring vegetation health, water body extent, and fire scar extent across Patagonian ecosystems.',
      },
    ],
  },
  tech: {
    sectionNum: '04 / Tech',
    title: 'Tools & Technologies',
    description: 'The full stack of an AI territorial intelligence architect',
    categories: ['Core Languages', 'AI / ML', 'Geospatial', 'Infrastructure'],
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
