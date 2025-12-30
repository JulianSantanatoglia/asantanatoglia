export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  category: 'Residencial' | 'Comercial' | 'Interiorismo';
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
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80',
    description: 'Vivienda unifamiliar que dialoga con el entorno ribereño, integrando espacios fluidos y materiales locales. La propuesta busca la continuidad entre interior y exterior mediante grandes aberturas y terrazas escalonadas.',
    tags: ['Arquitectura', 'Sustentabilidad', 'Materialidad'],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=80'
    ],
    role: 'Arquitecto a cargo',
    challenge: 'Diseñar una vivienda que respete el entorno natural y maximice las vistas al río, cumpliendo con normativas estrictas de construcción en zona costera.',
    solution: 'Estructura elevada sobre pilotes, planta libre con núcleo de servicios central, y uso de materiales locales como madera y piedra. Sistema de captación de agua de lluvia y energía solar.',
    materials: ['Hormigón visto', 'Madera de eucalipto', 'Piedra laja', 'Acero corten']
  },
  {
    slug: 'departamento-recoleta',
    title: 'Departamento Recoleta',
    location: 'Buenos Aires, Argentina',
    year: 2023,
    category: 'Interiorismo',
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=80',
    description: 'Renovación completa de un departamento en un edificio de los años 40. Intervención que moderniza los espacios manteniendo la elegancia de la época, con carpinterías a medida y materiales de alta calidad.',
    tags: ['Interiorismo', 'Renovación'],
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=80'
    ],
    role: 'Arquitecto y director de arte',
    challenge: 'Actualizar funcionalmente un espacio con limitaciones estructurales y mantener el carácter original del edificio.',
    solution: 'Reorganización de servicios, apertura de espacios, carpinterías de diseño y sistema de almacenamiento integrado.',
    materials: ['Mármol calacatta', 'Roble europeo', 'Latón pulido', 'Terrazzo']
  },
  {
    slug: 'oficinas-norte',
    title: 'Oficinas Norte',
    location: 'Córdoba, Argentina',
    year: 2024,
    category: 'Comercial',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=80',
    description: 'Complejo de oficinas corporativas con fachada ventilada y espacios de trabajo colaborativos. El diseño prioriza la iluminación natural y la eficiencia energética.',
    tags: ['Arquitectura Comercial', 'Eficiencia Energética'],
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop&q=80'
    ],
    role: 'Arquitecto director',
    challenge: 'Crear un espacio de trabajo que fomente la colaboración y el bienestar, cumpliendo con certificaciones LEED.',
    solution: 'Diseño de doble altura en áreas comunes, fachada con control solar automatizado, y sistema de climatización por piso. Incorporación de espacios verdes interiores.',
    materials: ['Vidrio de alta eficiencia', 'Acero estructural', 'Aluminio anodizado', 'Maderas certificadas']
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(p => p.category === category);
};

export const categories: Project['category'][] = ['Residencial', 'Comercial', 'Interiorismo'];
