import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Separator } from '../components/Separator';
import { FloatingContact } from '../components/FloatingContact';

const services = [
  {
    number: '01',
    title: 'Diseño arquitectónico integral',
    description: 'Desarrollo completo del proyecto desde el concepto inicial hasta la documentación ejecutiva. Incluye estudios preliminares, anteproyecto, proyecto ejecutivo y dirección de obra.',
    details: [
      'Análisis de sitio y normativas',
      'Desarrollo conceptual y alternativas',
      'Planos técnicos y documentación',
      'Dirección y supervisión de obra',
      'Coordinación con especialistas',
    ],
  },
  {
    number: '02',
    title: 'Reformas y rehabilitación',
    description: 'Intervención en edificios existentes con respeto por el patrimonio y la estructura original. Modernización funcional y estética manteniendo el carácter del lugar.',
    details: [
      'Análisis estructural y diagnóstico',
      'Propuestas de intervención',
      'Rehabilitación de fachadas',
      'Actualización de instalaciones',
      'Mejora de eficiencia energética',
    ],
  },
  {
    number: '03',
    title: 'Interiorismo y dirección de arte',
    description: 'Diseño de espacios interiores con atención al detalle, la materialidad y la iluminación. Creación de ambientes que reflejan la identidad de quienes los habitan.',
    details: [
      'Diseño de espacios interiores',
      'Selección de materiales y acabados',
      'Mobiliario a medida',
      'Iluminación y ambientación',
      'Dirección de arte y styling',
    ],
  },
  {
    number: '04',
    title: 'Visualización 3D y documentación',
    description: 'Representación arquitectónica mediante renders fotorrealistas, maquetas virtuales y animaciones. Documentación técnica precisa y visualizaciones para presentación.',
    details: [
      'Renders fotorrealistas',
      'Maquetas virtuales 3D',
      'Animaciones arquitectónicas',
      'Planos técnicos digitales',
      'Presentaciones ejecutivas',
    ],
  },
];

export const Services = () => {
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
            Servicios
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
            Ofrecemos servicios integrales de arquitectura, desde el diseño conceptual
            hasta la ejecución, siempre con un enfoque en la calidad, la sostenibilidad
            y la atención al detalle.
          </p>
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Services List */}
      <section className="container mx-auto px-6 py-16">
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
                <h2 className="text-3xl md:text-4xl font-serif text-charcoal">
                  {service.title}
                </h2>
                <p className="text-lg text-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {service.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start gap-3"
                    >
                      <span className="text-brass mt-1">—</span>
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

      {/* Process CTA */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal">
            Proceso personalizado
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Cada proyecto es único y requiere un enfoque adaptado. Trabajamos de cerca
            con nuestros clientes para entender sus necesidades y desarrollar soluciones
            arquitectónicas que superen sus expectativas.
          </p>
          <p className="text-charcoal/70">
            Desde la primera consulta hasta la entrega final, acompañamos cada etapa
            del proceso con dedicación y profesionalismo.
          </p>
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
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Contactanos para una consulta inicial sin compromiso.
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

