import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const InstitutionalSection = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="quienes-somos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-hmr-blue-dark mb-6">
              {t('institutional.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('institutional.text')}
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-hmr-blue-dark to-hmr-blue-light text-white hover:opacity-90 transition-opacity duration-300 px-8 py-3 text-lg"
              onClick={scrollToContact}
            >
              {t('institutional.button')}
            </Button>
          </div>
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img alt="Imagen abstracta y creativa representando innovación y tecnología" className="rounded-lg shadow-xl max-w-md w-full h-auto object-cover" src="https://images.unsplash.com/photo-1701509055024-2a76750d7663" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstitutionalSection;