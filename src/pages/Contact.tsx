import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Separator } from '../components/Separator';
import { FloatingContact } from '../components/FloatingContact';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
            Contacto
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo podemos hacerlo realidad.
            Estoy aquí para escuchar tus ideas y trabajar juntos en crear algo único.
          </p>
        </motion.div>
      </section>

      <Separator className="container mx-auto px-6 my-16" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-serif text-charcoal mb-6">Información de contacto</h2>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-charcoal/60 uppercase tracking-wider mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:hola@alejandrosantanatoglia.com"
                    className="text-charcoal hover:text-brass transition-colors"
                  >
                    hola@alejandrosantanatoglia.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-charcoal/60 uppercase tracking-wider mb-2">
                    Teléfono
                  </div>
                  <a
                    href="tel:+5491112345678"
                    className="text-charcoal hover:text-brass transition-colors"
                  >
                    +54 9 11 1234-5678
                  </a>
                </div>
                <div>
                  <div className="text-sm text-charcoal/60 uppercase tracking-wider mb-2">
                    Estudio
                  </div>
                  <p className="text-charcoal">
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>
            </div>

            <Separator variant="line" />

            <div>
              <h3 className="text-xl font-serif text-charcoal mb-4">Tomemos un café</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Prefiero las conversaciones cara a cara. Si estás en Buenos Aires,
                podemos encontrarnos en el estudio o en un café para hablar sobre tu proyecto.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="relative aspect-[4/3] bg-warm-gray rounded-lg overflow-hidden mt-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-charcoal/20 text-sm uppercase tracking-wider">
                  Mapa (placeholder)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-serif text-charcoal mb-6">Envíame un mensaje</h2>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-brass/10 border border-brass/30 rounded-lg text-charcoal"
              >
                <p className="font-medium">¡Mensaje enviado!</p>
                <p className="text-sm text-charcoal/70 mt-1">
                  Te responderé a la brevedad.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-charcoal/70 uppercase tracking-wider mb-2"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full px-4 py-3 bg-broken-white border ${
                    errors.name ? 'border-red-500' : 'border-warm-gray'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-brass focus:border-transparent transition-all`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-charcoal/70 uppercase tracking-wider mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full px-4 py-3 bg-broken-white border ${
                    errors.email ? 'border-red-500' : 'border-warm-gray'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-brass focus:border-transparent transition-all`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-charcoal/70 uppercase tracking-wider mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={6}
                  className={`w-full px-4 py-3 bg-broken-white border ${
                    errors.message ? 'border-red-500' : 'border-warm-gray'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-brass focus:border-transparent transition-all resize-none`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-charcoal text-warm-white rounded-full hover:bg-brass transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <FloatingContact />
    </>
  );
};

