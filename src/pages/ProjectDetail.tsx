import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectBySlug, projects } from '../data/projects';
import { Separator } from '../components/Separator';
import { FloatingContact } from '../components/FloatingContact';

export const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-serif text-charcoal mb-4">Proyecto no encontrado</h1>
        <Link to="/proyectos" className="text-brass hover:underline">
          Volver a proyectos
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <>
      {/* Hero Cover */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-warm-gray flex items-center justify-center">
          <span className="text-charcoal/20 text-sm uppercase tracking-wider">
            {project.coverImage.replace('/images/', '').replace('.jpg', '')}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 pb-16 text-warm-white"
        >
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6"
            >
              {project.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-6 text-sm md:text-base"
            >
              <div>
                <span className="opacity-70">Ubicación</span>
                <div className="font-medium">{project.location}</div>
              </div>
              <div>
                <span className="opacity-70">Año</span>
                <div className="font-medium">{project.year}</div>
              </div>
              {project.role && (
                <div>
                  <span className="opacity-70">Rol</span>
                  <div className="font-medium">{project.role}</div>
                </div>
              )}
              <div>
                <span className="opacity-70">Categoría</span>
                <div className="font-medium">{project.category}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
            {project.description}
          </p>
        </motion.section>

        <Separator className="my-16" />

        {/* Challenge / Solution / Materials */}
        {(project.challenge || project.solution || project.materials) && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-16 space-y-12"
          >
            {project.challenge && (
              <div>
                <h3 className="text-2xl font-serif text-charcoal mb-4">Desafío</h3>
                <p className="text-charcoal/70 leading-relaxed">{project.challenge}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <h3 className="text-2xl font-serif text-charcoal mb-4">Solución</h3>
                <p className="text-charcoal/70 leading-relaxed">{project.solution}</p>
              </div>
            )}
            {project.materials && project.materials.length > 0 && (
              <div>
                <h3 className="text-2xl font-serif text-charcoal mb-4">Materiales</h3>
                <div className="flex flex-wrap gap-3">
                  {project.materials.map((material, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-broken-white text-charcoal/70 rounded-full text-sm border border-warm-gray/50"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.section>
        )}

        <Separator className="my-16" />

        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-12">Galería</h2>
          <div className="space-y-6">
            {project.gallery.map((image, index) => {
              const isFullWidth = index % 3 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={isFullWidth ? 'w-full' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}
                >
                  {isFullWidth ? (
                    <div className="relative aspect-[16/9] bg-warm-gray rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-charcoal/20 text-xs uppercase tracking-wider">
                          {image.replace('/images/', '').replace('.jpg', '')}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] bg-warm-gray rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-charcoal/20 text-xs uppercase tracking-wider">
                          {image.replace('/images/', '').replace('.jpg', '')}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <Separator className="my-16" />

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-charcoal text-warm-white rounded-full text-sm uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        <Separator className="my-16" />

        {/* Next Project */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-charcoal/60 uppercase tracking-wider mb-6">Siguiente proyecto</p>
          <Link
            to={`/proyectos/${nextProject.slug}`}
            className="group inline-block"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h3 className="text-3xl md:text-4xl font-serif text-charcoal group-hover:text-brass transition-colors mb-2">
              {nextProject.title}
            </h3>
            <p className="text-charcoal/60 group-hover:text-charcoal transition-colors">
              {nextProject.location} · {nextProject.year}
            </p>
            <motion.div
              className="mt-4 h-px bg-cement max-w-xs mx-auto group-hover:bg-brass transition-colors"
              whileHover={{ scaleX: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.section>
      </div>

      <FloatingContact />
    </>
  );
};

