import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'estudio', label: 'Sobre mí' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <footer className="relative border-t border-warm-gray/20 bg-broken-white/10 backdrop-blur-sm">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brass/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <h3 className="text-2xl font-display text-charcoal mb-4 relative">
              <span className="title-accent">Alejandro Santanatoglia</span>
            </h3>
            <p className="text-charcoal/60 mb-6 leading-relaxed text-sm md:text-base">
              Estudio de arquitectura dedicado a crear espacios que transforman 
              la forma en que vivís. Cada proyecto es una oportunidad de hacer 
              algo único y especial.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/arq.alejandrosantanatoglia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brass/20 hover:bg-brass/30 flex items-center justify-center text-brass transition-all duration-300 cursor-pointer group"
                aria-label="Instagram"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brass/20 hover:bg-brass/30 flex items-center justify-center text-brass transition-all duration-300 cursor-pointer group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-3"
          >
            <h4 className="text-architectural text-brass/80 mb-6 tracking-[0.15em] text-xs">NAVEGACIÓN</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-charcoal/70 hover:text-brass transition-colors text-sm cursor-pointer group flex items-center gap-2"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-5"
          >
            <h4 className="text-architectural text-brass/80 mb-6 tracking-[0.15em] text-xs">CONTACTO</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hola@alejandrosantanatoglia.com"
                  className="flex items-start gap-3 text-charcoal/70 hover:text-brass transition-colors cursor-pointer group"
                >
                  <Mail size={18} className="text-brass/60 mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <span className="text-sm">hola@alejandrosantanatoglia.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5491112345678"
                  className="flex items-start gap-3 text-charcoal/70 hover:text-brass transition-colors cursor-pointer group"
                >
                  <Phone size={18} className="text-brass/60 mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <span className="text-sm">+54 9 11 1234-5678</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-charcoal/70">
                  <MapPin size={18} className="text-brass/60 mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm">Mar del Plata, Argentina</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-warm-gray/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs text-charcoal/50 text-center md:text-left"
            >
              © {currentYear} Alejandro Santanatoglia. Todos los derechos reservados.
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-charcoal/60 hover:text-brass transition-colors cursor-pointer text-xs uppercase tracking-wider"
              aria-label="Volver arriba"
            >
              <span>Volver arriba</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" strokeWidth={2} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

