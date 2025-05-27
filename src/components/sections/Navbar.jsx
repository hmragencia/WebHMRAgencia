import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/ad28893a-6404-474e-829f-ec3934cba166/96818857aa3c8a1dc5cd8d22330d2457.png";

  const navLinks = [
    { href: '#inicio', labelKey: 'navbar.home' },
    { href: '#quienes-somos', labelKey: 'navbar.about' },
    { href: '#servicios', labelKey: 'navbar.services' },
    { href: '#porque-elegirnos', labelKey: 'navbar.whyUs' },
    { href: '#contacto', labelKey: 'navbar.contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkColor = isScrolled || isOpen ? 'text-gray-700 hover:text-hmr-orange' : 'text-white hover:text-hmr-yellow';

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center">
              <img className="h-10 w-auto" src={logoUrl} alt="HMR Agencia Logo" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                className={`font-medium ${linkColor} transition-colors`}
              >
                {t(link.labelKey)}
              </a>
            ))}
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`px-2 py-1 ${linkColor} focus:outline-none`}>
                  <Globe size={20} className="mr-1" /> 
                  {language.toUpperCase()}
                  <ChevronDown size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white shadow-lg rounded-md border-gray-200">
                <DropdownMenuItem onClick={() => changeLanguage('es')} className="text-gray-700 hover:bg-gray-100 cursor-pointer">
                  {t('navbar.spanish')} (ES)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('en')} className="text-gray-700 hover:bg-gray-100 cursor-pointer">
                  {t('navbar.english')} (EN)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="md:hidden flex items-center">
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className={`px-2 py-1 mr-2 ${linkColor} focus:outline-none`}>
                    <Globe size={20} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white shadow-lg rounded-md border-gray-200">
                  <DropdownMenuItem onClick={() => {changeLanguage('es'); setIsOpen(false);}} className="text-gray-700 hover:bg-gray-100 cursor-pointer">
                    {t('navbar.spanish')} (ES)
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {changeLanguage('en'); setIsOpen(false);}} className="text-gray-700 hover:bg-gray-100 cursor-pointer">
                    {t('navbar.english')} (EN)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${isScrolled || isOpen ? 'text-gray-700' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white pb-4"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-hmr-orange block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;