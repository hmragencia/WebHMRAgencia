
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CalendarDays, Lightbulb, Truck, Computer, Palette, Cpu } from 'lucide-react';

const services = [
  { name: 'Eventos Sociales', description: 'Creamos momentos inolvidables con planificación y ejecución impecable para tus eventos.', icon: <CalendarDays className="h-10 w-10 text-hmr-orange mb-4" /> },
  { name: 'Creatividad', description: 'Ideas innovadoras que capturan la esencia de tu marca y conectan con tu audiencia.', icon: <Lightbulb className="h-10 w-10 text-hmr-yellow mb-4" /> },
  { name: 'Cubrimiento y Logística', description: 'Soluciones logísticas integrales para asegurar el éxito de tus proyectos y eventos.', icon: <Truck className="h-10 w-10 text-hmr-green mb-4" /> },
  { name: 'Digital', description: 'Estrategias digitales efectivas para potenciar tu presencia online y alcanzar tus metas.', icon: <Computer className="h-10 w-10 text-hmr-blue-light mb-4" /> },
  { name: 'Branding', description: 'Construimos marcas sólidas y memorables que reflejan tu identidad y valores.', icon: <Palette className="h-10 w-10 text-hmr-purple mb-4" /> },
  { name: 'Tecnología', description: 'Implementamos soluciones tecnológicas avanzadas para optimizar procesos y experiencias.', icon: <Cpu className="h-10 w-10 text-hmr-red mb-4" /> },
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
          <h2 className="text-3xl md:text-4xl font-bold text-hmr-blue-dark">Nuestras Áreas de Servicio</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Soluciones integrales para llevar tu marca al siguiente nivel.</p>
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
                  {service.icon}
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
