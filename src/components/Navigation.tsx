import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, FolderKanban, Building2, Briefcase, Mail, Instagram, Linkedin, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'proyectos', label: 'Proyectos', icon: FolderKanban },
  { id: 'estudio', label: 'Sobre mí', icon: Building2 },
  { id: 'servicios', label: 'Lo que hago', icon: Briefcase },
  { id: 'contacto', label: 'Contacto', icon: Mail },
];

const socialLinks = [
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden p-2 text-charcoal hover:text-brass transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </motion.div>
      </button>

      {/* Desktop rail navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-20 z-40 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative"
                aria-label={item.label}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center gap-1"
                >
                  <motion.div
                    className="text-charcoal group-hover:text-brass transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon size={20} strokeWidth={1.5} />
                  </motion.div>
                  <motion.span
                    className="text-[10px] uppercase tracking-wider text-charcoal/60 group-hover:text-charcoal transition-colors"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {item.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-brass"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </button>
            );
          })}
          
          <div className="w-px h-12 bg-cement my-4" />
          
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + index) * 0.1, duration: 0.4 }}
                className="text-charcoal/60 hover:text-brass transition-colors"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={18} strokeWidth={1.5} />
              </motion.a>
            );
          })}
        </motion.div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-charcoal/95 z-40 md:hidden"
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-warm-white z-50 md:hidden shadow-2xl"
            >
              <div className="p-8 pt-20 flex flex-col gap-8">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`block text-2xl font-serif ${
                          isActive ? 'text-brass' : 'text-charcoal'
                        } hover:text-brass transition-colors`}
                      >
                        {item.label}
                      </button>
                      {isActive && (
                        <motion.div
                          className="mt-2 h-px bg-brass"
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </motion.div>
                  );
                })}
                
                <div className="pt-8 border-t border-cement">
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-charcoal/60 hover:text-brass transition-colors"
                          aria-label={social.label}
                        >
                          <IconComponent size={18} strokeWidth={1.5} />
                          <span>{social.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

