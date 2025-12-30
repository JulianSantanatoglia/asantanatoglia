import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfter = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes',
  afterLabel = 'Después',
  className = '',
}: BeforeAfterProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeImageRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isTouchRef = useRef(false);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    
    // Actualizar directamente el DOM para respuesta inmediata
    if (beforeImageRef.current && sliderRef.current) {
      beforeImageRef.current.style.clipPath = `inset(0 ${100 - clampedPercentage}% 0 0)`;
      sliderRef.current.style.left = `${clampedPercentage}%`;
    }
    
    // Actualizar el estado para mantener sincronización
    setSliderPosition(clampedPercentage);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || isTouchRef.current) return;
    
    // Cancelar frame anterior si existe
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    // Usar requestAnimationFrame para suavidad en desktop
    animationFrameRef.current = requestAnimationFrame(() => {
      updateSliderPosition(e.clientX);
    });
  }, [isDragging, updateSliderPosition]);

  const handleMouseDown = () => {
    setIsDragging(true);
    isTouchRef.current = false;
  };

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    isTouchRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    isTouchRef.current = true;
    setIsDragging(true);
    if (e.touches.length > 0) {
      // Actualización inmediata sin requestAnimationFrame para mobile
      updateSliderPosition(e.touches[0].clientX);
    }
  }, [updateSliderPosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length > 0) {
      // Actualización inmediata sin requestAnimationFrame para mejor respuesta en mobile
      updateSliderPosition(e.touches[0].clientX);
    }
  }, [updateSliderPosition]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    isTouchRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove, { passive: false });
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg touch-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {/* Imagen "Después" (fondo completo) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt={afterLabel}
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </div>

        {/* Imagen "Antes" (recortada según slider) */}
        <div
          ref={beforeImageRef}
          className="absolute inset-0 overflow-hidden will-change-[clip-path]"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Barra del slider */}
        <div
          ref={sliderRef}
          className={`absolute top-0 bottom-0 w-1 bg-charcoal/80 cursor-grab active:cursor-grabbing z-10 will-change-[left,transform] ${
            isDragging ? '' : 'transition-all duration-150'
          }`}
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          onMouseDown={handleMouseDown}
        >
          {/* Icono del slider */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-warm-white border-2 border-charcoal shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-charcoal"
            >
              {/* Flecha izquierda */}
              <path
                d="M6 4L4 6L6 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Flecha derecha */}
              <path
                d="M10 4L12 6L10 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Etiquetas */}
        <div className="absolute top-4 left-4 bg-charcoal/80 text-warm-white px-3 py-1.5 rounded-md text-sm font-medium backdrop-blur-sm">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 bg-charcoal/80 text-warm-white px-3 py-1.5 rounded-md text-sm font-medium backdrop-blur-sm">
          {afterLabel}
        </div>
      </div>
    </div>
  );
};
