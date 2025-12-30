import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'pill' | 'text';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'inline-block transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'px-8 py-3 bg-charcoal text-warm-white hover:bg-brass hover:translate-y-[-2px]',
    secondary: 'px-8 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-white',
    pill: 'px-6 py-2 rounded-full border border-cement text-charcoal hover:border-brass hover:text-brass',
    text: 'text-charcoal hover:text-brass underline-offset-4 hover:underline',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
}

