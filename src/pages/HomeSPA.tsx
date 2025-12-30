import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects, categories } from '../data/projects';
import type { Project } from '../data/projects';
import { Separator } from '../components/Separator';
import { FloatingContact } from '../components/FloatingContact';
import { ProjectModal } from '../components/ProjectModal';
import { BeforeAfter } from '../components/BeforeAfter';
import { Footer } from '../components/Footer';
import { Award, MapPin, Calendar, Square, ArrowRight, CheckCircle2, Mail, Phone, MapPin as MapPinIcon, Coffee, Sparkles, Ruler, FolderKanban, Building2, Briefcase, Send } from 'lucide-react';

const insights = [
  { value: '12+', label: 'Años de experiencia', icon: Award },
  { value: '45+', label: 'Proyectos realizados', icon: FolderKanban },
  { value: '8.500', label: 'm² diseñados', icon: Square },
  { value: '15', label: 'Obras construidas', icon: Building2 },
];

const timeline = [
  {
    step: '01',
    title: 'Nos conocemos',
    description: 'Charlamos sobre lo que necesitás, qué te gusta y cómo vivís. Analizo el lugar y veo qué es posible hacer según las normativas.',
  },
  {
    step: '02',
    title: 'La idea',
    description: 'Desarrollo la propuesta inicial. Te muestro diferentes opciones y exploramos juntos qué dirección tomar para que el proyecto sea perfecto para vos.',
  },
  {
    step: '03',
    title: 'Los planos',
    description: 'Definimos la propuesta final. Te muestro planos, renders y maquetas para que veas exactamente cómo va a quedar antes de empezar.',
  },
  {
    step: '04',
    title: 'Los detalles',
    description: 'Preparo todos los planos técnicos y especificaciones. Coordino con los especialistas necesarios para que todo esté perfecto.',
  },
  {
    step: '05',
    title: 'La construcción',
    description: 'Acompaño todo el proceso de obra. Estoy ahí para asegurarme de que todo se haga como debe ser, hasta que te entrego las llaves.',
  },
];

const testimonials = [
  {
    quote: 'Alejandro entendió perfectamente lo que queríamos y lo transformó en algo que superó todas nuestras expectativas. Se preocupó por cada detalle y estuvo presente en todo momento. No podríamos estar más contentos.',
    author: 'María González',
    role: 'Cliente, Casa Río',
  },
  {
    quote: 'Trabajar con Alejandro fue genial. Tiene una forma única de resolver problemas y siempre encuentra la mejor solución. Cada proyecto con él es diferente y especial.',
    author: 'Carlos Martínez',
    role: 'Colaborador, Oficinas Norte',
  },
  {
    quote: 'Lo que más me gusta de Alejandro es cómo respeta el lugar y siempre busca la mejor opción. Su trabajo se nota en cada detalle. Lo recomiendo sin dudarlo.',
    author: 'Ana Fernández',
    role: 'Cliente, Loft Palermo',
  },
];

const services = [
  {
    number: '01',
    title: 'Proyecto completo',
    description: 'Te acompaño desde la primera idea hasta que estás viviendo en tu nuevo espacio. Incluye todo: desde los primeros bocetos hasta la supervisión de la obra.',
    details: [
      'Análisis del lugar y normativas',
      'Desarrollo de la propuesta',
      'Planos técnicos completos',
      'Supervisión durante la obra',
      'Coordinación con todos los especialistas',
    ],
  },
  {
    number: '02',
    title: 'Reformas y renovaciones',
    description: 'Transformo espacios existentes respetando lo que ya funciona. Modernizo sin perder el carácter del lugar, haciendo que se sienta nuevo pero familiar.',
    details: [
      'Análisis de la estructura',
      'Propuestas de transformación',
      'Renovación de fachadas',
      'Actualización de instalaciones',
      'Mejora de eficiencia energética',
    ],
  },
  {
    number: '03',
    title: 'Diseño de interiores',
    description: 'Creo ambientes que realmente te representan. Me encargo de cada detalle: desde los materiales hasta la iluminación, para que tu casa se sienta como tuya.',
    details: [
      'Diseño de espacios interiores',
      'Selección de materiales y acabados',
      'Muebles a medida',
      'Iluminación y ambiente',
      'Dirección de arte y decoración',
    ],
  },
  {
    number: '04',
    title: 'Visualizaciones 3D',
    description: 'Te muestro cómo va a quedar antes de empezar. Hago renders realistas y maquetas virtuales para que veas exactamente cómo será tu proyecto.',
    details: [
      'Renders fotorrealistas',
      'Maquetas virtuales 3D',
      'Recorridos virtuales',
      'Planos técnicos digitales',
      'Presentaciones para aprobaciones',
    ],
  },
];

