import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects, categories } from '../data/projects';
import type { Project } from '../data/projects';
import { Separator } from '../components/Separator';
import { FloatingContact } from '../components/FloatingContact';
import { ProjectModal } from '../components/ProjectModal';
import { BeforeAfter } from '../components/BeforeAfter';
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
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&q=80"
            alt="Arquitectura moderna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
        </div>
        <div className="absolute inset-0 pattern-lines opacity-20" />
        
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-warm-white mb-6 leading-tight drop-shadow-lg"
          >
            Arquitectura
            <br />
            <span className="text-brass">con propósito</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-warm-white/90 max-w-2xl mx-auto mt-8 mb-12 drop-shadow-md"
          >
            Transformo tus ideas en espacios donde realmente quieres vivir. Cada proyecto es una
            conversación contigo, donde la función se encuentra con la belleza y creamos algo único
            que realmente te representa.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            onClick={() => scrollToSection('proyectos')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brass text-charcoal rounded-full hover:bg-warm-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            <span>Ver mi trabajo</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
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
                className="group text-center p-8 bg-broken-white/50 rounded-lg border border-warm-gray/30 hover:border-brass/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-brass/10 group-hover:bg-brass/20 transition-colors">
                    <IconComponent size={24} className="text-brass" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-serif text-charcoal mb-2">
                  {insight.value}
                </div>
                <div className="text-sm text-charcoal/60 uppercase tracking-wider font-medium">
                  {insight.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Before After Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
              El antes y después
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              A veces las imágenes hablan más que las palabras. Desliza para ver cómo transformamos
              espacios y los convertimos en lugares que realmente quieres habitar.
            </p>
          </div>
          <BeforeAfter
            beforeImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=80"
            afterImage="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop&q=80"
            beforeLabel="Estado original"
            afterLabel="Proyecto finalizado"
            className="mb-8"
          />
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Manifesto Section */}
      <section className="container mx-auto px-6 py-20">
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
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal">
                Cómo trabajo
              </h2>
            </div>
            <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
              <p>
                Para mí, la arquitectura va más allá de construir espacios; es crear lugares
                donde realmente quieres estar. Cada proyecto nace de escucharte, de entender
                cómo vives y qué necesitas, y de encontrar ese punto perfecto entre lo que
                funciona y lo que te emociona.
              </p>
              <p>
                Creo en usar <strong className="text-charcoal font-semibold">materiales reales</strong>, que se vean
                y se sientan como lo que son. La luz natural es mi mejor aliada para hacer
                que un espacio se sienta vivo, y me obsesiono con los detalles porque sé
                que son esos pequeños toques los que hacen la diferencia.
              </p>
              <p>
                Trabajamos juntos desde el primer día. Tu proyecto es una conversación constante
                entre lo que imaginas y lo que podemos hacer realidad. Mi objetivo es crear
                espacios que no solo se vean bien hoy, sino que sigan siendo especiales
                dentro de muchos años.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Projects Section */}
      <section id="proyectos" className="container mx-auto px-6 py-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <FolderKanban size={32} className="text-brass" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal">
              Algunos de mis proyectos
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
            className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
              selectedCategory === 'Todos'
                ? 'bg-charcoal text-warm-white'
                : 'bg-broken-white text-charcoal/60 hover:text-charcoal hover:bg-warm-gray'
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
                selectedCategory === category
                  ? 'bg-charcoal text-warm-white'
                  : 'bg-broken-white text-charcoal/60 hover:text-charcoal hover:bg-warm-gray'
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
                  src={`https://images.unsplash.com/photo-${1600585154340 + index}?w=800&h=600&fit=crop&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-end p-6 text-warm-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    <div>
                      <h3 className="text-xl font-serif mb-1">{project.title}</h3>
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
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-charcoal/90 backdrop-blur-sm text-warm-white text-xs uppercase tracking-wider rounded-full border border-warm-white/20">
                  {project.category}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-charcoal group-hover:text-brass transition-colors">
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
      <section id="estudio" className="container mx-auto px-6 py-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Building2 size={36} className="text-brass" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal">
              Sobre mí
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
                  <div className="w-16 h-16 rounded-full bg-charcoal text-warm-white flex items-center justify-center font-serif text-xl group-hover:bg-brass transition-colors duration-300">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-2xl font-serif text-charcoal mb-3">{item.title}</h4>
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
                className="bg-broken-white/50 p-8 rounded-lg border border-warm-gray/30 hover:border-brass/50 transition-all duration-300 hover:shadow-lg"
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
      <section id="servicios" className="container mx-auto px-6 py-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={36} className="text-brass" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal">
              Lo que hacemos
            </h2>
          </div>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
            Te acompaño en todo el proceso, desde que tienes la primera idea hasta que estás
            viviendo en tu nuevo espacio. Me comprometo a hacer las cosas bien, cuidando cada
            detalle y pensando en cómo hacer tu proyecto más sostenible y eficiente.
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
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl md:text-5xl font-serif text-brass">
                    {service.number}
                  </span>
                  <Separator variant="line" className="flex-1" />
                </div>
              </div>
              <div className="md:col-span-9 space-y-6">
                <h3 className="text-3xl md:text-4xl font-serif text-charcoal">
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
          <div className="flex items-center gap-3 mb-6">
            <Mail size={36} className="text-brass" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal">
              Contacto
            </h2>
          </div>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
            ¿Tienes una idea en mente? Hablemos. Me encanta escuchar qué estás buscando y
            trabajar juntos para hacerlo realidad. Cada proyecto empieza con una conversación,
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
                      className="text-charcoal hover:text-brass transition-colors"
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
                      className="text-charcoal hover:text-brass transition-colors"
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
                      Buenos Aires, Argentina
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
                <h4 className="text-xl font-serif text-charcoal mb-4">Tomemos un café</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  Prefiero conocerte en persona. Si estás en Buenos Aires, podemos encontrarnos
                  en mi estudio o en algún lugar que te quede cómodo para charlar sobre tu
                  proyecto sin presión.
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
            className={`w-full px-4 py-3 bg-broken-white border ${
              errors.name ? 'border-red-500' : 'border-warm-gray'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-brass focus:border-transparent transition-all`}
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
          className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal text-warm-white rounded-full hover:bg-brass transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
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

