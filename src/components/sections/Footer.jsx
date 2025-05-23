import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/ad28893a-6404-474e-829f-ec3934cba166/7d823a99ba806ed80aaa0cb807350d3f.png";
  const currentYear = new Date().getFullYear();

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
            <p className="text-sm">Transformando ideas en experiencias inolvidables.</p>
          </div>
          
          <div>
            <span className="font-semibold text-white block mb-2">Enlaces Rápidos</span>
            <ul className="space-y-1">
              <li><a href="#inicio" className="hover:text-hmr-yellow transition-colors">Inicio</a></li>
              <li><a href="#quienes-somos" className="hover:text-hmr-yellow transition-colors">Quiénes Somos</a></li>
              <li><a href="#servicios" className="hover:text-hmr-yellow transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-hmr-yellow transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-white block mb-2">Contacto</span>
            <p className="text-sm">
              <a href="mailto:contacto@hmragencia.com" className="hover:text-hmr-yellow transition-colors">
                contacto@hmragencia.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} HMR Agencia. Todos los derechos reservados.</p>
          <p className="mt-1">Diseñado con <span className="text-hmr-red">&hearts;</span> y creatividad.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;