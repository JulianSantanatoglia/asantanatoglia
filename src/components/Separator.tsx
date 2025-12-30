import { motion } from 'framer-motion';

interface SeparatorProps {
  className?: string;
  variant?: 'line' | 'coordinates' | 'number';
  number?: number;
}

export const Separator = ({ className = '', variant = 'line', number }: SeparatorProps) => {
  if (variant === 'coordinates') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="flex-1 h-px bg-cement" />
        <span className="text-xs text-cement font-mono">0,0</span>
        <div className="flex-1 h-px bg-cement" />
      </div>
    );
  }

  if (variant === 'number' && number !== undefined) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="flex-1 h-px bg-cement" />
        <span className="text-xs text-cement font-mono w-8 text-center">{number.toString().padStart(2, '0')}</span>
        <div className="flex-1 h-px bg-cement" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`h-px bg-cement origin-left ${className}`}
    />
  );
};
