import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/projects';
import { Separator } from './Separator';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/95 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 bg-warm-white rounded-lg z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="fixed top-6 right-6 z-10 p-2 text-charcoal hover:text-brass transition-colors"
              aria-label="Cerrar"
            >
              <span className="text-3xl">×</span>
            </button>

            <div className="container mx-auto px-6 py-16 max-w-5xl">
              {/* Hero Cover */}
              <section className="relative min-h-[50vh] flex items-end overflow-hidden rounded-lg mb-12">
                <div className="absolute inset-0 bg-warm-gray flex items-center justify-center">
                  <span className="text-charcoal/20 text-sm uppercase tracking-wider">
                    {project.coverImage.replace('/images/', '').replace('.jpg', '')}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent" />
                <div className="relative z-10 w-full pb-16 text-warm-white">
                  <h1 className="text-4xl md:text-6xl font-serif mb-6">
                    {project.title}
                  </h1>
                  <div className="flex flex-wrap gap-6 text-sm md:text-base">
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
                  </div>
                </div>
              </section>

              {/* Description */}
              <section className="mb-16">
                <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
                  {project.description}
                </p>
              </section>

              <Separator className="my-16" />

              {/* Challenge / Solution / Materials */}
              {(project.challenge || project.solution || project.materials) && (
                <section className="mb-16 space-y-12">
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
                </section>
              )}

              <Separator className="my-16" />

              {/* Gallery */}
              <section className="mb-16">
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
              </section>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <section className="mb-16">
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
                </section>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

