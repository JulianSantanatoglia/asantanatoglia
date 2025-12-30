import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export const FloatingContact = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-8 right-8 z-30"
    >
      <button
        onClick={scrollToContact}
        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-warm-white rounded-full hover:bg-brass transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Mail size={18} className="group-hover:scale-110 transition-transform" />
        <motion.span
          className="text-sm font-medium"
          whileHover={{ x: -2 }}
        >
          Contacto
        </motion.span>
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight size={16} />
        </motion.div>
      </button>
    </motion.div>
  );
};
