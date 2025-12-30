export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  category: 'Residencial' | 'Comercial' | 'Interiorismo' | 'Concursos';
  coverImage: string;
  description: string;
  tags: string[];
  gallery: string[];
  role?: string;
  challenge?: string;
  solution?: string;
  materials?: string[];
}

export const projects: Project[] = [
  {
    slug: 'casa-rio',
    title: 'Casa Río',
    location: 'Buenos Aires, Argentina',
    year: 2023,
    category: 'Residencial',
    coverImage: '/images/p1.jpg',
    description: 'Vivienda unifamiliar que dialoga con el entorno ribereño, integrando espacios fluidos y materiales locales. La propuesta busca la continuidad entre interior y exterior mediante grandes aberturas y terrazas escalonadas.',
    tags: ['Arquitectura', 'Sustentabilidad', 'Materialidad'],
    gallery: ['/images/p1.jpg', '/images/p1-2.jpg', '/images/p1-3.jpg', '/images/p1-4.jpg'],
    role: 'Arquitecto a cargo',
    challenge: 'Diseñar una vivienda que respete el entorno natural y maximice las vistas al río, cumpliendo con normativas estrictas de construcción en zona costera.',
    solution: 'Estructura elevada sobre pilotes, planta libre con núcleo de servicios central, y uso de materiales locales como madera y piedra. Sistema de captación de agua de lluvia y energía solar.',
    materials: ['Hormigón visto', 'Madera de eucalipto', 'Piedra laja', 'Acero corten']
  },
  {
    slug: 'oficinas-norte',
    title: 'Oficinas Norte',
    location: 'Córdoba, Argentina',
    year: 2024,
    category: 'Comercial',
    coverImage: '/images/p2.jpg',
    description: 'Complejo de oficinas corporativas con fachada ventilada y espacios de trabajo colaborativos. El diseño prioriza la iluminación natural y la eficiencia energética.',
    tags: ['Arquitectura Comercial', 'Eficiencia Energética'],
    gallery: ['/images/p2.jpg', '/images/p2-2.jpg', '/images/p2-3.jpg'],
    role: 'Arquitecto director',
    challenge: 'Crear un espacio de trabajo que fomente la colaboración y el bienestar, cumpliendo con certificaciones LEED.',
    solution: 'Diseño de doble altura en áreas comunes, fachada con control solar automatizado, y sistema de climatización por piso. Incorporación de espacios verdes interiores.',
    materials: ['Vidrio de alta eficiencia', 'Acero estructural', 'Aluminio anodizado', 'Maderas certificadas']
  },
  {
    slug: 'loft-palermo',
    title: 'Loft Palermo',
    location: 'Buenos Aires, Argentina',
    year: 2023,
    category: 'Interiorismo',
    coverImage: '/images/p3.jpg',
    description: 'Reformulación completa de un loft industrial en Palermo. Intervención que respeta la estructura original y añade elementos contemporáneos mediante mobiliario a medida y materiales nobles.',
    tags: ['Interiorismo', 'Rehabilitación'],
    gallery: ['/images/p3.jpg', '/images/p3-2.jpg', '/images/p3-3.jpg', '/images/p3-4.jpg', '/images/p3-5.jpg'],
    role: 'Arquitecto y director de arte',
    challenge: 'Mantener el carácter industrial del espacio mientras se crean zonas funcionales para una familia joven.',
    solution: 'División mediante muebles altos y paneles móviles, preservación de vigas y mampostería original, iluminación indirecta y directa combinada.',
    materials: ['Hierro forjado', 'Mármol travertino', 'Maderas macizas', 'Cemento alisado']
  },
  {
    slug: 'centro-cultural',
    title: 'Centro Cultural Sur',
    location: 'Rosario, Argentina',
    year: 2022,
    category: 'Concursos',
    coverImage: '/images/p4.jpg',
    description: 'Proyecto ganador del concurso nacional para un centro cultural en el sur de Rosario. Propuesta que integra espacios expositivos, auditorio y talleres en un volumen escultórico.',
    tags: ['Arquitectura Pública', 'Concurso'],
    gallery: ['/images/p4.jpg', '/images/p4-2.jpg', '/images/p4-3.jpg'],
    role: 'Arquitecto líder del equipo',
    challenge: 'Diseñar un equipamiento cultural que active el barrio y sea accesible para toda la comunidad.',
    solution: 'Planta libre flexible, fachada permeable que invita al ingreso, y uso de materiales de bajo mantenimiento. Integración de espacios exteriores para actividades al aire libre.',
    materials: ['Hormigón arquitectónico', 'Vidrio laminado', 'Acero inoxidable', 'Piedra reconstituida']
  },
  {
    slug: 'casa-patio',
    title: 'Casa Patio',
    location: 'Mendoza, Argentina',
    year: 2023,
    category: 'Residencial',
    coverImage: '/images/p5.jpg',
    description: 'Vivienda que organiza sus espacios en torno a un patio central, creando microclimas y permitiendo la ventilación cruzada. Diseño bioclimático adaptado al clima mendocino.',
    tags: ['Arquitectura Bioclimática', 'Patio Central'],
    gallery: ['/images/p5.jpg', '/images/p5-2.jpg', '/images/p5-3.jpg', '/images/p5-4.jpg'],
    role: 'Arquitecto a cargo',
    challenge: 'Maximizar el confort térmico en una zona con grandes amplitudes térmicas sin depender exclusivamente de sistemas mecánicos.',
    solution: 'Patio central como regulador térmico, muros de inercia térmica, aleros calculados para protección solar estival y captación invernal.',
    materials: ['Adobe', 'Piedra', 'Madera de algarrobo', 'Cerámicos artesanales']
  },
  {
    slug: 'restaurante-mar',
    title: 'Restaurante Mar',
    location: 'Mar del Plata, Argentina',
    year: 2024,
    category: 'Comercial',
    coverImage: '/images/p6.jpg',
    description: 'Intervención en un edificio histórico costero para albergar un restaurante de alta cocina. El diseño respeta la fachada original y crea un interior contemporáneo con vistas privilegiadas al mar.',
    tags: ['Restauración', 'Interiorismo Comercial'],
    gallery: ['/images/p6.jpg', '/images/p6-2.jpg', '/images/p6-3.jpg'],
    role: 'Arquitecto y director de arte',
    challenge: 'Equilibrar la preservación del patrimonio con las necesidades funcionales de un restaurante moderno.',
    solution: 'Restauración de fachada original, intervención mínima en estructura, diseño de mobiliario a medida y sistema de iluminación escénica.',
    materials: ['Mármol de Carrara', 'Latón', 'Maderas nobles', 'Vidrio soplado']
  },
  {
    slug: 'departamento-recoleta',
    title: 'Departamento Recoleta',
    location: 'Buenos Aires, Argentina',
    year: 2023,
    category: 'Interiorismo',
    coverImage: '/images/p7.jpg',
    description: 'Renovación completa de un departamento en un edificio de los años 40. Intervención que moderniza los espacios manteniendo la elegancia de la época, con carpinterías a medida y materiales de alta calidad.',
    tags: ['Interiorismo', 'Renovación'],
    gallery: ['/images/p7.jpg', '/images/p7-2.jpg', '/images/p7-3.jpg', '/images/p7-4.jpg'],
    role: 'Arquitecto y director de arte',
    challenge: 'Actualizar funcionalmente un espacio con limitaciones estructurales y mantener el carácter original del edificio.',
    solution: 'Reorganización de servicios, apertura de espacios, carpinterías de diseño y sistema de almacenamiento integrado.',
    materials: ['Mármol calacatta', 'Roble europeo', 'Latón pulido', 'Terrazzo']
  },
  {
    slug: 'torre-mixta',
    title: 'Torre Mixta',
    location: 'Buenos Aires, Argentina',
    year: 2024,
    category: 'Comercial',
    coverImage: '/images/p8.jpg',
    description: 'Edificio de uso mixto con oficinas, comercios y viviendas. La propuesta integra espacios públicos en planta baja y terrazas verdes, creando un hito urbano sostenible.',
    tags: ['Arquitectura Urbana', 'Uso Mixto'],
    gallery: ['/images/p8.jpg', '/images/p8-2.jpg', '/images/p8-3.jpg'],
    role: 'Arquitecto asociado',
    challenge: 'Diseñar un edificio de alta densidad que contribuya positivamente al tejido urbano y sea sostenible.',
    solution: 'Fachada con sistema de doble piel, espacios comunes generosos, y sistema de gestión de residuos y energía integrado.',
    materials: ['Hormigón prefabricado', 'Vidrio de control solar', 'Acero', 'Vegetación integrada']
  },
  {
    slug: 'casa-atelier',
    title: 'Casa Atelier',
    location: 'La Plata, Argentina',
    year: 2022,
    category: 'Residencial',
    coverImage: '/images/p9.jpg',
    description: 'Vivienda-taller para un artista. El proyecto integra el espacio de trabajo con el de vivienda, creando un flujo continuo y aprovechando la luz norte para el taller.',
    tags: ['Arquitectura', 'Taller'],
    gallery: ['/images/p9.jpg', '/images/p9-2.jpg', '/images/p9-3.jpg'],
    role: 'Arquitecto a cargo',
    challenge: 'Crear un espacio que funcione tanto como vivienda como taller, con requerimientos específicos de iluminación y ventilación.',
    solution: 'Planta en L que separa funciones, taller con iluminación cenital y lateral norte, sistema de ventilación natural forzada.',
    materials: ['Hormigón visto', 'Madera de pino', 'Chapa de zinc', 'Vidrio templado']
  },
  {
    slug: 'hotel-boutique',
    title: 'Hotel Boutique',
    location: 'Bariloche, Argentina',
    year: 2023,
    category: 'Comercial',
    coverImage: '/images/p10.jpg',
    description: 'Hotel boutique de 12 habitaciones en un entorno natural privilegiado. El diseño se integra con el paisaje mediante materiales locales y grandes ventanales que enmarcan las vistas.',
    tags: ['Hotelería', 'Arquitectura del Paisaje'],
    gallery: ['/images/p10.jpg', '/images/p10-2.jpg', '/images/p10-3.jpg', '/images/p10-4.jpg'],
    role: 'Arquitecto director',
    challenge: 'Minimizar el impacto ambiental y crear una experiencia única para los huéspedes respetando el entorno natural.',
    solution: 'Diseño en terrazas que sigue la topografía, uso de materiales locales, sistema de tratamiento de aguas y energía renovable.',
    materials: ['Piedra local', 'Madera de ciprés', 'Vidrio de baja emisividad', 'Lana de roca']
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(p => p.category === category);
};

export const categories: Project['category'][] = ['Residencial', 'Comercial', 'Interiorismo', 'Concursos'];
