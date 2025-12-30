import { motion } from 'framer-motion';

export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToTop} className="inline-block">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <span className="font-handwritten text-2xl md:text-3xl text-charcoal tracking-wide">
          Alejandro Santanatoglia
        </span>
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-[1px] bg-brass origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </button>
  );
};
