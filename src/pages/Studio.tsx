import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Separator } from '../components/Separator';
import { FloatingContact } from '../components/FloatingContact';

const timeline = [
  {
    step: '01',
    title: 'Briefing',
    description: 'Reunión inicial para comprender necesidades, expectativas y contexto del proyecto. Análisis del sitio y normativas aplicables.',
  },
  {
    step: '02',
    title: 'Concepto',
    description: 'Desarrollo de la idea rectora del proyecto. Exploración de alternativas formales y espaciales que respondan al programa y al lugar.',
  },
  {
    step: '03',
    title: 'Anteproyecto',
    description: 'Definición de la propuesta arquitectónica. Planos, maquetas y visualizaciones que materializan el concepto inicial.',
  },
  {
    step: '04',
    title: 'Documentación',
    description: 'Elaboración de planos técnicos, especificaciones y detalles constructivos. Coordinación con especialistas y consultores.',
  },
  {
    step: '05',
    title: 'Obra',
    description: 'Dirección de obra y supervisión de la ejecución. Acompañamiento durante todo el proceso constructivo hasta la entrega final.',
  },
];

const testimonials = [
  {
    quote: 'Alejandro logró entender perfectamente nuestra visión y transformarla en un espacio que superó todas nuestras expectativas. Su atención al detalle y su compromiso con el proyecto fueron excepcionales.',
    author: 'María González',
    role: 'Cliente, Casa Río',
  },
  {
    quote: 'Trabajar con Alejandro fue una experiencia profesional y enriquecedora. Su capacidad para resolver problemas complejos y su visión arquitectónica hacen que cada proyecto sea único.',
    author: 'Carlos Martínez',
    role: 'Colaborador, Oficinas Norte',
  },
  {
    quote: 'La sensibilidad con la que aborda cada proyecto, respetando el contexto y buscando siempre la mejor solución, es lo que distingue su trabajo. Recomiendo su estudio sin dudarlo.',
    author: 'Ana Fernández',
    role: 'Cliente, Loft Palermo',
  },
];

export const Studio = () => {
  return (
    <>
      {/* Hero */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
            Estudio
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
            Un espacio de creación donde la arquitectura se encuentra con la artesanía,
            donde cada proyecto es una oportunidad para explorar nuevas formas de habitar.
          </p>
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Bio Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] bg-warm-gray rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-charcoal/20 text-sm uppercase tracking-wider">
                Foto de perfil
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal">
              Alejandro Santanatoglia
            </h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                Arquitecto con más de 12 años de experiencia en diseño arquitectónico,
                interiorismo y dirección de obra. Formado en la Universidad de Buenos Aires,
                mi práctica se centra en la creación de espacios que dialogan con su contexto
                y responden a las necesidades contemporáneas.
              </p>
              <p>
                Creo en la arquitectura como un proceso colaborativo, donde cada proyecto es
                una oportunidad para explorar nuevas formas de relación entre el espacio, la
                luz y la materialidad. Mi enfoque combina la precisión técnica con la sensibilidad
                artística, buscando siempre el equilibrio entre función y poesía.
              </p>
              <p>
                He trabajado en proyectos residenciales, comerciales y de espacio público,
                siempre con un compromiso hacia la sostenibilidad y la calidad constructiva.
                Cada obra es una oportunidad para aprender, experimentar y crecer como profesional.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Process Timeline */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-12 text-center">
            Proceso de trabajo
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-charcoal text-warm-white flex items-center justify-center font-serif text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-serif text-charcoal mb-3">{item.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-12 text-center">
            Testimonios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-broken-white/50 p-6 rounded-lg border border-warm-gray/30"
              >
                <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-medium text-charcoal">{testimonial.author}</div>
                  <div className="text-sm text-charcoal/60">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* CTA */}
      <section className="container mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Cada proyecto es una oportunidad para crear algo único. Hablemos sobre el tuyo.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-warm-white rounded-full hover:bg-brass transition-all duration-300 group"
          >
            <span>Contactar</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </section>

      <FloatingContact />
    </>
  );
};

