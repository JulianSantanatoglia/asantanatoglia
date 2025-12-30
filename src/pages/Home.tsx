import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Separator } from '../components/Separator';
import { FloatingContact } from '../components/FloatingContact';

const insights = [
  { value: '12+', label: 'Años de experiencia' },
  { value: '45+', label: 'Proyectos realizados' },
  { value: '8.500', label: 'm² diseñados' },
  { value: '15', label: 'Obras construidas' },
];

const featuredProjects = projects.slice(0, 4);

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pattern-lines opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-charcoal mb-6 leading-tight"
          >
            Arquitectura
            <br />
            <span className="text-brass">como lenguaje</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mt-8"
          >
            Cada proyecto es una conversación entre espacio, luz y materialidad.
            Diseñamos experiencias arquitectónicas que trascienden lo funcional.
          </motion.p>
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Insights Section */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {insights.map((insight, index) => (
            <motion.div
              key={insight.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center p-6 bg-broken-white/50 rounded-lg border border-warm-gray/30"
            >
              <div className="text-4xl md:text-5xl font-serif text-brass mb-2">
                {insight.value}
              </div>
              <div className="text-sm text-charcoal/60 uppercase tracking-wider">
                {insight.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Featured Projects */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-12">
            Proyectos destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-warm-gray"
              >
                <Link to={`/proyectos/${project.slug}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-warm-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.location} · {project.year}</p>
                  </div>
                  <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors" />
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-charcoal/20 text-sm uppercase tracking-wider">
                      {project.coverImage.replace('/images/', '').replace('.jpg', '')}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* Manifesto Section */}
      <section className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-8">
            Manifiesto
          </h2>
          <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
            <p>
              La arquitectura no es solo construir espacios; es crear experiencias que
              transforman la forma en que habitamos el mundo. Cada proyecto nace de la
              observación atenta del lugar, del diálogo con quienes lo habitarán, y de
              la búsqueda constante de la armonía entre función y poesía.
            </p>
            <p>
              Creemos en la <strong className="text-charcoal">materialidad honesta</strong>, en la
              luz como elemento estructurante, y en el detalle como expresión de cuidado.
              Cada línea, cada encuentro, cada textura cuenta una historia.
            </p>
            <p>
              Nuestro proceso es colaborativo y reflexivo. Desde el primer trazo hasta
              la última terminación, cada decisión está pensada para crear espacios que
              perduren, que envejezcan con dignidad, y que mejoren la calidad de vida
              de quienes los habitan.
            </p>
          </div>
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      {/* CTA Section */}
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
            Cada proyecto es único. Hablemos sobre el tuyo.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-warm-white rounded-full hover:bg-brass transition-all duration-300 group"
          >
            <span>Tomemos un café</span>
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
