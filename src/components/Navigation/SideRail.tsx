import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Inicio', icon: '⌂' },
  { path: '/proyectos', label: 'Proyectos', icon: '◉' },
  { path: '/estudio', label: 'Estudio', icon: '◐' },
  { path: '/servicios', label: 'Servicios', icon: '◑' },
  { path: '/contacto', label: 'Contacto', icon: '◒' },
];

const socialLinks = [
  { href: '#', label: 'Instagram', icon: '↗' },
  { href: '#', label: 'LinkedIn', icon: '↗' },
];

export default function SideRail() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed left-0 top-0 h-full z-50 flex flex-col justify-between py-12 px-6"
      aria-label="Navegación principal"
    >
      <div className="flex flex-col gap-8">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-serif transition-transform duration-300 group-hover:translate-x-1">
                  {item.icon}
                </span>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm font-medium tracking-wider uppercase"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-brass"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cement hover:text-charcoal transition-colors duration-300 flex items-center gap-2 group"
            aria-label={social.label}
          >
            <span className="group-hover:translate-x-0.5 transition-transform">{social.icon}</span>
            <span className="hidden group-hover:inline text-xs">{social.label}</span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

