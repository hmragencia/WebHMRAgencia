import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const heroBgUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/ad28893a-6404-474e-829f-ec3934cba166/c64482cbad8250b81875159fe8ae34d8.jpg";

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center text-white" style={{ backgroundImage: `url(${heroBgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div 
        className="relative z-10 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          {t('hero.title1')} <br className="hidden sm:block" />
          <span style={{ color: '#FFEB3B' }} className="text-hmr-yellow drop-shadow-lg">{t('hero.title2')}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            size="lg" 
            className="bg-hmr-orange text-white hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg"
            onClick={scrollToServices}
          >
            {t('hero.buttonServices')}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-hmr-blue-dark border-hmr-blue-dark hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg"
            onClick={scrollToContact}
          >
            <span className="text-gradient-blue font-semibold">{t('hero.buttonContact')}</span>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;