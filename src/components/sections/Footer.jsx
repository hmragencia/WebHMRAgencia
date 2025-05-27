import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const footerLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/ad28893a-6404-474e-829f-ec3934cba166/7d823a99ba806ed80aaa0cb807350d3f.png";
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#inicio', labelKey: 'navbar.home' },
    { href: '#quienes-somos', labelKey: 'navbar.about' },
    { href: '#servicios', labelKey: 'navbar.services' },
    { href: '#contacto', labelKey: 'navbar.contact' },
  ];


  return (
    <motion.footer 
      className="bg-hmr-blue-dark text-gray-300 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <img src={footerLogoUrl} alt="HMR Agencia Logo" className="h-12 mx-auto md:mx-0 mb-4" />
            <p className="text-sm">{t('footer.tagline')}</p>
          </div>
          
          <div>
            <span className="font-semibold text-white block mb-2">{t('footer.quickLinks')}</span>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.labelKey}>
                  <a href={link.href} className="hover:text-hmr-yellow transition-colors">
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-white block mb-2">{t('footer.contact')}</span>
            <p className="text-sm">
              <a href="mailto:contacto@hmragencia.com" className="hover:text-hmr-yellow transition-colors">
                contacto@hmragencia.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} HMR Agencia. {t('footer.rights')}</p>
          <p className="mt-1">{t('footer.designedWith')} <span className="text-hmr-red">&hearts;</span> {t('footer.andCreativity')}</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;