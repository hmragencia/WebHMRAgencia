import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CalendarDays, Lightbulb, Truck, Computer, Palette, Cpu } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const serviceIcons = [
  <CalendarDays className="h-10 w-10 text-hmr-orange mb-4" />,
  <Lightbulb className="h-10 w-10 text-hmr-yellow mb-4" />,
  <Truck className="h-10 w-10 text-hmr-green mb-4" />,
  <Computer className="h-10 w-10 text-hmr-blue-light mb-4" />,
  <Palette className="h-10 w-10 text-hmr-purple mb-4" />,
  <Cpu className="h-10 w-10 text-hmr-red mb-4" />,
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const ServicesSection = () => {
  const { t } = useLanguage();
  const services = t('services.items');

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-hmr-blue-dark">{t('services.title')}</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.custom
              key={service.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col text-center hover:shadow-xl transition-shadow duration-300 border-gray-200 rounded-xl overflow-hidden">
                <CardHeader className="items-center pt-8">
                  {serviceIcons[index % serviceIcons.length]}
                  <CardTitle className="text-2xl text-hmr-blue-dark">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.custom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;