import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../data/projects';
import type { Project } from '../data/projects';
import { Separator } from '../components/Separator';
import { FloatingContact } from '../components/FloatingContact';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Project['category'] | 'Todos'>('Todos');

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
            Proyectos
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl">
            Una selección de trabajos que representan nuestra visión sobre la arquitectura,
            el espacio y la materialidad.
          </p>
        </motion.div>

        <Separator className="my-12" />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group"
              >
                <Link to={`/proyectos/${project.slug}`}>
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-warm-gray mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-end p-6 text-warm-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div>
                        <h3 className="text-xl font-serif mb-1">{project.title}</h3>
                        <p className="text-xs opacity-90">{project.location} · {project.year}</p>
                      </div>
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-charcoal/20 text-xs uppercase tracking-wider">
                        {project.coverImage.replace('/images/', '').replace('.jpg', '')}
                      </span>
                    </div>
                    <motion.div
                      className="absolute top-4 right-4 px-2 py-1 bg-charcoal/80 text-warm-white text-xs uppercase tracking-wider rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                    >
                      {project.category}
                    </motion.div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg text-charcoal group-hover:text-brass transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-charcoal/60">{project.location}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <FloatingContact />
    </>
  );
};