export const HomeSPA = () => {
  const [selectedCategory, setSelectedCategory] = useState<Project['category'] | 'Todos'>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&q=80"
            alt="Arquitectura moderna"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(2px)' }}
          />
          <div className="absolute inset-0 bg-warm-white/80" />
        </div>
        <div className="absolute inset-0 pattern-lines opacity-20" />
        
        {/* Architectural Silhouettes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="architectural-silhouette building-silhouette" style={{ left: '5%', bottom: '-50px', transform: 'rotate(-2deg)' }}></div>
          <div className="architectural-silhouette building-silhouette-2" style={{ right: '8%', bottom: '-30px', transform: 'rotate(3deg)' }}></div>
          <div className="architectural-silhouette building-silhouette" style={{ left: '50%', bottom: '-80px', transform: 'translateX(-50%) rotate(1deg)', opacity: 0.06 }}></div>
        </div>
        
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-architectural text-brass/70 mb-6 tracking-[0.15em] text-sm"
          >
            ALEJANDRO SANTANATOGLIA
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display text-charcoal mb-8 leading-tight drop-shadow-lg"
          >
            <span className="block mb-2">Estudio de</span>
            <span className="text-brass relative inline-block">
              Arquitectura
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-0.5 bg-brass"
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-charcoal/90 max-w-2xl mx-auto mb-10 drop-shadow-md leading-relaxed"
          >
            Transformo espacios que mejoran tu calidad de vida, donde cada detalle está pensado 
            para que te sientas cómodo, inspirado y en casa.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            onClick={() => scrollToSection('proyectos')}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-brass text-warm-white font-semibold shadow-2xl hover:shadow-brass/50 transition-all duration-300 overflow-hidden cursor-pointer"
            style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
          >
            <motion.div
              className="absolute inset-0 bg-charcoal"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-warm-white transition-colors">Ver mi trabajo</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
          </motion.button>
        </motion.div>
      </section>

      {/* Insights Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {insights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <motion.div
                key={insight.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group text-center p-6 md:p-8 bg-broken-white/20 rounded-lg border border-warm-gray/20 hover:border-brass/40 transition-all duration-300 hover:shadow-xl hover:shadow-brass/10"
              >
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="p-2 md:p-3 rounded-full bg-brass/20 group-hover:bg-brass/30 transition-colors">
                    <IconComponent size={20} className="md:w-6 md:h-6 text-brass" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="text-3xl md:text-5xl lg:text-6xl font-display text-charcoal mb-2 md:mb-3 font-bold relative">
                  {insight.value}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 md:w-12 h-0.5 bg-brass"></div>
                </div>
                <div className="text-[10px] md:text-xs text-charcoal/60 uppercase tracking-[0.15em] font-semibold architectural-accent leading-tight">
                  {insight.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Before After Section */}
      <section className="container mx-auto px-6 py-20 relative">
        {/* Architectural Silhouettes */}
        <div className="absolute -top-40 left-0 w-full h-80 overflow-hidden pointer-events-none">
          <div className="architectural-silhouette building-silhouette" style={{ left: '10%', bottom: '0', transform: 'rotate(-3deg)', opacity: 0.08 }}></div>
          <div className="architectural-silhouette building-silhouette-2" style={{ right: '15%', bottom: '20px', transform: 'rotate(2deg)', opacity: 0.06 }}></div>
        </div>
        {/* Geometric decorative elements */}
        <div className="absolute -top-32 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-20 right-10 w-32 h-32 border border-charcoal/10 rounded-full"></div>
          <div className="absolute top-10 right-32 w-24 h-24 border border-charcoal/10 rotate-45"></div>
          <div className="absolute top-40 left-20 w-40 h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent"></div>
        </div>
        <div className="absolute -bottom-32 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute bottom-20 left-10 w-28 h-28 border border-charcoal/10 rounded-lg rotate-12"></div>
          <div className="absolute bottom-10 left-40 w-36 h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12 relative">
            <div className="text-architectural text-brass/60 mb-2 tracking-[0.2em]">TRANSFORMACIONES</div>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-4 relative inline-block">
              <span className="title-accent">El antes y después</span>
            </h2>
            <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
              A veces las imágenes hablan más que las palabras. Desliza para ver cómo transformamos
              espacios que mejoran la calidad de vida de quienes los habitan. Cada proyecto es una 
              historia de renovación que cambió la forma de vivir de una familia.
            </p>
          </div>
          <BeforeAfter
            beforeImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=1200&fit=crop&q=80"
            afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=1200&fit=crop&q=80"
            beforeLabel="Estado original"
            afterLabel="Proyecto finalizado"
            className="mb-8"
          />
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Manifesto Section */}
      <section className="container mx-auto px-6 py-20 relative">
        {/* Geometric decorative elements */}
        <div className="absolute -top-32 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-10 left-20 w-36 h-36 border border-charcoal/5 rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-charcoal/5 rotate-45"></div>
          <div className="absolute top-20 right-40 w-48 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>
        </div>
        <div className="absolute -bottom-32 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute bottom-20 right-10 w-32 h-32 border border-charcoal/5 rounded-lg rotate-12"></div>
          <div className="absolute bottom-10 left-32 w-40 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&q=80"
              alt="Arquitectura contemporánea"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={28} className="text-brass" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-display text-charcoal">
                Cómo trabajo
              </h2>
            </div>
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
              <p>
                Para mí, la arquitectura va más allá de construir espacios; es crear lugares
                donde realmente querés estar. Cada proyecto nace de escucharte, de entender
                cómo vivís y qué necesitás, y de encontrar ese punto perfecto entre lo que
                funciona y lo que te emociona.
              </p>
              <p>
                Creo en usar <strong className="text-charcoal font-semibold">materiales reales</strong>, que se vean
                y se sientan como lo que son. La luz natural es mi mejor aliada para hacer
                que un espacio se sienta vivo y mejore tu bienestar diario. Me obsesiono con los 
                detalles porque sé que son esos pequeños toques los que transforman cómo vivís 
                en tu casa.
              </p>
              <p>
                Trabajamos juntos desde el primer día. Tu proyecto es una conversación constante
                entre lo que imaginás y lo que podemos hacer realidad. Mi objetivo es crear
                espacios que no solo se vean bien hoy, sino que mejoren tu calidad de vida
                y sigan siendo especiales dentro de muchos años.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Why Renovate Section */}
      <section className="container mx-auto px-6 py-20 relative">
        {/* Geometric decorative elements */}
        <div className="absolute -top-32 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-16 right-20 w-40 h-40 border border-charcoal/5 rounded-full"></div>
          <div className="absolute top-8 left-32 w-28 h-28 border border-charcoal/5 rotate-45"></div>
          <div className="absolute top-36 left-10 w-52 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>
        </div>
        <div className="absolute -bottom-32 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute bottom-24 left-20 w-36 h-36 border border-charcoal/5 rounded-lg rotate-12"></div>
          <div className="absolute bottom-12 right-32 w-44 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16 relative">
            <div className="text-architectural text-brass/60 mb-2 tracking-[0.2em]">BENEFICIOS</div>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-6 relative inline-block">
              <span className="title-accent">¿Por qué renovar tu casa?</span>
            </h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
              Tu hogar es más que cuatro paredes. Es donde empezás y terminás cada día. 
              Un espacio bien diseñado no solo se ve mejor, sino que transforma cómo vivís.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-broken-white/20 p-8 rounded-lg border border-warm-gray/20 hover:border-brass/40 transition-all duration-300 hover:shadow-xl hover:shadow-brass/10"
            >
              <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center mb-6">
                <Sparkles size={24} className="text-brass" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display text-charcoal mb-4">Mejora tu bienestar</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Espacios con buena iluminación natural, ventilación adecuada y materiales que respiran 
                mejoran tu estado de ánimo, reducen el estrés y aumentan tu energía diaria.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-broken-white/20 p-8 rounded-lg border border-warm-gray/20 hover:border-brass/40 transition-all duration-300 hover:shadow-xl hover:shadow-brass/10"
            >
              <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center mb-6">
                <Ruler size={24} className="text-brass" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display text-charcoal mb-4">Aprovechá mejor el espacio</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Un diseño inteligente hace que cada metro cuadrado funcione. Más almacenamiento, 
                mejor flujo entre ambientes y espacios que se adaptan a tu vida actual.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-broken-white/20 p-8 rounded-lg border border-warm-gray/20 hover:border-brass/40 transition-all duration-300 hover:shadow-xl hover:shadow-brass/10"
            >
              <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center mb-6">
                <CheckCircle2 size={24} className="text-brass" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display text-charcoal mb-4">Ahorrá energía y dinero</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Instalaciones modernas, aislación térmica adecuada y sistemas eficientes reducen 
                tus facturas de luz y gas hasta en un 40%, mientras cuidás el planeta.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-broken-white/20 p-8 rounded-lg border border-warm-gray/20 hover:border-brass/40 transition-all duration-300 hover:shadow-xl hover:shadow-brass/10"
            >
              <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center mb-6">
                <Building2 size={24} className="text-brass" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display text-charcoal mb-4">Aumentá el valor</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Una renovación bien planificada puede aumentar el valor de tu propiedad entre 
                un 15% y 30%. Es una inversión que se paga sola y sigue creciendo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-broken-white/20 p-8 rounded-lg border border-warm-gray/20 hover:border-brass/40 transition-all duration-300 hover:shadow-xl hover:shadow-brass/10"
            >
              <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center mb-6">
                <Coffee size={24} className="text-brass" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display text-charcoal mb-4">Viví como querés</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Tu casa debe reflejar tu personalidad y adaptarse a tu estilo de vida. 
                Un espacio diseñado para vos mejora tu rutina y hace que cada día sea más placentero.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-broken-white/20 p-8 rounded-lg border border-warm-gray/20 hover:border-brass/40 transition-all duration-300 hover:shadow-xl hover:shadow-brass/10"
            >
              <div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center mb-6">
                <Award size={24} className="text-brass" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display text-charcoal mb-4">Calidad que perdura</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Materiales de primera calidad y un diseño pensado a largo plazo significan 
                menos mantenimiento, menos problemas y más tranquilidad para vos y tu familia.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-gradient-to-r from-brass/20 to-warm-gray/30 p-12 rounded-lg border border-brass/30 text-center"
          >
            <h3 className="text-4xl md:text-5xl font-display text-charcoal mb-6 relative inline-block">
              <span className="title-accent">No esperes a que tu casa te limite</span>
            </h3>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Cada día que pasa es un día menos disfrutando de un espacio que realmente te representa. 
              Empezá a vivir en el hogar que merecés. Una conversación puede cambiar todo.
            </p>
            <button
              onClick={() => scrollToSection('contacto')}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-brass text-warm-white font-semibold shadow-2xl hover:shadow-brass/50 transition-all duration-300 overflow-hidden cursor-pointer"
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              <motion.div
                className="absolute inset-0 bg-brass"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 group-hover:text-charcoal transition-colors">Hablemos de tu proyecto</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Projects Section */}
      <section id="proyectos" className="container mx-auto px-6 py-20 scroll-mt-24 relative">
        {/* Architectural Silhouettes */}
        <div className="absolute -top-40 right-0 w-full h-80 overflow-hidden pointer-events-none">
          <div className="architectural-silhouette building-silhouette" style={{ right: '8%', bottom: '0', transform: 'rotate(3deg)', opacity: 0.08 }}></div>
          <div className="architectural-silhouette building-silhouette-2" style={{ left: '12%', bottom: '30px', transform: 'rotate(-2deg)', opacity: 0.06 }}></div>
        </div>
        {/* Geometric decorative elements */}
        <div className="absolute -top-32 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 border border-charcoal/5 rounded-full"></div>
          <div className="absolute top-8 right-24 w-24 h-24 border border-charcoal/5 rotate-45"></div>
          <div className="absolute top-40 right-10 w-40 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>
        </div>
        <div className="absolute -bottom-32 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute bottom-16 right-20 w-28 h-28 border border-charcoal/5 rounded-lg rotate-12"></div>
          <div className="absolute bottom-8 left-40 w-48 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4 relative">
            <div className="text-architectural text-brass/60 absolute -top-6 left-0 tracking-[0.2em]">PORTFOLIO</div>
            <div className="w-1 h-12 bg-brass"></div>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal relative">
              <span className="title-accent">Algunos de mis proyectos</span>
            </h2>
          </div>
          <p className="text-lg text-charcoal/70 max-w-3xl">
            Cada proyecto cuenta una historia diferente. Aquí puedes ver algunos de los trabajos
            que más me han emocionado, donde logramos crear espacios que realmente transforman
            la forma en que las personas viven.
          </p>
        </motion.div>

        <Separator className="my-12" />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory('Todos')}
            className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === 'Todos'
                ? 'bg-brass text-warm-white'
                : 'bg-broken-white/20 text-charcoal/70 hover:text-charcoal hover:bg-warm-gray/30'
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-brass text-warm-white'
                  : 'bg-broken-white/20 text-charcoal/70 hover:text-charcoal hover:bg-warm-gray/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-warm-gray mb-4 group/image">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-end p-6 text-warm-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    <div>
                      <h3 className="text-xl font-display mb-1">{project.title}</h3>
                      <div className="flex items-center gap-2 text-xs opacity-90">
                        <MapPin size={12} />
                        <span>{project.location}</span>
                        <span>·</span>
                        <Calendar size={12} />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-brass/90 backdrop-blur-sm text-warm-white text-xs uppercase tracking-wider rounded-full border border-brass/30">
                  {project.category}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-lg text-charcoal group-hover:text-brass transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-charcoal/60">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Studio Section */}
      <section id="estudio" className="container mx-auto px-6 py-20 scroll-mt-24 relative">
        {/* Architectural Silhouettes */}
        <div className="absolute -top-40 left-0 w-full h-80 overflow-hidden pointer-events-none">
          <div className="architectural-silhouette building-silhouette-2" style={{ left: '5%', bottom: '10px', transform: 'rotate(-1deg)', opacity: 0.08 }}></div>
          <div className="architectural-silhouette building-silhouette" style={{ right: '10%', bottom: '0', transform: 'rotate(2deg)', opacity: 0.06 }}></div>
        </div>
        {/* Geometric decorative elements */}
        <div className="absolute -top-32 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-12 right-16 w-36 h-36 border border-charcoal/5 rounded-full"></div>
          <div className="absolute top-28 left-24 w-24 h-24 border border-charcoal/5 rotate-45"></div>
          <div className="absolute top-16 left-10 w-44 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>
        </div>
        <div className="absolute -bottom-32 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute bottom-20 left-16 w-32 h-32 border border-charcoal/5 rounded-lg rotate-12"></div>
          <div className="absolute bottom-10 right-32 w-40 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-4 mb-6 relative">
            <div className="text-architectural text-brass/60 absolute -top-6 left-0 tracking-[0.2em]">ESTUDIO</div>
            <div className="w-1 h-16 bg-brass"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal relative">
              <span className="title-accent">Sobre mí</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
            Soy Alejandro, y desde hace más de 12 años me dedico a crear espacios que realmente
            importan. Mi estudio es el lugar donde tus ideas se convierten en realidad, donde
            cada proyecto es una oportunidad de hacer algo único y especial.
          </p>
        </motion.div>

        <Separator className="my-16" />

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop&q=80"
              alt="Alejandro Santanatoglia"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-3xl md:text-4xl font-serif text-charcoal">
                Alejandro Santanatoglia
              </h3>
            </div>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                Llevo más de 12 años diseñando espacios que realmente funcionan. Me especializo
                en proyectos completos, desde la idea inicial hasta que te entregamos las llaves,
                pasando por el diseño de interiores y la supervisión de cada detalle en obra.
                Estudié en la Universidad de Buenos Aires, pero lo que realmente me define es
                cómo trabajo contigo para crear algo que realmente te represente.
              </p>
              <p>
                Para mí, cada proyecto es una colaboración. Tu visión + mi experiencia = algo
                único. Me encanta encontrar ese equilibrio entre lo que necesitas, lo que quieres
                y lo que realmente funciona. Combino la parte técnica (que es importante) con
                la sensibilidad para crear espacios que no solo se ven bien, sino que se sienten
                bien.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Ruler size={28} className="text-brass" strokeWidth={1.5} />
            <h3 className="text-3xl md:text-4xl font-serif text-charcoal text-center">
              Cómo trabajamos juntos
            </h3>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col md:flex-row gap-6 items-start group"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-brass text-warm-white flex items-center justify-center font-display text-2xl font-bold group-hover:bg-brass/80 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110 relative">
                    {item.step}
                    <div className="absolute inset-0 rounded-full border-2 border-brass/20 group-hover:border-brass/40 transition-colors"></div>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-2xl md:text-3xl font-display text-charcoal mb-3 relative architectural-accent">{item.title}</h4>
                  <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award size={28} className="text-brass" strokeWidth={1.5} />
            <h3 className="text-3xl md:text-4xl font-serif text-charcoal text-center">
              Lo que dicen mis clientes
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-broken-white/20 p-8 rounded-lg border border-warm-gray/20 hover:border-brass/40 transition-all duration-300 hover:shadow-xl hover:shadow-brass/10"
              >
                <div className="mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} size={14} className="text-brass fill-brass" />
                    ))}
                  </div>
                </div>
                <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-warm-gray/30">
                  <div className="font-semibold text-charcoal mb-1">{testimonial.author}</div>
                  <div className="text-sm text-charcoal/60">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Services Section */}
      <section id="servicios" className="container mx-auto px-6 py-20 scroll-mt-24 relative">
        {/* Geometric decorative elements */}
        <div className="absolute -top-32 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-20 left-20 w-28 h-28 border border-charcoal/5 rounded-full"></div>
          <div className="absolute top-8 right-20 w-32 h-32 border border-charcoal/5 rotate-45"></div>
          <div className="absolute top-36 right-10 w-48 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>
        </div>
        <div className="absolute -bottom-32 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute bottom-16 right-16 w-36 h-36 border border-charcoal/5 rounded-lg rotate-12"></div>
          <div className="absolute bottom-8 left-32 w-44 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-4 mb-6 relative">
            <div className="text-architectural text-brass/60 absolute -top-6 left-0 tracking-[0.2em]">SERVICIOS</div>
            <div className="w-1 h-16 bg-brass"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal relative">
              <span className="title-accent">Lo que hacemos</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
            Tu casa puede ser mucho más de lo que es hoy. Te acompaño en todo el proceso, desde que 
            tenés la primera idea hasta que estás viviendo en tu nuevo espacio. Cada detalle está 
            pensado para mejorar tu calidad de vida, hacerte ahorrar energía y crear un lugar donde 
            realmente querés estar todos los días.
          </p>
        </motion.div>

        <Separator className="my-16" />

        <div className="max-w-5xl mx-auto space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-4 mb-4 relative">
                  <span className="text-6xl md:text-7xl font-display text-brass font-bold relative">
                    {service.number}
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-brass/30"></div>
                  </span>
                  <Separator variant="line" className="flex-1" />
                </div>
              </div>
              <div className="md:col-span-9 space-y-6">
                <h3 className="text-3xl md:text-4xl font-display text-charcoal relative architectural-accent">
                  {service.title}
                </h3>
                <p className="text-lg text-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {service.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={18} className="text-brass mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-charcoal/70">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Contact Section */}
      <section id="contacto" className="container mx-auto px-6 py-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-4 mb-6 relative">
            <div className="text-architectural text-brass/60 absolute -top-6 left-0 tracking-[0.2em]">CONECTEMOS</div>
            <div className="w-1 h-16 bg-brass"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal relative">
              <span className="title-accent">Contacto</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
            ¿Tu casa ya no te representa? ¿Sentís que podrías vivir mejor? Hablemos. Me encanta 
            escuchar qué estás buscando y trabajar juntos para transformar tu espacio en un lugar 
            que realmente mejore tu día a día. Cada proyecto empieza con una conversación, 
            y esa conversación puede empezar ahora mismo.
          </p>
        </motion.div>

        <Separator className="my-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif text-charcoal mb-6">Dónde encontrarme</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-brass/10">
                    <Mail size={20} className="text-brass" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm text-charcoal/60 uppercase tracking-wider mb-2">
                      Email
                    </div>
                    <a
                      href="mailto:hola@alejandrosantanatoglia.com"
                      className="text-charcoal hover:text-brass transition-colors cursor-pointer"
                    >
                      hola@alejandrosantanatoglia.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-brass/10">
                    <Phone size={20} className="text-brass" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm text-charcoal/60 uppercase tracking-wider mb-2">
                      Teléfono
                    </div>
                    <a
                      href="tel:+5491112345678"
                      className="text-charcoal hover:text-brass transition-colors cursor-pointer"
                    >
                      +54 9 11 1234-5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-brass/10">
                    <MapPinIcon size={20} className="text-brass" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm text-charcoal/60 uppercase tracking-wider mb-2">
                      Estudio
                    </div>
                    <p className="text-charcoal">
                      Mar del Plata, Argentina
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator variant="line" />

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-brass/10">
                <Coffee size={20} className="text-brass" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl font-display text-charcoal mb-4">Hablemos de tu proyecto</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  Cada proyecto comienza con una conversación. Me encanta escuchar tus ideas, 
                  entender tus necesidades y trabajar juntos para crear algo único. Estoy en Mar del Plata 
                  y también trabajo con clientes de toda la región. Tu visión es el punto de partida 
                  de algo extraordinario.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>

      <FloatingContact />
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
      <Footer />
    </>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-serif text-charcoal mb-6">Escribime</h3>
      
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-brass/10 border border-brass/30 rounded-lg text-charcoal"
        >
          <p className="font-medium">¡Mensaje enviado!</p>
          <p className="text-sm text-charcoal/70 mt-1">
            Te responderé a la brevedad.
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-charcoal/70 uppercase tracking-wider mb-2"
          >
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`w-full px-4 py-3 bg-broken-white/20 border ${
              errors.name ? 'border-red-500' : 'border-warm-gray/30'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-brass focus:border-transparent transition-all text-charcoal`}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm text-charcoal/70 uppercase tracking-wider mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full px-4 py-3 bg-broken-white border ${
              errors.email ? 'border-red-500' : 'border-warm-gray'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-brass focus:border-transparent transition-all`}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm text-charcoal/70 uppercase tracking-wider mb-2"
          >
            Mensaje *
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={6}
            className={`w-full px-4 py-3 bg-broken-white border ${
              errors.message ? 'border-red-500' : 'border-warm-gray'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-brass focus:border-transparent transition-all resize-none`}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-brass text-warm-white rounded-full hover:bg-brass/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium"
        >
          {isSubmitting ? (
            <>
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <span>Enviar mensaje</span>
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

